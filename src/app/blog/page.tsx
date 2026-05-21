import Link from "next/link";

export const metadata = {
  title: "Travel Blog – TravelWherever",
  description:
    "Latest travel insights, flight price trends, and travel tips to help you book smarter.",
};

const blogs = [
  {
    title: "Compare Flights Like a Pro",
    slug: "compare-flights",
    category: "Flight Hacks",
    excerpt:
      "Learn how to compare flight prices across airlines and save money using smart search strategies.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
    {
    title: "Skyscanner Vs Google",
    slug: "skyscanner-vs-google",
    category: "Flight websites comparison",
    excerpt:
      "Is Skyscanner better than Google for flight comparisons?",
    readTime: "4 min read",
    image:
      "https://blogthattravels.com/wp-content/uploads/2024/07/Screenshot-2024-07-29-at-10.00.52%E2%80%AFAM.png",
  },
  {
    title: "Why Flight Prices Keep Going Up",
    slug: "flight-pricing-going-up",
    category: "Price Trends",
    excerpt:
      "Understand the real reasons behind rising airfare and how timing affects your ticket cost.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "How Global Events Impact Flights",
    slug: "middle-east-war-flight-prices",
    category: "Travel News",
    excerpt:
      "A breakdown of how geopolitical tensions and conflicts influence global flight pricing.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1200&q=80",
  },
    {
    title: "Momondo vs Skyscanner",
    slug: "momondo-vs-skyscanner",
    category: "Flight websites comparison",
    excerpt:
      "How good is Momondo than Skyscanners?",
    readTime: "5 min read",
    image:
      "https://thumbs.dreamstime.com/b/view-plane-above-clouds-wing-airplane-flying-evening-162279974.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-3">Travel Blog</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Insights on flights, pricing trends, and travel hacks to help you book
          smarter and travel better.
        </p>
      </section>

      {/* Category Pills */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {["All", "Flight Hacks", "Price Trends", "Travel News"].map((cat) => (
          <span
            key={cat}
            className="px-4 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Blog Grid */}
      <section className="grid md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition mb-2">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm">{post.excerpt}</p>

              <p className="text-blue-600 text-sm mt-4 font-medium">
                Read article →
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
