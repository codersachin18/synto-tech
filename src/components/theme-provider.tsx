"use client";

import * as React from "react";
import { type ThemeProviderProps } from "next-themes/dist/types";

// A simple implementation of a theme provider to avoid adding `next-themes` package as per instructions.
const ThemeContext = React.createContext<{
  theme: string;
  setTheme: (theme: string) => void;
} | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = 'system' }: Omit<ThemeProviderProps, 'forcedTheme' | 'attribute'> & { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState(() => defaultTheme === 'system' ? 'light' : defaultTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  React.useEffect(() => {
    if (!mounted) return;
    
    let initialTheme: string;
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        initialTheme = storedTheme;
      } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        initialTheme = defaultTheme === 'system' ? systemTheme : defaultTheme;
      }
    } catch (e) {
      initialTheme = defaultTheme === 'system' ? 'light' : defaultTheme;
    }
    setTheme(initialTheme);
  }, [mounted, defaultTheme]);


  React.useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    let effectiveTheme = theme;
    if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    root.classList.add(effectiveTheme);
    try {
      // Don't save 'system' to storage, let it be determined on next load.
      if (theme !== 'system') {
        localStorage.setItem('theme', theme);
      } else {
        localStorage.removeItem('theme');
      }
    } catch (e) {
      // Silently fail
    }
  }, [theme, mounted]);

  const value = {
    theme: mounted ? theme : defaultTheme,
    setTheme: (newTheme: string) => {
      if(mounted) setTheme(newTheme);
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
