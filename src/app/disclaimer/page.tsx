"use client";

import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

        <p className="mb-6">
          Welcome to <strong>TravelWherever</strong>. This Disclaimer outlines
          important information regarding the use of our website, including our{" "}
          <Link href="/flights" className="text-blue-600 underline">
            flight comparison tools
          </Link>{" "}
          and travel content available on our{" "}
          <Link href="/blog" className="text-blue-600 underline">
            blog
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. No Ticket Sales
        </h2>
        <p className="mb-4">
          TravelWherever is a flight comparison platform. We do not sell airline
          tickets directly. All bookings are completed through third-party
          providers such as airlines or online travel agencies.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Accuracy of Information
        </h2>
        <p className="mb-4">
          We strive to provide accurate and up-to-date flight data, including
          prices, availability, and schedules. However, this information is
          supplied by third-party sources and may change at any time without
          notice.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Third-Party Responsibility
        </h2>
        <p className="mb-4">
          When you click on a flight result, you may be redirected to a
          third-party website. We are not responsible for the content, booking
          process, pricing, cancellations, or policies of those external
          providers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. No Guarantees</h2>
        <p className="mb-4">
          We do not guarantee the availability, pricing accuracy, or
          completeness of any flight information. All services are provided on
          an "as is" basis without warranties of any kind.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Travel Risks</h2>
        <p className="mb-4">
          Travel involves inherent risks, including delays, cancellations, and
          changes in travel regulations. Users are responsible for verifying all
          travel details with the relevant airline or provider before making a
          booking.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Affiliate Disclosure
        </h2>
        <p className="mb-4">
          TravelWherever may earn commissions from affiliate partners when users
          click on links and make bookings. This does not affect the price you
          pay.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          TravelWherever shall not be held liable for any direct or indirect
          losses, damages, or inconveniences resulting from the use of our
          platform or reliance on the information provided.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. External Links</h2>
        <p className="mb-4">
          Our website may contain links to external websites. We do not control
          or endorse their content and are not responsible for their privacy or
          business practices.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Consent</h2>
        <p className="mb-4">
          By using our website, you agree to this Disclaimer and our{" "}
          <Link href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-blue-600 underline">
            Terms of Service
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contact</h2>
        <p className="mb-4">
          If you have any questions regarding this Disclaimer, please contact us
          at:
        </p>
        <p className="font-medium">support@travelwherever.com</p>
      </main>
    </div>
  );
}
