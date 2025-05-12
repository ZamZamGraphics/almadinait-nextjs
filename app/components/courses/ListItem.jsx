import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;
library.add(fas);

function ListItem({ title }) {
  return (
    <li className="flex items-start gap-4">
      <FontAwesomeIcon
        icon={["fas", "fa-square-full"]}
        className="w-3 h-3 mt-2 shrink-0 text-lime-500"
      />
      <span>{title}</span>
    </li>
  );
}

export default ListItem;
