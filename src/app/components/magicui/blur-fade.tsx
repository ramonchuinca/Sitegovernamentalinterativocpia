'use client'

import { motion } from 'framer-motion'

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
  inView?: boolean
}

export function BlurFade({
  children,
  className = '',
  delay = 0,
}: BlurFadeProps) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(12px)',
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}