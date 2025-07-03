import { getSinglePhoto } from '@/lib/data';
import ClientGalleryModal from './ClientGalleryModal';
import { getBlurData } from '@/lib/getBLurData';

async function GalleryModal({ params: { id } }) {
  const photo = await getSinglePhoto(id);
  const blurURL = await getBlurData(photo.imageUrl)
  return <ClientGalleryModal photo={photo} blurURL={blurURL} />
}

export default GalleryModal
