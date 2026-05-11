import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import InsightCard from "@/components/InsightCard";
import SectionHeader from "@/components/SectionHeader";
import TechnologyCard from "@/components/TechnologyCard";
import {
  Building2,
  Factory,
  TrendingUp,
  Rocket,
  Shield,
  Zap,
  Check,
  ArrowRight,
  Users,
  Globe,
  Award,
  Cpu,
  Database,
  Lock,
  Cloud,
  Network,
  BarChart3,
  Workflow,
  Brain,
  LineChart,
  Boxes,
  Radio,
  CircuitBoard,
  FlaskConical,
  Activity,
  Code2,
  Clock,
  Unlock,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | AI, Energy, FinTech, SpaceTech & Enterprises",
  description:
    "Tailored IT solutions for AI startups, energy enterprises, financial systems, and space-technology innovators.",
  keywords:
    "IT services industries, AI startups, energy companies, FinTech, SpaceTech, enterprise IT solutions",
  alternates: {
    canonical: "https://kengile.com/our-industry-expertise",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "AI & Machine Learning Companies",
      description:
        "At Kengile, our experts provide specialized infrastructure tailored for AI startups and ML enterprises. We help build high-performance GPU clusters, distributed training environments, and fully automated MLOps platforms that accelerate model development and deployment.",
      icon: <TrendingUp size={32} />,
      color: "from-purple-500 to-pink-500",
      stats: { clients: "50+", projects: "200+", satisfaction: "98%" },
      capabilities: [
        "High-performance GPU cluster deployment",
        "Distributed training infrastructure",
        "MLOps pipeline automation",
        "Model serving and optimization",
        "Data lake and feature store setup",
        "AI model versioning and monitoring",
      ],
      useCases: [
        "Large Language Model training infrastructure",
        "Computer vision pipeline development",
        "Real-time inference optimization",
        "AutoML platform implementation",
      ],
    },
    {
      title: "Energy & Utilities",
      description:
        "Kengile's industry experts empower utilities to leverage AI and IoT for smarter energy management. From advanced power forecasting to automating smart grids, we provide tailored solutions that optimize energy distribution and enhance sustainability in the sector.",
      icon: <Zap size={32} />,
      color: "from-yellow-500 to-orange-500",
      stats: { clients: "30+", projects: "150+", satisfaction: "96%" },
      capabilities: [
        "Smart grid monitoring systems",
        "Renewable energy management platforms",
        "IoT sensor network integration",
        "Predictive maintenance analytics",
        "Energy consumption optimization",
        "SCADA system modernization",
      ],
      useCases: [
        "Solar farm monitoring and optimization",
        "Grid load balancing automation",
        "Demand response management",
        "Distributed energy resource integration",
      ],
    },
    {
      title: "Financial Services & FinTech",
      description:
        "We work closely with financial institutions to deliver cutting-edge blockchain infrastructure, secure payment systems, and high-frequency trading platforms. Our experts in Kengile design robust solutions that drive innovation and ensure regulatory compliance in the evolving financial landscape.",
      icon: <Shield size={32} />,
      color: "from-green-500 to-emerald-500",
      stats: { clients: "40+", projects: "180+", satisfaction: "99%" },
      capabilities: [
        "Blockchain and DeFi platform development",
        "High-frequency trading infrastructure",
        "Payment gateway integration",
        "Risk management systems",
        "Regulatory compliance automation",
        "Fraud detection using AI/ML",
      ],
      useCases: [
        "Cryptocurrency exchange platforms",
        "Digital wallet solutions",
        "Smart contract development",
        "Cross-border payment systems",
      ],
    },
    {
      title: "Space Technology",
      description:
        "Kengile's specialists collaborate with space innovators to enhance satellite connectivity and process deep-space data. We design mission-critical systems for real-time data analytics, edge computing, and satellite ground station software, enabling breakthrough advancements in space exploration.",
      icon: <Rocket size={32} />,
      color: "from-blue-500 to-cyan-500",
      stats: { clients: "15+", projects: "75+", satisfaction: "100%" },
      capabilities: [
        "Satellite ground station software",
        "Space data processing pipelines",
        "Edge computing for satellites",
        "Mission control system integration",
        "Telemetry data analytics",
        "Space-to-cloud connectivity",
      ],
      useCases: [
        "Earth observation data processing",
        "Satellite constellation management",
        "Space debris tracking systems",
        "Deep space communication protocols",
      ],
    },
    {
      title: "Telecommunications",
      description:
        "Our experts at Kengile help telecom providers unlock the full potential of their networks. From 5G-ready infrastructure to AI-driven network optimization, we design cloud-native telecom platforms that drive performance and enhance connectivity in an increasingly digital world.",
      icon: <Network size={32} />,
      color: "from-teal-500 to-cyan-500",
      stats: { clients: "35+", projects: "160+", satisfaction: "97%" },
      capabilities: [
        "5G network infrastructure deployment",
        "Cloud-native core network transformation",
        "AI-driven network optimization",
        "Network function virtualization (NFV)",
        "Software-defined networking (SDN)",
        "Real-time network analytics and monitoring",
      ],
      useCases: [
        "5G network rollout and optimization",
        "Cloud-native telecom platform migration",
        "Network performance optimization using AI",
        "Edge computing for low-latency services",
      ],
    },
    {
      title: "Manufacturing",
      description:
        "At Kengile, we support manufacturing industries with IoT-enabled operations and automation solutions that streamline production. Our industry experts implement predictive maintenance systems, digital twins, and real-time monitoring platforms to optimize large-scale manufacturing processes.",
      icon: <Factory size={32} />,
      color: "from-red-500 to-rose-500",
      stats: { clients: "60+", projects: "250+", satisfaction: "97%" },
      capabilities: [
        "Industrial IoT platform deployment",
        "Predictive maintenance systems",
        "Digital twin implementation",
        "Supply chain optimization",
        "Quality control automation",
        "MES and ERP integration",
      ],
      useCases: [
        "Smart factory automation",
        "Equipment performance monitoring",
        "Inventory management optimization",
        "Production line analytics",
      ],
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Kengile's healthcare industry experts enable organizations to innovate in care delivery through secure, AI-powered analytics platforms. We design high-performance computing infrastructures for genomic data processing, medical imaging, and drug discovery, transforming how healthcare services are delivered.",
      icon: <FlaskConical size={32} />,
      color: "from-pink-500 to-rose-500",
      stats: { clients: "25+", projects: "120+", satisfaction: "99%" },
      capabilities: [
        "HIPAA-compliant cloud infrastructure",
        "AI-powered diagnostic systems",
        "Genomic data processing platforms",
        "Electronic health record (EHR) integration",
        "Medical imaging analytics",
        "Drug discovery computing infrastructure",
      ],
      useCases: [
        "AI-assisted medical diagnosis systems",
        "Genomic sequencing data analysis",
        "Telemedicine platform development",
        "Clinical trial data management",
      ],
    },
    // {
    //   title: "Financial Services",
    //   description:
    //     "Our teams create secure digital finance ecosystems, blockchain-supported settlement systems, and high-performance architectures for today's financial operations.",
    //   icon: <Shield size={32} />,
    //   color: "from-green-500 to-emerald-500",
    //   stats: { clients: "40+", projects: "180+", satisfaction: "99%" },
    //   capabilities: [
    //     "Blockchain and DeFi platform development",
    //     "High-frequency trading infrastructure",
    //     "Payment gateway integration",
    //     "Risk management systems",
    //     "Regulatory compliance automation",
    //     "Fraud detection using AI/ML",
    //   ],
    //   useCases: [
    //     "Cryptocurrency exchange platforms",
    //     "Digital wallet solutions",
    //     "Smart contract development",
    //     "Cross-border payment systems",
    //   ],
    // },
  ];

  const whyChooseUs = [
    {
      icon: <Code2 size={40} />,
      title: "Experienced Engineers",
      description:
        "Our senior engineers bring deep, hands-on experience across complex and large-scale systems. With proven success in leading engineering teams and delivering high-impact solutions, we ensure your project is handled by highly skilled and dependable professionals.",
      href: "/about-kengile",
      borderColor: "border-blue-100",
      hoverBorderColor: "hover:border-blue-400",
      iconGradientFrom: "from-blue-500",
      iconGradientTo: "to-blue-600",
      textColor: "text-blue-600",
      hoverTextColor: "hover:text-blue-700",
    },
    {
      icon: <Clock size={40} />,
      title: "Agile & Efficient",
      description:
        "We work in two-week sprints with daily standups that focus on results, not lengthy meetings. Our approach ensures that we deliver production-ready systems in a fraction of the time. We've completed projects in 8 weeks that other agencies quoted 8 months for.",
      href: "/services",
      borderColor: "border-purple-100",
      hoverBorderColor: "hover:border-purple-400",
      iconGradientFrom: "from-purple-500",
      iconGradientTo: "to-purple-600",
      textColor: "text-purple-600",
      hoverTextColor: "hover:text-purple-700",
    },
    {
      icon: <Unlock size={40} />,
      title: "No Vendor Lock-In",
      description:
        "We are committed to leveraging open standards and providing well-documented code. After a project has been finished, you can do what you want with it. Your organization can decide to maintain it themselves or bring in a different vendor if needed.",
      href: "/contact-us",
      borderColor: "border-green-100",
      hoverBorderColor: "hover:border-green-400",
      iconGradientFrom: "from-green-500",
      iconGradientTo: "to-emerald-600",
      textColor: "text-green-600",
      hoverTextColor: "hover:text-green-700",
    },
    {
      icon: <Handshake size={40} />,
      title: "True Partnership",
      description:
        "We work closely with you as long-term partners, not just a delivery team. If we believe a solution will not deliver the right results, we address it early and suggest better alternatives. Your success matters to us, and we stay focused on outcomes that support your business goals.",
      href: "/contact-us",
      borderColor: "border-orange-100",
      hoverBorderColor: "hover:border-orange-400",
      iconGradientFrom: "from-orange-500",
      iconGradientTo: "to-red-500",
      textColor: "text-orange-600",
      hoverTextColor: "hover:text-orange-700",
    },
  ];

  const technologies = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      tools: "PyTorch, TensorFlow, Hugging Face, MLOps, MLflow, Scikit-learn, NVIDIA CUDA",
    },
    {
      name: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      tools: "AWS, Azure, GCP, Kubernetes, Docker, Terraform, OpenShift",
    },
    {
      name: "Blockchain",
      icon: <Lock className="w-6 h-6" />,
      tools: "Ethereum, Hyperledger, Solidity, Corda, IPFS, Web3, Chainlink",
    },
    {
      name: "Space Technology",
      icon: <Rocket className="w-6 h-6" />,
      tools: "Satellite networks, CubeSats, GNSS, Edge IoT, Telemetry",
    },
    {
      name: "Energy & Industrial IT Systems",
      icon: <Zap className="w-6 h-6" />,
      tools: "SCADA, IoT sensors, Smart grids, Energy analytics, Industrial automation, Digital twins",
    },
    {
      name: "Data Engineering & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      tools: "Spark, Kafka, Data Lakes, Airflow, Snowflake, DBT, BigQuery",
    },
    {
      name: "DevOps & SRE",
      icon: <Workflow className="w-6 h-6" />,
      tools: "CI/CD, Jenkins, GitLab, Prometheus, Grafana, Ansible, ArgoCD",
    },
    {
      name: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      tools: "Zero-trust, IAM, SIEM, Cloud Security, Encryption, Threat Detection, OWASP",
    },
  ];

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
              { '@type': 'ListItem', position: 2, name: 'Our Industry Expertise', item: 'https://kengile.com/our-industry-expertise' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Our Industry Expertise</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Our Industry Expertise"
        subtitle="Industry Expertise"
        description="We don't believe in one-size-fits-all. Our teams bring decades of hands-on experience in your specific sector, with a deep understanding of the regulations, challenges, and opportunities that define your business."
        ctaText="Get Started"
        ctaLink="/contact-us"
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/services"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                295+
              </div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                1,355+
              </div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                40+
              </div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
        className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-300 via-indigo-300 to-transparent rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-300 via-pink-300 to-transparent rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-10"></div>

        <div className="container mx-auto px-4 relative">
          <SectionHeader
            title="Industries We Serve"
            subtitle="We specialize in providing AI infrastructure solutions across various industries, each with its own distinct challenges. Our expert teams work closely to deliver customized solutions that drive growth and innovation."
            className="text-center mb-16"
            titleClassName="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            subtitleClassName="text-xl text-gray-600 max-w-3xl mx-auto"
          />

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} text-white mb-6`}
                    >
                      {industry.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      {industry.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {industry.description}
                    </p>

                    <div className="flex gap-6 mb-8">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          {industry.stats.clients}
                        </div>
                        <div className="text-sm text-gray-600">Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          {industry.stats.projects}
                        </div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {industry.stats.satisfaction}
                        </div>
                        <div className="text-sm text-gray-600">
                          Satisfaction
                        </div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-lg mb-3 text-gray-900">
                      Key Capabilities:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {industry.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <h4 className="font-semibold text-lg mb-4 text-gray-900">
                      Use Cases & Solutions:
                    </h4>
                    <div className="space-y-4">
                      {industry.useCases.map((useCase, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start">
                            <ArrowRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{useCase}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className={`mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r ${industry.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Technical Expertise"
            subtitle="We specialize in AI, cloud, blockchain, and IT systems, using these advanced technology stacks to drive enterprise-grade projects and services."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold mb-4 text-gray-900"
            subtitleClassName="text-xl text-gray-600 max-w-2xl mx-auto"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={index}
                name={tech.name}
                icon={tech.icon}
                tools={tech.tools}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Work With Us"
            subtitle="Most consultancies talk about transformation. We've actually done it, built products from scratch, scaled systems to millions of users, navigated regulatory audits, and shipped code that's still running years later."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold mb-4 text-gray-900"
            subtitleClassName="text-xl text-gray-600 max-w-3xl mx-auto"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <InsightCard
                key={index}
                title={item.title}
                description={item.description}
                href={item.href}
                icon={item.icon}
                borderColor={item.borderColor}
                hoverBorderColor={item.hoverBorderColor}
                iconGradientFrom={item.iconGradientFrom}
                iconGradientTo={item.iconGradientTo}
                textColor={item.textColor}
                hoverTextColor={item.hoverTextColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Solutions for Every Industry
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our team understands that each industry has unique challenges and
              requirements. We work closely with clients to develop tailored IT
              solutions that address specific business needs while leveraging
              the latest technologies in AI, cloud, blockchain, and energy
              systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                Discuss Your Industry Needs
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">Custom Solutions for Every Industry</h2>
          <p className="text-lg text-accent-700 mb-8">
            Our team understands that each industry has unique challenges and requirements. We work closely with clients to develop tailored IT solutions that address specific business needs while leveraging the latest technologies in AI, cloud, blockchain, and energy systems.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            Discuss Your Industry Needs
          </a>
        </div>
      </Section> */}
    </>
  );
}
