import { getSupabaseClient } from '@/lib/supabase'
import { System } from '@/types/system'
import { CalendarIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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
    <main className="max-w-3xl mx-auto p-4 space-y-8">
      
      {/* 🧭 Navigation */}
      <Link href="/systems" className="text-sm text-blue-600 hover:underline">
        ← Back to Systems
      </Link>

      {/* 🧠 System Title */}
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        🧠 {system.name}
      </h1>

      {/* 📖 Description */}
      <p className="text-lg text-gray-700">{system.description}</p>

      {/* 🗓️ Created Date */}
      <div className="text-sm text-gray-500 flex items-center gap-2 mt-2">
        <CalendarIcon />
        {formattedDate}
      </div>

      {/* 🔗 Related Manifestos Placeholder */}
      <section className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Related Manifestos
        </h2>
        <p className="text-gray-500 italic">
          Coming soon: insights that echo this system’s ethos...
        </p>
      </section>

      {/* 👁️ Observer Logs Placeholder */}
      <section className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Observer Logs
        </h2>
        <p className="text-gray-500 italic">
          Coming soon: real-time reflections and insights from observers engaging with this system.
        </p>
      </section>
    </main>
  )
}
