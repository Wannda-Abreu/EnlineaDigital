import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        blog: fileURLToPath(new URL("./blog/index.html", import.meta.url)),
        blogArticle: fileURLToPath(new URL("./blog/article.html", import.meta.url)),
        santoDomingo: fileURLToPath(new URL("./santo-domingo/index.html", import.meta.url)),
        sanPedroDeMacoris: fileURLToPath(
          new URL("./san-pedro-de-macoris/index.html", import.meta.url),
        ),
        higuey: fileURLToPath(new URL("./higuey/index.html", import.meta.url)),
      },
    },
  },
  base: "/EnlineaDigital/",
  plugins: [tailwindcss(), react()],
});
