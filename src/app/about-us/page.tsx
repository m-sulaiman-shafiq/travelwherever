"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <img
          src="/ceo-photo.png"
          alt="Muhammad S - Founder of TravelWherever"
          className="w-50 h-50 rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold mb-6">About TravelWherever</h1>

        <p className="text-gray-600 mb-6">
          Hi, I’m <strong>Muhammad Sulaiman Shafiq</strong>, the person behind
          TravelWherever. I built this platform to solve a simple problem I kept
          running into: finding clear, comparable flight options without jumping
          between multiple websites.
        </p>

        <p className="text-gray-600 mb-6">
          TravelWherever is a flight comparison tool that helps you explore
          routes, compare prices, and find available flights across different
          airlines and providers in one place. It does not sell tickets directly
          — instead, it connects you to third-party booking platforms where you
          can complete your purchase.
        </p>

        <p className="text-gray-600 mb-6">
          I started working on this project as both a learning experience and a
          step toward building a real travel product. The goal is to create
          something fast, simple, and genuinely useful — without clutter, hidden
          fees, or confusing interfaces.
        </p>

        <p className="text-gray-600 mb-6">
          TravelWherever is currently based in Pakistan and is being developed
          as an independent project with plans to grow into a larger travel
          platform over time.
        </p>

        <p className="text-gray-600 mb-6">
          If you have feedback, suggestions, or just want to say hi, feel free
          to{" "}
          <Link href="/contact" className="text-blue-600 underline">
            contact me
          </Link>
          . Your input helps improve the platform.
        </p>

        <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Transparency</h2>
          <p className="text-gray-600">
            TravelWherever shows data provided by third-party services. Prices
            and availability can change, and bookings are handled externally.
            For more details, you can review the{" "}
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
        </div>
      </main>
    </div>
  );
}
