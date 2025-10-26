import Image from "next/image";

function Software({ name, icon }) {
  return (
    <li className="flex items-center gap-5 mb-4">
      <Image src={icon} alt={name} width={40} height={40} />
      <span className="text-black text-2xl font-bold">{name}</span>
    </li>
  );
}

export default Software;
