'use client'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useRouter } from 'next/navigation';

function Modal({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const onDismiss = () => router.back();

    return (
        <Dialog
            open={isOpen}
            onClose={onDismiss}
            className="relative z-10"
        >
            <DialogBackdrop
                className="fixed inset-0 bg-gray-900 backdrop-blur-md"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className='relative w-full h-screen flex items-center justify-center'>
                    <DialogPanel
                        className="absolute top-0 bottom-0 rounded-2xl bg-white shadow-xl overflow-hidden sm:my-8"
                    >
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default Modal
