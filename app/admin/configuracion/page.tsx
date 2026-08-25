import { Settings2 } from "lucide-react";
import { getAdminSettings } from "@/lib/data/admin";
import { AdminEmptyState, AdminPageHeader, AdminScopeNotice } from "../components/admin-ui";

const settingLabels: Record<string, string> = { brandName: "Marca", centralPhone: "Teléfono central", centralWhatsApp: "WhatsApp central", serviceHours: "Horario de atención", centralAttentionLabel: "Mensaje de atención" };
function displayValue(value: unknown) { if (value === null || value === undefined || value === "") return "No configurado"; return typeof value === "string" ? value : JSON.stringify(value); }

export default async function AdminSettingsPage() {
  const { scope, settings } = await getAdminSettings();
  return <div className="space-y-7"><AdminPageHeader title="Configuración" description="Valores globales disponibles en site_settings. Consulta de solo lectura." /><AdminScopeNotice scope={scope} />{settings.length === 0 ? <AdminEmptyState icon={Settings2} title="No hay configuración disponible" description="No se sustituyen valores ausentes por datos estimados." /> : <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"><dl className="divide-y divide-[#E2E8F0]">{settings.map((setting) => <div key={setting.key} className="grid gap-2 p-5 sm:grid-cols-[220px_1fr]"><dt className="text-sm font-medium text-[#17212B]">{settingLabels[setting.key] ?? setting.key}</dt><dd className="break-words text-sm text-[#64748B]">{displayValue(setting.value)}</dd></div>)}</dl></section>}<p className="text-xs text-[#64748B]">Los valores sin definir se presentan como “No configurado”.</p></div>;
}
