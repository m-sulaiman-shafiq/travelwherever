import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  if (!from || !to || !date) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 },
    );
  }

  try {
    const token = process.env.TRAVELPAYOUTS_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "TravelPayouts token missing in .env.local" },
        { status: 500 },
      );
    }

    const res = await fetch(
      `https://api.travelpayouts.com/v1/prices/cheap?origin=${from}&destination=${to}&depart_date=${date}&currency=usd&token=${token}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: "TravelPayouts API request failed", details: errorText },
        { status: res.status },
      );
    }

    const data = await res.json();
    const flightResults = data.data || {};
    
    // TravelPayouts uses the destination IATA code as the object key (e.g., "LAX")
    const destinationKey = Object.keys(flightResults)[0];
    
    const formattedFlights = destinationKey 
      ? Object.values(flightResults[destinationKey]).map((flight: any) => {
          const depDate = new Date(flight.departure_at);
          
          // Fix: If no return_at (one-way), assume a 2-hour flight for display or null
          const retDate = flight.return_at ? new Date(flight.return_at) : null;

          // Calculate Duration safely
          let durationString = "N/A";
          if (retDate) {
            const diffMs = retDate.getTime() - depDate.getTime();
            const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
            const diffMins = Math.floor((diffMs / (1000 * 60)) % 60);
            durationString = `${diffHrs}h ${diffMins}m`;
          }

          return {
            id: `${flight.airline}-${flight.flight_number}-${flight.departure_at}`,
            price: {
              raw: flight.price,
              formatted: `$${flight.price.toLocaleString()}`
            },
            airline: {
              code: flight.airline,
              logo: `https://pics.avs.io/al_base/120/80/${flight.airline}.png`,
              name: flight.airline
            },
            schedule: {
              // Using 'en-US' and UTC timeZone ensures the time doesn't shift based on your server location
              departure: depDate.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true,
                timeZone: 'UTC' 
              }),
              arrival: retDate 
                ? retDate.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    hour12: true, 
                    timeZone: 'UTC' 
                  }) 
                : "Flexible",
              date: depDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              }),
              duration: durationString
            },
            route: {
              origin: from.toUpperCase(),
              destination: to.toUpperCase(),
              flightNumber: flight.flight_number
            }
          };
        })
      : [];

    return NextResponse.json({
      success: true,
      meta: {
        total: formattedFlights.length,
        currency: "USD",
        retrievedAt: new Date().toISOString()
      },
      data: formattedFlights,
    });

  } catch (err) {
    console.error("TravelPayouts API Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}