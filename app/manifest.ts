import type { MetadataRoute } from "next";
import { SITE_NAME } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Academic Portfolio`,
    short_name: "Anam Ahmed",
    description: "Lecturer in English, Leading University, Sylhet: second-language learning, teacher education and critical thinking.",
    start_url: "/",
    display: "browser",
    theme_color: "#F7F4EE",
    background_color: "#F7F4EE",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
