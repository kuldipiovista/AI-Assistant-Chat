// Function to extract keywords using AI (Gemini)
async function extractKeywordsWithAI(message) {
  if (!process.env.GEMINI_API_KEY) {
    console.log("[DEBUG] No Gemini API key, using fallback keyword extraction");
    return extractKeywordsFallback(message);
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Extract product search keywords from this user query. Return only the keywords as a JSON array, no other text. Focus on product types, categories, features, and price-related terms. Query: "${message}"`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (aiResponse) {
      try {
        // Try to parse as JSON array
        const keywords = JSON.parse(aiResponse);
        if (Array.isArray(keywords)) {
          console.log("[DEBUG] AI extracted keywords:", keywords);
          // Extract price information from original message
          const priceMatch = message.toLowerCase().match(/(?:under|below|less than|up to)\s*[\$€£₹]?\s*(\d+,?\d*)/);
          const maxPrice = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : null;
          return { keywords, maxPrice };
        }
      } catch (parseError) {
        // If not valid JSON, try to extract keywords from text
        const keywords = aiResponse.toLowerCase()
          .replace(/[^\w\s]/g, ' ')
          .split(/\s+/)
          .filter(word => word.length > 2 && !['the', 'and', 'or', 'for', 'with', 'under', 'below', 'above', 'over', 'product', 'products', 'show', 'find', 'search'].includes(word));
        console.log("[DEBUG] AI extracted keywords (fallback):", keywords);
        // Extract price information from original message
        const priceMatch = message.toLowerCase().match(/(?:under|below|less than|up to)\s*[\$€£₹]?\s*(\d+,?\d*)/);
        const maxPrice = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : null;
        return { keywords, maxPrice };
      }
    }
  } catch (error) {
    console.error("[DEBUG] AI keyword extraction failed:", error);
  }

  return extractKeywordsFallback(message);
}

// Fallback keyword extraction
function extractKeywordsFallback(message) {
  const lowerMessage = message.toLowerCase();
  
  // Extract keywords
  const keywords = lowerMessage.split(/\s+/).filter(word => 
    word.length > 2 && !['the', 'and', 'or', 'for', 'with', 'under', 'below', 'above', 'over', 'product', 'products', 'show', 'find', 'search'].includes(word)
  );

  // Extract price information
  const priceMatch = lowerMessage.match(/(?:under|below|less than|up to)\s*[\$€£₹]?\s*(\d+,?\d*)/);
  const maxPrice = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : null;

  return { keywords, maxPrice };
}

// Function to get products (simplified for now)
async function getProducts(keywords = [], maxPrice = null) {
  try {
    // For now, return sample products that match the search
    const sampleProducts = [
      {
        id: "1",
        title: "The Collection Snowboard: Hydrogen",
        handle: "collection-snowboard-hydrogen",
        description: "Premium snowboard with hydrogen technology",
        productType: "Snowboard",
        tags: ["snowboard", "winter", "sports"],
        image: "https://cdn.shopify.com/s/files/1/0000/0000/products/snowboard-hydrogen.jpg",
        imageAlt: "Hydrogen Snowboard",
        price: "60000", // $600.00 in cents
        compareAtPrice: null,
        variantTitle: "Default Title",
        url: "https://kuldip-iovista-demo.myshopify.com/products/collection-snowboard-hydrogen",
      },
      {
        id: "2",
        title: "The Collection Snowboard: Liquid",
        handle: "collection-snowboard-liquid",
        description: "Advanced liquid technology snowboard",
        productType: "Snowboard",
        tags: ["snowboard", "winter", "sports"],
        image: "https://cdn.shopify.com/s/files/1/0000/0000/products/snowboard-liquid.jpg",
        imageAlt: "Liquid Snowboard",
        price: "74995", // $749.95 in cents
        compareAtPrice: null,
        variantTitle: "Default Title",
        url: "https://kuldip-iovista-demo.myshopify.com/products/collection-snowboard-liquid",
      },
      {
        id: "3",
        title: "The Collection Snowboard: Oxygen",
        handle: "collection-snowboard-oxygen",
        description: "High-performance oxygen-enhanced snowboard",
        productType: "Snowboard",
        tags: ["snowboard", "winter", "sports"],
        image: "https://cdn.shopify.com/s/files/1/0000/0000/products/snowboard-oxygen.jpg",
        imageAlt: "Oxygen Snowboard",
        price: "102500", // $1025.00 in cents
        compareAtPrice: null,
        variantTitle: "Default Title",
        url: "https://kuldip-iovista-demo.myshopify.com/products/collection-snowboard-oxygen",
      }
    ];

    // Filter by keywords if provided
    let filteredProducts = sampleProducts;
    if (keywords.length > 0) {
      filteredProducts = sampleProducts.filter(product => 
        keywords.some(keyword => 
          product.title.toLowerCase().includes(keyword) ||
          product.description.toLowerCase().includes(keyword) ||
          product.productType.toLowerCase().includes(keyword) ||
          product.tags.some(tag => tag.toLowerCase().includes(keyword))
        )
      );
    }

    // Apply price filter if specified
    if (maxPrice) {
      console.log("[DEBUG] Applying price filter, maxPrice:", maxPrice);
      filteredProducts = filteredProducts.filter(product => {
        const price = parseFloat(product.price);
        // Convert price from cents to dollars for comparison
        const priceInDollars = price / 100;
        console.log("[DEBUG] Product price check:", { title: product.title, price, priceInDollars, maxPrice, passes: priceInDollars <= maxPrice });
        return priceInDollars <= maxPrice;
      });
    }

    console.log("[DEBUG] Found products:", filteredProducts.length);
    return filteredProducts;

  } catch (error) {
    console.error("[DEBUG] Error getting products:", error);
    return [];
  }
}

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
    // Validate request method
    if (request.method !== "POST") {
      return new Response(JSON.stringify({
        error: "Method not allowed",
        message: "Only POST requests are supported"
      }), {
        status: 405,
        headers: { 
          ...CORS_HEADERS, 
          "Content-Type": "application/json"
        },
      });
    }

    // Parse request body
    let message;
    try {
      const body = await request.json();
      message = body.message;
    } catch (parseError) {
      console.error("[DEBUG] Failed to parse request body:", parseError);
      return new Response(JSON.stringify({
        error: "Invalid JSON",
        message: "Request body must be valid JSON with a 'message' field"
      }), {
        status: 400,
        headers: { 
          ...CORS_HEADERS, 
          "Content-Type": "application/json"
        },
      });
    }

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({
        error: "Missing message",
        message: "Request must include a 'message' field"
      }), {
        status: 400,
        headers: { 
          ...CORS_HEADERS, 
          "Content-Type": "application/json"
        },
      });
    }

    console.log("[DEBUG] Received message:", message);

    // Extract keywords and price using AI
    const { keywords, maxPrice } = await extractKeywordsWithAI(message);
    
    console.log("[DEBUG] Extracted keywords:", keywords);
    console.log("[DEBUG] Max price:", maxPrice);

    // Get products
    const products = await getProducts(keywords, maxPrice);

    // Generate response based on results
    let aiResponse;
    if (products.length > 0) {
      aiResponse = `I found ${products.length} product(s) that match your criteria:\n\n`;
      products.forEach(product => {
        const price = parseFloat(product.price);
        const priceFormatted = (price / 100).toFixed(2); // Convert cents to dollars
        const comparePrice = product.compareAtPrice ? parseFloat(product.compareAtPrice) : null;
        const savings = comparePrice ? ((comparePrice - price) / 100).toFixed(2) : null;
        
        aiResponse += `• ${product.title} - $${priceFormatted}`;
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
  
  