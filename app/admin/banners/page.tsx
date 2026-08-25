import { Images } from "lucide-react";
import { getCmsDashboardData } from "@/lib/data/admin";
import { AdminEmptyState, AdminPageHeader, AdminScopeNotice, AdminStatusBadge } from "../components/admin-ui";

export default async function AdminBannersPage() {
  const { scope, stats } = await getCmsDashboardData();
  return <div className="space-y-7"><AdminPageHeader title="Banners" description="Estado actual de los banners del CMS. Consulta de solo lectura." /><AdminScopeNotice scope={scope} />{!stats || stats.bannersTotal === 0 ? <AdminEmptyState icon={Images} title="Todavía no hay banners cargados" description="El CMS no registra banners en esta instancia. No se crean datos ficticios para completar la vista." /> : <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"><p className="text-sm text-[#64748B]">Banners disponibles</p><p className="mt-1 text-3xl font-semibold text-[#17212B]">{stats.bannersTotal}</p><div className="mt-4"><AdminStatusBadge active={stats.bannersActive > 0} activeLabel={`${stats.bannersActive} activos`} inactiveLabel="Sin banners activos" /></div></section>}</div>;
}
