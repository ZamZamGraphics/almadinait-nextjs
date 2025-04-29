import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const res = await fetch(`${process.env.API_URL}/batches/${id}?_embed`, {
      cache: "no-store",
    });
    const data = await res.json();

    const featuredMedia = data._embedded["wp:featuredmedia"];
    const imageUrl = featuredMedia?.[0]?.source_url;

    const result = {
      id: data.id,
      thumbnail: imageUrl,
      date: data.date,
      modified: data.modified,
      title: data.title.rendered,
      subTitle: data.acf.sub_title,
      slug: data.slug,
      content: data.content.rendered,
      excerpt: data.excerpt.rendered,
      batchNo: data.acf.batch_number,
      classTime: data.acf.class_time,
      mentor: data.acf.mentor,
      courseFee: data.acf.course_fee,
      discountFee: data.acf.discount_fee,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
