"use client";

import { Plane, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AirportSelect from "./AirportSelect";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [to, setTo] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  const [returnDate, setReturnDate] = useState(date);
  const [tripType, setTripType] = useState<"round" | "oneway">("round");

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-[#E6F2FB] via-[#F3F9FE] to-white pt-24 pb-16 overflow-hidden">
      {" "}
      <div className="absolute top-32 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 animate-float">
        <Plane className="w-8 h-8 text-primary/20 rotate-45" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#1183D4] font-medium mb-4 animate-fade-in">
            Compare 500+ Airlines Worldwide
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Compare&nbsp;
            <span className="bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
              Cheap Flights
            </span>
            &nbsp;Worldwide
          </h1>
          <p
            className="text-lg text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Search, compare, and book flights at the best prices. Your next
            adventure is just a click away.
          </p>
        </div>
        {/* From TO rectangular box */}
        <div className="bg-white max-w-5xl w-full mx-auto rounded-2xl shadow-lg ring-1 ring-black/5 p-6 md:p-8 animate-fade-in flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" /> From
              </label>
              <AirportSelect
                placeholder="From city or airport"
                value={from}
                onChange={setFrom}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" /> To
              </label>
              <AirportSelect
                placeholder="To city or airport"
                value={to}
                onChange={setTo}
              />
            </div>
            <div className="space-y-2 w-40">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Departure Date
              </label>
              <Input
                type="date"
                className="h-12 bg-secondary/50 border-0"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {tripType === "round" && (
              <div className="space-y-2 w-40">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Return Date
                </label>
                <Input
                  type="date"
                  className="h-12 bg-secondary/50 border-0"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" /> Passengers
              </label>
              <Input
                type="number"
                min={1}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="h-12 bg-secondary/50 border-0"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="trip"
                  className="accent-primary"
                  checked={tripType === "round"}
                  onChange={() => setTripType("round")}
                />
                Round Trip
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="trip"
                  className="accent-primary"
                  checked={tripType === "oneway"}
                  onChange={() => setTripType("oneway")}
                />
                One Way
              </label>
            </div>
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto cursor-pointer"
              onClick={() => {
                if (!from || !to) {
                  alert("Please select departure and destination");
                  return;
                }

                router.push(`/flights?from=${from}&to=${to}`);
              }}
            >
              Search Flights <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground">Airlines</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">10K+</p>
            <p className="text-sm text-muted-foreground">Routes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">2M+</p>
            <p className="text-sm text-muted-foreground">Happy Travelers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
