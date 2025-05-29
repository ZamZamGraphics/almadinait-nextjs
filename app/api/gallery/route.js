import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(
            `${process.env.API_URL}/gallery?_embed&per_page=100`,
            {
                cache: "no-store",
            }
        );
        const data = await res.json();

        const mapedData = data.map((photo) => {
            const featuredMedia = photo._embedded["wp:featuredmedia"];
            const imageUrl = featuredMedia?.[0]?.source_url;
            const mediaDetails = featuredMedia?.[0]?.media_details;

            return {
                id: photo.id,
                title: photo.title.rendered,
                content: photo.content.rendered,
                imageUrl: imageUrl,
                sizes: mediaDetails.sizes,
            };
        });

        return NextResponse.json(mapedData, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
