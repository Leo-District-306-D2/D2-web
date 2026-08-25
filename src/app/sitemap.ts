import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { mainNav } from "@/data/navigation";

// Routes are derived from the nav data so that adding a page to src/data/navigation.ts
// puts it in the sitemap automatically, rather than requiring the list to be kept in sync
// by hand. Dropdown parents repeat their own href, hence the dedupe.
const routes = [...new Set(mainNav.flatMap((item) => [item.href, ...(item.children?.map((c) => c.href) ?? [])]))];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
