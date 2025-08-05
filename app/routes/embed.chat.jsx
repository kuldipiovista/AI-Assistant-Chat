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
      const baseUrl = window.AI_APP_BACKEND_URL || "https://ai-assistant-chat-iczt.onrender.com";
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
        { from: "ai", text: data.aiResponse, products: data.products || [] }
      ]);
    } catch (err) {
      setMessages(msgs => [
        ...msgs,
        { from: "ai", text: "Sorry, there was a problem contacting the AI service." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (priceInCents) => {
    return `$${(parseFloat(priceInCents) / 100).toFixed(2)}`;
  };

  const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) return null;

    return (
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "8px", 
        marginTop: "8px",
        maxHeight: "200px",
        overflowY: "auto"
      }}>
        {products.map((product, index) => (
          <a 
            key={index}
            href={product.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              background: "#f8f9fa",
              borderRadius: "8px",
              padding: "8px",
              border: "1px solid #e9ecef",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <div style={{ 
              width: "100%", 
              height: "60px", 
              background: "#f0f0f0", 
              borderRadius: "4px", 
              marginBottom: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}>
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.imageAlt || product.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover" 
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div style={{ 
                display: product.image ? "none" : "flex",
                alignItems: "center", 
                justifyContent: "center",
                width: "100%",
                height: "100%",
                fontSize: "12px",
                color: "#666"
              }}>
                📦
              </div>
            </div>
            <div style={{ fontSize: "11px", fontWeight: "bold", marginBottom: "2px", lineHeight: "1.2" }}>
              {product.title.length > 25 ? product.title.substring(0, 25) + "..." : product.title}
            </div>
            <div style={{ fontSize: "10px", color: "#666" }}>
              {formatPrice(product.price)}
              {product.compareAtPrice && parseFloat(product.compareAtPrice) > parseFloat(product.price) && (
                <span style={{ 
                  textDecoration: "line-through", 
                  color: "#999", 
                  marginLeft: "4px" 
                }}>
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    );
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
          <div style={{ maxHeight: 300, overflowY: "auto", margin: "12px 0" }}>
            {messages.length === 0 && <div style={{ color: "#888" }}>Ask me anything about products!</div>}
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.from === "user" ? "right" : "left", margin: "6px 0" }}>
                <div style={{ 
                  background: msg.from === "user" ? "#e3eafe" : "#f4f6f8", 
                  borderRadius: 8, 
                  padding: "6px 10px", 
                  display: "inline-block",
                  maxWidth: "280px",
                  wordWrap: "break-word"
                }}>
                  {msg.text}
                  {msg.products && <ProductGrid products={msg.products} />}
                </div>
              </div>
            ))}
            {loading && <div style={{ color: "#888" }}>AI is typing...</div>}
          </div>
          <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about our products..."
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
