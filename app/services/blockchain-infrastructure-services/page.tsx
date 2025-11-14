import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Link2, Shield, Network, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blockchain Infrastructure Services | Private & Hybrid Networks',
  description: 'Design, deploy, and manage blockchain networks with enterprise-grade reliability and governance frameworks.',
  keywords: 'blockchain infrastructure, private blockchain, enterprise blockchain, blockchain network, distributed ledger',
}

export default function BlockchainInfrastructureServices() {
  return (
    <>
      <AnimatedHero
        title="Blockchain Infrastructure Services"
        subtitle="Private & Hybrid Networks"
        description="Design, deploy, and manage blockchain networks with enterprise-grade reliability and governance frameworks."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Enterprise Blockchain Solutions</h2>
          <p className="text-lg text-accent-700 mb-6">
            We design and deploy blockchain networks tailored for enterprise use cases, including private chains, consortium networks, and hybrid architectures. Our infrastructure solutions ensure high performance, security, and compliance.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From network design to node management and governance, we provide comprehensive blockchain infrastructure services.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Infrastructure Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Link2 className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Network Design</h3>
            <p className="text-accent-700">
              Design private, consortium, or hybrid blockchain networks optimized for your specific use case and performance requirements.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Network className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Node Deployment</h3>
            <p className="text-accent-700">
              Deploy and manage blockchain nodes across cloud and on-premises infrastructure with high availability and redundancy.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Shield className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Governance Frameworks</h3>
            <p className="text-accent-700">
              Implement governance models, access controls, and consensus mechanisms for secure and compliant blockchain operations.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Cpu className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Performance Optimization</h3>
            <p className="text-accent-700">
              Optimize blockchain networks for throughput, latency, and scalability to handle enterprise transaction volumes.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Blockchain infrastructure deployment success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Supply Chain Blockchain Network"
              industry="Logistics"
              challenge="A global logistics company needed to track products across their supply chain with immutable records. They required a private blockchain network that could handle millions of transactions while maintaining privacy and performance."
              solution="Designed and deployed a Hyperledger Fabric private blockchain network with 50+ nodes across multiple regions. Implemented smart contracts for supply chain events, integrated with existing ERP systems, and created APIs for real-time tracking. Set up governance framework with multiple stakeholders."
              results={[
                'Reduced supply chain fraud by 95%',
                'Improved traceability from days to seconds',
                'Handled 5M+ transactions monthly',
                'Reduced reconciliation costs by 60%'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Enterprise Identity Management on Blockchain"
              industry="Financial Services"
              challenge="A financial institution needed a secure, decentralized identity verification system that could be shared across multiple services while maintaining user privacy and regulatory compliance."
              solution="Built a self-sovereign identity platform using Ethereum-based blockchain with zero-knowledge proofs. Implemented DID (Decentralized Identifier) standards, created mobile wallets for users, and integrated with KYC/AML systems. Ensured GDPR and regulatory compliance."
              results={[
                'Reduced identity verification time by 80%',
                'Eliminated duplicate KYC processes',
                'Improved user privacy with self-sovereign identity',
                'Achieved 100% regulatory compliance'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Deploy Your Blockchain Network</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s design and deploy a blockchain infrastructure solution for your enterprise.
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


