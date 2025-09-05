// src/components/animations/CoffeeBreath.tsx (special pentru cafenea)
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface CoffeeBreathProps {
    children: ReactNode
    className?: string
}

export default function CoffeeBreath({ children, className = "" }: CoffeeBreathProps) {
    return (
        <motion.div
            className={className}
            animate={{
                scale: [1, 1.02, 1],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
            }}
        >
            {children}
        </motion.div>
    )
}