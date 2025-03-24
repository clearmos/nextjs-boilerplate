import { Manifesto } from '@/types/manifesto';

export default function ManifestoCard({ manifesto }: { manifesto: Manifesto }) {
  return (
    <div className="bg-[#f9f8f4] border-l-4 border-yellow-600 shadow-md rounded-md px-6 py-5 mb-6 transition hover:shadow-xl">
      <h2 className="text-2xl font-serif font-bold text-gray-900">
        {manifesto.title}
      </h2>
      <p className="mt-3 text-gray-700 font-light font-sans">
        {manifesto.content}
      </p>
      <p className="mt-4 text-sm text-gray-500">
        📅 {new Date(manifesto.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}
