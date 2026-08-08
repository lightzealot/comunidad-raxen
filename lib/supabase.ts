import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://muflhcfvwpnemphwsxll.supabase.co",
  "sb_publishable_vx7fwa6h3JS_G2YAFG6e4w_QUiOAbdA",
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } },
);
