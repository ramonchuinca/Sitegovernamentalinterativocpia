'use client'

import { motion } from 'framer-motion'

type AnimationType =
  | 'blurInUp'
  | 'fadeIn'

interface TextAnimateProps {
  children: string
  className?: string
  by?: 'word' | 'character'
  animation?: AnimationType
  delay?: number
}

export function TextAnimate({
  children,
  className = '',
  by = 'character',
  animation = 'blurInUp',
  delay = 0,
}: TextAnimateProps) {

  const items =
    by === 'word'
      ? children.split(' ')
      : children.split('')

  const getVariants = () => {

    switch (animation) {

      case 'fadeIn':
        return {

          hidden: {
            opacity: 0,
            y: 20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },

        }

      case 'blurInUp':
      default:
        return {

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

        }

    }

  }

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
        flex flex-wrap
        ${className}
      `}
    >

      {items.map((item, index) => (

        <motion.span
          key={`${item}-${index}-${children}`}
          variants={getVariants()}
          transition={{
            duration: 0.5,
            delay: delay + (index * 0.03),
          }}
          className={`
  inline-block
  ${by === 'word' ? 'mr-2 sm:mr-3' : ''}
`}
        >
          {item === ' '
            ? '\u00A0'
            : item}
        </motion.span>

      ))}

    </motion.div>

  )
}