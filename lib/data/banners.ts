import { unstable_cache } from "next/cache";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const getActiveBanners=unstable_cache(async()=>{
  if(!isSupabaseConfigured()) return [];
  const now=new Date().toISOString(); const db=await createClient();
  const {data,error}=await db.from("banners").select("*").eq("active",true).or(`starts_at.is.null,starts_at.lte.${now}`).or(`ends_at.is.null,ends_at.gte.${now}`).order("sort_order");
  if(error) throw error; return data??[];
},["active-banners"],{tags:["banners"],revalidate:60});
