function CourseDuration({ courseDuration, totalClass, practicalWork }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
            <div className="flex flex-col items-center justify-center bg-lime-500 text-white p-2 md:p-3 rounded-xl">
                <span className="text-xl">কোর্সের মেয়াদ</span>
                <span className="text-3xl md:text-4xl font-bold">
                    {courseDuration}
                </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-lime-500 text-white p-2 md:p-3 rounded-xl">
                <span className="text-xl">মোট ক্লাস</span>
                <span className="text-3xl md:text-4xl font-bold">
                    {totalClass}
                </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-lime-500 text-white p-2 md:p-3 rounded-xl">
                <span className="text-xl">প্যাক্টিকেল কাজ</span>
                <span className="text-3xl md:text-4xl font-bold">
                    {practicalWork}
                </span>
            </div>
        </div>
    )
}

export default CourseDuration
