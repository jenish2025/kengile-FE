'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StatItem {
  value: string
  label: string
  icon?: ReactNode
}

interface StatsSectionProps {
  stats: StatItem[]
  title?: string
  description?: string
}

const StatsSection = ({ stats, title, description }: StatsSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto">
      {(title || description) && (
        <div className="text-center mb-16">
          {title && <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>}
          {description && <p className="text-xl text-white/90 max-w-3xl mx-auto">{description}</p>}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl">
              {stat.icon && (
                <div className="flex justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
              )}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-lg text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection

