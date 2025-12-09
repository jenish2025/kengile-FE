import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { 
  Link2, Shield, Network, Cpu, Lock, Database, Zap, 
  CheckCircle, TrendingUp, Users, Globe, Server, 
  Activity, Code, Settings, Layers, GitBranch, Key,
  BarChart3, Clock, DollarSign, ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blockchain Infrastructure Services | Enterprise Private & Hybrid Networks | Kengile',
  description: 'Design, deploy, and manage enterprise blockchain networks with 99.99% uptime. Hyperledger, Ethereum, Corda expertise for private chains, consortium networks, and hybrid architectures.',
  keywords: 'blockchain infrastructure, private blockchain, enterprise blockchain, Hyperledger Fabric, Ethereum private, Corda, consortium blockchain, hybrid blockchain, distributed ledger, blockchain nodes, smart contracts',
}

export default function BlockchainInfrastructureServices() {
  return (
    <>
      <AnimatedHero
        title="Blockchain Infrastructure Services"
        subtitle="Enterprise Private & Hybrid Networks"
        description="Design, deploy, and manage blockchain networks with 99.99% uptime, enterprise-grade security, and comprehensive governance frameworks."
      />

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Trusted by Global Enterprises
            </h2>
            <p className="text-xl text-gray-600">Delivering enterprise blockchain infrastructure at scale</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Network className="w-10 h-10" />, value: '150+', label: 'Networks Deployed', color: 'purple' },
              { icon: <Server className="w-10 h-10" />, value: '5,000+', label: 'Nodes Managed', color: 'green' },
              { icon: <Activity className="w-10 h-10" />, value: '99.99%', label: 'Uptime SLA', color: 'indigo' },
              { icon: <Globe className="w-10 h-10" />, value: '40+', label: 'Countries Served', color: 'purple' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 text-center group">
              <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-black bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-700 bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Enterprise Blockchain Infrastructure Excellence
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Building enterprise blockchain infrastructure requires deep expertise in distributed systems, cryptography, consensus mechanisms, and network architecture. We design and deploy blockchain networks tailored for enterprise use cases, including <span className="font-semibold text-purple-600">private chains</span>, <span className="font-semibold text-pink-600">consortium networks</span>, and <span className="font-semibold text-indigo-600">hybrid architectures</span>.
          </p>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Our infrastructure solutions ensure high performance, enterprise-grade security, regulatory compliance, and comprehensive governance. From network design and smart contract deployment to node management and 24/7 monitoring, we provide end-to-end blockchain infrastructure services.
          </p>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Why Enterprise Blockchain?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Public blockchains trade privacy and performance for decentralization. Enterprise blockchains flip this equation — providing permissioned access, regulatory compliance, high throughput (1,000+ TPS), and sub-second finality while maintaining cryptographic security and auditability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Platform Expertise */}
      <Section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Enterprise Blockchain Platforms</h2>
            <p className="text-xl text-purple-200">Deep expertise across leading enterprise blockchain technologies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Hyperledger Fabric',
                description: 'Modular, permissioned blockchain platform with pluggable consensus, private data collections, and channel-based architecture.',
                features: ['Pluggable Consensus', 'Private Channels', 'Smart Contracts (Chaincode)', 'MSP Identity Management'],
                useCases: 'Supply Chain, Trade Finance, Healthcare',
                performance: '20,000+ TPS',
                language: 'Go, JavaScript, Java',
                gradient: 'from-blue-500 to-cyan-600',
                icon: <Layers className="w-12 h-12" />
              },
              {
                name: 'Ethereum Private',
                description: 'Private Ethereum networks using Quorum, Hyperledger Besu, or Geth with enterprise features and privacy layers.',
                features: ['EVM Compatible', 'Privacy Transactions', 'Smart Contracts (Solidity)', 'Enterprise Authorization'],
                useCases: 'DeFi, Asset Tokenization, DAOs',
                performance: '1,000+ TPS',
                language: 'Solidity, Vyper',
                gradient: 'from-purple-500 to-indigo-600',
                icon: <Code className="w-12 h-12" />
              },
              {
                name: 'R3 Corda',
                description: 'DLT platform designed for financial services with point-to-point architecture and legal prose integration.',
                features: ['Point-to-Point', 'Legal Contracts', 'UTXO Model', 'Notary Services'],
                useCases: 'Banking, Insurance, Securities',
                performance: '500+ TPS',
                language: 'Kotlin, Java',
                gradient: 'from-pink-500 to-rose-600',
                icon: <GitBranch className="w-12 h-12" />
              }
            ].map((platform, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
                <div className={`w-20 h-20 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-purple-200 mb-6 leading-relaxed">{platform.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-bold text-purple-300 uppercase mb-2">Key Features</div>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-xs text-purple-300 mb-1">Performance</div>
                      <div className="font-bold text-white">{platform.performance}</div>
                    </div>
                    <div>
                      <div className="text-xs text-purple-300 mb-1">Language</div>
                      <div className="font-bold text-white">{platform.language}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-purple-300 mb-1">Ideal For</div>
                    <div className="text-sm text-white font-medium">{platform.useCases}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Services */}
      <Section className="bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Comprehensive Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600">End-to-end blockchain network design, deployment, and management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Link2 className="w-10 h-10" />,
                title: 'Network Architecture Design',
                description: 'Design private, consortium, or hybrid blockchain networks optimized for your specific use case, compliance requirements, and performance needs.',
                features: ['Topology Planning', 'Consensus Selection', 'Channel Design', 'Capacity Planning'],
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                icon: <Server className="w-10 h-10" />,
                title: 'Node Deployment & Management',
                description: 'Deploy and manage blockchain nodes across multi-cloud and hybrid infrastructure with high availability, automated failover, and disaster recovery.',
                features: ['Multi-Cloud Deployment', 'Auto-Scaling', 'Load Balancing', 'Backup & Recovery'],
                gradient: 'from-pink-500 to-pink-600'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Security & Compliance',
                description: 'Implement comprehensive security controls including HSM integration, key management, network isolation, and regulatory compliance frameworks.',
                features: ['HSM Integration', 'Key Management', 'Access Controls', 'Audit Trails'],
                gradient: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Governance Frameworks',
                description: 'Establish governance models, permission management, and consensus mechanisms for secure and compliant multi-party blockchain operations.',
                features: ['Permission Models', 'Voting Mechanisms', 'Policy Enforcement', 'Member Onboarding'],
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: 'Smart Contract Development',
                description: 'Design, develop, and audit smart contracts with formal verification, security best practices, and comprehensive testing frameworks.',
                features: ['Contract Design', 'Security Audits', 'Testing & QA', 'Upgrade Patterns'],
                gradient: 'from-rose-500 to-red-600'
              },
              {
                icon: <Activity className="w-10 h-10" />,
                title: 'Monitoring & Operations',
                description: '24/7 monitoring, alerting, and incident response with comprehensive dashboards for network health, transaction throughput, and performance metrics.',
                features: ['Real-time Monitoring', 'Custom Dashboards', 'Alerting', 'Incident Response'],
                gradient: 'from-cyan-500 to-blue-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Architecture */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Enterprise Blockchain Architecture
            </h2>
            <p className="text-xl text-gray-600">Layered architecture for scalable, secure blockchain infrastructure</p>
          </div>

          <div className="space-y-6">
            {[
              {
                layer: 'Application Layer',
                components: ['Web3 APIs', 'Mobile SDKs', 'REST APIs', 'GraphQL Endpoints', 'WebSocket Streams'],
                description: 'Developer-friendly interfaces for blockchain interaction with comprehensive SDKs and documentation.',
                icon: <Globe className="w-8 h-8" />,
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                layer: 'Smart Contract Layer',
                components: ['Business Logic', 'Access Controls', 'State Management', 'Event Emissions', 'Upgrade Patterns'],
                description: 'Audited smart contracts implementing business logic with formal verification and security best practices.',
                icon: <Code className="w-8 h-8" />,
                gradient: 'from-pink-500 to-rose-600'
              },
              {
                layer: 'Consensus Layer',
                components: ['Raft/PBFT/PoA', 'Transaction Ordering', 'Block Validation', 'Finality Guarantees', 'Fork Resolution'],
                description: 'Pluggable consensus mechanisms optimized for enterprise requirements with deterministic finality.',
                icon: <GitBranch className="w-8 h-8" />,
                gradient: 'from-indigo-500 to-blue-600'
              },
              {
                layer: 'Network Layer',
                components: ['P2P Communication', 'TLS Encryption', 'Node Discovery', 'Message Broadcasting', 'Network Isolation'],
                description: 'Secure peer-to-peer networking with mutual TLS, firewall rules, and network segmentation.',
                icon: <Network className="w-8 h-8" />,
                gradient: 'from-cyan-500 to-teal-600'
              },
              {
                layer: 'Storage Layer',
                components: ['State Database', 'Block Storage', 'Transaction Logs', 'World State', 'Backup & Archival'],
                description: 'Persistent storage with CouchDB, LevelDB, or PostgreSQL backends and comprehensive backup strategies.',
                icon: <Database className="w-8 h-8" />,
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                layer: 'Infrastructure Layer',
                components: ['Kubernetes', 'Docker', 'Load Balancers', 'HSMs', 'Monitoring Stack'],
                description: 'Cloud-native infrastructure with container orchestration, auto-scaling, and enterprise-grade security.',
                icon: <Server className="w-8 h-8" />,
                gradient: 'from-orange-500 to-red-600'
              }
            ].map((layer, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-0 bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl overflow-hidden border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500">
                {/* Layer Info Panel */}
                <div className={`md:col-span-3 bg-gradient-to-br ${layer.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      {layer.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{layer.layer}</h3>
                    <p className="text-sm text-white/80">{layer.description}</p>
                  </div>
                </div>

                {/* Components Panel */}
                <div className="md:col-span-9 p-8">
                  <div className="flex flex-wrap gap-3">
                    {layer.components.map((component, i) => (
                      <div key={i} className="px-4 py-2 bg-white rounded-xl border-2 border-purple-200 text-gray-700 font-semibold hover:border-purple-400 hover:shadow-lg transition-all">
                        {component}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Security Features */}
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-indigo-200">Multi-layered security architecture for blockchain infrastructure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Key className="w-8 h-8" />, title: 'HSM Key Management', description: 'Hardware Security Modules (HSMs) for cryptographic key generation, storage, and signing with FIPS 140-2 Level 3 compliance.' },
              { icon: <Lock className="w-8 h-8" />, title: 'Identity & Access', description: 'Certificate-based identity management with MSP (Membership Service Provider) and fine-grained RBAC permissions.' },
              { icon: <Shield className="w-8 h-8" />, title: 'Network Isolation', description: 'VPC isolation, firewall rules, and network segmentation ensuring nodes communicate only with authorized peers.' },
              { icon: <Database className="w-8 h-8" />, title: 'Data Encryption', description: 'TLS 1.3 for data in transit, AES-256 for data at rest, and private data collections for confidential transactions.' },
              { icon: <Activity className="w-8 h-8" />, title: 'Audit Logging', description: 'Comprehensive audit trails of all transactions, access attempts, and configuration changes with tamper-proof logs.' },
              { icon: <CheckCircle className="w-8 h-8" />, title: 'Smart Contract Audits', description: 'Security audits, formal verification, and automated testing to identify vulnerabilities before deployment.' }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/10 hover:border-indigo-400/50 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-indigo-200 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits & ROI */}
      <Section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Business Impact & ROI
            </h2>
            <p className="text-xl text-gray-600">Measurable benefits of enterprise blockchain infrastructure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <DollarSign className="w-10 h-10" />, 
                metric: '60-80%', 
                label: 'Cost Reduction', 
                description: 'Eliminate intermediaries and reduce reconciliation overhead',
                color: 'green'
              },
              { 
                icon: <Clock className="w-10 h-10" />, 
                metric: '90%+', 
                label: 'Faster Settlement', 
                description: 'Real-time settlement vs. days with traditional systems',
                color: 'blue'
              },
              { 
                icon: <Shield className="w-10 h-10" />, 
                metric: '95%+', 
                label: 'Fraud Reduction', 
                description: 'Immutable records and cryptographic verification',
                color: 'purple'
              },
              { 
                icon: <TrendingUp className="w-10 h-10" />, 
                metric: '100%', 
                label: 'Transparency', 
                description: 'Full audit trails and real-time visibility for all parties',
                color: 'indigo'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <div className={`text-5xl font-black bg-gradient-to-r from-${benefit.color}-600 to-${benefit.color}-700 bg-clip-text text-transparent mb-2`}>
                  {benefit.metric}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">{benefit.label}</div>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Blockchain infrastructure deployments driving real business value</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Global Supply Chain Traceability Network"
              industry="Logistics & Manufacturing"
              challenge="A Fortune 500 manufacturing company needed end-to-end visibility across their multi-tier supply chain spanning 15 countries and 500+ suppliers. Existing systems had data silos, lack of real-time tracking, and no immutable audit trails — leading to $50M+ annual losses from counterfeiting, quality issues, and compliance penalties."
              solution="Designed and deployed a Hyperledger Fabric blockchain network with 80+ nodes across 5 continents. Implemented 15+ smart contracts for product provenance, quality certifications, customs clearance, and warranty management. Integrated with SAP, Oracle ERP, and IoT sensor data. Created mobile apps for suppliers and consumer-facing product verification."
              results={[
                'Reduced supply chain fraud by 95% with cryptographic provenance',
                'Improved traceability from 5 days to real-time (<5 seconds)',
                'Processed 10M+ transactions/month with 99.99% uptime',
                'Reduced reconciliation costs by 70% ($15M annual savings)',
                'Enabled product recalls 10x faster with precise tracking',
                'Achieved ISO 28000 compliance across all tiers'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Multi-Bank Trade Finance Consortium"
              industry="Banking & Financial Services"
              challenge="A consortium of 12 international banks needed to digitize trade finance processes that involved 5-10 day document verification cycles, 15-20% error rates in manual processing, and $500M+ tied up in working capital. Existing systems required trusted intermediaries and had no real-time settlement."
              solution="Built a Corda-based private blockchain network with PoA consensus and 40+ validator nodes. Developed smart contracts for Letters of Credit, Bills of Lading, and trade documentation. Integrated with SWIFT, central bank systems, and customs APIs. Implemented HSM-based key management and regulatory compliance frameworks for 8 jurisdictions."
              results={[
                'Reduced trade finance processing from 7-10 days to 24 hours',
                'Eliminated 85% of manual document verification errors',
                'Freed up $400M+ in working capital through faster settlement',
                'Reduced operational costs by 60% across all member banks',
                'Achieved sub-second finality for payment settlements',
                'Full regulatory compliance (Basel III, KYC/AML, GDPR)'
              ]}
              delay={0.1}
            />
            <CaseStudyCard
              title="Healthcare Data Sharing Network"
              industry="Healthcare & Life Sciences"
              challenge="A regional healthcare network comprising 25 hospitals, 200+ clinics, and 5 insurance providers struggled with patient data interoperability. Medical record exchange took 3-7 days, led to duplicate tests costing $2B+ annually, and created patient safety risks. HIPAA compliance was complex with centralized data stores."
              solution="Deployed a Hyperledger Fabric permissioned network with private data collections for PHI. Implemented FHIR-compliant smart contracts for consent management, data access controls, and audit logging. Integrated with Epic, Cerner, and Allscripts EHR systems. Built patient mobile app for consent management and medical record access."
              results={[
                'Enabled real-time medical record exchange across all providers',
                'Reduced duplicate diagnostic tests by 40% ($800M savings)',
                'Improved patient safety with complete medication history access',
                'Achieved 100% HIPAA compliance with cryptographic audit trails',
                'Processed 5M+ consent transactions with patient control',
                'Reduced administrative overhead by 50% in records departments'
              ]}
              delay={0.2}
            />
            <CaseStudyCard
              title="Energy Trading & Carbon Credits Platform"
              industry="Energy & Utilities"
              challenge="A renewable energy consortium needed a transparent marketplace for peer-to-peer energy trading and carbon credit tracking across 500+ solar farms, wind installations, and corporate buyers. Existing centralized systems had high intermediary fees (15-20%), 48-hour settlement times, and no transparent carbon credit verification."
              solution="Built an Ethereum-based private network using Hyperledger Besu with ERC-20 tokens for energy credits and ERC-721 NFTs for carbon offsets. Developed smart contracts for automated energy trading, real-time settlement, and IoT-verified carbon credit issuance. Integrated with smart meters, grid operators, and renewable energy asset monitoring systems."
              results={[
                'Enabled real-time P2P energy trading with <2 second settlement',
                'Reduced intermediary fees from 15% to 0.5% (300x improvement)',
                'Verified and tokenized 2M+ tons of CO2 offset credits',
                'Increased renewable energy utilization by 25% through efficient trading',
                'Processed $50M+ in energy transactions with zero fraud',
                'Achieved compliance with EU ETS and voluntary carbon markets'
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </Section>

      {/* Implementation Process */}
      <Section className="bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">Proven methodology for enterprise blockchain deployment</p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Discovery & Design',
                duration: '2-4 weeks',
                activities: ['Use case analysis', 'Platform selection', 'Network topology design', 'Consensus mechanism selection', 'Governance framework', 'Security architecture'],
                deliverables: 'Technical architecture document, network design specifications, smart contract requirements',
                icon: <Settings className="w-8 h-8" />,
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                phase: 'Phase 2',
                title: 'Development & Testing',
                duration: '6-10 weeks',
                activities: ['Smart contract development', 'Node configuration', 'Integration development', 'Security auditing', 'Performance testing', 'Chaos engineering'],
                deliverables: 'Audited smart contracts, integration APIs, test results, security audit report',
                icon: <Code className="w-8 h-8" />,
                gradient: 'from-pink-500 to-rose-600'
              },
              {
                phase: 'Phase 3',
                title: 'Deployment',
                duration: '2-4 weeks',
                activities: ['Infrastructure provisioning', 'Node deployment', 'Smart contract deployment', 'Integration testing', 'Security hardening', 'Monitoring setup'],
                deliverables: 'Production blockchain network, deployed contracts, monitoring dashboards, runbooks',
                icon: <Zap className="w-8 h-8" />,
                gradient: 'from-indigo-500 to-blue-600'
              },
              {
                phase: 'Phase 4',
                title: 'Operations & Support',
                duration: 'Ongoing',
                activities: ['24/7 monitoring', 'Incident response', 'Performance optimization', 'Scaling & upgrades', 'Governance support', 'Training & documentation'],
                deliverables: 'SLA-backed support, monthly reports, optimization recommendations, training materials',
                icon: <Activity className="w-8 h-8" />,
                gradient: 'from-cyan-500 to-teal-600'
              }
            ].map((step, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-0 bg-white rounded-3xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500">
                {/* Phase Info */}
                <div className={`md:col-span-3 bg-gradient-to-br ${step.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="text-sm font-bold uppercase tracking-wider mb-2 text-white/80">{step.phase}</div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-9 p-8">
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-purple-600 uppercase mb-3">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.activities.map((activity, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="font-medium">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-purple-200">
                    <h4 className="text-sm font-bold text-purple-600 uppercase mb-2">Deliverables</h4>
                    <p className="text-gray-700">{step.deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600">Industry-leading tools and frameworks for blockchain infrastructure</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: 'Platforms',
                technologies: ['Hyperledger Fabric', 'Ethereum/Besu', 'R3 Corda', 'Hyperledger Sawtooth', 'Quorum', 'Polygon Edge'],
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                category: 'Infrastructure',
                technologies: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'AWS/Azure/GCP', 'Helm Charts'],
                gradient: 'from-pink-500 to-rose-600'
              },
              {
                category: 'Security',
                technologies: ['HashiCorp Vault', 'AWS KMS', 'Thales HSM', 'Certbot/Let\'s Encrypt', 'OpenSSL', 'Trivy/Anchore'],
                gradient: 'from-indigo-500 to-blue-600'
              },
              {
                category: 'Monitoring',
                technologies: ['Prometheus', 'Grafana', 'Elasticsearch', 'Jaeger', 'PagerDuty', 'Splunk'],
                gradient: 'from-cyan-500 to-teal-600'
              }
            ].map((stack, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500">
                <div className={`w-14 h-14 bg-gradient-to-br ${stack.gradient} rounded-2xl flex items-center justify-center mb-4 text-white`}>
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, i) => (
                    <div key={i} className="px-3 py-2 bg-white rounded-lg border border-purple-200 text-sm font-medium text-gray-700 hover:border-purple-400 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What\'s the difference between private and public blockchains?',
                answer: 'Public blockchains (Bitcoin, Ethereum mainnet) are permissionless — anyone can join, read, and write. Private/enterprise blockchains are permissioned — only authorized participants can join and transact. Private blockchains offer better performance (1,000+ TPS vs. 15-30 TPS), privacy, regulatory compliance, and governance controls — essential for enterprise use cases.'
              },
              {
                question: 'How long does it take to deploy a blockchain network?',
                answer: 'A production-ready enterprise blockchain network typically takes 12-18 weeks from kickoff to launch, including discovery (2-4 weeks), development (6-10 weeks), testing (2-3 weeks), and deployment (2-4 weeks). PoC/pilot deployments can be done in 4-6 weeks. Timeline depends on complexity, integration requirements, and governance structure.'
              },
              {
                question: 'What consensus mechanisms do you recommend?',
                answer: 'For enterprise blockchains, we recommend: Raft (high performance, 1000+ TPS, crash fault tolerant), PBFT (Byzantine fault tolerant, financial services), or PoA (Proof of Authority, energy efficient). Public blockchain consensus like PoW is unsuitable for enterprises due to energy consumption and slow finality.'
              },
              {
                question: 'How do you ensure regulatory compliance?',
                answer: 'We implement comprehensive compliance frameworks including: data residency controls (ensuring data stays in specific jurisdictions), GDPR-compliant privacy features (right to erasure via off-chain data), audit trails with tamper-proof logs, identity verification (KYC/AML integration), and smart contract governance for regulatory rules enforcement.'
              },
              {
                question: 'What are the ongoing operational costs?',
                answer: 'Operational costs depend on network size and SLA requirements. Typical monthly costs: small network (5-10 nodes) $5K-10K, medium network (20-50 nodes) $20K-40K, large network (100+ nodes) $80K-150K+. Includes infrastructure, monitoring, support, security updates, and backup/DR. Managed services typically cost 40-60% less than building in-house teams.'
              },
              {
                question: 'Can you migrate existing data to blockchain?',
                answer: 'Yes. We create ETL pipelines to migrate existing data from databases, ERPs, or legacy systems to blockchain. Typically involves: data validation and cleansing, batch migration of historical records, smart contract initialization with current state, parallel running of old and new systems during transition (2-4 weeks), and full cutover with rollback plan.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Network className="w-10 h-10" />
          </div>
          <h2 className="text-5xl font-black mb-6">Ready to Deploy Your Blockchain Network?</h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Our blockchain infrastructure team has deployed 150+ enterprise networks across financial services, supply chain, healthcare, and energy sectors. Let&apos;s discuss your requirements and design a blockchain solution that delivers measurable ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact-us"
              className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-purple-600 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <span>Start Your Blockchain Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/insights/blockchain-enterprise"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <span>Read Technical Deep Dive</span>
            </Link>
          </div>

          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-purple-100 mb-4">Trusted by leading enterprises worldwide</p>
            <div className="flex justify-center space-x-8 text-sm text-purple-200">
              <span>✓ 150+ Networks Deployed</span>
              <span>✓ 99.99% Uptime SLA</span>
              <span>✓ 24/7 Expert Support</span>
              <span>✓ Multi-Cloud Deployment</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

