'use client'

import { motion } from 'framer-motion'

interface AnimatedDottedPatternProps {
  opacity?: number
  dotColor?: string
  dotSize?: number
  spacing?: number
  speed?: number
  direction?: 'forward' | 'backward'
  className?: string
}

const AnimatedDottedPattern = ({
  opacity = 0.6,
  dotColor = 'rgba(37, 99, 235, 0.3)',
  dotSize = 2,
  spacing = 40,
  speed = 20,
  direction = 'forward',
  className = ''
}: AnimatedDottedPatternProps) => {
  const animateDirection = direction === 'forward' 
    ? [`0 0`, `${spacing}px ${spacing}px`]
    : [`0 0`, `-${spacing}px -${spacing}px`]

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize + 0.5}px)`,
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundPosition: '0 0'
        }}
        animate={{
          backgroundPosition: animateDirection,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
}

export default AnimatedDottedPattern

