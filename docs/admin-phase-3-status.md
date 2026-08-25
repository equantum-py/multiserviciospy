# Fase 3 — base administrativa de lectura

El panel bajo `/admin` es una fundación visual y de consulta para el CMS. No implementa autenticación, gestión de usuarios ni operaciones de escritura.

## Estado de seguridad

- No se modifican las políticas RLS, los grants de la base ni las políticas de Storage.
- Si existe una credencial administrativa configurada exclusivamente en el entorno del servidor, el panel puede mostrar métricas completas.
- Sin esa credencial, el panel consulta únicamente el contenido que las políticas públicas permiten leer. Por diseño, no expone contenido inactivo ni métricas administrativas que lo revelen.
- No se usan ni se almacenan service-role keys en el repositorio.

## Límite de esta fase

El panel **no es apto para producción** hasta que una fase posterior agregue autenticación y autorización administrativas. Antes de habilitarlo públicamente deben existir controles de acceso, sesiones y operaciones de gestión protegidas.

No se inició esa fase de Auth ni se implementó CRUD en esta entrega.
