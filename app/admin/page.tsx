import Link from "next/link";
import { FolderTree, Home, Images, LayoutList, Settings2, Star } from "lucide-react";
import { getCmsDashboardData } from "@/lib/data/admin";
import { AdminEmptyState, AdminPageHeader, AdminQuickLink, AdminScopeNotice, AdminSection, AdminStatusBadge, AdminSystemStatus } from "./components/admin-ui";
import { AdminStatCard } from "./components/admin-stat-card";

export default async function AdminDashboardPage() {
  const data = await getCmsDashboardData();
  const stats = data.stats;
  const publicScope = data.scope === "public";

  return (
    <div className="space-y-7">
      <AdminPageHeader title="Dashboard" description="Resumen operativo del contenido disponible en el CMS." />
      <AdminScopeNotice scope={data.scope} />

      {stats ? (
        <>
          <section aria-label="Métricas de contenido" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <AdminStatCard label={publicScope ? "Categorías visibles" : "Categorías"} value={stats.categoriesTotal} detail={`${stats.categoriesActive} activas · ${stats.categoriesHome} en Home`} icon={FolderTree} />
            <AdminStatCard label={publicScope ? "Servicios visibles" : "Servicios"} value={stats.servicesTotal} detail={`${stats.servicesActive} activos`} icon={LayoutList} />
            <AdminStatCard label="Servicios activos" value={stats.servicesActive} detail="Disponibles para el sitio público" icon={Star} />
            <AdminStatCard label="Servicios en Home" value={stats.servicesHome} detail="Contenido marcado para portada" icon={Home} />
            <AdminStatCard label="Banners activos" value={stats.bannersActive} detail={stats.bannersTotal === 0 ? "Aún no hay banners cargados" : `${stats.bannersTotal} registrados`} icon={Images} />
          </section>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)]">
            <AdminSection title="Estado del catálogo" description="Indicadores calculados con los datos que esta sesión puede consultar.">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#F6F8FA] p-4">
                  <p className="text-sm text-[#64748B]">Categorías activas</p>
                  <p className="mt-1 text-2xl font-semibold text-[#17212B]">{stats.categoriesActive} / {stats.categoriesTotal}</p>
                </div>
                <div className="rounded-xl bg-[#F6F8FA] p-4">
                  <p className="text-sm text-[#64748B]">Servicios destacados</p>
                  <p className="mt-1 text-2xl font-semibold text-[#17212B]">{stats.servicesFeatured}</p>
                </div>
              </div>
            </AdminSection>

            <AdminSection title="Accesos rápidos" description="Módulos de consulta de esta fase.">
              <div className="space-y-2">
                <AdminQuickLink href="/admin/categorias" label="Ver categorías" />
                <AdminQuickLink href="/admin/servicios" label="Ver servicios" />
                <AdminQuickLink href="/admin/home" label="Revisar Home" />
              </div>
            </AdminSection>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)]">
            <AdminSection title={publicScope ? "Últimos servicios visibles" : "Últimos cambios"} description="Ordenados por la última actualización registrada.">
              {data.recentServices.length === 0 ? <AdminEmptyState title="Sin cambios para mostrar" description="No hay servicios disponibles en esta consulta." /> : (
                <ul className="divide-y divide-[#E2E8F0]">
                  {data.recentServices.map((service) => (
                    <li key={service.id} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                      <div>
                        <p className="font-medium text-[#17212B]">{service.name}</p>
                        <p className="mt-1 text-xs text-[#64748B]">/{service.slug}</p>
                      </div>
                      <AdminStatusBadge active={service.active} />
                    </li>
                  ))}
                </ul>
              )}
            </AdminSection>
            <AdminSystemStatus scope={data.scope} />
          </div>
        </>
      ) : (
        <AdminEmptyState title="Métricas no disponibles" description="No hay una conexión pública de Supabase configurada para esta instancia. No se muestran valores inventados." />
      )}

      <p className="text-xs text-[#64748B]">Panel interno de lectura. La autenticación y las operaciones de gestión no forman parte de esta fase.</p>
    </div>
  );
}
