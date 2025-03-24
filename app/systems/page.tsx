import { createClient } from '@/lib/supabase';
import { System } from '@/types/system';
import SystemCard from '@/components/SystemCard';

export default async function SystemsPage() {
  const supabase = createClient();
  const { data: systems } = await supabase.from('systems').select('*');

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8 font-serif">🧩 Systems</h1>
      {systems && systems.length > 0 ? (
        systems.map(system => (
          <SystemCard key={system.id} system={system} />
        ))
      ) : (
        <p className="text-gray-500">No systems defined yet. The architecture is forming.</p>
      )}
    </main>
  );
}

