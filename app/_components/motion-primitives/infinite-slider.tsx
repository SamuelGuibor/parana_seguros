'use client'

import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface InfiniteSliderProps {
    children: React.ReactNode
    speed?: number
    speedOnHover?: number
    gap?: number
}

export function InfiniteSlider({
    children,
    speed = 40,
    speedOnHover = 10,
    gap = 80,
}: InfiniteSliderProps) {
    const x = useMotionValue(0)
    const [isHovered, setIsHovered] = useState(false)
    const frame = useRef<number>()
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let lastTime: number | null = null

        const loop = (now: number) => {
            if (!lastTime) lastTime = now
            const delta = now - lastTime
            lastTime = now

            const pixelsPerSecond = isHovered ? speedOnHover : speed
            const deltaX = (pixelsPerSecond * delta) / 1000

            const width = containerRef.current?.scrollWidth
                ? containerRef.current.scrollWidth / 2
                : 1000
            if (width <= 0) return

            const prevX = x.get()
            let newX = prevX - deltaX
            if (newX <= -width) {
                newX += width
            }
            x.set(newX)

            frame.current = requestAnimationFrame(loop)
        }

        frame.current = requestAnimationFrame(loop)

        return () => {
            if (frame.current) cancelAnimationFrame(frame.current)
        }
    }, [isHovered, speed, speedOnHover, x])

    const items = Array.isArray(children) ? children : [children]
    const duplicated = [...items, ...items]

    return (
        <div
            ref={containerRef}
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="flex w-max"
                style={{ x, columnGap: `${gap}px` }}
            >
                {duplicated.map((child, index) => (
                    <div key={index} className="flex-shrink-0">
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}