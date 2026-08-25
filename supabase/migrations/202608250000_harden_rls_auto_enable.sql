-- Keep the event trigger helper internal. Trigger execution is unaffected.
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
