import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // shortcut import ke liye (best practice)
    },
  },
  server: {
    port: 5173, // default port
    open: true, // dev server start hote hi browser open ho jaye
  },
  build: {
    outDir: "dist",
    sourcemap: true, // debugging easy banane ke liye
  },
});
