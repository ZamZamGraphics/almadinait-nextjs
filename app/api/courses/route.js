import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/courses?_embed&per_page=100`);
    const data = await res.json();

    const mapedData = data.map((course) => {
      return {
        id: course.id,
        name: course.name,
        slug: course.slug,
        icon: course.acf.course_icon,
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
