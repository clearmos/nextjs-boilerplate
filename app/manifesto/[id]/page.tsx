import { getSupabaseClient } from '@/lib/supabase'
import type { Manifesto } from '@/types/manifesto'

type PageProps = {
  params: {
    id: string
  }
}

export default async function ManifestoDetail({ params }: PageProps): Promise<JSX.Element> {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('manifesto')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !data) {
    return <p>Error loading manifesto</p>
  }

  return (
    <div className="container">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  )
}
