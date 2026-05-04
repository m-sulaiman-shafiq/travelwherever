"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>

        <p className="text-gray-600 mb-8">
          TravelWherever is built to make flight search simple, transparent, and accessible for everyone.
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to help travelers find the best flight options quickly without hidden fees or confusing interfaces. We aim to simplify the process of comparing flights across multiple providers in one place.
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <p className="text-gray-600">
            TravelWherever is a flight comparison platform. Using our search tool, users can explore flight prices, routes, and availability from various airlines and travel providers.
          </p>
          <p className="text-gray-600">
            We do not sell tickets directly. Instead, we connect you with trusted third-party providers where you can complete your booking securely.
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold">Why Choose Us</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Simple and fast flight comparison</li>
            <li>No hidden fees from our platform</li>
            <li>Access to multiple airlines and providers</li>
            <li>Clean, user-friendly experience</li>
          </ul>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold">Transparency & Trust</h2>
          <p className="text-gray-600">
            We believe in transparency. Flight prices and availability are provided by third-party services and may change at any time. For more details, please review our legal pages.
          </p>

          <p className="text-gray-600">
            Learn more about how we handle your data in our{" "}
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
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-600">
            Have questions or feedback? We’d love to hear from you.
          </p>

          <Link href="/contact-us" className="text-blue-600 underline">
            Contact Us
          </Link>
        </section>

        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            We are building a modern travel platform that empowers users to explore the world with confidence, clarity, and control over their choices.
          </p>
        </div>
      </main>
    </div>
  );
}
