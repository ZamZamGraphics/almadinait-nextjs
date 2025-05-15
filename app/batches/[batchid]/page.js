import CourseCurriculum from "@/app/components/courses/CourseCurriculum";
import CourseDuration from "@/app/components/courses/CourseDuration";
import CourseFee from "@/app/components/courses/CourseFee";
import JobPosition from "@/app/components/courses/JobPosition";
import Softwares from "@/app/components/courses/Softwares";
import { getSingleBatch } from "@/lib/data";
import Image from "next/image";

async function BatchSinglePage({ params }) {
  const { batchid } = params;
  const batch = await getSingleBatch(batchid);
  const courseCurriculum = batch.courseCurriculum.split(/\r?\n/);
  const jobPosition = batch.jobPosition.split(/\r?\n/);

  return (
    <div className="container py-28">
      <div className="row">
        <div className="col-12 md:col-5">
          <h3 className="text-3xl text-black leading-snug">{batch.subTitle}</h3>
          <h3 className="mb-5 text-5xl text-black font-bold leading-snug">
            {batch.title}
          </h3>
          <CourseDuration
            courseDuration={batch.courseDuration}
            totalClass={batch.totalClass}
            practicalWork={batch.practicalWork}
          />
          <p className="mb-5">{batch.excerpt}</p>
        </div>
        <div className="col-12 md:col-7 mb-10">
          <Image
            src={batch.thumbnail}
            width={800}
            height={300}
            alt={batch.title}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 md:col-7">
          <CourseCurriculum courseCurriculum={courseCurriculum} />
          <Softwares softwareList={batch.software} />
          <JobPosition jobPosition={jobPosition} />
        </div>
        <div className="col-12 md:col-5">
          <CourseFee
            offline={batch.courseFeeOffline}
            online={batch.courseFeeOnline}
          />
        </div>
      </div>
    </div>
  );
}

export default BatchSinglePage;
