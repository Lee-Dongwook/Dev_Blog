import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = (
    await getCollection("blog", ({ data }: { data: any }) => !data.draft)
  ).sort((a: any, b: any) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "DongDev Tech Blog",
    description: "DongWook Dev's Tech Blog",
    site: import.meta.env.SITE,
    items: posts.map((p: any) => ({
      link: `/blog/${p.slug}`,
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
    })),
  });
}
