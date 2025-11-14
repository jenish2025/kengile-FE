'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface FeatureListProps {
  features: string[]
  title?: string
}

const FeatureList = ({ features, title = 'Key Features' }: FeatureListProps) => {
  return (
    <div>
      {title && <h3 className="text-2xl font-semibold text-accent-900 mb-6">{title}</h3>}
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
              <Check className="text-primary-600" size={16} />
            </div>
            <span className="text-accent-700 text-lg">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default FeatureList

