import defaultAvatar from "@/public/images/avatar.png";
import Image from "next/image";

function StudentVerify({ student }) {
  const studentAvatar = `${process.env.imagePath}${student.avatar}`;
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-10 p-5 md:p-10 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-5">
        <div className="flex basis-2/5 justify-center mt-[-90px] md:mt-[-120px]">
          <div className="size-36 md:size-40 overflow-hidden circle-photo">
            <Image
              className="rotate-45 w-full"
              src={student.avatar ? studentAvatar : defaultAvatar}
              alt="Student Name"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="flex basis-3/5 flex-col items-start">
          <h3 className="text-xl md:text-2xl uppercase font-bold text-gray-900">
            {student.name}
          </h3>
          <h4 className="text-xl md:text-2xl font-medium text-gray-900">
            Student ID : {student.id}
          </h4>
          <hr className="w-28 border-b-4 border-lime-500" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="flex basis-2/5 flex-col justify-center items-center gap-1">
          <p className="text-base">Course Status</p>
          <p className="py-1 px-8 bg-green-700 text-white text-base md:text-xl font-medium uppercase rounded-full">
            {student.status}
          </p>
          <p className="text-lg md:text-xl text-gray-900">
            Batch : {student.batch}
          </p>
        </div>
        <div className="flex basis-3/5 flex-col items-start gap-1 text-base md:text-xl text-gray-900">
          <p>Fathers Name : {student.fathersName}</p>
          <p>Mothers Name : {student.mothersName}</p>
          <p>Address : {student.address}</p>
          <p>Mobile : {student.mobile}</p>
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-lg md:text-2xl text-green-600 font-bold">
          Course Name : {student.courseName}
        </h4>
        <hr className="m-1" />
        <p className="text-base md:text-xl text-gray-900">
          Course Duration : {student.duration}
        </p>
      </div>
    </div>
  );
}

export default StudentVerify;
