import Image from 'next/image'

function Teacher({ name, title, avatar }) {
  return (
    <div className="m-2 sm:m-5">
      <div className="flex flex-col items-center gap-2 bg-white rounded-2xl border border-gray-200 hover:bg-green-50 hover:cursor-pointer transition-all ease-in-out delay-75 duration-200">
        <div className='px-10'>
          <Image
            src={avatar}
            className="rounded-b-full border border-gray-200"
            alt="Teacher Photo"
            width={500}
            height={0}
            quality={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h4 className="text-lg lg:text-2xl font-semibold text-gray-900">{name}</h4>
          <p className="mb-4 text-sm text-green-700">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Teacher