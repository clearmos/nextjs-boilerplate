import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [manifesto, setManifesto] = useState([]);

  useEffect(() => {
    const fetchManifesto = async () => {
      let { data, error } = await supabase.from("manifesto").select("*");
      if (error) console.error("Error fetching manifesto:", error);
      else setManifesto(data);
    };
    fetchManifesto();
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>📜 Autologoi Manifesto</h1>
      {manifesto.length > 0 ? (
        manifesto.map((entry) => (
          <div key={entry.id}>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
