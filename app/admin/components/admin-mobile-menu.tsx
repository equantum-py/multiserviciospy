"use client";

import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { AdminNav } from "./admin-nav";

export function AdminMobileMenu() {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-lg text-[#102A43] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 md:hidden" aria-label="Abrir navegación administrativa"><Menu size={22} /></button>
    {open && <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="Navegación administrativa">
      <button className="absolute inset-0 bg-slate-950/35" onClick={() => setOpen(false)} aria-label="Cerrar menú" />
      <aside className="relative flex h-full w-[min(84vw,320px)] flex-col bg-white p-5 shadow-2xl">
        <div className="mb-7 flex items-center justify-between"><div className="flex items-center gap-2 text-[#102A43]"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#102A43] text-white"><Wrench size={18} /></span><strong className="text-sm">TODOSSERVICIOS <span className="text-[#F97316]">PY</span></strong></div><button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-lg hover:bg-slate-100" aria-label="Cerrar navegación"><X size={21} /></button></div>
        <AdminNav onNavigate={() => setOpen(false)} />
      </aside>
    </div>}
  </>;
}
