'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewSystemForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/systems', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    })

    if (res.ok) {
      setName('')
      setDescription('')
      router.refresh() // Re-fetch the systems list
    } else {
      alert('Something went wrong.')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-lg font-semibold mb-2">Create a New System</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="System Name"
        required
        className="w-full p-2 border mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="System Description"
        required
        className="w-full p-2 border mb-2"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? 'Saving...' : 'Create System'}
      </button>
    </form>
  )
}
