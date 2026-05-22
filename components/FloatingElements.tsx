'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FloatingElement {
  id: number
  delay: number
  duration: number
  size: number
  top: string
  left: string
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    setElements(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        delay: i * 0.2,
        duration: 4 + i,
        size: 20 + i * 15,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full border border-accent/20 opacity-40"
          style={{
            width: element.size,
            height: element.size,
            top: element.top,
            left: element.left,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
