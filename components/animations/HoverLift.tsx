// src/components/animations/HoverLift.tsx
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface HoverLiftProps {
    children: ReactNode
    lift?: number
    scale?: number
    className?: string
}

export default function HoverLift({
                                      children,
                                      lift = -8,
                                      scale = 1.02,
                                      className = ""
                                  }: HoverLiftProps) {
    return (
        <motion.div
            className={className}
            whileHover={{
                y: lift,
                scale: scale,
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.div>
    )
}