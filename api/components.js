export default async function handler(req, res) {
  try {
    const response = await fetch("https://amruhpzfiaqskvtssfqi.supabase.co/rest/v1/components", {
      headers: {
        apikey: process.env.SUPABASE_API_KEY
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Erro ao consultar Supabase" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro interno", message: err.message });
  }
}
