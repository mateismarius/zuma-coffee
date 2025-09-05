// src/components/animations/SteamEffect.tsx (pentru iconițe cafea)
"use client"

import { motion } from "framer-motion"

interface SteamEffectProps {
    className?: string
}

export default function SteamEffect({ className = "" }: SteamEffectProps) {
    return (
        <div className={`relative ${className}`}>
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-8 bg-gradient-to-t from-stone-200 to-transparent rounded-full opacity-60"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: -20
                    }}
                    animate={{
                        y: [-20, -40],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    )
}