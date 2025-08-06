import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "assets",
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, "src/embed.chat.jsx"),
      output: {
        entryFileNames: "embed.chat.js",
        format: "iife",
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@shopify/polaris': 'Polaris'
        }
      },
      external: ['react', 'react-dom', '@shopify/polaris'],
    },
    lib: false,
    minify: false, // Keep readable for debugging
  },
  define: {
    global: 'globalThis',
  },
});