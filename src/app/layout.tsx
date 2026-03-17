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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
