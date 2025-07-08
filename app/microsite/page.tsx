"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion } from "framer-motion"

export default function Microsite() {
    return (
        <main className="flex flex-col min-h-screen h-full justify-center overflow-x-hidden overflow-y-auto items-center relative">
            <div>
                <img src="/svgs/yellow_blob1.svg" className="md:absolute hidden bottom-10 rotate-180 right-0 -z-1"/>
                <img src="/svgs/red_part.svg" className="absolute rotate-180 left-0 -z-1"/>
                <img src="/svgs/sketched_lines.svg" className="md:absolute hidden rotate-90 bottom-30 right-40 -z-1"/>
                <img src="/svgs/sketched_lines.svg" className="md:absolute hidden top-30 left-10 -z-1"/>
                <img src="/svgs/circle_lines.svg" className="absolute rotate-180 top-20 right-0 -z-1"/>
            </div>

            <Header />

            <motion.div 
                className="flex flex-col flex-grow gap-2 mt-40 text-center bg-[#dbffbf] max-w-5xl p-8 px-10 rounded-2xl shadow-black shadow-md border-1 text-black text-4xl md:scale-100 scale-90"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <p className="mb-5">Select a product to simulate QR feature:</p>

                <a
                    href="/api/certificate/LUM-S-069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-2xl hover:text-blue-700 transition-all hover:scale-105"
                >
                    ∘ LUM-S-069
                </a>

                <a
                    href="/api/certificate/LUM-P-102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-2xl hover:text-blue-700 transition-all hover:scale-105"
                >
                    ∘ LUM-P-102
                </a>

                <a
                    href="/api/certificate/LUM-E-108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-2xl hover:text-blue-700 transition-all hover:scale-105"
                >
                    ∘ LUM-E-108
                </a>
            </motion.div>

            <Footer />
        </main>
    )
}