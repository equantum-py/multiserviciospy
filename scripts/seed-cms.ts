import { createClient } from "@supabase/supabase-js";
import { serviceCategories, services } from "../data/services.ts";
import { siteConfig } from "../lib/site-config.ts";

const url=process.env.NEXT_PUBLIC_SUPABASE_URL; const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
if(!url||!key) throw new Error("Configurá NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY para ejecutar el seed.");
const db=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});

async function run(){
  const categoryRows=serviceCategories.map(c=>({name:c.name,slug:c.slug,icon:c.icon,active:true,featured:c.order<=8,show_on_home:c.order<=8,sort_order:c.order}));
  const {data:cats,error:catError}=await db.from("categories").upsert(categoryRows,{onConflict:"slug"}).select("id,slug"); if(catError) throw catError;
  const bySlug=new Map(cats?.map(c=>[c.slug,c.id])); const sourceToDb=new Map(serviceCategories.map(c=>[c.id,bySlug.get(c.slug)]));
  const serviceRows=services.map(s=>({name:s.name,slug:s.slug,short_description:s.shortDescription,service_type:s.serviceType,image_url:s.image??null,active:s.active,featured:s.featured,show_on_home:s.featured,sort_order:s.order,keywords:s.keywords}));
  const {data:svcs,error:svcError}=await db.from("services").upsert(serviceRows,{onConflict:"slug"}).select("id,slug"); if(svcError) throw svcError;
  const serviceIds=new Map(svcs?.map(s=>[s.slug,s.id]));
  const relations=services.flatMap(s=>s.categories.map(sourceCat=>({service_id:serviceIds.get(s.slug),category_id:sourceToDb.get(sourceCat)}))).filter(r=>r.service_id&&r.category_id);
  if(relations.length){ const {error}=await db.from("service_categories").upsert(relations,{onConflict:"service_id,category_id",ignoreDuplicates:true}); if(error) throw error; }
  const settings=Object.entries(siteConfig).filter(([,value])=>value!==undefined).map(([key,value])=>({key,value}));
  const {error:settingsError}=await db.from("site_settings").upsert(settings,{onConflict:"key"}); if(settingsError) throw settingsError;
  console.log(JSON.stringify({categories:categoryRows.length,services:serviceRows.length,relations:relations.length,settings:settings.length},null,2));
}
run().catch(e=>{console.error(e);process.exit(1)});
