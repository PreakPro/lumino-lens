"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { motion } from "framer-motion"

export default function Microsite() {
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden justify-center items-center overflow-y-hidden relative text-black text-4xl">
            <Header />

            <motion.div 
                className="flex flex-col flex-grow gap-2 mt-50 text-center bg-[#dbffbf] max-w-5xl p-8 px-10 rounded-2xl shadow-black shadow-md border-1"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="mb-5">Select a product to simulate QR feature:</p>
              <Link href="/microsite/LUM-S-069" className="text-blue-600 text-2xl hover:text-blue-700 transition-all hover:scale-105">∘ LUM-S-069</Link>
              <Link href="/microsite/LUM-P-102" className="text-blue-600 text-2xl hover:text-blue-700 transition-all hover:scale-105">∘ LUM-P-102</Link>
              <Link href="/microsite/LUM-E-108" className="text-blue-600 text-2xl hover:text-blue-700 transition-all hover:scale-105">∘ LUM-E-018</Link>
            </motion.div>

            <Footer />
        </main>
    )
}