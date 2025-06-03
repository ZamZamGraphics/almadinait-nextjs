import { getBlurData } from "@/lib/getBLurData";
import { getSinglePhoto } from '@/lib/data';
import Image from 'next/image'
import Modal from './Modal';

async function GalleryModal({ params: { id } }) {
  const photo = await getSinglePhoto(id);
  const blurDataURL = await getBlurData(photo.imageUrl)
  return (
    <Modal>
      <Image
        src={photo.imageUrl}
        className="transition w-auto max-h-full duration-200 group-hover:scale-110"
        alt={photo.title}
        width={photo.sizes?.full?.width}
        height={photo.sizes?.full?.height}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      <h3 className="absolute bottom-0 w-full px-5 py-3 bg-black/60 text-white text-center">{photo.title}</h3>
    </Modal>
  )
}

export default GalleryModal
