import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/mentors?_embed`, {
      cache: "no-store",
    });
    const data = await res.json();

    const mapedData = data.map((mentor) => {
      const featuredMedia = mentor._embedded["wp:featuredmedia"];
      const imageUrl = featuredMedia?.[0]?.source_url;

      return {
        id: mentor.id,
        name: mentor.title.rendered,
        designation: mentor.acf.designation,
        avatar: imageUrl,
      };
    });

    return NextResponse.json(mapedData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
