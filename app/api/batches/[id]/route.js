import { getImageByID } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const res = await fetch(`${process.env.API_URL}/batches/${id}?_embed`);
    const data = await res.json();

    const featuredMedia = data._embedded["wp:featuredmedia"];
    const imageUrl = featuredMedia?.[0]?.source_url;

    const terms = data._embedded?.["wp:term"] || [];
    const software = terms.find((t) => t[0]?.taxonomy === "software") || [];

    const mapedSoftware = await Promise.all(
      software.map(async (soft) => {
        const icon = await getImageByID(soft.acf.software_icon);
        return {
          id: soft.id,
          name: soft.name,
          icon: icon,
        };
      })
    );

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
      courseFeeOffline: data.acf.course_fee_offline,
      courseFeeOnline: data.acf.course_fee_online,
      discountFee: data.acf.discount_fee,
      courseCurriculum: data.acf.course_curriculum,
      courseDuration: data.acf.course_duration,
      totalClass: data.acf.total_class,
      practicalWork: data.acf.practical_work,
      software: mapedSoftware,
      jobPosition: data.acf.job_position,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
