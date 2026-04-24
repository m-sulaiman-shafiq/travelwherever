import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  if (!from || !to || !date) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.flightapi.io/onewaytrip/YOUR_API_KEY?departure_airport_code=${from}&arrival_airport_code=${to}&departure_date=${date}&number_of_adults=1`
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "API failed" }, { status: 500 });
  }
}