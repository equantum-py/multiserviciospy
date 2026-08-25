import {
  ArrowRight,
  BadgeCheck,
  Car,
  ChevronRight,
  Hammer,
  Home,
  Leaf,
  MapPin,
  Menu,
  Paintbrush,
  Search,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

const categories = [
  { name: "Automotor", icon: Car, href: "#servicios" },
  { name: "Electricidad", icon: Zap, href: "#servicios" },
  { name: "Refrigeración", icon: Snowflake, href: "#servicios" },
  { name: "Jardinería", icon: Leaf, href: "#servicios" },
  { name: "Chapería y pintura", icon: Paintbrush, href: "#servicios" },
  { name: "Hogar", icon: Home, href: "#servicios" },
  { name: "Reparaciones", icon: Wrench, href: "#servicios" },
  { name: "Construcción", icon: Hammer, href: "#servicios" },
];

const services = [
  {
    title: "Electricidad automotriz",
    category: "Automotor",
    location: "Asunción y Gran Asunción",
    rating: "4.9",
    reviews: "86",
    price: "Desde Gs. 120.000",
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mantenimiento de aire acondicionado",
    category: "Refrigeración",
    location: "Central",
    rating: "4.8",
    reviews: "124",
    price: "Desde Gs. 150.000",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Jardinería y mantenimiento",
    category: "Jardín",
    location: "Asunción y Central",
    rating: "4.9",
    reviews: "73",
    price: "Solicitar presupuesto",
    image:
      "https://images.unsplash.com/photo-1599685315640-9ceab2f581ca?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Electricista para el hogar",
    category: "Hogar",
    location: "Gran Asunción",
    rating: "4.7",
    reviews: "95",
    price: "Desde Gs. 100.000",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Chapería y pintura",
    category: "Automotor",
    location: "Fernando de la Mora",
    rating: "4.8",
    reviews: "61",
    price: "Solicitar presupuesto",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reparaciones generales",
    category: "Hogar",
    location: "San Lorenzo",
    rating: "4.9",
    reviews: "112",
    price: "Desde Gs. 90.000",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = [
  {
    number: "01",
    title: "Buscá lo que necesitás",
    text: "Elegí la categoría, escribí el servicio y seleccioná tu zona.",
  },
  {
    number: "02",
    title: "Compará profesionales",
    text: "Revisá experiencia, calificaciones y el tipo de servicio ofrecido.",
  },
  {
    number: "03",
    title: "Reservá o pedí presupuesto",
    text: "Contactá al profesional y coordiná el trabajo desde un solo lugar.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <div className="bg-ink px-4 py-2 text-center text-[11px] font-semibold text-white sm:text-xs">
        Profesionales para tu hogar, vehículo y negocio en un solo lugar.
      </div>

      <header className="border-b border-black/5 bg-white">
        <div className="container-shell flex h-16 items-center justify-between gap-4 sm:h-20">
          <a href="#inicio" className="flex items-center gap-2 font-black tracking-tight" aria-label="MultiServicios PY - Inicio">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-ink">
              <Wrench size={19} strokeWidth={2.6} />
            </span>
            <span className="text-lg sm:text-xl">MultiServicios<span className="text-brand-600">PY</span></span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navegación principal">
            <a className="transition hover:text-brand-600" href="#categorias">Categorías</a>
            <a className="transition hover:text-brand-600" href="#servicios">Servicios</a>
            <a className="transition hover:text-brand-600" href="#como-funciona">Cómo funciona</a>
            <a className="transition hover:text-brand-600" href="#profesionales">Para profesionales</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href="#servicios" className="rounded-full px-4 py-2 text-sm font-bold hover:bg-black/5">Explorar</a>
            <a href="#profesionales" className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5">Publicar servicio</a>
          </div>

          <a href="#categorias" className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 sm:hidden" aria-label="Ver menú">
            <Menu size={20} />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative bg-soft py-12 sm:py-16 lg:py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-sm">
              <BadgeCheck size={15} className="text-brand-600" />
              Servicios confiables cerca tuyo
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-7xl">
              Todos los servicios que necesitás, <span className="text-brand-600">en un solo lugar.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              Encontrá profesionales para tu hogar, vehículo, jardín y negocio. Compará opciones y pedí presupuesto de forma simple.
            </p>

            <form action="#servicios" className="mt-7 grid gap-2 rounded-2xl bg-white p-2 shadow-card sm:grid-cols-[1fr_190px_auto] sm:rounded-3xl">
              <label className="flex min-h-14 items-center gap-3 rounded-xl px-3 sm:rounded-2xl">
                <Search size={19} className="shrink-0 text-black/45" />
                <input
                  name="servicio"
                  aria-label="Servicio que necesitás"
                  placeholder="¿Qué servicio necesitás?"
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-black/35"
                />
              </label>
              <label className="flex min-h-14 items-center gap-3 rounded-xl border-t border-black/5 px-3 sm:rounded-2xl sm:border-l sm:border-t-0">
                <MapPin size={19} className="shrink-0 text-black/45" />
                <select name="zona" aria-label="Zona" className="w-full bg-transparent text-sm font-semibold outline-none">
                  <option>Todo Paraguay</option>
                  <option>Asunción</option>
                  <option>Central</option>
                  <option>San Lorenzo</option>
                  <option>Luque</option>
                </select>
              </label>
              <button className="min-h-14 rounded-xl bg-brand-500 px-6 text-sm font-black text-ink transition hover:bg-brand-400 sm:rounded-2xl">
                Buscar
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-black/55 sm:text-sm">
              <span className="flex items-center gap-2"><ShieldCheck size={16} /> Profesionales verificados</span>
              <span className="flex items-center gap-2"><Star size={16} /> Opiniones reales</span>
              <span className="flex items-center gap-2"><Sparkles size={16} /> Presupuesto rápido</span>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[500px] lg:block">
            <div className="aspect-[4/4.5] overflow-hidden rounded-[40px] shadow-card">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85"
                alt="Profesional realizando un servicio para el hogar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-7 rounded-3xl bg-white p-4 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-green-50 text-green-700"><BadgeCheck size={22} /></span>
                <div>
                  <p className="text-xs font-semibold text-black/45">Disponible</p>
                  <p className="font-black">Profesionales cerca tuyo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categorias" className="py-14 sm:py-20">
        <div className="container-shell">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-brand-600">Explorá por categoría</p>
              <h2 className="text-2xl font-black tracking-tight sm:text-4xl">¿Qué necesitás resolver?</h2>
            </div>
            <a href="#servicios" className="hidden items-center gap-1 text-sm font-bold sm:flex">Ver servicios <ChevronRight size={17} /></a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map(({ name, icon: Icon, href }) => (
              <a key={name} href={href} className="group flex min-h-32 flex-col items-start justify-between rounded-2xl border border-black/8 bg-white p-4 transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-ink transition group-hover:bg-brand-500">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-black leading-tight">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#fafafa] py-14 sm:py-20">
        <div className="container-shell">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-brand-600">Servicios destacados</p>
              <h2 className="text-2xl font-black tracking-tight sm:text-4xl">Los más buscados esta semana</h2>
            </div>
            <a href="#categorias" className="hidden items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-bold sm:flex">Ver categorías <ArrowRight size={16} /></a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card">
                <div className="aspect-[16/10] overflow-hidden bg-black/5">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-soft px-3 py-1 text-[11px] font-black uppercase tracking-wide">{service.category}</span>
                    <span className="flex items-center gap-1 text-xs font-bold"><Star size={14} fill="currentColor" className="text-brand-500" /> {service.rating} <span className="font-medium text-black/35">({service.reviews})</span></span>
                  </div>
                  <h3 className="text-lg font-black tracking-tight">{service.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-black/50"><MapPin size={15} /> {service.location}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/5 pt-4">
                    <p className="text-sm font-black">{service.price}</p>
                    <a href="#como-funciona" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white" aria-label={`Ver ${service.title}`}><ArrowRight size={17} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          <div className="rounded-[32px] bg-ink p-7 text-white sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-400">Necesidad urgente</p>
            <h2 className="mt-3 max-w-md text-3xl font-black tracking-tight sm:text-4xl">¿Necesitás resolver algo hoy?</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/65 sm:text-base">Encontrá electricistas, técnicos, plomeros y profesionales disponibles en tu zona.</p>
            <a href="#servicios" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-black text-ink">Encontrar profesional <ArrowRight size={17} /></a>
          </div>
          <div className="rounded-[32px] bg-brand-100 p-7 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600">Trabajos a medida</p>
            <h2 className="mt-3 max-w-md text-3xl font-black tracking-tight sm:text-4xl">¿El trabajo necesita evaluación?</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-black/60 sm:text-base">Para chapería, pintura, construcción y trabajos especiales, solicitá presupuesto antes de contratar.</p>
            <a href="#servicios" className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-black">Solicitar presupuesto <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-soft py-14 sm:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-brand-600">Simple y rápido</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Encontrar ayuda no debería ser complicado</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <span className="text-4xl font-black text-brand-500">{step.number}</span>
                <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profesionales" className="py-14 sm:py-20">
        <div className="container-shell overflow-hidden rounded-[36px] bg-ink px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-brand-400">Para profesionales y empresas</span>
              <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">¿Ofrecés servicios? Encontrá nuevos clientes.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">Mostrá tus trabajos, recibí solicitudes y construí tu reputación dentro de MultiServicios PY.</p>
            </div>
            <a href="mailto:hola@multiserviciospy.com?subject=Quiero%20publicar%20mis%20servicios" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 text-sm font-black text-ink">Quiero publicar <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white py-10">
        <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#inicio" className="flex items-center gap-2 font-black">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500"><Wrench size={17} /></span>
            MultiServiciosPY
          </a>
          <p className="text-xs leading-5 text-black/45">Marketplace de servicios para Paraguay. © 2026 MultiServicios PY.</p>
          <div className="flex gap-4 text-xs font-bold text-black/60">
            <a href="#categorias">Categorías</a>
            <a href="#como-funciona">Cómo funciona</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
