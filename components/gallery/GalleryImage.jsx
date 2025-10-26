import { getBlurData } from "@/lib/getBLurData";
import Image from 'next/image'
import Link from "next/link";

async function GalleryImage({ id, imageUrl, title, width, height }) {
    const blurDataURL = await getBlurData(imageUrl)
    return (
        <div className="overflow-hidden rounded-2xl group">
            <Link href={`/gallery/${id}`}>
                <Image
                    src={imageUrl}
                    className="w-full transition duration-200 group-hover:scale-110"
                    alt={title}
                    width={width}
                    height={height}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
            </Link>
        </div>
    )
}

export default GalleryImage
