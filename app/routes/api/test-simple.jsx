export const action = async ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": "true",
  };

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

export const loader = ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://kuldip-iovista-demo.myshopify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": "true",
  };

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