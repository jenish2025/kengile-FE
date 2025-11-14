import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Radio, Zap, Cpu, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Space Energy & Edge IT | AI-Powered Infrastructure Solutions',
  description: 'Build AI-optimized energy management and edge computing systems for space networks and remote environments.',
  keywords: 'space energy, edge computing space, satellite edge computing, space infrastructure, orbital systems',
}

export default function SpaceEnergyEdgeSystems() {
  return (
    <>
      <AnimatedHero
        title="Space Energy & Edge Systems"
        subtitle="AI-Powered Infrastructure Solutions"
        description="Build AI-optimized energy management and edge computing systems for space networks and remote environments."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Orbital Infrastructure Solutions</h2>
          <p className="text-lg text-accent-700 mb-6">
            We develop energy management and edge computing systems optimized for space environments, including satellites, space stations, and orbital platforms. Our solutions enable efficient power management and distributed computing in space.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From solar power optimization to edge AI processing, we build systems that operate reliably in the harsh conditions of space.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Space Systems Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Energy Management</h3>
            <p className="text-accent-700">
              AI-optimized power systems for satellites, managing solar panel efficiency, battery life, and power distribution in space environments.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Cpu className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Edge Computing</h3>
            <p className="text-accent-700">
              Deploy edge computing nodes on satellites and space platforms for real-time data processing and reduced latency.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Radio className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Space Networks</h3>
            <p className="text-accent-700">
              Design and manage inter-satellite communication networks and space-based internet infrastructure.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Network className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Remote Operations</h3>
            <p className="text-accent-700">
              Enable remote monitoring and control of space systems from ground stations with AI-assisted decision-making.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Space energy and edge systems success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="LEO Satellite Constellation Energy Management"
              industry="Satellite Communications"
              challenge="A company deploying a constellation of 1,000+ low Earth orbit satellites needed intelligent energy management to maximize operational lifetime. Each satellite had limited battery capacity and needed to optimize power usage between communication, data processing, and survival systems."
              solution="Developed AI-powered energy management systems for each satellite with predictive algorithms for power optimization. Implemented edge computing for on-board decision-making, created intelligent power scheduling based on mission priorities, and optimized solar panel orientation algorithms."
              results={[
                'Extended satellite operational lifetime by 30%',
                'Optimized power usage efficiency by 40%',
                'Reduced mission failures due to power issues by 90%',
                'Enabled more complex missions with same power budget'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Space Station Edge Computing Network"
              industry="Space Exploration"
              challenge="A space agency needed to process scientific data on-board a space station to reduce downlink bandwidth requirements. They required edge computing systems that could operate reliably in space conditions with limited power and radiation tolerance."
              solution="Designed and deployed edge computing nodes optimized for space environments with radiation-hardened components. Implemented AI models for on-board data processing, created distributed computing network across multiple modules, and optimized for power efficiency."
              results={[
                'Reduced data downlink requirements by 60%',
                'Enabled real-time scientific analysis in space',
                'Improved mission efficiency with faster decision-making',
                'Extended computing capabilities without increasing power consumption'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build Space Infrastructure</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s design energy and computing systems for your space operations.
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


