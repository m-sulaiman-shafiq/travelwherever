"use client";

import { useSearchParams } from "next/navigation";

const airportMap: Record<string, string> = {
  DXB: "Dubai",
  DEL: "Delhi (Indira Gandhi International Airport.)",
  LHE: "Lahore",
};

export default function FlightsClient() {
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
      <h1 className="text-2xl font-bold mb-4">
        Flights from {airportMap[from!] || from} to {airportMap[to!] || to}
      </h1>
      <p className="text-gray-600 mb-6">
        Compare flights from <strong>{from}</strong> to <strong>{to}</strong>.
        Showing best available options (demo).
      </p>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <p className="text-gray-500 text-sm">
          Demo flight options — illustrative only
        </p>

        {demoFlights.map((flight, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-medium">{flight.airline}</p>
              <p className="text-sm text-gray-500">
                {from} → {to}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold">${flight.price}</p>
              <p className="text-sm text-gray-400">{flight.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
