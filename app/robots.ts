import { WEBSITE_URL } from "./constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
    host: WEBSITE_URL,
  };
}
