
// import { defineConfig } from "vite";

// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   esbuild: {
//     jsxInject: `import React from 'react'`
//   },
//   plugins: [
//     tailwindcss(),
//   ],
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
