"use client";

import { usePathname } from "next/navigation";
import { Wrench } from "lucide-react";
import { AdminLogoutButton } from "./admin-logout-button";
import { AdminMobileMenu } from "./admin-mobile-menu";
import { AdminNav } from "./admin-nav";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return <>{children}</>;
  return <div className="min-h-screen bg-[#F6F8FA] text-[#17212B]"><aside className="fixed inset-y-0 left-0 hidden w-[260px] border-r border-[#E2E8F0] bg-white p-5 md:flex md:flex-col"><div className="mb-8"><div className="flex items-center gap-2.5 text-[#102A43]"><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#102A43] text-white"><Wrench size={19} /></span><strong className="text-[15px] tracking-[-.03em]">TODOSSERVICIOS <span className="text-[#F97316]">PY</span></strong></div><p className="mt-3 pl-0.5 text-xs font-medium text-slate-500">Panel administrativo</p></div><AdminNav /><div className="mt-auto"><AdminLogoutButton /></div></aside><div className="min-h-screen md:pl-[260px]"><header className="sticky top-0 z-40 flex h-16 items-center border-b border-[#E2E8F0] bg-white/95 px-3 backdrop-blur sm:px-6"><AdminMobileMenu /><div className="ml-1 md:ml-0"><p className="text-sm font-semibold text-[#102A43] md:hidden">TODOSSERVICIOS <span className="text-[#F97316]">PY</span></p><p className="hidden text-sm text-slate-500 md:block">Administración de contenido</p></div><div className="ml-auto flex items-center gap-2"><span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 sm:inline">Sesión activa</span><AdminLogoutButton /></div></header><main className="mx-auto w-full max-w-[1440px] p-4 sm:p-6 lg:p-8">{children}</main></div></div>;
}
