export const action = async ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": "true",
    Vary: "Origin",
  };

  // Handle preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return new Response(null, { 
      status: 204, 
      headers: CORS_HEADERS
    });
  }

  // Check if required environment variables are available
  const missingVars = [];
  if (!process.env.SHOPIFY_SHOP) missingVars.push("SHOPIFY_SHOP");
  if (!process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN) missingVars.push("SHOPIFY_ADMIN_API_ACCESS_TOKEN");
  if (!process.env.GEMINI_API_KEY) missingVars.push("GEMINI_API_KEY");

  if (missingVars.length > 0) {
    return new Response(JSON.stringify({ 
      error: "Configuration error: Missing required environment variables",
      missingVariables: missingVars,
      aiResponse: "Sorry, the AI service is not properly configured. Please set the required environment variables.",
      products: [],
      collections: [],
      message: `Please configure these environment variables: ${missingVars.join(", ")}`
    }), {
      status: 500,
      headers: { 
        ...CORS_HEADERS, 
        "Content-Type": "application/json"
      },
    });
  }
  
  let message;
  try {
    ({ message } = await request.json());
    console.log("[DEBUG] message:", message);
  } catch (error) {
    console.error("[DEBUG] JSON parse error:", error);
    return new Response(JSON.stringify({ 
      error: "Invalid request - JSON parsing failed",
      message: "Please send a valid JSON object with a 'message' field",
      aiResponse: "Sorry, there was an error processing your request.",
      products: [],
      collections: []
    }), {
      status: 400,
      headers: { 
        ...CORS_HEADERS, 
        "Content-Type": "application/json"
      },
    });
  }

  if (!message) {
    return new Response(JSON.stringify({ 
      error: "Missing message field",
      message: "Please include a 'message' field in your JSON request",
      aiResponse: "Sorry, no message was provided.",
      products: [],
      collections: []
    }), {
      status: 400,
      headers: { 
        ...CORS_HEADERS, 
        "Content-Type": "application/json"
      },
    });
  }

  // 🧠 Ask Gemini to extract relevant keywords + price + search type
  let price = null;
  let keywords = [];
  let priceFilter = null; // "above", "below", or null
  let searchType = "products"; // "products", "collections", or "both"

  try {
    console.log("[DEBUG] Calling Gemini API...");
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Extract search info from this message. Determine if user wants products, collections, or both.\n\nExamples:\n- "Best product under $25" → keywords: [], price: 25, priceFilter: "below", searchType: "products"\n- "Show me collections" → keywords: [], price: null, priceFilter: null, searchType: "collections"\n- "snowboard collections" → keywords: ["snowboard"], price: null, priceFilter: null, searchType: "collections"\n- "red shoes above $100" → keywords: ["red", "shoes"], price: 100, priceFilter: "above", searchType: "products"\n- "winter collection under $500" → keywords: ["winter"], price: 500, priceFilter: "below", searchType: "collections"\n- "Beauty Collection" → keywords: ["beauty"], price: null, priceFilter: null, searchType: "collections"\n- "beauty" → keywords: ["beauty"], price: null, priceFilter: null, searchType: "collections"\n- "Up to 80% off retail" → keywords: ["up", "to", "80", "off", "retail"], price: null, priceFilter: null, searchType: "collections"\n- "collection" → keywords: [], price: null, priceFilter: null, searchType: "collections"\n\nIMPORTANT: If the message is a single word that could be a collection name (like "beauty", "winter", "summer", etc.), set searchType to "collections" and include the word as a keyword.\n\nIf the message contains "collection", "collections", "% off", "discount", "sale", or looks like a collection name, set searchType to "collections".\n\nRespond in JSON: { "keywords": ["keyword1", "keyword2"], "price": number|null, "priceFilter": "above"|"below"|null, "searchType": "products"|"collections"|"both" }\n\nMessage: "${message}"`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!geminiRes.ok) {
      throw new Error(`Gemini API error: ${geminiRes.status} ${geminiRes.statusText}`);
    }

    const geminiData = await geminiRes.json();
    console.log("[DEBUG] Gemini response:", geminiData);
    
    let rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    rawText = rawText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(rawText);
    keywords = parsed.keywords || [];
    price = parsed.price || null;
    priceFilter = parsed.priceFilter || null;
    searchType = parsed.searchType || "products";

    console.log("[DEBUG] Parsed price:", price, "priceFilter:", priceFilter, "Keywords:", keywords, "searchType:", searchType);
  } catch (err) {
    console.error("Gemini parse error:", err);
    console.log("[DEBUG] Using fallback logic due to Gemini error");
    
    // Fallback logic when Gemini fails
    const lowerMessage = message.toLowerCase();
    
    // Check for collection keywords
    if (lowerMessage.includes("collection") || lowerMessage.includes("collections") || 
        lowerMessage.includes("% off") || lowerMessage.includes("discount") || 
        lowerMessage.includes("sale") || lowerMessage.includes("retail")) {
      searchType = "collections";
      // Extract keywords from message (remove common words)
      keywords = lowerMessage
        .replace(/collection|collections|show|me|all|the/g, "")
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 1); // Changed from > 2 to > 1 to include "up", "to", etc.
    } else if (lowerMessage.trim().split(/\s+/).length === 1) {
      // Single word search - treat as potential collection name
      searchType = "collections";
      keywords = [lowerMessage.trim()];
    } else {
      searchType = "products";
      // Extract keywords for products
      keywords = lowerMessage
        .split(/\s+/)
        .filter(word => word.length > 2 && !["best", "product", "under", "above", "show", "me", "all", "the"].includes(word));
    }
    
    // Extract price if present
    const priceMatch = message.match(/\$(\d+)/);
    if (priceMatch) {
      price = parseInt(priceMatch[1]);
      if (lowerMessage.includes("under") || lowerMessage.includes("below")) {
        priceFilter = "below";
      } else if (lowerMessage.includes("above") || lowerMessage.includes("over")) {
        priceFilter = "above";
      }
    }
    
    console.log("[DEBUG] Fallback - searchType:", searchType, "keywords:", keywords, "price:", price, "priceFilter:", priceFilter);
  }

  // ❗ If no keywords and we have a price filter, search all products by price only
  if (keywords.length === 0 && price && priceFilter && searchType === "products") {
    console.log("[DEBUG] No keywords found, searching by price only");
  }

  // 🔐 GraphQL wrapper
  const graphql = async (query, variables = {}) => {
    console.log("[DEBUG] Making GraphQL request to Shopify...");
    const res = await fetch(`https://${process.env.SHOPIFY_SHOP}/admin/api/2024-07/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      throw new Error(`Shopify API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    if (data.errors) {
      console.error("[DEBUG] Shopify GraphQL errors:", data.errors);
    }
    return data;
  };

  // 🧠 Build product query like: title:*men* OR tag:men OR product_type:men OR vendor:men
  const productKeywordFilters = keywords.map(
    (k) =>
      `(title:*${k}* OR tag:${k} OR product_type:${k} OR vendor:${k})`
  );

  // 🧠 Build collection query like: title:*men* OR description:*men*
  const collectionKeywordFilters = keywords.map(
    (k) =>
      `(title:*${k}* OR description:*${k}*)`
  );

  console.log("[DEBUG] Keywords extracted:", keywords);
  console.log("[DEBUG] Collection keyword filters:", collectionKeywordFilters);

  // 💰 Add price filter to query if present
  let priceQuery = "";
  if (price && priceFilter) {
    if (priceFilter === "above") {
      priceQuery = `variants.price:>${price}`;
    } else if (priceFilter === "below") {
      priceQuery = `variants.price:<${price}`;
    }
  }

  // 🎯 Build final query strings
  let productQueryString = null;
  let collectionQueryString = null;

  if (productKeywordFilters.length > 0 && priceQuery) {
    productQueryString = `(${productKeywordFilters.join(" OR ")}) AND ${priceQuery}`;
  } else if (productKeywordFilters.length > 0) {
    productQueryString = productKeywordFilters.join(" OR ");
  } else if (priceQuery) {
    productQueryString = priceQuery;
  }

  if (collectionKeywordFilters.length > 0) {
    collectionQueryString = collectionKeywordFilters.join(" OR ");
  } else if (searchType === "collections" || searchType === "both") {
    // If no keywords but searching collections, search all collections (like products)
    collectionQueryString = null;
  }
  
  // If no collection keywords found but we're searching collections, try searching with the original message
  if (collectionKeywordFilters.length === 0 && searchType === "collections" && message.trim()) {
    const cleanMessage = message.trim().toLowerCase();
    collectionQueryString = `title:*${cleanMessage}* OR description:*${cleanMessage}*`;
    console.log("[DEBUG] Using original message for collection search:", collectionQueryString);
  }
  
  console.log("[DEBUG] Product query:", productQueryString);
  console.log("[DEBUG] Collection query:", collectionQueryString);

  let products = [];
  let collections = [];

  // 🔍 Search Products
  if (searchType === "products" || searchType === "both") {
    try {
      console.log("[DEBUG] Searching products...");
      const result = await graphql(
        `
        query($query: String) {
          products(first: 20, query: $query) {
            edges {
              node {
                title
                handle
                onlineStoreUrl
                tags
                productType
                vendor
                variants(first: 1) {
                  edges {
                    node {
                      price
                    }
                  }
                }
              }
            }
          }
        }`,
        { query: productQueryString }
      );

      products = (result?.data?.products?.edges || []).map(({ node }) => ({
        title: node.title,
        url: node.onlineStoreUrl || `https://${process.env.SHOPIFY_SHOP}/products/${node.handle}`,
        price: node.variants.edges[0]?.node?.price ?? null,
        tags: node.tags,
        type: node.productType,
        vendor: node.vendor,
      }));

      // 💰 Additional client-side price filtering (backup)
      if (price && priceFilter) {
        if (priceFilter === "above") {
          products = products.filter((p) => parseFloat(p.price) >= parseFloat(price));
        } else if (priceFilter === "below") {
          products = products.filter((p) => parseFloat(p.price) <= parseFloat(price));
        }
      }

      console.log("[DEBUG] Final products:", products);
    } catch (err) {
      console.error("Shopify products fetch error:", err);
    }
  }

  // 🔍 Search Collections
  if (searchType === "collections" || searchType === "both") {
    console.log("[DEBUG] Searching collections with query:", collectionQueryString);
    try {
      // First, let's test with a simple query to see if collections API works
      console.log("[DEBUG] Testing basic collections query...");
      const basicResult = await graphql(
        `
        query {
          collections(first: 5) {
            edges {
              node {
                title
                handle
                productsCount {
                  count
                }
              }
            }
          }
        }`
      );
      console.log("[DEBUG] Basic collections test result:", basicResult);

      // Now try the actual search query
      console.log("[DEBUG] Executing collection search with query:", collectionQueryString);
      
      // Try different search approaches
      let result = null;
      
      // First try: Original query
      try {
        result = await graphql(
          `
          query($query: String) {
            collections(first: 20, query: $query) {
              edges {
                node {
                  title
                  handle
                  description
                  productsCount {
                    count
                  }
                }
              }
            }
          }`,
          { query: collectionQueryString }
        );
        console.log("[DEBUG] Original query result:", result);
      } catch (err) {
        console.log("[DEBUG] Original query failed:", err);
      }
      
      // If no results, try simpler search
      if (!result?.data?.collections?.edges?.length) {
        console.log("[DEBUG] Trying simpler search...");
        try {
          result = await graphql(
            `
            query {
              collections(first: 20) {
                edges {
                  node {
                    title
                  }
                }
              }
            }`
          );
          console.log("[DEBUG] Simple query result:", result);
        } catch (err) {
          console.log("[DEBUG] Simple query failed:", err);
        }
      }

      console.log("[DEBUG] Collections API response:", result);
      console.log("[DEBUG] Collections data:", result?.data?.collections);
      console.log("[DEBUG] Collections edges:", result?.data?.collections?.edges);
      console.log("[DEBUG] Raw result JSON:", JSON.stringify(result, null, 2));

      collections = (result?.data?.collections?.edges || []).map(({ node }) => ({
        title: node.title,
        url: `https://${process.env.SHOPIFY_SHOP}/collections/${node.handle}`,
        description: node.description,
        productsCount: node.productsCount?.count || 0,
      }));

      console.log("[DEBUG] Final collections:", collections);
      
      // If no collections found with search, try to get all collections
      if (collections.length === 0 && collectionQueryString) {
        console.log("[DEBUG] No collections found with search, trying all collections...");
        try {
          const allCollectionsResult = await graphql(
            `
            query {
              collections(first: 20) {
                edges {
                  node {
                    title
                    handle
                    description
                    productsCount {
                      count
                    }
                  }
                }
              }
            }`
          );
          console.log("[DEBUG] All collections test result:", allCollectionsResult);
          const allCollections = (allCollectionsResult?.data?.collections?.edges || []).map(({ node }) => ({
            title: node.title,
            url: `https://${process.env.SHOPIFY_SHOP}/collections/${node.handle}`,
            description: node.description,
            productsCount: node.productsCount?.count || 0,
          }));
          console.log("[DEBUG] All available collections:", allCollections);
          
          // If we have collections but search didn't find any, use all collections
          if (allCollections.length > 0) {
            collections = allCollections;
            console.log("[DEBUG] Using all collections since search returned empty");
          }
        } catch (testErr) {
          console.error("[DEBUG] Error testing all collections:", testErr);
        }
      }
    } catch (err) {
      console.error("Shopify collections fetch error:", err);
      collections = []; // Ensure collections is always an array
    }
  }

  // 🎯 Build AI response based on search type and results
  let aiResponse = "";
  
  if (searchType === "products" || searchType === "both") {
    if (products.length > 0) {
      aiResponse += `Here are matching products:\n\n${products.map((p) => `- ${p.title} ($${p.price})`).join("\n")}`;
    } else {
      aiResponse += "Sorry, I couldn't find any matching products.";
    }
  }
  
  if (searchType === "collections" || searchType === "both") {
    if (collections.length > 0) {
      if (aiResponse) aiResponse += "\n\n";
      aiResponse += `Here are matching collections:\n\n${collections.map((c) => `- ${c.title} (${c.productsCount} products)`).join("\n")}`;
    } else {
      if (!aiResponse) aiResponse = "Sorry, I couldn't find any matching collections.";
    }
  }
  
  if (!aiResponse) {
    aiResponse = "Sorry, I couldn't find any matching products or collections.";
  }

  console.log("[DEBUG] Final AI response:", aiResponse);

  return new Response(JSON.stringify({ aiResponse, products, collections }), {
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json",
    },
  });
};

export const loader = ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": "true",
    Vary: "Origin",
  };

  // Handle preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return new Response(null, { 
      status: 204, 
      headers: CORS_HEADERS
    });
  }

  return new Response(JSON.stringify({ 
    message: "AI Chat API is running. Use POST method to send messages.",
    status: "ok"
  }), {
    status: 200,
    headers: { 
      ...CORS_HEADERS, 
      "Content-Type": "application/json"
    },
  });
};
  
  