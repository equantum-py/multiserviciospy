import { unstable_cache } from "next/cache";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site-config";

export const getSiteSetting=unstable_cache(async(key:string)=>{
  if(!isSupabaseConfigured()) return siteConfig[key as keyof typeof siteConfig] ?? null;
  const db=await createClient(); const {data,error}=await db.from("site_settings").select("value").eq("key",key).maybeSingle();
  if(error) throw error; return data?.value ?? null;
},["site-setting"],{tags:["settings"],revalidate:300});
