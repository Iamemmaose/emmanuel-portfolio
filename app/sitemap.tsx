import type { MetadataRoute } from "next";

const siteUrl = "https://emmanuel-portfolio-pi-inky.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
   return [
    {
        url: siteUrl,
        changeFrequency: "daily",
        priority: 1,
        lastModified: new Date().toISOString(),
    }
   ]
}