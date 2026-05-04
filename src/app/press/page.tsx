"use client";

import Link from "next/link";

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Press & Media</h1>
          <p className="text-gray-600 max-w-2xl">
            Official information, brand assets, and company facts about
            TravelWherever — a flight comparison platform helping users find the
            best travel options in one place.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="mb-12">
          <img
            src="https://img.freepik.com/free-photo/business-team-meeting-modern-office_53876-15192.jpg"
            alt="Press and media workspace"
            className="rounded-2xl w-full h-72 object-cover"
          />
        </section>

        {/* COMPANY FACTS */}
        <section className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-2">Founded</h3>
            <p className="text-gray-600">2026 (Independent Project)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Pakistan</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-2">Industry</h3>
            <p className="text-gray-600">Travel Tech / Flight Comparison</p>
          </div>
        </section>

        {/* ABOUT THE COMPANY */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">About TravelWherever</h2>
          <p className="text-gray-600 leading-relaxed">
            TravelWherever is a modern flight comparison platform designed to
            help users discover and compare flight prices from multiple
            providers in one place. The platform does not sell tickets directly
            — instead, it redirects users to trusted third-party booking
            partners to complete their purchases.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            The goal is simple: make flight search faster, clearer, and more
            transparent for everyone.
          </p>
        </section>

        {/* MEDIA ASSETS */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Media Assets</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Brand Logo</h3>
              <p className="text-gray-600 mb-4">
                Official logo for media usage.
              </p>
              <a className="text-blue-600 underline" href="#">
                Download Logo (coming soon)
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Press Kit</h3>
              <p className="text-gray-600 mb-4">
                Company description, screenshots, and visuals.
              </p>
              <a className="text-blue-600 underline" href="#">
                Download Press Kit (coming soon)
              </a>
            </div>
          </div>
        </section>

        {/* NEWS / UPDATES */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-600">
              No press releases have been published yet. TravelWherever is an
              early-stage platform currently focused on product development and
              improving flight search experience.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Press Contact</h2>

          <p className="text-gray-600 mb-4">
            For media inquiries, partnerships, or interviews:
          </p>

          <Link href="/contact-us" className="text-blue-600 underline">
            Contact Us
          </Link>
        </section>

        {/* SEO LINKS */}
        <section className="text-sm text-gray-500 space-y-2">
          <p>
            Learn more about TravelWherever in our{" "}
            <Link href="/about-us" className="underline">
              About page
            </Link>
            , or review our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            ,{" "}
            <Link href="/cookie-policy" className="underline">
              Cookie Policy
            </Link>
            , and{" "}
            <Link href="/terms-of-service" className="underline">
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
