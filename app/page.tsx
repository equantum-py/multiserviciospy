import {
  ArrowRight,
  BadgeCheck,
  Car,
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

const quickLinks = [
  "Electricidad",
  "Aire acondicionado",
  "Automotor",
  "Jardinería",
  "Reparaciones",
];

// TEMPORARY DEVELOPMENT PHOTOGRAPHY.
// Replace these with real TodosServicios PY photography before the final brand launch.
// Direction: real people working, natural light, warm-neutral color, close action framing.
const featuredServices = [
  {
    title: "Electricidad automotriz",
    text: "Diagnóstico y soluciones eléctricas para vehículos.",
    type: "Atención rápida",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=82",
    position: "center",
  },
  {
    title: "Aire acondicionado",
    text: "Instalación, revisión y mantenimiento del equipo.",
    type: "Servicio destacado",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=82",
    position: "center",
  },
  {
    title: "Jardinería y mantenimiento",
    text: "Evaluamos el trabajo y preparamos la cotización.",
    type: "Con evaluación",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=82",
    position: "center",
  },
];

const compactServices = [
  {
    title: "Electricidad para el hogar",
    text: "Instalaciones · fallas · mantenimiento",
    type: "Atención rápida",
    icon: Zap,
  },
  {
    title: "Reparaciones generales",
    text: "Arreglos y mantenimiento cotidiano",
    type: "Atención rápida",
    icon: Wrench,
  },
  {
    title: "Chapería y pintura",
    text: "Evaluación y cotización según el trabajo",
    type: "Con evaluación",
    icon: Paintbrush,
  },
];

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500 text-ink">
      <Wrench size={18} strokeWidth={2} />
    </span>
    <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-.03em] min-[390px]:text-base sm:text-lg">
      TODOSERVICIOS <span className="text-brand-400">PY</span>
    </span>
  </span>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f3f5f2] pb-20 sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink text-white">
        <div className="container-shell flex h-16 items-center justify-between gap-3 sm:h-[68px]">
          <a href="#inicio" aria-label={`${siteConfig.brandName} - Inicio`} className={focus}><Logo /></a>
          <nav className="hidden items-center gap-7 text-[13px] text-white/75 lg:flex" aria-label="Navegación principal">
            <a className={`transition hover:text-white ${focus}`} href="#categorias">Servicios</a>
            <a className={`transition hover:text-white ${focus}`} href="#destacados">Destacados</a>
            <a className={`transition hover:text-white ${focus}`} href="#como-funciona">Cómo funciona</a>
            <a className={`transition hover:text-white ${focus}`} href="#prestadores">Prestadores</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#categorias" className={`px-3 py-2 text-[13px] text-white/75 transition hover:text-white ${focus}`}>Ver servicios</a>
            <a href="#solicitud" className={`rounded-lg bg-brand-500 px-5 py-2.5 text-[13px] font-semibold text-ink transition hover:bg-brand-400 ${focus}`}>Solicitar atención</a>
          </div>
          <MobileMenu />
        </div>
      </header>

      <section id="inicio" className="border-b border-black/[.06] bg-ink text-white">
        <div className="container-shell grid gap-6 py-7 sm:py-9 lg:grid-cols-[1.2fr_.8fr] lg:items-stretch lg:gap-8 lg:py-10">
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2 text-[12px] text-white/65">
              <Headphones size={15} className="text-brand-400" /> Central integral de servicios
            </div>
            <h1 className="max-w-3xl text-[32px] font-normal leading-[1.08] tracking-[-.04em] min-[390px]:text-[35px] sm:text-[46px] lg:text-[50px]">
              Todos los servicios que necesitás, <span className="text-brand-400">en un solo lugar.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-[14px] leading-6 text-white/70 sm:text-[15px]">
              Contanos qué necesitás. Atendemos, evaluamos, cotizamos y coordinamos la solución.
            </p>

            <form id="solicitud" action="#atencion-central" className="mt-5 grid gap-2 rounded-xl bg-white p-2 text-ink sm:grid-cols-[1fr_190px_auto]">
              <label className="flex min-h-[52px] items-center gap-3 rounded-lg px-3">
                <span className="sr-only">¿Qué necesitás resolver?</span>
                <Search size={18} className="shrink-0 text-black/40" />
                <input name="necesidad" placeholder="¿Qué necesitás resolver?" className={`min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-black/45 ${focus}`} />
              </label>
              <label className="flex min-h-[52px] items-center gap-2 rounded-lg border border-black/[.07] px-3 sm:rounded-none sm:border-y-0 sm:border-r-0 sm:border-l">
                <span className="sr-only">Tu ciudad o ubicación</span>
                <MapPin size={17} className="shrink-0 text-brand-600" />
                <select name="zona" defaultValue="" className={`w-full bg-transparent text-[14px] outline-none ${focus}`}>
                  <option value="" disabled>Tu ubicación</option>
                  <option>Asunción</option><option>Central</option><option>San Lorenzo</option><option>Luque</option><option>Otra ciudad</option>
                </select>
              </label>
              <button type="submit" className={`min-h-[52px] rounded-lg bg-brand-500 px-6 text-[14px] font-semibold text-ink transition hover:bg-brand-400 active:scale-[.99] ${focus}`}>
                Solicitar atención
              </button>
            </form>

            <div className="mt-5">
              <p className="mb-2.5 text-[12px] font-medium text-white/60">Accesos rápidos</p>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((name) => (
                  <a key={name} href="#solicitud" className={`min-h-10 rounded-full border border-white/25 bg-white/[.09] px-3.5 py-2.5 text-[13px] text-white/90 transition hover:border-white/50 hover:bg-white/[.14] active:bg-white/[.18] ${focus}`}>
                    {name}
                  </a>
                ))}
                <a href="#categorias" className={`min-h-10 rounded-full border border-brand-400/60 px-3.5 py-2.5 text-[13px] font-medium text-brand-400 transition hover:bg-brand-400 hover:text-ink ${focus}`}>
                  Más servicios
                </a>
              </div>
            </div>
          </div>

          <aside className="hidden lg:grid lg:grid-rows-[1fr_auto] lg:gap-3">
            <div className="relative min-h-[250px] overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=82"
                srcSet="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=82 1000w"
                sizes="(min-width: 1024px) 34vw, 0px"
                alt="Profesional realizando un trabajo de servicio"
                width="1000"
                height="750"
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/55 px-5 py-4">
                <p className="mb-0 text-[13px] text-white/90">Una sola atención para distintas necesidades.</p>
              </div>
            </div>
            <a href="#atencion-central" className={`flex min-h-[74px] items-center justify-between rounded-xl bg-white p-4 text-ink transition hover:bg-[#f8faf7] ${focus}`}>
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#fff2b8]"><MessageCircle size={19} /></span>
                <span><strong className="block text-[14px] font-semibold">Atención central</strong><span className="text-[13px] text-black/60">Un número. Una atención. Todos los servicios.</span></span>
              </span>
              <ArrowRight size={17} />
            </a>
          </aside>
        </div>
      </section>

      <section className="py-5 sm:py-6">
        <div className="container-shell grid gap-3 md:grid-cols-2">
          <a href="#solicitud" className={`group flex min-h-[132px] flex-col justify-between rounded-xl bg-white p-5 ring-1 ring-black/[.07] transition hover:ring-black/20 sm:p-6 ${focus}`}>
            <div>
              <p className="mb-1.5 text-[12px] font-medium text-brand-600">Necesito ayuda ahora</p>
              <h2 className="text-[21px] font-normal tracking-tight sm:text-[23px]">¿Necesitás resolver algo hoy?</h2>
              <p className="mt-1.5 text-[14px] leading-5 text-black/60">Contanos el problema y gestionamos la atención.</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold">Solicitar atención <ArrowRight size={16} /></span>
          </a>
          <a href="#solicitud" className={`group flex min-h-[132px] flex-col justify-between rounded-xl bg-[#fff1b8] p-5 ring-1 ring-[#d8aa1f] transition hover:ring-[#a77e00] sm:p-6 ${focus}`}>
            <div>
              <p className="mb-1.5 text-[12px] font-medium text-[#775600]">Trabajo con evaluación</p>
              <h2 className="text-[21px] font-normal tracking-tight sm:text-[23px]">¿Necesitás cotizar un trabajo?</h2>
              <p className="mt-1.5 text-[14px] leading-5 text-black/65">Describí lo que necesitás y preparamos la evaluación.</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold">Pedir cotización <ArrowRight size={16} /></span>
          </a>
        </div>
      </section>

      <section id="categorias" className="scroll-mt-20 pb-7 sm:pb-9">
        <div className="container-shell">
          <div className="mb-4">
            <p className="mb-1 text-[12px] font-medium text-brand-600">Explorar servicios</p>
            <h2 className="text-[24px] font-normal tracking-[-.025em] sm:text-[28px]">Encontrá la solución que necesitás</h2>
            <p className="mt-1.5 text-[14px] text-black/60">Si todavía no sabés qué solicitar, empezá por una categoría.</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map(({ name, icon: Icon }) => (
              <a key={name} href="#solicitud" className={`group flex min-h-[92px] items-center gap-3 rounded-lg bg-white p-3 ring-1 ring-black/[.07] transition hover:bg-[#fbfcfa] hover:ring-brand-500 active:scale-[.99] sm:flex-col sm:justify-center sm:text-center ${focus}`}>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#edf1ec] transition group-hover:bg-[#fff0b8]"><Icon size={19} strokeWidth={1.8} /></span>
                <span className="text-[13px] font-medium leading-tight">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="destacados" className="scroll-mt-20 border-y border-black/[.06] bg-white py-8 sm:py-10">
        <div className="container-shell">
          <div className="mb-5 flex items-end justify-between gap-5">
            <div>
              <p className="mb-1 text-[12px] font-medium text-brand-600">Servicios destacados</p>
              <h2 className="text-[24px] font-normal tracking-[-.025em] sm:text-[28px]">Necesidades frecuentes, atención más directa</h2>
            </div>
            <a href="#categorias" className={`hidden text-[13px] font-medium sm:block ${focus}`}>Explorar todos →</a>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {featuredServices.map((service) => (
              <a key={service.title} href="#solicitud" className={`group overflow-hidden rounded-xl bg-[#f7f9f6] ring-1 ring-black/[.07] transition hover:ring-black/20 ${focus}`}>
                <div className="aspect-[4/3] overflow-hidden bg-[#e9ece7]">
                  <img
                    loading="lazy"
                    width="900"
                    height="675"
                    src={service.image}
                    srcSet={`${service.image.replace("w=1200", "w=480")} 480w, ${service.image.replace("w=1200", "w=800")} 800w, ${service.image} 1200w`}
                    sizes="(max-width: 767px) 100vw, 33vw"
                    alt={`${service.title} - fotografía temporal de desarrollo`}
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.015]"
                    style={{ objectPosition: service.position }}
                  />
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-medium text-brand-600">{service.type}</span>
                  <h3 className="mt-1.5 text-[17px] font-semibold tracking-[-.01em]">{service.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-5 text-black/60">{service.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold">Solicitar <ArrowRight size={15} /></span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 grid gap-2.5 md:grid-cols-3">
            {compactServices.map(({ title, text, type, icon: Icon }) => (
              <a key={title} href="#solicitud" className={`group grid grid-cols-[48px_1fr_auto] items-center gap-3 rounded-lg bg-white p-3.5 ring-1 ring-black/[.07] transition hover:ring-brand-500 ${focus}`}>
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#edf1ec] text-ink transition group-hover:bg-[#fff0b8]"><Icon size={21} strokeWidth={1.8} /></span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-medium text-brand-600">{type}</span>
                  <strong className="mt-0.5 block text-[14px] font-semibold">{title}</strong>
                  <span className="mt-0.5 block text-[13px] text-black/55">{text}</span>
                </span>
                <ArrowRight size={17} className="shrink-0 text-black/45 transition group-hover:text-ink" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-20 py-8 sm:py-10">
        <div className="container-shell grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-1 text-[12px] font-medium text-brand-600">Cómo funciona</p>
            <h2 className="max-w-md text-[24px] font-normal tracking-[-.025em] sm:text-[29px]">Vos contás la necesidad. Nosotros gestionamos la solución.</h2>
          </div>
          <div className="grid divide-y divide-black/[.08] overflow-hidden rounded-xl bg-white ring-1 ring-black/[.07] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[["01", "Contanos qué necesitás"], ["02", "Recibí atención y cotización"], ["03", "Coordinamos el servicio"]].map(([number, title]) => (
              <div key={number} className="p-4 sm:p-5">
                <span className="text-[12px] font-semibold text-brand-600">{number}</span>
                <h3 className="mt-1.5 text-[14px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atencion-central" className="scroll-mt-20 pb-8 sm:pb-10">
        <div className="container-shell grid overflow-hidden rounded-xl bg-ink text-white lg:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[12px] font-medium text-brand-400"><MessageCircle size={16} /> Atención central {siteConfig.brandName}</div>
            <h2 className="mt-2.5 text-[25px] font-normal tracking-tight sm:text-[30px]">{siteConfig.centralAttentionLabel}</h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/70">Centralizamos la atención, cotización y coordinación de tus servicios desde un solo lugar.</p>
          </div>
          <div className="flex items-center border-t border-white/10 p-6 lg:border-l lg:border-t-0 lg:px-8">
            <a href="#solicitud" className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 text-[14px] font-semibold text-ink transition hover:bg-brand-400 lg:w-auto ${focus}`}>Solicitar atención <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-10">
        <div className="container-shell rounded-xl bg-[#e9eeea] px-5 py-6 sm:px-7 sm:py-7">
          <div className="mb-5">
            <p className="mb-1 text-[12px] font-medium text-brand-600">Confianza operativa</p>
            <h2 className="text-[22px] font-normal tracking-tight sm:text-[25px]">Un proceso claro de principio a fin</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
            <div className="sm:pr-6"><Headphones size={20} className="text-brand-600" /><h3 className="mt-2.5 text-[15px] font-semibold">Atención centralizada</h3><p className="mt-1.5 text-[14px] leading-5 text-black/60">Un proceso simple para resolver tu necesidad.</p></div>
            <div className="border-black/10 sm:border-l sm:px-6"><ClipboardCheck size={20} className="text-brand-600" /><h3 className="mt-2.5 text-[15px] font-semibold">Cotización clara</h3><p className="mt-1.5 text-[14px] leading-5 text-black/60">Información antes de coordinar el servicio.</p></div>
            <div className="border-black/10 sm:border-l sm:pl-6"><ShieldCheck size={20} className="text-brand-600" /><h3 className="mt-2.5 text-[15px] font-semibold">Coordinación</h3><p className="mt-1.5 text-[14px] leading-5 text-black/60">Un proceso centralizado de principio a fin.</p></div>
          </div>
        </div>
      </section>

      <section id="prestadores" className="scroll-mt-20 pb-8 sm:pb-10">
        <div className="container-shell flex flex-col gap-4 rounded-xl bg-white p-5 ring-1 ring-black/[.07] sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="mb-1 text-[12px] font-medium text-brand-600">Red de prestadores</p>
            <h2 className="text-[20px] font-normal tracking-tight sm:text-[23px]">¿Sos profesional o tenés una empresa de servicios?</h2>
            <p className="mt-1 text-[14px] text-black/60">Formá parte de nuestra red de prestadores.</p>
          </div>
          <a href="#atencion-central" className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-[13px] font-medium text-white transition hover:bg-[#26372d] ${focus}`}>Quiero trabajar con {siteConfig.brandName} <ArrowRight size={15} /></a>
        </div>
      </section>

      <footer className="border-t border-black/[.07] bg-white py-7 sm:py-8">
        <div className="container-shell grid gap-6 sm:grid-cols-[1.4fr_1fr_1fr] sm:items-start">
          <div><a href="#inicio" className={focus}><Logo /></a><p className="mt-3 text-[13px] text-black/60">Central integral de servicios para Paraguay.</p><p className="mt-2 text-[12px] text-black/45">© 2026 {siteConfig.brandName}</p></div>
          <div><p className="mb-2 text-[12px] font-semibold text-black/60">Navegación</p><div className="flex flex-col gap-2 text-[13px] text-black/60"><a className={focus} href="#categorias">Servicios</a><a className={focus} href="#como-funciona">Cómo funciona</a><a className={focus} href="#prestadores">Prestadores</a></div></div>
          <div><p className="mb-2 text-[12px] font-semibold text-black/60">Atención</p><p className="text-[13px] leading-5 text-black/60">Un solo contacto para evaluación, cotización y coordinación.</p></div>
        </div>
      </footer>

      <a href="#solicitud" className={`fixed left-3 right-3 z-40 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-5 text-[13px] font-semibold text-ink shadow-[0_8px_22px_rgba(0,0,0,.2)] [bottom:calc(.75rem+env(safe-area-inset-bottom))] sm:hidden ${focus}`}>
        Solicitar atención <ArrowRight size={16} />
      </a>
    </main>
  );
}
