// import { getBlurData } from "@/lib/getBLurData";
import Image from 'next/image'

async function GalleryImage({ imageUrl, width, height }) {
    // const blurDataURL = await getBlurData(imageUrl)
    return (
        <div className="overflow-hidden rounded-2xl group">
            <Image
                src={imageUrl}
                className="w-full transition duration-200 group-hover:scale-110"
                alt=""
                width={width}
                height={height}
                quality={100}
                // placeholder="blur"
            // blurDataURL={blurDataURL}
            />
        </div>
    )
}

export default GalleryImage
