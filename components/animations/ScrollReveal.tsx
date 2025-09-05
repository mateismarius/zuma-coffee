"use client"

import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

interface ScrollRevealProps {
    children: ReactNode
    triggerOnce?: boolean
    className?: string
}

export default function ScrollReveal({
                                         children,
                                         triggerOnce = true,
                                         className = ""
                                     }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, {
        once: triggerOnce,
        margin: "-20%"
    })

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: 50,
                scale: 0.95
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1
            } : {
                opacity: 0,
                y: 50,
                scale: 0.95
            }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.div>
    )
}