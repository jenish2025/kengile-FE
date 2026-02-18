import { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
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
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - Kengile",
  description:
    "Kengile offers a wide range of IT services, including AI-ready infrastructure, modern data centers, blockchain solutions, energy systems, and space connectivity to help businesses grow.",
  keywords:
    "IT services, AI infrastructure, cloud services, data center, blockchain, energy solutions, space connectivity",
};

export default function Services() {
  const aiServices = [
    {
      title: "AI Infrastructure Services",
      description:
        "Our IT experts provide end-to-end AI infrastructure services with GPU cloud setup, distributed training environments, MLOps pipelines, and performance tuning for enterprise AI workloads.",
      features: [
        "GPU cluster design & deployment",
        "Distributed training orchestration",
        "MLOps and model lifecycle management",
        "Performance monitoring and optimization",
      ],
      icon: <Brain className="text-white" size={36} />,
      colorTheme: "blue" as const,
    },
    {
      title: "Data Center Modernization",
      description:
        "We help enterprises upgrade traditional setups to intelligent, automated, energy-efficient data centers built for AI and modern computing. Our expertise ensures a smooth modernization path.",
      features: [
        "Legacy infrastructure assessment",
        "Hybrid cloud integration",
        "AI-optimized cooling systems",
        "Automated operations (AIOps)",
      ],
      icon: <Server className="text-white" size={36} />,
      colorTheme: "cyan" as const,
    },
    {
      title: "Cloud & HPC Engineering",
      description:
        "Our team designs and builds hybrid cloud and high-performance computing systems that deliver strong scalability, security, and AI-ready compute power for demanding workloads.",
      features: [
        "Multi-cloud architecture design",
        "HPC cluster optimization",
        "Kubernetes orchestration",
        "Cost optimization and FinOps",
      ],
      icon: <Cloud className="text-white" size={36} />,
      colorTheme: "purple" as const,
    },
    {
      title: "DevOps & SRE Automation",
      description:
        "Kengile's DevOps and SRE experts simplify IT delivery with automated pipelines, Kubernetes management, infrastructure as code, and real-time observability dashboards for strong operational reliability.",
      features: [
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)",
        "Kubernetes and container management",
        "Observability and monitoring",
      ],
      icon: <Settings className="text-white" size={36} />,
      colorTheme: "teal" as const,
    },
    {
      title: "Data Engineering & Analytics",
      description:
        "Our data engineering team builds scalable pipelines, ETL frameworks, and analytics platforms that power AI initiatives, business intelligence, and confident data-driven decisions.",
      features: [
        "Data lake and warehouse design",
        "Real-time streaming pipelines",
        "BI and visualization platforms",
        "Data governance frameworks",
      ],
      icon: <Database className="text-white" size={36} />,
      colorTheme: "emerald" as const,
    },
    {
      title: "AI Application Development",
      description:
        "Kengile develops intelligent AI applications, custom LLMs, and advanced automation workflows with enterprise-grade security, scalability, and compliance at the core.",
      features: [
        "Custom LLM development and fine-tuning",
        "RAG and knowledge systems",
        "AI-powered automation workflows",
        "Enterprise AI security and compliance",
      ],
      icon: <Code className="text-white" size={36} />,
      colorTheme: "orange" as const,
    },
  ];

  const energyServices = [
    {
      title: "Smart Energy IT Solutions",
      description:
        "Our experts use AI and IoT technologies to enable accurate power forecasting, intelligent load control, and deep energy analytics for modern utilities and grid operators.",
      features: [
        "AI-powered demand forecasting",
        "Grid optimization algorithms",
        "IoT sensor integration",
        "Real-time energy dashboards",
      ],
      icon: <Zap className="text-white" size={36} />,
      colorTheme: "green" as const,
    },
    {
      title: "Green Cloud & Sustainable IT",
      description:
        "We design environmentally responsible data centers and carbon-aware cloud environments that lower energy use and support long-term sustainability goals.",
      features: [
        "Carbon footprint analysis",
        "Energy-efficient architecture",
        "Green hosting solutions",
        "Sustainability reporting",
      ],
      icon: <Leaf className="text-white" size={36} />,
      colorTheme: "emerald" as const,
    },
    {
      title: "Digital Energy Platforms",
      description:
        "Kengile builds integrated digital energy platforms that connect sensors, IoT devices, and predictive analytics to improve energy use across enterprise and industrial environments.",
      features: [
        "IoT platform integration",
        "Predictive maintenance AI",
        "Energy consumption optimization",
        "Digital twin technology",
      ],
      icon: <BarChart3 className="text-white" size={36} />,
      colorTheme: "cyan" as const,
    },
    {
      title: "Renewable Energy Automation",
      description:
        "Our team leverages automation and intelligence in renewable energy systems through AI algorithms and IoT-based controls, ensuring stable and high-efficiency operations.",
      features: [
        "Solar and wind farm automation",
        "Predictive output optimization",
        "Grid integration systems",
        "Remote monitoring and control",
      ],
      icon: <Cpu className="text-white" size={36} />,
      colorTheme: "teal" as const,
    },
  ];

  const blockchainServices = [
    {
      title: "Stablecoin Development Services",
      description:
        "Our team provides end-to-end stablecoin and digital asset development with strong blockchain integration, institutional-grade security, and infrastructure capable of supporting large-scale adoption.",
      features: [
        "Token economics design",
        "Smart contract development",
        "Regulatory compliance frameworks",
        "Liquidity management systems",
      ],
      icon: <Coins className="text-white" size={36} />,
      colorTheme: "purple" as const,
    },
    {
      title: "Blockchain Infrastructure Services",
      description:
        "We design, deploy, and manage enterprise blockchain networks with high reliability, comprehensive governance frameworks, and seamless integration into existing systems.",
      features: [
        "Private and consortium networks",
        "Node infrastructure management",
        "Cross-chain interoperability",
        "Enterprise governance tools",
      ],
      icon: <Link2 className="text-white" size={36} />,
      colorTheme: "blue" as const,
    },
    {
      title: "Web3 Payments & Tokenization",
      description:
        "Kengile builds next-generation payment platforms with tokenized assets, secure digital wallets, and on-chain settlement solutions to empower decentralized finance.",
      features: [
        "Digital wallet development",
        "Asset tokenization platforms",
        "Payment gateway integration",
        "DeFi protocol development",
      ],
      icon: <Wallet className="text-white" size={36} />,
      colorTheme: "orange" as const,
    },
    {
      title: "AI & Blockchain Integration",
      description:
        "Our experts combine AI with blockchain to create transparent, decentralized IT operations and intelligent smart contract automation for enterprise-grade applications.",
      features: [
        "AI-powered smart contracts",
        "Decentralized AI marketplaces",
        "Blockchain-based AI governance",
        "Automated compliance systems",
      ],
      icon: <Cpu className="text-white" size={36} />,
      colorTheme: "cyan" as const,
    },
  ];

  const spaceServices = [
    {
      title: "Satellite & Space Internet Solutions",
      description:
        "We build and manage advanced satellite internet infrastructure that provides low-latency, high-availability global connectivity for enterprise and government clients.",
      features: [
        "LEO satellite integration",
        "Ground station management",
        "Global coverage optimization",
        "Disaster recovery networks",
      ],
      icon: <Satellite className="text-white" size={36} />,
      colorTheme: "blue" as const,
    },
    {
      title: "Space Data Analytics",
      description:
        "Our experts leverage AI and advanced data engineering to analyze satellite imagery, delivering actionable insights for earth observation, climate monitoring, and space operations.",
      features: [
        "Satellite imagery processing",
        "Geospatial AI analytics",
        "Climate and environmental monitoring",
        "Predictive modeling systems",
      ],
      icon: <BarChart3 className="text-white" size={36} />,
      colorTheme: "purple" as const,
    },
    {
      title: "Space Energy & Edge Systems",
      description:
        "Kengile designs AI-optimized energy management and edge computing systems tailored for space networks, remote installations, and challenging environments.",
      features: [
        "Edge computing for space",
        "Solar power optimization",
        "Remote system management",
        "AI-enabled automation for remote operations",
      ],
      icon: <Radio className="text-white" size={36} />,
      colorTheme: "teal" as const,
    },
  ];

  return (
    <>
      <AnimatedHero
        title="Our Services"
        description="We offer a complete range of IT services that cover AI-ready infrastructure, secure data centers, advanced blockchain systems, and innovative energy platforms."
        subtitle="Comprehensive IT Solutions"
      />

      {/* AI & Infrastructure */}
      <Section className="bg-white">
        <SectionHeader
          title="AI & Infrastructure Services"
          subtitle="We deliver scalable and intelligent infrastructure built for AI workloads, high-performance computing, and modern enterprise applications. Our team covers everything from GPU cloud setup to production-ready AI environments that support real business outcomes."
          className="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-bold text-gradient mb-4"
          subtitleClassName="text-xl text-accent-600 max-w-3xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {aiServices.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              colorTheme={service.colorTheme}
            />
          ))}
        </div>
      </Section>

      {/* Energy & Sustainability */}
      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Energy & Sustainability IT Services"
          subtitle="Kengile offers smart energy systems and sustainable IT infrastructure that support a greener future. Our team helps organizations reduce their carbon footprint, improve energy efficiency, and gain better operational control through intelligent automation."
          className="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-bold text-gradient mb-4"
          subtitleClassName="text-xl text-accent-600 max-w-3xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {energyServices.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              colorTheme={service.colorTheme}
            />
          ))}
        </div>
      </Section>

      {/* Blockchain & Digital Finance */}
      <Section className="bg-white">
        <SectionHeader
          title="Blockchain & Digital Finance IT Services"
          subtitle="Our IT experts deliver enterprise blockchain and decentralized finance solutions built for security, scalability, and regulatory compliance. From stablecoins to DeFi platforms, our experts design the infrastructure that powers the future of digital finance."
          className="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-bold text-gradient mb-4"
          subtitleClassName="text-xl text-accent-600 max-w-3xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blockchainServices.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              colorTheme={service.colorTheme}
            />
          ))}
        </div>
      </Section>

      {/* Space Connectivity */}
      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Space Connectivity & IoT Services"
          subtitle="Kengile provides satellite-based connectivity and space technology solutions that extend your enterprise reach beyond terrestrial boundaries. Our team ensures reliable, secure, and high-performance operations in the final frontier."
          className="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-bold text-gradient mb-4"
          subtitleClassName="text-xl text-accent-600 max-w-3xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {spaceServices.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              colorTheme={service.colorTheme}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
