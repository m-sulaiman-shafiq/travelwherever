// src/app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  // ✅ params.slug is guaranteed now
  const post = getPostBySlug(params.slug);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}