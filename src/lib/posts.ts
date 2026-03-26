import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  slug: string;
  title: string;
  date?: string;
  contentHtml?: string;
};

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const data = matterResult.data as { title: string; date?: string };

    if (!data.title) throw new Error(`Missing title in ${fileName}`);

    return {
      slug,
      ...data,
    };
  });
}

export function getPostBySlug(slug: string) {
  if (!slug) throw new Error("Slug is undefined");

  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post file not found: ${slug}.md`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const data = matterResult.data as { title: string; date?: string };

  return {
    slug,
    title: data.title,
    date: data.date,
    contentHtml: fileContents, // You can convert Markdown to HTML here
  };
}