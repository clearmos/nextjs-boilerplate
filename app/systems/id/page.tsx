// app/systems/id/page.tsx
import { getSupabaseClient } from '@/lib/supabase'
import { System } from '@/types/system'
import { CalendarIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    id: string
  }
}

export default async function SystemDetailPage({ params }: PageProps) {
  const supabase = getSupabaseClient()
  const { data: system, error } = await supabase
    .from('systems')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !system) {
    console.error('System not found:', error)
    return notFound()
  }

  const formattedDate = new Date(system.created_at).toLocaleDateString('en-GB')

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2">🧠 {system.name}</h1>
      <p className="text-gray-800 mb-2">{system.description}</p>
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <CalendarIcon /> {formattedDate}
      </div>
    </main>
  )
}

