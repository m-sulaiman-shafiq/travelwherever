import { Plane, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-foreground p-9">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">SkyWay</span>
            </div>
            <p className="text-background/60 text-sm mb-6">
              Your trusted partner for finding the best flight deals worldwide.
              Compare prices and book with confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-background/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-background/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-background/80" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-background/80" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Press
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/40 text-sm">
            © 2026 TravelWherever. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
