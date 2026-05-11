import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import IndustryCard from '@/components/IndustryCard'
import {
  Leaf,
  Cloud,
  Zap,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Server,
  Users,
  DollarSign,
  Activity,
  Shield,
  ArrowRight,
  Settings
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Green Cloud & Sustainable IT Services | Carbon-Aware Cloud | Kengile',
  description:
    'Reduce energy costs and carbon emissions with Kengile\'s Green Cloud & Sustainable IT Services. Build sustainable IT infrastructure, optimize cloud systems, and meet ESG goals.',
  keywords:
    'green cloud, sustainable IT, carbon neutral cloud, energy efficient data center, sustainable technology, green IT',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kengile.com/services/green-cloud-services',
  },
}

export default function GreenCloudSustainableIT() {
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://kengile.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Green Cloud & Sustainable IT Services', item: 'https://kengile.com/services/green-cloud-services' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link>
            </li>
            <li className="text-accent-400">/</li>
            <li>
              <Link href="/services" className="text-accent-500 hover:text-primary-600 transition-colors">Services</Link>
            </li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Green Cloud & Sustainable IT Services</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Green Cloud Services"
        subtitle="Carbon-Aware Cloud for a Greener Future"
        description="Build sustainable data centers and carbon-aware cloud systems with Kengile's Green Cloud Services. Cut energy costs, reduce environmental impact, and achieve your organization's sustainability goals."
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
                Carbon Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
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
            Why Green Cloud Solutions Are Essential for Business Growth
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Your technology infrastructure may be secretly wasting resources and harming the planet. Outdated data centers
            and inefficient cloud architecture could be undermining your sustainability efforts without you even noticing.
            Resource-intensive operations, inefficient capacity, and a lack of carbon visibility all add up to a serious
            environmental problem and expense. As regulations become stricter and stakeholder demands escalate, these issues
            become a competitive disadvantage, pushing organizations to invest in compliance rather than innovation.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            At Kengile, our Green Cloud expertise sweeps these issues aside and leverages sustainability as a source of
            differentiation. We design efficient infrastructure, implement carbon-smart workload management, and develop
            automated monitoring to reduce environmental impact, improve performance, and lower costs.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Our Custom Green Cloud Services
          </h2>
          <p className="text-lg text-accent-700">
            Our Green Cloud Services focus on six key pillars designed to transform your IT infrastructure into a sustainable
            competitive advantage. Kengile&apos;s experts assess your systems and deliver solutions that reduce environmental
            impact while improving performance and reliability.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Leaf className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Green Data Centers</h3>
              <p className="text-accent-600">
                We develop and operate data centers that run on renewable energy, with state-of-the-art cooling systems,
                energy-efficient equipment, and optimized PUE ratios.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Carbon-Conscious Cloud Design</h3>
              <p className="text-accent-600">
                Our experts design cloud systems that dynamically route workloads to areas with lower carbon emissions,
                leveraging renewable energy sources and offloading non-critical workloads in time.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Smart Energy IT Infrastructure</h3>
              <p className="text-accent-600">
                We deploy smart energy IT infrastructure optimized for maximum energy efficiency through strategic workload
                management, server consolidation, and innovative virtualization technology.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <BarChart3 className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Renewable Energy Integration</h3>
              <p className="text-accent-600">
                Kengile provides real-time renewable resource matching, power purchase agreements (PPAs), and on-site
                generation to maximize the use of renewable energy resources in operations.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <CheckCircle className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Sustainability Reporting &amp; Analytics</h3>
              <p className="text-accent-600">
                We connect your infrastructure to comprehensive carbon reporting and ESG analytics, providing clear and
                actionable sustainability insights for all stakeholders and authorities.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Green IT Governance</h3>
              <p className="text-accent-600">
                We develop and maintain strong green IT governance practices, including carbon reporting, environmental
                compliance monitoring, and sustainable procurement policies.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-white">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Kengile provides Green Cloud Solutions for each industry's specific needs. Our experts design sustainable, robust, and optimized infrastructure that reduces environmental footprints while increasing business value."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard
              title="Technology & Data Centers"
              description="We provide eco-friendly infrastructure for tech firms to reduce carbon footprints without affecting performance. Our solutions help achieve carbon neutrality and smooth integration of renewable energy sources."
              useCases={[
                'Migrate data centers to operate on 100% renewables',
                'Integrate workload scheduling that considers carbon emissions',
                'Develop real-time energy consumption dashboards',
              ]}
            />
            <IndustryCard
              title="Energy & Utilities"
              description="Kengile provides green IT solutions for smart grid management, renewable energy, and eco-friendly utility infrastructure. Our solutions accelerate the transition to clean energy."
              useCases={[
                'Design smart grid data platforms with minimal environmental impact',
                'Predict and optimize renewable energy sources',
                'Design sustainable SCADA and IoT infrastructure',
              ]}
            />
            <IndustryCard
              title="Manufacturing"
              description="We assist manufacturing firms in adopting sustainable IT infrastructure that supports their environmental initiatives. Our solutions help achieve green manufacturing and circular economy objectives."
              useCases={[
                'Optimize factory IT energy consumption',
                'Design carbon emission tracking in the supply chain',
                'Support sustainable production analytics',
              ]}
            />
            <IndustryCard
              title="Financial Services"
              description="Kengile assists banks and financial organizations in achieving ESG targets by developing sustainable IT infrastructure. Our strategy supports green finance, with compliance always in mind."
              useCases={[
                'Develop carbon-neutral trading platforms',
                'Support ESG reporting and analysis',
                'Develop sustainable data center management',
              ]}
            />
            <IndustryCard
              title="Real Estate & Construction"
              description="We develop green IT solutions for smart buildings and sustainable property management. Our infrastructure supports net-zero operations and environmental ratings."
              useCases={[
                'Develop smart building energy management systems',
                'Support real-time environmental monitoring',
                'Develop sustainable property analytics platforms',
              ]}
            />
            <IndustryCard
              title="Logistics & Transportation"
              description="We develop sustainable IT configurations for fleet management and supply chain optimization. Our solutions reduce transportation emissions with optimized routing and operations."
              useCases={[
                'Develop carbon-optimized route planning systems',
                'Support fleet electrification analytics',
                'Develop sustainable logistics dashboards',
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/our-industry-expertise"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
            >
              View All Industries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Client Success Stories"
            subtitle="See how Kengile helps companies transform their IT spine to reduce environmental impact, reduce costs, and achieve sustainability goals. These case studies illustrate the real-world outcomes of actual transformations."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Technology Carbon-Neutral Cloud Migration"
              industry="Technology"
              challenge="A leading global tech company wanted to reduce its data center carbon emissions by 50% to fulfill ambitious sustainability goals, all while maintaining performance levels for its 100 million users."
              solution="Kengile developed a carbon-conscious cloud migration strategy, migrating workloads to match renewable energy sources and utilizing clean energy regions for workload processing."
              results={[
                'Carbon emissions lowered by 65%',
                'Annual energy expenses reduced by $8 million',
                'Mission-critical workloads powered by 100% renewable energy',
                '99.99% service availability maintained during the migration',
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Energy & Utilities Smart Grid Sustainable Infrastructure"
              industry="Energy & Utilities"
              challenge="A large energy company had an outdated IT infrastructure that wasted excess energy and was not scalable with the company's overall goal of a clean energy future. They required an IT infrastructure that reflected their clean energy vision."
              solution="Kengile developed a sustainable IT infrastructure with edge computing and energy-efficient data centers, featuring real-time energy optimization and carbon measurement for the entire system."
              results={[
                'IT energy consumption reduced by 55%',
                'Real-time renewable energy matching capability',
                '$15 million in operational expense savings over three years',
                'Carbon-neutral IT operations achieved',
              ]}
              delay={0.1}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
            >
              View More Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="How You Benefit from Our Green Cloud Services"
            subtitle="A sustainable IT system provides environmental compliance, cost savings, and a competitive advantage. Kengile assists companies in creating green systems to deliver tangible outcomes."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Faster to Sustainability</h3>
              <p className="text-accent-600 text-sm">
                With our expertise, Kengile accelerates the implementation of green systems, automates carbon tracking, and
                optimizes processes to kick-start your net-zero transformation.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <CheckCircle className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Better Environmental Compliance</h3>
              <p className="text-accent-600 text-sm">
                We offer comprehensive monitoring, reporting, and management to ensure your IT systems comply with and exceed
                environmental regulations and ESG requirements.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Growth-Friendly Scalability</h3>
              <p className="text-accent-600 text-sm">
                Our experts design sustainable systems that scale with your business, supporting increased workloads and new
                projects without undermining sustainability initiatives.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Reduced Energy Bills</h3>
              <p className="text-accent-600 text-sm">
                Kengile optimizes your systems to minimize energy consumption, waste, and operating costs through more
                efficient resource utilization.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Future-Friendly Design</h3>
              <p className="text-accent-600 text-sm">
                We design systems that support emerging sustainable technologies, incorporate renewable energy sources, and
                keep pace with changing environmental standards.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Easy Operations</h3>
              <p className="text-accent-600 text-sm">
                Our tools automate energy, carbon, and sustainability reporting, reducing manual effort and allowing your
                team to concentrate on high-level initiatives.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Enterprise-Grade Tech Stack We Work With"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Cloud Platforms</h3>
              <p className="text-accent-700 text-sm">AWS | Azure | GCP | Oracle Cloud</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Energy Management</h3>
              <p className="text-accent-700 text-sm">
                PowerShift | WattTime | Electricity Maps | Carbon Aware SDK | OpenADR
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Monitoring &amp; Analytics</h3>
              <p className="text-accent-700 text-sm">
                Grafana | Prometheus | CloudWatch | Azure Monitor | Datadog
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Virtualization &amp; Containers</h3>
              <p className="text-accent-700 text-sm">
                Kubernetes | Docker | VMware vSphere | OpenStack | Proxmox
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Automation &amp; IaC</h3>
              <p className="text-accent-700 text-sm">
                Terraform | Ansible | Pulumi | CloudFormation | Crossplane
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Carbon Tracking &amp; Reporting</h3>
              <p className="text-accent-700 text-sm">
                Cloud Carbon Footprint | Climatiq | Watershed | Persefoni | Salesforce Net Zero
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Sustainable IT Transformation Process"
            subtitle="Kengile follows a structured, sustainability-first methodology refined across complex enterprise transformations. Each phase is designed to ensure environmental impact reduction, performance optimization, and measurable results."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Energy &amp; Carbon Assessment</h3>
                <p className="text-accent-600">
                  We evaluate your end-to-end IT ecosystem, including energy consumption, carbon emissions, cooling
                  efficiency, and hardware utilization. This phase identifies sustainability gaps, inefficiencies, and
                  opportunities for green transformation, forming a clear baseline for improvement.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Sustainable Architecture Design</h3>
                <p className="text-accent-600">
                  Our engineers design a green cloud architecture covering renewable energy integration, carbon-aware
                  workload routing, efficient cooling strategies, and sustainable hardware selection. We define optimization
                  strategies, monitoring frameworks, and technology choices aligned with environmental and business goals.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Green Implementation &amp; Validation</h3>
                <p className="text-accent-600">
                  We build sustainable infrastructure using iterative phases, implementing energy optimization, carbon
                  tracking, renewable energy matching, and efficiency improvements. Continuous monitoring and validation
                  ensure measurable environmental impact reduction across all systems.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Production Deployment &amp; Optimization</h3>
                <p className="text-accent-600">
                  We deploy green infrastructure into production with minimal disruption, fine-tune energy efficiency,
                  optimize carbon performance, and configure sustainability dashboards and reporting. Knowledge transfer and
                  documentation ensure your teams can confidently operate and scale the sustainable platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Kengile */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Choose Kengile as Your Green Cloud Services Provider"
            subtitle="Building sustainable IT infrastructure requires expertise, careful planning, and precise execution. Kengile delivers proven strategies and hands-on experience to make your infrastructure green, efficient, and fully optimized."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Users className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Experienced Green IT Engineers</h3>
              <p className="text-accent-600 text-sm">
                Our senior sustainability engineers guide every project, providing expert advice and reliable implementation
                from start to finish.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Vendor-Neutral Solutions</h3>
              <p className="text-accent-600 text-sm">
                We design solutions for your sustainability goals, not vendor incentives, to maximize environmental value.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Zero-Downtime Deployment</h3>
              <p className="text-accent-600 text-sm">
                A gradual, staged deployment ensures seamless business continuity as you transition to a greener environment.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Measurable Environmental ROI</h3>
              <p className="text-accent-600 text-sm">
                We monitor and measure carbon savings and energy conservation to show the real environmental value.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Leaf className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Sustainability-Centric Design</h3>
              <p className="text-accent-600 text-sm">
                Every decision is guided by sound environmental principles to reduce carbon footprints and maximize
                efficiency.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">24/7 Post-Launch Support</h3>
              <p className="text-accent-600 text-sm">
                We remain committed to sustaining your green operations for at least 12 months following successful launch.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            subtitle="Complementary solutions to boost your green cloud and sustainable IT capabilities."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/data-center-modernization"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                Data Center Modernization
              </h3>
              <p className="text-accent-600 mb-4">
                Upgrade legacy infrastructure to be energy-efficient and cloud-ready.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/cloud-hpc-engineering"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                Cloud &amp; HPC Engineering
              </h3>
              <p className="text-accent-600 mb-4">
                Scale and optimize compute infrastructure for performance and efficiency.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services/ai-infrastructure-services"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                AI Infrastructure
              </h3>
              <p className="text-accent-600 mb-4">
                Optimize your AI workloads with energy-efficient, scalable, and reliable cloud systems.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'How long does a typical green cloud transformation take?',
                answer:
                  'It depends on the size and complexity of your IT infrastructure, as well as how it is currently set up. Most projects take 8 to 16 weeks for the first phase rollout. Kengile follows an agile approach with frequent milestones, so you will see the benefits of sustainability right away while we work on the complete green cloud solution.',
              },
              {
                question: 'What about ROI, and when environmental benefits show up?',
                answer:
                  'ROI depends on your organization and how you are currently consuming energy. In most projects, you will see tangible results in 3 to 6 months, including lower energy costs, reduced carbon emissions, and improved sustainability metrics. Kengile identifies specific environmental KPIs from the very beginning and keeps you updated on our progress toward the complete green cloud solution.',
              },
              {
                question: 'Can you work with our existing infrastructure and cloud providers?',
                answer:
                  'Yes. Kengile is vendor-agnostic and works with your existing infrastructure, tools, and cloud providers. We optimize what you already have in place and recommend changes only when they offer a real benefit in terms of sustainability, efficiency, or cost savings.',
              },
              {
                question: 'How do you measure and track carbon reduction?',
                answer:
                  'We set up comprehensive carbon tracking and monitoring for your infrastructure. Based on industry standards and best practices, we set up baselines, monitor real-time carbon emissions, and provide in-depth information on your progress toward your sustainability goals.',
              },
              {
                question: 'How do we maintain our performance levels while reducing the environmental impact?',
                answer:
                  'Performance and sustainability are not opposing forces; they complement each other. Our green infrastructure generally increases performance levels by optimizing resource use, allocating workloads effectively, and reducing latency. Each sustainability initiative is selected to maintain or even improve your performance levels.',
              },
              {
                question: 'What about knowledge transfer to your in-house team?',
                answer:
                  'We provide comprehensive documentation, training, and assistance to ensure that your team is able to operate and develop the sustainable configuration effectively. Kengile remains involved in the transition process and provides advisory assistance as needed.',
              },
            ]}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation with our sustainability experts to discuss your challenges and explore how we can
            help you achieve your environmental goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Assessment
            </Link>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}


