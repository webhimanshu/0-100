"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const pathName  = usePathname();
    const searchParams = useSearchParams()
    console.log("🚀 ~ Home ~ searchParams:", searchParams)
    console.log("🚀 ~ Home ~ pathName:", pathName)
    return(
        <div className="">
             <Link href='/shop' replace>To SHop</Link>
        </div>
    )
}