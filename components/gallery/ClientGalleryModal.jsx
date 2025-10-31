'use client'
import bgBlur from "@/public/bg-blur.jpg"
import NextImage from 'next/image'
import Modal from './Modal';
import { useEffect, useState } from 'react';

function ClientGalleryModal({ isOpen, setIsOpen, imageUrl, width, height, blurURL }) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const img = new window.Image()
        img.src = imageUrl
        img.onload = () => setLoading(true)
    }, [imageUrl])

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
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
                        src={imageUrl}
                        className="w-auto max-h-full"
                        alt=""
                        width={width}
                        height={height}
                        quality={100}
                        placeholder="blur"
                        blurDataURL={blurURL}
                        priority
                    />
                </>
            )}
        </Modal>
    )
}

export default ClientGalleryModal
