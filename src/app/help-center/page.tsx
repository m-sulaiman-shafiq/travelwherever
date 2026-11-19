import Link from "next/link";
import {
  Search,
  Plane,
  CreditCard,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Mail,
  ExternalLink,
  FileText,
  Globe,
  CircleHelp,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Travel Support & Help Center | TravelWherever",
  description:
    "Get help using TravelWherever. Find guidance on flight comparisons, booking information, payments, privacy, and travel support.",
};

const supportCategories = [
  {
    icon: Plane,
    title: "Flight Search & Results",
    description:
      "Learn how to search routes, compare flight options, and understand the results displayed on TravelWherever.",
    links: [
      { label: "How flight comparison works", href: "/faqs" },
      { label: "Understanding flight prices", href: "/faqs" },
    ],
  },
  {
    icon: CreditCard,
    title: "Bookings & Payments",
    description:
      "Understand where bookings are completed, how payments work, and who to contact after making a reservation.",
    links: [
      { label: "Booking information", href: "/faqs" },
      { label: "Refund policy", href: "/refund-policy" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    description:
      "Find out how your information is handled and learn about the policies that protect your privacy.",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Website disclaimer", href: "/disclaimer" },
    ],
  },
  {
    icon: Globe,
    title: "Using TravelWherever",
    description:
      "Get familiar with our platform, its features, and how to make the most of your flight search experience.",
    links: [
      { label: "Frequently asked questions", href: "/faqs" },
      { label: "About TravelWherever", href: "/about" },
    ],
  },
];

const quickLinks = [
  {
    icon: CircleHelp,
    title: "Frequently Asked Questions",
    description: "Quick answers to common questions.",
    href: "/faqs",
  },
  {
    icon: FileText,
    title: "Policies & Guidelines",
    description: "Review our terms and policies.",
    href: "/disclaimer",
  },
  {
    icon: Mail,
    title: "Contact Us",
    description: "Get in touch with our team.",
    href: "/contact",
  },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-[#fafbfc] text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-24">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Headphones size={16} />
            TravelWherever Support
          </span>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            How can we help you
            <span className="text-blue-600"> travel better?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Find guidance on flight searches, booking information, payments,
            privacy, and using TravelWherever.
          </p>

          <div className="mx-auto mt-9 flex max-w-xl flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/faqs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Browse FAQs
              <ArrowRight size={17} />
            </Link>

            <Link
              href="mailto:support@travelwherever.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <Mail size={17} />
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Explore support
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            What do you need help with?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Choose a topic to find useful information and resources for your
            travel planning experience.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {supportCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  {category.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
                    >
                      {link.label}
                      <ArrowRight
                        size={16}
                        className="shrink-0 transition group-hover:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Important Booking Information */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600">
              <CheckCircle2 size={17} />
              Good to know
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Need help with an existing flight booking?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              TravelWherever helps you compare flight options from airlines and
              travel providers. Your actual booking, payment, ticket changes,
              cancellations, and refunds are handled by the airline or booking
              provider you selected.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              For assistance with an existing reservation, contact the provider
              shown in your booking confirmation.
            </p>

            <Link
              href="/refund-policy"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              Read our refund guidance
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <Clock size={23} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Contact the right support team
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Our team can assist with questions about the TravelWherever
              website. For ticket-specific requests, your booking provider will
              have access to your reservation details.
            </p>

            <Link
              href="mailto:support@travelwherever.com"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Mail size={17} />
              Email TravelWherever Support
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mb-9 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Helpful resources
          </h2>
          <p className="mt-3 text-slate-600">
            Find the right information without searching through the entire
            website.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                  <Icon size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 px-7 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
            <Headphones size={27} />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Still looking for an answer?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            We’re here to help with questions about TravelWherever. Send us an
            email and tell us how we can assist.
          </p>

          <Link
            href="mailto:support@travelwherever.com"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
          >
            Get in touch
            <ExternalLink size={16} />
          </Link>

          <p className="mt-5 text-sm text-slate-400">
            support@travelwherever.com
          </p>
        </div>
      </section>
    </main>
  );
}
