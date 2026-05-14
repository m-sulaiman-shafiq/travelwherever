"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Flight = {
  airline: string;
  price: number;
  departure: string;
  arrival: string;
  duration: number;
  from: string;
  to: string;
};

export default function FlightsClient() {
  const searchParams = useSearchParams();

  // ✅ Raw values (for UI)
  const rawFrom = searchParams.get("from") || "";
  const rawTo = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";

  // ✅ State
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Extract city (for display)
  const extractCity = (value: string) => {
    return value.split("(")[0].trim();
  };

  // ✅ Extract IATA code (for API)
  const extractCode = (value: string) => {
    const match = value.match(/\((.*?)\)/);
    return match ? match[1] : value;
  };

  const from = extractCode(rawFrom);
  const to = extractCode(rawTo);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/flights?from=${from}&to=${to}&date=${date}`,
        );
        const result = await res.json();

        // Since your route.ts now returns { success: true, data: [...] }
        if (result?.success && result.data) {
          // We map the new beautiful structure to your Flight type
          const mappedFlights = result.data.map((item: any) => ({
            airline: item.airline.code,
            logo: item.airline.logo, // Added logo
            price: item.price.raw,
            departure: item.schedule.departure,
            arrival: item.schedule.arrival,
            duration: item.schedule.duration, // Already formatted as "Xh Ym"
            from: item.route.origin,
            to: item.route.destination,
          }));

          setFlights(mappedFlights);
        } else {
          setFlights([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    if (from && to && date) fetchFlights();
  }, [from, to, date]);

  const formatTime = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDuration = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* ✅ Clean heading */}
      <h1 className="text-xl font-bold mb-4">
        Flights from {extractCity(rawFrom)} ({from}) → {extractCity(rawTo)} (
        {to})
      </h1>

      {/* ✅ Loading */}
      {loading ? (
        <p>Loading flights...</p>
      ) : flights.length === 0 ? (
        <p>No flights found.</p>
      ) : (
        flights.map((flight, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition"
          >
            <p className="font-semibold text-lg">{date}</p>
            {/* Top Row */}
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-lg">{flight.airline}</p>

              <p className="text-green-600 font-bold text-lg">
                ${flight.price}
              </p>
            </div>

            {/* Middle Row */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div>
                <p className="font-semibold text-black">{flight.departure}</p>
                <p>{flight.from}</p>
              </div>

              <div className="text-center">
                <p className="text-xs">{flight.duration}</p>
                <p className="text-xs">Direct</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-black">{flight.arrival}</p>
                <p>{flight.to}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
