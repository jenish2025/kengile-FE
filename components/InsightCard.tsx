'use client'

import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface InsightCardProps {
  title: string
  description: string
  href: string
  icon: ReactNode
  borderColor?: string
  hoverBorderColor?: string
  iconGradientFrom?: string
  iconGradientTo?: string
  textColor?: string
  hoverTextColor?: string
}

const InsightCard = ({
  title,
  description,
  href,
  icon,
  borderColor = 'border-blue-100',
  hoverBorderColor = 'hover:border-blue-400',
  iconGradientFrom = 'from-blue-500',
  iconGradientTo = 'to-blue-600',
  textColor = 'text-blue-600',
  hoverTextColor = 'hover:text-blue-700',
}: InsightCardProps) => {
  return (
    <div className={`group bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 ${borderColor} ${hoverBorderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}>
      <div className={`w-20 h-20 bg-gradient-to-br ${iconGradientFrom} ${iconGradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:${textColor} transition-colors`}>
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg mb-6">
        {description}
      </p>
      <Link
        href={href}
        className={`inline-flex items-center space-x-2 ${textColor} font-semibold ${hoverTextColor} group-hover:translate-x-2 transition-transform`}
      >
        <span>Read More</span>
        <ArrowRight size={20} />
      </Link>
    </div>
  )
}

export default InsightCard
