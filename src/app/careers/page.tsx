"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        {/* Hero */}
        <section className="mb-14">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay (important for readability) */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-4 px-6 md:px-12 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Life at TravelWherever
              </h1>
              <p className="max-w-xl text-white/90">
                We’re building a simple, fast, and transparent way to compare
                flights. Even as an early-stage product, we care about how we
                work as much as what we build.
              </p>
            </div>
          </div>
        </section>

        {/* Image strip with bottom overlays */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden h-80">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Office work"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 p-5">
              <h3 className="font-semibold text-lg text-white">
                Build with clarity
              </h3>
              <p className="text-white text-sm">
                Keep interfaces simple, remove clutter, and ship features users
                actually need.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden h-80">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team discussion"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-0 p-5">
              <h3 className="font-semibold text-lg text-white">
                Move fast, learn faster
              </h3>
              <p className="text-white text-sm">
                We experiment, measure, and iterate quickly. Learning beats
                perfection.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden h-80">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Remote work"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-0 p-5">
              <h3 className="font-semibold text-lg text-white">
                The Gamechanger
              </h3>
              <p className="text-white text-sm">
                Irrespective of your background, you're free to make wonders.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">How we work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Remote-first with flexible hours</li>
                <li>Small team, high ownership</li>
                <li>Async-friendly communication</li>
                <li>Focus on product impact</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Modern stack (Next.js, TypeScript)</li>
                <li>Ship small, ship often</li>
                <li>Measure what matters</li>
                <li>Continuous learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="mb-14 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Open roles</h2>
          <p className="text-gray-600">
            We don’t have any open positions right now.
          </p>
          <p className="text-gray-600 mt-2">
            If you’re interested, reach out anyway—we’re always happy to
            connect.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="text-blue-600 underline">
              Contact us
            </Link>
          </div>
        </section>

        {/* Legal */}
        <section className="text-sm text-gray-500 space-y-2">
          <p>
            Learn more in our{" "}
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
