import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


export const Nav = () => {
    return(
        <main className="flex justify-between py-4 mb-6">
            <div className="flex items-center gap-6">
                <div className="flex">
                    <img src="/header/logo.png" alt="logo" />
                </div>
                <Link href={"/Dashboard"}>Dashboard</Link>
                <Link href={"/Records"}>Records</Link>
            </div>
            <div className="flex gap-6 items-center text-white">
                <button className="bg-[#0166FF] rounded-2xl w-[99px] h-8 flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-[4px]"/><span>Record</span>
                </button>

                <div>
                    <img src="/header/profile.png" alt="pro" />
                </div>
            </div>
        </main>
    );
}