import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import InsightCard from '@/components/InsightCard'
import { FileText, TrendingUp, BookOpen, Award, Brain, Zap, Shield, Rocket, Cloud, Database, Lightbulb, Users, ArrowRight, Calendar, Clock, User, CheckCircle, BarChart3, Target, Sparkles, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights & Case Studies | Future-Ready IT Services Trends',
  description: 'Read the latest insights, research papers, and case studies on AI, data infrastructure, and digital transformation.',
  keywords: 'IT insights, case studies, whitepapers, technology trends, AI research, digital transformation',
}

export default function InsightsCaseStudies() {
  const featuredInsights = [
    {
      title: 'The Future of AI Infrastructure',
      description: 'Exploring how next-generation AI infrastructure will transform enterprise computing, from edge AI to distributed training systems. Deep dive into GPU clusters, distributed computing, and the future of machine learning operations.',
      icon: <Brain size={40} />,
      href: '#ai-infrastructure',
      date: 'November 20, 2025',
      readTime: '12 min read',
      author: 'Dr. Sarah Chen',
      category: 'AI & ML',
      borderColor: 'border-blue-100',
      hoverBorderColor: 'hover:border-blue-400',
      iconGradientFrom: 'from-blue-500',
      iconGradientTo: 'to-blue-600',
      textColor: 'text-blue-600',
      hoverTextColor: 'hover:text-blue-700'
    },
    {
      title: 'Sustainable Data Centers',
      description: 'How green data centers and renewable energy integration are reshaping the IT industry&apos;s environmental impact. Learn about carbon-negative infrastructure, liquid cooling, and renewable energy strategies.',
      icon: <Zap size={40} />,
      href: '#sustainable-dc',
      date: 'November 15, 2025',
      readTime: '10 min read',
      author: 'Michael Torres',
      category: 'Sustainability',
      borderColor: 'border-green-100',
      hoverBorderColor: 'hover:border-green-400',
      iconGradientFrom: 'from-green-500',
      iconGradientTo: 'to-emerald-600',
      textColor: 'text-green-600',
      hoverTextColor: 'hover:text-green-700'
    },
    {
      title: 'Blockchain in Enterprise',
      description: 'Case studies on how enterprises are leveraging blockchain for supply chain, identity, and financial services. Real-world implementations and ROI analysis from Fortune 500 companies.',
      icon: <Shield size={40} />,
      href: '#blockchain-enterprise',
      date: 'November 10, 2025',
      readTime: '15 min read',
      author: 'Jennifer Wu',
      category: 'Blockchain',
      borderColor: 'border-purple-100',
      hoverBorderColor: 'hover:border-purple-400',
      iconGradientFrom: 'from-purple-500',
      iconGradientTo: 'to-purple-600',
      textColor: 'text-purple-600',
      hoverTextColor: 'hover:text-purple-700'
    },
    {
      title: 'Space-Based Connectivity',
      description: 'Analyzing the potential of satellite internet and space connectivity to bridge the global digital divide. The future of LEO satellites, ground stations, and edge computing in space.',
      icon: <Rocket size={40} />,
      href: '#space-connectivity',
      date: 'November 5, 2025',
      readTime: '11 min read',
      author: 'Alex Rivera',
      category: 'Space Tech',
      borderColor: 'border-indigo-100',
      hoverBorderColor: 'hover:border-indigo-400',
      iconGradientFrom: 'from-indigo-500',
      iconGradientTo: 'to-blue-600',
      textColor: 'text-indigo-600',
      hoverTextColor: 'hover:text-indigo-700'
    },
  ]

  const caseStudies = [
    {
      title: 'Global AI Infrastructure Deployment',
      client: 'Fortune 500 Tech Company',
      industry: 'Technology',
      challenge: 'Deploy distributed AI infrastructure across 15 regions to support real-time ML model training and inference at scale.',
      solution: 'Implemented a multi-region GPU cluster with automated MLOps pipelines, edge AI deployment, and intelligent workload distribution.',
      results: [
        '60% reduction in model training time',
        '40% cost savings on compute resources',
        '99.99% uptime across all regions',
        'Scaled to 10,000+ GPU cores seamlessly'
      ],
      technologies: ['Kubernetes', 'NVIDIA A100', 'Ray', 'MLflow', 'Terraform'],
      duration: '6 months',
      team: '15 engineers',
      icon: <Brain className="w-12 h-12" />,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Renewable Energy Data Center',
      client: 'Leading Cloud Service Provider',
      industry: 'Cloud Infrastructure',
      challenge: 'Transform legacy data center to 100% renewable energy while maintaining performance and reducing costs.',
      solution: 'Designed hybrid renewable energy system with solar, wind, and battery storage, implemented liquid cooling, and optimized workload scheduling.',
      results: [
        '100% renewable energy powered',
        '35% reduction in PUE (Power Usage Effectiveness)',
        '$2M annual cost savings',
        'Carbon-negative operations achieved'
      ],
      technologies: ['Solar Arrays', 'Wind Turbines', 'Tesla Megapacks', 'Smart Grid', 'AI Optimization'],
      duration: '12 months',
      team: '25 specialists',
      icon: <Zap className="w-12 h-12" />,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Blockchain Supply Chain Platform',
      client: 'Global Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Create transparent, fraud-resistant supply chain tracking system across 50+ suppliers and 100+ distribution centers.',
      solution: 'Built private Hyperledger Fabric blockchain with smart contracts, IoT integration, and real-time tracking dashboard.',
      results: [
        '85% reduction in counterfeit products',
        '50% faster dispute resolution',
        '99.9% supply chain visibility',
        'ROI achieved in 8 months'
      ],
      technologies: ['Hyperledger Fabric', 'Smart Contracts', 'IoT Sensors', 'React Dashboard', 'Node.js'],
      duration: '9 months',
      team: '18 developers',
      icon: <Shield className="w-12 h-12" />,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'LEO Satellite Ground Station Network',
      client: 'Emerging Space Technology Startup',
      industry: 'Space Technology',
      challenge: 'Build global ground station network to support constellation of 200+ LEO satellites with low-latency data processing.',
      solution: 'Deployed 25 ground stations worldwide with edge computing, automated satellite tracking, and real-time data processing pipelines.',
      results: [
        '< 50ms average latency achieved',
        '99.95% satellite communication uptime',
        '10TB+ daily data processing',
        'Global coverage in 18 countries'
      ],
      technologies: ['Antenna Control Systems', 'Edge Computing', 'Kafka', 'TimescaleDB', 'Python'],
      duration: '14 months',
      team: '22 engineers',
      icon: <Rocket className="w-12 h-12" />,
      gradient: 'from-indigo-500 to-cyan-600'
    },
    {
      title: 'Enterprise Cloud Migration',
      client: 'Financial Services Institution',
      industry: 'Banking & Finance',
      challenge: 'Migrate 500+ legacy applications to multi-cloud architecture while ensuring zero downtime and regulatory compliance.',
      solution: 'Implemented phased migration strategy with hybrid cloud architecture, automated testing, and comprehensive disaster recovery.',
      results: [
        'Zero downtime during migration',
        '45% infrastructure cost reduction',
        'SOC 2 and ISO 27001 compliance',
        '3x faster deployment velocity'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Vault'],
      duration: '18 months',
      team: '35 professionals',
      icon: <Cloud className="w-12 h-12" />,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Real-Time Energy Analytics Platform',
      client: 'National Utility Company',
      industry: 'Energy & Utilities',
      challenge: 'Build real-time analytics platform to optimize energy distribution across smart grid with 5 million+ connected devices.',
      solution: 'Developed scalable IoT platform with ML-powered demand forecasting, automated load balancing, and predictive maintenance.',
      results: [
        '30% improvement in grid efficiency',
        '25% reduction in energy waste',
        '$50M annual savings',
        'Real-time monitoring of 5M+ devices'
      ],
      technologies: ['Apache Kafka', 'Apache Flink', 'TensorFlow', 'InfluxDB', 'Grafana'],
      duration: '10 months',
      team: '20 data engineers',
      icon: <BarChart3 className="w-12 h-12" />,
      gradient: 'from-yellow-500 to-orange-600'
    }
  ]

  const whitepapers = [
    {
      title: 'The State of AI Infrastructure 2025',
      description: 'Comprehensive analysis of AI infrastructure trends, GPU economics, and the future of distributed training.',
      pages: '45 pages',
      downloads: '12,500+',
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: 'Carbon-Negative Data Centers: A Technical Guide',
      description: 'Step-by-step implementation guide for building environmentally sustainable data center operations.',
      pages: '32 pages',
      downloads: '8,200+',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Enterprise Blockchain: ROI Analysis Framework',
      description: 'Financial modeling and ROI calculation framework for enterprise blockchain implementations.',
      pages: '28 pages',
      downloads: '6,800+',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Space-Based Internet: Technical Architecture',
      description: 'Deep technical dive into LEO satellite constellations, ground station design, and edge computing in space.',
      pages: '38 pages',
      downloads: '5,400+',
      icon: <Globe className="w-8 h-8" />
    }
  ]

  const insights = [
    {
      title: 'The Future of AI Infrastructure',
      description: 'Exploring how next-generation AI infrastructure will transform enterprise computing, from edge AI to distributed training systems.',
      href: '#',
      icon: <TrendingUp size={32} />,
    },
    {
      title: 'Sustainable Data Centers: A Path to Carbon Neutrality',
      description: 'How green data centers and renewable energy integration are reshaping the IT industry\'s environmental impact.',
      href: '#',
      icon: <FileText size={32} />,
    },
    {
      title: 'Blockchain in Enterprise: Real-World Applications',
      description: 'Case studies on how enterprises are leveraging blockchain for supply chain, identity, and financial services.',
      href: '#',
      icon: <BookOpen size={32} />,
    },
    {
      title: 'Space-Based Connectivity: The Next Internet Frontier',
      description: 'Analyzing the potential of satellite internet and space connectivity to bridge the global digital divide.',
      href: '#',
      icon: <Award size={32} />,
    },
  ]

  return (
    <>
      <AnimatedHero
        title="Insights & Case Studies"
        subtitle="Future-Ready IT Knowledge Hub"
        description="Explore our latest insights, real-world case studies, and technical whitepapers on AI, cloud infrastructure, blockchain, and emerging technologies."
      />

      {/* Featured Insights */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-200 via-indigo-200 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl opacity-20 -translate-x-1/4 translate-y-1/4"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                Featured Insights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Latest Research & Analysis
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Deep-dive technical articles exploring the future of IT infrastructure and emerging technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {featuredInsights.map((insight, index) => (
              <div key={index} className="relative">
                <InsightCard
                  title={insight.title}
                  description={insight.description}
                  href={insight.href}
                  icon={insight.icon}
                  borderColor={insight.borderColor}
                  hoverBorderColor={insight.hoverBorderColor}
                  iconGradientFrom={insight.iconGradientFrom}
                  iconGradientTo={insight.iconGradientTo}
                  textColor={insight.textColor}
                  hoverTextColor={insight.hoverTextColor}
                />
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600 px-2">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {insight.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-purple-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                Success Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Real-World Case Studies
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover how we&apos;ve helped leading organizations transform their IT infrastructure
            </p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-indigo-200">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left side - Icon and Meta */}
                  <div className={`md:col-span-2 bg-gradient-to-br ${study.gradient} p-8 md:p-10 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-white">
                        {study.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2 text-white/90">
                          <Users className="w-5 h-5" />
                          <span className="font-medium">{study.client}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/90">
                          <Target className="w-5 h-5" />
                          <span className="font-medium">{study.industry}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                        <div>
                          <div className="text-white/70 text-sm">Duration</div>
                          <div className="font-bold text-lg">{study.duration}</div>
                        </div>
                        <div>
                          <div className="text-white/70 text-sm">Team Size</div>
                          <div className="font-bold text-lg">{study.team}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="md:col-span-3 p-8 md:p-10">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Results
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.results.map((result, i) => (
                            <div key={i} className="flex items-start space-x-2 bg-green-50 rounded-lg p-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700 font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link href="#" className="inline-flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 group">
                          <span>View Full Case Study</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Whitepapers & Downloads */}
      <Section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-indigo-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                <Sparkles className="w-4 h-4 inline-block mr-2" />
                Free Resources
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              Technical Whitepapers
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Download our in-depth research papers and technical guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whitepapers.map((paper, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    {paper.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{paper.pages}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{paper.downloads} downloads</span>
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{paper.description}</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Download Whitepaper</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from real projects delivered to clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">150+</div>
              <div className="text-blue-200 font-medium">Case Studies Published</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">45+</div>
              <div className="text-blue-200 font-medium">Technical Whitepapers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">100K+</div>
              <div className="text-blue-200 font-medium">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">98%</div>
              <div className="text-blue-200 font-medium">Client Success Rate</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s discuss how our proven methodologies and expertise can help you achieve similar results. Schedule a consultation with our team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-indigo-500/50"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-transparent border-2 border-indigo-600 text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}


