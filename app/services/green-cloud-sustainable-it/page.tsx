import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Leaf, Cloud, Zap, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Green Cloud Solutions | Sustainable IT Infrastructure Services',
  description: 'Build green data centers and carbon-aware cloud systems to reduce energy costs and meet sustainability goals.',
  keywords: 'green cloud, sustainable IT, carbon neutral cloud, energy efficient data center, sustainable technology',
}

export default function GreenCloudSustainableIT() {
  return (
    <>
      <AnimatedHero
        title="Green Cloud & Sustainable IT"
        subtitle="Sustainable IT Infrastructure Services"
        description="Build green data centers and carbon-aware cloud systems to reduce energy costs and meet sustainability goals."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Sustainable IT Infrastructure</h2>
          <p className="text-lg text-accent-700 mb-6">
            We help enterprises adopt energy-efficient cloud and IT systems that reduce carbon footprint while maintaining performance. Our green cloud solutions combine renewable energy, efficient hardware, and intelligent resource management.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Achieve your sustainability goals without compromising on performance or reliability.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Green IT Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Leaf className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Green Data Centers</h3>
            <p className="text-accent-700">
              Design and operate data centers powered by renewable energy, with advanced cooling systems and energy-efficient hardware.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Cloud className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Carbon-Aware Cloud</h3>
            <p className="text-accent-700">
              Implement cloud architectures that automatically route workloads to regions with lower carbon intensity and renewable energy.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Energy Optimization</h3>
            <p className="text-accent-700">
              Optimize IT infrastructure for energy efficiency through intelligent workload scheduling, resource consolidation, and power management.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <BarChart3 className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Sustainability Reporting</h3>
            <p className="text-accent-700">
              Track and report on carbon emissions, energy consumption, and sustainability metrics to meet regulatory and corporate goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Green cloud and sustainable IT success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Carbon-Neutral Cloud Migration"
              industry="Technology"
              challenge="A tech company committed to carbon neutrality by 2030 needed to migrate their entire cloud infrastructure to renewable energy sources while maintaining performance and reducing costs."
              solution="Migrated workloads to cloud regions powered by 100% renewable energy, implemented carbon-aware workload scheduling, optimized resource utilization, and deployed energy-efficient compute instances. Set up real-time carbon tracking and reporting."
              results={[
                'Achieved 100% renewable energy for cloud operations',
                'Reduced carbon emissions by 85%',
                'Lowered cloud costs by 30% through optimization',
                'Reached carbon neutrality goals 5 years early'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Green Data Center Transformation"
              industry="Financial Services"
              challenge="A bank needed to modernize their data centers to meet ESG (Environmental, Social, Governance) requirements while supporting growing AI workloads. They required significant energy reduction without compromising reliability."
              solution="Upgraded to energy-efficient hardware, installed liquid cooling systems, integrated solar and wind power, implemented AI-powered energy optimization, and deployed intelligent workload scheduling to minimize energy consumption."
              results={[
                'Reduced data center energy consumption by 50%',
                'Achieved 80% renewable energy usage',
                'Improved PUE (Power Usage Effectiveness) from 2.1 to 1.2',
                'Met all ESG compliance requirements'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Go Green with Your IT Infrastructure</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s build sustainable IT solutions that reduce your environmental impact.
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


