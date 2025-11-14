import { Metadata } from 'next'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { 
  Brain, 
  Server, 
  Cloud, 
  Settings, 
  Database,
  Code,
  Zap,
  Leaf,
  BarChart3,
  Coins,
  Link2,
  Wallet,
  Cpu,
  Satellite,
  Radio
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Services Portfolio | AI, Cloud, Data, Energy & Blockchain Solutions',
  description: 'Explore our full-stack IT services — from AI infrastructure and data centers to blockchain systems and smart energy integration.',
  keywords: 'IT services, AI infrastructure, cloud services, data center, blockchain, energy solutions, space connectivity',
}

export default function Services() {
  const aiServices = [
    {
      title: 'AI Infrastructure Services',
      description: 'End-to-end AI infrastructure services — GPU cloud setup, distributed training, MLOps pipelines, and performance optimization.',
      href: '/services/ai-infrastructure-services',
      icon: <Brain size={32} />,
    },
    {
      title: 'Data Center Modernization',
      description: 'Transform traditional IT environments into intelligent, automated, energy-efficient data centers built for AI workloads.',
      href: '/services/data-center-modernization',
      icon: <Server size={32} />,
    },
    {
      title: 'Cloud & HPC Engineering',
      description: 'Design hybrid cloud and HPC systems that deliver scalability, security, and AI-ready compute efficiency.',
      href: '/services/cloud-hpc-engineering',
      icon: <Cloud size={32} />,
    },
    {
      title: 'DevOps & SRE Automation',
      description: 'Streamline your IT delivery with DevOps pipelines, Kubernetes management, and real-time observability dashboards.',
      href: '/services/devops-sre-automation',
      icon: <Settings size={32} />,
    },
    {
      title: 'Data Engineering & Analytics',
      description: 'Deploy scalable data pipelines, ETL frameworks, and analytics platforms to power your AI and business intelligence systems.',
      href: '/services/data-engineering-analytics',
      icon: <Database size={32} />,
    },
    {
      title: 'AI Application Development',
      description: 'Build and deploy intelligent AI applications, LLMs, and automation workflows with enterprise-grade scalability and compliance.',
      href: '/services/ai-application-development',
      icon: <Code size={32} />,
    },
  ]

  const energyServices = [
    {
      title: 'Smart Energy IT Solutions',
      description: 'AI and IoT solutions for power forecasting, load balancing, and energy analytics for modern utilities.',
      href: '/services/smart-energy-it-solutions',
      icon: <Zap size={32} />,
    },
    {
      title: 'Green Cloud & Sustainable IT',
      description: 'Build green data centers and carbon-aware cloud systems to reduce energy costs and meet sustainability goals.',
      href: '/services/green-cloud-sustainable-it',
      icon: <Leaf size={32} />,
    },
    {
      title: 'Digital Energy Platforms',
      description: 'Integrate sensors, IoT, and predictive analytics to optimize energy use across large-scale IT and industrial environments.',
      href: '/services/digital-energy-platforms',
      icon: <BarChart3 size={32} />,
    },
    {
      title: 'Renewable Energy Automation',
      description: 'Automate and monitor renewable energy operations with advanced AI and IoT infrastructure.',
      href: '/services/renewable-energy-automation',
      icon: <Cpu size={32} />,
    },
  ]

  const blockchainServices = [
    {
      title: 'Stablecoin Development Services',
      description: 'End-to-end development of stablecoins and digital assets with blockchain integration, security, and scalability.',
      href: '/services/stablecoin-development-services',
      icon: <Coins size={32} />,
    },
    {
      title: 'Blockchain Infrastructure Services',
      description: 'Design, deploy, and manage blockchain networks with enterprise-grade reliability and governance frameworks.',
      href: '/services/blockchain-infrastructure-services',
      icon: <Link2 size={32} />,
    },
    {
      title: 'Web3 Payments & Tokenization',
      description: 'Build next-gen payment platforms with tokenized assets, digital wallets, and on-chain settlement solutions.',
      href: '/services/web3-payments-tokenization-platforms',
      icon: <Wallet size={32} />,
    },
    {
      title: 'AI & Blockchain Integration',
      description: 'Integrate AI intelligence with blockchain for transparent, decentralized IT operations and smart automation.',
      href: '/services/ai-blockchain-integration',
      icon: <Cpu size={32} />,
    },
  ]

  const spaceServices = [
    {
      title: 'Satellite & Space Internet Solutions',
      description: 'Build and manage satellite-based internet infrastructure for low-latency, high-availability global connectivity.',
      href: '/services/satellite-space-internet-solutions',
      icon: <Satellite size={32} />,
    },
    {
      title: 'Space Data Analytics',
      description: 'Use AI and data engineering to analyze satellite imagery and deliver predictive insights for space and earth observation.',
      href: '/services/space-data-analytics',
      icon: <BarChart3 size={32} />,
    },
    {
      title: 'Space Energy & Edge Systems',
      description: 'Build AI-optimized energy management and edge computing systems for space networks and remote environments.',
      href: '/services/space-energy-edge-systems',
      icon: <Radio size={32} />,
    },
  ]

  return (
    <>
      <AnimatedHero
        title="Our Services"
        subtitle="Comprehensive IT Solutions"
        description="Explore our full-stack IT services — from AI infrastructure and data centers to blockchain systems and smart energy integration."
      />

      {/* AI & Infrastructure */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            AI & Infrastructure Services
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Building scalable, intelligent infrastructure for AI workloads and high-performance computing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Energy & Sustainability */}
      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Energy & Sustainability IT Services
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Smart energy solutions and sustainable IT infrastructure for a greener future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {energyServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Blockchain & Digital Finance */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Blockchain & Digital Finance IT Services
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Enterprise blockchain solutions and decentralized finance infrastructure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blockchainServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Space Connectivity */}
      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Space Connectivity & IoT Services
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Satellite-based connectivity and space technology solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaceServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>
    </>
  )
}


