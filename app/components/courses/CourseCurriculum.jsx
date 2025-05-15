import ListItem from './ListItem'

function CourseCurriculum({ courseCurriculum }) {
    return (
        <div className="py-5 px-8 mb-8 bg-gray-50 border border-gray-200 shadow rounded-3xl">
            <h3 className="text-4xl font-semibold mb-3 text-black leading-snug">
                কোর্স কারিকুলাম
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {courseCurriculum.map((curriculum) => (
                    <ListItem key={curriculum} title={curriculum} />
                ))}
            </ul>
        </div>
    )
}

export default CourseCurriculum
