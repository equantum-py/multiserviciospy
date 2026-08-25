import { Home } from "lucide-react";
import { getCmsDashboardData } from "@/lib/data/admin";
import { AdminEmptyState, AdminPageHeader, AdminScopeNotice } from "../components/admin-ui";
import { AdminStatCard } from "../components/admin-stat-card";

export default async function AdminHomePage() {
  const { scope, stats } = await getCmsDashboardData();
  return <div className="space-y-7"><AdminPageHeader title="Home" description="Resumen del contenido marcado para la portada pública. Consulta de solo lectura." /><AdminScopeNotice scope={scope} />{!stats ? <AdminEmptyState icon={Home} title="Resumen no disponible" description="No se muestran cifras sin una consulta válida a Supabase." /> : <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><AdminStatCard label="Categorías en Home" value={stats.categoriesHome} detail="Categorías activas marcadas para portada" icon={Home} /><AdminStatCard label="Servicios en Home" value={stats.servicesHome} detail="Servicios activos marcados para portada" icon={Home} /><AdminStatCard label="Servicios destacados" value={stats.servicesFeatured} detail="Servicios activos destacados" icon={Home} /><AdminStatCard label="Banners activos" value={stats.bannersActive} detail="Banners visibles en el período actual" icon={Home} /></section>}</div>;
}
