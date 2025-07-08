import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion } from "framer-motion"

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden overflow-y-hidden relative text-black">
            <Header />

            <section className="bg-[#FFDBA2] max-w-4xl w-full mx-auto mt-33 flex flex-wrap justify-center items-center border border-black rounded gap-4 px-4 text-center">
                <img src="/svgs/star_wink.svg" className="w-16 h-16" alt="Winking star" />
                <h2 className="text-3xl md:text-4xl p-1 py-8 transition-all hover:scale-103">Protect your eyes.</h2>
                <h2 className="text-3xl md:text-4xl p-1 py-8 transition-all hover:scale-103">Power your day.</h2>
                <img src="/svgs/star_wink.svg" className="w-16 h-16 rotate-y-180" alt="Winking star mirrored" />
            </section>

            <section className="relative w-full h-[40rem]">
                <img
                    src="/black_glass.png"
                    className="md:h-80 h-50 absolute top-1 -mt-5 left-1/2 -translate-x-1/2 z-10"
                    alt="Black glasses"
                />
                <motion.img
                    src="/yellow_glass.png"
                    className="md:h-80 h-50 absolute top-1 -mt-5 left-1/2 -translate-x-1/2 z-9"
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: 30, opacity:   1, rotate: -5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    alt="Yellow glasses"
                />
                <motion.img
                    src="/blue_glass.png"
                    className="md:h-80 h-50 absolute top-1 -mt-5 left-1/2 -translate-x-1/2 z-8"
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: 60, opacity: 1, rotate: -10 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    alt="Blue glasses"
                />
                <motion.img
                    src="/red_glass.png"
                    className="md:h-80 h-50 absolute top-1 -mt-5 left-1/2 -translate-x-1/2 z-7"
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: 90, opacity: 1, rotate: -15 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    alt="Red glasses"
                />
            </section>

            <Footer />
        </main>
    )
}