export default function handler(req, res) {
  res.json({ apiKey: process.env.carto_key || null });
}
