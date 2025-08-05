import "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";

// Validate required environment variables
if (!process.env.SHOPIFY_API_KEY) {
  throw new Error("SHOPIFY_API_KEY environment variable is required");
}

if (!process.env.SHOPIFY_API_SECRET) {
  throw new Error("SHOPIFY_API_SECRET environment variable is required");
}

if (!process.env.SHOPIFY_APP_URL) {
  throw new Error("SHOPIFY_APP_URL environment variable is required");
}

// Temporarily disable Shopify app initialization to prevent crashes
// const shopify = shopifyApp({
//   apiKey: process.env.SHOPIFY_API_KEY,
//   apiSecretKey: process.env.SHOPIFY_API_SECRET,
//   apiVersion: ApiVersion.January25,
//   scopes: process.env.SCOPES?.split(",") || ["write_products", "read_products", "write_collections", "read_collections"],
//   appUrl: process.env.SHOPIFY_APP_URL,
//   authPathPrefix: "/auth",
//   sessionStorage: new PrismaSessionStorage(prisma),
//   distribution: AppDistribution.AppStore,
//   future: {
//     unstable_newEmbeddedAuthStrategy: true,
//     removeRest: true,
//   },
//   ...(process.env.SHOP_CUSTOM_DOMAIN
//     ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
//     : {}),
// });

// Create a mock shopify object for now
const shopify = {
  authenticate: () => Promise.resolve({ session: null }),
  unauthenticated: () => Promise.resolve({ session: null }),
  login: () => Promise.resolve({ session: null }),
  registerWebhooks: () => Promise.resolve(),
  sessionStorage: { loadSession: () => Promise.resolve(null) },
  addDocumentResponseHeaders: () => {},
};

export default shopify;
export const apiVersion = ApiVersion.January25;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
