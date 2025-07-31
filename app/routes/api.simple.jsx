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

  try {
    const { message } = await request.json();
    
    return new Response(JSON.stringify({ 
      message: "Simple API is working!",
      receivedMessage: message,
      timestamp: new Date().toISOString(),
      status: "success"
    }), {
      status: 200,
      headers: { 
        ...CORS_HEADERS, 
        "Content-Type": "application/json"
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: "Simple API is working!",
      error: error.message,
      timestamp: new Date().toISOString(),
      status: "success"
    }), {
      status: 200,
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
    message: "Simple API is working!",
    timestamp: new Date().toISOString(),
    method: request.method,
    status: "success"
  }), {
    status: 200,
    headers: { 
      ...CORS_HEADERS, 
      "Content-Type": "application/json"
    },
  });
}; 