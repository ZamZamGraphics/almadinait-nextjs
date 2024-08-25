"use client"
import avatar from "@/public/images/avatar.jpg"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import "./styles.css"

function Review() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="slide flex flex-col p-8 items-center justify-center gap-6 rounded-2xl">
            <p className='text-2xl italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores, blanditiis culpa esse aut, voluptas, quo vitae odio labore officiis hic? Ipsam dignissimos rerum ducimus ad voluptates qui necessitatibus voluptatibus.</p>
            <div className='flex items-center self-stretch gap-4'>
                <div className='flex items-center size-12 rounded-full overflow-hidden'>
                    <Image className="" src={avatar} alt='Avatar Text' />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch gap-0">
                    <h5 className='text-xl font-bold text-white'>Student Name</h5>
                    <div className='flex items-center self-stretch gap-3 text-base'>
                        <span>Graphics Design</span>
                        <span>Batch 320</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide flex flex-col p-8 items-center justify-center gap-6 rounded-2xl">
            <p className='text-2xl italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores, blanditiis culpa esse aut, voluptas, quo vitae odio labore officiis hic? Ipsam dignissimos rerum ducimus ad voluptates qui necessitatibus voluptatibus.</p>
            <div className='flex items-center self-stretch gap-4'>
                <div className='flex items-center size-12 rounded-full overflow-hidden'>
                    <Image className="" src={avatar} alt='Avatar Text' />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch gap-0">
                    <h5 className='text-xl font-bold text-white'>Student Name</h5>
                    <div className='flex items-center self-stretch gap-3 text-base'>
                        <span>Graphics Design</span>
                        <span>Batch 320</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide flex flex-col p-8 items-center justify-center gap-6 rounded-2xl">
            <p className='text-2xl italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores, blanditiis culpa esse aut, voluptas, quo vitae odio labore officiis hic? Ipsam dignissimos rerum ducimus ad voluptates qui necessitatibus voluptatibus.</p>
            <div className='flex items-center self-stretch gap-4'>
                <div className='flex items-center size-12 rounded-full overflow-hidden'>
                    <Image className="" src={avatar} alt='Avatar Text' />
                </div>
                <div className="flex flex-col items-start justify-center self-stretch gap-0">
                    <h5 className='text-xl font-bold text-white'>Student Name</h5>
                    <div className='flex items-center self-stretch gap-3 text-base'>
                        <span>Graphics Design</span>
                        <span>Batch 320</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review