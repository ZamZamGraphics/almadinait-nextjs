import bgBlur from "@/public/bg-blur.jpg"
import Image from 'next/image'
import Modal from './Modal';

function loading() {
    return (
        <Modal>
            <Image
                src={bgBlur}
                className="w-auto max-h-full blur-2xl"
                alt="Loading..."
                width={1920}
                height={1080}
                placeholder="blur"
            />
        </Modal>
    )
}

export default loading
