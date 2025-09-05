// src/components/animations/TypewriterText.tsx
"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface TypewriterTextProps {
    text: string
    delay?: number
    speed?: number
    className?: string
    cursor?: boolean
}

export default function TypeWriterText({
                                           text,
                                           delay = 0,
                                           speed = 50,
                                           className = "",
                                           cursor = true
                                       }: TypewriterTextProps) {
    const [displayText, setDisplayText] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            let i = 0
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(text.slice(0, i + 1))
                    i++
                } else {
                    clearInterval(typeInterval)
                    setIsComplete(true)
                }
            }, speed)

            return () => clearInterval(typeInterval)
        }, delay)

        return () => clearTimeout(timer)
    }, [text, delay, speed])

    return (
        <span className={className}>
      {displayText}
            {cursor && !isComplete && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-coffee-primary"
                >
                    |
                </motion.span>
            )}
    </span>
    )
}