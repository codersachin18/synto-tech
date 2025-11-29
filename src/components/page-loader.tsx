
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1000); 

    return () => {
        clearTimeout(timer);
        setLoading(false);
    };
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] w-full h-1.5`}
    >
      <div className="h-full w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient" />
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 2s ease infinite;
        }
      `}</style>
    </div>
  );
}
