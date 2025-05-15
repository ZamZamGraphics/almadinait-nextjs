import Software from "./Software"

function Softwares({ softwareList }) {
    return (
        <div className="mb-8 bg-lime-50 border border-lime-300 shadow rounded-3xl">
            <h3 className="text-3xl py-1 text-center rounded-t-3xl font-semibold mb-3 bg-lime-500 text-white leading-snug">
                সফটওয়্যার/টুলস
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 py-5 px-8">
                {softwareList.map((soft) => (
                    <Software key={soft.id} name={soft.name} icon={soft.icon} />
                ))}
            </ul>
        </div>
    )
}

export default Softwares
