import { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import InsightCard from "@/components/InsightCard";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | AI, Energy, FinTech, SpaceTech & Enterprises",
  description:
    "Tailored IT solutions for AI startups, energy enterprises, financial systems, and space-technology innovators.",
  keywords:
    "IT services industries, AI startups, energy companies, FinTech, SpaceTech, enterprise IT solutions",
};

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "AI & Machine Learning Companies",
      description:
        "Specialized infrastructure for AI startups and ML enterprises — GPU clusters, distributed training, and MLOps platforms.",
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
        "As a trusted technology partner, we enable utilities to adopt Artificial Intelligence and IoT for smarter power forecasting, automation of smart grids, and precise energy distribution.",
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
        "Blockchain infrastructure, secure payment systems, and high-frequency trading platforms for financial institutions.",
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
        "We work with space innovators to enhance satellite connectivity, process deep-space data, and enable edge computing engineered for mission-critical environments.",
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
        "Our experts enable telecom providers to gain unprecedented network performance with 5G-ready infrastructure, cloud-native cores, and AI-driven optimization.",
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
        "We help industrial organizations with IoT-enabled operations, real-time monitoring, predictive maintenance, and automation for large-scale production.",
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
        "Through secure data platforms, AI-powered analytics, and high-performance computing for research, healthcare, and life sciences organizations can innovate in care delivery.",
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
    {
      title: "Financial Services",
      description:
        "Our teams create secure digital finance ecosystems, blockchain-supported settlement systems, and high-performance architectures for today's financial operations.",
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
  ];

  const whyChooseUs = [
    {
      icon: <Users size={40} />,
      title: "Industry Veterans",
      description:
        "Our team includes former engineers from leading tech companies and domain experts with decades of experience",
      href: "/about-us",
      borderColor: "border-blue-100",
      hoverBorderColor: "hover:border-blue-400",
      iconGradientFrom: "from-blue-500",
      iconGradientTo: "to-blue-600",
      textColor: "text-blue-600",
      hoverTextColor: "hover:text-blue-700",
    },
    {
      icon: <Award size={40} />,
      title: "Proven Track Record",
      description:
        "Successfully delivered 1000+ projects across multiple industries with an average client satisfaction of 98%",
      href: "/insights-case-studies",
      borderColor: "border-purple-100",
      hoverBorderColor: "hover:border-purple-400",
      iconGradientFrom: "from-purple-500",
      iconGradientTo: "to-purple-600",
      textColor: "text-purple-600",
      hoverTextColor: "hover:text-purple-700",
    },
    {
      icon: <Globe size={40} />,
      title: "Global Reach",
      description:
        "Serving clients across 40+ countries with 24/7 support and localized solutions",
      href: "/contact-us",
      borderColor: "border-green-100",
      hoverBorderColor: "hover:border-green-400",
      iconGradientFrom: "from-green-500",
      iconGradientTo: "to-emerald-600",
      textColor: "text-green-600",
      hoverTextColor: "hover:text-green-700",
    },
    {
      icon: <Rocket size={40} />,
      title: "Innovation First",
      description:
        "Early adopters of emerging technologies, helping clients stay ahead of the curve",
      href: "/innovation-labs",
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
      name: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      tools: "AWS, Azure, GCP, Kubernetes",
    },
    {
      name: "AI & ML",
      icon: <Brain className="w-6 h-6" />,
      tools: "TensorFlow, PyTorch, Hugging Face",
    },
    {
      name: "Blockchain",
      icon: <Lock className="w-6 h-6" />,
      tools: "Ethereum, Solana, Hyperledger",
    },
    {
      name: "IoT",
      icon: <Network className="w-6 h-6" />,
      tools: "MQTT, LoRaWAN, EdgeX",
    },
    {
      name: "Data Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      tools: "Apache Spark, Databricks, Snowflake",
    },
    {
      name: "DevOps",
      icon: <Workflow className="w-6 h-6" />,
      tools: "Docker, Jenkins, Terraform",
    },
  ];

  return (
    <>
      <AnimatedHero
        title="Industries We Serve"
        subtitle="Vertical Expertise"
        description="Tailored IT solutions for AI startups, energy enterprises, financial systems, and space-technology innovators."
      />

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Industry Expertise
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            We deliver specialized IT solutions across multiple verticals,
            combining deep industry knowledge with cutting-edge technology
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ServiceCard
              key={industry.title}
              {...industry}
              delay={index * 0.1}
            />
          ))}
        </div> */}
      </Section>

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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver specialized IT solutions across multiple verticals,
              combining deep industry knowledge with cutting-edge technology
            </p>
          </div>

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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver innovative
              solutions across all industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-gray-600">{tech.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading expertise combined with a client-first approach
            </p>
          </div>
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
