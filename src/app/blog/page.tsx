import Link from "next/link";

export const metadata = {
  title: "Blog – TravelWherever",
  description: "Read all TravelWherever blog posts about travel, flights, and airfare tips.",
};

const blogs = [
  {
    title: "Compare Flights",
    slug: "compare-flights ",
  },
  {
    title: "Middle East War Flight Prices",
    slug: "middle-east-war-flight-prices",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {blogs.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}