import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import IndustryCard from '@/components/IndustryCard'
import {
  Network,
  Shield,
  Database,
  Zap,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Users,
  Server,
  Activity,
  Code,
  Layers,
  ArrowRight,
  Cloud,
  DollarSign,
  Settings,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blockchain Infrastructure Services | Kengile',
  description:
    'Build secure, scalable blockchain networks with Kengile’s Blockchain Infrastructure Services. Ensure high availability, optimized operations, and reliability.',
  keywords:
    'blockchain infrastructure, enterprise blockchain, node infrastructure, validator nodes, BIaaS, distributed ledger, smart contracts, blockchain monitoring',
}

export default function BlockchainInfrastructureServices() {
  return (
    <>
      <AnimatedHero
        title="Blockchain Infrastructure Services"
        subtitle="Build reliable blockchain networks that scale with your business"
        description="Build reliable blockchain infrastructure with Kengile’s Blockchain Infrastructure Services. Deploy secure networks, maintain high availability, and scale decentralized systems with confidence."
        ctaText="Start Free Assessment"
        ctaLink="/contact-us"
        secondaryCtaText="See Our Work"
        secondaryCtaLink="/insights-case-studies"
      />

      {/* Stats */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Enterprise Networks Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                35%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Less Operational Overhead
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Transaction Network Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Managed Blockchain Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Why Blockchain Infrastructure Is Essential for Business Growth
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Old and cumbersome infrastructure can be a barrier for blockchain initiatives. Centralized systems, old
            infrastructure, and lack of interoperability can cause delays, limit the scope for scaling, and make things
            difficult as Web3 adoption and regulatory pressures increase. A new blockchain infrastructure backbone can be
            a game-changer: a secure, scalable, and reliable decentralized infrastructure.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            When node management is easy, performance is good, and things are automated, the focus can be on innovation,
            not infrastructure upkeep. Kengile is built to support this new infrastructure, providing production-ready
            infrastructure for organizations to scale with confidence.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Blockchain Infrastructure Services Tailored to Your Business
          </h2>
          <p className="text-lg text-accent-700">
            Our team provides top-tier blockchain infrastructure services, ensuring security, scalability, and high
            availability for your decentralized networks. We cover all key services for your blockchain infrastructure,
            keeping your initiatives running smoothly and on track with your business needs.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Node Infrastructure Development</h3>
              <p className="text-accent-600">
                Develop and deploy high-performance and reliable validator nodes, full nodes, and archive nodes for
                real-time transaction processing across various blockchain networks.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Cloud Blockchain Platform Architecture</h3>
              <p className="text-accent-600">
                Develop cloud-based blockchain platforms on AWS, Azure, Google Cloud, or a combination of these.
                Implement scalable and affordable Blockchain Infrastructure as a Service (BIaaS) for your enterprise.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Layers className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Distributed Ledger Solutions</h3>
              <p className="text-accent-600">
                Develop private, consortium, and hybrid blockchains with optimized storage, high-speed consensus, and
                seamless integration across participants.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Real-Time Blockchain Event Streaming</h3>
              <p className="text-accent-600">
                Implement real-time architectures using WebSockets, GraphQL, and other event-driven methods. React and
                respond immediately to on-chain events for better decision-making.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <BarChart3 className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Blockchain Analytics and Monitoring</h3>
              <p className="text-accent-600">
                Connect your infrastructure with analytics and monitoring tools for a better view of transactions,
                network monitoring, performance evaluation, and business insights.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Security and Compliance Frameworks</h3>
              <p className="text-accent-600">
                Develop cryptographically secure blockchain networks with robust security and compliance measures. Ensure
                compliance with regulations like SOC 2, GDPR, and other industry standards for data integrity and
                network trust.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-white">
        <SectionHeader
          title="Industries We Serve With Our Blockchain Infrastructure Expertise"
          subtitle="At Kengile, we provide blockchain infrastructure as a service, customized to meet the requirements of different industries. Our experts develop infrastructure solutions that can be scaled up, secured, and made enterprise-ready, transforming how businesses use blockchain technology."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard
              title="Financial Services"
              description="We develop Blockchain Infrastructure Services for the financial sector to provide secure, compliant, and efficient transaction processing."
              useCases={[
                'Secure custody solutions for digital assets',
                'Compliant token issuance solutions',
                'Real-time settlement and clearing solutions',
              ]}
            />
            <IndustryCard
              title="Supply Chain"
              description="We build blockchain infrastructure for the supply chain that is modern, flexible, and enterprise-ready."
              useCases={[
                'End-to-end supply chain visibility solutions',
                'Automated smart contract solutions',
                'Immutable audit trail solutions for compliance',
              ]}
            />
            <IndustryCard
              title="Healthcare & Life Sciences"
              description="We develop blockchain infrastructure for healthcare that is secure, compliant, and enterprise-ready, providing solutions for patient data privacy and interoperability."
              useCases={[
                'HIPAA-compliant health data exchanges',
                'Pharmaceutical supply chain tracking',
                'Patient-controlled health record systems',
              ]}
            />
            <IndustryCard
              title="Retail & E-Commerce"
              description="We equip retailers with blockchain infrastructure as a service for loyalty programs, authenticity verification, and customer engagement platforms."
              useCases={[
                'Tokenized loyalty and rewards programs',
                'Product authenticity verification systems',
                'Web3-based customer engagement platforms',
              ]}
            />
            <IndustryCard
              title="Government & Public Sector"
              description="We develop scalable blockchain platforms for government entities for digital identity, voting systems, and transparent public records."
              useCases={[
                'Digital identity management systems',
                'Transparent public procurement platforms',
                'Immutable land registries',
              ]}
            />
            <IndustryCard
              title="Gaming & Digital Assets"
              description="We deliver scalable blockchain infrastructure for gaming studios and NFT platforms."
              useCases={[
                'High-speed NFT minting platforms',
                'Cross-game asset interoperability',
                'Scalable gaming token economies',
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/industries-we-serve"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
            >
              View All Industries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Client Success Stories"
            subtitle="See how Kengile helps businesses transform their blockchain infrastructure to improve performance, reduce costs, and achieve operational excellence. These case studies showcase measurable results from real-world transformations."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="DeFi Trading Platform for Global Exchange"
              industry="Financial Services"
              challenge="A global financial exchange struggled with settlement delays and high transaction costs. Legacy infrastructure couldn't handle the volume of cross-border transactions, leading to failed trades and customer complaints."
              solution="Kengile engineered a high-performance blockchain trading platform using Hyperledger and custom consensus mechanisms. We built real-time settlement pipelines processing thousands of transactions per second, with smart contracts automating compliance checks."
              results={[
                '65% reduction in settlement time',
                '$12M annual cost savings',
                '10K+ TPS achieved',
                '99.99% uptime maintained',
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Supply Chain Traceability for Global Manufacturer"
              industry="Manufacturing"
              challenge="A global manufacturing corporation could not track components across 15 countries. Fragmented data prevented quality assurance and accurate compliance reporting, leading to recalls and regulatory penalties."
              solution="Kengile built an enterprise supply chain platform on Polygon, unifying supplier data, IoT sensors, and manufacturing records. We implemented real-time traceability and predictive quality analytics using on-chain attestations."
              results={[
                '45% reduction in recalls',
                '$20M annual savings achieved',
                '15 countries unified',
                '100% compliance achieved',
              ]}
              delay={0.1}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
            >
              View More Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="How Your Business Benefits from Blockchain Infrastructure"
            subtitle="Imagine a way into the decentralized economy that's easier and faster than ever before. Our blockchain infrastructure as a service gives you a better way to deploy your blockchain network, with easier operations, greater reliability, and greater flexibility to innovate."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Fast Blockchain Deployment</h3>
              <p className="text-accent-600 text-sm">
                Launch your enterprise network and decentralized applications in an instant with our ready-to-use nodes and
                pipeline.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <CheckCircle className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Sturdy and Reliable Operations</h3>
              <p className="text-accent-600 text-sm">
                Keep your system always available with constant node monitoring and automatic failover. Ensure consistent
                performance and uninterrupted blockchain operations.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Growth-Ready Networks</h3>
              <p className="text-accent-600 text-sm">
                Scale your nodes, transactions, and smart contracts with ease to accommodate your growing network.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Cost-Optimized Infrastructure</h3>
              <p className="text-accent-600 text-sm">
                Optimize your infrastructure and cloud costs with our efficient consensus algorithm and smart infrastructure
                management.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <BarChart3 className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Analytics and AI at Your Fingertips</h3>
              <p className="text-accent-600 text-sm">
                Take advantage of our on-chain analytics and AI-based insights and predictions integrated into your
                blockchain infrastructure and AI infrastructure for smarter, predictive network insights.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Automated Network Management</h3>
              <p className="text-accent-600 text-sm">
                Simplify your operations with our automated network management and reduce your operational hassles.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Enterprise-Grade Technologies We Work With"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Blockchain Protocols</h3>
              <p className="text-accent-700 text-sm">
                Ethereum | Polygon | Solana | Hyperledger Fabric | Avalanche | Cosmos
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Smart Contract Development</h3>
              <p className="text-accent-700 text-sm">
                Solidity | Rust | Move | Vyper | Hardhat | Foundry
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Cloud Platforms</h3>
              <p className="text-accent-700 text-sm">
                AWS (EKS, Lambda) | Azure (AKS, Functions) | GCP (GKE, Cloud Run)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Node Infrastructure</h3>
              <p className="text-accent-700 text-sm">
                Geth | Lighthouse | Prysm | Tendermint | Substrate | Cosmos SDK
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Indexing &amp; Data</h3>
              <p className="text-accent-700 text-sm">
                The Graph | Goldsky | Subsquid | Dune Analytics | Flipside
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Security &amp; Monitoring</h3>
              <p className="text-accent-700 text-sm">
                OpenZeppelin | Slither | MythX | Tenderly | Forta | Chainlink
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Blockchain Infrastructure Development Process"
            subtitle="Kengile has a well-defined, production-level process for designing, implementing, and optimizing enterprise blockchain infrastructure. Each phase is designed with a focus on high availability, scalability, and security, while minimizing downtime."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Blockchain Network Assessment</h3>
                <p className="text-accent-600">
                  Review your blockchain infrastructure in its entirety, including nodes, smart contracts, and network
                  configuration. Identify areas of inefficiency, security vulnerabilities, and scalability issues to
                  develop a comprehensive implementation strategy.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Infrastructure Architecture &amp; Protocol Design
                </h3>
                <p className="text-accent-600">
                  Design production-level infrastructure with optimal consensus algorithms, node configurations, network
                  design, and security mechanisms. Technology selection is aligned with your strategy for performance,
                  regulatory, and scalability requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Node &amp; Smart Contract Deployment</h3>
                <p className="text-accent-600">
                  Deploy nodes and smart contracts, configure consensus algorithms, and perform security audits. Continuous
                  validation ensures high availability, security, and optimal performance of the blockchain network.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Network Launch &amp; Optimization</h3>
                <p className="text-accent-600">
                  Launch with zero downtime, optimize performance, lower transaction costs, establish monitoring and
                  notification systems, and provide knowledge transfer for effective management and scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Kengile */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Choose Kengile for Blockchain Infrastructure Solutions"
            subtitle="Creating modern blockchain systems is a science of knowledge, planning, and execution. At Kengile, we have developed effective strategies and expertise to build a modern, secure, and highly optimized blockchain platform."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Users className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Seasoned Blockchain Engineers</h3>
              <p className="text-accent-600 text-sm">
                Seasoned blockchain technology engineers will lead your project, ensuring the delivery of your platform
                with maximum reliability and expert guidance.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Layers className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Protocol Agnostic Approach</h3>
              <p className="text-accent-600 text-sm">
                Our solutions are designed with your business requirements, not vendor commissions, supporting any
                blockchain protocol for maximum flexibility.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Zero Downtime Delivery</h3>
              <p className="text-accent-600 text-sm">
                Zero downtime is ensured with our phased delivery process, keeping your business running with minimal
                disruption during migration and deployment.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Measurable ROI</h3>
              <p className="text-accent-600 text-sm">
                We work with you to establish measurable metrics for your project and share weekly progress for
                transparency and maximum business value.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Security First Design</h3>
              <p className="text-accent-600 text-sm">
                Security best practices are used to design your blockchain platform, protecting your critical
                infrastructure and sensitive business information.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">24/7 Support</h3>
              <p className="text-accent-600 text-sm">
                We are with you every step of the way with 24/7 support for a minimum of 12 months after your go-live to
                ensure operational excellence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            subtitle="Complementary solutions to enhance your blockchain capabilities."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/cloud-hpc-engineering"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                Cloud &amp; HPC Engineering
              </h3>
              <p className="text-accent-600 mb-4">
                Scale your compute infrastructure to support blockchain networks.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/data-engineering-analytics"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Database className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                Data Engineering Services
              </h3>
              <p className="text-accent-600 mb-4">
                Build data pipelines and manage distributed ledger data.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/devops-sre-automation"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Activity className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                DevOps &amp; SRE Automation
              </h3>
              <p className="text-accent-600 mb-4">
                Ensure reliable and secure blockchain deployment and operations.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'How long does it take to roll out a blockchain network?',
                answer:
                  'The duration of a blockchain network rollout varies based on the complexity of the project, such as the number of nodes, smart contracts, and existing infrastructure. Generally, a production-ready version takes between 8–16 weeks to develop. We follow a flexible development process, allowing you to experience the benefits of the network early on while keeping it stable, secure, and optimized.',
              },
              {
                question: 'What kind of ROI should we expect, and when?',
                answer:
                  'ROI varies based on the specific use case, transaction volume, and automation strategies. In most instances, clients experience significant benefits within 3–6 months, such as cost savings, faster transactions, increased transparency, and enhanced security. The overall ROI will depend on how well your organization utilizes the power of blockchain.',
              },
              {
                question: 'How do you protect the security of our blockchain network?',
                answer:
                  'We ensure that the security of the blockchain network is addressed at all stages of development. We implement a zero-trust policy, ensure that all data transmitted between nodes and smart contracts is encrypted, and constantly monitor the network with alerts for suspicious activity to prevent cyber attacks.',
              },
              {
                question: 'Will the infrastructure meet regulatory requirements?',
                answer:
                  'Compliance is integrated into our design. Our solutions ensure your network is compliant with SOC 2, GDPR, CCPA, and various industry standards such as PCI-DSS for financial services.',
              },
              {
                question: 'Can your team connect our blockchain infrastructure with existing systems?',
                answer:
                  'Yes. Our team is vendor-agnostic and ensures seamless integration with your legacy systems, smart contracts, ERP systems, and other enterprise applications.',
              },
              {
                question: 'How will our team operate and maintain the blockchain infrastructure?',
                answer:
                  'We provide extensive knowledge transfer and training sessions to your teams so they can manage and monitor your blockchain infrastructure on their own, without relying entirely on our teams.',
              },
              {
                question: 'Do you provide ongoing monitoring and support?',
                answer:
                  'Yes. Our managed blockchain solutions include 24x7 monitoring and support to ensure your blockchain infrastructure is always running optimally.',
              },
              {
                question: 'How scalable is your blockchain infrastructure?',
                answer:
                  'Our blockchain solutions are designed to scale both horizontally and vertically, handling more nodes, more smart contracts, and more transactions. Scalability is integrated into our design from the beginning to accommodate your growing needs without compromising performance and reliability.',
              },
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Blockchain Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation with our Blockchain Infrastructure Services experts to discuss your challenges
            and explore how we can help you unlock the full potential of distributed ledger technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Assessment
            </Link>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
