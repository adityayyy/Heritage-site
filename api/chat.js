import { siteKnowledge } from '../site-knowledge.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ reply: 'Method not allowed.' });
    return;
  }

  const message = String(req.body?.message || '').trim();
  if (!message) {
    res.status(400).json({ reply: 'Please enter a message.' });
    return;
  }

  if (!process.env.GROQ_API_KEY) {
    res.status(503).json({ reply: 'AI is not configured yet. Add GROQ_API_KEY in Vercel env and redeploy.' });
    return;
  }

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          { role: 'system', content: siteKnowledge },
          { role: 'user', content: message }
        ]
      })
    });

    if (!groqResponse.ok) {
      console.error('Groq error:', groqResponse.status, await groqResponse.text());
      res.status(502).json({ reply: 'AI service error. Please try again later.' });
      return;
    }

    const data = await groqResponse.json();
    const reply = data.choices?.[0]?.message?.content || 'I could not generate a reply.';
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'AI connection error.' });
  }
}
