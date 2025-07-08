import cn from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion"

interface cardInterface {
    className?: string,
    children: ReactNode,
    svgPath: string,
    delay?: number,
    direction?: "left" | "right"
}

export default function Card({ className, children, svgPath, delay, direction }: cardInterface) {
    return (
        <motion.div 
            className={cn("bg-[#FFB76E] flex flex-col h-80 w-80 justify-center items-center gap-4 text-4xl rounded-lg shadow-neutral-600 shadow-sm border-black border-1", className)}
            initial={{ x: direction === "left" ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay ?? 0 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <img src={svgPath} className="w-32 h-auto"/>
            {children}
        </motion.div>
    )
}