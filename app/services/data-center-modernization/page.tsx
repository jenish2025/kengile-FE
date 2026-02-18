import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import SectionHeader from '@/components/SectionHeader'
import ServiceFeatureCard from '@/components/ServiceFeatureCard'
import IndustryCard from '@/components/IndustryCard'
import { Server, Zap, Cpu, Shield, CheckCircle, Building2, Database, Cloud, ArrowRight, Network, Droplets, Settings, Box, Brain, FlaskConical, Radio, ShoppingBag, Factory, Gauge, TrendingUp, DollarSign, Rocket, HardDrive, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Center Modernization | Smart IT Infrastructure Services',
  description: 'Transform traditional IT environments into intelligent, automated, energy-efficient data centers built for AI workloads.',
  keywords: 'data center modernization, smart data center, IT infrastructure, data center automation, energy efficient data center',
}

export default function DataCenterModernization() {
  const modernizationServices = [
    {
      title: "AI-Ready Infrastructure & GPU Upgrades",
      description:
        "We assist you in modernizing without a complete overhaul, supporting AI infrastructure and GPU-intensive applications. Our data center experts evaluate your existing infrastructure and retrofit GPU-capable environments for optimal performance and scalable growth.",
      icon: <Cpu size={40} />,
    },
    {
      title: "Thermal Management & Liquid Cooling Solutions",
      description:
        "With increased heat density, we modernize cooling designs. We work with you to integrate innovative thermal management and liquid cooling solutions that improve efficiency and reduce operational expenses.",
      icon: <Droplets size={40} />,
    },
    {
      title: "Software-Defined Networking & Multicloud Enablement",
      description:
        "We modernize traditional networks with software-defined networking to achieve agility and flexibility. Our expertise helps you establish secure, high-performance connectivity between on-premises and multicloud environments.",
      icon: <Network size={40} />,
    },
    {
      title: "Edge & Modular Data Center Implementation",
      description:
        "Kengile implements edge and prefabricated modular data centers to enable low-latency, distributed applications. Our data center experts ensure scalable implementation that meets your overall modernization strategy.",
      icon: <Box size={40} />,
    },
    {
      title: "AIOps & Intelligent Infrastructure Management",
      description:
        "With expert data center modernization services, we apply AIOps to enable autonomous monitoring and predictive maintenance. Kengile can assist in minimizing downtime and manual intervention with intelligent and autonomous infrastructure management.",
      icon: <Brain size={40} />,
    },
    {
      title: "Sustainable Energy & Microgrid Modernization",
      description:
        "With our expertise in modernizing energy infrastructure, we integrate renewable energy and microgrid solutions. Kengile can assist in enhancing efficiency, resilience, and sustainability while maintaining control over energy expenses.",
      icon: <Zap size={40} />,
    },
  ];

  const industryModernization = [
    {
      title: "Healthcare and Life Sciences",
      description:
        "We offer data center modernization for the healthcare industry to ensure secure, compliant, and reliable operations. Our services enable critical hospital applications, research, and patient data management.",
      useCases: [
        "Minimize downtime for critical applications",
        "Optimize energy consumption in data centers",
        "Enhance storage and backup for sensitive data",
      ],
      icon: <FlaskConical size={32} />,
    },
    {
      title: "Financial Services & Banking",
      description:
        "Kengile offers modernized infrastructure that enables secure, low-latency, and compliant operations. Our services enable real-time transactions, risk management, and disaster recovery.",
      useCases: [
        "Minimize downtime for trading and transaction systems",
        "Improve disaster recovery and business continuity",
        "Replace legacy systems with scalable infrastructure",
      ],
      icon: <Building2 size={32} />,
    },
    {
      title: "Manufacturing",
      description:
        "We assist manufacturers in maximizing uptime and operational efficiency. Our modernized data centers enable connected manufacturing and real-time analytics.",
      useCases: [
        "Enhance availability for production-critical applications",
        "Optimize cooling, power, and energy consumption",
        "Simplify storage and network management",
      ],
      icon: <Factory size={32} />,
    },
    {
      title: "Media & Telecommunications",
      description:
        "Kengile transforms media and telecom data centers to support high-volume content and low-latency business. Our solutions provide high availability and scalable networking and storage.",
      useCases: [
        "Eliminate network congestion",
        "Improve availability for content delivery",
        "Simplify storage for large-scale data",
      ],
      icon: <Radio size={32} />,
    },
    {
      title: "Retail & E-Commerce",
      description:
        "We transform retail data centers to support peak workloads, high transaction rates, and real-time business. Our infrastructure enables business continuity and scalable growth.",
      useCases: [
        "Provide uninterrupted point-of-sale and online services",
        "Scale storage and networks efficiently",
        "Enable real-time inventory and business analytics",
      ],
      icon: <ShoppingBag size={32} />,
    },
    {
      title: "Information Technology",
      description:
        "Kengile transforms IT data centers to support enterprise applications, hybrid cloud, and business-critical workloads. Our services enhance uptime, performance, and operational efficiency.",
      useCases: [
        "Automate monitoring and infrastructure management",
        "Improve uptime and performance",
        "Efficiently upgrade servers, storage, and networks",
      ],
      icon: <Cpu size={32} />,
    },
  ];

  const modernizationBenefits = [
    {
      number: "1",
      title: "Faster, smoother performance",
      description:
        "With our expertise in data center modernization, Kengile accelerates processing, reduces latency, and optimizes workloads for maximum efficiency.",
      icon: <Gauge size={32} />,
    },
    {
      number: "2",
      title: "Rock-solid reliability",
      description:
        "We build for reliability, keep downtime to a minimum, and detect problems early with proactive monitoring to ensure continuous operations.",
      icon: <Shield size={32} />,
    },
    {
      number: "3",
      title: "Ready for growth",
      description:
        "Our experts enable seamless scalability for your infrastructure, supporting larger workloads, new applications, and business growth without major changes.",
      icon: <TrendingUp size={32} />,
    },
    {
      number: "4",
      title: "Lower costs",
      description:
        "With optimized data center design and modernization, Kengile reduces energy consumption, maintenance, and operating costs.",
      icon: <DollarSign size={32} />,
    },
    {
      number: "5",
      title: "Future-ready infrastructure",
      description:
        "We architect systems that fully support cloud, AI, and analytics, with GPU-enabled, high-performance, and flexible architectures.",
      icon: <Rocket size={32} />,
    },
    {
      number: "6",
      title: "Easier management",
      description:
        "Automation of monitoring, maintenance, and operations work minimizes manual effort and simplifies IT management for your business.",
      icon: <Settings size={32} />,
    },
  ];

  const technologies = [
    {
      category: "Compute & Virtualization",
      technologies: [
        "VMware vSphere",
        "Kubernetes",
        "NVIDIA DGX",
        "AMD EPYC",
        "Intel Xeon Scalable",
      ],
      icon: <Cpu className="w-5 h-5" />,
      color: "blue",
    },
    {
      category: "Cooling & Efficiency",
      technologies: [
        "Liquid Cooling",
        "Hot/Cold Aisle Containment",
        "AI-Driven HVAC",
      ],
      icon: <Droplets className="w-5 h-5" />,
      color: "cyan",
    },
    {
      category: "Networking",
      technologies: [
        "400G Ethernet",
        "InfiniBand HDR",
        "SD-WAN",
        "Cisco ACI",
        "Zero Trust Network Access",
      ],
      icon: <Network className="w-5 h-5" />,
      color: "purple",
    },
    {
      category: "Storage",
      technologies: [
        "NVMe-oF",
        "Dell PowerStore",
        "NetApp AFF",
        "Pure Storage",
      ],
      icon: <HardDrive className="w-5 h-5" />,
      color: "indigo",
    },
    {
      category: "Security & Compliance",
      technologies: [
        "Palo Alto Prisma",
        "CrowdStrike Falcon",
        "HashiCorp Vault",
        "SIEM/SOAR",
      ],
      icon: <Shield className="w-5 h-5" />,
      color: "red",
    },
    {
      category: "Monitoring & Automation",
      technologies: [
        "Datadog",
        "Splunk",
        "Ansible",
        "Terraform",
        "ServiceNow ITOM",
      ],
      icon: <Eye className="w-5 h-5" />,
      color: "green",
    },
  ];

  const modernizationProcess = [
    {
      stepNumber: "1",
      title: "Infrastructure and Workload Analysis",
      description:
        "We analyze servers, storage, networks, virtualization, and operating systems to identify legacy performance bottlenecks, capacity gaps, security vulnerabilities, and inter-application dependencies. This phase helps to determine which applications should be modernized, consolidated, virtualized, or migrated.",
    },
    {
      stepNumber: "2",
      title: "Target Architecture and Modernization Strategy",
      description:
        "Our experts will outline a modernized data center architecture design. This could include hyperconverged infrastructure, hybrid cloud support, software-defined storage, and sophisticated networking. We will outline a structured plan with timelines, tools, risk mitigation, and cost-saving opportunities.",
    },
    {
      stepNumber: "3",
      title: "Phased Modernization and Migration",
      description:
        "The modernization process is conducted in a controlled, step-by-step manner. We will modernize hardware, virtualization platforms, storage, and applications with continuous monitoring, rollback capabilities, and low downtime to ensure uninterrupted business operations.",
    },
    {
      stepNumber: "4",
      title: "Performance Optimization and Enablement",
      description:
        "After modernization, we will optimize resource utilization, enhance workload performance, and implement best practices for monitoring, backup, and disaster recovery. Your IT team will be provided with comprehensive documentation and direct knowledge transfer to manage and further develop the modernized data center.",
    },
  ];

  const whyChooseKengile = [
    {
      title: "Experienced Engineers",
      description:
        "Senior engineers are assigned to each project to ensure successful implementation and expert advice from start to finish.",
      icon: <Cpu size={32} />,
    },
    {
      title: "Vendor-Agnostic Solutions",
      description:
        "We always keep your business interests at heart, not vendor incentives.",
      icon: <Shield size={32} />,
    },
    {
      title: "Zero-Downtime Guarantee",
      description:
        "A careful and staged approach ensures that your business is up and running with minimal disruption.",
      icon: <CheckCircle size={32} />,
    },
    {
      title: "Measurable ROI",
      description:
        "Success metrics and weekly progress reports ensure transparency and deliver tangible business value.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Security-First Architecture",
      description:
        "All decisions are informed by zero-trust architecture to secure your systems and data.",
      icon: <Shield size={32} />,
    },
    {
      title: "24/7 Post-Launch Support",
      description:
        "Our commitment to you continues for at least 12 months post-launch to ensure everything is running smoothly.",
      icon: <Settings size={32} />,
    },
  ];

  return (
    <>
      <AnimatedHero
        title="Data Center Modernization"
        subtitle="Data Center Modernization"
        description="Modernize your legacy IT environment into an intelligent, automated, energy-efficient data center optimized for AI workloads, scalability, reliability, and high-performance computing."
        ctaText="Start Free Assessment"
        ctaLink="/contact-us"
        secondaryCtaText="See Our Work"
        secondaryCtaLink="/insights-case-studies"
      />

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                40%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Energy Savings
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Uptime Guarantee
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Why Data Center Modernization Is Essential for Business Growth
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Your data center may be silently limiting business growth. Outdated
            infrastructure drives higher energy costs and increases the risk of
            unplanned downtime, draining budgets that could otherwise support
            innovation and long-term efficiency.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            At the same time, legacy environments struggle to support AI and
            modern workloads, creating performance bottlenecks and accumulating
            technical debt. Kengile helps modernize data centers with intelligent
            automation and energy-efficient, AI-ready infrastructure to reduce
            costs, improve performance, and support scalable business growth.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Our Data Center Modernization Services That Actually Work"
          subtitle="Our Data Center Modernization strategy is built around six key pillars, transforming legacy infrastructure into a true differentiator. Kengile's team evaluates your existing infrastructure and provides strategies that enhance speed, efficiency, and preparedness for modern workloads."
          className="text-center mb-16"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernizationServices.map((service, index) => (
            <ServiceFeatureCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Key Benefits</h2>
            <p className="text-xl text-accent-600">Transform your data center with modern infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureList
              features={[
                'Reduce energy consumption by up to 40%',
                'Improve performance with AI-optimized hardware',
                'Automate operations to reduce manual overhead',
                'Enhance security with modern protocols',
                'Scale infrastructure on-demand',
                'Lower total cost of ownership'
              ]}
            />
            <div className="bg-gradient-subtle rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-accent-900 mb-6">Modernization Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Liquid cooling systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">AI-powered monitoring tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Software-defined infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Renewable energy integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Edge computing capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Zero-trust security architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Industry-Specific Modernization */}
      <Section className="bg-white">
        <SectionHeader
          title="Data Center Modernization for Every Industry"
          subtitle="Kengile offers data center modernization services that are industry-specific. Our team of experts offers scalable, efficient, and robust infrastructure that enhances performance, lowers costs, and enables new workloads such as AI, cloud, and analytics."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industryModernization.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              useCases={industry.useCases}
              icon={industry.icon}
            />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/industries-we-serve"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
          >
            View All Industries
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </Section>

      {/* Success Stories */}
      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Our Client Success Stories"
          subtitle="See how Kengile helps organizations modernize their data centers, which improves performance, reduces expenses, and maintains business continuity."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <CaseStudyCard
            title="Legacy Data Center Modernization"
            industry="Healthcare"
            challenge="A healthcare organization's 15-year-old data center was racking up high energy costs, with inadequate capacity and constant downtime. A modernization effort was necessary without disrupting mission-critical patient services."
            solution="Kengile implemented a staged modernization strategy: GPU-enabled servers, liquid cooling, intelligent monitoring and automation, and renewable energy integration. Each modernization step was implemented while keeping mission-critical services fully operational."
            results={[
              "42% reduction in energy costs",
              "Increased computing power and flexibility",
              "Eliminated unplanned downtime",
              "ROI achieved in 18 months",
            ]}
            delay={0}
          />
          <CaseStudyCard
            title="Industrial Data Center Modernization"
            industry="Manufacturing"
            challenge="A manufacturing firm's legacy data center was not capable of supporting increased workloads or maintaining business continuity for mission-critical applications. The firm required a modern, efficient, and scalable data center infrastructure."
            solution="Kengile modernized the underlying infrastructure with GPU-enabled servers, high-speed networking, and edge computing for real-time data analysis. Cloud connectivity and zero-downtime migration ensured that mission-critical manufacturing applications remained operational during the modernization process."
            results={[
              "Improved workload processing speed by 10x",
              "Reduced maintenance costs by 35%",
              "Enhanced operational efficiency and monitoring",
              "Scaled infrastructure 5x without major expansion",
            ]}
            delay={0.2}
          />
        </div>
        <div className="text-center">
          <Link
            href="/insights-case-studies"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </Section>

      {/* Benefits of Modernization */}
      <Section className="bg-white">
        <SectionHeader
          title="How Can You Benefit from Our Data Center Modernization Services?"
          subtitle="A modern data center delivers higher performance, reliability, and efficiency while reducing costs. Our data center modernization services help businesses scale infrastructure, optimize operations, and prepare for future workloads."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernizationBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border-2 border-accent-200 rounded-xl p-8 hover:border-primary-500 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg group-hover:scale-110 transition-transform">
                {benefit.number}
              </div>

              {/* Icon */}
              <div className="text-primary-600 mb-6 group-hover:text-primary-700 transition-colors">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-accent-900 mb-4 group-hover:text-primary-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-accent-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative gradient on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </Section>

      {/* Technologies We Use */}
      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Enterprise-Grade Technologies We Work With"
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const colorClasses = {
              blue: {
                icon: "text-blue-600",
                bg: "bg-blue-50",
                text: "text-blue-700",
              },
              cyan: {
                icon: "text-cyan-600",
                bg: "bg-cyan-50",
                text: "text-cyan-700",
              },
              purple: {
                icon: "text-purple-600",
                bg: "bg-purple-50",
                text: "text-purple-700",
              },
              indigo: {
                icon: "text-indigo-600",
                bg: "bg-indigo-50",
                text: "text-indigo-700",
              },
              red: {
                icon: "text-red-600",
                bg: "bg-red-50",
                text: "text-red-700",
              },
              green: {
                icon: "text-green-600",
                bg: "bg-green-50",
                text: "text-green-700",
              },
            };
            const colors = colorClasses[tech.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <div className={`${colors.icon} mr-2`}>
                    {tech.icon}
                  </div>
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={`px-3 py-1.5 ${colors.bg} ${colors.text} rounded-md text-sm font-medium`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Modernization Process */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Our Data Center Modernization Process"
            subtitle="We apply our data center modernization expertise with a no-nonsense, hands-on approach developed from real-world enterprise upgrades. Our approach is designed to remove the old, rigid links, enhance business continuity, and modernize the infrastructure without disrupting mission-critical applications."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-700 max-w-3xl mx-auto"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {modernizationProcess.map((step, index) => (
              <div
                key={index}
                className="relative bg-white border border-accent-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500" />
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex-shrink-0 p-2 h-10 rounded-full bg-primary-50 border border-primary-200 flex items-center justify-center mr-3">
                    <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">
                      {step.stepNumber}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-accent-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-accent-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started With Your Data Modernization
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Kengile is the Right Choice */}
      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Why Kengile is the Right Choice for Your Data Center Modernization"
          subtitle="Data center modernization is an art that requires a combination of deep expertise, strategic planning, and meticulous execution. At Kengile, we have the expertise to modernize, secure, and optimize your infrastructure while keeping your business up and running."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-accent-900 mb-8 text-center">
            What we offer:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseKengile.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-accent-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-accent-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Use Cases</h2>
            <p className="text-xl text-accent-600">When to modernize your data center</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard
              title="Legacy Infrastructure Upgrade"
              description="Transform aging data centers with outdated hardware into modern, efficient facilities ready for AI workloads."
              icon={<Building2 size={32} />}
              delay={0}
            />
            <UseCaseCard
              title="Energy Cost Reduction"
              description="Reduce operational costs by implementing energy-efficient cooling, power management, and renewable energy solutions."
              icon={<Zap size={32} />}
              delay={0.1}
            />
            <UseCaseCard
              title="AI Workload Support"
              description="Upgrade infrastructure to support GPU-intensive AI training and inference workloads at scale."
              icon={<Cpu size={32} />}
              delay={0.2}
            />
            <UseCaseCard
              title="Automation Implementation"
              description="Deploy intelligent automation to reduce manual operations and improve reliability and efficiency."
              icon={<Server size={32} />}
              delay={0.3}
            />
            <UseCaseCard
              title="Hybrid Cloud Integration"
              description="Modernize on-premises data centers to seamlessly integrate with cloud environments for hybrid deployments."
              icon={<Cloud size={32} />}
              delay={0.4}
            />
            <UseCaseCard
              title="Compliance & Security"
              description="Upgrade security infrastructure to meet modern compliance requirements and protect against evolving threats."
              icon={<Shield size={32} />}
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Modernization Process</h2>
            <p className="text-xl text-accent-600">A systematic approach to data center transformation</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Assessment & Analysis</h3>
                <p className="text-accent-600">Comprehensive audit of current infrastructure, identifying performance bottlenecks, energy inefficiencies, and modernization opportunities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Design & Planning</h3>
                <p className="text-accent-600">Create detailed modernization roadmap with phased approach, minimizing disruption while maximizing benefits.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Implementation</h3>
                <p className="text-accent-600">Execute modernization with minimal downtime, deploying new hardware, software, and automation systems in phases.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Optimization & Support</h3>
                <p className="text-accent-600">Fine-tune systems, monitor performance, and provide ongoing support to ensure optimal operation and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'How long does a typical data center modernization project take?',
                answer: 'The time frame for a data center modernization project can vary depending on the size and complexity of the project. We adopt a phased approach that ensures steady and predictable progress with little to no downtime. Each phase of the process ensures that the systems remain at optimal levels during the modernization process.'
              },
              {
                question: 'What ROI should we expect, and when?',
                answer: 'The ROI that can be expected will depend on the organization and the nature of the project. Most of our clients are able to realize tangible gains, such as reduced energy consumption, reduced maintenance costs, and increased efficiency, within a 12-18 month period. We set clear criteria for success at the outset and ensure that our clients are kept up to date with progress.'
              },
              {
                question: 'Can we modernize while keeping systems operational?',
                answer: 'Yes. Our phased approach allows for zero-downtime modernization. We carefully plan the upgrades, monitor the performance in real-time, and ensure that each phase of the project is complete and satisfactory before proceeding to the next step.'
              },
              {
                question: 'Do you work with existing vendor contracts and hardware?',
                answer: 'Yes. We are vendor-agnostic and can work with your existing contracts and hardware whenever possible. We will optimize your existing infrastructure and recommend upgrades only when they provide a real benefit in terms of performance, scalability, or efficiency.'
              },
              {
                question: 'What about compliance? We\'re in a heavily regulated industry.',
                answer: 'Each project incorporates compliance requirements from the ground up. Our team ensures that modernization initiatives are compliant with regulations and industry requirements, maintaining data security, ensuring operations are sound, and remaining audit-ready throughout the process so that your business remains fully compliant.'
              },
              {
                question: 'How do we share knowledge with your in-house team?',
                answer: 'We provide comprehensive training, documentation, and support so that your team members can confidently work with and manage the modernized infrastructure. Kengile remains engaged throughout the transition process to ensure that your team members have full control and understanding of the new systems.'
              }
            ]}
          />
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Real-world data center transformation success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Legacy Data Center Transformation"
              industry="Healthcare"
              challenge="A healthcare provider's 15-year-old data center was struggling with high energy costs, limited capacity for AI workloads, and frequent downtime. They needed to modernize without disrupting critical patient care systems."
              solution="We implemented a phased modernization approach: upgraded to AI-ready GPU servers, installed liquid cooling systems, deployed intelligent monitoring and automation, and integrated renewable energy sources. Maintained 99.99% uptime throughout the transition."
              results={[
                'Reduced energy consumption by 42%',
                'Increased compute capacity by 300%',
                'Eliminated unplanned downtime incidents',
                'Achieved ROI within 18 months'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="AI-Ready Infrastructure Upgrade"
              industry="Manufacturing"
              challenge="A manufacturing company wanted to implement AI for predictive maintenance and quality control but their existing data center couldn't support GPU-intensive workloads. They needed to upgrade while maintaining production systems."
              solution="Designed a hybrid approach: modernized core infrastructure with GPU servers and high-speed networking, implemented edge computing for real-time AI inference, and set up cloud connectivity for model training. Used zero-downtime migration techniques."
              results={[
                'Enabled AI workloads with 10x faster processing',
                'Reduced maintenance costs by 35%',
                'Improved product quality detection by 50%',
                'Scaled infrastructure 5x without major expansion'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Related Services</h2>
            <p className="text-xl text-accent-600">Complementary solutions to enhance your Data Center Modernization capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/cloud-hpc-engineering" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud & HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Scale infrastructure and improve performance for modern workloads</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/green-cloud-sustainable-it" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Zap className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Green Cloud</h3>
              <p className="text-accent-600 mb-4">Optimize cloud usage to reduce cost and improve efficiency</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/data-engineering-analytics" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Database className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Data Engineering</h3>
              <p className="text-accent-600 mb-4">Build data pipelines to support modernization and analytics initiatives</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Data Center Modernization Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free 30-minute discovery call. Our Data Center Modernization team will review your current setup, identify quick wins, and outline a no-obligation roadmap tailored to your needs.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book Free Assessment
          </Link>
        </div>
      </Section>
    </>
  )
}


