create extension if not exists pgcrypto;

create or replace function public.set_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;

create table if not exists public.categories (
 id uuid primary key default gen_random_uuid(), name text not null, slug text not null unique, description text, icon text, image_url text,
 active boolean not null default true, featured boolean not null default false, show_on_home boolean not null default false, sort_order integer not null default 0,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.services (
 id uuid primary key default gen_random_uuid(), name text not null, slug text not null unique, short_description text, description text,
 service_type text not null default 'evaluation' check (service_type in ('quick','evaluation','specialized')), image_url text,
 active boolean not null default true, featured boolean not null default false, show_on_home boolean not null default false, sort_order integer not null default 0,
 keywords text[] not null default '{}', seo_title text, seo_description text, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.service_categories (
 service_id uuid not null references public.services(id) on delete cascade,
 category_id uuid not null references public.categories(id) on delete cascade,
 created_at timestamptz not null default now(), primary key(service_id, category_id)
);
create table if not exists public.banners (
 id uuid primary key default gen_random_uuid(), internal_name text not null, desktop_image_url text, mobile_image_url text, alt_text text, link_url text, cta_label text,
 open_in_new_tab boolean not null default false, active boolean not null default true, sort_order integer not null default 0, starts_at timestamptz, ends_at timestamptz,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(), check (ends_at is null or starts_at is null or ends_at >= starts_at)
);
create table if not exists public.site_settings (key text primary key, value jsonb not null default 'null'::jsonb, updated_at timestamptz not null default now());

drop trigger if exists categories_updated_at on public.categories; create trigger categories_updated_at before update on public.categories for each row execute function public.set_updated_at();
drop trigger if exists services_updated_at on public.services; create trigger services_updated_at before update on public.services for each row execute function public.set_updated_at();
drop trigger if exists banners_updated_at on public.banners; create trigger banners_updated_at before update on public.banners for each row execute function public.set_updated_at();
drop trigger if exists site_settings_updated_at on public.site_settings; create trigger site_settings_updated_at before update on public.site_settings for each row execute function public.set_updated_at();

create index if not exists categories_public_idx on public.categories(active, show_on_home, sort_order);
create index if not exists services_public_idx on public.services(active, featured, show_on_home, sort_order);
create index if not exists service_categories_category_idx on public.service_categories(category_id, service_id);
create index if not exists banners_public_idx on public.banners(active, sort_order, starts_at, ends_at);

alter table public.categories enable row level security; alter table public.services enable row level security; alter table public.service_categories enable row level security; alter table public.banners enable row level security; alter table public.site_settings enable row level security;

drop policy if exists "public read active categories" on public.categories; create policy "public read active categories" on public.categories for select to anon, authenticated using (active = true);
drop policy if exists "public read active services" on public.services; create policy "public read active services" on public.services for select to anon, authenticated using (active = true);
drop policy if exists "public read active service relations" on public.service_categories; create policy "public read active service relations" on public.service_categories for select to anon, authenticated using (exists(select 1 from public.services s where s.id=service_id and s.active) and exists(select 1 from public.categories c where c.id=category_id and c.active));
drop policy if exists "public read active banners" on public.banners; create policy "public read active banners" on public.banners for select to anon, authenticated using (active=true and (starts_at is null or starts_at <= now()) and (ends_at is null or ends_at >= now()));
drop policy if exists "public read site settings" on public.site_settings; create policy "public read site settings" on public.site_settings for select to anon, authenticated using (key in ('brandName','centralPhone','centralWhatsApp','centralEmail','serviceHours','instagram','facebook','coverage','centralAttentionLabel'));

insert into storage.buckets (id,name,public) values ('banners','banners',true),('services','services',true),('categories','categories',true),('branding','branding',true) on conflict(id) do update set public=excluded.public;
drop policy if exists "public read cms images" on storage.objects; create policy "public read cms images" on storage.objects for select to public using (bucket_id in ('banners','services','categories','branding'));
-- No public INSERT/UPDATE/DELETE storage policies are created. Admin write policies arrive with Supabase Auth.
