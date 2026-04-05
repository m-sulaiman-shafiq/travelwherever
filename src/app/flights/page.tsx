import { Suspense } from "react";
import FlightsClient from "./FlightsClient";

// ✅ ADD IT HERE (top of file)
export async function generateMetadata({ searchParams }: any) {
  const from = searchParams?.from || "Origin";
  const to = searchParams?.to || "Destination";

  return {
    title: `Flights from ${from} to ${to} | Compare Prices`,
    description: `Find and compare flights from ${from} to ${to}. Discover the best airlines and cheapest fares.`,
  };
}

export default function FlightsPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading flights...</div>}>
      <FlightsClient />
    </Suspense>
  );
}
