import fs from "fs";
import path from 'path';
import { getBlogPostTitleFromFileContent } from "./getBlogPostTitleFromFileContent";

export type Post = {
  title: string;
  excerpt: string;
  body: string;
  slug: string;
};

const BLOGS_FOLDER = path.join(process.cwd(), 'blog');

export async function getInitialBlogPosts(): Promise<{ posts: Post[] }> {
  const blogPosts = fs
    .readdirSync(BLOGS_FOLDER)
    .filter(e => e.endsWith(".md"))
    .sort()
    .reverse();

  return {
    posts: blogPosts.map(name => {
      let filePath = path.join(BLOGS_FOLDER, name);
      const content = fs.readFileSync(filePath, "utf8");
      const excerpt = content.split("\n")[2];
      return {
        title: getBlogPostTitleFromFileContent(content),
        body: content,
        slug: name.replace(/\.md$/, ""),
        excerpt: excerpt.length > 260 ? excerpt.slice(0, 260) + "..." : excerpt,
      };
    }),
  };
}
