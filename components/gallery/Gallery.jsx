'use client';

import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';
import 'photoswipe/dist/photoswipe.css';
import imagesData from '@/lib/gallery-images.json';
import { useState } from 'react';

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 4;

export default function ImageGallery() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [prevCount, setPrevCount] = useState(INITIAL_COUNT);

    const visibleImages = imagesData.slice(0, visibleCount);
    const hasMore = visibleCount < imagesData.length;

    const handleSeeMore = () => {
        setPrevCount(visibleCount);
        setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
    };

    return (
        <div className="container">
            <h2 className="mb-14 text-2xl md:text-4xl text-gray-900 font-bold leading-snug text-center">
                অফিস এবং প্রশিক্ষণের <span className="text-lime-500">স্থান</span>
            </h2>
            <div className="row">
                <Gallery
                    options={{
                        wheelToZoom: true,
                        arrowPrev: true,
                        arrowNext: true,
                        loop: true,
                    }}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {visibleImages.map((img, index) => {
                            const isNew = index >= prevCount;
                            return (
                                <Item
                                    key={index}
                                    original={img.src}
                                    width={img.width}
                                    height={img.height}
                                    alt={img.alt}
                                >
                                    {({ ref, open }) => (
                                        <div
                                            ref={ref}
                                            onClick={open}
                                            className="relative aspect-video overflow-hidden rounded-lg cursor-pointer animate-fade-in"
                                            style={
                                                isNew
                                                    ? { animationDelay: `${(index - prevCount) * 100}ms` }
                                                    : { animation: 'none' }
                                            }
                                        >
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                </Item>
                            );
                        })}
                    </div>
                </Gallery>

                {hasMore && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleSeeMore}
                            className="px-6 py-2 rounded-full text-white bg-lime-500 hover:bg-lime-600 transition-colors"
                        >
                            See More
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
