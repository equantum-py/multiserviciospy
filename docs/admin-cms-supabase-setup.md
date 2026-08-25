# TodosServicios PY — Supabase CMS setup

## Estado
Fase 2 prepara PostgreSQL, Storage, RLS, seed y data layer. No incluye login ni CRUD visual.

## 1. Crear proyecto
Crear un proyecto Supabase dedicado a TodosServicios PY. Preferir región `sa-east-1` por cercanía con Paraguay si el plan disponible lo permite.

## 2. Variables
Copiar `.env.example` a `.env.local` y completar `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Nunca exponer una service role al cliente.

## 3. Migraciones
Aplicar las migraciones en orden: hardening de `rls_auto_enable`, CMS core, seed inicial y permiso de lectura Data API. El CMS core crea `categories`, `services`, `service_categories`, `banners`, `site_settings`, triggers `updated_at`, índices, RLS y buckets públicos para imágenes. El permiso Data API otorga solamente `SELECT`; RLS continúa filtrando filas y no hay escritura pública.

## 4. Storage
Buckets: `banners`, `services`, `categories`, `branding`. Son públicos para lectura porque alojan recursos públicos del sitio. No existen políticas públicas de escritura. Upload/update/delete se habilitarán solo para admins autenticados en una fase posterior.

## 5. Seed
El bootstrap inicial se aplica con la migración SQL versionada `202608250002_seed_admin_cms_initial_content.sql`, generada desde `data/services.ts` y `lib/site-config.ts` mediante `node --experimental-strip-types scripts/generate-cms-seed-migration.mjs`. Es idempotente: categorías y servicios hacen upsert por `slug`; settings por `key`; relaciones usan la PK compuesta. `scripts/seed-cms.ts` se conserva para desarrollo local futuro y requiere una service role fuera de Git.

## 6. Comprobación
Verificar que RLS esté activo, que anon pueda leer solo registros activos/publicados, que anon no pueda insertar/editar/eliminar y que los buckets no acepten escritura pública.

## 7. Fallback de desarrollo
Mientras Supabase no esté configurado, `lib/data/categories.ts`, `services.ts` y `settings.ts` usan explícitamente el dataset existente. Banners devuelve una lista vacía. Esto evita romper previews durante la transición. En la integración final de producción, Supabase será obligatorio y `data/services.ts` dejará de ser fuente de runtime.

## 8. Cache
El data layer usa tags `categories`, `services`, `banners`, `settings`. El panel futuro invalidará estos tags con revalidación puntual después de cada mutación.

## Próximo paso
Después de comprobar la base real y ejecutar el seed: Fase 3 — Admin Base / Dashboard.
