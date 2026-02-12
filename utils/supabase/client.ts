//configuração do cliente do supabase para o frontend (navegador)
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Cria um cliente que funciona especificamente no navegador
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
