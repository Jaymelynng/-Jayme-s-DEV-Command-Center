import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://qypzzoqmpzwkhpynoajj.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_OF4sAcQuMrZ70wkWhS-sDQ_Kjfh1W4i";

export const supabase = createClient(supabaseUrl, supabaseKey);

export type ProjectDecision = {
  id: string;
  decision: "keep" | "delete" | "combine";
  combine_with: string | null;
  notes: string | null;
  updated_at: string;
};
