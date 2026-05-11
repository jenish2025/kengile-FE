import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
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
  Database,
  Search,
  Activity,
  Scale,
  Star,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Kengile",
  description: "Kengile has been an advanced IT services provider since 2018, dedicated to helping businesses grow with innovative technology solutions and real impact.",
  keywords:
    "IT services company, AI infrastructure, cloud services, technology partner, digital transformation",
  alternates: {
    canonical: "https://kengile.com/about-kengile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUs() {
  const values = [
    {
      icon: <CheckCircle2 size={32} />,
      title: "Reliability First",
      description:
        "Kengile builds systems that remain consistent every day, enabling your teams to work uninterrupted.",
    },
    {
      icon: <Database size={32} />,
      title: "Data Discipline",
      description:
        "We keep your data structured and dependable, helping every workflow run with clarity and confidence.",
    },
    {
      icon: <Search size={32} />,
      title: "Retrieval Quality",
      description:
        "Our approach enhances how information is retrieved, ensuring you always receive the most accurate and useful results.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Foundations",
      description:
        "Kengile strengthens your digital ecosystem with verified data paths and strong protection at every layer.",
    },
    {
      icon: <Activity size={32} />,
      title: "Continuous Monitoring",
      description:
        "We track system behavior in real time to catch issues early and keep your operations performing smoothly.",
    },
    {
      icon: <Scale size={32} />,
      title: "Scalable Growth",
      description:
        "Our infrastructure expands with your business needs, ensuring stability and performance at every milestone.",
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
        "High-performance computing environments are designed and deployed with our expert guidance for machine learning workloads. Kengile ensures GPU clusters and distributed training pipelines provide a solid foundation for AI initiatives.",
    },
    {
      icon: <Globe size={28} />,
      title: "Cloud Architecture",
      description:
        "Multi-cloud and hybrid strategies are tailored to meet specific business requirements. Kengile provides cloud architecture, migration, and optimization on AWS, Azure, Google, and other cloud platforms for optimal performance and economics.",
    },
    {
      icon: <Shield size={28} />,
      title: "Security & Compliance",
      description:
        "Enterprise-class security frameworks safeguard your digital assets. Our specialists at Kengile use zero-trust networks, threat protection, and ensure adherence to the GDPR, HIPAA, and SOC 2 guidelines.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Blockchain Solutions",
      description:
        "Secure and scalable blockchain networks for Web3 applications and DeFi platforms are built with our guidance. Kengile develops smart contract systems that enable innovation and reliable digital transactions.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Space Connectivity",
      description:
        "Reliable satellite Internet connectivity for teleworking and disaster recovery is made possible via Kengile's alliances with top satellite service suppliers, guaranteeing connectivity anywhere on the surface of Earth.",
    },
    {
      icon: <Heart size={28} />,
      title: "Sustainable IT",
      description:
        "Green computing initiatives reduce environmental impact. Our expert team at Kengile implements energy-efficient data centers, integrates renewable power, and delivers carbon-neutral infrastructure solutions.",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "It includes analyzing your business objectives, existing systems, and pain points through audits and discussions with various stakeholders.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Our architects design solution pathways that can conform to your requirements, costs, and time scales, along with well-articulated scenarios of the ROI.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Agile Deployment: This helps ensure that the implementation happens seamlessly, with minimal interruption. Our experts will work alongside yours throughout the entire process.",
    },
    {
      step: "04",
      title: "Optimization & Support",
      description:
        "This means everything from monitoring and maintenance to enhancements that allow the growth of the infrastructure along with the business, safeguarding against new threats.",
    },
  ];

  const differentiators = [
    {
      icon: <Lightbulb size={24} />,
      title: "Future-Proof Technology",
      description:
        "Our experts position your systems for long-term growth by shaping solutions that adapt to emerging demands with ease and support ever-evolving business goals.",
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description:
        "The engineers at Kengile are certified and possess great skills across AWS, Azure, Google Cloud, AI, blockchain, and cybersecurity, delivering strong and dependable outcomes.",
    },
    {
      icon: <Clock size={24} />,
      title: "Rapid Response",
      description:
        "By acting swiftly in response to issues, our global support teams ensure that your business receives the most timely assistance and seamless operations around the clock.",
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Proven Track Record",
      description:
        "Years of successful work across industries allow us to apply real-world experience to give every project a stable foundation and bring about consistent, reliable results.",
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
              { '@type': 'ListItem', position: 2, name: 'About Kengile', item: 'https://kengile.com/about-kengile' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">About Kengile</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="About Kengile"
        subtitle="Technology Partner for the Future"
        ctaText="Connect Us"
        description="We combine IT expertise, AI innovation, cloud strength, and modern energy solutions to create sustainable and intelligent infrastructure for the future of digital business."
      />

      {/* Stats Section */}
      <Section
        className="bg-gradient-to-br from-primary-600 to-primary-800 text-white"
        contrast="dark"
      >
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

      {/* Our Story */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Story</h2>
            <p className="text-xl text-accent-600">
              Born from a Vision to Transform Infrastructure
            </p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-accent-700 mb-6 leading-relaxed">
              We founded Kengile when our team of engineers and architects
              recognized a critical gap in the industry. Traditional IT
              infrastructure was not evolving fast enough to support the demands
              of AI workloads, real-time analytics, and global connectivity.
            </p>
            <p className="text-lg text-accent-700 mb-6 leading-relaxed">
              We created Kengile to address this challenge and help
              organizations move into the future. Our focus is simple - we
              deliver modern infrastructure solutions powered by AI, cloud, and
              automation, supported by strong engineering. As strategic
              partners, we guide clients from initial planning through long-term
              optimization, ensuring their systems remain secure, scalable, and
              future-ready.
            </p>
            <p className="text-lg text-accent-700  leading-relaxed">
              Today, we serve Fortune 500 companies across more than 50
              countries, delivering enterprise-grade solutions that are secure,
              scalable, and environmentally responsible.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            pillText="What Drives Us"
            title="Our Purpose & Direction"
            className="text-center mb-16"
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-2xl p-10">
              <h3 className="text-3xl font-bold text-accent-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                Our mission is to help organizations worldwide build their
                sophisticated IT infrastructure, unlocking the potential of new
                technologies. The proper foundation gives the ultimate
                competitive advantage.
              </p>
              <p className="text-lg text-accent-700 leading-relaxed">
                Our engineering excellence and expert advice will instill
                confidence in innovation for businesses, enabling them to stay
                ahead of the curve in the rapidly evolving digital landscape.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-200 rounded-2xl p-10">
              <h3 className="text-3xl font-bold text-accent-900 mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                Our vision is to become the most trusted partner for the next
                generation of smart and sustainable infrastructure, fueling
                innovation.
              </p>
              <p className="text-lg text-accent-700 leading-relaxed">
                We aim to create a future where every business, regardless of
                size or location, can access secure, scalable, and sustainable
                systems, empowering them to thrive, innovate continuously, and
                maintain a competitive edge in an ever-changing digital world.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-accent-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            pillText="Our Core Values"
            title="The Principles That Guide Us"
            subtitle="These values define how we work, how we serve our clients, and how we deliver consistent excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Message from Our Leader */}
      <Section className="bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-accent-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-4">
                A Message from Our Leader
              </h2>
            </div>
            <p className="text-lg text-accent-700 mb-6 leading-relaxed text-center">
              At Kengile, great partnerships start with clear communication and
              genuine intent. When we work together, the team ensures you always
              know the why, the how, and the next step behind every decision.
              Your goals guide our direction, and your success remains our
              measure of progress.
            </p>
            <div className="text-center mt-8 pt-6 border-t border-accent-200">
              <p className="text-xl font-semibold text-gradient">
                Chandresh Patel
              </p>
              <p className="text-accent-600">M.D. & Agile Coach | India</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Areas of Expertise */}
      <Section className="bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Areas of Expertise
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              We deliver complete technology solutions across every layer of
              your business, backed by Kengile’s expertise.
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

      {/* Certifications & Partnerships */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            pillText="Certifications & Partnerships"
            title="Industry-Recognized Excellence"
            subtitle="Our team holds top certifications from leading cloud providers and security organizations."
            className="text-center mb-12"
            subtitleClassName="text-lg text-accent-700 mt-4 max-w-3xl mx-auto"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "AWS Advanced Partner",
              "Microsoft Gold Partner",
              "Google Cloud Partner",
              "ISO 27001 Certified",
              "SOC 2 Type II",
              "GDPR Compliant",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-xl p-6 text-center hover:border-primary-400 hover:shadow-lg transition-all duration-300"
              >
                <BadgeCheck className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-accent-900">{cert}</p>
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
              A proven methodology that helps Kengile deliver reliable,
              scalable, and secure technology solutions across your entire
              stack.
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
          <SectionHeader
            pillText="Our Journey"
            title="Milestones That Define Us"
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
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
              Kengile earns the trust of leading enterprises through our proven
              expertise, strong support, and results-driven approach.
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

      {/* What Our Clients Say */}
      <Section className="bg-accent-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              What Our Clients Say About Kengile
            </h2>
            <p className="text-lg text-accent-700 mt-4 max-w-3xl mx-auto">
              At Kengile, they have been a leading technology partner in
              providing state-of-the-art modernization to our cloud environment.
              Their experience with multi-cloud architecture enabled us to make
              things simple and enhance performance across teams. Such
              dependability with a partner is rare under high-intensity
              pressure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "At Kengile, they have been a leading technology partner in providing state-of-the-art modernization to our cloud environment. Their experience with multi-cloud architecture enabled us to make things simple and enhance performance across teams. Such dependability with a partner is rare under high-intensity pressure.",
                author: "Rohan Mehta",
                role: "Head of Cloud Engineering",
              },
              {
                quote:
                  "Kengile played an important role in strengthening our security posture. Their team instantly understood our challenges around compliance and delivered solutions that fit our workflows perfectly. The peace of mind we get from their ongoing support is truly unmatched.",
                author: "Elena Roberts",
                role: "Director of Information Security",
              },
              {
                quote:
                  "With Kengile driving the infrastructure setup, our AI initiatives moved at a faster rate than was initially anticipated. Their knowledge, attention to minute details, and swiftness in response made this complex transition appear seamless. A partner like this adds real value to every project.",
                author: "Marcus Hill",
                role: "VP Technology Innovation",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-accent-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-accent-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-accent-200 pt-4">
                  <p className="font-semibold text-accent-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-accent-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Commitment */}
      <Section
        className="bg-gradient-to-br from-primary-600 to-primary-800 text-white"
        contrast="dark"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment To You</h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Kengile is committed to the provision of technology solutions that
            will keep your business moving. We focus on clarity and
            communication, dependable delivery, and solutioning that creates
            measurable value. Our team collaborates tightly with yours to
            understand goals, so every step feels guided, aligned, and focused
            on long-term success.
          </p>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            With continued support and practical know-how, we make your
            technology journey frictionless and future-ready. Strengthen,
            modernize, or adopt advanced capabilities-everywhere along the way,
            we will be there to assist you in staying engaged, being
            responsible, and realizing the results that really count.
          </p>
          {/* <p className="text-xl text-primary-100 leading-relaxed">
            Strengthen, modernize, or adopt advanced capabilities,everywhere
            along the way, we will be there to assist you in staying engaged,
            being responsible, and realizing the results that really count.
          </p> */}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-accent-600 mb-10">
            Let&apos;s discuss how we can help you build the technology
            foundation your business needs to thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Talk to Our Experts
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
