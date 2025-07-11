"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion } from "framer-motion"
import Card from "@/components/ui/card";
import BackgroundDesign from "@/components/backgroundDesign";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden overflow-y-hidden relative text-black">
            <BackgroundDesign />
            <Header />

            <section className="bg-[#FFDBA2] max-w-4xl w-full mx-auto mt-33 flex flex-wrap justify-center items-center border md:gap-3 border-black rounded px-4 text-center scale-90 md:scale-100">
                <img src="/svgs/star_wink.svg" className="w-16 h-16" alt="Winking star" />
                <h2 className="text-3xl md:text-4xl p-1 md:py-8 pt-4 pb-2 transition-all hover:scale-103">Protect your eyes.</h2>
                <h2 className="text-3xl md:text-4xl p-1 md:py-8 pt-4 -mt-3 md:-mt-0 pb-2 transition-all hover:scale-103">Power your day.</h2>
                <img src="/svgs/star_wink.svg" className="w-16 h-16 rotate-y-180" alt="Winking star mirrored" />
            </section>

            <section className="relative w-full md:mt-0 md:mb-0 mt-10 -mb-15 h-[40rem]">
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

            <motion.section 
                className="bg-[#BFD086] relative rounded-4xl text-base md:text-xl px-6 py-10 pl-15 shadow-neutral-600 shadow-md max-w-5xl mx-auto -mt-60 md:grid md:grid-cols-2 gap-y-4 md:gap-y-5 gap-x-5 items-start md:scale-100 scale-90"
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
            >
                <div className="flex gap-3 items-start">
                    <img src="/svgs/pin.svg" className="w-15 h-15 absolute top-0 left-0 shrink-0" alt="Pin icon" />
                    <p className="px-7 mt-3 text-red-800">Staring at a screen for 8+ hours?<br />You’re not alone.</p>
                </div>
                <p className="text-green-900 mt-4 md:mt-0">
                    LuminoLens filters blue light,<br />
                    reduces eye strain,<br />
                    and keeps your focus sharp.
                </p>

                <div className="flex items-center gap-2 md:mt-3 mt-5 ml-40">
                    <p className="text-red-800 md:-ml-0 -ml-40">Headaches?</p>
                    <img src="/svgs/thin_arrow_curved.svg" className="w-20 h-auto" alt="Curved arrow" />
                </div>
                <p className="md:mt-9 -mt-6 text-green-900 md:ml-0 ml-33">Not anymore.</p>

                <div className="flex items-center gap-2 ml-40">
                    <p className="text-red-800 md:ml-0 -ml-30">Eye strain?</p>
                    <img src="/svgs/thick_straight_arrow.svg" className="w-25 h-auto" alt="Straight arrow" />
                </div>
                <div className="flex items-center gap-2">
                    <p className="md:mt-8 -mt-4 md:ml-0 ml-40 text-green-900 z-2">Filter it out.</p>
                    <img src="/svgs/twinkle.svg" className="w-10 h-auto absolute right-1/7 md:bottom-1/4 bottom-1/2" alt="Twinkle effect" />
                </div>

                <img src="/svgs/leaf_outline.svg" alt="" className="absolute md:top-1/4 top-40 md:-left-7 -left-12 md:scale-70 scale-50 z-1"/>
                <img src="/svgs/leaf.svg" alt="" className="absolute md:top-1/4 top-40 mt-8 md:mt-10 md:-left-8 -left-13 md:scale-70 scale-50 z-1"/>
            </motion.section>

            <section className="flex flex-wrap flex-grow justify-center mt-15 gap-8 max-w-4xl w-full mx-auto">
                <Card 
                    svgPath="/svgs/tick_mark.svg" 
                    direction="left"
                    className="max-w-200"
                >
                    <p className="text-center">Spectometer certified.</p>
                </Card>
                <Card 
                    svgPath="/svgs/smiley.svg" 
                    delay={0.3} 
                    direction="right"
                >
                    <p className="text-center">Daily eye care tips.</p>
                </Card>
                <Card 
                    svgPath="/svgs/spectacle_and_book.svg"
                    delay={0.5}
                    direction="left"
                >
                    <p className="text-center">Lightweight, minimalist frames.</p>
                </Card>
                <Card 
                    svgPath="/svgs/dollar.svg"
                    delay={0.8}
                    direction="right"
                >
                    <p className="text-center">Affordable prices.</p>
                </Card>
            </section>

            <section className="block z-5">
                <motion.div 
                    className="text-3xl text-left ml-5 md:ml-20 lg:ml-40"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-5xl mr-80 mt-20 mb-8">With each spectacle, get:</h2>
                    <p className="ml-10">1. Eye exercises.</p>
                    <p className="ml-10">2. Research.</p>
                    <p className="ml-10 mb-30">3. Product reports.</p>
                </motion.div>

                <motion.div 
                    className="text-3xl text-left md:pb-10 pl-5 md:pl-100 lg:pl-160"
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                <h2 className="text-5xl">In the future:</h2>
                <p className="z-10 ml-10 mt-6">1. UV Protection.</p>
                <p className="z-10 ml-10">2. School collaborations.</p>
                <p className="z-10 ml-10">3. AR/VR Ready.</p>
                </motion.div>
            </section>

            <Footer />
        </main>
    )
}