'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Zap, Shield } from 'lucide-react'

interface CaseStudyCardProps {
  title: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  delay?: number
}

const CaseStudyCard = ({ 
  title, 
  industry, 
  challenge, 
  solution, 
  results, 
  delay = 0 
}: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border-2 border-accent-200 rounded-xl p-8 hover:border-primary-500 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="mb-6">
        <div className="inline-block px-4 py-1.5 bg-primary-600 text-white text-sm font-semibold rounded-full mb-4 shadow-sm">
          {industry}
        </div>
        <h3 className="text-2xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">{title}</h3>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-subtle rounded-lg p-4 border border-accent-100">
          <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2 flex items-center">
            <Shield className="mr-2 text-primary-600" size={16} />
            Challenge
          </h4>
          <p className="text-accent-800 leading-relaxed font-medium">{challenge}</p>
        </div>

        <div className="bg-gradient-subtle rounded-lg p-4 border border-accent-100">
          <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2 flex items-center">
            <Zap className="mr-2 text-primary-600" size={16} />
            Solution
          </h4>
          <p className="text-accent-800 leading-relaxed font-medium">{solution}</p>
        </div>

        <div className="bg-success-50 rounded-lg p-4 border border-success-200">
          <h4 className="text-sm font-semibold text-success-700 uppercase tracking-wide mb-3 flex items-center">
            <TrendingUp className="mr-2 text-success-600" size={16} />
            Results
          </h4>
          <ul className="space-y-2.5">
            {results.map((result, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-success-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-accent-800 font-medium">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default CaseStudyCard

