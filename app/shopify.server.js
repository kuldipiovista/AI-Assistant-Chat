import "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";

// Check if required environment variables are available
const hasRequiredEnvVars = process.env.SHOPIFY_API_KEY && 
                          process.env.SHOPIFY_API_SECRET && 
                          process.env.SHOPIFY_APP_URL;

let shopify;

// Test database connection and session table
const testSessionTable = async () => {
  try {
    await prisma.$queryRaw`SELECT 1 FROM "Session" LIMIT 1`;
    return true;
  } catch (error) {
    console.warn("Session table not found, using mock session storage");
    return false;
  }
};

function createMockSessionStorage() {
  return {
    storeSession: () => Promise.resolve(),
    loadSession: () => Promise.resolve(null),
    deleteSession: () => Promise.resolve(),
    deleteSessions: () => Promise.resolve(),
    findSessionsByShop: () => Promise.resolve([]),
  };
}

function createMockShopify() {
  return {
    authenticate: {
      admin: () => Promise.resolve({ session: null }),
      public: () => Promise.resolve({ session: null }),
    },
    unauthenticated: {
      admin: () => Promise.resolve({ session: null }),
      public: () => Promise.resolve({ session: null }),
    },
    login: () => Promise.resolve({ session: null }),
    registerWebhooks: () => Promise.resolve(),
    sessionStorage: createMockSessionStorage(),
    addDocumentResponseHeaders: () => {},
  };
}

// Initialize shopify app
const initializeShopify = async () => {
  if (hasRequiredEnvVars) {
    try {
      const hasSessionTable = await testSessionTable();
      
      shopify = shopifyApp({
        apiKey: process.env.SHOPIFY_API_KEY,
        apiSecretKey: process.env.SHOPIFY_API_SECRET,
        apiVersion: ApiVersion.January25,
        scopes: process.env.SCOPES?.split(",") || ["write_products", "read_products", "write_collections", "read_collections"],
        appUrl: process.env.SHOPIFY_APP_URL,
        authPathPrefix: "/auth",
        sessionStorage: hasSessionTable ? new PrismaSessionStorage(prisma) : createMockSessionStorage(),
        distribution: AppDistribution.AppStore,
        future: {
          unstable_newEmbeddedAuthStrategy: true,
          removeRest: true,
        },
        ...(process.env.SHOP_CUSTOM_DOMAIN
          ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
          : {}),
      });
    } catch (error) {
      console.error("Failed to initialize Shopify app:", error);
      shopify = createMockShopify();
    }
  } else {
    console.warn("Missing required Shopify environment variables, using mock Shopify object");
    shopify = createMockShopify();
  }
};

// Initialize immediately
initializeShopify().catch(error => {
  console.error("Failed to initialize Shopify app:", error);
  shopify = createMockShopify();
});

export default shopify;
export const apiVersion = ApiVersion.January25;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
