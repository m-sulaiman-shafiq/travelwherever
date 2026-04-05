"use client";

import { useSearchParams } from "next/navigation";

export default function FlightsPage() {
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "Origin";
  const to = searchParams.get("to") || "Destination";

  const demoFlights = [
    { airline: "Airline A", price: 120, duration: "3h 20m" },
    { airline: "Airline B", price: 150, duration: "2h 50m" },
    { airline: "Airline C", price: 180, duration: "4h 10m" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Flights from {from} to {to}
      </h1>

      {/* SEO-friendly description */}
      <p className="text-gray-600 mb-6">
        Explore and compare flights from <strong>{from}</strong> to{" "}
        <strong>{to}</strong>. Showing best available options (demo). 
        Find cheap flights, compare airlines, and plan your next trip!
      </p>

      {/* Flight Results */}
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <p className="text-gray-500 text-sm mb-2">
          Demo flight options — prices and times are illustrative
        </p>

        {demoFlights.map((flight, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b last:border-b-0 py-2"
          >
            <div>
              <p className="font-medium text-gray-800">{flight.airline}</p>
              <p className="text-gray-500 text-sm">
                {from} → {to}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">${flight.price}</p>
              <p className="text-gray-400 text-sm">{flight.duration}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mt-6 text-center">
        <p className="text-blue-600 hover:underline cursor-pointer">
          Sign up to get real-time flight results when available!
        </p>
      </div>
    </div>
  );
}