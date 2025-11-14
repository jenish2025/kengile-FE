import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Zap, BarChart3, Cpu, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart Energy IT Solutions | AI-Driven Grid Optimization',
  description: 'We deliver AI and IoT solutions for power forecasting, load balancing, and energy analytics for modern utilities.',
  keywords: 'smart energy, energy IT solutions, grid optimization, power forecasting, energy analytics, IoT energy',
}

export default function SmartEnergyITSolutions() {
  return (
    <>
      <AnimatedHero
        title="Smart Energy IT Solutions"
        subtitle="AI-Driven Grid Optimization"
        description="We deliver AI and IoT solutions for power forecasting, load balancing, and energy analytics for modern utilities."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Intelligent Energy Management</h2>
          <p className="text-lg text-accent-700 mb-6">
            We provide AI-powered software and IoT solutions that help utilities and energy companies optimize power generation, distribution, and consumption. Our systems enable real-time monitoring, predictive analytics, and automated load balancing.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From smart grid management to demand forecasting, we deliver solutions that reduce costs, improve reliability, and support the transition to renewable energy.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Smart Energy Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Power Forecasting</h3>
            <p className="text-accent-700">
              AI-driven models for predicting energy demand, renewable generation, and grid load to optimize power distribution and reduce waste.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <BarChart3 className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Load Balancing</h3>
            <p className="text-accent-700">
              Automated systems for balancing energy supply and demand across the grid, integrating renewable sources and storage systems.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Cpu className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Energy Analytics</h3>
            <p className="text-accent-700">
              Comprehensive analytics platforms for monitoring energy consumption, identifying inefficiencies, and optimizing operations.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Network className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">IoT Integration</h3>
            <p className="text-accent-700">
              Connect smart meters, sensors, and devices to create a comprehensive energy monitoring and control network.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Smart energy IT solutions success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="AI-Powered Grid Optimization"
              industry="Utilities"
              challenge="A regional utility company was struggling with grid instability due to increasing renewable energy integration. They needed AI-powered forecasting and load balancing to maintain grid reliability while maximizing renewable energy usage."
              solution="Developed an AI platform using machine learning models for demand forecasting, renewable generation prediction, and automated load balancing. Integrated IoT sensors across the grid, implemented real-time monitoring dashboards, and created automated response systems for grid events."
              results={[
                'Improved renewable energy utilization by 35%',
                'Reduced grid instability incidents by 80%',
                'Lowered energy costs by $15M annually',
                'Achieved 99.9% grid reliability'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Smart Building Energy Management"
              industry="Real Estate"
              challenge="A commercial real estate company with 200+ buildings needed to reduce energy costs and carbon footprint. They lacked visibility into energy consumption patterns and had no automated optimization systems."
              solution="Deployed IoT sensors and smart meters across all buildings, built an AI-powered energy analytics platform, and implemented automated HVAC and lighting controls. Created predictive maintenance systems and real-time energy dashboards for facility managers."
              results={[
                'Reduced energy consumption by 30%',
                'Lowered operational costs by $8M annually',
                'Improved tenant satisfaction with better climate control',
                'Achieved carbon neutrality goals 2 years early'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Optimize Your Energy Systems</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can help you implement smart energy solutions for your organization.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </Section>
    </>
  )
}


