import { getSinglePhoto } from '@/lib/data';
import Image from 'next/image'
import Modal from './Modal';

async function GalleryModal({ params: { id } }) {
  const photo = await getSinglePhoto(id);
  return (
    <Modal>
      <Image
        src={photo.imageUrl}
        className="w-auto max-h-full"
        alt={photo.title}
        width={photo.sizes?.full?.width}
        height={photo.sizes?.full?.height}
        priority
      />
      <h3 className="absolute bottom-0 w-full px-5 py-3 bg-black/60 text-white text-center">{photo.title}</h3>
    </Modal>
  )
}

export default GalleryModal
