import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/daladan-dasturxongacha`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
