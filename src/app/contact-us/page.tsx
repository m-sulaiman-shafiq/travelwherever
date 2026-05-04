"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // temporary placeholder (replace with API later)
    alert("Message sent! We will get back to you soon.");
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        <p className="text-gray-600 mb-10">
          Have questions about flights, pricing, or how TravelWherever works?
          We’re here to help.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-sm space-y-4"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg h-32"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {/* Legal + SEO Section */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">
            Support & Legal Information
          </h2>

          <p className="text-gray-600">
            TravelWherever is a flight comparison platform. We do not sell
            tickets directly. All bookings are handled by third-party providers.
          </p>

          <p className="text-gray-600">
            For details about how we handle your data, please review our{" "}
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
            California users may have additional rights under CCPA, and EU users
            are protected under GDPR regulations.
          </p>

          <p className="text-gray-600">
            For refund-related queries, visit our{" "}
            <Link href="/refund-policy" className="text-blue-600 underline">
              Refund Policy
            </Link>
            .
          </p>
        </section>

        {/* Contact Info */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
          <p className="text-gray-600">Email: support@travelwherever.com</p>
          <p className="text-gray-500 text-sm mt-2">
            We usually respond within 24–48 hours.
          </p>
        </div>
      </main>
    </div>
  );
}