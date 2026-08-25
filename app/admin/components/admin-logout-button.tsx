import { LogOut } from "lucide-react";
import { logout } from "../login/actions";

export function AdminLogoutButton() {
  return <form action={logout}><button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-100 hover:text-[#17212B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"><LogOut size={17} aria-hidden="true" />Salir</button></form>;
}
