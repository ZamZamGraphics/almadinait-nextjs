'use client'
import bgBlur from "@/public/bg-blur.jpg"
import NextImage from 'next/image'
import Modal from './Modal';
import { useEffect, useState } from 'react';

function ClientGalleryModal({ photo, blurURL }) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const img = new window.Image()
        img.src = photo.imageUrl
        img.onload = () => setLoading(true)
    }, [photo.imageUrl])

    return (
        <Modal>
            {!isLoading ? (
                <NextImage
                    src={bgBlur}
                    className="w-auto max-h-full animate-pulse"
                    alt="Loading..."
                    width={1920}
                    height={1080}
                />
            ) : (
                <>
                    <NextImage
                        src={photo.imageUrl}
                        className="w-auto max-h-full"
                        alt={photo.title}
                        width={photo.sizes?.full?.width}
                        height={photo.sizes?.full?.height}
                        placeholder="blur"
                        blurDataURL={blurURL}
                        priority
                    />
                    <h3 className="absolute bottom-0 w-full px-5 py-3 bg-black/60 text-white text-center">{photo.title}</h3>
                </>
            )}
        </Modal>
    )
}

export default ClientGalleryModal
