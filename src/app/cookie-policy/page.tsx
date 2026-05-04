"use client";

import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

        <p className="mb-6">
          This Cookie Policy explains how <strong>TravelWherever</strong> uses
          cookies and similar technologies when you visit our website, including
          our{" "}
          <Link href="/" className="text-blue-600 underline">
            search flights
          </Link>{" "}
          and travel resources on our{" "}
          <Link href="/blog" className="text-blue-600 underline">
            blog
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. What Are Cookies?
        </h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit a
          website. They help websites remember your preferences and improve user
          experience.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Use Cookies
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To enable core website functionality</li>
          <li>To remember your preferences and searches</li>
          <li>To analyze traffic and usage patterns</li>
          <li>To deliver relevant advertisements (if applicable)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Types of Cookies We Use
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Essential Cookies:</strong> Required for basic functionality
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand user behavior
            (e.g., Google Analytics)
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Used to show personalized ads
          </li>
          <li>
            <strong>Preference Cookies:</strong> Store your settings and
            preferences
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Third-Party Cookies
        </h2>
        <p className="mb-4">
          We may use third-party services such as analytics providers and
          advertising partners. These third parties may set cookies on your
          device and collect information in accordance with their own policies.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. GDPR Compliance (EEA Users)
        </h2>
        <p className="mb-4">
          If you are located in the European Economic Area, you have the right
          to consent to or reject non-essential cookies. We only use such
          cookies after obtaining your consent through a cookie banner.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. CCPA Rights (California Users)
        </h2>
        <p className="mb-4">
          California residents have the right to know what personal data is
          collected and how it is used. You can request deletion of your data
          and opt-out of data sharing.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Managing Cookies
        </h2>
        <p className="mb-4">
          You can control or disable cookies through your browser settings.
          Please note that disabling cookies may affect website functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time. Continued use of
          our website means you accept these updates.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Contact</h2>
        <p className="mb-4">
          For questions about our Cookie Policy, contact us at:
        </p>
        <p className="font-medium">support@travelwherever.com</p>

        <p className="mt-10 text-sm text-gray-500">
          For more details, see our{" "}
          <Link href="/privacy-policy" className="underline text-blue-600">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-service" className="underline text-blue-600">
            Terms of Service
          </Link>
        </p>
      </main>
    </div>
  );
}
