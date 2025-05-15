import Image from 'next/image'

function Review({ review }) {
    return (
        <div className="slide review-slide flex flex-col p-8 items-center justify-center gap-6 rounded-2xl">
            <p className='text-base'>{review.opinion}</p>
            <div className='flex items-center self-stretch gap-4'>
                <div className='flex items-center size-12 rounded-full overflow-hidden'>
                    <Image
                        className=""
                        src={review.avatar}
                        alt={review.name}
                        width={100}
                        height={100}
                        quality={100}
                    />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch gap-0">
                    <h5 className='text-xl font-semibold text-white'>{review.name}</h5>
                    <div className='flex items-center self-stretch gap-3 text-sm'>
                        <span>{review.courseName}</span>
                        <span>Batch {review.batchNo}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review