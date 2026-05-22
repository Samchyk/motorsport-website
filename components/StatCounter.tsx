'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function StatCounter({ value, suffix = '', prefix = '', duration = 2 }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = value / (duration * 60)
    const interval = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl font-bold text-accent">
        {prefix}
        {count}
        {suffix}
      </span>
    </motion.div>
  )
}
