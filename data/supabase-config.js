/* COOKIE.CO · Conexión a Supabase (Fase 2)
   Copia la "anon public key" desde Supabase → Project Settings → API.
   La anon key es pública por diseño; la seguridad la dan las políticas RLS de supabase/01_resenas.sql.
   NUNCA pegues aquí la "service_role key". */
window.COOKIECO_SUPABASE = {
  url: 'https://hiueopvquetxeiazsqet.supabase.co',  // región us-east-2
  anonKey: 'sb_publishable_hDeW0jY2E8NjnSu08Qjp8g_5pgK4DpI',  // publishable key (pública)
};
