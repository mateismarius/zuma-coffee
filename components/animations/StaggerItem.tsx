// src/components/animations/StaggerItem.tsx (companion pentru StaggerContainer)
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export default function StaggerItem({ children, className = "" }: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.95
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }
                },
            }}
        >
            {children}
        </motion.div>
    )
}