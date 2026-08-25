import { Wrench } from "lucide-react";
import { redirect } from "next/navigation";
import { isSupabaseConfigured, createClient } from "@/lib/supabase/server";
import { login } from "./actions";

function message(error?: string, loggedOut?: string) {
  if (loggedOut) return "La sesión se cerró correctamente.";
  if (error === "configuration") return "La autenticación todavía no está configurada en este entorno.";
  if (error === "credentials") return "El email o la contraseña no son válidos.";
  return null;
}

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string; logged_out?: string }> }) {
  const params = await searchParams;
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) redirect(params.next?.startsWith("/admin") ? params.next : "/admin");
  }
  const notice = message(params.error, params.logged_out);
  const next = params.next?.startsWith("/admin") ? params.next : "/admin";

  return <main className="grid min-h-screen place-items-center bg-[#F6F8FA] px-4 py-10"><section className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"><div className="flex items-center gap-3 text-[#102A43]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#102A43] text-white"><Wrench size={21} /></span><div><p className="text-sm font-bold">TODOSSERVICIOS <span className="text-[#F97316]">PY</span></p><p className="text-xs text-[#64748B]">Administración</p></div></div><div className="mt-8"><h1 className="text-2xl font-semibold tracking-tight text-[#17212B]">Ingresar al panel</h1><p className="mt-2 text-sm leading-6 text-[#64748B]">Usá las credenciales autorizadas de administración.</p></div>{notice && <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900" role="alert">{notice}</p>}<form action={login} className="mt-6 space-y-4"><input type="hidden" name="next" value={next} /><label className="block text-sm font-medium text-[#17212B]">Email<input name="email" type="email" autoComplete="email" required className="mt-1.5 min-h-11 w-full rounded-lg border border-[#CBD5E1] px-3 outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100" /></label><label className="block text-sm font-medium text-[#17212B]">Contraseña<input name="password" type="password" autoComplete="current-password" required className="mt-1.5 min-h-11 w-full rounded-lg border border-[#CBD5E1] px-3 outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100" /></label><button type="submit" className="min-h-11 w-full rounded-lg bg-[#102A43] px-4 text-sm font-semibold text-white transition hover:bg-[#0B1F33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]">Ingresar</button></form><p className="mt-6 text-xs leading-5 text-[#64748B]">Acceso restringido. La creación de usuarios no está disponible desde este panel.</p></section></main>;
}
