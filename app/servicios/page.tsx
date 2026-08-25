import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { ServicesCatalog } from "./services-catalog";

export const metadata: Metadata = {
  title: "Servicios para hogar, vehículo y empresas | TodosServicios PY",
  description: "Encontrá servicios de electricidad, refrigeración, reparaciones, mantenimiento, construcción y más con atención centralizada en TodosServicios PY.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-soft pb-10 text-[#17212b]">
      <header className="border-b border-white/10 bg-ink text-white">
        <div className="container-shell flex min-h-16 items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-white"><Wrench size={18} /></span>
            <span className="text-[15px] font-semibold tracking-[-.03em] sm:text-lg">TODOSERVICIOS <span className="text-brand-400">PY</span></span>
          </Link>
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-3.5 text-[13px] text-white/90 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"><ArrowLeft size={16} /> Inicio</Link>
        </div>
      </header>

      <section className="border-b border-border bg-white py-8 sm:py-11">
        <div className="container-shell">
          <p className="mb-2 text-[12px] font-medium text-brand-600">Catálogo de servicios</p>
          <h1 className="max-w-3xl text-[34px] font-normal leading-[1.08] tracking-[-.04em] sm:text-[44px]">Todos los servicios</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-6 text-muted">Encontrá el servicio que necesitás o contanos qué querés resolver.</p>
        </div>
      </section>

      <section className="py-6 sm:py-8">
        <div className="container-shell"><ServicesCatalog /></div>
      </section>
    </main>
  );
}
