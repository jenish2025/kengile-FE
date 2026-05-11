import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Zap, Cpu, Monitor, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Renewable Energy Automation | AI & IoT Solutions for Power Sector',
  description: 'Automate and monitor renewable energy operations with advanced AI and IoT infrastructure.',
  keywords: 'renewable energy automation, solar automation, wind energy, AI power sector, IoT renewable energy',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kengile.com/services/renewable-energy-automation' },
}

export default function RenewableEnergyAutomation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kengile.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://kengile.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Renewable Energy Automation', item: 'https://kengile.com/services/renewable-energy-automation' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li><Link href="/services" className="text-accent-500 hover:text-primary-600 transition-colors">Services</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Renewable Energy Automation</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Renewable Energy Automation"
        subtitle="AI & IoT Solutions for Power Sector"
        description="Automate and monitor renewable energy operations with advanced AI and IoT infrastructure."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Automated Renewable Energy Systems</h2>
          <p className="text-lg text-accent-700 mb-6">
            We provide IT services and automation solutions for renewable energy power plants, including solar farms, wind installations, and hydroelectric facilities. Our systems use AI and IoT to optimize generation, predict maintenance, and manage grid integration.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Maximize efficiency and reliability of renewable energy operations through intelligent automation and monitoring.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Automation Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Generation Optimization</h3>
            <p className="text-accent-700">
              AI-driven systems to optimize power generation based on weather forecasts, demand patterns, and grid conditions.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Cpu className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Predictive Maintenance</h3>
            <p className="text-accent-700">
              Monitor equipment health and predict failures before they occur, reducing downtime and maintenance costs.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Monitor className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Remote Monitoring</h3>
            <p className="text-accent-700">
              Real-time monitoring and control of renewable energy assets from centralized command centers.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Network className="text-ai-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Grid Integration</h3>
            <p className="text-accent-700">
              Intelligent systems for managing grid connection, power quality, and energy storage integration.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Renewable energy automation success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Solar Farm Automation & Optimization"
              industry="Renewable Energy"
              challenge="A solar energy company operating 500MW of solar farms needed to optimize generation, predict maintenance, and integrate with the grid more efficiently. Manual monitoring and control were limiting their ability to maximize revenue."
              solution="Implemented AI-powered automation platform with IoT sensors on all solar panels and inverters. Deployed predictive maintenance algorithms, automated cleaning schedules, and intelligent grid integration. Created real-time monitoring dashboards and automated response systems."
              results={[
                'Increased energy generation by 12% through optimization',
                'Reduced maintenance costs by 40% with predictive maintenance',
                'Improved grid integration efficiency by 30%',
                'Maximized revenue through intelligent power trading'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Wind Farm Predictive Maintenance"
              industry="Wind Energy"
              challenge="A wind farm operator with 200+ turbines was experiencing unexpected failures and high maintenance costs. They needed to predict equipment failures before they occurred and optimize turbine performance."
              solution="Deployed IoT sensors and vibration monitoring on all turbines, implemented AI models for predictive maintenance, and automated performance optimization. Created centralized control system for remote monitoring and automated adjustments."
              results={[
                'Reduced unplanned downtime by 65%',
                'Extended turbine lifespan by 20%',
                'Lowered maintenance costs by $3M annually',
                'Improved energy output by 8% through optimization'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Automate Your Renewable Energy Operations</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s implement intelligent automation for your renewable energy facilities.
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


