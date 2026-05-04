"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

        <p className="mb-6">
          Welcome to <strong>TravelWherever</strong>. This Privacy Policy
          explains how we collect, use, and protect your information when you
          use our website, including our{" "}
          <Link href="/" className="text-blue-600 underline">
            search flights
          </Link>{" "}
          and travel content on our{" "}
          <Link href="/blog" className="text-blue-600 underline">
            blog
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal information (name, email if you contact us)</li>
          <li>Search data (destinations, travel dates, preferences)</li>
          <li>Technical data (IP address, browser, device info)</li>
          <li>Cookies and analytics data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide accurate flight comparisons</li>
          <li>To improve website performance and UX</li>
          <li>To personalize results and recommendations</li>
          <li>To communicate with users when necessary</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Legal Basis (GDPR Compliance)
        </h2>
        <p className="mb-4">
          If you are located in the European Economic Area (EEA), we process
          your data based on legitimate interest, consent (for cookies), and
          contractual necessity when providing our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Cookies & Advertising
        </h2>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your experience and
          may use third-party services like Google Analytics and Google Ads.
          These services may collect information to provide personalized ads.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. CCPA Privacy Rights (California Users)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Right to know what data is collected</li>
          <li>Right to request deletion of data</li>
          <li>
            Right to opt-out of data selling (we do not sell personal data)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Data Sharing</h2>
        <p className="mb-4">
          We may share data with trusted third-party providers (such as flight
          APIs and analytics tools) only to operate and improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard measures to protect your data, but no
          system is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent for cookies</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">9. External Links</h2>
        <p className="mb-4">
          Our platform may link to third-party websites. We are not responsible
          for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          10. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Continued use of our
          website means you accept those changes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">11. Contact</h2>
        <p className="mb-4">
          For any privacy-related questions, contact us at:
        </p>
        <p className="font-medium">support@travelwherever.com</p>
      </main>
    </div>
  );
}
