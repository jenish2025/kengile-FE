import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Satellite, Network, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Satellite Internet Solutions | Space Connectivity IT Services',
  description: 'Build and manage satellite-based internet infrastructure for low-latency, high-availability global connectivity.',
  keywords: 'satellite internet, space connectivity, satellite network, low earth orbit, space internet, global connectivity',
}

export default function SatelliteSpaceInternetSolutions() {
  return (
    <>
      <AnimatedHero
        title="Satellite & Space Internet Solutions"
        subtitle="Space Connectivity IT Services"
        description="Build and manage satellite-based internet infrastructure for low-latency, high-availability global connectivity."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Global Space Connectivity</h2>
          <p className="text-lg text-accent-700 mb-6">
            We provide IT infrastructure and networking solutions for satellite-based internet systems, enabling global connectivity for remote locations, IoT deployments, and enterprise networks. Our services cover ground station management, network optimization, and integration with terrestrial networks.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From low Earth orbit (LEO) constellations to geostationary satellites, we help you leverage space-based connectivity for your infrastructure needs.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Space Connectivity Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Satellite className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Ground Station Management</h3>
            <p className="text-accent-700">
              Design, deploy, and manage ground station infrastructure for satellite communication, tracking, and data downlink.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Network className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Network Integration</h3>
            <p className="text-accent-700">
              Integrate satellite networks with terrestrial internet infrastructure for seamless hybrid connectivity solutions.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Low-Latency Optimization</h3>
            <p className="text-accent-700">
              Optimize satellite network configurations and routing for low-latency applications and real-time communications.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Shield className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Security & Reliability</h3>
            <p className="text-accent-700">
              Implement encryption, redundancy, and failover systems to ensure secure and reliable satellite connectivity.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Satellite internet connectivity success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Global IoT Network via Satellite"
              industry="Agriculture"
              challenge="An agricultural technology company needed to connect thousands of IoT sensors across remote farms worldwide. Traditional internet infrastructure was unavailable in many locations, making satellite connectivity essential."
              solution="Deployed a hybrid satellite-terrestrial network using LEO satellites for low-latency connectivity. Set up ground stations, implemented edge computing for data processing, and created a unified network management platform. Integrated with existing cloud infrastructure."
              results={[
                'Connected 50,000+ IoT devices across 5 continents',
                'Achieved 99.5% network uptime',
                'Reduced data transmission costs by 60%',
                'Enabled real-time monitoring of remote agricultural operations'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Maritime Satellite Internet"
              industry="Shipping & Logistics"
              challenge="A shipping company needed reliable internet connectivity for their fleet of 200+ vessels operating in remote ocean areas. They required low-latency connectivity for real-time operations, crew communications, and vessel tracking."
              solution="Implemented a satellite internet solution using multiple satellite constellations (LEO and GEO) for redundancy. Installed shipboard terminals, optimized for maritime conditions, and integrated with their fleet management systems. Created failover mechanisms for seamless connectivity."
              results={[
                'Achieved 99.9% connectivity uptime across fleet',
                'Reduced communication costs by 40%',
                'Enabled real-time vessel tracking and operations',
                'Improved crew satisfaction with reliable internet access'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Connect to Space</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s build satellite connectivity infrastructure for your global operations.
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


