import Review from "./Review"

function StudentReview() {
  return (
    <div className="student-review">
        <div className="container">
            <div className="row">
                <div className="col-12 md:col-4">
                    <h2 className="text-5xl text-white font-bold mb-6 leading-tight">আমাদের সম্পর্কে স্টুডেন্টদের মতামত</h2>
                    <p>দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার সুবিধামত অনলাইন বা অফলাইনে কোর্সে এনরোল করতে পারবেন যেকোনো সময়।</p>
                </div>
                <div className="col-12 md:col-2"></div>
                <div className="col-12 md:col-6">
                    <Review />
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentReview