import { getSupabaseClient } from '@/lib/supabase'
const supabase = getSupabaseClient()

type PageProps = {
  params: {
    id: string
  }
}

export default async function ManifestoDetail({ params }: PageProps) {
  const { data, error } = await supabase.from("manifesto").select("*").eq("id", params.id).single();
  if (error) return <p>Error loading manifesto</p>;

  return (
    <div className="container">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

