import { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import LabCard from "@/components/LabCard";
import SectionHeader from "@/components/SectionHeader";
import {
  FlaskConical,
  Rocket,
  Lightbulb,
  Target,
  Brain,
  Cpu,
  Atom,
  Zap,
  Globe,
  TrendingUp,
  BookOpen,
  Code,
  LineChart,
  Network,
  Database,
  Lock,
  Cloud,
  ArrowRight,
  Check,
  Microscope,
  User,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Innovation Labs | Future-Driven IT Research & Development",
  description:
    "Discover our innovation labs driving breakthroughs in AI infrastructure, blockchain ecosystems, and sustainable IT systems.",
  keywords:
    "innovation labs, R&D, research and development, technology innovation, AI research, blockchain research",
};

export default function InnovationLabs() {
  // const labs = [
  //   {
  //     title: 'AI Infrastructure Lab',
  //     description: 'Researching next-generation AI infrastructure, including quantum-classical hybrid systems, neuromorphic computing, and distributed AI architectures.',
  //     href: '/contact-us',
  //     icon: <FlaskConical size={32} />,
  //   },
  //   {
  //     title: 'Blockchain Innovation Lab',
  //     description: 'Exploring advanced blockchain technologies, consensus mechanisms, and decentralized systems for enterprise applications.',
  //     href: '/contact-us',
  //     icon: <Rocket size={32} />,
  //   },
  //   {
  //     title: 'Sustainable IT Lab',
  //     description: 'Developing green computing technologies, carbon-negative data centers, and energy-efficient AI algorithms.',
  //     href: '/contact-us',
  //     icon: <Lightbulb size={32} />,
  //   },
  //   {
  //     title: 'Space Technology Lab',
  //     description: 'Advancing space connectivity, satellite computing, and orbital infrastructure for next-generation global networks.',
  //     href: '/contact-us',
  //     icon: <Target size={32} />,
  //   },
  // ]

  const labs = [
    {
      title: "AI Infrastructure Lab",
      description:
        "Built as the backbone of our AI innovation, the AI Infrastructure Lab advances high-performance computing architectures that support scalable, efficient, and distributed AI systems.",
      icon: <FlaskConical size={32} />,
      color: "from-blue-500 to-cyan-500",
      established: "2021",
      team: "25+ Researchers",
      projects: "18 Active Projects",
      focus: [
        "Quantum-Classical Hybrid Computing",
        "Neuromorphic Chip Architecture",
        "Distributed AI Training Optimization",
        "Edge AI Acceleration",
        "AI Model Compression Techniques",
        "Federated Learning Systems",
      ],
      achievements: [
        "Published 12 research papers in top-tier conferences",
        "Filed 5 patents for AI acceleration technologies",
        "Achieved 40% improvement in distributed training efficiency",
        "Collaboration with 3 leading universities",
      ],
      publications: [
        "Efficient Distributed Training for Large Language Models",
        "Neuromorphic Computing for Edge AI Applications",
        "Quantum-Enhanced Machine Learning Algorithms",
      ],
    },
    {
      title: "Blockchain Innovation Lab",
      description:
        "This lab strengthens our decentralized technology capabilities by designing secure, scalable blockchain systems tailored for enterprise-grade applications and real-world adoption.",
      icon: <Rocket size={32} />,
      color: "from-purple-500 to-pink-500",
      established: "2020",
      team: "20+ Researchers",
      projects: "15 Active Projects",
      focus: [
        "Novel Consensus Mechanisms",
        "Layer-2 Scaling Solutions",
        "Cross-Chain Interoperability",
        "Zero-Knowledge Proof Systems",
        "Decentralized Identity Management",
        "Enterprise Blockchain Frameworks",
      ],
      achievements: [
        "Developed 3 production-ready blockchain protocols",
        "Patent pending for novel consensus algorithm",
        "Achieved 10x transaction throughput improvement",
        "Partnerships with 5 Fortune 500 companies",
      ],
      publications: [
        "Scalable Byzantine Fault Tolerance for Enterprise Blockchains",
        "Privacy-Preserving Smart Contracts Using Zero-Knowledge Proofs",
        "Cross-Chain Asset Transfer Protocols",
      ],
    },
    {
      title: "Sustainable IT Lab",
      description:
        "Sustainability drives this lab's mission as our teams create energy-efficient computing and infrastructure solutions that reduce environmental impact at scale.",
      icon: <Lightbulb size={32} />,
      color: "from-green-500 to-emerald-500",
      established: "2022",
      team: "18+ Researchers",
      projects: "12 Active Projects",
      focus: [
        "Carbon-Negative Data Center Design",
        "Energy-Efficient AI Algorithms",
        "Renewable Energy Integration",
        "Heat Recycling Systems",
        "Green Hardware Optimization",
        "Sustainable Cloud Architecture",
      ],
      achievements: [
        "Achieved 60% reduction in AI training energy consumption",
        "Built the first carbon-negative prototype data center",
        "Partnerships with 4 renewable energy providers",
        "ISO 14001 certified research processes",
      ],
      publications: [
        "Energy-Aware Machine Learning Training Strategies",
        "Waste Heat Recovery in High-Performance Computing",
        "Sustainable Infrastructure Design Patterns",
      ],
    },
    {
      title: "Space Technology Lab",
      description:
        "Extending innovation beyond Earth, this lab develops space-based computing and communication technologies for reliable, high-performance global connectivity.",
      icon: <Target size={32} />,
      color: "from-orange-500 to-red-500",
      established: "2023",
      team: "15+ Researchers",
      projects: "10 Active Projects",
      focus: [
        "Low-Earth Orbit Computing",
        "Inter-Satellite Communication Protocols",
        "Space-Ground Network Integration",
        "Radiation-Hardened Computing",
        "Orbital Data Processing",
        "Satellite Swarm Coordination",
      ],
      achievements: [
        "Successfully tested algorithms in space environments",
        "Collaboration with 2 space agencies",
        "Achieved 5x improvement in satellite data processing speed",
        "Contributions to 2 satellite missions",
      ],
      publications: [
        "Edge Computing in Low-Earth Orbit Satellites",
        "Fault-Tolerant Systems for Space Applications",
        "Optimizing Inter-Satellite Communication Networks",
      ],
    },
  ];

  const researchAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description:
        "Behind many of our greatest achievements, Artificial Intelligence powers systems that learn, adapt, and seek to optimize in many areas of research.",
      areas: [
        "Deep Learning",
        "Reinforcement Learning",
        "Neural Architecture Search",
        "Explainable AI",
      ],
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Computing",
      description:
        "Quantum Computing makes it possible for the first time to investigate novel paradigms for computation that go beyond the capabilities of classical computing.",
      areas: [
        "Quantum Algorithms",
        "Quantum Cryptography",
        "Hybrid Systems",
        "Error Correction",
      ],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Distributed Systems",
      description:
        "In Distributed Systems, we study how large-scale, decentralized components can reliably coordinate in the presence of conditions such as latency and failure.",
      areas: [
        "Consensus Protocols",
        "Edge Computing",
        "Peer-to-Peer Networks",
        "Load Balancing",
      ],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security & Privacy",
      description:
        "Our research is guided by the principles of trust, confidentiality, and verifiability, which ensure that the information is safeguarded in all situations.",
      areas: [
        "Zero-Knowledge Proofs",
        "Homomorphic Encryption",
        "Secure Enclaves",
        "Privacy-Preserving Machine Learning",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Systems",
      description:
        "Efficiency and Sustainability are core themes in Energy Systems, driving our research in computing, management, and optimization of energy.",
      areas: [
        "Green Computing",
        "Power Optimization",
        "Renewable Integration",
        "Smart Grids",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Space Technology",
      description:
        "Operating beyond terrestrial boundaries, with this research area we addresses the unique challenges of computation, communication, and sensing in space environments.",
      areas: [
        "Satellite Networks",
        "Orbital Computing",
        "Space Communications",
        "Remote Sensing",
      ],
    },
  ];

  const partnerships = [
    {
      type: "Universities",
      count: "15+",
      description: "Leading academic institutions worldwide",
    },
    {
      type: "Enterprises",
      count: "30+",
      description: "Fortune 500 and innovative startups",
    },
    {
      type: "Research Labs",
      count: "8+",
      description: "Government and private research facilities",
    },
    {
      type: "Open Source",
      count: "50+",
      description: "Active contributions to major projects",
    },
  ];

  const impactMetrics = [
    {
      number: "500+",
      label: "Research Projects",
      sublabel: "Active and completed",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      sublabel: "From our partners",
    },
    { number: "50+", label: "Global Patents", sublabel: "Filed and granted" },
    {
      number: "200+",
      label: "Researchers",
      sublabel: "PhDs and domain experts",
    },
  ];

  const collaborationPrograms = [
    {
      title: "Academic Partnerships",
      description:
        "Joint research initiatives with leading universities. We fund PhDs, host sabbaticals, and co-publish groundbreaking papers.",
      benefits: [
        "Joint funding opportunities",
        "Co-authored publications",
        "Student internship pipeline",
        "Shared lab resources",
      ],
      buttonText: "Apply for Partnership",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Industry Collaboration",
      description:
        "Work with us to bring cutting-edge research into production. From proof-of-concept to scale, we're your innovation partner.",
      benefits: [
        "Custom R&D projects",
        "Technology licensing",
        "Pilot programs",
        "Strategic advisory",
      ],
      buttonText: "Discuss Your Needs",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Open Source Community",
      description:
        "We believe in open innovation. Join thousands of contributors building the tools that power the next generation of technology.",
      benefits: [
        "200+ open repositories",
        "Active maintainer support",
        "Community grants",
        "Annual contributor summit",
      ],
      buttonText: "Join the Community",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Startup Accelerator",
      description:
        "Spin out your idea with our support. We provide funding, mentorship, and infrastructure to turn research into startups.",
      benefits: [
        "$500K seed investment",
        "6-month intensive program",
        "Technical mentorship",
        "Go-to-market support",
      ],
      buttonText: "Apply to Accelerator",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const researchers = [
    {
      name: "Aishwary Rawat",
      title: "Head of Platform Engineering",
      area: "Core Architecture, System Design & Scalability",
      quote:
        "Well-designed platforms enable teams to innovate faster and with confidence.",
    },
    {
      name: "Mehul Budasna",
      title: "Engineering Operations Lead",
      area: "Product Delivery, Process Excellence & Team Enablement",
      quote:
        "Sustainable engineering is built on clarity, consistency, and execution.",
    },
    {
      name: "Ketan Nandani",
      title: "Lead, Infrastructure & Distributed Systems",
      area: "Cloud Platforms, Reliability & Distributed Architecture",
      quote:
        "Infrastructure should quietly scale while teams focus on building value.",
    },
    {
      name: "Akshay Dodhiwala",
      title: "Lead, AI & Machine Learning",
      area: "Applied AI, ML Systems & Intelligent Automation",
      quote:
        "AI delivers impact when it is practical, responsible, and purpose-driven.",
    },
  ];

  return (
    <>
      <AnimatedHero
        title="Innovation Labs"
        subtitle="Future-Driven IT Research & Development"
        description="We are not just building technology, we create new possibilities and deliver solutions that truly matter. Our labs bring together talented minds from different fields to solve important challenges, from AI infrastructure to sustainable computing solutions."
        ctaText="Explore Our Labs"
        ctaLink="#labs"
        secondaryCtaText="Partner With Us"
        secondaryCtaLink="/contact-us"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Pioneering the Future of IT
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Innovation Labs constitute research and development
                facilities. The purpose is to investigate new technologies and
                solve future information technology challenges. This is
                undertaken through heavy involvement in basic research,
                experimental work, and proof-of-concept development projects.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                By collaborating with academic institutions, tech partners, and
                industry giants, we continue to break new ground in AI,
                Blockchain, Energy, and Space Technology. By working with varied
                stakeholders, our multi-disciplinary approach of theoretical
                research combined with practical engineering provides innovative
                solutions to real-world problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We invest over $10M R&D annually and have a team of over 78
                researchers spanning four specialized labs to advance the state
                of the art in computing infrastructure, sustainable technology,
                and next-generation systems architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Research Labs: Where Innovation Takes Shape"
            subtitle="Each of our labs is a dedicated ecosystem for breakthrough research. We bring together world-class talent, cutting-edge resources, and bold ideas to tackle humanity's biggest challenges."
            className="text-center mb-16"
            titleClassName="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            subtitleClassName="text-xl text-gray-600 max-w-3xl mx-auto"
          />

          <div className="space-y-12">
            {labs.map((lab, index) => (
              <LabCard
                key={lab.title}
                title={lab.title}
                description={lab.description}
                icon={lab.icon}
                color={lab.color}
                established={lab.established}
                team={lab.team}
                projects={lab.projects}
                focus={lab.focus}
                achievements={lab.achievements}
                publications={lab.publications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            pillText="Cross-Cutting Research"
            title="The Science Behind Our Innovation"
            subtitle="Our research spans multiple disciplines, creating synergies between teams that accelerate breakthroughs. Each focus area supports and reinforces the others."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold mb-4 text-gray-900"
            subtitleClassName="text-xl text-gray-600 max-w-2xl mx-auto"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.areas.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Research Network"
            subtitle="We collaborate with leading institutions worldwide to accelerate innovation"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold mb-4 text-white"
            subtitleClassName="text-xl text-gray-200 max-w-2xl mx-auto"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 hover:shadow-xl transition-all"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {partner.count}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {partner.type}
                </div>
                <p className="text-gray-200 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <SectionHeader
            pillText="MEET THE MINDS"
            title="The Minds Behind Kengile Innovation Labs"
            subtitle="Our labs are led by experienced professionals who bring deep industry knowledge, hands-on technical expertise, and a strong track record of building and scaling real-world systems across multiple technology domains."
            className="text-center mb-16"
            titleClassName="text-4xl md:text-5xl font-bold mb-4"
            subtitleClassName="text-xl text-gray-600 max-w-3xl mx-auto"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((researcher, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                {/* Profile Picture */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {researcher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mb-4">
                  <Linkedin className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer" />
                  <User className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer" />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {researcher.name}
                </h3>

                {/* Title */}
                <p className="text-blue-600 font-semibold mb-2">
                  {researcher.title}
                </p>

                {/* Area */}
                <p className="text-sm text-gray-600 mb-4">{researcher.area}</p>

                {/* Quote */}
                <p className="text-sm text-gray-700 italic">
                  &ldquo;{researcher.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Programs */}
      <section
        id="collaborate"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Collaboration Programs"
            subtitle="Let's Build the Future Together"
            className="text-center mb-6"
            titleClassName="text-4xl font-bold mb-4 text-gray-900"
            subtitleClassName="text-xl text-gray-600 max-w-2xl mx-auto"
          />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Innovation doesn't happen in isolation. We've designed multiple
            pathways for researchers, companies, and entrepreneurs to work
            alongside our teams.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborationPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2 mb-6">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact-us"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  {program.buttonText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Research Journey
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Interested in collaborating on cutting-edge research? We partner
              with organizations, researchers, and innovators to advance the
              state of IT technology. Whether you're an academic institution,
              enterprise, startup, or open-source contributor, we have a program
              designed for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#labs"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Explore Labs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">Join Our Research</h2>
          <p className="text-lg text-accent-700 mb-8">
            Interested in collaborating on cutting-edge research? We partner with organizations, researchers, and innovators to advance the state of IT technology.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </Section> */}
    </>
  );
}
