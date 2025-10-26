'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ path, title }) {
    const pathname = usePathname();
    const active = pathname === path ? "text-lime-500 font-bold" : ""
    return (
        <li className={active}>
            <Link href={path}>{title}</Link>
        </li>
    )
}

export default NavLink
