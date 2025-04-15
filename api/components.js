export default async function handler(req, res) {
  try {
    const response = await fetch("https://amruhpzfiaqskvtssfqi.supabase.co/rest/v1/components", {
      headers: {
        apikey: process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtcnVocHpmaWFxc2t2dHNzZnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NDMzODQsImV4cCI6MjA1ODUxOTM4NH0.pbSMQ3QfUlqXlIA_UVnSuEWc6PIPdoT2kFMpUzl94-4
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
