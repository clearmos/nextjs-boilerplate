// components/SystemCard.tsx
'use client'

import { System } from '@/types/system'
import Link from 'next/link'
import { CalendarIcon } from '@radix-ui/react-icons'

export default function SystemCard({ system }: { system: System }) {
  const formattedDate = new Date(system.created_at).toLocaleDateString('en-GB')

  return (
    <Link href={`/systems/${system.id}`}>
      <div className="bg-white rounded shadow p-4 mb-4 hover:bg-gray-50 transition">
        <h2 className="text-xl font-semibold">{system.name}</h2>
        <p className="text-sm text-gray-700">{system.description}</p>
        <div className="text-xs text-gray-500 mt-2 flex items-center gap-2">
          <CalendarIcon /> {formattedDate}
        </div>
      </div>
    </Link>
  )
}
