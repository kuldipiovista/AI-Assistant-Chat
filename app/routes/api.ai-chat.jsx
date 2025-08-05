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
            text: `Analyze this product search query and extract comprehensive search terms. Return a JSON object with: 
            - "keywords": array of search terms (product types, features, brands, categories)
            - "maxPrice": number (if price limit mentioned, otherwise null)
            - "searchType": "specific" (if specific product mentioned) or "general" (if just "product" or general terms)
            - "shouldApplyPriceFilter": boolean (true if user specifically asks for price filtering)
            - "searchFields": array of fields to search in ["title", "tags", "vendor", "type", "description"]
            
            Query: "${message}"
            
            Examples:
            - "snowboard under $800" → {"keywords": ["snowboard"], "maxPrice": 800, "searchType": "specific", "shouldApplyPriceFilter": true, "searchFields": ["title", "tags", "type"]}
            - "product under $30" → {"keywords": [], "maxPrice": 30, "searchType": "general", "shouldApplyPriceFilter": true, "searchFields": ["title", "tags", "vendor", "type"]}
            - "winter sports equipment" → {"keywords": ["winter", "sports", "equipment"], "maxPrice": null, "searchType": "specific", "shouldApplyPriceFilter": false, "searchFields": ["title", "tags", "type", "description"]}`
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
        // Try to parse as JSON object
        const parsed = JSON.parse(aiResponse);
        if (parsed.keywords && typeof parsed.maxPrice !== 'undefined' && parsed.searchType && typeof parsed.shouldApplyPriceFilter !== 'undefined') {
          console.log("[DEBUG] AI extracted search intent:", parsed);
          return parsed;
        }
      } catch (parseError) {
        console.error("[DEBUG] Failed to parse AI response as JSON:", parseError);
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

  // Determine search type
  const searchType = keywords.length > 0 ? "specific" : "general";
  const shouldApplyPriceFilter = maxPrice !== null;
  const searchFields = ["title", "tags", "vendor", "type", "description"];

  return { keywords, maxPrice, searchType, shouldApplyPriceFilter, searchFields };
}

// Function to search products comprehensively
function searchProducts(products, keywords, searchFields) {
  if (keywords.length === 0) return products;
  
  return products.filter(product => {
    return keywords.some(keyword => {
      const lowerKeyword = keyword.toLowerCase();
      
      // Search in title
      if (searchFields.includes("title") && product.title.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      // Search in tags
      if (searchFields.includes("tags") && product.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))) {
        return true;
      }
      
      // Search in vendor
      if (searchFields.includes("vendor") && product.vendor && product.vendor.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      // Search in product type
      if (searchFields.includes("type") && product.productType && product.productType.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      // Search in description
      if (searchFields.includes("description") && product.description && product.description.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      return false;
    });
  });
}

// Function to get products (simplified for now)
async function getProducts(searchIntent) {
  try {
    const { keywords, maxPrice, searchType, shouldApplyPriceFilter, searchFields } = searchIntent;
    
    // Sample products that match your store with comprehensive data
    const sampleProducts = [
      {
        id: "1",
        title: "The Collection Snowboard: Hydrogen",
        handle: "collection-snowboard-hydrogen",
        description: "Premium snowboard with hydrogen technology for advanced riders",
        productType: "Snowboard",
        vendor: "The Collection",
        tags: ["snowboard", "winter", "sports", "hydrogen", "premium", "advanced"],
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
        description: "Advanced liquid technology snowboard for professional riders",
        productType: "Snowboard",
        vendor: "The Collection",
        tags: ["snowboard", "winter", "sports", "liquid", "professional", "advanced"],
        image: "https://cdn.shopify.com/s/files/1/0000/0000/products/snowboard-liquid.jpg",
        imageAlt: "Liquid Snowboard",
        price: "74995", // $749.95 in cents
        compareAtPrice: "89995", // $899.95 in cents (on sale)
        variantTitle: "Default Title",
        url: "https://kuldip-iovista-demo.myshopify.com/products/collection-snowboard-liquid",
      },
      {
        id: "3",
        title: "The Collection Snowboard: Oxygen",
        handle: "collection-snowboard-oxygen",
        description: "High-performance oxygen-enhanced snowboard for extreme conditions",
        productType: "Snowboard",
        vendor: "The Collection",
        tags: ["snowboard", "winter", "sports", "oxygen", "performance", "extreme"],
        image: "https://cdn.shopify.com/s/files/1/0000/0000/products/snowboard-oxygen.jpg",
        imageAlt: "Oxygen Snowboard",
        price: "102500", // $1025.00 in cents
        compareAtPrice: null,
        variantTitle: "Default Title",
        url: "https://kuldip-iovista-demo.myshopify.com/products/collection-snowboard-oxygen",
      }
    ];

    // Comprehensive search across all fields
    let filteredProducts = searchProducts(sampleProducts, keywords, searchFields);

    // Apply price filter only if user specifically asks for it
    if (shouldApplyPriceFilter && maxPrice) {
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

    // Extract search intent using AI
    const searchIntent = await extractKeywordsWithAI(message);
    
    console.log("[DEBUG] Search intent:", searchIntent);

    // Get products based on search intent
    const products = await getProducts(searchIntent);

    // Generate response based on results
    let aiResponse;
    if (products.length > 0) {
      aiResponse = `I found ${products.length} product(s) that match your criteria:`;
    } else {
      // Provide more helpful response based on search type
      if (searchIntent.searchType === "general" && searchIntent.shouldApplyPriceFilter) {
        aiResponse = `I couldn't find any products under $${searchIntent.maxPrice}. All our current products are priced higher. Would you like to see our full collection?`;
      } else if (searchIntent.keywords.length > 0) {
        aiResponse = `I couldn't find any products matching "${searchIntent.keywords.join(' ')}". Try searching for "snowboard" or browse our collection.`;
      } else {
        aiResponse = "I couldn't find any products matching your criteria. Try adjusting your search terms or browse our collection.";
      }
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
  
  