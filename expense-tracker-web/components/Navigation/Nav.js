"use client"

import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export const Nav = () => {
    const router = useRouter();
    return(
        <main className="flex justify-between py-4 mb-6">
            <div className="flex items-center gap-6">
                <div className="flex">
                    <a href="/">
                        <img src="/header/logo.png" alt="logo" />
                    </a>
                </div>
                <Link href={"/Dashboard"}>Dashboardd</Link>
                <Link href={"/Records"}>Recordss</Link>
            </div>
            <div className="flex gap-6 items-center text-white">
                <button 
                    className="bg-[#0166FF] rounded-2xl w-[99px] h-8 flex items-center justify-center" 
                    onClick={() => router.push(`?create=new`)}>
                    <Plus className="w-4 h-4 mr-[4px]"/><span>Record</span>
                </button>

                <div>
                    <img src="/header/profile.png" alt="pro" />
                </div>
            </div>
        </main>
    );
}