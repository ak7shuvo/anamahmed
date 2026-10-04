import type { MetadataRoute } from "next";
import { BASE_URL } from "../lib/site";
import { nav } from "../lib/nav";

const builtAt = new Date(); // evaluated at build time

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...nav.map((n) => n.href)].map((r) => ({ url: `${BASE_URL}${r}`, lastModified: builtAt, changeFrequency: r === "" ? "monthly" : "yearly", priority: r === "" ? 1 : r === "/research" || r === "/about" ? 0.9 : 0.6 }));
}
