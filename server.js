import express from "express";
import dotenv from "dotenv";
import { siteKnowledge } from "./site-knowledge.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("."));
app.get("/", (_req, res) => res.redirect("/go-heritage.html"));

app.post("/api/chat", async (req, res) => {
    const message = String(req.body?.message || "").trim();

    if (!message) {
        return res.status(400).json({ reply: "Please enter a message." });
    }

    if (!process.env.GROQ_API_KEY) {
        return res.status(503).json({
            reply: "AI is not configured yet. Add GROQ_API_KEY to .env and restart the server."
        });
    }

    try {
        const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-20b",
                messages: [
                    { role: "system", content: siteKnowledge },
                    { role: "user", content: message }
                ]
            })
        });

        if (!groqResponse.ok) {
            console.error("Groq error:", groqResponse.status, await groqResponse.text());
            return res.status(502).json({ reply: "AI service error. Please try again later." });
        }

        const data = await groqResponse.json();
        const reply = data.choices?.[0]?.message?.content || "I could not generate a reply.";

        res.json({ reply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ reply: "AI connection error." });
    }
});

app.get("/api/carto-config", (_req, res) => {
    res.json({ apiKey: process.env.carto_key || null });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});