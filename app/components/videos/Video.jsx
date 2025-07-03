'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'

function Video({ video }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);

    return (
        <>
            <div className='col-12 md:col-6 mb-10' key={video.id}>
                <button
                    className='rounded-2xl overflow-hidden'
                    onClick={open}
                >
                    <Image
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        width={720}
                        height={400}
                    />
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
