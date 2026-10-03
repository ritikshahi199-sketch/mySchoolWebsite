"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Loader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // 0.6 seconds smooth transition loader

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md transition-opacity duration-300">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-14 h-14 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white text-sm font-bold tracking-widest uppercase animate-pulse">
          S.P. Public School...
        </span>
      </div>
    </div>
  );
}