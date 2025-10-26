'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function VerifyButton() {
    const pathname = usePathname();
    const active = pathname === '/verify' ? "bg-lime-600 font-bold" : "bg-lime-500 font-medium"
    return (
        <div className={`flex justify-center items-center text-white  hover:bg-lime-600 rounded-xl shadow-md ${active}`}>
            <Link href="/verify" className="py-3 px-6">
                Verify Student
            </Link>
        </div>
    )
}

export default VerifyButton
