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
        <div className="text-center mb-12">
          {title && <h2 className="text-4xl font-bold text-gradient mb-4">{title}</h2>}
          {description && <p className="text-xl text-accent-600 max-w-3xl mx-auto">{description}</p>}
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
            className="text-center"
          >
            {stat.icon && (
              <div className="flex justify-center mb-4 text-primary-600">
                {stat.icon}
              </div>
            )}
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {stat.value}
            </div>
            <div className="text-lg text-accent-600">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection

