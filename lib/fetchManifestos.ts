import supabase from "./supabase";

export async function getManifestos() {
  let { data, error } = await supabase.from("manifesto").select("*");
  if (error) throw error;
  return data;
}

