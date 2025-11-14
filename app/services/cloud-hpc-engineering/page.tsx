import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Cloud, Cpu, Network, Shield, CheckCircle, Server, Database, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud & HPC Engineering | Multi-Cloud & Compute Services',
  description: 'Design hybrid cloud and HPC systems that deliver scalability, security, and AI-ready compute efficiency.',
  keywords: 'cloud engineering, HPC, high performance computing, hybrid cloud, multi-cloud, cloud architecture',
}

export default function CloudHPCEngineering() {
  return (
    <>
      <AnimatedHero
        title="Cloud & HPC Engineering"
        subtitle="Multi-Cloud & Compute Services"
        description="Design hybrid cloud and HPC systems that deliver scalability, security, and AI-ready compute efficiency."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Enterprise Cloud & HPC Solutions</h2>
          <p className="text-lg text-accent-700 mb-6">
            We design and implement hybrid cloud architectures and high-performance computing systems that combine the flexibility of cloud services with the power of dedicated HPC infrastructure.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Our solutions are optimized for AI workloads, scientific computing, and enterprise applications requiring massive computational resources.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Our Cloud & HPC Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Cloud className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Hybrid Cloud Architecture</h3>
            <p className="text-accent-600">
              Design and deploy hybrid cloud solutions combining public cloud, private cloud, and on-premises infrastructure for optimal performance and cost efficiency.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Cpu className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">HPC Cluster Design</h3>
            <p className="text-accent-600">
              Build high-performance computing clusters with optimized interconnects, parallel file systems, and job scheduling for scientific and AI workloads.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Network className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Multi-Cloud Strategy</h3>
            <p className="text-accent-600">
              Implement multi-cloud architectures across AWS, Azure, GCP, and specialized providers to avoid vendor lock-in and optimize costs.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Shield className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Security & Compliance</h3>
            <p className="text-accent-600">
              Ensure enterprise-grade security, compliance, and governance across all cloud and HPC environments with comprehensive monitoring and access controls.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Key Benefits</h2>
            <p className="text-xl text-accent-600">Why choose our cloud and HPC solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureList
              features={[
                'Scale compute resources on-demand',
                'Reduce infrastructure costs by up to 50%',
                'Eliminate vendor lock-in with multi-cloud',
                'Achieve high-performance computing at scale',
                'Enterprise-grade security and compliance',
                'Seamless hybrid cloud integration'
              ]}
            />
            <div className="bg-gradient-subtle rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-accent-900 mb-6">Technology Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">AWS, Azure, GCP cloud platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Kubernetes, OpenShift orchestration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Slurm, PBS job schedulers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">InfiniBand, Ethernet interconnects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Terraform, Ansible automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Prometheus, Grafana monitoring</span>
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
            <p className="text-xl text-accent-600">Applications for cloud and HPC infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard
              title="AI Model Training"
              description="Distribute large-scale AI training across cloud and HPC clusters for faster model development."
              icon={<Cpu size={32} />}
              delay={0}
            />
            <UseCaseCard
              title="Scientific Computing"
              description="Run complex simulations, molecular modeling, and climate research on high-performance clusters."
              icon={<Server size={32} />}
              delay={0.1}
            />
            <UseCaseCard
              title="Big Data Analytics"
              description="Process massive datasets with distributed computing across cloud and on-premises infrastructure."
              icon={<Database size={32} />}
              delay={0.2}
            />
            <UseCaseCard
              title="Hybrid Cloud Migration"
              description="Migrate workloads between on-premises and cloud environments for optimal cost and performance."
              icon={<Cloud size={32} />}
              delay={0.3}
            />
            <UseCaseCard
              title="Disaster Recovery"
              description="Implement multi-cloud disaster recovery solutions for business continuity."
              icon={<Shield size={32} />}
              delay={0.4}
            />
            <UseCaseCard
              title="Auto-Scaling Workloads"
              description="Automatically scale compute resources based on demand for cost optimization."
              icon={<Zap size={32} />}
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Process</h2>
            <p className="text-xl text-accent-600">How we design and deploy cloud and HPC solutions</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Requirements Analysis</h3>
                <p className="text-accent-600">Analyze your computational needs, workload patterns, and performance requirements to design the optimal architecture.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Architecture Design</h3>
                <p className="text-accent-600">Design hybrid or multi-cloud architectures with HPC clusters optimized for your specific use cases.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Implementation & Migration</h3>
                <p className="text-accent-600">Deploy infrastructure, migrate workloads, and configure automation for seamless operations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Optimization & Support</h3>
                <p className="text-accent-600">Continuously optimize performance, monitor costs, and provide ongoing support for peak efficiency.</p>
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
                question: 'What cloud providers do you support?',
                answer: 'We work with all major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and specialized HPC cloud providers. We also design hybrid solutions combining multiple providers.'
              },
              {
                question: 'How do you handle data security in multi-cloud?',
                answer: 'We implement comprehensive security measures including encryption at rest and in transit, identity and access management, network segmentation, and compliance frameworks across all cloud environments.'
              },
              {
                question: 'Can you migrate existing HPC workloads to cloud?',
                answer: 'Yes, we specialize in migrating on-premises HPC workloads to cloud or hybrid environments while maintaining performance and optimizing costs.'
              },
              {
                question: 'What is the typical cost savings with cloud migration?',
                answer: 'Cost savings vary by workload, but typically range from 30-50% through right-sizing, auto-scaling, and eliminating underutilized on-premises infrastructure.'
              },
              {
                question: 'Do you provide 24/7 support for cloud infrastructure?',
                answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, incident response, and proactive optimization for all cloud and HPC environments.'
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
            <p className="text-xl text-accent-600">Success stories from our cloud and HPC implementations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Multi-Cloud HPC Migration"
              industry="Research & Development"
              challenge="A research organization needed to migrate their HPC workloads from on-premises to cloud while maintaining performance and avoiding vendor lock-in. They required the ability to run complex simulations across multiple cloud providers."
              solution="Designed a multi-cloud HPC architecture using AWS, Azure, and GCP. Implemented Kubernetes for workload orchestration, automated job scheduling with Slurm, and unified monitoring across all clouds. Created a cost-optimization engine to route workloads to the most cost-effective provider."
              results={[
                'Reduced infrastructure costs by 55%',
                'Eliminated vendor lock-in with multi-cloud strategy',
                'Improved simulation throughput by 40%',
                'Achieved 99.95% availability across all clouds'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Hybrid Cloud for Financial Analytics"
              industry="Financial Services"
              challenge="A financial services firm needed to process massive datasets for risk analysis and trading algorithms. They required low-latency on-premises compute for trading and scalable cloud resources for analytics, with seamless integration between both."
              solution="Built a hybrid cloud architecture connecting on-premises HPC clusters with cloud data lakes. Implemented high-speed interconnects, automated data synchronization, and unified security policies. Created a seamless workflow where trading algorithms run on-premises and analytics run in the cloud."
              results={[
                'Reduced latency for trading algorithms by 60%',
                'Scaled analytics capacity 10x in the cloud',
                'Unified security and compliance across environments',
                'Reduced total infrastructure costs by 40%'
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
            <p className="text-xl text-accent-600">Complementary solutions for complete infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/ai-infrastructure-services" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cpu className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">AI Infrastructure</h3>
              <p className="text-accent-600 mb-4">GPU clusters for AI workloads</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/data-center-modernization" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Data Center Modernization</h3>
              <p className="text-accent-600 mb-4">Modernize on-premises infrastructure</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/devops-sre-automation" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Zap className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">DevOps & SRE</h3>
              <p className="text-accent-600 mb-4">Automate and optimize operations</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Build Your Cloud & HPC Infrastructure</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s design a cloud and HPC solution tailored to your computational needs.
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


