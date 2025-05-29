import { getBlurData } from "@/lib/getBLurData";
import Image from 'next/image'
import Link from "next/link";

async function GalleryImage({ imageUrl, title, width, height }) {
    const blurDataURL = await getBlurData(imageUrl)
    return (
        <div className="overflow-hidden rounded-2xl group">
            <Link href="#">
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
