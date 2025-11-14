import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Server, Zap, Cpu, Shield, CheckCircle, Building2, Database, Cloud, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Center Modernization | Smart IT Infrastructure Services',
  description: 'Transform traditional IT environments into intelligent, automated, energy-efficient data centers built for AI workloads.',
  keywords: 'data center modernization, smart data center, IT infrastructure, data center automation, energy efficient data center',
}

export default function DataCenterModernization() {
  return (
    <>
      <AnimatedHero
        title="Data Center Modernization"
        subtitle="Smart IT Infrastructure Services"
        description="Transform traditional IT environments into intelligent, automated, energy-efficient data centers built for AI workloads."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Modernize Your Data Center</h2>
          <p className="text-lg text-accent-700 mb-6">
            Legacy data centers are struggling to keep up with modern AI workloads, real-time analytics, and cloud-native applications. We help you transform your infrastructure into intelligent, automated, and energy-efficient facilities.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Our modernization approach combines hardware upgrades, software automation, and energy optimization to create data centers ready for the next decade.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Modernization Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Server className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Infrastructure Assessment</h3>
            <p className="text-accent-600">
              Comprehensive evaluation of your current data center infrastructure, identifying bottlenecks and opportunities for improvement.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Zap className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Energy Optimization</h3>
            <p className="text-accent-600">
              Implement cooling solutions, power management systems, and renewable energy integration to reduce operational costs and carbon footprint.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Cpu className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">AI-Ready Hardware</h3>
            <p className="text-accent-600">
              Upgrade to GPU servers, high-speed networking, and storage systems optimized for AI and machine learning workloads.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Shield className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Automation & Monitoring</h3>
            <p className="text-accent-600">
              Deploy intelligent monitoring systems, automated provisioning, and predictive maintenance to ensure optimal performance and reliability.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Key Benefits</h2>
            <p className="text-xl text-accent-600">Transform your data center with modern infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureList
              features={[
                'Reduce energy consumption by up to 40%',
                'Improve performance with AI-optimized hardware',
                'Automate operations to reduce manual overhead',
                'Enhance security with modern protocols',
                'Scale infrastructure on-demand',
                'Lower total cost of ownership'
              ]}
            />
            <div className="bg-gradient-subtle rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-accent-900 mb-6">Modernization Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Liquid cooling systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">AI-powered monitoring tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Software-defined infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Renewable energy integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Edge computing capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Zero-trust security architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Use Cases</h2>
            <p className="text-xl text-accent-600">When to modernize your data center</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard
              title="Legacy Infrastructure Upgrade"
              description="Transform aging data centers with outdated hardware into modern, efficient facilities ready for AI workloads."
              icon={<Building2 size={32} />}
              delay={0}
            />
            <UseCaseCard
              title="Energy Cost Reduction"
              description="Reduce operational costs by implementing energy-efficient cooling, power management, and renewable energy solutions."
              icon={<Zap size={32} />}
              delay={0.1}
            />
            <UseCaseCard
              title="AI Workload Support"
              description="Upgrade infrastructure to support GPU-intensive AI training and inference workloads at scale."
              icon={<Cpu size={32} />}
              delay={0.2}
            />
            <UseCaseCard
              title="Automation Implementation"
              description="Deploy intelligent automation to reduce manual operations and improve reliability and efficiency."
              icon={<Server size={32} />}
              delay={0.3}
            />
            <UseCaseCard
              title="Hybrid Cloud Integration"
              description="Modernize on-premises data centers to seamlessly integrate with cloud environments for hybrid deployments."
              icon={<Cloud size={32} />}
              delay={0.4}
            />
            <UseCaseCard
              title="Compliance & Security"
              description="Upgrade security infrastructure to meet modern compliance requirements and protect against evolving threats."
              icon={<Shield size={32} />}
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Modernization Process</h2>
            <p className="text-xl text-accent-600">A systematic approach to data center transformation</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Assessment & Analysis</h3>
                <p className="text-accent-600">Comprehensive audit of current infrastructure, identifying performance bottlenecks, energy inefficiencies, and modernization opportunities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Design & Planning</h3>
                <p className="text-accent-600">Create detailed modernization roadmap with phased approach, minimizing disruption while maximizing benefits.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Implementation</h3>
                <p className="text-accent-600">Execute modernization with minimal downtime, deploying new hardware, software, and automation systems in phases.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Optimization & Support</h3>
                <p className="text-accent-600">Fine-tune systems, monitor performance, and provide ongoing support to ensure optimal operation and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'How long does data center modernization take?',
                answer: 'Modernization timelines vary from 3-12 months depending on scope. Phased approaches allow for gradual transformation with minimal business disruption.'
              },
              {
                question: 'Will modernization require downtime?',
                answer: 'We design modernization plans to minimize downtime. Most upgrades can be performed during maintenance windows or with redundant systems in place.'
              },
              {
                question: 'What ROI can we expect?',
                answer: 'Typical ROI includes 30-40% energy cost reduction, improved performance, reduced maintenance costs, and enhanced security. Most clients see ROI within 18-24 months.'
              },
              {
                question: 'Can we modernize incrementally?',
                answer: 'Yes, we offer phased modernization approaches that allow you to upgrade infrastructure incrementally while maintaining operations.'
              },
              {
                question: 'Do you handle legacy system migration?',
                answer: 'Absolutely. We specialize in migrating legacy systems to modern infrastructure while ensuring data integrity and minimal disruption.'
              }
            ]}
          />
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Real-world data center transformation success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Legacy Data Center Transformation"
              industry="Healthcare"
              challenge="A healthcare provider's 15-year-old data center was struggling with high energy costs, limited capacity for AI workloads, and frequent downtime. They needed to modernize without disrupting critical patient care systems."
              solution="We implemented a phased modernization approach: upgraded to AI-ready GPU servers, installed liquid cooling systems, deployed intelligent monitoring and automation, and integrated renewable energy sources. Maintained 99.99% uptime throughout the transition."
              results={[
                'Reduced energy consumption by 42%',
                'Increased compute capacity by 300%',
                'Eliminated unplanned downtime incidents',
                'Achieved ROI within 18 months'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="AI-Ready Infrastructure Upgrade"
              industry="Manufacturing"
              challenge="A manufacturing company wanted to implement AI for predictive maintenance and quality control but their existing data center couldn't support GPU-intensive workloads. They needed to upgrade while maintaining production systems."
              solution="Designed a hybrid approach: modernized core infrastructure with GPU servers and high-speed networking, implemented edge computing for real-time AI inference, and set up cloud connectivity for model training. Used zero-downtime migration techniques."
              results={[
                'Enabled AI workloads with 10x faster processing',
                'Reduced maintenance costs by 35%',
                'Improved product quality detection by 50%',
                'Scaled infrastructure 5x without major expansion'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Related Services</h2>
            <p className="text-xl text-accent-600">Complementary solutions for complete infrastructure transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/ai-infrastructure-services" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cpu className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">AI Infrastructure</h3>
              <p className="text-accent-600 mb-4">Deploy AI-ready infrastructure</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/green-cloud-sustainable-it" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Zap className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Green Cloud Solutions</h3>
              <p className="text-accent-600 mb-4">Sustainable IT infrastructure</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/cloud-hpc-engineering" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud & HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Hybrid cloud solutions</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Data Center Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can modernize your data center infrastructure for the future.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </Section>
    </>
  )
}


