'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import AnimatedDottedPattern from './AnimatedDottedPattern'

interface AnimatedHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaLink?: string
}

const AnimatedHero = ({ title, subtitle, description, ctaText = 'Get Started', ctaLink = '/contact-us' }: AnimatedHeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Dotted Grid Pattern - Primary Layer */}
      <AnimatedDottedPattern
        opacity={0.8}
        dotColor="rgba(37, 99, 235, 0.4)"
        dotSize={2}
        spacing={40}
        speed={20}
        direction="forward"
      />
      
      {/* Secondary Dotted Layer for Depth */}
      <AnimatedDottedPattern
        opacity={0.6}
        dotColor="rgba(37, 99, 235, 0.25)"
        dotSize={1.5}
        spacing={60}
        speed={25}
        direction="backward"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold"
          >
            <Sparkles size={20} />
            <span>{subtitle}</span>
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-accent-900"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-accent-700 mb-8 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={ctaLink}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>{ctaText}</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AnimatedHero

