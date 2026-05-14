import { Plane, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo */}
          <img
            src="/logo_travelwherever.png"
            alt="TravelWherever logo"
            className="w-16 h-16 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-foreground leading-none">
            TravelWherever
          </span>
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          {/* <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Flights
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Destinations
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Deals
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </a>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
