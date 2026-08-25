import { Wrench } from "lucide-react";
import { AdminNav } from "./components/admin-nav";
import { AdminMobileMenu } from "./components/admin-mobile-menu";

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-screen bg-[#F6F8FA] text-[#17212B]"><aside className="fixed inset-y-0 left-0 hidden w-[260px] border-r border-[#E2E8F0] bg-white p-5 md:flex md:flex-col"><div className="mb-8"><div className="flex items-center gap-2.5 text-[#102A43]"><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#102A43] text-white"><Wrench size={19} /></span><strong className="text-[15px] tracking-[-.03em]">TODOSSERVICIOS <span className="text-[#F97316]">PY</span></strong></div><p className="mt-3 pl-0.5 text-xs font-medium text-slate-500">Panel administrativo</p></div><AdminNav /><p className="mt-auto rounded-lg bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">Preview interno · La autenticación admin todavía está pendiente.</p></aside><div className="min-h-screen md:pl-[260px]"><header className="sticky top-0 z-40 flex h-16 items-center border-b border-[#E2E8F0] bg-white/95 px-3 backdrop-blur sm:px-6"><AdminMobileMenu /><div className="ml-1 md:ml-0"><p className="text-sm font-semibold text-[#102A43] md:hidden">TODOSSERVICIOS <span className="text-[#F97316]">PY</span></p><p className="hidden text-sm text-slate-500 md:block">Administración de contenido</p></div><span className="ml-auto rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">Preview</span></header><main className="mx-auto w-full max-w-[1440px] p-4 sm:p-6 lg:p-8">{children}</main></div></div>;
}
