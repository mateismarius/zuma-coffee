// src/components/animations/StaggerContainer.tsx
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StaggerContainerProps {
    children: ReactNode
    delayChildren?: number
    staggerChildren?: number
    className?: string
}

export default function StaggerContainer({
                                             children,
                                             delayChildren = 0.2,
                                             staggerChildren = 0.1,
                                             className = ""
                                         }: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        delayChildren,
                        staggerChildren,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    )
}
