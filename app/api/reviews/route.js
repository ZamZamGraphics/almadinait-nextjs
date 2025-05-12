import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/reviews?_embed&per_page=100`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    const mapedData = data.map((revirw) => {
      const featuredMedia = revirw._embedded["wp:featuredmedia"];
      const imageUrl = featuredMedia?.[0]?.source_url;

      return {
        id: revirw.id,
        opinion: revirw.excerpt.rendered,
        avatar: imageUrl,
        name: revirw.title.rendered,
        courseName: revirw.acf.course_name,
        batchNo: revirw.acf.batch_number,
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
