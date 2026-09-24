"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Flight = {
  airline: string;
  price: number;
  departure: string;
  arrival: string;
  duration: string;
  from: string;
  to: string;
};

type ApiFlight = {
  airline: { code: string };
  price: { raw: number };
  schedule: { departure: string; arrival: string; duration: string };
  route: { origin: string; destination: string };
};

type FlightsResponse = {
  success?: boolean;
  data?: ApiFlight[];
  error?: string;
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
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

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
    if (!from || !to || !date) {
      setFlights([]);
      setError("Select an origin, destination, and departure date to search.");
      setLoading(false);
      return;
    }

    let cancelled = false;

    const fetchFlights = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `/api/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`,
        );
        const result: FlightsResponse = await res.json();

        if (!res.ok) {
          throw new Error(result.error || "Unable to load flights right now.");
        }

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error("Unable to load flights right now.");
        }

        if (!cancelled) {
          setFlights(
            result.data.map((item) => ({
              airline: item.airline.code,
              price: item.price.raw,
              departure: item.schedule.departure,
              arrival: item.schedule.arrival,
              duration: item.schedule.duration,
              from: item.route.origin,
              to: item.route.destination,
            })),
          );
        }
      } catch (error) {
        console.error("Fetch error:", error);
        if (!cancelled) {
          setFlights([]);
          setError(
            error instanceof Error
              ? error.message
              : "Unable to load flights right now.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchFlights();

    return () => {
      cancelled = true;
    };
  }, [from, to, date, retryCount]);

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
      ) : error ? (
        <div>
          <p>{error}</p>
          {from && to && date ? (
            <button
              type="button"
              className="mt-3 text-blue-600 underline"
              onClick={() => setRetryCount((count) => count + 1)}
            >
              Try again
            </button>
          ) : (
            <a href="/" className="mt-3 inline-block text-blue-600 underline">
              Return to flight search
            </a>
          )}
        </div>
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
