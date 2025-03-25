// lib/fetchSystems.ts
import { getSupabaseClient } from '@/lib/supabase'
import { System } from '@/types/system'

export async function fetchSystems(): Promise<System[]> {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('systems')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching systems:', error)
    return []
  }

  return data as System[]
}

