import { useState } from "react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Fix double slash issue by ensuring proper URL construction
      const baseUrl = window.AI_APP_BACKEND_URL || "https://chitchat.iovistacommerce.com";
      const API_URL = baseUrl.replace(/\/$/, "") + "/api/ai-chat";
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      if (!resp.ok) throw new Error("Network response was not ok");

      const data = await resp.json();
      setMessages(msgs => [
        ...msgs,
        { from: "ai", text: data.aiResponse }
      ]);
      // Optionally, show products data if returned
      // if (data.products && data.products.length)
      //   setMessages(msgs => [...msgs, { from: "ai", text: "Found products: ..."}]);
    } catch (err) {
      setMessages(msgs => [
        ...msgs,
        { from: "ai", text: "Sorry, there was a problem contacting the AI service." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 45, right: 24, zIndex: 9999 }}>
      {!open && (
        <button
          style={{ borderRadius: "50%", width: 56, height: 56, background: "#5c6ac4", color: "#fff", border: "none", fontSize: 28 }}
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >💬</button>
      )}
      {open && (
        <div style={{ width: 320, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.15)", padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>AI Buying Assistant</strong>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", fontSize: 20 }}>×</button>
          </div>
          <div style={{ maxHeight: 200, overflowY: "auto", margin: "12px 0" }}>
            {messages.length === 0 && <div style={{ color: "#888" }}>Ask me anything about products!</div>}
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.from === "user" ? "right" : "left", margin: "6px 0" }}>
                <span style={{ background: msg.from === "user" ? "#e3eafe" : "#f4f6f8", borderRadius: 8, padding: "6px 10px", display: "inline-block" }}>{msg.text}</span>
              </div>
            ))}
            {loading && <div style={{ color: "#888" }}>AI is typing...</div>}
          </div>
          <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question..."
              style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
              disabled={loading}
            />
            <button type="submit" style={{ background: "#5c6ac4", color: "#fff", border: "none", borderRadius: 6, padding: "0 16px" }} disabled={loading}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
