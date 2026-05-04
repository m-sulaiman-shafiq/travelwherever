"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Careers</h1>

        <p className="text-gray-600 mb-10">
          Join us in building the future of travel. At TravelWherever, we’re focused on creating simple, fast, and transparent flight search experiences.
        </p>

        {/* Work Culture */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Work Environment</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Remote-first and flexible work culture</li>
            <li>Focus on learning, building, and experimentation</li>
            <li>Modern tech stack (Next.js, TypeScript, APIs)</li>
            <li>Open communication and fast decision making</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold">What You’ll Get</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Hands-on experience building a real startup product</li>
            <li>Opportunity to work on impactful features</li>
            <li>Flexible schedule</li>
            <li>Growth-focused environment</li>
          </ul>
        </section>

        {/* No Open Roles */}
        <section className="mt-10 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Current Openings</h2>
          <p className="text-gray-600">
            We currently do not have any open positions.
          </p>
          <p className="text-gray-600 mt-2">
            However, we’re always interested in talented individuals. Feel free to reach out and introduce yourself.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <p className="text-gray-600 mb-4">
            If you’d like to be considered for future opportunities, you can contact us.
          </p>

          <Link href="/contact-us" className="text-blue-600 underline">
            Contact Us
          </Link>
        </section>

        {/* Legal Links */}
        <section className="mt-12 text-sm text-gray-500 space-y-2">
          <p>
            Learn how we handle your data in our{" "}
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