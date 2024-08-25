import { batches } from "@/data/data"
import Batch from "./Batch"

function NewBatches() {
  return (
    <div className='container my-32'>
        <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">নতুন <span className="text-lime-500">ব্যাচ</span> শুরু</h2>
        <div className="row">
        {batches.map(batch => (
            <Batch key={batch.id} batch={batch} />
        ))}
        </div>
    </div>
  )
}

export default NewBatches