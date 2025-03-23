// components/ManifestoCard.tsx
import { Manifesto } from '@/types/manifesto'

export default function ManifestoCard({ manifesto }: { manifesto: Manifesto }) {
  return (
    <div style={{
      background: '#fff',
      padding: '1.5rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2>{manifesto.title}</h2>
      <p>{manifesto.content}</p>
      <small style={{ opacity: 0.6 }}>🗓 {new Date(manifesto.created_at).toLocaleDateString()}</small>
    </div>
  )
}

