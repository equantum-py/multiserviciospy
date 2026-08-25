import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import type { Category, Service, SiteSetting } from "@/types/cms";

export type AdminDataScope = "complete" | "public" | "unavailable";

async function getAdminDataClient() {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { client: createAdminClient(), scope: "complete" as const };
  }
  if (isSupabaseConfigured()) return { client: await createClient(), scope: "public" as const };
  return null;
}

export async function getCmsDashboardData() {
  const connection = await getAdminDataClient();
  if (!connection) return { scope: "unavailable" as const, stats: null, recentServices: [] as Service[] };
  const { client, scope } = connection;
  const [categories, services, banners] = await Promise.all([
    client.from("categories").select("id,active,show_on_home", { count: "exact" }),
    client.from("services").select("id,active,featured,show_on_home", { count: "exact" }),
    client.from("banners").select("id,active", { count: "exact" }),
  ]);
  if (categories.error || services.error || banners.error) throw new Error("No pudimos consultar las métricas del CMS.");
  const { data: recentServices, error: recentError } = await client.from("services").select("*").order("updated_at", { ascending: false }).limit(5);
  if (recentError) throw new Error("No pudimos cargar los últimos servicios.");
  const categoryRows = categories.data ?? [];
  const serviceRows = services.data ?? [];
  const bannerRows = banners.data ?? [];
  return {
    scope,
    stats: {
      categoriesTotal: categories.count ?? categoryRows.length,
      categoriesActive: categoryRows.filter((row) => row.active).length,
      categoriesHome: categoryRows.filter((row) => row.active && row.show_on_home).length,
      servicesTotal: services.count ?? serviceRows.length,
      servicesActive: serviceRows.filter((row) => row.active).length,
      servicesFeatured: serviceRows.filter((row) => row.active && row.featured).length,
      servicesHome: serviceRows.filter((row) => row.active && row.show_on_home).length,
      bannersTotal: banners.count ?? bannerRows.length,
      bannersActive: bannerRows.filter((row) => row.active).length,
    },
    recentServices: (recentServices ?? []) as Service[],
  };
}

export async function getAdminCategories() {
  const connection = await getAdminDataClient();
  if (!connection) return { scope: "unavailable" as const, categories: [] as Category[] };
  const { data, error } = await connection.client.from("categories").select("*").order("sort_order");
  if (error) throw new Error("No pudimos cargar las categorías.");
  return { scope: connection.scope, categories: (data ?? []) as Category[] };
}

export type AdminService = Service & { service_categories?: { categories: Pick<Category, "name" | "slug"> | null }[] };

export async function getAdminServices() {
  const connection = await getAdminDataClient();
  if (!connection) return { scope: "unavailable" as const, services: [] as AdminService[] };
  const { data, error } = await connection.client.from("services").select("*, service_categories(categories(name,slug))").order("sort_order").order("name");
  if (error) throw new Error("No pudimos cargar los servicios.");
  return { scope: connection.scope, services: (data ?? []) as AdminService[] };
}

export async function getAdminSettings() {
  const connection = await getAdminDataClient();
  if (!connection) return { scope: "unavailable" as const, settings: [] as SiteSetting[] };
  const { data, error } = await connection.client.from("site_settings").select("*").order("key");
  if (error) throw new Error("No pudimos cargar la configuración.");
  return { scope: connection.scope, settings: (data ?? []) as SiteSetting[] };
}
