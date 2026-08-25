# TodosServicios PY — Supabase CMS setup

## Estado
Fase 2 prepara PostgreSQL, Storage, RLS, seed y data layer. No incluye login ni CRUD visual.

## 1. Crear proyecto
Crear un proyecto Supabase dedicado a TodosServicios PY. Preferir región `sa-east-1` por cercanía con Paraguay si el plan disponible lo permite.

## 2. Variables
Copiar `.env.example` a `.env.local` y completar `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` y, únicamente para seed/operaciones server-side privilegiadas, `SUPABASE_SERVICE_ROLE_KEY`. Nunca exponer service role al cliente.

## 3. Migración
Ejecutar `supabase/migrations/202608250001_admin_cms_core.sql` mediante el flujo de migraciones/SQL del proyecto. La migración crea `categories`, `services`, `service_categories`, `banners`, `site_settings`, triggers `updated_at`, índices, RLS y buckets públicos para imágenes.

## 4. Storage
Buckets: `banners`, `services`, `categories`, `branding`. Son públicos para lectura porque alojan recursos públicos del sitio. No existen políticas públicas de escritura. Upload/update/delete se habilitarán solo para admins autenticados en una fase posterior.

## 5. Seed
Ejecutar `npm run seed:cms` con variables server disponibles. Es idempotente: categorías y servicios hacen upsert por `slug`; settings por `key`; relaciones usan la PK compuesta.

## 6. Comprobación
Verificar que RLS esté activo, que anon pueda leer solo registros activos/publicados, que anon no pueda insertar/editar/eliminar y que los buckets no acepten escritura pública.

## 7. Fallback de desarrollo
Mientras Supabase no esté configurado, `lib/data/categories.ts`, `services.ts` y `settings.ts` usan explícitamente el dataset existente. Banners devuelve una lista vacía. Esto evita romper previews durante la transición. En la integración final de producción, Supabase será obligatorio y `data/services.ts` dejará de ser fuente de runtime.

## 8. Cache
El data layer usa tags `categories`, `services`, `banners`, `settings`. El panel futuro invalidará estos tags con revalidación puntual después de cada mutación.

## Próximo paso
Después de comprobar la base real y ejecutar el seed: Fase 3 — Admin Base / Dashboard.
