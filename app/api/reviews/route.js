import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/reviews?_embed&per_page=100`);
    const data = await res.json();

    const mapedData = data.map((revirw) => {
      const featuredMedia = revirw._embedded["wp:featuredmedia"];
      const imageUrl = featuredMedia?.[0]?.source_url;

      return {
        id: 1,
        avatar: null,
        name: "Md Fahim",
        stat: 5,
        opinion: "I wholeheartedly recommend every new student to pursue computer education at Al Madina IT. The training system, practical classes, and skilled instructors here will teach you in such a way that you will not only receive a certificate but also acquire real skills that can be applied in real life. From my own experience, I can say that the training I received has played a crucial role in shaping my career. If anyone wants to learn computer skills effectively, then Al Madina IT is the best choice for you!",
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
