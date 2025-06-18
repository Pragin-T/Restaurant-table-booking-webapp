// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://Pragin-T.github.io/Restaurant-table-booking-webapp/", // ✅ Match exactly!
});
