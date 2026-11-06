import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser.astro";
import { sortByDate } from "@/lib/utils/sortFunctions";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const posts = sortByDate(await getSinglePage("posts"));
  const site = config.site.base_url.replace(/\/$/, "");

  const items = posts
    .map((post) => {
      const link = `${site}/blog/${post.id}`;
      const pubDate = post.data.date
        ? new Date(post.data.date).toUTCString()
        : new Date().toUTCString();
      const description = (post.data.description || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      const title = (post.data.title || post.id)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.site.title}</title>
    <link>${site}</link>
    <description>${config.metadata.meta_description}</description>
    <language>en</language>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
