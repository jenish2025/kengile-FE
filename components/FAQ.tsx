'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

const FAQ = ({ items, title = 'Frequently Asked Questions' }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <h3 className="text-3xl font-bold text-gradient mb-8">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white border border-accent-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-accent-50 transition-colors"
            >
              <span className="font-semibold text-accent-900 pr-4">{item.question}</span>
              <ChevronDown
                className={`flex-shrink-0 text-primary-600 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                size={20}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-accent-600">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ

