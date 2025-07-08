"use client"

import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden overflow-y-hidden relative text-black">
            <div>
                <img src="/svgs/red_part.svg" className="md:absolute hidden rotate-270 rotate-x-180 left-1/9 md:-top-21 lg:-top-20 -z-1 md:scale-80 lg:scale-100"/>
                <img src="/svgs/circle_lines.svg" className="md:absolute hidden rotate-45 left-0 -z-1"/>
                <img src="/svgs/yellow_blob1.svg" className="absolute rotate-90 right-0 -z-1"/>
                <img src="/svgs/sketched_lines.svg" className="absolute rotate-180 right-5 lg:top-30 -z-1"/>
                <img src="/svgs/yellow_blob2.svg" className="absolute -rotate-90 rotate-y-180 -bottom-7 -z-1"/>
            </div>

            <Header />

            <div className="flex-grow">
                <section className="grid md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto mt-40">
                    <motion.div 
                        className="border rounded-xl p-6 shadow-lg bg-[#F7FFE0] md:scale-100 scale-90"
                        initial={{ y: -100, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl font-bold mb-2 text-black">Student Lens</h2>
                        <p className="text-xl text-green-700 font-semibold">₹399</p>
                        <ul className="mt-4 list-disc list-inside text-left text-black">
                            <li>Certified blue light filter</li>
                            <li>Microsite access</li>
                            <li>Eye care guide</li>
                        </ul>
                    </motion.div>
                    
                    <motion.div
                        className="border rounded-xl p-6 shadow-lg bg-[#e0f1fa] md:scale-100 scale-90"
                        initial={{ y: -100, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-2 text-black">Pro Lens</h2>
                        <p className="text-xl text-green-700 font-semibold">₹599</p>
                        <ul className="mt-4 list-disc list-inside text-left text-black">
                            <li>All in Student Lens</li>
                            <li>Thinner lightweight frames</li>
                            <li>Extra anti-glare coating</li>
                        </ul>
                    </motion.div>
                    
                    <motion.div 
                        className="border rounded-xl p-6 shadow-lg bg-[#ccffd8] md:scale-100 scale-90"
                        initial={{ y: -100, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-2 text-black">Ergo Bundle</h2>
                        <p className="text-xl text-green-700 font-semibold">₹799</p>
                        <ul className="mt-4 list-disc list-inside text-left text-black">
                            <li>All in Pro Lens</li>
                            <li>Ergonomic study tips booklet</li>
                            <li>Extended 6-month warranty</li>
                        </ul>
                    </motion.div>
                </section>


                <motion.section 
                    className="max-w-4xl mx-auto mt-10 px-4"
                    initial={{ y: 100, opacity: 0}}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-center mb-4">Why so affordable?</h2>
                    <p className="text-gray-700 text-center">
                        We source directly from local optical manufacturers, cutting out branding middlemen and online retail markups.
                        By producing in batches, we bring down cost without compromising on quality.
                    </p>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-xl shadow">
                            <h3 className="font-semibold mb-1">Estimated Cost Breakdown (₹399 Tier)</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                <li>Frames: ₹100</li>
                                <li>Blue light lenses: ₹150</li>
                                <li>Packaging: ₹30</li>
                                <li>Microsite & hosting: ₹50</li>
                                <li>Shipping & ops: ₹50</li>
                                <li><strong>Total: ₹380 (₹19 margin)</strong></li>
                            </ul>
                        </div>
                    
                        <div className="bg-white p-4 rounded-xl shadow">
                            <h3 className="font-semibold mb-1">Future Cost Optimization</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                <li>Bulk production discounts</li>
                                <li>School partnerships for volume orders</li>
                                <li>Microsite scaling</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>
            </div>

            <Footer />
        </main>
    );
}