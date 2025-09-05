// src/components/animations/SlideInLeft.tsx
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SlideInLeftProps {
    children: ReactNode
    delay?: number
    duration?: number
    distance?: number
    className?: string
}

export default function SlideInLeft({
                                        children,
                                        delay = 0,
                                        duration = 0.8,
                                        distance = 60,
                                        className = ""
                                    }: SlideInLeftProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                x: -distance
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.div>
    )
}