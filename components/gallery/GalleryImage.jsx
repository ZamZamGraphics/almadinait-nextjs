'use client'
import { useState } from 'react';
import Image from 'next/image'
import ClientGalleryModal from "./ClientGalleryModal";

function GalleryImage({ photo }) {
    const [isOpen, setIsOpen] = useState(false);
    const imageURL = `${process.env.NEXT_PUBLIC_BASE_URL}${photo.imageUrl}`

    return (
        <>
            <div className="overflow-hidden rounded-2xl group">
                <button onClick={() => setIsOpen(true)}>
                    <Image
                        src={imageURL}
                        className="w-full transition duration-200 group-hover:scale-110"
                        alt=""
                        width={photo.width}
                        height={photo.height}
                        quality={100}
                        placeholder="blur"
                        blurDataURL={photo.blurDataURL}
                    />
                </button>
            </div>
            <ClientGalleryModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                imageUrl={photo.imageUrl}
                width={photo.width}
                height={photo.height}
                blurURL={photo.blurDataURL}
            />
        </>
    )
}

export default GalleryImage
