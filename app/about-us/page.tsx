import { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import {
  Target,
  Users,
  Award,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Heart,
  Lightbulb,
  Rocket,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Global IT Services Partner for AI & Infrastructure",
  description:
    "Learn how we combine IT expertise with innovation in AI, cloud, and energy to create sustainable, intelligent infrastructure for the next digital decade.",
  keywords:
    "IT services company, AI infrastructure, cloud services, technology partner, digital transformation",
};

export default function AboutUs() {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends, continuously exploring AI, blockchain, and space connectivity solutions.",
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description:
        "Your success is our mission. We build long-term partnerships focused on delivering measurable business value.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description:
        "We maintain the highest standards in engineering, security, and operational excellence across all our services.",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description:
        "Serving enterprises worldwide with scalable, reliable infrastructure solutions that transcend geographical boundaries.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "Kengile was founded with a vision to revolutionize IT infrastructure for the AI era.",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description:
        "Extended operations across three continents, serving Fortune 500 clients.",
    },
    {
      year: "2021",
      title: "AI Innovation Lab",
      description:
        "Launched dedicated R&D facility for machine learning infrastructure and optimization.",
    },
    {
      year: "2023",
      title: "Sustainable Tech Initiative",
      description:
        "Introduced green computing solutions, reducing client carbon footprints by 40%.",
    },
    {
      year: "2024",
      title: "Space Connectivity",
      description:
        "Pioneered satellite-based enterprise solutions for remote infrastructure.",
    },
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients" },
    { number: "50+", label: "Countries Served" },
    { number: "98%", label: "Client Retention" },
    { number: "24/7", label: "Support Available" },
  ];

  const expertise = [
    {
      icon: <Zap size={28} />,
      title: "AI Infrastructure & MLOps",
      description:
        "Design and deploy high-performance computing environments optimized for machine learning workloads. From GPU clusters to distributed training pipelines, we ensure your AI initiatives have the foundation they need to succeed.",
    },
    {
      icon: <Globe size={28} />,
      title: "Cloud Architecture",
      description:
        "Multi-cloud and hybrid cloud strategies tailored to your business. We architect, migrate, and optimize cloud infrastructure across AWS, Azure, and Google Cloud, ensuring cost efficiency and peak performance.",
    },
    {
      icon: <Shield size={28} />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security frameworks that protect your digital assets. Our solutions include zero-trust architecture, advanced threat detection, and compliance management for GDPR, HIPAA, and SOC 2.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Blockchain Solutions",
      description:
        "Decentralized infrastructure for Web3 applications and DeFi platforms. We build secure, scalable blockchain networks and smart contract systems that drive the future of digital transactions.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Space Connectivity",
      description:
        "Satellite internet solutions for remote operations and disaster recovery. Partner with leading satellite providers to deliver uninterrupted connectivity anywhere on Earth.",
    },
    {
      icon: <Heart size={28} />,
      title: "Sustainable IT",
      description:
        "Green computing initiatives that reduce environmental impact. Energy-efficient data centers, renewable power integration, and carbon-neutral infrastructure solutions.",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We begin by deeply understanding your business objectives, current infrastructure, and pain points through comprehensive audits and stakeholder interviews.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Our architects design tailored solutions that align with your goals, budget, and timeline, presenting multiple scenarios and ROI projections.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Agile deployment methodology ensures minimal disruption. Our teams work closely with yours, providing training and documentation at every stage.",
    },
    {
      step: "04",
      title: "Optimization & Support",
      description:
        "Continuous monitoring, proactive maintenance, and regular optimization ensure your infrastructure evolves with your needs and stays ahead of threats.",
    },
  ];

  const differentiators = [
    {
      icon: <Lightbulb size={24} />,
      title: "Future-Proof Technology",
      description:
        "We don't just solve today's problems—we anticipate tomorrow's challenges. Our solutions are designed with scalability and adaptability at their core.",
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description:
        "Our engineers hold certifications from AWS, Azure, Google Cloud, and specialized credentials in AI/ML, blockchain, and cybersecurity.",
    },
    {
      icon: <Clock size={24} />,
      title: "Rapid Response",
      description:
        "Critical issues demand immediate attention. Our global support teams ensure someone is always available when you need assistance.",
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Proven Track Record",
      description:
        "With hundreds of successful implementations across industries, we bring battle-tested expertise to every engagement.",
    },
  ];

  return (
    <>
      <AnimatedHero
        title="About Kengile"
        subtitle="Technology Partner for the Future"
        description="We combine IT expertise with innovation in AI, cloud, and energy to create sustainable, intelligent infrastructure for the next digital decade."
      />

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-accent-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                To empower organizations worldwide with cutting-edge IT
                infrastructure that enables them to harness the full potential
                of emerging technologies.
              </p>
              <p className="text-lg text-accent-700 leading-relaxed">
                We believe that the right infrastructure is not just a
                foundation—it&apos;s a competitive advantage. By combining technical
                excellence with strategic vision, we help our clients stay ahead
                in an increasingly digital world.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-200 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-accent-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                To be the world&apos;s most trusted partner in building the
                intelligent, sustainable infrastructure that powers the next
                generation of innovation.
              </p>
              <p className="text-lg text-accent-700 leading-relaxed">
                We envision a future where every organization, regardless of
                size or location, has access to enterprise-grade infrastructure
                that is secure, scalable, and environmentally responsible.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-accent-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we serve
              our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white border border-accent-200 rounded-xl p-8 hover:border-primary-500 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-accent-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why We Exist */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-8 text-center">
            Why We Exist
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-accent-700 mb-6 leading-relaxed">
              The IT landscape is evolving at an unprecedented pace. Traditional
              infrastructure is no longer sufficient to support the demands of
              AI workloads, real-time analytics, and global connectivity.
              Organizations face mounting pressure to innovate faster, scale
              smarter, and operate more sustainably—all while managing
              increasing complexity and security threats.
            </p>
            <p className="text-lg text-accent-700 mb-6 leading-relaxed">
              We exist to bridge the gap between current IT capabilities and
              future requirements. Our team of seasoned engineers and architects
              has spent years at the forefront of technological innovation,
              working with enterprises across industries to solve their most
              challenging infrastructure problems.
            </p>
            <p className="text-lg text-accent-700 mb-8 leading-relaxed">
              What sets us apart is our holistic approach. We don&apos;t just
              implement technology—we become strategic partners in your digital
              transformation journey. From initial consultation to ongoing
              optimization, we&apos;re committed to your long-term success.
            </p>
          </div>
        </div>
      </Section>

      {/* Areas of Expertise */}
      <Section className="bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Comprehensive solutions across the entire technology stack
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div
                key={area.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-accent-100 hover:border-primary-400"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6 text-primary-600">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-accent-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-accent-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((phase, index) => (
              <div key={phase.step} className="relative">
                <div className="bg-primary-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-accent-900 mb-4 text-center">
                  {phase.title}
                </h3>
                <p className="text-accent-600 leading-relaxed text-center">
                  {phase.description}
                </p>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey/Timeline */}
      <Section className="bg-accent-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Milestones that shaped our evolution
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-accent-200">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-accent-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-accent-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Why leading enterprises choose Kengile as their technology partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div
                key={diff.title}
                className="flex gap-6 bg-gradient-to-br from-white to-accent-50 rounded-xl p-8 border border-accent-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {diff.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-900 mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-accent-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Commitment */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            When you partner with Kengile, you&apos;re not just getting an IT
            services provider—you&apos;re gaining a dedicated team that&apos;s invested in
            your success. We measure our achievements by the value we deliver to
            your organization.
          </p>
          <p className="text-xl text-primary-100 leading-relaxed">
            Whether you&apos;re building AI infrastructure from the ground up,
            migrating to the cloud, or exploring emerging technologies like
            blockchain and satellite connectivity, we&apos;re here to guide you every
            step of the way.
          </p>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-accent-600 mb-10">
            Let&apos;s discuss how we can help you build the technology foundation
            your business needs to thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
