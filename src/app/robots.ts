import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Serves /robots.txt (previously a 404, which left crawlers with no pointer to the sitemap).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
