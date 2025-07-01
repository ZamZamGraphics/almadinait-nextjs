import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(`${process.env.API_URL}/gallery?_embed&per_page=100`);
        const data = await res.json();

        if (data.length > 0) {
            const mapedData = data.map((photo) => {
                const featuredMedia = photo._embedded["wp:featuredmedia"];
                const imageUrl = featuredMedia?.[0]?.source_url;
                const mediaDetails = featuredMedia?.[0]?.media_details;

                const terms = photo._embedded?.["wp:term"] || [];
                const category = terms.find((t) => t[0]?.taxonomy === "category") || [];

                return {
                    id: photo.id,
                    title: photo.title.rendered,
                    category: category[0]?.name,
                    imageUrl: imageUrl,
                    sizes: mediaDetails.sizes?.medium_large,
                };
            });
            return NextResponse.json(mapedData, { status: 200 });
        }
        return NextResponse.json([], { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
