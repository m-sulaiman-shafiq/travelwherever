"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How does TravelWherever work?",
    a: "TravelWherever compares flight prices from multiple airlines and travel providers. Enter your route and date on our search page to see available options.",
  },
  {
    q: "Do you sell flight tickets?",
    a: "No, we do not sell tickets directly. We redirect you to third-party providers where you can complete your booking.",
  },
  {
    q: "Why do flight prices change so often?",
    a: "Flight prices are controlled by airlines and can change based on demand, availability, and timing. We recommend booking quickly when you find a good deal.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "All bookings are handled by third-party providers. Please contact them directly for cancellations or changes.",
  },
  {
    q: "Is my personal data?",
    a: "Yes. We follow industry practices to protect your data. You can read more in our Privacy Policy.",
  },
  {
    q: "Do you offer refunds?",
    a: "Refunds depend on the airline or booking provider. Check their policy or visit our Refund Policy page for guidance.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-10">
          Find quick answers about using TravelWherever.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <span className="font-medium">{faq.q}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SEO + Legal Links */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">More Information</h2>

          <p className="text-gray-600">
            Learn how we handle your data in our{" "}
            <Link href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </Link>
            ,{" "}
            <Link href="/cookie-policy" className="text-blue-600 underline">
              Cookie Policy
            </Link>
            , and{" "}
            <Link href="/terms-of-service" className="text-blue-600 underline">
              Terms of Service
            </Link>
            .
          </p>

          <p className="text-gray-600">
            For refund-related queries, visit our{" "}
            <Link href="/refund-policy" className="text-blue-600 underline">
              Refund Policy
            </Link>
            .
          </p>

          <p className="text-gray-600">
            Still need help? Visit our{" "}
            <Link href="/help" className="text-blue-600 underline">
              Help Center
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            Reach out to us and we’ll help you.
          </p>
          <Link href="/contact" className="text-blue-600 underline">
            Contact Support
          </Link>
        </div>
      </main>
    </div>
  );
}