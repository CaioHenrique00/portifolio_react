const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_CERT_BASE = supabaseUrl 
  ? `${supabaseUrl}/storage/v1/object/public/Certificates`
  : '';
export const CERTIFICATES = {
  UNAMA_ADS: `${SUPABASE_CERT_BASE}/Diploma.png`,
  FIAP_ENG: `${SUPABASE_CERT_BASE}/fiap-engenharia.png`,
  FIAP_UX: `${SUPABASE_CERT_BASE}/fiap-ux.png`,
  UDEMY_FULLSTACK: `${SUPABASE_CERT_BASE}/udemy-fullstack.png`,
  ROCKSEAT_CLEAN_CODE: `${SUPABASE_CERT_BASE}/rockseat-clean-code.png`,
  FAT_ARQUITETURA: `${SUPABASE_CERT_BASE}/fat-arquitetura.png`,
};