export const dynamic = "force-dynamic"; // cacheable
export const revalidate = 300

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/mentors`, { next: { revalidate: 300 } });
    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
