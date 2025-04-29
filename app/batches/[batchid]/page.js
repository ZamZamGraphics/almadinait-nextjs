import { getSingleBatch } from "@/lib/data";
import Image from "next/image";

async function BatchSinglePage({ params }) {
  const { batchid } = params;
  const batch = await getSingleBatch(batchid);

  return (
    <div className="container py-28">
      <div className="row">
        <div className="col-12 md:col-8">
          <h3 className="mb-5 text-5xl text-lime-500 font-bold leading-snug">
            {batch.title}
          </h3>
          <div className="flex gap-3 p-3 mb-5 rounded-md border border-gray-500 bg-gray-100">
            <span>Batch No {batch.batchNo}</span>
            <span>Class Time {batch.classTime}</span>
            <span>Mentor {batch.mentor}</span>
            <span>
              <del>Course Fee {batch.courseFee}</del>
            </span>
            <span>Discount Fee {batch.discountFee}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: batch.content }}
            className="mb-5"
          />
          <div
            dangerouslySetInnerHTML={{ __html: batch.excerpt }}
            className="mb-8 p-6 shadow-md border border-sky-200 text-sky-900 bg-sky-100 rounded-lg"
          />
          <div className="ms-5">
            <ul className="list-disc">
              <li>Microsoft Word</li>
              <li>Microsoft Excel</li>
              <li>Microsoft PowerPoint</li>
              <li>Microsoft Access</li>
              <li>Microsoft Outlook</li>
              <li>Internet & Troubleshooting</li>
              <li>Advanced PDF Customization</li>
            </ul>
          </div>
        </div>
        <div className="col-12 md:col-4">
          <Image
            src={batch.thumbnail}
            width={500}
            height={50}
            alt={batch.title}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default BatchSinglePage;
