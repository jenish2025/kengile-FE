'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface UseCaseCardProps {
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}

const UseCaseCard = ({ title, description, icon, delay = 0 }: UseCaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300"
    >
      {icon && (
        <div className="mb-4 text-primary-600">
          {icon}
        </div>
      )}
      <h4 className="text-xl font-semibold text-accent-900 mb-3">{title}</h4>
      <p className="text-accent-600">{description}</p>
    </motion.div>
  )
}

export default UseCaseCard

