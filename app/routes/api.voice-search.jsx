import { json } from "@remix-run/node";

// Function to call Ollama API for voice processing
async function processVoiceWithOllama(voiceInput) {
  try {
    console.log("[DEBUG] Processing voice with Ollama:", voiceInput);
    
    // Get Ollama endpoint from environment variable
    const ollamaEndpoint = process.env.OLLAMA_ENDPOINT || 'http://localhost:11434';
    const ollamaModel = process.env.OLLAMA_MODEL || 'whisper';
    
    // Call Ollama API for voice processing
    const ollamaResponse = await fetch(`${ollamaEndpoint}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: ollamaModel,
        prompt: `Convert this voice input to clear text for product search: "${voiceInput}"`,
        stream: false
      })
    });

    if (!ollamaResponse.ok) {
      throw new Error(`Ollama API error: ${ollamaResponse.status}`);
    }

    const ollamaData = await ollamaResponse.json();
    const processedText = ollamaData.response || voiceInput;
    
    console.log("[DEBUG] Ollama processed text:", processedText);
    return processedText;
  } catch (error) {
    console.error("[DEBUG] Ollama processing failed:", error);
    // Fallback to original voice input
    return voiceInput;
  }
}

// Function to extract search intent using Ollama
async function extractSearchIntentWithOllama(message) {
  try {
    console.log("[DEBUG] Extracting search intent with Ollama:", message);
    
    // Get Ollama endpoint from environment variable
    const ollamaEndpoint = process.env.OLLAMA_ENDPOINT || 'http://localhost:11434';
    const ollamaModel = process.env.OLLAMA_MODEL || 'llama3.2';
    
    const ollamaResponse = await fetch(`${ollamaEndpoint}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: ollamaModel,
        prompt: `Analyze this product search query and extract search terms. Return a JSON object with:
        - "keywords": array of search terms (product types, features, brands, categories)
        - "maxPrice": number (if price limit mentioned, otherwise null)
        - "searchType": "specific" (if specific product mentioned) or "general" (if just "product" or general terms)
        - "shouldApplyPriceFilter": boolean (true if user specifically asks for price filtering)
        - "searchFields": array of fields to search in ["title", "tags", "vendor", "type", "description"]
        
        Query: "${message}"
        
        Examples:
        - "product below $500" → {"keywords": [], "maxPrice": 500, "searchType": "general", "shouldApplyPriceFilter": true, "searchFields": ["title", "tags", "vendor", "type"]}
        - "snowboard" → {"keywords": ["snowboard"], "maxPrice": null, "searchType": "specific", "shouldApplyPriceFilter": false, "searchFields": ["title", "tags", "type"]}
        - "winter sports equipment" → {"keywords": ["winter", "sports", "equipment"], "maxPrice": null, "searchType": "specific", "shouldApplyPriceFilter": false, "searchFields": ["title", "tags", "type", "description"]}`,
        stream: false
      })
    });

    if (!ollamaResponse.ok) {
      throw new Error(`Ollama API error: ${ollamaResponse.status}`);
    }

    const ollamaData = await ollamaResponse.json();
    const aiResponse = ollamaData.response;
    
    if (aiResponse) {
      try {
        // Try to parse as JSON object
        const parsed = JSON.parse(aiResponse);
        if (parsed.keywords && typeof parsed.maxPrice !== 'undefined' && parsed.searchType && typeof parsed.shouldApplyPriceFilter !== 'undefined') {
          console.log("[DEBUG] Ollama extracted search intent:", parsed);
          return parsed;
        }
      } catch (parseError) {
        console.error("[DEBUG] Failed to parse Ollama response as JSON:", parseError);
      }
    }
  } catch (error) {
    console.error("[DEBUG] Ollama search intent extraction failed:", error);
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
      if (searchFields.includes("vendor") && product.vendor.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      // Search in type
      if (searchFields.includes("type") && product.productType.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      // Search in description
      if (searchFields.includes("description") && product.description.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      return false;
    });
  });
}

// Function to get products from Shopify backend
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
        message: "Only POST requests are allowed"
      }), { 
        status: 405, 
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    // Parse request body
    const { voiceInput, useOllama } = await request.json();
    
    if (!voiceInput) {
      return new Response(JSON.stringify({
        error: "Missing voice input",
        message: "Voice input is required"
      }), { 
        status: 400, 
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    console.log("[DEBUG] Received voice input:", voiceInput);
    console.log("[DEBUG] Use Ollama:", useOllama);

    // Process voice input with Ollama if requested
    let processedInput = voiceInput;
    if (useOllama) {
      processedInput = await processVoiceWithOllama(voiceInput);
    }

    console.log("[DEBUG] Processed input:", processedInput);

    // Extract search intent using Ollama
    const searchIntent = await extractSearchIntentWithOllama(processedInput);
    console.log("[DEBUG] Search intent:", searchIntent);

    // Get products
    let products = await getProducts(searchIntent);

    console.log("[DEBUG] Final products count:", products.length);
    console.log("[DEBUG] Final products:", products);

    // Generate response based on results
    let aiResponse;
    if (products.length === 0) {
      if (searchIntent.searchType === "specific") {
        aiResponse = `I couldn't find any ${searchIntent.keywords.join(", ")} products`;
        if (searchIntent.maxPrice) {
          aiResponse += ` under $${searchIntent.maxPrice}`;
        }
        aiResponse += `. Would you like to see our full collection?`;
      } else {
        aiResponse = `I couldn't find any products`;
        if (searchIntent.maxPrice) {
          aiResponse += ` under $${searchIntent.maxPrice}`;
        }
        aiResponse += `. All our current products are priced higher. Would you like to see our full collection?`;
      }
    } else {
      const productNames = products.map(p => p.title).join(", ");
      aiResponse = `I found ${products.length} product(s) that match your voice search: ${productNames}. Here they are:`;
    }

    console.log("[DEBUG] Generated response:", aiResponse);

    return new Response(JSON.stringify({
      aiResponse,
      products: products,
      originalVoiceInput: voiceInput,
      processedInput: processedInput
    }), { 
      status: 200, 
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("[DEBUG] Error in voice search:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: "Sorry, I encountered an error processing your voice request.",
      products: []
    }), { 
      status: 500, 
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
    });
  }
};

export const loader = ({ request }) => {
  return new Response(JSON.stringify({
    error: "Method not allowed",
    message: "Only POST requests are allowed for voice search"
  }), { 
    status: 405, 
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
      "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Credentials": "true",
    }
  });
}; 