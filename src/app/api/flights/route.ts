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
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      const errorText = await res.text();

      return NextResponse.json(
        {
          error: "TravelPayouts API request failed",
          details: errorText,
        },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("TravelPayouts API Error:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
