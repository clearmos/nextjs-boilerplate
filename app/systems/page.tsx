// app/systems/page.tsx
import { fetchSystems } from '@/lib/fetchSystems'
import { System } from '@/types/system'
import SystemCard from '@/components/SystemCard'

export default async function SystemsPage() {
  const systems: System[] = await fetchSystems()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">🧠 Systems</h1>
      {systems.length === 0 ? (
        <p>No systems found. The architecture awaits.</p>
      ) : (
        systems.map((system) => (
          <SystemCard key={system.id} system={system} />
        ))
      )}
    </main>
  )
}

