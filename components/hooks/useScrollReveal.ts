"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"

export function useScrollReveal() {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref)

    return { ref, isInView }
}