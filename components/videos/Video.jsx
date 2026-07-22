'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import { useState } from 'react'

function Video({ video }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);

    return (
        <>
            <div className='flex items-center justify-center'>
                <button
                    className='relative rounded-2xl overflow-hidden'
                    onClick={open}
                >
                    <Image
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        width={720}
                        height={400}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-12 w-12 bg-lime-600 items-center justify-center">
                            <FontAwesomeIcon
                                icon={faPlay}
                                className='text-white'
                            />
                        </span>
                    </div>
                </button>
            </div>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <DialogBackdrop
                    className="fixed inset-0 bg-gray-900/50 backdrop-blur-md"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="relative w-full h-screen flex items-center justify-center">
                        <DialogPanel
                            transition
                            className="absolute rounded-2xl bg-white shadow-xl overflow-hidden sm:my-8 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <iframe
                                width="1236"
                                height="695"
                                src={`https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1`}
                                allow="autoplay"
                            >
                            </iframe>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Video
