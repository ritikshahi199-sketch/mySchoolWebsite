"use client";

import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import Loader from "@/Component/Loader";
import { LanguageProvider } from "@/context/LanguageContext";
import { Suspense, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function RootContent({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("reloaded", "true");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    if (sessionStorage.getItem("reloaded") === "true" && pathname !== "/") {
      sessionStorage.removeItem("reloaded");
      router.replace("/");
    }
  }, [pathname, router]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <LanguageProvider>
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootContent>{children}</RootContent>
      </body>
    </html>
  );
}