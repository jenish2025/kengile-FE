import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Wallet, Coins, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web3 Payments & Tokenization | FinTech IT Solutions',
  description: 'Build next-gen payment platforms with tokenized assets, digital wallets, and on-chain settlement solutions.',
  keywords: 'Web3 payments, tokenization, digital wallets, blockchain payments, FinTech, DeFi payments',
}

export default function Web3PaymentsTokenizationPlatforms() {
  return (
    <>
      <AnimatedHero
        title="Web3 Payments & Tokenization"
        subtitle="FinTech IT Solutions"
        description="Build next-gen payment platforms with tokenized assets, digital wallets, and on-chain settlement solutions."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Next-Generation Payment Systems</h2>
          <p className="text-lg text-accent-700 mb-6">
            We develop Web3 payment platforms that enable tokenized transactions, digital asset management, and decentralized finance (DeFi) integrations. Our solutions combine blockchain technology with traditional payment systems for seamless user experience.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From micropayments to asset tokenization, we build platforms that transform how value is exchanged in the digital economy.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Platform Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Wallet className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Digital Wallets</h3>
            <p className="text-accent-700">
              Build secure, user-friendly digital wallets supporting multiple cryptocurrencies, tokens, and digital assets with multi-signature security.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Coins className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Asset Tokenization</h3>
            <p className="text-accent-700">
              Tokenize real-world assets including real estate, commodities, and securities for fractional ownership and trading.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Payment Processing</h3>
            <p className="text-accent-700">
              Implement fast, low-cost payment processing with on-chain settlement, cross-chain bridges, and fiat integration.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Shield className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Security & Compliance</h3>
            <p className="text-accent-700">
              Ensure regulatory compliance, KYC/AML integration, and enterprise-grade security for financial transactions.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Web3 payments and tokenization success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Real Estate Tokenization Platform"
              industry="Real Estate"
              challenge="A real estate investment firm wanted to enable fractional ownership of commercial properties through tokenization. They needed a secure platform for issuing, trading, and managing tokenized real estate assets while maintaining regulatory compliance."
              solution="Built a comprehensive tokenization platform on Ethereum with smart contracts for property ownership, dividend distribution, and governance. Created a user-friendly marketplace for trading tokens, integrated KYC/AML compliance, and ensured SEC regulatory compliance for securities tokens."
              results={[
                'Tokenized $100M+ in real estate assets',
                'Enabled fractional ownership for 1,000+ investors',
                'Reduced transaction costs by 80%',
                'Achieved full regulatory compliance'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Micropayment Platform for Content Creators"
              industry="Media & Entertainment"
              challenge="A content platform needed to enable micropayments for creators while keeping transaction fees low. Traditional payment systems charged high fees that made small payments uneconomical."
              solution="Developed a Web3 payment platform using blockchain for low-cost micropayments. Built digital wallets, integrated with multiple blockchains, and created a seamless user experience. Implemented instant settlement and low transaction fees."
              results={[
                'Enabled micropayments as low as $0.01',
                'Reduced transaction fees from 3% to 0.1%',
                'Processed 1M+ micropayments monthly',
                'Increased creator earnings by 40%'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build Your Web3 Payment Platform</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s create a next-generation payment and tokenization solution for your business.
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


