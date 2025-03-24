import { System } from '@/types/system';

export default function SystemCard({ system }: { system: System }) {
  return (
    <div className="bg-white border-l-4 border-indigo-600 shadow-md rounded-md px-6 py-5 mb-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-serif font-bold text-gray-900">
        {system.name}
      </h2>
      <p className="mt-3 text-gray-700 font-light font-sans">
        {system.description}
      </p>
      <p className="mt-4 text-sm text-gray-500">🧬 {new Date(system.created_at).toLocaleDateString()}</p>
    </div>
  );
}

