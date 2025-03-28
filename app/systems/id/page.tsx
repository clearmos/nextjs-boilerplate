import { getSupabaseClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { CalendarIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

type PageProps = {
  params: {
    id: string
  }
}

export default async function SystemDetailPage({ params }: PageProps) {
  const supabase = getSupabaseClient()

  // Fetch system details
  const { data: system, error: systemError } = await supabase
    .from('systems')
    .select('*')
    .eq('id', params.id)
    .single()

  if (systemError || !system) {
    console.error('System not found:', systemError)
    return notFound()
  }

  // Fetch related manifestos
  const { data: manifestos = [], error: manifestoError } = await supabase
    .from('manifesto')
    .select('*')
    .eq('system_id', params.id)

  const formattedDate = new Date(system.created_at).toLocaleDateString('en-GB')

  return (
    <main className="p-6 space-y-8">
      {/* Navigation */}
      <Link href="/systems" className="text-sm text-blue-600 hover:underline">
        ← Back to Systems
      </Link>

      {/* System Info */}
      <div>
        <h1 className="text-2xl font-bold">{system.name}</h1>
        <p className="text-gray-800 mt-2">{system.description}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <CalendarIcon className="mr-1" />
          {formattedDate}
        </div>
      </div>

      {/* Related Manifestos */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">Related Manifestos</h2>

        {manifestoError ? (
          <p className="text-red-500">Failed to load manifestos.</p>
        ) : manifestos.length === 0 ? (
          <p className="text-gray-500 italic">No manifestos connected to this system yet.</p>
        ) : (
          <ul className="space-y-4">
            {manifestos.map((m) => (
              <li key={m.id} className="border p-4 rounded shadow-sm">
                <h3 className="font-bold">{m.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{m.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Observer Logs Placeholder */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">Observer Logs</h2>
        <p className="text-gray-500 italic">
          Coming soon: real-time reflections and insights from observers engaging with this system.
        </p>
      </section>
    </main>
  )
}
