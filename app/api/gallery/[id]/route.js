import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const res = await fetch(`${process.env.API_URL}/gallery/${id}?_embed`, {
            cache: "no-store",
        });
        const data = await res.json();

        const featuredMedia = data._embedded["wp:featuredmedia"];
        const imageUrl = featuredMedia?.[0]?.source_url;
        const mediaDetails = featuredMedia?.[0]?.media_details;

        const terms = data._embedded?.["wp:term"] || [];
        const category = terms.find((t) => t[0]?.taxonomy === "category") || [];

        const result = {
            id: data.id,
            title: data.title.rendered,
            content: data.content.rendered,
            category: category[0]?.name,
            imageUrl: imageUrl,
            sizes: mediaDetails.sizes,
        };

        return NextResponse.json(result, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
