import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Button({icon, children}) {
  return (
    <button className="flex justify-center items-center gap-2 py-4 px-8 text-white bg-lime-500 hover:bg-lime-600 rounded-lg shadow-md">
        {icon && <FontAwesomeIcon icon={icon} className="size-4" />}
        {children}
    </button>
  )
}

export default Button