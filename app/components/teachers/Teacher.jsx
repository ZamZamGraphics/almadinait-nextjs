import Image from 'next/image'

function Teacher({name, title, avatar}) {
  return (
    <div className="m-2 sm:m-5">
        <div className="flex flex-col items-center gap-2 md:gap-4 bg-white shadow-md rounded-xl transition-all ease-in-out hover:scale-105 hover:cursor-pointer">
            <Image 
                src={avatar} 
                className="rounded-t-xl"
                alt="Teacher Photo" 
                width={500}
                height={0}
                quality={100}
            />
            <div className="flex flex-col items-center justify-center gap-1">
                <h4 className="text-lg lg:text-2xl font-semibold text-gray-900">{name}</h4>
                <p className="mb-4">{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Teacher