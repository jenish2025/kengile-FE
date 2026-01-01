import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Settings, GitBranch, Monitor, Zap, CheckCircle, Server, Cloud, Code, ArrowRight, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DevOps & SRE Services | IT Automation & Observability Solutions',
  description: 'Streamline your IT delivery with DevOps pipelines, Kubernetes management, and real-time observability dashboards.',
  keywords: 'DevOps, SRE, site reliability engineering, CI/CD, Kubernetes, automation, observability',
}

export default function DevOpsSREAutomation() {
  return (
    <>
      <AnimatedHero
        title="DevOps & SRE Automation"
        subtitle="IT Automation & Observability Solutions"
        description="Streamline your IT delivery with DevOps pipelines, Kubernetes management, and real-time observability dashboards."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Modernize Your IT Operations</h2>
          <p className="text-lg text-accent-700 mb-6">
            We help organizations adopt DevOps and Site Reliability Engineering (SRE) practices to improve deployment frequency, reduce failure rates, and enhance system reliability.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Our services cover the entire DevOps lifecycle , from CI/CD pipeline setup to infrastructure automation and comprehensive observability.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">DevOps & SRE Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <GitBranch className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">CI/CD Pipelines</h3>
            <p className="text-accent-600">
              Design and implement continuous integration and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, and other modern tools.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Settings className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Kubernetes Management</h3>
            <p className="text-accent-600">
              Deploy and manage Kubernetes clusters with automated scaling, service mesh integration, and comprehensive monitoring solutions.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Monitor className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Observability & Monitoring</h3>
            <p className="text-accent-600">
              Implement comprehensive observability with metrics, logs, traces, and real-time dashboards using Prometheus, Grafana, and distributed tracing systems.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Zap className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Infrastructure as Code</h3>
            <p className="text-accent-600">
              Automate infrastructure provisioning and management using Terraform, Ansible, and cloud-native tools for consistent, repeatable deployments.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Key Benefits</h2>
            <p className="text-xl text-accent-600">Transform your IT operations with DevOps and SRE</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureList
              features={[
                'Reduce deployment time by up to 90%',
                'Improve system reliability and uptime',
                'Automate repetitive tasks and workflows',
                'Enable faster time-to-market',
                'Reduce operational costs significantly',
                'Improve team collaboration and productivity'
              ]}
            />
            <div className="bg-gradient-subtle rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-accent-900 mb-6">Technology Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Jenkins, GitLab CI, GitHub Actions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Kubernetes, Docker, Helm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Terraform, Ansible, Pulumi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Prometheus, Grafana, ELK Stack</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Istio, Linkerd service mesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">AWS, Azure, GCP cloud tools</span>
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
            <p className="text-xl text-accent-600">DevOps and SRE solutions for modern IT</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard
              title="CI/CD Implementation"
              description="Set up automated pipelines for continuous integration and deployment, reducing manual errors and deployment time."
              icon={<GitBranch size={32} />}
              delay={0}
            />
            <UseCaseCard
              title="Kubernetes Orchestration"
              description="Deploy and manage containerized applications at scale with automated scaling, health checks, and rolling updates."
              icon={<Settings size={32} />}
              delay={0.1}
            />
            <UseCaseCard
              title="Infrastructure Automation"
              description="Automate infrastructure provisioning, configuration, and management for consistent, repeatable deployments."
              icon={<Zap size={32} />}
              delay={0.2}
            />
            <UseCaseCard
              title="Observability & Monitoring"
              description="Implement comprehensive monitoring, logging, and tracing for real-time visibility into system performance."
              icon={<Monitor size={32} />}
              delay={0.3}
            />
            <UseCaseCard
              title="Site Reliability Engineering"
              description="Implement SRE practices including error budgets, SLIs, SLOs, and incident response automation."
              icon={<Shield size={32} />}
              delay={0.4}
            />
            <UseCaseCard
              title="Multi-Cloud Operations"
              description="Manage and orchestrate workloads across multiple cloud providers with unified tooling and processes."
              icon={<Cloud size={32} />}
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our DevOps Process</h2>
            <p className="text-xl text-accent-600">A systematic approach to IT transformation</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Assessment & Strategy</h3>
                <p className="text-accent-600">Evaluate current processes, identify bottlenecks, and design a DevOps transformation roadmap tailored to your needs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Tool Selection & Setup</h3>
                <p className="text-accent-600">Select and configure the right CI/CD tools, container orchestration platforms, and monitoring solutions for your stack.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Pipeline Implementation</h3>
                <p className="text-accent-600">Build automated pipelines for build, test, deploy, and rollback processes with proper security and quality gates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">SRE Practices & Optimization</h3>
                <p className="text-accent-600">Implement SRE practices, establish SLIs/SLOs, set up observability, and continuously optimize for reliability and performance.</p>
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
                question: 'What is the difference between DevOps and SRE?',
                answer: 'DevOps focuses on culture, practices, and tools that bring development and operations together. SRE (Site Reliability Engineering) is a specific implementation of DevOps that applies software engineering principles to operations, with a focus on reliability, automation, and error budgets.'
              },
              {
                question: 'How long does it take to implement DevOps?',
                answer: 'Implementation timelines vary based on organization size and complexity. Typically, initial CI/CD pipelines can be set up in 2-4 weeks, with full DevOps transformation taking 3-6 months for most organizations.'
              },
              {
                question: 'Can you help migrate from legacy systems?',
                answer: 'Yes, we specialize in modernizing legacy systems and processes. We help organizations gradually adopt DevOps practices while maintaining existing operations.'
              },
              {
                question: 'What monitoring tools do you recommend?',
                answer: 'We work with industry-standard tools including Prometheus for metrics, Grafana for visualization, ELK Stack for logging, and Jaeger/Zipkin for distributed tracing. We also integrate with cloud-native monitoring services.'
              },
              {
                question: 'Do you provide training for our team?',
                answer: 'Absolutely. We provide comprehensive training on DevOps practices, tools, and SRE principles to help your team become self-sufficient and maintain the systems we build.'
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
            <p className="text-xl text-accent-600">DevOps and SRE transformation success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="CI/CD Transformation for E-commerce"
              industry="E-commerce"
              challenge="An e-commerce platform was deploying updates manually, taking 2-3 days per release with frequent rollbacks. They needed to move to continuous deployment to support their rapid growth and reduce deployment risks."
              solution="Implemented a complete CI/CD pipeline using GitLab CI, containerized applications with Docker, deployed on Kubernetes with automated testing, security scanning, and blue-green deployments. Set up comprehensive monitoring and automated rollback capabilities."
              results={[
                'Reduced deployment time from 2-3 days to 15 minutes',
                'Eliminated 95% of deployment-related incidents',
                'Increased deployment frequency from monthly to daily',
                'Improved developer productivity by 50%'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="SRE Implementation for SaaS Platform"
              industry="SaaS"
              challenge="A SaaS company was experiencing frequent outages and slow incident response. They lacked visibility into system health and had no systematic approach to reliability. Customer satisfaction was declining due to service disruptions."
              solution="Implemented SRE practices including error budgets, SLIs/SLOs, comprehensive observability with Prometheus and Grafana, automated incident response, and on-call rotation. Built runbooks and established blameless post-mortem culture."
              results={[
                'Improved system uptime from 99.5% to 99.95%',
                'Reduced mean time to resolution by 70%',
                'Eliminated 80% of preventable incidents',
                'Increased customer satisfaction scores by 35%'
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
            <p className="text-xl text-accent-600">Complementary solutions for complete IT operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/cloud-hpc-engineering" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud & HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Build scalable cloud infrastructure</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/data-engineering-analytics" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Data Engineering</h3>
              <p className="text-accent-600 mb-4">Build data pipelines and analytics</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/ai-infrastructure-services" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Code className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">AI Infrastructure</h3>
              <p className="text-accent-600 mb-4">Deploy AI workloads at scale</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your IT Operations</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s automate and optimize your IT delivery processes for better reliability and efficiency.
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


