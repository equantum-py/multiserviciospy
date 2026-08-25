import { FolderTree } from "lucide-react";
import { getAdminCategories } from "@/lib/data/admin";
import { AdminEmptyState, AdminPageHeader, AdminScopeNotice, AdminStatusBadge } from "../components/admin-ui";

export default async function AdminCategoriesPage() {
  const { categories, scope } = await getAdminCategories();
  return (
    <div className="space-y-7">
      <AdminPageHeader title="Categorías" description="Listado de categorías del catálogo. Consulta de solo lectura." />
      <AdminScopeNotice scope={scope} />
      {categories.length === 0 ? <AdminEmptyState icon={FolderTree} title="No hay categorías disponibles" description="No se cargan datos de ejemplo cuando la consulta no tiene resultados." /> : (
        <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F6F8FA] text-xs uppercase tracking-wide text-[#64748B]"><tr><th className="px-5 py-4">Nombre</th><th className="px-5 py-4">Slug</th><th className="px-5 py-4">Estado</th><th className="px-5 py-4">Home</th><th className="px-5 py-4 text-right">Orden</th></tr></thead>
              <tbody className="divide-y divide-[#E2E8F0]">{categories.map((category) => <tr key={category.id}><td className="px-5 py-4 font-medium text-[#17212B]">{category.name}</td><td className="px-5 py-4 text-[#64748B]">/{category.slug}</td><td className="px-5 py-4"><AdminStatusBadge active={category.active} /></td><td className="px-5 py-4"><AdminStatusBadge active={category.show_on_home} activeLabel="Visible" inactiveLabel="No visible" /></td><td className="px-5 py-4 text-right text-[#64748B]">{category.sort_order}</td></tr>)}</tbody>
            </table>
          </div>
          <ul className="divide-y divide-[#E2E8F0] md:hidden">{categories.map((category) => <li key={category.id} className="space-y-3 p-4"><div><p className="font-medium text-[#17212B]">{category.name}</p><p className="text-sm text-[#64748B]">/{category.slug}</p></div><div className="flex flex-wrap gap-2"><AdminStatusBadge active={category.active} /><AdminStatusBadge active={category.show_on_home} activeLabel="Home" inactiveLabel="Fuera de Home" /><span className="rounded-full bg-[#F6F8FA] px-2.5 py-1 text-xs text-[#64748B]">Orden {category.sort_order}</span></div></li>)}</ul>
        </section>
      )}
    </div>
  );
}
