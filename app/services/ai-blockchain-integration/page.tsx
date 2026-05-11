import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Cpu, Link2, Brain, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI + Blockchain Services | Secure Data & Compute Infrastructure',
  description: 'Integrate AI intelligence with blockchain for transparent, decentralized IT operations and smart automation.',
  keywords: 'AI blockchain, decentralized AI, blockchain AI integration, smart contracts AI, decentralized compute',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kengile.com/services/ai-blockchain-integration' },
}

export default function AIBlockchainIntegration() {
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
              { '@type': 'ListItem', position: 3, name: 'AI + Blockchain Services', item: 'https://kengile.com/services/ai-blockchain-integration' },
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
            <li className="text-accent-900 font-medium">AI + Blockchain Services</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="AI & Blockchain Integration"
        subtitle="Secure Data & Compute Infrastructure"
        description="Integrate AI intelligence with blockchain for transparent, decentralized IT operations and smart automation."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Convergence of AI and Blockchain</h2>
          <p className="text-lg text-accent-700 mb-6">
            We combine the intelligence of AI with the transparency and security of blockchain to create innovative solutions for decentralized data processing, smart contract automation, and verifiable AI operations.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Our integration services enable trustless AI systems, decentralized machine learning, and blockchain-verified data analytics.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Integration Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Brain className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Decentralized AI</h3>
            <p className="text-accent-700">
              Build AI systems that run on decentralized networks, enabling distributed machine learning and collaborative model training.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Link2 className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Smart Contract Automation</h3>
            <p className="text-accent-700">
              Integrate AI models with smart contracts to enable intelligent, automated decision-making on blockchain networks.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Cpu className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Verifiable AI</h3>
            <p className="text-accent-700">
              Use blockchain to verify AI model integrity, training data provenance, and inference results for transparent AI operations.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Shield className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Secure Data Processing</h3>
            <p className="text-accent-700">
              Process sensitive data using AI while maintaining privacy and security through blockchain-based access controls and encryption.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">AI and blockchain integration success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Decentralized AI Model Marketplace"
              industry="Technology"
              challenge="A company wanted to create a marketplace where AI models could be shared, verified, and monetized in a trustless manner. They needed to ensure model integrity, track usage, and enable fair compensation for model creators."
              solution="Built a decentralized platform combining blockchain for verification and smart contracts for transactions. Implemented on-chain model hashing for integrity verification, created token-based compensation system, and enabled distributed model training with verifiable results."
              results={[
                'Created marketplace with 500+ AI models',
                'Enabled verifiable model integrity on blockchain',
                'Automated compensation through smart contracts',
                'Increased model sharing and collaboration by 300%'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="AI-Powered Smart Contract Automation"
              industry="Financial Services"
              challenge="A DeFi platform needed to automate complex financial decisions using AI while maintaining transparency and trust. They required AI models that could make decisions on-chain with verifiable logic."
              solution="Developed AI models integrated with smart contracts using oracle networks. Implemented on-chain verification of AI decisions, created transparent decision-making processes, and ensured all AI logic was auditable on the blockchain."
              results={[
                'Automated 10,000+ financial decisions monthly',
                'Reduced manual intervention by 90%',
                'Improved decision accuracy by 35%',
                'Maintained 100% transparency and auditability'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Integrate AI with Blockchain</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s explore how combining AI and blockchain can transform your IT operations.
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


