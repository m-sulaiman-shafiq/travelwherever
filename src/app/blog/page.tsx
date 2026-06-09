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
    category: "Flights comparison",
    excerpt: "Is Skyscanner better than Google for flight comparisons?",
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
    category: "Flights comparison",
    excerpt: "How good is Momondo than Skyscanners?",
    readTime: "5 min read",
    image:
      "https://thumbs.dreamstime.com/b/view-plane-above-clouds-wing-airplane-flying-evening-162279974.jpg",
  },
  {
    title: "Lahore To Dubai Flights",
    slug: "lahore-to-dubai-flights",
    category: "Flights comparison",
    excerpt: "How cheap and frequent flights operate from Lahore to Dubai",
    readTime: "5 min read",
    image: "http://travelwherever.com/lahore-to-dubai.png",
  },
  {
    title: "Cheapest Flight Days",
    slug: "cheapest-day-flights",
    category: "When/how to book",
    excerpt: "What days you can get cheapest flights",
    readTime: "5 min read",
    image: "http://travelwherever.com/cheapest-flight-days.jpg",
  },
  {
    title: "Karachi To Dubai Flights",
    slug: "karachi-to-dubai-flights",
    category: "Flights comparison",
    excerpt: "How cheap and frequent flights operate from Karachi to Dubai",
    readTime: "5 min read",
    image: "http://travelwherever.com/karachi-to-dubai.jpg",
  },
  {
    title: "Emirates vs Qatar Airways",
    slug: "emirates-vs-qatar-airways",
    category: "Airlines Comparison",
    excerpt: "Which is better for luxury travel: Emirates or Qatar Airways?",
    readTime: "5 min read",
    image: "http://travelwherever.com/emirates-vs-qatar.png",
  },
  {
    title: "Pakistan to UK Cheapest Flights",
    slug: "pakistan-to-uk-cheapest-flights",
    category: "Flights comparison",
    excerpt: "Compare flights for travelling between Pakistan and UK",
    readTime: "5 min read",
    image: "http://travelwherever.com/pakistan-to-uk-cheapest-flights.png",
  },
  {
    title: "How far in Advance to Book a Flight?",
    slug: "how-far-in-advance-to-book-a-flight",
    category: "When/ How To Book",
    excerpt: "How far in advance should you book your air ticket?",
    readTime: "5 min read",
    image: "http://travelwherever.com/how-far-in-advance-to-book-a-flight.png",
  },
  {
    title: "Hidden City Ticketing in 2026: Does It Still Work and Is It Risky?",
    slug: "hidden-city-ticketing",
    category: "When/ How To Book",
    excerpt: "Booking ticket to a neighbouring city.",
    readTime: "5 min read",
    image: "http://travelwherever.com/hidden-city-ticketing.png",
  },
  {
    title:
      "Kayak vs Google Flights for International Travel: Which Flight Search Tool Is Better in 2026?",
    slug: "kayak-vs-google-flights-for-international-travel",
    category: "Flights somparison",
    excerpt: "Either Kayak or Google is better for flight comparison",
    readTime: "5 min read",
    image:
      "http://travelwherever.com/kayak-vs-google-flights-for-international-travel.png",
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
        {[
          "All",
          "Flights comparison",
          "Airlines Comparison",
          "When/how to book",
          "Travel News",
        ].map((cat) => (
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
