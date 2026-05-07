'use client'

import { motion } from 'framer-motion'

interface TextAnimateProps {
  children: string
  className?: string
  by?: 'word' | 'character'
  animation?: 'blurInUp'
}

export function TextAnimate({
  children,
  className = '',
  by = 'character',
}: TextAnimateProps) {

  const items =
    by === 'word'
      ? children.split(' ')
      : children.split('')

  return (

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.2,
      }}
      className={`
        w-full
        ${by === 'word'
          ? 'flex flex-wrap'
          : 'flex flex-wrap'}
        ${className}
      `}
    >

      {items.map((item, index) => (

        <motion.span
          key={`${item}-${index}-${children}`}
          variants={{
            hidden: {
              opacity: 0,
              filter: 'blur(10px)',
              y: 30,
            },

            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
            },
          }}

          transition={{
            duration: 0.5,
            delay: index * 0.03,
          }}

          className={`
            inline-block
            ${by === 'word' ? 'mr-1' : ''}
          `}
        >
          {item}
        </motion.span>

      ))}

    </motion.div>

  )
}