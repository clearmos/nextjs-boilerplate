import { getManifestos } from "@/lib/fetchManifestos";

export default async function ManifestoPage() {
  const manifestos = await getManifestos();

  return (
    <div className="container">
      <h1>Manifestos</h1>
      <ul>
        {manifestos.map((m) => (
          <li key={m.id}>
            <a href={`/manifesto/${m.id}`}>{m.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
