// src/components/animations/SlideUp.tsx
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SlideUpProps {
    children: ReactNode
    delay?: number
    duration?: number
    distance?: number
    className?: string
}

export default function SlideUp({
                                    children,
                                    delay = 0,
                                    duration = 0.7,
                                    distance = 50,
                                    className = ""
                                }: SlideUpProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: distance
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart - smooth and elegant
            }}
        >
            {children}
        </motion.div>
    )
}