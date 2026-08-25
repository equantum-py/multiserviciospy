-- Data API access is required in addition to RLS. RLS policies continue to
-- limit rows and no INSERT, UPDATE or DELETE privilege is granted here.
grant select on table public.categories, public.services, public.service_categories, public.banners, public.site_settings to anon, authenticated;
