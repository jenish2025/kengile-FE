import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import InsightCard from "@/components/InsightCard";
import {
  Brain,
  Server,
  Cloud,
  Zap,
  Link2,
  Database,
  Cpu,
  Leaf,
  Coins,
  Satellite,
  Building2,
  Factory,
  TrendingUp,
  Rocket,
  Shield,
  FlaskConical,
  Lightbulb,
  Target,
  FileText,
  BookOpen,
  Award,
  Code,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Future-Ready IT Services | AI • Cloud • Energy • Blockchain • Space",
  description:
    "We design, build, and manage future-ready IT infrastructure — integrating AI, cloud, energy systems, blockchain, and satellite networks for global enterprises.",
  keywords:
    "AI infrastructure, cloud services, data center, blockchain, space connectivity, IT services, future technology",
};

export default function Home() {
  const services = [
    {
      title: "AI Infrastructure Services",
      description:
        "End-to-end AI infrastructure services — GPU cloud setup, distributed training, MLOps pipelines, and performance optimization.",
      href: "/services/ai-infrastructure-services",
      icon: <Brain size={32} />,
    },
    {
      title: "Data Center Modernization",
      description:
        "Transform traditional IT environments into intelligent, automated, energy-efficient data centers built for AI workloads.",
      href: "/services/data-center-modernization",
      icon: <Server size={32} />,
    },
    {
      title: "Cloud & HPC Engineering",
      description:
        "Design hybrid cloud and HPC systems that deliver scalability, security, and AI-ready compute efficiency.",
      href: "/services/cloud-hpc-engineering",
      icon: <Cloud size={32} />,
    },
    {
      title: "Smart Energy IT Solutions",
      description:
        "AI and IoT solutions for power forecasting, load balancing, and energy analytics for modern utilities.",
      href: "/services/smart-energy-it-solutions",
      icon: <Zap size={32} />,
    },
    {
      title: "Blockchain Infrastructure",
      description:
        "Design, deploy, and manage blockchain networks with enterprise-grade reliability and governance frameworks.",
      href: "/services/blockchain-infrastructure-services",
      icon: <Link2 size={32} />,
    },
    {
      title: "Space Connectivity",
      description:
        "Build and manage satellite-based internet infrastructure for low-latency, high-availability global connectivity.",
      href: "/services/satellite-space-internet-solutions",
      icon: <Satellite size={32} />,
    },
  ];

  return (
    <>
      <AnimatedHero
        title="Future-Ready IT Services"
        subtitle="Next-Generation Technology Partner"
        description="We design, build, and manage future-ready IT infrastructure — integrating AI, cloud, energy systems, blockchain, and satellite networks for global enterprises."
        ctaText="Start Your Journey"
        ctaLink="/contact-us"
      />

      {/* Statistics Section */}
      <Section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative">
          <StatsSection
            title="Our Impact"
            description="Delivering measurable results for enterprises worldwide"
            stats={[
              {
                value: "500+",
                label: "Projects Delivered",
                icon: <Rocket size={40} />,
              },
              {
                value: "98%",
                label: "Client Satisfaction",
                icon: <Award size={40} />,
              },
              {
                value: "50%",
                label: "Cost Reduction",
                icon: <TrendingUp size={40} />,
              },
              {
                value: "24/7",
                label: "Support Available",
                icon: <Shield size={40} />,
              },
            ]}
          />
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-[#e4e4ff] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-100 to-primary-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative">
          <div className="text-center mb-16">
            {/* <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold uppercase tracking-wider">
                What We Do
              </span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Our Services
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Comprehensive IT solutions for the next digital decade and beyond
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </Section>

      {/* About Us Section */}
      <Section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300 via-indigo-300 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-300 via-pink-300 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-100 via-indigo-100 to-purple-100 text-primary-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                Who We Are
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              About Kengile
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
              We position ourselves as a next-generation IT services company
              building intelligent, energy-efficient, and decentralized
              infrastructure for the future internet.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We specialize in integrating cutting-edge technologies including
              AI, cloud computing, energy systems, blockchain, and satellite
              networks to help global enterprises transform their digital
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Global Reach
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Serving enterprises across 25+ countries with distributed teams
                and local expertise.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-indigo-100 hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                Expert Team
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                200+ engineers, architects, and consultants specializing in AI,
                cloud, and emerging technologies.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Innovation Focus
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Dedicated innovation labs researching next-generation
                technologies for the next decade.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about-us">
              <button className="group px-10 py-5 bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 text-white hover:from-primary-700 hover:via-indigo-700 hover:to-purple-700 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 inline-flex items-center space-x-3">
                <span>Learn More About Us</span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30"></div>
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold uppercase tracking-wider">
                Industries
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Tailored IT solutions for diverse industries — from AI startups to
              global enterprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI & Machine Learning Companies"
              description="Specialized infrastructure for AI startups and ML enterprises — GPU clusters, distributed training, and MLOps platforms."
              href="/industries-we-serve"
              icon={<TrendingUp size={32} />}
              delay={0}
            />
            <ServiceCard
              title="Energy & Utilities"
              description="Smart grid solutions, energy analytics, and IoT integration for power companies and renewable energy providers."
              href="/industries-we-serve"
              icon={<Zap size={32} />}
              delay={0.1}
            />
            <ServiceCard
              title="Financial Services & FinTech"
              description="Blockchain infrastructure, secure payment systems, and high-frequency trading platforms for financial institutions."
              href="/industries-we-serve"
              icon={<Shield size={32} />}
              delay={0.2}
            />
            <ServiceCard
              title="Space Technology"
              description="Satellite connectivity, space data analytics, and edge computing solutions for space-tech innovators."
              href="/industries-we-serve"
              icon={<Rocket size={32} />}
              delay={0.3}
            />
            <ServiceCard
              title="Manufacturing & Industrial"
              description="IoT integration, predictive maintenance, and industrial automation for smart manufacturing operations."
              href="/industries-we-serve"
              icon={<Factory size={32} />}
              delay={0.4}
            />
            <ServiceCard
              title="Enterprise Corporations"
              description="Comprehensive digital transformation — cloud migration, data modernization, and AI adoption for large enterprises."
              href="/industries-we-serve"
              icon={<Building2 size={32} />}
              delay={0.5}
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/industries-we-serve">
              <button className="group px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Explore All Industries</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Innovation Labs */}
      <Section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200 via-blue-200 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-purple-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                Research & Development
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Innovation Labs
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Pioneering the future of IT through cutting-edge research and
              development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <FlaskConical className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                AI Infrastructure Lab
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Researching next-generation AI infrastructure, including
                quantum-classical hybrid systems, neuromorphic computing, and
                distributed AI architectures.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-pink-100 hover:border-pink-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Rocket className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                Blockchain Innovation Lab
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Exploring advanced blockchain technologies, consensus
                mechanisms, and decentralized systems for enterprise
                applications.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-green-100 hover:border-green-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                Sustainable IT Lab
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Developing green computing technologies, carbon-negative data
                centers, and energy-efficient AI algorithms.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-indigo-100 hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                Space Technology Lab
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Advancing space connectivity, satellite computing, and orbital
                infrastructure for next-generation global networks.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/innovation-labs">
              <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50 inline-flex items-center space-x-3">
                <span>Discover Our Labs</span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Insights & Case Studies */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-200 via-indigo-200 to-transparent rounded-full blur-3xl opacity-40 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/4 translate-y-1/4"></div>

        <div className="relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                Learn & Explore
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Insights & Case Studies
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Latest insights, research papers, and success stories from our
              projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
            <InsightCard
              title="The Future of AI Infrastructure"
              description="Exploring how next-generation AI infrastructure will transform enterprise computing, from edge AI to distributed training systems."
              href="/insights/ai-infrastructure"
              icon={<FileText size={40} />}
              borderColor="border-blue-100"
              hoverBorderColor="hover:border-blue-400"
              iconGradientFrom="from-blue-500"
              iconGradientTo="to-blue-600"
              textColor="text-blue-600"
              hoverTextColor="hover:text-blue-700"
            />

            <InsightCard
              title="Sustainable Data Centers"
              description="How green data centers and renewable energy integration are reshaping the IT industry's environmental impact."
              href="/insights/sustainable-data-centers"
              icon={<BookOpen size={40} />}
              borderColor="border-green-100"
              hoverBorderColor="hover:border-green-400"
              iconGradientFrom="from-green-500"
              iconGradientTo="to-emerald-600"
              textColor="text-green-600"
              hoverTextColor="hover:text-green-700"
            />

            <InsightCard
              title="Blockchain in Enterprise"
              description="Case studies on how enterprises are leveraging blockchain for supply chain, identity, and financial services."
              href="/insights/blockchain-enterprise"
              icon={<Award size={40} />}
              borderColor="border-purple-100"
              hoverBorderColor="hover:border-purple-400"
              iconGradientFrom="from-purple-500"
              iconGradientTo="to-purple-600"
              textColor="text-purple-600"
              hoverTextColor="hover:text-purple-700"
            />

            <InsightCard
              title="Space-Based Connectivity"
              description="Analyzing the potential of satellite internet and space connectivity to bridge the global digital divide."
              href="/insights/space-connectivity"
              icon={<Satellite size={40} />}
              borderColor="border-indigo-100"
              hoverBorderColor="hover:border-indigo-400"
              iconGradientFrom="from-indigo-500"
              iconGradientTo="to-blue-600"
              textColor="text-indigo-600"
              hoverTextColor="hover:text-indigo-700"
            />
          </div>

          <div className="text-center">
            <Link href="/insights-case-studies">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/50 inline-flex items-center space-x-3">
                <span>Read All Insights</span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Careers */}
      <Section className="bg-gradient-to-br from-accent-50 via-primary-50 to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTQwIDQwaDQwdjQwSDQwVjQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-semibold uppercase tracking-wider">
                Join Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Build your career in AI, cloud, blockchain, and infrastructure
              services — shaping the next wave of global innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Infrastructure Engineer"
              description="Design and deploy scalable AI infrastructure, GPU clusters, and MLOps pipelines for enterprise clients."
              href="/careers"
              icon={<Brain size={32} />}
              delay={0}
            />
            <ServiceCard
              title="Cloud Architect"
              description="Architect hybrid cloud and HPC solutions, multi-cloud strategies, and enterprise cloud migrations."
              href="/careers"
              icon={<Cloud size={32} />}
              delay={0.1}
            />
            <ServiceCard
              title="Blockchain Developer"
              description="Build blockchain networks, smart contracts, and decentralized applications for enterprise use cases."
              href="/careers"
              icon={<Code size={32} />}
              delay={0.2}
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/careers">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center space-x-2">
                <span>View All Openings</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Technology Expertise */}
      <Section className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200 via-indigo-200 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-100 to-accent-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-100 via-blue-100 to-indigo-100 text-primary-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                Our Stack
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Technology Expertise
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We work with cutting-edge technologies across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Brain className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                PyTorch, TensorFlow, LLMs, MLOps
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-indigo-100 hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Cloud className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Cloud Platforms
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                AWS, Azure, GCP, Kubernetes
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Link2 className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Blockchain
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Ethereum, Hyperledger, Web3
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-pink-100 hover:border-pink-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Satellite className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                Space Tech
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Satellite networks, IoT
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-yellow-100 hover:border-yellow-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Zap className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                Energy Systems
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Smart grids, renewables
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-cyan-100 hover:border-cyan-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Database className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Data Engineering
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Spark, Kafka, Data Lakes
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-teal-100 hover:border-teal-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Code className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                DevOps & SRE
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                CI/CD, Observability
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Security
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Zero-trust, Compliance
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us - Detailed */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-300 via-indigo-300 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-300 via-pink-300 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-100 via-blue-100 to-indigo-100 text-primary-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                Why Kengile
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Why Choose Kengile?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We deliver results that matter through innovation, expertise, and
              commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Cpu className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI-Powered Solutions
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Cutting-edge AI infrastructure and intelligent automation
                    for next-generation IT systems. We leverage the latest in
                    machine learning, deep learning, and generative AI.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle
                        className="text-blue-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        GPU clusters and distributed training
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <CheckCircle
                        className="text-blue-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        MLOps pipelines and automation
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                      <CheckCircle
                        className="text-blue-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        LLM integration and fine-tuning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-green-100 hover:border-green-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Leaf className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Sustainable Technology
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Green cloud solutions and energy-efficient infrastructure
                    for a sustainable future. We help organizations reduce their
                    carbon footprint while improving performance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle
                        className="text-green-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Energy-efficient data centers
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <CheckCircle
                        className="text-green-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Renewable energy integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                      <CheckCircle
                        className="text-green-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Carbon-neutral cloud solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Database className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Enterprise Scale
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Scalable, reliable infrastructure designed for global
                    enterprises and high-performance workloads. We handle
                    everything from startups to Fortune 500 companies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle
                        className="text-purple-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Multi-cloud and hybrid architectures
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <CheckCircle
                        className="text-purple-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        99.99% uptime SLA guarantees
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                      <CheckCircle
                        className="text-purple-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Global infrastructure support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-orange-100 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <BarChart3 className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    Data-Driven Results
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    We measure and optimize everything. Our solutions deliver
                    measurable ROI through improved performance, reduced costs,
                    and enhanced capabilities.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle
                        className="text-orange-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Real-time monitoring and analytics
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <CheckCircle
                        className="text-orange-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Performance optimization
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                      <CheckCircle
                        className="text-orange-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="font-medium">
                        Cost reduction strategies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Partner with us to transform your IT infrastructure for the next
            decade and beyond.
          </p>
          <a
            href="/contact-us"
            className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            <span className="text-lg">Get Started Today</span>
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </Section>
    </>
  );
}
