import defaultAvatar from "@/public/images/avatar.png";
import { getBlurData } from "@/lib/getBLurData";
import Image from "next/image";

async function Teacher({ name, title, avatar }) {
  const avatarUrl = `${process.env.API_URL}/upload/${avatar}`
  let blurProps = {}

  if (avatar) {
    const blurDataURL = await getBlurData(avatarUrl)
    blurProps = { placeholder: "blur", blurDataURL }
  }

  return (
    <div className="flex flex-col items-center gap-2 bg-white rounded-2xl border border-gray-200 hover:bg-green-50 hover:cursor-pointer transition-all ease-in-out delay-75 duration-200">
      <div className="px-10">
        <Image
          src={avatar ? avatarUrl : defaultAvatar}
          className="rounded-b-full border border-gray-200"
          alt="Teacher Photo"
          width={250}
          height={250}
          quality={100}
          {...blurProps}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h4 className="text-lg lg:text-2xl font-semibold text-gray-900">
          {name}
        </h4>
        <p className="mb-4 text-sm text-green-700">{title}</p>
      </div>
    </div>
  );
}

export default Teacher;
