// lib/fetchManifestos.ts
import { getSupabaseClient } from '@/lib/supabase'
import { Manifesto } from '@/types/manifesto'

export async function fetchManifestos(): Promise<Manifesto[]> {
const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('manifesto')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching manifestos:', error)
    return []
  }

  return data as Manifesto[]
}
