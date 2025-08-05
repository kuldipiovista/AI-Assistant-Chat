export const action = async ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": "true",
  };

  // Handle preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return new Response(null, { 
      status: 204, 
      headers: CORS_HEADERS
    });
  }

  try {
    const { message } = await request.json();
    console.log("[DEBUG] Received message:", message);

    // Check if Gemini API key is available
    if (!process.env.GEMINI_API_KEY) {
      console.log("[DEBUG] No Gemini API key found, using fallback response");
      return new Response(JSON.stringify({
        aiResponse: "I'm sorry, but I'm not configured to respond right now. Please check back later.",
        products: []
      }), {
        status: 200,
        headers: { 
          ...CORS_HEADERS, 
          "Content-Type": "application/json"
        },
      });
    }

    // Call Gemini API
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a helpful AI shopping assistant. Analyze this customer query and extract search information in JSON format:
            
            Customer query: "${message}"
            
            Respond with ONLY a JSON object in this exact format:
            {
              "searchType": "product" or "collection",
              "keywords": ["keyword1", "keyword2"],
              "priceRange": {"min": 0, "max": 5000},
              "aiResponse": "Your helpful response to the customer"
            }
            
            If the customer is asking about products, set searchType to "product". If they're asking about categories or collections, set searchType to "collection".
            Extract relevant keywords from their query. If they mention a price range, include it in priceRange.`
          }]
        }]
      })
    });

    if (!geminiResponse.ok) {
      console.log("[DEBUG] Gemini API error:", await geminiResponse.text());
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const geminiData = await geminiResponse.json();
    console.log("[DEBUG] Gemini response:", geminiData);

    let searchInfo;
    try {
      const responseText = geminiData.candidates[0].content.parts[0].text;
      // Clean up the response - remove markdown code blocks if present
      const cleanText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
      searchInfo = JSON.parse(cleanText);
      console.log("[DEBUG] Parsed search info:", searchInfo);
    } catch (parseError) {
      console.log("[DEBUG] Failed to parse Gemini response, using fallback");
      // Fallback: extract basic keywords from the message
      const words = message.toLowerCase().split(/\s+/).filter(word => word.length > 1);
      searchInfo = {
        searchType: "product",
        keywords: words.slice(0, 3),
        priceRange: { min: 0, max: 10000 },
        aiResponse: "I understand you're looking for something. Let me search our products for you."
      };
    }

    // Mock product search for now (since we don't have Shopify API access in this simplified version)
    const mockProducts = [
      {
        id: "1",
        title: "Wireless Bluetooth Speaker",
        handle: "wireless-bluetooth-speaker",
        images: [{ url: "https://via.placeholder.com/150x150?text=Speaker" }],
        priceRange: { minVariantPrice: { amount: "2999" } },
        compareAtPriceRange: { minVariantPrice: { amount: "3999" } }
      },
      {
        id: "2", 
        title: "Smart Home Assistant",
        handle: "smart-home-assistant",
        images: [{ url: "https://via.placeholder.com/150x150?text=Assistant" }],
        priceRange: { minVariantPrice: { amount: "4999" } },
        compareAtPriceRange: { minVariantPrice: { amount: "5999" } }
      }
    ];

    // Filter products based on search criteria
    let filteredProducts = mockProducts;
    if (searchInfo.keywords && searchInfo.keywords.length > 0) {
      filteredProducts = mockProducts.filter(product => 
        searchInfo.keywords.some(keyword => 
          product.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }

    if (searchInfo.priceRange) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseFloat(product.priceRange.minVariantPrice.amount);
        return price >= searchInfo.priceRange.min && price <= searchInfo.priceRange.max;
      });
    }

    console.log("[DEBUG] Filtered products:", filteredProducts);

    return new Response(JSON.stringify({
      aiResponse: searchInfo.aiResponse,
      products: filteredProducts
    }), {
      status: 200,
      headers: { 
        ...CORS_HEADERS, 
        "Content-Type": "application/json"
      },
    });

  } catch (error) {
    console.error("[DEBUG] Error in AI chat:", error);
    return new Response(JSON.stringify({
      aiResponse: "I'm sorry, I encountered an error while processing your request. Please try again.",
      products: []
    }), {
      status: 500,
      headers: { 
        ...CORS_HEADERS, 
        "Content-Type": "application/json"
      },
    });
  }
};

export const loader = ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": "true",
  };

  // Handle preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return new Response(null, { 
      status: 204, 
      headers: CORS_HEADERS
    });
  }

  return new Response(JSON.stringify({ 
    message: "AI Chat API is ready",
    timestamp: new Date().toISOString(),
    status: "ready"
  }), {
    status: 200,
    headers: { 
      ...CORS_HEADERS, 
      "Content-Type": "application/json"
    },
  });
};
  
  