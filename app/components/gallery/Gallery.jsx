import { getAllGalleries } from "@/lib/data"
import NoDataFound from "../NoDataFound";
import GalleryImage from "./GalleryImage";

async function Gallery() {
    const allGalleries = await getAllGalleries();
    const specialGalleries = allGalleries.filter((gallery) => gallery.category === "Special")
    const galleries = allGalleries.filter((gallery) => gallery.category !== "Special")

    return (
        <div className="container">
            <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">
                অফিস এবং প্রশিক্ষণের <span className="text-lime-500">স্থান</span>
            </h2>
            <div className="row">
                <div className="col">
                    {specialGalleries.length > 0 && (
                        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                            {specialGalleries.map((photo) => (
                                <GalleryImage
                                    key={photo.id}
                                    id={photo.id}
                                    imageUrl={photo.imageUrl}
                                    title={photo.title}
                                    width={photo.sizes?.medium_large?.width}
                                    height={photo.sizes?.medium_large?.height}
                                />
                            ))}
                        </div>
                    )}
                    <div className="columns-1 sm:columns-2 md:columns-3 mt-5 gap-4 space-y-4">
                        {galleries.length > 0 ? (
                            galleries.map((photo) => (
                                <GalleryImage
                                    key={photo.id}
                                    id={photo.id}
                                    imageUrl={photo.imageUrl}
                                    title={photo.title}
                                    width={photo.sizes?.medium_large?.width}
                                    height={photo.sizes?.medium_large?.height}
                                />
                            ))
                        ) : (
                            <NoDataFound>{galleries?.error || "No Data Found"}</NoDataFound>
                        )

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery