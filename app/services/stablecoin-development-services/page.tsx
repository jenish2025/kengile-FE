import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Coins, Shield, Zap, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stablecoin Development | Blockchain & FinTech IT Services',
  description: 'End-to-end development of stablecoins and digital assets with blockchain integration, security, and scalability.',
  keywords: 'stablecoin development, digital currency, blockchain development, FinTech, cryptocurrency, token development',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kengile.com/services/stablecoin-development-services' },
}

export default function StablecoinDevelopmentServices() {
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
              { '@type': 'ListItem', position: 3, name: 'Stablecoin Development Services', item: 'https://kengile.com/services/stablecoin-development-services' },
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
            <li className="text-accent-900 font-medium">Stablecoin Development Services</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Stablecoin Development Services"
        subtitle="Blockchain & FinTech IT Services"
        description="End-to-end development of stablecoins and digital assets with blockchain integration, security, and scalability."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Secure Digital Currency Solutions</h2>
          <p className="text-lg text-accent-700 mb-6">
            We develop enterprise-grade stablecoins and digital assets with comprehensive blockchain integration, regulatory compliance, and security. Our solutions are designed for scalability, reliability, and seamless integration with existing financial systems.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From token design to smart contract development and wallet integration, we provide end-to-end stablecoin solutions.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Development Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Coins className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Token Development</h3>
            <p className="text-accent-700">
              Design and deploy stablecoins on Ethereum, Polygon, and other blockchain networks with custom tokenomics and governance models.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Shield className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Security & Compliance</h3>
            <p className="text-accent-700">
              Implement security best practices, smart contract audits, and regulatory compliance frameworks for financial institutions.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Wallet Integration</h3>
            <p className="text-accent-700">
              Build and integrate digital wallets, payment gateways, and exchange interfaces for seamless user experience.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Network className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Blockchain Infrastructure</h3>
            <p className="text-accent-700">
              Deploy and manage blockchain nodes, APIs, and infrastructure to support stablecoin operations at scale.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Stablecoin development success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Enterprise Stablecoin for Cross-Border Payments"
              industry="Financial Services"
              challenge="A multinational corporation needed a faster, cheaper way to process cross-border payments between subsidiaries. Traditional banking systems were slow (3-5 days) and expensive (3-5% fees). They required a compliant, secure solution."
              solution="Developed a private stablecoin pegged to USD on a permissioned blockchain network. Built smart contracts for automated settlements, integrated with existing ERP systems, and ensured full regulatory compliance. Created a user-friendly interface for treasury management."
              results={[
                'Reduced cross-border payment time from 3-5 days to minutes',
                'Lowered transaction fees from 3-5% to 0.1%',
                'Processed $500M+ in transactions annually',
                'Achieved 100% regulatory compliance'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="CBDC-Like Digital Currency for Government"
              industry="Government"
              challenge="A government wanted to issue a digital currency for social benefit payments and government transactions. They needed a secure, scalable, and transparent system that could handle millions of transactions while maintaining privacy."
              solution="Developed a central bank digital currency (CBDC) prototype using blockchain technology with privacy-preserving features. Implemented KYC/AML compliance, built mobile wallets for citizens, and created a transparent audit trail for government oversight."
              results={[
                'Reduced payment processing costs by 70%',
                'Eliminated fraud in benefit payments',
                'Improved financial inclusion for unbanked citizens',
                'Enabled real-time government spending transparency'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build Your Stablecoin Solution</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can develop a secure, compliant stablecoin for your organization.
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


