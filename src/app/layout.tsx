import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://travelwherever.com"),
  title: "TravelWherever – Compare Flights & Find the Best Airfare Worldwide",
  description:
    "Compare flight prices from hundreds of airlines and travel sites. TravelWherever helps you find the cheapest flights worldwide in seconds",

  verification: {
    google: "80lEjeOVXBD3_8ANq3heg1vB74BPdGfTAVJhBKK5um8",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TravelWherever",
              url: "https://travelwherever.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://travelwherever.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1 pt-24 px-4">
          <article
            className="
    max-w-3xl mx-auto

    prose lg:prose-lg max-w-none

    prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
    prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4
    prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8

    prose-p:text-gray-700 prose-p:leading-8 prose-p:mb-6

    prose-ul:mt-4 prose-ul:mb-6
    prose-li:mb-2 prose-li:leading-7
    prose-li:marker:text-blue-500

    prose-strong:text-black prose-strong:font-semibold

    prose-hr:my-10

    prose-blockquote:border-l-4 prose-blockquote:border-blue-500
    prose-blockquote:pl-4 prose-blockquote:text-gray-600
  "
          >
            {children}
          </article>
        </main>
        <Footer />
      </body>
    </html>
  );
}
