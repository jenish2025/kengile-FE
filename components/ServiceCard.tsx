'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  delay?: number
}

const ServiceCard = ({ title, description, href, icon, delay = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position tracking for 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-white via-white to-accent-50/30 border-2 border-accent-100 rounded-3xl p-8 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 group overflow-hidden cursor-pointer"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        animate={isHovered ? {
          background: [
            "linear-gradient(135deg, rgba(239, 246, 255, 1) 0%, rgba(219, 234, 254, 0.5) 50%, transparent 100%)",
            "linear-gradient(225deg, rgba(239, 246, 255, 1) 0%, rgba(219, 234, 254, 0.5) 50%, transparent 100%)",
            "linear-gradient(315deg, rgba(239, 246, 255, 1) 0%, rgba(219, 234, 254, 0.5) 50%, transparent 100%)",
            "linear-gradient(135deg, rgba(239, 246, 255, 1) 0%, rgba(219, 234, 254, 0.5) 50%, transparent 100%)",
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Mesh gradient pattern overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Sparkle effects on hover */}
      {isHovered && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: [0, 20], y: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="absolute top-6 right-6 text-primary-400"
          >
            <Sparkles size={18} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: [0, -15], y: [0, 15] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            className="absolute bottom-24 left-6 text-primary-300"
          >
            <Sparkles size={14} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: [0, 10], y: [0, -10] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
            className="absolute top-1/2 right-12 text-primary-200"
          >
            <Sparkles size={10} />
          </motion.div>
        </>
      )}

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={isHovered ? {
          backgroundPosition: ["200% 200%", "-200% -200%"]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {icon && (
          <motion.div
            className="mb-6 inline-block"
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Enhanced icon container with gradient background */}
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300 ">
                {/* Icon glow effect */}
                {/* <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40"
                  animate={isHovered ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                /> */}
                {/* Rotating border effect */}
                {/* <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(37, 99, 235, 0.3), transparent)",
                  }}
                  animate={isHovered ? {
                    rotate: [0, 360]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                /> */}
                <div className="relative text-primary-600 group-hover:text-primary-700 transition-all duration-300 group-hover:scale-110">
                  {icon}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.h3
          className="text-xl font-bold text-accent-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight"
          animate={isHovered ? { x: [0, 3, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h3>

        <p className="text-accent-600 mb-6 leading-relaxed group-hover:text-accent-700 transition-colors text-[15px]">
          {description}
        </p>

        {/* Learn more link intentionally removed per requirements */}
      </div>

      {/* Bottom accent line with gradient animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-500 rounded-b-3xl"
        initial={{ width: 0 }}
        animate={isHovered ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
          animate={isHovered ? { x: ["-100%", "100%"] } : {}}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Side accent bars */}
      <motion.div
        className="absolute left-0 top-1/4 w-1 h-12 bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-0 group-hover:opacity-100 rounded-r-full"
        initial={{ scaleY: 0 }}
        animate={isHovered ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Enhanced corner accents with multiple layers */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 overflow-hidden rounded-tr-3xl"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg viewBox="0 0 100 100" className="text-primary-300">
          <path
            d="M 100 0 L 100 100 L 0 100"
            fill="currentColor"
            opacity="0.15"
          />
        </svg>
        {/* Animated dots in corner */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-primary-400 rounded-full"
          animate={isHovered ? {
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-4 right-6 w-1.5 h-1.5 bg-primary-300 rounded-full"
          animate={isHovered ? {
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
      </motion.div>

      {/* Bottom left decorative element */}
      <motion.div
        className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 overflow-hidden rounded-bl-3xl"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-primary-100/40 to-transparent" />
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard

