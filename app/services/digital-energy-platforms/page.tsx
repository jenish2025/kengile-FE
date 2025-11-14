import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { BarChart3, Network, Cpu, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Energy Platforms | IoT, Automation & Analytics',
  description: 'Integrate sensors, IoT, and predictive analytics to optimize energy use across large-scale IT and industrial environments.',
  keywords: 'digital energy platform, IoT energy, energy automation, predictive analytics, smart energy management',
}

export default function DigitalEnergyPlatforms() {
  return (
    <>
      <AnimatedHero
        title="Digital Energy Platforms"
        subtitle="IoT, Automation & Analytics"
        description="Integrate sensors, IoT, and predictive analytics to optimize energy use across large-scale IT and industrial environments."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Intelligent Energy Platforms</h2>
          <p className="text-lg text-accent-700 mb-6">
            We build comprehensive digital platforms that integrate IoT sensors, automation systems, and predictive analytics to monitor and optimize energy consumption across facilities, data centers, and industrial operations.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Our platforms provide real-time visibility, automated control, and actionable insights to reduce energy costs and improve efficiency.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Platform Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Network className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">IoT Integration</h3>
            <p className="text-accent-700">
              Connect and manage thousands of sensors and devices to collect real-time energy data from across your infrastructure.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <BarChart3 className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Predictive Analytics</h3>
            <p className="text-accent-700">
              Use AI and machine learning to predict energy demand, identify anomalies, and optimize consumption patterns.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Cpu className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Automated Control</h3>
            <p className="text-accent-700">
              Automatically adjust energy systems based on real-time conditions, schedules, and optimization algorithms.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Real-Time Monitoring</h3>
            <p className="text-accent-700">
              Dashboards and alerts for monitoring energy consumption, costs, and system performance across all connected devices.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Digital energy platform success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Industrial Energy Management Platform"
              industry="Manufacturing"
              challenge="A manufacturing company with 50+ facilities worldwide lacked visibility into energy consumption patterns. They needed a unified platform to monitor, analyze, and optimize energy use across all locations in real-time."
              solution="Built a comprehensive digital energy platform integrating 10,000+ IoT sensors across all facilities. Implemented AI-powered analytics for demand forecasting, anomaly detection, and automated optimization. Created centralized dashboards and mobile apps for facility managers."
              results={[
                'Reduced energy consumption by 25% across all facilities',
                'Identified and fixed $2M in energy waste annually',
                'Improved operational efficiency with predictive maintenance',
                'Achieved real-time visibility across all 50+ locations'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Campus-Wide Energy Optimization"
              industry="Education"
              challenge="A university campus with 100+ buildings needed to reduce energy costs and carbon footprint. They had no centralized system to monitor or control energy usage, leading to significant waste and high utility bills."
              solution="Deployed a digital energy platform connecting all buildings with smart meters and IoT sensors. Implemented automated HVAC and lighting controls, created energy dashboards for administrators, and set up automated alerts for anomalies. Integrated with renewable energy sources."
              results={[
                'Reduced campus energy costs by $1.5M annually',
                'Lowered carbon emissions by 30%',
                'Improved student and staff comfort with better climate control',
                'Enabled data-driven energy decisions across campus'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build Your Digital Energy Platform</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s create a comprehensive energy management platform for your organization.
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


