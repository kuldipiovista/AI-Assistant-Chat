export const loader = async () => {
  return new Response(JSON.stringify({ 
    message: "Test page is working!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    status: "healthy"
  }), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    },
  });
}; 