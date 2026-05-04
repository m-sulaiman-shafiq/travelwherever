"use client";

import Link from "next/link";

export default function HelpCenterPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Help Center</h1>
        <p className="text-sm text-gray-500 mb-10">Find answers to common questions about using TravelWherever.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. How does TravelWherever work?</h2>
        <p className="mb-4">
          TravelWherever helps you compare flight prices from different airlines and travel providers. Simply use our <Link href="/" className="text-blue-600 underline">search tool</Link>, enter your route and dates, and we’ll show you available options.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Do you sell flight tickets?</h2>
        <p className="mb-4">
          No. We do not sell tickets directly. When you select a flight, you will be redirected to a third-party provider to complete your booking.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Why do prices change?</h2>
        <p className="mb-4">
          Flight prices are controlled by airlines and booking providers and can change frequently. We recommend booking quickly once you find a good deal.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. What if I have a problem with my booking?</h2>
        <p className="mb-4">
          Since bookings are handled by third-party providers, you should contact them directly for support. You can review our <Link href="/disclaimer" className="text-blue-600 underline">Disclaimer</Link> for more details.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. How can I contact you?</h2>
        <p className="mb-4">
          If you need help with our platform, you can reach us at:
        </p>
        <p className="font-medium mb-4">support@travelwherever.com</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Is my data safe?</h2>
        <p className="mb-4">
          Yes. We take privacy seriously. Learn more in our <Link href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Can I get refunds through TravelWherever?</h2>
        <p className="mb-4">
          Refunds depend on the airline or booking provider you used. Please check their policies or see our <Link href="/refund-policy" className="text-blue-600 underline">Refund Policy</Link> for guidance.
        </p>

        <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
          <p className="mb-4">Contact our support team and we’ll guide you.</p>
          <Link href="mailto:support@travelwherever.com" className="text-blue-600 underline">
            Email Support
          </Link>
        </div>
      </main>
    </div>
  );
}
