import { getAllBatches } from "@/lib/data";
import NoDataFound from "../NoDataFound";
import Batch from "./Batch";

async function NewBatches() {
  const batches = await getAllBatches();
  return (
    <div className="container my-32">
      <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">
        নতুন <span className="text-lime-500">ব্যাচ</span> শুরু
      </h2>
      <div className="row">
        {batches.length > 0 ? (
          batches.map((batch) => <Batch key={batch.id} batch={batch} />)
        ) : (
          <NoDataFound>{batches?.error || "No Data Found"}</NoDataFound>
        )}
      </div>
    </div>
  );
}

export default NewBatches;
