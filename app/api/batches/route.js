import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/batches?_embed&per_page=100`);
    const data = await res.json();

    const mapedData = data.map((batch) => {
      const featuredMedia = batch._embedded["wp:featuredmedia"];
      const imageUrl = featuredMedia?.[0]?.source_url;

      return {
        id: batch.id,
        thumbnail: imageUrl,
        date: batch.date,
        modified: batch.modified,
        title: batch.title.rendered,
        subTitle: batch.acf.sub_title,
        slug: batch.slug,
        content: batch.content.rendered,
        excerpt: batch.excerpt.rendered,
        batchNo: batch.acf.batch_number,
        classTime: batch.acf.class_time,
        mentor: batch.acf.mentor,
        courseFee: batch.acf.course_fee_offline,
        discountFee: batch.acf.discount_fee,
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
