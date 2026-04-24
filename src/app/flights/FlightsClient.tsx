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

        const data = await res.json();
console.log("RAW API RESPONSE:", data || "hello");
        // ✅ Handle FlightAPI response structure
        if (data?.itineraries) {
          const mappedFlights = data.itineraries.map((item: any) => {
            const leg = item.legs?.[0];
            return {
              airline: leg?.carriers?.marketing?.[0] || "Unknown Airline",
              price: item.price?.amount || 0,
              departure: leg?.departure || "",
              arrival: leg?.arrival || "",
              duration: leg?.durationInMinutes || 0,
              from: leg?.origin || "",
              to: leg?.destination || "",
            };
          });
          setFlights(mappedFlights);
        } else {
          console.error("Invalid API response:", data);
          setFlights([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    if (from && to && date) {
      fetchFlights();
    }
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
                <p className="font-semibold text-black">
                  {formatTime(flight.departure)}
                </p>
                <p>{flight.from}</p>
              </div>

              <div className="text-center">
                <p className="text-xs">{formatDuration(flight.duration)}</p>
                <p className="text-xs">Direct</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-black">
                  {formatTime(flight.arrival)}
                </p>
                <p>{flight.to}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
