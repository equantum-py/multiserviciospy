import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { serviceCategories, services } from "../data/services.ts";
import { siteConfig } from "../lib/site-config.ts";

const target = resolve("supabase/migrations/202608250002_seed_admin_cms_initial_content.sql");
const sql = (value) => value === null ? "null" : `'${String(value).replaceAll("'", "''")}'`;
const bool = (value) => value ? "true" : "false";
const json = (value) => `${sql(JSON.stringify(value))}::jsonb`;

const categoryRows = serviceCategories.map((category) => [
  category.name, category.slug, category.icon, true, category.order <= 8, category.order <= 8, category.order,
]);
const serviceRows = services.map((service) => [
  service.name, service.slug, service.shortDescription, service.serviceType, service.image ?? null,
  service.active, service.featured, service.featured, service.order, service.keywords,
]);
const categorySlugById = new Map(serviceCategories.map((category) => [category.id, category.slug]));
const relations = services.flatMap((service) => service.categories.map((categoryId) => [service.slug, categorySlugById.get(categoryId)]));
const settings = Object.entries(siteConfig).filter(([, value]) => value !== undefined);

const values = (rows, render) => rows.map(render).join(",\n");
const content = `-- Generated from data/services.ts and lib/site-config.ts. Do not hand-edit.\n-- Regenerate with: node --experimental-strip-types scripts/generate-cms-seed-migration.mjs\n\nbegin;\n\ninsert into public.categories (name, slug, icon, active, featured, show_on_home, sort_order) values\n${values(categoryRows, (r) => `  (${sql(r[0])}, ${sql(r[1])}, ${sql(r[2])}, ${bool(r[3])}, ${bool(r[4])}, ${bool(r[5])}, ${r[6]})`)}\non conflict (slug) do update set\n  name = excluded.name, icon = excluded.icon, active = excluded.active, featured = excluded.featured,\n  show_on_home = excluded.show_on_home, sort_order = excluded.sort_order;\n\ninsert into public.services (name, slug, short_description, service_type, image_url, active, featured, show_on_home, sort_order, keywords) values\n${values(serviceRows, (r) => `  (${sql(r[0])}, ${sql(r[1])}, ${sql(r[2])}, ${sql(r[3])}, ${sql(r[4])}, ${bool(r[5])}, ${bool(r[6])}, ${bool(r[7])}, ${r[8]}, ${sql(`{${r[9].map((item) => `"${item.replaceAll('"', '\\"') }"`).join(",")}}`)}::text[])`)}\non conflict (slug) do update set\n  name = excluded.name, short_description = excluded.short_description, service_type = excluded.service_type,\n  image_url = excluded.image_url, active = excluded.active, featured = excluded.featured,\n  show_on_home = excluded.show_on_home, sort_order = excluded.sort_order, keywords = excluded.keywords;\n\ninsert into public.service_categories (service_id, category_id)\nselect services.id, categories.id\nfrom (values\n${values(relations, (r) => `  (${sql(r[0])}, ${sql(r[1])})`)}\n) as seed(service_slug, category_slug)\njoin public.services on services.slug = seed.service_slug\njoin public.categories on categories.slug = seed.category_slug\non conflict (service_id, category_id) do nothing;\n\ninsert into public.site_settings (key, value) values\n${values(settings, ([key, value]) => `  (${sql(key)}, ${json(value)})`)}\non conflict (key) do update set value = excluded.value;\n\ncommit;\n`;

writeFileSync(target, content);
