import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import { Zap, Leaf, Sun, Wind, Battery, ArrowRight, CheckCircle, TrendingDown, BarChart3, Target, Calendar, Clock, Share2, Bookmark, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sustainable Data Centers | Kengile Insights',
  description: 'How green data centers and renewable energy integration are reshaping the IT industry&apos;s environmental impact.',
  keywords: 'sustainable data centers, green computing, renewable energy, carbon-negative infrastructure, PUE optimization',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kengile.com/insights/sustainable-data-centers' },
}

export default function SustainableDataCentersPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://kengile.com/insights-case-studies' },
              { '@type': 'ListItem', position: 3, name: 'Sustainable Data Centers', item: 'https://kengile.com/insights/sustainable-data-centers' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li><Link href="/insights-case-studies" className="text-accent-500 hover:text-primary-600 transition-colors">Insights</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Sustainable Data Centers</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Sustainable Data Centers"
        subtitle="The Path to Carbon Neutrality"
        description="How green data centers and renewable energy integration are reshaping the IT industry's environmental impact."
      />

      {/* Article Meta */}
      <Section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>November 15, 2025</span>
              </span>
              <span className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </span>
              <span className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Michael Torres</span>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-green-100 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Leaf className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Urgency of Sustainable Computing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Data centers currently consume approximately 2% of global electricity, with projections showing this could reach 8% by 2030. As AI workloads explode and digital transformation accelerates, the environmental impact of computing infrastructure has become impossible to ignore.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Forward-thinking organizations are pioneering carbon-negative data centers that not only minimize environmental harm but actively contribute to carbon sequestration. This article explores the technologies, strategies, and business cases driving this transformation.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2%</div>
                <div className="text-sm text-gray-600">Global electricity usage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
                <div className="text-sm text-gray-600">Typical PUE reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Renewable energy goal</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Technologies */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Technologies Powering Green Data Centers
            </h2>
            <p className="text-xl text-gray-600">
              Six breakthrough innovations reducing environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Renewable Energy Integration',
                description: 'Direct connection to solar farms, wind installations, and hydroelectric sources. Smart grid integration enables data centers to shift workloads based on renewable energy availability, achieving 100% renewable energy usage.',
                tech: ['Solar arrays', 'Wind turbines', 'Battery storage', 'Smart grid AI'],
                icon: <Sun className="w-8 h-8" />,
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Liquid Cooling Systems',
                description: 'Immersion cooling and direct-to-chip liquid cooling reduce energy consumption by 30-50% compared to traditional air cooling. These systems enable higher density deployments and year-round free cooling in many climates.',
                tech: ['Immersion cooling', 'Cold plates', 'Heat recovery', 'Free cooling'],
                icon: <Droplets className="w-8 h-8" />,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'AI-Powered Optimization',
                description: 'Machine learning algorithms continuously optimize cooling, power distribution, and workload placement. Google achieved 40% reduction in cooling costs using DeepMind AI to optimize their data centers.',
                tech: ['Predictive analytics', 'Automated control', 'Workload optimization', 'Real-time monitoring'],
                icon: <BarChart3 className="w-8 h-8" />,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Waste Heat Recovery',
                description: 'Capturing and repurposing waste heat for district heating, industrial processes, or greenhouse operations. Some data centers achieve net-positive energy contribution by selling excess heat.',
                tech: ['Heat exchangers', 'District heating', 'Industrial use', 'Greenhouse warming'],
                icon: <Zap className="w-8 h-8" />,
                gradient: 'from-orange-500 to-red-500'
              },
              {
                title: 'Energy Storage Solutions',
                description: 'Large-scale battery systems store excess renewable energy and provide backup power, reducing reliance on diesel generators. Tesla Megapacks and similar solutions enable 24/7 renewable operation.',
                tech: ['Lithium batteries', 'Flow batteries', 'Flywheel storage', 'Hydrogen fuel cells'],
                icon: <Battery className="w-8 h-8" />,
                gradient: 'from-green-500 to-teal-500'
              },
              {
                title: 'Next-Gen Building Design',
                description: 'Purpose-built facilities optimized for natural cooling, solar orientation, and minimal embodied carbon. Modular designs allow for flexible scaling and easier retrofitting with new technologies.',
                tech: ['Natural ventilation', 'Solar orientation', 'Low-carbon materials', 'Modular construction'],
                icon: <Wind className="w-8 h-8" />,
                gradient: 'from-cyan-500 to-blue-500'
              }
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-green-50 rounded-3xl p-8 border-2 border-green-100 hover:border-green-400 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center text-white`}>
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{tech.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.tech.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Metrics & ROI */}
      <Section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-xl text-green-100">
              Real results from sustainable data center implementations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '35-50%', label: 'Energy Cost Reduction', icon: <TrendingDown className="w-10 h-10" /> },
              { metric: '1.1-1.3', label: 'Target PUE (Power Usage Effectiveness)', icon: <Target className="w-10 h-10" /> },
              { metric: '80%+', label: 'Reduction in Carbon Emissions', icon: <Leaf className="w-10 h-10" /> },
              { metric: '2-4 years', label: 'Typical ROI Timeline', icon: <BarChart3 className="w-10 h-10" /> }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold mb-3">{item.metric}</div>
                <div className="text-green-100 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Roadmap */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sustainable Data Center Roadmap</h2>
          
          <div className="space-y-6">
            {[
              {
                phase: 'Phase 1: Assessment & Planning (Months 1-2)',
                tasks: ['Audit current energy usage and carbon footprint', 'Identify renewable energy sources', 'Calculate ROI projections', 'Secure stakeholder buy-in'],
                color: 'blue'
              },
              {
                phase: 'Phase 2: Infrastructure Upgrades (Months 3-8)',
                tasks: ['Install liquid cooling systems', 'Upgrade to energy-efficient servers', 'Implement intelligent power management', 'Deploy monitoring systems'],
                color: 'green'
              },
              {
                phase: 'Phase 3: Renewable Integration (Months 9-12)',
                tasks: ['Connect to renewable energy sources', 'Install battery storage', 'Implement smart grid controls', 'Commission heat recovery systems'],
                color: 'purple'
              },
              {
                phase: 'Phase 4: Optimization & Expansion (Ongoing)',
                tasks: ['AI-driven efficiency optimization', 'Continuous performance monitoring', 'Scale renewable capacity', 'Pursue carbon negativity'],
                color: 'orange'
              }
            ].map((phase, index) => (
              <div key={index} className={`bg-${phase.color}-50 border-l-4 border-${phase.color}-600 p-6 rounded-r-2xl`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 text-${phase.color}-600 flex-shrink-0`} />
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Data Center</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            We&apos;ve helped organizations reduce their data center carbon footprint by 80% while cutting energy costs by 35%. Our sustainable infrastructure experts can design a custom roadmap for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-green-600 rounded-2xl font-bold hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <span>Get a Sustainability Assessment</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              <span>More Insights</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
