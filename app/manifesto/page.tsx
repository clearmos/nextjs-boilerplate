// app/manifesto/page.tsx
import { fetchManifestos } from '@/lib/fetchManifestos'
import ManifestoCard from '@/components/ManifestoCard'

export default async function ManifestoPage() {
  const manifestos = await fetchManifestos()

  return (
    <section>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>📜 Manifestos</h1>
      {manifestos.length === 0 ? (
        <p>No manifestos found. The silence is temporary.</p>
      ) : (
        manifestos.map((m) => <ManifestoCard key={m.id} manifesto={m} />)
      )}
    </section>
  )
}
