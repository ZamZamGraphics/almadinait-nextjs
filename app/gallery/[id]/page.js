import { getBlurData } from "@/lib/getBLurData";
import { getSinglePhoto } from '@/lib/data';
import Image from 'next/image'

async function GallerySinglePage({ params: { id } }) {
    const photo = await getSinglePhoto(id);
    const blurDataURL = await getBlurData(photo.imageUrl)

    return (
        <div className='container py-28'>
            <div>
                <Image
                    src={photo.imageUrl}
                    className="w-full h-auto rounded-2xl"
                    alt={photo.title}
                    width={photo.sizes?.full?.width}
                    height={photo.sizes?.full?.height}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mt-10">
                    <h3 className="text-4xl font-semibold text-green-700 mb-3">
                        {photo.title}
                    </h3>
                    <div
                        className="py-5"
                        dangerouslySetInnerHTML={{ __html: photo?.content }}
                    />
                </div>
            </div>
        </div>
    )
}

export default GallerySinglePage
