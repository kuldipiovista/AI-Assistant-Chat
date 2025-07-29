import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const { admin } = await authenticate.admin(request);
  const { tag, type, price } = await request.json();
  console.log("admin", admin);
  console.log("tag", tag);
  console.log("type", type);
  console.log("price", price);
  let filters = [];
  if (tag) filters.push(`tag:${tag}`);
  if (type) filters.push(`product_type:${type}`);
  const query = filters.length ? filters.join(" AND ") : null;
  const response = await admin.graphql(`#graphql
    query($query: String) {
      products(first: 20, query: $query) {
        edges {
          node {
            id
            title
            handle
            images(first: 1) { edges { node { src } } }
            onlineStoreUrl
            variants(first: 1) { edges { node { price compareAtPrice } } }
          }
        }
      }
    }`,
    { variables: { query } }
  );
  const json = await response.json();
  let products = (json.data.products.edges || []).map(({ node }) => ({
    id: node.id,
    title: node.title,
    image: node.images.edges[0]?.node.src || "",
    url: node.onlineStoreUrl || `https://${process.env.SHOPIFY_SHOP}/products/${node.handle}`,
    price: node.variants.edges[0]?.node.price,
    compareAtPrice: node.variants.edges[0]?.node.compareAtPrice,
  }));
  if (price) {
    products = products.filter(p => parseFloat(p.price) <= parseFloat(price));
  }
  return new Response(JSON.stringify({ products }), {
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
};
