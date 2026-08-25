import Link from "next/link";
import { ArrowRight, CircleAlert, FolderCog, ShieldCheck, type LucideIcon } from "lucide-react";

export function AdminPageHeader({ title, description, eyebrow = "Panel administrativo" }: { title: string; description: string; eyebrow?: string }) {
  return <header className="mb-7"><p className="mb-1 text-xs font-semibold uppercase tracking-[.12em] text-[#F97316]">{eyebrow}</p><h1 className="text-[28px] font-semibold tracking-[-.035em] text-[#17212B]">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p></header>;
}

export function AdminSection({ title, description, children, action }: { title: string; description?: string; children: React.ReactNode; action?: React.ReactNode }) {
  return <section className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,.03)] sm:p-5"><div className="mb-4 flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-lg font-semibold tracking-tight text-[#17212B]">{title}</h2>{description && <p className="mt-1 text-sm text-slate-500">{description}</p>}</div>{action}</div>{children}</section>;
}

export function AdminStatusBadge({ active, activeLabel = "Activo", inactiveLabel = "Inactivo" }: { active: boolean; activeLabel?: string; inactiveLabel?: string }) { return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{active ? activeLabel : inactiveLabel}</span>; }

export function AdminScopeNotice({ scope }: { scope: "complete" | "public" | "unavailable" }) {
  if (scope === "complete") return null;
  const message = scope === "public" ? "Mostrando únicamente datos permitidos por la lectura pública. Los datos inactivos y el total administrativo completo se habilitarán cuando exista un canal administrativo autenticado." : "Supabase no está configurado en este entorno. No se muestran métricas inventadas.";
  return <div className="mb-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><CircleAlert className="mt-0.5 shrink-0" size={19} />{message}</div>;
}

export function AdminEmptyState({ title, description, icon: Icon = FolderCog }: { title: string; description: string; icon?: LucideIcon }) { return <div className="grid min-h-52 place-items-center rounded-xl border border-dashed border-[#CBD5E1] bg-slate-50 px-6 py-10 text-center"><div><span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-white text-[#102A43] shadow-sm"><Icon size={21} /></span><h2 className="mt-4 text-lg font-semibold text-[#17212B]">{title}</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p></div></div>; }

export function AdminQuickLink({ href, label }: { href: string; label: string }) { return <Link href={href} className="group flex min-h-11 items-center justify-between gap-4 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#17212B] transition hover:border-slate-300 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"><span>{label}</span><ArrowRight className="shrink-0 text-[#F97316] transition group-hover:translate-x-0.5" size={18} /></Link>; }

export function AdminSystemStatus({ scope }: { scope: "complete" | "public" | "unavailable" }) { return <div className="grid gap-3 sm:grid-cols-3"><StatusItem label="Base de datos" value={scope === "unavailable" ? "Sin configurar" : scope === "public" ? "Lectura pública" : "Canal administrativo"} pending={scope === "unavailable"} /><StatusItem label="Storage" value="Configurado" /><StatusItem label="Autenticación Admin" value="Pendiente" pending /></div>; }
function StatusItem({ label, value, pending = false }: { label: string; value: string; pending?: boolean }) { return <div className="rounded-lg bg-slate-50 p-3"><p className="text-xs font-medium text-slate-500">{label}</p><p className={`mt-1 flex items-center gap-1.5 text-sm font-semibold ${pending ? "text-slate-600" : "text-emerald-700"}`}><ShieldCheck size={16} />{value}</p></div>; }
