export const loader = ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": "true",
  };

  return new Response(JSON.stringify({ 
    message: "Environment test",
    timestamp: new Date().toISOString(),
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    hasShopifyKey: !!process.env.SHOPIFY_API_KEY,
    hasShopifySecret: !!process.env.SHOPIFY_API_SECRET,
    hasAppUrl: !!process.env.SHOPIFY_APP_URL,
    envVars: Object.keys(process.env).filter(key => 
      key.includes('SHOPIFY') || key.includes('GEMINI') || key.includes('APP')
    )
  }), {
    status: 200,
    headers: { 
      ...CORS_HEADERS, 
      "Content-Type": "application/json"
    },
  });
}; 