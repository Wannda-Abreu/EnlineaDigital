import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LocalSeoPage from "./seo/LocalSeoPage";
import type { CitySlug } from "./seo/cityData";

const city = document.body.dataset.city as CitySlug | undefined;

if (!city) {
  throw new Error("Missing city slug in body[data-city].");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocalSeoPage city={city} />
  </StrictMode>,
);
