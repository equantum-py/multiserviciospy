import {
  ArrowRight,
  BadgeCheck,
  Car,
  ChevronRight,
  ClipboardCheck,
  Hammer,
  Headphones,
  Home,
  Leaf,
  MapPin,
  MessageCircle,
  Paintbrush,
  Search,
  ShieldCheck,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";
import { MobileMenu } from "./components/mobile-menu";
import { siteConfig } from "../lib/site-config";

const categories = [
  { name: "Automotor", icon: Car },
  { name: "Electricidad", icon: Zap },
  { name: "Refrigeración", icon: Snowflake },
  { name: "Jardinería", icon: Leaf },
  { name: "Chapería y pintura", icon: Paintbrush },
  { name: "Hogar", icon: Home },
  { name: "Reparaciones", icon: Wrench },
  { name: "Construcción", icon: Hammer },
];

const services = [
  {
    title: "Electricidad automotriz",
    category: "Automotor",
    description: "Diagnóstico y soluciones eléctricas para vehículos según la necesidad.",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=82",
    action: "Solicitar atención",
  },
  {
    title: "Aire acondicionado",
    category: "Refrigeración",
    description: "Instalación, revisión y mantenimiento. Evaluamos el servicio antes de coordinar.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=82",
    action: "Solicitar atención",
  },
  {
    title: "Jardinería y mantenimiento",
    category: "Jardinería",
    description: "Contanos qué necesitás y preparamos una cotización según el trabajo.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=82",
    action: "Pedir cotización",
  },
  {
    title: "Electricidad para el hogar",
    category: "Hogar",
    description: "Atención para instalaciones, fallas, mantenimiento y necesidades eléctricas.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=82",
    action: "Solicitar atención",
  },
  {
    title: "Chapería y pintura",
    category: "Automotor",
    description: "Evaluamos el trabajo y coordinamos una cotización de acuerdo al vehículo.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=82",
    action: "Pedir cotización",
  },
  {
    title: "Reparaciones generales",
    category: "Hogar",
    description: "Contanos el problema y nuestro equipo te orienta sobre la solución adecuada.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=82",
    action: "Solicitar atención",
  },
];

const steps = [
  {
    number: "01",
    title: "Contanos qué necesitás",
    text: "Elegí un servicio o explicanos qué problema necesitás resolver.",
  },
  {
    number: "02",
    title: "Recibí atención y cotización",
    text: "Revisamos tu solicitud, pedimos la información necesaria y preparamos la solución correspondiente.",
  },
  {
    number: "03",
    title: "Coordinamos el servicio",
    text: `Confirmás la propuesta y ${siteConfig.brandName} coordina la atención con vos.`,
  },
];

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500 text-ink">
      <Wrench size={18} strokeWidth={2.2} />
    </span>
    <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.03em] min-[360px]:text-[16px] sm:text-lg">
      TODOSERVICIOS <span className="text-brand-600">PY</span>
    </span>
  </span>
);

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <header className="border-b border-black/[.06] bg-white">
        <div className="container-shell flex h-16 items-center justify-between gap-3 sm:h-[76px]">
          <a href="#inicio" aria-label={`${siteConfig.brandName} - Inicio`} className={focusRing}><Logo /></a>
          <nav className="hidden items-center gap-8 text-[13px] font-medium lg:flex" aria-label="Navegación principal">
            <a className={`hover:text-brand-600 ${focusRing}`} href="#categorias">Categorías</a>
            <a className={`hover:text-brand-600 ${focusRing}`} href="#servicios">Servicios</a>
            <a className={`hover:text-brand-600 ${focusRing}`} href="#como-funciona">Cómo funciona</a>
            <a className={`hover:text-brand-600 ${focusRing}`} href="#prestadores">Prestadores</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#servicios" className={`px-4 py-2 text-[13px] font-medium ${focusRing}`}>Ver servicios</a>
            <a href="#solicitud" className={`rounded-full bg-brand-500 px-5 py-2.5 text-[13px] font-semibold text-ink ${focusRing}`}>Solicitar atención</a>
          </div>
          <MobileMenu />
        </div>
      </header>

      <section id="inicio" className="bg-[#fbf8f1] py-8 min-[390px]:py-9 sm:py-14 lg:py-12">
        <div className="container-shell grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[.06] bg-white px-3 py-1.5 text-[11px] text-black/55 shadow-sm">
              <Headphones size={14} className="text-brand-600" /> Atención centralizada
            </div>
            <h1 className="max-w-[620px] text-[34px] font-normal leading-[1.08] tracking-[-0.04em] text-ink min-[390px]:text-[37px] sm:text-5xl lg:text-[60px]">
              Todos los servicios que necesitás, <span className="text-brand-600">en un solo lugar.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[13px] leading-[1.65] text-black/55 min-[390px]:text-sm sm:text-[15px]">
              Contanos qué necesitás y nosotros te ayudamos a resolverlo. Recibí atención, cotización y coordinación del servicio desde un solo lugar.
            </p>

            <form id="solicitud" action="#atencion-central" className="mt-6 grid gap-2 rounded-2xl bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,.08)] sm:grid-cols-[1fr_170px_auto]">
              <label className="flex min-h-12 items-center gap-3 rounded-xl px-3">
                <span className="sr-only">¿Qué necesitás resolver?</span>
                <Search size={17} className="shrink-0 text-black/40" />
                <input name="necesidad" placeholder="¿Qué necesitás resolver?" className={`min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-black/40 ${focusRing}`} />
              </label>
              <label className="flex min-h-12 items-center gap-2 rounded-xl border border-black/[.06] px-3 sm:rounded-none sm:border-y-0 sm:border-r-0 sm:border-l">
                <span className="sr-only">Tu ciudad o ubicación</span>
                <MapPin size={16} className="shrink-0 text-brand-600" />
                <select name="zona" defaultValue="" className={`w-full bg-transparent text-[13px] text-ink outline-none ${focusRing}`}>
                  <option value="" disabled>Tu ciudad / ubicación</option>
                  <option>Asunción</option><option>Central</option><option>San Lorenzo</option><option>Luque</option><option>Otra ciudad</option>
                </select>
              </label>
              <button type="submit" className={`flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-500 px-6 text-[13px] font-semibold text-ink transition hover:bg-brand-400 active:scale-[.99] ${focusRing}`}>
                Solicitar atención
              </button>
            </form>

            <a href="#atencion-central" className={`mt-4 flex min-h-11 items-center gap-3 rounded-xl border border-black/[.06] bg-white px-3 text-[12px] text-black/60 sm:hidden ${focusRing}`}>
              <MessageCircle size={17} className="text-brand-600" />
              <span><strong className="font-semibold text-ink">Atención central</strong> · Un solo contacto para todos tus servicios</span>
            </a>

            <div className="mt-5 grid grid-cols-1 gap-2 text-[12px] text-black/55 min-[390px]:grid-cols-3 min-[390px]:gap-3 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              <span className="flex items-center gap-2"><Headphones size={15} className="shrink-0 text-brand-600" /> Atención centralizada</span>
              <span className="flex items-center gap-2"><ClipboardCheck size={15} className="shrink-0 text-brand-600" /> Cotización del servicio</span>
              <span className="flex items-center gap-2"><BadgeCheck size={15} className="shrink-0 text-brand-600" /> Coordinamos por vos</span>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[570px] lg:block">
            <div className="aspect-[1.3/1] overflow-hidden rounded-[28px]">
              <img width="1200" height="920" src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=86" alt={`Servicio automotriz coordinado por ${siteConfig.brandName}`} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,.12)]">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-green-100 text-green-700"><BadgeCheck size={19} /></span>
                <div><p className="mb-0 text-[11px] text-green-700">Atención centralizada</p><p className="mb-0 text-[13px] font-semibold">Un solo contacto para todos tus servicios</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="atencion-central" className="scroll-mt-20 border-y border-black/[.05] bg-white py-5">
        <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff3bf] text-ink"><MessageCircle size={19} /></span>
            <div><p className="mb-1 text-[11px] font-semibold uppercase tracking-[.12em] text-brand-600">Atención central</p><p className="mb-0 text-[15px] font-medium">{siteConfig.centralAttentionLabel}</p></div>
          </div>
          <p className="max-w-md text-[13px] leading-5 text-black/55">Centralizamos la atención, cotización y coordinación de tus servicios desde un solo lugar.</p>
        </div>
      </section>

      <section id="categorias" className="scroll-mt-20 py-10 sm:py-16">
        <div className="container-shell">
          <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
            <div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600">Explorá por categoría</p><h2 className="text-[24px] font-normal tracking-[-0.025em] sm:text-[30px]">¿Qué necesitás resolver?</h2></div>
            <a href="#servicios" className={`hidden items-center gap-1 text-[12px] sm:flex ${focusRing}`}>Ver servicios <ChevronRight size={15} /></a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map(({ name, icon: Icon }) => (
              <a key={name} href="#solicitud" className={`group flex min-h-[116px] flex-col items-center justify-center gap-3 rounded-2xl border border-black/[.07] bg-white p-3 text-center transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-sm active:scale-[.99] ${focusRing}`}>
                <Icon size={25} strokeWidth={1.6} /><span className="text-[13px] font-medium leading-tight">{name}</span>
              </a>
            ))}
          </div>
          <a href="#solicitud" className={`mt-5 flex min-h-14 flex-col justify-center gap-1 rounded-2xl bg-[#fbf8f1] px-5 py-3 transition hover:bg-[#f7f2e8] sm:flex-row sm:items-center sm:justify-between ${focusRing}`}>
            <span><span className="block text-[14px] font-medium">¿No encontrás lo que necesitás?</span><span className="mt-0.5 block text-[12px] text-black/50">También atendemos necesidades fuera de las categorías visibles.</span></span>
            <span className="mt-1 inline-flex items-center gap-2 text-[12px] font-semibold sm:mt-0">Contanos qué querés resolver <ArrowRight size={15} /></span>
          </a>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-20 pb-10 sm:pb-16">
        <div className="container-shell">
          <div className="mb-5 sm:mb-6"><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600">Servicios frecuentes</p><h2 className="text-[24px] font-normal tracking-[-0.025em] sm:text-[30px]">Podemos ayudarte con estas necesidades</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a key={service.title} href="#solicitud" className={`group overflow-hidden rounded-2xl border border-black/[.07] bg-white transition hover:-translate-y-0.5 hover:shadow-md active:scale-[.995] ${focusRing}`}>
                <div className="aspect-[2/1] overflow-hidden bg-black/[.03] sm:aspect-[2.25/1]"><img loading="lazy" width="900" height="400" src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.015]" /></div>
                <div className="p-4">
                  <span className="rounded-full bg-[#f7f3e8] px-2.5 py-1 text-[9px] font-semibold uppercase">{service.category}</span>
                  <h3 className="mt-3 text-[16px] font-semibold leading-snug">{service.title}</h3>
                  <p className="mt-2 text-[12px] leading-5 text-black/50 sm:min-h-[40px]">{service.description}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-[11px] text-black/40"><MapPin size={13} /> Cobertura según zona</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/[.05] pt-4"><span className="text-[12px] font-semibold">{service.action}</span><span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white"><ArrowRight size={15} /></span></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-14">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          <div className="rounded-[24px] bg-ink p-6 text-white sm:p-9">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.15em] text-brand-400">Necesidad rápida</p>
            <h2 className="text-[24px] font-normal tracking-tight sm:text-[30px]">¿Necesitás resolver algo hoy?</h2>
            <p className="mt-3 max-w-lg text-[13px] leading-6 text-white/70">Electricidad, técnicos, reparaciones y problemas cotidianos. Contanos qué pasó y te ayudamos a gestionar la atención.</p>
            <a href="#solicitud" className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[12px] font-medium text-ink ${focusRing}`}>Solicitar atención <ArrowRight size={15} /></a>
          </div>
          <div className="rounded-[24px] bg-[#fff0b8] p-6 sm:p-9">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.15em] text-[#8c5d00]">Trabajo con evaluación</p>
            <h2 className="text-[24px] font-normal tracking-tight sm:text-[30px]">¿Necesitás cotizar un trabajo?</h2>
            <p className="mt-3 max-w-lg text-[13px] leading-6 text-black/60">Construcción, pintura, jardinería, mantenimiento y trabajos a medida. Revisamos la necesidad antes de coordinar.</p>
            <a href="#solicitud" className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[12px] font-medium ${focusRing}`}>Pedir cotización <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-20 bg-[#fbfaf7] py-10 sm:py-14">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.15em] text-brand-600">Simple y acompañado</p><h2 className="text-[24px] font-normal tracking-tight sm:text-[30px]">Vos contás la necesidad. Nosotros gestionamos la solución.</h2></div>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-black/[.05] bg-white p-5 sm:p-6">
                <span className="text-[12px] font-semibold text-brand-600">{step.number}</span>
                <h3 className="mt-3 text-[15px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-black/50">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container-shell">
          <div className="mb-6 text-center"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.15em] text-brand-600">Por qué {siteConfig.brandName}</p><h2 className="text-[24px] font-normal tracking-tight sm:text-[30px]">Un solo contacto. Múltiples soluciones.</h2></div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-black/[.06] p-5"><Headphones size={20} className="text-brand-600" /><h3 className="mt-4 text-[14px] font-semibold">Atención centralizada</h3><p className="mt-2 text-[12px] leading-5 text-black/50">No necesitás buscar diferentes proveedores por tu cuenta.</p></div>
            <div className="rounded-2xl border border-black/[.06] p-5"><ClipboardCheck size={20} className="text-brand-600" /><h3 className="mt-4 text-[14px] font-semibold">Cotización clara</h3><p className="mt-2 text-[12px] leading-5 text-black/50">Recibís información del servicio antes de coordinar el trabajo.</p></div>
            <div className="rounded-2xl border border-black/[.06] p-5"><ShieldCheck size={20} className="text-brand-600" /><h3 className="mt-4 text-[14px] font-semibold">Coordinación</h3><p className="mt-2 text-[12px] leading-5 text-black/50">Centralizamos la comunicación y organización del servicio.</p></div>
          </div>
        </div>
      </section>

      <section id="prestadores" className="scroll-mt-20 pb-12 sm:pb-14">
        <div className="container-shell rounded-[24px] bg-[#f0f5fa] px-5 py-6 sm:px-9 sm:py-7">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto]">
            <div><p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-black/45">Red de prestadores</p><h2 className="text-[21px] font-normal tracking-tight sm:text-[26px]">¿Sos profesional o tenés una empresa de servicios?</h2><p className="mt-2 text-[12px] leading-5 text-black/50">Formá parte de nuestra red de prestadores y trabajá coordinadamente con {siteConfig.brandName}.</p></div>
            <a href="#atencion-central" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-center text-[12px] font-medium text-white ${focusRing}`}>Quiero trabajar con {siteConfig.brandName} <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[.06] bg-white py-8 sm:py-9">
        <div className="container-shell grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div><a href="#inicio" className={focusRing}><Logo /></a><p className="mt-4 text-[13px] text-black/50">Central integral de servicios para Paraguay.</p><p className="mt-3 text-[12px] text-black/40">© 2026 {siteConfig.brandName}</p></div>
          <div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.12em] text-black/40">Navegación</p><div className="space-y-2.5 text-[13px] text-black/55"><p><a className={focusRing} href="#categorias">Categorías</a></p><p><a className={focusRing} href="#servicios">Servicios</a></p><p><a className={focusRing} href="#como-funciona">Cómo funciona</a></p><p><a className={focusRing} href="#prestadores">Prestadores</a></p></div></div>
          <div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.12em] text-black/40">Atención</p><p className="text-[13px] leading-5 text-black/55">Un solo contacto para consultas, evaluación, cotización y coordinación de servicios.</p></div>
        </div>
      </footer>

      <a href="#solicitud" className={`fixed left-4 right-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-5 text-[13px] font-semibold text-ink shadow-[0_10px_30px_rgba(0,0,0,.18)] [bottom:calc(1rem+env(safe-area-inset-bottom))] sm:hidden ${focusRing}`}>
        Solicitar atención <ArrowRight size={16} />
      </a>
    </main>
  );
}
