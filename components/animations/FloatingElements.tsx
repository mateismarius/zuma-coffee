"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingElementsProps {
    children: ReactNode;
    intensity?: number;
    duration?: number;
    className?: string;
}

export default function FloatingElements({
                                             children,
                                             intensity = 10,
                                             duration = 4,
                                             className = "",
                                         }: FloatingElementsProps) {
    const prefersReducedMotion = useReducedMotion();

    // asigurăm un number 100%
    const i: number = typeof intensity === "number" ? intensity : 10;

    // tupluri strict tipizate (3 cadre)
    const yFrames: [number, number, number] = [-i, i, -i];
    const xFrames: [number, number, number] = [-i / 2, i / 2, -i / 2];
    const rFrames: [number, number, number] = [-1, 1, -1];

    if (prefersReducedMotion) {
        return <div className={className || ""}>{children}</div>;
    }

    const transition: Transition = {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
    };

    return (
        <motion.div
            className={className}
            animate={{
                x: xFrames,
                y: yFrames,
                rotate: rFrames,
            }}
            transition={transition}
        >
            {children}
        </motion.div>
    );
}
