"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid2X2, House, Images, LayoutDashboard, Settings, Wrench } from "lucide-react";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/home", label: "Home", icon: House },
  { href: "/admin/banners", label: "Banners", icon: Images },
  { href: "/admin/categorias", label: "Categorías", icon: Grid2X2 },
  { href: "/admin/servicios", label: "Servicios", icon: Wrench },
  { href: "/admin/configuracion", label: "Configuración", icon: Settings },
];

export function AdminNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return <nav className="space-y-1" aria-label="Navegación administrativa">
    {items.map(({ href, label, icon: Icon, exact }) => {
      const active = exact ? pathname === href : pathname.startsWith(href);
      return <Link key={href} href={href} onClick={onNavigate} className={`group flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${active ? "bg-[#eaf2f8] text-[#102A43]" : "text-slate-600 hover:bg-slate-100 hover:text-[#17212B]"}`}>
        <Icon size={18} strokeWidth={active ? 2.25 : 1.9} aria-hidden="true" />
        <span className="flex-1">{label}</span>{active && <span className="h-5 w-1 rounded-full bg-[#F97316]" aria-hidden="true" />}
      </Link>;
    })}
  </nav>;
}
