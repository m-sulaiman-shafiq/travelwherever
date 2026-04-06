import { Plane, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Plane className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            TravelWherever
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button
              variant="ghost"
              className="hidden md:inline-flex cursor-pointer"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="hidden md:inline-flex cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
