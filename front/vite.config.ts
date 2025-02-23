import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/coach-front-/",  // Sostituisci 'nome-repo' con il nome del tuo repository GitHub
  plugins: [react()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 2000,
  },
});
