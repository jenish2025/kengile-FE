'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  delay?: number
}

const ServiceCard = ({ title, description, href, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300 group hover-lift"
    >
      {icon && (
        <div className="mb-4 text-primary-600 group-hover:text-primary-700 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-accent-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-accent-600 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors font-semibold"
      >
        <span>Learn More</span>
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}

export default ServiceCard

