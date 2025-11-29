import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { LayoutWrapper } from "./layout-wrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Synto Tech | App & Software Solutions",
  description: "Synto Tech develops innovative apps, custom software, and modern web solutions to elevate your digital presence.",
  metadataBase: new URL('https://syntotech.com'),
  openGraph: {
    title: 'Synto Tech | App & Software Solutions',
    description: 'Synto Tech develops innovative apps, custom software, and modern web solutions to elevate your digital presence.',
    url: 'https://syntotech.com',
    siteName: 'Synto Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synto Tech | App & Software Solutions',
    description: 'Synto Tech develops innovative apps, custom software, and modern web solutions to elevate your digital presence.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
