import { LayoutList } from "lucide-react";
import { getAdminServices } from "@/lib/data/admin";
import { AdminEmptyState, AdminPageHeader, AdminScopeNotice } from "../components/admin-ui";
import { AdminServicesList } from "./admin-services-list";

export default async function AdminServicesPage() {
  const { services, scope } = await getAdminServices();
  return <div className="space-y-7"><AdminPageHeader title="Servicios" description="Catálogo de servicios y sus relaciones de categorías. Consulta de solo lectura." /><AdminScopeNotice scope={scope} />{services.length === 0 ? <AdminEmptyState icon={LayoutList} title="No hay servicios disponibles" description="No se muestran servicios ficticios cuando la consulta no devuelve contenido." /> : <AdminServicesList services={services} />}</div>;
}
