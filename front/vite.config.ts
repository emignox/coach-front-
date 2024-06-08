import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://coach-back.vercel.app",
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // dimensione in KB
  },
});
