import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { mainNav } from "@/data/navigation";
import { newsletterSources } from "@/data/newsletters";

// Routes are derived from the nav data so that adding a page to src/data/navigation.ts
// puts it in the sitemap automatically, rather than requiring the list to be kept in sync
// by hand. Dropdown parents repeat their own href, hence the dedupe.
// Newsletter source pages are generated from data rather than the nav, so they are appended
// here; without this they would be absent from the sitemap entirely.
const newsletterRoutes = newsletterSources.map((s) => `/newsletters/${s.slug}`);

const routes = [
  ...new Set([
    ...mainNav.flatMap((item) => [item.href, ...(item.children?.map((c) => c.href) ?? [])]),
    ...newsletterRoutes,
  ]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
