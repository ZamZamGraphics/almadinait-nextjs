'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

function Modal({ children, isOpen, setIsOpen }) {

    const closeModal = () => setIsOpen(false);

    return (
        <Dialog
            as='div'
            open={isOpen}
            onClose={closeModal}
            transition
            className="relative z-10"
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300 ease-out data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className='relative w-full h-screen flex items-center justify-center'>
                    <DialogPanel
                        transition
                        className="absolute top-0 bottom-0 rounded-2xl bg-white shadow-xl overflow-hidden sm:my-8 transition duration-300 ease-out data-[closed]:opacity-0 data-[closed]:scale-95"
                    >
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default Modal
