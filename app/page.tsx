import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import StatsSection from '@/components/StatsSection'
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
  Network
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Future-Ready IT Services | AI • Cloud • Energy • Blockchain • Space',
  description: 'We design, build, and manage future-ready IT infrastructure — integrating AI, cloud, energy systems, blockchain, and satellite networks for global enterprises.',
  keywords: 'AI infrastructure, cloud services, data center, blockchain, space connectivity, IT services, future technology',
}

export default function Home() {
  const services = [
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
      title: 'Smart Energy IT Solutions',
      description: 'AI and IoT solutions for power forecasting, load balancing, and energy analytics for modern utilities.',
      href: '/services/smart-energy-it-solutions',
      icon: <Zap size={32} />,
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Design, deploy, and manage blockchain networks with enterprise-grade reliability and governance frameworks.',
      href: '/services/blockchain-infrastructure-services',
      icon: <Link2 size={32} />,
    },
    {
      title: 'Space Connectivity',
      description: 'Build and manage satellite-based internet infrastructure for low-latency, high-availability global connectivity.',
      href: '/services/satellite-space-internet-solutions',
      icon: <Satellite size={32} />,
    },
  ]

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
      <Section className="bg-gradient-subtle">
        <StatsSection
          title="Our Impact"
          description="Delivering measurable results for enterprises worldwide"
          stats={[
            { value: '500+', label: 'Projects Delivered', icon: <Rocket size={40} /> },
            { value: '98%', label: 'Client Satisfaction', icon: <Award size={40} /> },
            { value: '50%', label: 'Cost Reduction', icon: <TrendingUp size={40} /> },
            { value: '24/7', label: 'Support Available', icon: <Shield size={40} /> }
          ]}
        />
      </Section>

      {/* Services Overview */}
      <Section className="bg-white">
        <div className="text-center mb-16">
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
            <button className="px-8 py-4 bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </Section>

      {/* About Us Section */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Bacancy</h2>
            <p className="text-xl text-accent-700 mb-6 max-w-4xl mx-auto">
              We position ourselves as a next-generation IT services company building intelligent, energy-efficient, and decentralized infrastructure for the future internet.
            </p>
            <p className="text-lg text-accent-600 mb-8 max-w-4xl mx-auto">
              We specialize in integrating cutting-edge technologies including AI, cloud computing, energy systems, blockchain, and satellite networks to help global enterprises transform their digital infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Global Reach</h3>
              <p className="text-accent-600">
                Serving enterprises across 25+ countries with distributed teams and local expertise.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Expert Team</h3>
              <p className="text-accent-600">
                200+ engineers, architects, and consultants specializing in AI, cloud, and emerging technologies.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Innovation Focus</h3>
              <p className="text-accent-600">
                Dedicated innovation labs researching next-generation technologies for the next decade.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about-us">
              <button className="px-8 py-4 bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Tailored IT solutions for diverse industries — from AI startups to global enterprises
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
            <button className="px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
              <span>Explore All Industries</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </Section>

      {/* Innovation Labs */}
      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Innovation Labs
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Pioneering the future of IT through cutting-edge research and development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="AI Infrastructure Lab"
            description="Researching next-generation AI infrastructure, including quantum-classical hybrid systems, neuromorphic computing, and distributed AI architectures."
            href="/innovation-labs"
            icon={<FlaskConical size={32} />}
            delay={0}
          />
          <ServiceCard
            title="Blockchain Innovation Lab"
            description="Exploring advanced blockchain technologies, consensus mechanisms, and decentralized systems for enterprise applications."
            href="/innovation-labs"
            icon={<Rocket size={32} />}
            delay={0.1}
          />
          <ServiceCard
            title="Sustainable IT Lab"
            description="Developing green computing technologies, carbon-negative data centers, and energy-efficient AI algorithms."
            href="/innovation-labs"
            icon={<Lightbulb size={32} />}
            delay={0.2}
          />
          <ServiceCard
            title="Space Technology Lab"
            description="Advancing space connectivity, satellite computing, and orbital infrastructure for next-generation global networks."
            href="/innovation-labs"
            icon={<Target size={32} />}
            delay={0.3}
          />
        </div>
        <div className="text-center mt-12">
          <Link href="/innovation-labs">
            <button className="px-8 py-4 bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>Discover Our Labs</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </Section>

      {/* Insights & Case Studies */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Insights & Case Studies
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Latest insights, research papers, and success stories from our projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="The Future of AI Infrastructure"
            description="Exploring how next-generation AI infrastructure will transform enterprise computing, from edge AI to distributed training systems."
            href="/insights-case-studies"
            icon={<FileText size={32} />}
            delay={0}
          />
          <ServiceCard
            title="Sustainable Data Centers"
            description="How green data centers and renewable energy integration are reshaping the IT industry's environmental impact."
            href="/insights-case-studies"
            icon={<BookOpen size={32} />}
            delay={0.1}
          />
          <ServiceCard
            title="Blockchain in Enterprise"
            description="Case studies on how enterprises are leveraging blockchain for supply chain, identity, and financial services."
            href="/insights-case-studies"
            icon={<Award size={32} />}
            delay={0.2}
          />
          <ServiceCard
            title="Space-Based Connectivity"
            description="Analyzing the potential of satellite internet and space connectivity to bridge the global digital divide."
            href="/insights-case-studies"
            icon={<Satellite size={32} />}
            delay={0.3}
          />
        </div>
        <div className="text-center mt-12">
          <Link href="/insights-case-studies">
            <button className="px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
              <span>Read All Insights</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </Section>

      {/* Careers */}
      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Build your career in AI, cloud, blockchain, and infrastructure services — shaping the next wave of global innovation
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
            <button className="px-8 py-4 bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>View All Openings</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </Section>

      {/* Technology Expertise */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies across multiple domains
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Brain className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-accent-600">PyTorch, TensorFlow, LLMs, MLOps</p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Cloud className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">Cloud Platforms</h3>
              <p className="text-sm text-accent-600">AWS, Azure, GCP, Kubernetes</p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Link2 className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">Blockchain</h3>
              <p className="text-sm text-accent-600">Ethereum, Hyperledger, Web3</p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Satellite className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">Space Tech</h3>
              <p className="text-sm text-accent-600">Satellite networks, IoT</p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Zap className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">Energy Systems</h3>
              <p className="text-sm text-accent-600">Smart grids, renewables</p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Database className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">Data Engineering</h3>
              <p className="text-sm text-accent-600">Spark, Kafka, Data Lakes</p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Code className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">DevOps & SRE</h3>
              <p className="text-sm text-accent-600">CI/CD, Observability</p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6 text-center border border-accent-200">
              <Shield className="text-primary-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-accent-900 mb-2">Security</h3>
              <p className="text-sm text-accent-600">Zero-trust, Compliance</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us - Detailed */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Why Choose Bacancy?
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              We deliver results that matter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-accent-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Cpu className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-900 mb-3">AI-Powered Solutions</h3>
                  <p className="text-accent-600 mb-4">
                    Cutting-edge AI infrastructure and intelligent automation for next-generation IT systems. We leverage the latest in machine learning, deep learning, and generative AI to solve complex business challenges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>GPU clusters and distributed training</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>MLOps pipelines and automation</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>LLM integration and fine-tuning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-accent-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                  <Leaf className="text-success-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-900 mb-3">Sustainable Technology</h3>
                  <p className="text-accent-600 mb-4">
                    Green cloud solutions and energy-efficient infrastructure for a sustainable future. We help organizations reduce their carbon footprint while improving performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-success-600" size={18} />
                      <span>Energy-efficient data centers</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-success-600" size={18} />
                      <span>Renewable energy integration</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-success-600" size={18} />
                      <span>Carbon-neutral cloud solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-accent-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Database className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-900 mb-3">Enterprise Scale</h3>
                  <p className="text-accent-600 mb-4">
                    Scalable, reliable infrastructure designed for global enterprises and high-performance workloads. We handle everything from startups to Fortune 500 companies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>Multi-cloud and hybrid architectures</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>99.99% uptime SLA guarantees</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>Global infrastructure support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-accent-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-900 mb-3">Data-Driven Results</h3>
                  <p className="text-accent-600 mb-4">
                    We measure and optimize everything. Our solutions deliver measurable ROI through improved performance, reduced costs, and enhanced capabilities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>Real-time monitoring and analytics</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-center space-x-2 text-accent-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      <span>Cost reduction strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to transform your IT infrastructure for the next decade and beyond.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </Section>
    </>
  )
}

