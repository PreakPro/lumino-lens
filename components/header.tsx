"use client"
import Link from "next/link";
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <div className="w-screen fixed z-50 h-22 flex items-center left-1/2 -translate-x-1/2 top-0 bg-[#A4BCD2] shadow-neutral-700 shadow-sm">
            <img src="/logo_rect.png" className="w-20 mb-2 ml-8 mr-4"/>
            <h1 className="text-black font-semibold text-3xl items-center flex mb-1">LuminoLens</h1>

            <div className="ml-auto hidden select-none md:flex flex-row items-center">
                <Link href="/" className="p-2 transition-all text-black text-lg hover:text-neutral-700 active:text-neutral-800">Home</Link>

                <Link href="/pricing/" className="p-8 transition-all text-black text-lg hover:text-neutral-700 active:text-neutral-800">Pricing</Link>

                <Link href="/microsite/" className="pr-8 transition-all text-black text-lg hover:text-neutral-700 active:text-neutral-800">Sample microsite</Link>
            </div>

            <button
                className="ml-auto md:hidden focus:outline-none mr-5 text-black"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(prev => !prev)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isMenuOpen && 
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-full bg-[#A4BCD2] shadow-md flex flex-col items-center py-4 space-y-2 md:hidden z-30">
                    <Link href="/" className="text-black text-lg hover:text-neutral-700 border-b-1" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/pricing/" className="text-black text-lg hover:text-neutral-700 border-b-1" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <Link href="/microsite/" className="text-black text-lg hover:text-neutral-700 border-b-1" onClick={() => setIsMenuOpen(false)}>Sample microsite</Link>
                </div>
            }
        </div>
    )
}