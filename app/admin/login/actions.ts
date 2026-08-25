"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function safeNext(value: FormDataEntryValue | null) {
  return typeof value === "string" && value.startsWith("/admin") && !value.startsWith("//") ? value : "/admin";
}

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const next = safeNext(formData.get("next"));
  if (typeof email !== "string" || typeof password !== "string" || !email || !password) redirect(`/admin/login?error=credentials&next=${encodeURIComponent(next)}`);

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect(`/admin/login?error=credentials&next=${encodeURIComponent(next)}`);
  redirect(next);
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login?logged_out=1");
}
