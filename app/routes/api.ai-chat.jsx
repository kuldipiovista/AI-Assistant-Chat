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

    // Simple keyword extraction without Gemini API
    const lowerMessage = message.toLowerCase();
    let aiResponse = "I understand you're looking for something. Let me help you find products!";
    let products = [];

    // Extract keywords and price information
    const keywords = lowerMessage.split(/\s+/).filter(word => 
      word.length > 2 && !['the', 'and', 'or', 'for', 'with', 'under', 'below', 'above', 'over'].includes(word)
    );

    // Extract price information
    const priceMatch = lowerMessage.match(/(?:under|below|less than|up to)\s*[\$€£₹]?\s*(\d+,?\d*)/);
    const maxPrice = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : null;

    // Mock products based on keywords
    const mockProducts = [
      {
        id: "1",
        title: "Wireless Bluetooth Speaker",
        handle: "wireless-bluetooth-speaker",
        priceRange: { minVariantPrice: { amount: "2999" } },
        compareAtPriceRange: { minVariantPrice: { amount: "3999" } }
      },
      {
        id: "2", 
        title: "Smart Home Assistant",
        handle: "smart-home-assistant",
        priceRange: { minVariantPrice: { amount: "4999" } },
        compareAtPriceRange: { minVariantPrice: { amount: "5999" } }
      },
      {
        id: "3",
        title: "Premium Headphones",
        handle: "premium-headphones",
        priceRange: { minVariantPrice: { amount: "1999" } },
        compareAtPriceRange: { minVariantPrice: { amount: "2499" } }
      },
      {
        id: "4",
        title: "Smart Watch",
        handle: "smart-watch",
        priceRange: { minVariantPrice: { amount: "3999" } },
        compareAtPriceRange: { minVariantPrice: { amount: "4999" } }
      }
    ];

    // Filter products based on keywords and price
    if (keywords.length > 0) {
      products = mockProducts.filter(product => 
        keywords.some(keyword => 
          product.title.toLowerCase().includes(keyword)
        )
      );
    } else {
      products = mockProducts;
    }

    // Apply price filter
    if (maxPrice) {
      products = products.filter(product => {
        const price = parseFloat(product.priceRange.minVariantPrice.amount);
        return price <= maxPrice;
      });
    }

    // Generate response based on results
    if (products.length > 0) {
      aiResponse = `I found ${products.length} product(s) that match your criteria:\n\n`;
      products.forEach(product => {
        const price = product.priceRange.minVariantPrice.amount;
        const comparePrice = product.compareAtPriceRange?.minVariantPrice?.amount;
        const savings = comparePrice ? (parseFloat(comparePrice) - parseFloat(price)).toFixed(0) : null;
        
        aiResponse += `• ${product.title} - $${price}`;
        if (savings) {
          aiResponse += ` (Save $${savings}!)`;
        }
        aiResponse += '\n';
      });
    } else {
      aiResponse = "I couldn't find any products matching your criteria. Try adjusting your search terms or price range.";
    }

    console.log("[DEBUG] Generated response:", aiResponse);
    console.log("[DEBUG] Found products:", products.length);

    return new Response(JSON.stringify({
      aiResponse: aiResponse,
      products: products
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
  
  