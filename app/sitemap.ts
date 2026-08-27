import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/content";

const lastModified = new Date("2026-08-27");

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/polityka-prywatnosci`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}