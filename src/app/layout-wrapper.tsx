"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Suspense } from "react";
import { PageLoader } from "@/components/page-loader";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotFound = pathname === "/404";
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <>
      <Suspense>
        <PageLoader />
      </Suspense>

      {!isNotFound && !isAdminPage && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isNotFound && !isAdminPage && <Footer />}
    </>
  );
}
