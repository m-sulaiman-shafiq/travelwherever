"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

        <p className="mb-6">
          Welcome to <strong>TravelWherever</strong>. By accessing or using our
          website, including our{" "}
          <Link href="/" className="text-blue-600 underline">
            search flights
          </Link>{" "}
          and travel content on our{" "}
          <Link href="/blog" className="text-blue-600 underline">
            blog
          </Link>
          , you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Use of Our Services
        </h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes. You must not
          misuse the platform, attempt unauthorized access, or interfere with
          the functionality of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Nature of Service
        </h2>
        <p className="mb-4">
          TravelWherever is a flight comparison platform. We do not sell tickets
          directly. Prices and availability are provided by third-party
          providers and may change without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Third-Party Services
        </h2>
        <p className="mb-4">
          Our website may contain links to third-party websites and services. We
          are not responsible for the content, policies, or practices of
          third-party providers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate information when using the platform</li>
          <li>Ensure your travel details are correct before booking</li>
          <li>Review terms of airlines or booking providers</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on this website, including design, text, and logos, is the
          property of TravelWherever and may not be copied or used without
          permission.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not liable for any losses, delays, cancellations, or damages
          arising from your travel bookings or reliance on third-party services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Disclaimer</h2>
        <p className="mb-4">
          Our services are provided "as is" without warranties of any kind. We
          do not guarantee accuracy, availability, or reliability of flight
          data.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate access to our services if
          users violate these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. GDPR & Data Protection
        </h2>
        <p className="mb-4">
          We process personal data in accordance with our{" "}
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
          . Users in the EEA have rights under GDPR.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">10. CCPA Rights</h2>
        <p className="mb-4">
          California users have rights regarding their personal data, including
          access and deletion requests, as outlined in our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          11. Changes to Terms
        </h2>
        <p className="mb-4">
          We may update these Terms at any time. Continued use of the website
          indicates acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">12. Contact</h2>
        <p className="mb-4">
          For questions regarding these Terms, contact us at:
        </p>
        <p className="font-medium">support@travelwherever.com</p>
      </main>
    </div>
  );
}
