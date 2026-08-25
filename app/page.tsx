import {
  ArrowRight, BadgeCheck, Car, ChevronRight, Hammer, Home, Leaf, MapPin, Menu,
  Paintbrush, Search, ShieldCheck, Snowflake, Sparkles, Star, Wrench, Zap,
} from "lucide-react";

const categories = [
  { name: "Automotor", icon: Car }, { name: "Electricidad", icon: Zap },
  { name: "Refrigeración", icon: Snowflake }, { name: "Jardinería", icon: Leaf },
  { name: "Chapería y pintura", icon: Paintbrush }, { name: "Hogar", icon: Home },
  { name: "Reparaciones", icon: Wrench }, { name: "Construcción", icon: Hammer },
];

const services = [
  { title: "Electricidad automotriz", category: "Automotor", location: "Asunción y Gran Asunción", rating: "4.9", reviews: "86", price: "Desde Gs. 120.000", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=85" },
  { title: "Mantenimiento de aire acondicionado", category: "Refrigeración", location: "Central", rating: "4.8", reviews: "124", price: "Desde Gs. 150.000", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85" },
  { title: "Jardinería y mantenimiento", category: "Jardinería", location: "Asunción y Central", rating: "4.9", reviews: "73", price: "Solicitar presupuesto", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85" },
  { title: "Electricista para el hogar", category: "Hogar", location: "Gran Asunción", rating: "4.7", reviews: "95", price: "Desde Gs. 100.000", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85" },
  { title: "Chapería y pintura", category: "Automotor", location: "Fernando de la Mora", rating: "4.8", reviews: "61", price: "Solicitar presupuesto", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=85" },
  { title: "Reparaciones generales", category: "Hogar", location: "San Lorenzo", rating: "4.9", reviews: "112", price: "Desde Gs. 90.000", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85" },
];

const steps = [
  { number: "1", title: "Buscá lo que necesitás", text: "Elegí la categoría, escribí el servicio y seleccioná tu zona." },
  { number: "2", title: "Compará profesionales", text: "Revisá experiencia, calificaciones y el tipo de servicio ofrecido." },
  { number: "3", title: "Reservá o pedí presupuesto", text: "Contactá al profesional y coordiná el trabajo desde un solo lugar." },
];

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-ink"><Wrench size={18} strokeWidth={2.2} /></span>
    <span className="text-[17px] font-semibold tracking-[-0.03em] sm:text-lg">TODOSERVICIOS <span className="text-brand-600">PY</span></span>
  </span>
);

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <header className="border-b border-black/[.06] bg-white">
        <div className="container-shell flex h-16 items-center justify-between gap-4 sm:h-[76px]">
          <a href="#inicio" aria-label="TodoServicios PY - Inicio"><Logo /></a>
          <nav className="hidden items-center gap-8 text-[13px] font-medium lg:flex" aria-label="Navegación principal">
            <a className="hover:text-brand-600" href="#categorias">Categorías</a><a className="hover:text-brand-600" href="#servicios">Servicios</a><a className="hover:text-brand-600" href="#como-funciona">Cómo funciona</a><a className="hover:text-brand-600" href="#profesionales">Para profesionales</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex"><a href="#servicios" className="px-4 py-2 text-[13px] font-medium">Explorar</a><a href="#profesionales" className="rounded-full bg-brand-500 px-5 py-2.5 text-[13px] font-semibold text-ink">Publicar servicio</a></div>
          <a href="#categorias" className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 sm:hidden" aria-label="Ver menú"><Menu size={19} /></a>
        </div>
      </header>

      <section id="inicio" className="relative bg-[#fbf8f1] py-12 sm:py-16 lg:py-12">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <h1 className="max-w-[620px] text-[42px] font-normal leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[60px]">
              Todos los<br className="hidden lg:block" /> servicios que necesitás, <span className="text-brand-600">en un solo lugar.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-black/55 sm:text-[15px]">Encontrá profesionales para tu hogar, vehículo, jardín y negocio.<br className="hidden sm:block" /> Compará opciones y pedí presupuesto de forma simple.</p>
            <form action="#servicios" className="mt-7 grid gap-1.5 rounded-2xl bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,.08)] sm:grid-cols-[1fr_170px_auto]">
              <label className="flex min-h-12 items-center gap-3 rounded-xl px-3"><Search size={17} className="text-black/40" /><input name="servicio" aria-label="Servicio que necesitás" placeholder="¿Qué servicio necesitás?" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-black/40" /></label>
              <label className="flex min-h-12 items-center gap-2 border-t border-black/[.06] px-3 sm:border-l sm:border-t-0"><MapPin size={16} className="text-brand-600" /><select name="zona" aria-label="Zona" className="w-full bg-transparent text-[13px] font-medium outline-none"><option>Todo Paraguay</option><option>Asunción</option><option>Central</option><option>San Lorenzo</option><option>Luque</option></select></label>
              <button className="min-h-12 rounded-xl bg-brand-500 px-6 text-[13px] font-semibold text-ink hover:bg-brand-400">Buscar</button>
            </form>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-[12px] text-black/55"><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-brand-600" /> Profesionales verificados</span><span className="flex items-center gap-2"><Star size={15} className="text-brand-600" /> Opiniones reales</span><span className="flex items-center gap-2"><Sparkles size={15} className="text-brand-600" /> Presupuesto rápido</span></div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-[570px] lg:block">
            <div className="aspect-[1.3/1] overflow-hidden rounded-[28px]"><img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=88" alt="Profesional realizando un servicio automotriz" className="h-full w-full object-cover" /></div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,.12)]"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-green-100 text-green-700"><BadgeCheck size={19} /></span><div><p className="mb-0 text-[11px] text-green-700">Disponibles</p><p className="mb-0 text-[13px] font-semibold">Profesionales cerca tuyo</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="categorias" className="py-12 sm:py-16">
        <div className="container-shell">
          <div className="mb-6 flex items-end justify-between gap-4"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600">Explorá por categoría</p><h2 className="text-2xl font-normal tracking-[-0.025em] sm:text-[30px]">¿Qué necesitás resolver?</h2></div><a href="#servicios" className="hidden items-center gap-1 text-[12px] sm:flex">Ver todas las categorías <ChevronRight size={15} /></a></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{categories.map(({ name, icon: Icon }) => <a key={name} href="#servicios" className="group flex min-h-[112px] flex-col items-center justify-center gap-4 rounded-2xl border border-black/[.07] bg-white p-3 text-center transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-sm"><Icon size={25} strokeWidth={1.6} /><span className="text-[12px] font-medium leading-tight">{name}</span></a>)}</div>
        </div>
      </section>

      <section id="servicios" className="pb-12 sm:pb-16">
        <div className="container-shell">
          <div className="mb-6 flex items-end justify-between gap-4"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600">Servicios destacados</p><h2 className="text-2xl font-normal tracking-[-0.025em] sm:text-[30px]">Los más buscados esta semana</h2></div><a href="#categorias" className="hidden items-center gap-1 text-[12px] sm:flex">Ver todos los servicios <ChevronRight size={15} /></a></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(service => <article key={service.title} className="overflow-hidden rounded-2xl border border-black/[.07] bg-white transition hover:shadow-md"><div className="aspect-[2.25/1] overflow-hidden bg-black/[.03]"><img src={service.image} alt={service.title} className="h-full w-full object-cover" /></div><div className="p-4"><div className="mb-2 flex items-center justify-between gap-3"><span className="rounded-full bg-[#f7f3e8] px-2.5 py-1 text-[9px] font-semibold uppercase">{service.category}</span><span className="flex items-center gap-1 text-[11px]"><Star size={12} fill="currentColor" className="text-brand-500" /> {service.rating} <span className="text-black/35">({service.reviews})</span></span></div><h3 className="min-h-[44px] text-[16px] font-semibold leading-snug">{service.title}</h3><p className="mt-1 flex items-center gap-1.5 text-[12px] text-black/45"><MapPin size={13} /> {service.location}</p><div className="mt-4 flex items-center justify-between"><p className="mb-0 text-[13px] font-semibold">{service.price}</p><a href="#como-funciona" className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white" aria-label={`Ver ${service.title}`}><ArrowRight size={15} /></a></div></div></article>)}</div>
        </div>
      </section>

      <section className="pb-14"><div className="container-shell grid gap-4 lg:grid-cols-2"><div className="rounded-[26px] bg-ink p-7 text-white sm:p-9"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.15em] text-brand-400">Necesidad urgente</p><h2 className="text-2xl font-normal tracking-tight sm:text-[30px]">¿Necesitás resolver algo hoy?</h2><p className="mt-3 max-w-lg text-[13px] leading-6 text-white/65">Encontrá electricistas, técnicos, plomeros y profesionales disponibles en tu zona.</p><a href="#servicios" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[12px] font-medium text-ink">Encontrar profesional <ArrowRight size={15} /></a></div><div className="rounded-[26px] bg-[#fff0b8] p-7 sm:p-9"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.15em] text-[#a66d00]">Trabajos a medida</p><h2 className="text-2xl font-normal tracking-tight sm:text-[30px]">¿El trabajo necesita evaluación?</h2><p className="mt-3 max-w-lg text-[13px] leading-6 text-black/55">Para chapería, pintura, construcción y trabajos especiales, solicitá presupuesto antes de contratar.</p><a href="#servicios" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[12px] font-medium">Solicitar presupuesto <ArrowRight size={15} /></a></div></div></section>

      <section id="como-funciona" className="bg-[#fbfaf7] py-12 sm:py-14"><div className="container-shell"><div className="mx-auto max-w-2xl text-center"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.15em] text-brand-600">Simple y rápido</p><h2 className="text-2xl font-normal tracking-tight sm:text-[30px]">Encontrar ayuda no debería ser complicado</h2></div><div className="mt-8 grid gap-3 md:grid-cols-3">{steps.map(step => <div key={step.number} className="rounded-2xl border border-black/[.05] bg-white p-6"><span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-[13px] font-semibold">{step.number}</span><h3 className="mt-5 text-[15px] font-semibold">{step.title}</h3><p className="mt-2 text-[12px] leading-5 text-black/50">{step.text}</p></div>)}</div></div></section>

      <section id="profesionales" className="py-10 sm:py-12"><div className="container-shell rounded-[24px] bg-[#f0f5fa] px-6 py-7 sm:px-9"><div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]"><div><p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-black/45">Para profesionales y empresas</p><h2 className="text-xl font-normal tracking-tight sm:text-[26px]">¿Ofrecés servicios? Conseguí más clientes.</h2><p className="mt-2 text-[12px] text-black/50">Mostrá tus trabajos, recibí solicitudes y hacé crecer tu negocio con TodoServicios PY.</p></div><a href="mailto:hola@todoserviciospy.com?subject=Quiero%20publicar%20mis%20servicios" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-[12px] font-medium text-white">Quiero publicar <ArrowRight size={15} /></a></div></div></section>

      <footer className="border-t border-black/[.06] bg-white py-9"><div className="container-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><a href="#inicio"><Logo /></a><p className="mt-4 text-[12px] text-black/50">Marketplace de servicios para Paraguay.</p><p className="mt-3 text-[11px] text-black/35">© 2026 TodoServicios PY</p></div><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.12em] text-black/40">Navegación</p><div className="space-y-2 text-[12px] text-black/55"><p><a href="#categorias">Categorías</a></p><p><a href="#servicios">Servicios</a></p><p><a href="#como-funciona">Cómo funciona</a></p><p><a href="#profesionales">Para profesionales</a></p></div></div><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.12em] text-black/40">Ayuda</p><div className="space-y-2 text-[12px] text-black/55"><p>Preguntas frecuentes</p><p>Seguridad</p><p>Términos y condiciones</p><p>Política de privacidad</p></div></div><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.12em] text-black/40">Contacto</p><div className="space-y-2 text-[12px] text-black/55"><p>Todo Paraguay</p><p>hola@todoserviciospy.com</p></div></div></div></footer>
    </main>
  );
}
