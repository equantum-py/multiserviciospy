"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { AdminService } from "@/lib/data/admin";
import { AdminStatusBadge } from "../components/admin-ui";

export function AdminServicesList({ services }: { services: AdminService[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "active" | "inactive">("all");
  const filtered = useMemo(() => services.filter((service) => {
    const matchesQuery = `${service.name} ${service.slug}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
    return matchesQuery && (status === "all" || (status === "active" ? service.active : !service.active));
  }), [query, services, status]);
  const categories = (service: AdminService) => service.service_categories?.flatMap((item) => item.categories ? [item.categories.name] : []) ?? [];

  return <section className="space-y-4">
    <div className="flex flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <label className="flex min-h-11 items-center gap-2 rounded-xl border border-[#E2E8F0] px-3 sm:w-80"><Search className="size-4 text-[#64748B]" aria-hidden="true" /><span className="sr-only">Buscar servicios</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nombre o slug" className="w-full bg-transparent text-sm text-[#17212B] outline-none placeholder:text-[#94A3B8]" /></label>
      <label className="flex items-center gap-2 text-sm text-[#64748B]"><span>Estado</span><select value={status} onChange={(event) => setStatus(event.target.value as typeof status)} className="min-h-11 rounded-xl border border-[#E2E8F0] bg-white px-3 text-[#17212B] outline-none"><option value="all">Todos</option><option value="active">Activos</option><option value="inactive">Inactivos</option></select></label>
    </div>
    <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
      <div className="hidden overflow-x-auto md:block"><table className="w-full text-left text-sm"><thead className="bg-[#F6F8FA] text-xs uppercase tracking-wide text-[#64748B]"><tr><th className="px-5 py-4">Servicio</th><th className="px-5 py-4">Categorías</th><th className="px-5 py-4">Tipo</th><th className="px-5 py-4">Estado</th><th className="px-5 py-4">Destacado</th><th className="px-5 py-4">Home</th></tr></thead><tbody className="divide-y divide-[#E2E8F0]">{filtered.map((service) => <tr key={service.id}><td className="px-5 py-4"><p className="font-medium text-[#17212B]">{service.name}</p><p className="mt-1 text-xs text-[#64748B]">/{service.slug}</p></td><td className="px-5 py-4 text-[#64748B]">{categories(service).join(", ") || "Sin categoría"}</td><td className="px-5 py-4 capitalize text-[#64748B]">{service.service_type}</td><td className="px-5 py-4"><AdminStatusBadge active={service.active} /></td><td className="px-5 py-4"><AdminStatusBadge active={service.featured} activeLabel="Sí" inactiveLabel="No" /></td><td className="px-5 py-4"><AdminStatusBadge active={service.show_on_home} activeLabel="Sí" inactiveLabel="No" /></td></tr>)}</tbody></table></div>
      <ul className="divide-y divide-[#E2E8F0] md:hidden">{filtered.map((service) => <li key={service.id} className="space-y-3 p-4"><div><p className="font-medium text-[#17212B]">{service.name}</p><p className="text-sm text-[#64748B]">/{service.slug}</p></div><p className="text-sm text-[#64748B]">{categories(service).join(", ") || "Sin categoría"} · {service.service_type}</p><div className="flex flex-wrap gap-2"><AdminStatusBadge active={service.active} /><AdminStatusBadge active={service.featured} activeLabel="Destacado" inactiveLabel="No destacado" /><AdminStatusBadge active={service.show_on_home} activeLabel="Home" inactiveLabel="Fuera de Home" /></div></li>)}</ul>
      {filtered.length === 0 && <p className="p-8 text-center text-sm text-[#64748B]">No hay servicios que coincidan con los filtros actuales.</p>}
    </div>
  </section>;
}
