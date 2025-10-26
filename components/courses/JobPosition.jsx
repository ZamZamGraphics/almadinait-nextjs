import ListItem from "./ListItem"

function JobPosition({ jobPosition }) {
    return (
        <div className="mb-8 bg-gray-50 border border-gray200 shadow rounded-3xl">
            <h3 className="text-3xl pt-2 text-center rounded-t-3xl mb-3 bg-green-700 text-white leading-snug">
                এই কোর্স শেষে আপনি যে সকল পজিশনে{" "}
                <span className="font-semibold">জব করতে পারবেন</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 py-5 px-8">
                {jobPosition.map((position) => (
                    <ListItem key={position} title={position} />
                ))}
            </ul>
        </div>
    )
}

export default JobPosition
