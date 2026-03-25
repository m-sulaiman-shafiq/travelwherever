// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from '../../../lib/posts';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div>{post.content}</div>
    </article>
  );
}