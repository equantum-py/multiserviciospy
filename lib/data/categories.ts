import { unstable_cache } from "next/cache";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { serviceCategories } from "@/data/services";

const fallback = serviceCategories.map((c) => ({ id:c.id, name:c.name, slug:c.slug, description:null, icon:c.icon, image_url:null, active:true, featured:c.order<=8, show_on_home:c.order<=8, sort_order:c.order, created_at:"", updated_at:"" }));

export const getActiveCategories = unstable_cache(async () => {
  if (!isSupabaseConfigured()) return fallback;
  const db=await createClient(); const {data,error}=await db.from("categories").select("*").eq("active",true).order("sort_order");
  if(error) throw error; return data ?? [];
}, ["active-categories"], {tags:["categories"], revalidate:300});

export const getHomeCategories = unstable_cache(async () => {
  if (!isSupabaseConfigured()) return fallback.filter(c=>c.show_on_home);
  const db=await createClient(); const {data,error}=await db.from("categories").select("*").eq("active",true).eq("show_on_home",true).order("sort_order");
  if(error) throw error; return data ?? [];
}, ["home-categories"], {tags:["categories"], revalidate:300});
