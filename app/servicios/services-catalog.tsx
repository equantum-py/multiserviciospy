"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Bug, Building2, Car, Hammer, HardHat, House, Laptop, Leaf, Search, ShieldCheck, Snowflake, Sparkles, Truck, WashingMachine, Wrench } from "lucide-react";
import { activeServices, serviceCategories } from "../../data/services";

const categoryIcons = { House, Snowflake, Car, HardHat, Leaf, Sparkles, ShieldCheck, Hammer, WashingMachine, Laptop, Truck, Bug, Building2 };
function normalize(value: string) { return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim(); }

export function ServicesCatalog() {
  const params = useSearchParams();
  const initialCategory = params.get("categoria") ?? "all";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(serviceCategories.some(item => item.id === initialCategory) ? initialCategory : "all");
  useEffect(() => { const next = params.get("categoria") ?? "all"; setCategory(serviceCategories.some(item => item.id === next) ? next : "all"); }, [params]);
  const normalizedQuery = normalize(query);
  const results = useMemo(() => activeServices.filter(service => {
    const matchesCategory = category === "all" || service.categories.includes(category);
    const searchable = normalize([service.name, service.shortDescription, ...service.keywords].join(" "));
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  }), [category, normalizedQuery]);

  return <>
    <div className="mt-7 rounded-2xl bg-white p-3 ring-1 ring-border sm:p-4"><label className="flex min-h-14 items-center gap-3 rounded-xl border border-border bg-white px-4 focus-within:border-ink focus-within:ring-2 focus-within:ring-ink/10"><Search size={20} className="shrink-0 text-muted" /><span className="sr-only">¿Qué necesitás resolver?</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="¿Qué necesitás resolver?" className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted" /></label></div>
    <div className="-mx-4 mt-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" aria-label="Filtrar servicios por categoría"><div className="flex w-max gap-2 sm:w-auto sm:flex-wrap"><button onClick={() => setCategory("all")} className={`min-h-11 rounded-full border px-4 text-[13px] font-medium ${category === "all" ? "border-ink bg-ink text-white" : "border-border bg-white"}`}>Todos</button>{serviceCategories.map(item => { const Icon = categoryIcons[item.icon as keyof typeof categoryIcons] ?? Wrench; return <button key={item.id} onClick={() => setCategory(item.id)} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[13px] font-medium ${category === item.id ? "border-ink bg-ink text-white" : "border-border bg-white"}`}><Icon size={15} />{item.shortName}</button>; })}</div></div>
    <div className="mt-6 flex items-end justify-between gap-4"><div><p className="mb-1 text-[12px] font-medium text-brand-600">Catálogo</p><h2 className="text-[22px] font-normal sm:text-[26px]">{results.length} servicios disponibles</h2></div>{(query || category !== "all") && <button onClick={() => { setQuery(""); setCategory("all"); }} className="min-h-11 text-[13px] font-medium text-brand-600">Limpiar filtros</button>}</div>
    {results.length ? <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{results.map(service => <a key={service.id} href={`/?servicio=${service.slug}#solicitud`} className="group grid min-h-[150px] grid-cols-[44px_1fr] gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-ink/30 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:p-5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eff6ff] text-ink"><Wrench size={20} strokeWidth={1.8} /></span><span className="min-w-0"><strong className="block text-[16px] font-semibold">{service.name}</strong><span className="mt-1.5 block text-[13px] leading-5 text-muted">{service.shortDescription}</span><span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-600">{service.serviceType === "evaluation" ? "Pedir cotización" : "Solicitar atención"}<ArrowRight size={15} /></span></span></a>)}</div> : <div className="mt-4 rounded-xl border border-border bg-white px-5 py-8 text-center"><h3 className="text-[18px] font-semibold">No encontramos una coincidencia exacta.</h3><p className="mx-auto mt-2 max-w-xl text-[14px] leading-6 text-muted">Eso no significa que no podamos ayudarte. Contanos directamente qué necesitás resolver.</p><a href="/#solicitud" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-500 px-5 text-[13px] font-semibold text-white hover:bg-brand-600">Contar mi necesidad <ArrowRight size={15} /></a></div>}
    <section className="mt-8 rounded-2xl bg-ink px-5 py-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-7"><div><p className="mb-1 text-[12px] font-medium text-brand-400">Atención central</p><h2 className="text-[23px] font-normal">¿No encontrás lo que necesitás?</h2><p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/75">Contanos qué necesitás resolver y buscamos la mejor forma de ayudarte.</p></div><a href="/#solicitud" className="mt-5 inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 text-[14px] font-semibold text-white hover:bg-brand-600 sm:mt-0 sm:w-auto">Contar mi necesidad <ArrowRight size={16} /></a></section>
  </>;
}
