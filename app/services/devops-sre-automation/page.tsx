import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Settings, GitBranch, Monitor, Zap, CheckCircle, Server, Cloud, Code, ArrowRight, Shield } from 'lucide-react'
import IndustryCard from '@/components/IndustryCard'

export const metadata: Metadata = {
  title: "DevOps & SRE Automation Services | Kengile",
  description: "Kengile’s DevOps & SRE Automation Service provides CI/CD pipelines, observability, and reliability engineering to speed deployments and cut toil.",
  keywords: "DevOps, SRE, site reliability engineering, CI/CD, Kubernetes, automation, observability, Kengile",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kengile.com/services/devops-sre-automation",
  },
}

export default function DevOpsSREAutomation() {
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
              { '@type': 'ListItem', position: 3, name: 'DevOps & SRE Automation Services', item: 'https://kengile.com/services/devops-sre-automation' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li><Link href="/services" className="text-accent-500 hover:text-primary-600 transition-colors">Services</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">DevOps & SRE Automation Services</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="DevOps & SRE Automation Services"
        subtitle="Build resilient systems that scale and automate repetitive toil"
        description="Build resilient systems that scale, automate repetitive toil, and transform how your teams deliver software. We don't just consult; our SRE experts work alongside your engineers to ship reliable infrastructure that drives competitive advantage."
        ctaText="Schedule a Consultation"
        ctaLink="/contact-us"
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/services"
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
                98%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Client Satisfaction
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
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                60%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Avg. Toil Reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Why DevOps and SRE Automation Matter for Operational Excellence
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Manual deployment, unreliable infrastructure, and firefighting incident response will not only hinder your progress but also squander your brightest engineers&apos; time on trivial activities. If every deployment is a roll of the dice and every outage is a firefighting exercise, your edge will soon fade away.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            At Kengile, our DevOps and SRE automation solutions harness the combined knowledge of reliability engineering and the strength of automation to deliver faster deployments, proactive incident prevention, and engineering teams who spend their time building, not babysitting, systems. We have helped our clients achieve a 90 percent reduction in deployment time, a 60 percent reduction in incidents, and thousands of engineering hours saved annually.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Our DevOps & SRE Services Customized for Your Workloads
          </h2>
          <p className="text-lg text-accent-700">
            Each business has its own set of operational requirements. Our DevOps &amp; SRE teams do not subscribe to the notion of a &quot;one-size-fits-all&quot; approach. We develop automation and reliability strategies that align with your architecture, skills, and business requirements.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <GitBranch className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">CI/CD Pipeline Engineering</h3>
              <p className="text-accent-600">
                Our pipeline engineers collaborate closely with your team to implement CI/CD pipelines that support 10,000+ deployments every month.
                We have helped companies reduce their deployment cycles from days to minutes while ensuring security and compliance.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Kubernetes &amp; Container Orchestration</h3>
              <p className="text-accent-600">
                Kengile&apos;s Kubernetes experts develop scalable Kubernetes clusters with auto-scaling, service mesh support, and cost efficiency. Whether it&apos;s 10 or 10,000 nodes, we engineer container orchestration that just works.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Monitor className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Observability &amp; Incident Response</h3>
              <p className="text-accent-600">
                True observability is knowing before your customers do. Our team sets up metrics, logs, traces, and dashboards that are actually used by your engineering teams, plus automated incident response that slashes MTTR.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Infrastructure as Code &amp; GitOps</h3>
              <p className="text-accent-600">
                We&apos;ve enabled 200+ customers to transition from ClickOps to GitOps. Our Terraform modules and Ansible playbooks are production-proven, versioned, and designed to be maintained independently by your teams.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Site Reliability Engineering</h3>
              <p className="text-accent-600">
                Real SRE is more than monitoring; it&apos;s a paradigm shift. Kengile&apos;s SRE practitioners join your team to define and implement SLIs, SLOs, error budgets, and blameless postmortems that change the way you think about reliability.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Code className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Platform Engineering &amp; Developer Experience</h3>
              <p className="text-accent-600">
                Whether you&apos;re on AWS, Azure, GCP, or all three, we design and deliver internal developer platforms that abstract complexity and supercharge productivity&mdash;self-service portals, golden paths, and guardrails that make the right way the easy way.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span>See Our Projects</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Industry Workloads */}
      <Section className="bg-white">
        <SectionHeader
          title="DevOps and SRE Engineering Built Around Your Industry Workloads"
          subtitle="At Kengile, our DevOps and SRE engineering is informed by the operational needs of each industry. We engineer automation and reliability solutions that meet the sector-specific needs of each industry."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard
              title="E-Commerce & Retail"
              description="In retail, being available during peak hours is the only thing that matters. Our engineers build DevOps and SRE solutions that handle flash sales, holiday traffic, and 24/7 operations without flinching."
              useCases={[
                'Blue-green deployments for zero-downtime releases',
                'Auto-scaling for Black Friday and promotional traffic',
                'Real-time inventory and order processing pipelines',
              ]}
            />
            <IndustryCard
              title="Financial Services & Banking"
              description="In the financial services industry, reliability and compliance are not optional. We engineer DevOps solutions that handle trading platforms, payment gateways, and compliance needs with audit-ready automation."
              useCases={[
                'Ultra-low-latency deployment pipelines',
                'Compliance-as-code for SOC 2, PCI-DSS, and SOX',
                'Automated incident response for trading platforms',
              ]}
            />
            <IndustryCard
              title="Healthcare & Life Sciences"
              description="In healthcare, the security of data, HIPAA compliance, and system uptime are all critical to patient outcomes. Our DevOps engineers build platforms that handle clinical and research workloads while maintaining security."
              useCases={[
                'HIPAA-compliant CI/CD pipelines',
                'Secure container orchestration for EHR systems',
                'Automated disaster recovery for patient data',
              ]}
            />
            <IndustryCard
              title="Manufacturing"
              description="In manufacturing, the convergence of operational technology and IT requires robust automation. Our DevOps engineers build platforms that enable connected factories, predictive systems, and real-time analytics."
              useCases={[
                'Edge computing and IoT pipeline automation',
                'Predictive maintenance system deployments',
                'Real-time analytics for production optimization',
              ]}
            />
            <IndustryCard
              title="Media & Entertainment"
              description="The media industry requires high throughput and fast iteration. Our DevOps and SRE teams build platforms for content pipelines, streaming infrastructure, and global distribution."
              useCases={[
                'Continuous delivery for content management systems',
                'Streaming infrastructure reliability engineering',
                'Global CDN and edge deployment automation',
              ]}
            />
            <IndustryCard
              title="Technology & SaaS Platforms"
              description="In SaaS and technology, release velocity and reliability are key competitive advantages. Our DevOps engineers build platforms that enable fast iteration with high stability."
              useCases={[
                'Multi-tenant Kubernetes orchestration',
                'Feature flag and progressive delivery systems',
                'SLO-driven reliability engineering',
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/our-industry-expertise"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
            >
              View More Industries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Case Studies / Our Customer Success Stories */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Customer Success Stories</h2>
            <p className="text-xl text-accent-600">
              Examine the way Kengile provides DevOps and SRE transformation services that address complex enterprise
              operational issues. Each case study illustrates the solutions developed to enhance reliability, speed, and
              engineering team enablement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="E-Commerce GitOps Deployment for Large E-Commerce Platform"
              industry="E-commerce"
              challenge="A large e-commerce company with an annual GMV of $500M+ was deploying in a manual process, which took 2-3 days per release with a 40% rollback rate. Releases were completely stalled during peak times, missing out on competitive benefit and disappointing engineering teams."
              solution="Kengile developed a GitOps pipeline with blue-green deployment, test gates, and progressive delivery via feature flags. Our engineers embedded with their engineering team for 12 weeks, implementing ArgoCD, security scanning, and rollback functionality, along with deployment runbooks and comprehensive training."
              results={[
                'Decreased deployment time by 95%',
                'Reduced rollback rate from 40% to 5%',
                'Improved release velocity by 15x',
                'Attained 99.95% deployment success rate'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="DevOps Practice for Digital Health Platform"
              industry="Healthcare"
              challenge="A telemedicine healthcare platform experienced slow delivery of features and frequent outages, affecting patient care and regulatory requirements. Their deployment process took days, and issues were addressed in a reactive manner."
              solution="Kengile introduced a DevOps practice specific to the healthcare industry, incorporating CI/CD pipelines, automated testing, and secure deployment processes adhering to HIPAA guidelines. We implemented monitoring, alerting, automated rollbacks, and created runbooks with comprehensive team training."
              results={[
                'Decreased deployment time by 85%',
                'Increased release deployments by 10x',
                'Decreased critical incidents by 65%',
                'Achieved 99.9% system availability'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* Business Benefits & Technical Stack */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Business Benefits You Can Get From Our DevOps and SRE Services"
            subtitle="From Fortune 500 companies to successful startups, our DevOps and SRE offerings enable some of the most complex software delivery environments. Here’s how companies like yours achieve tangible outcomes:"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all">
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Faster Time to Market</h3>
              <p className="text-accent-600 text-sm">
                Our engineers enable teams to deploy multiple times a day, not once a quarter. We analyze and optimize CI/CD
                pipelines, set up feature flags, and design deployment automation to cut release cycles from weeks to minutes.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all">
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Proactive Incident Prevention</h3>
              <p className="text-accent-600 text-sm">
                From chaos engineering to predictive monitoring, our SRE engineers design systems that detect problems before
                they affect customers. We set up SLO-based alerting and remediation to catch problems early.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all">
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Engineering Productivity Improvements</h3>
              <p className="text-accent-600 text-sm">
                Developer self-service portals mean no ticket queues. Our platform engineering efforts usually cut provisioning
                time by 90% and give engineers more time to build features, not infrastructure.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all">
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Zero-Downtime Operations</h3>
              <p className="text-accent-600 text-sm">
                Blue-green deployments, canary releases, and automated rollbacks ensure your releases don’t affect customers.
                We engineer for resilience so your systems remain up even during large changes.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all">
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Compliance &amp; Security Automation</h3>
              <p className="text-accent-600 text-sm">
                DevSecOps isn’t an add-on for us. We set up policy-as-code, automated vulnerability scanning, and
                compliance-as-code so security and compliance are baked into every release.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all">
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Data-Driven Reliability Decisions</h3>
              <p className="text-accent-600 text-sm">
                Our data engineering and observability practices give you clear insights into system behavior so you can make
                informed, evidence-based decisions about where to invest in reliability and performance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our DevOps & SRE Engineering Process"
            subtitle="Kengile has a tested and structured, step-by-step process for DevOps and SRE engineering, developed and honed on hundreds of enterprise-level projects. Our process ensures successful deployments, robust infrastructure, and verifiable operational gains."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Discovery &amp; Requirements Analysis</h3>
                <p className="text-accent-600">
                  We analyze your current CI/CD pipelines, release management, incident management, and operational data. Our engineers evaluate reliability shortcomings,
                  automation potential, and SLO/SLI requirements to develop a comprehensive engineering strategy specific to your DevOps and SRE requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Architecture Design &amp; Planning</h3>
                <p className="text-accent-600">
                  Our engineers design scalable CI/CD pipelines, infrastructure as code, monitoring infrastructure, and SRE methodologies tailored to your workloads.
                  We provide design blueprints, tooling recommendations, implementation plans, and specific success metrics related to availability and operational robustness.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Implementation &amp; Embedding</h3>
                <p className="text-accent-600">
                  We undertake transformations in a controlled and staged manner, embedding our engineers with your team. Pipelines, automated testing, deployment methodologies,
                  incident management playbooks, and chaos experiments are implemented, with knowledge transfer so your team can maintain and extend the environment.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Optimization &amp; Ongoing Support</h3>
                <p className="text-accent-600">
                  We further optimize pipelines, performance monitoring, alert thresholds, and reliability engineering. We offer continuous improvement processes,
                  blameless postmortem analysis, and training to enable your team to work confidently and independently on your DevOps and SRE processes.
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
            title="Why Choose Kengile as Your DevOps & SRE Automation Partner"
            subtitle="Kengile is no ordinary DevOps consulting organization. Our engineering team has decades of experience working on CI/CD implementations for Fortune 500 companies, SRE strategy development for high-growth startups, and infrastructure optimization for complex workloads."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <GitBranch className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Elastic Pipeline Scaling</h3>
              <p className="text-accent-600 text-sm">
                Automatically scale CI/CD runners and build agents based on real-world usage patterns for faster builds during peak development cycles.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Multi-Cloud Flexibility</h3>
              <p className="text-accent-600 text-sm">
                Design architectures that allow for effortless deployment on AWS, Azure, and GCP, with no vendor lock-in.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Enterprise-Grade Security &amp; Compliance</h3>
              <p className="text-accent-600 text-sm">
                All DevOps environments adhere to the highest standards of security and compliance, from SOC 2 to HIPAA.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Seamless Legacy Integration</h3>
              <p className="text-accent-600 text-sm">
                Our solutions are designed to integrate seamlessly with legacy on-premises infrastructure and hybrid IT environments.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Code className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Purpose-Built for Modern Workloads</h3>
              <p className="text-accent-600 text-sm">
                Our pipelines are designed from the ground up for microservices, containers, serverless, and cloud-native applications.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Transparent Pricing &amp; Cost Optimization</h3>
              <p className="text-accent-600 text-sm">
                No surprise infrastructure bills. Our optimization services can reduce your overall cloud and tooling expenses by orders of magnitude.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Technical Stack We Work With"
            subtitle="We work with the industry's leading DevOps and SRE tools to build automation pipelines, reliable infrastructure, and observability platforms that fit your engineering environment."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-500 hover:shadow-lg transition-all">
              <GitBranch className="text-primary-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-accent-900 mb-3">CI/CD Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'CircleCI', 'Tekton'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">{tool}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-accent-900 mb-3">Container &amp; Orchestration</h3>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Docker', 'Helm', 'OpenShift', 'Rancher', 'Istio'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">{tool}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-500 hover:shadow-lg transition-all">
              <Code className="text-primary-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-accent-900 mb-3">Infrastructure as Code</h3>
              <div className="flex flex-wrap gap-2">
                {['Terraform', 'Ansible', 'Pulumi', 'AWS CDK', 'Crossplane', 'Chef'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">{tool}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-500 hover:shadow-lg transition-all">
              <Monitor className="text-primary-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-accent-900 mb-3">Observability &amp; Monitoring</h3>
              <div className="flex flex-wrap gap-2">
                {['Prometheus', 'Grafana', 'Datadog', 'ELK Stack', 'Jaeger', 'OpenTelemetry'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">{tool}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-accent-900 mb-3">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Hybrid Cloud'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">{tool}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-accent-900 mb-3">Security &amp; Compliance</h3>
              <div className="flex flex-wrap gap-2">
                {['Vault', 'SonarQube', 'Snyk', 'Trivy', 'OPA', 'Falco'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Related Services</h2>
            <p className="text-xl text-accent-600">Complementary solutions to enhance your DevOps &amp; SRE capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/cloud-hpc-engineering" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud &amp; HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Scale infrastructure and improve performance for high-availability systems</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/data-center-modernization" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Data Center Modernization</h3>
              <p className="text-accent-600 mb-4">Upgrade legacy environments to support modern DevOps operations</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/green-cloud-services" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Zap className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Green Cloud</h3>
              <p className="text-accent-600 mb-4">Optimize cloud usage to reduce cost and improve efficiency</p>
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
                question: 'What is the difference between DevOps and SRE?',
                answer:
                  'DevOps is all about the culture and technical approaches that enable fast and reliable software delivery, like CI/CD, infrastructure as code, and close collaboration between development and operations teams. SRE (Site Reliability Engineering) is a Google-developed set of DevOps practices with a strong focus on reliability via SLIs/SLOs, error budgets, and treating operations as a software engineering problem. At Kengile, we often provide both together DevOps for speed, and SRE for reliability in production.'
              },
              {
                question: 'How long does a typical DevOps transformation take?',
                answer:
                  'That depends on your current situation and goals. Quick wins, such as setting up an initial CI/CD pipeline, can typically be accomplished in 2–4 weeks. Comprehensive transformations that include infrastructure automation, observability, and SRE practices usually take 3–6 months. Cultural transformation is ongoing, so we break our work into phases so you see quick value while progressing toward long-term maturity.'
              },
              {
                question: 'Can you assist with migrating from legacy systems?',
                answer:
                  'Yes. We frequently help organizations modernize legacy systems and processes while maintaining business continuity. Our teams gradually introduce automation, CI/CD, and observability, while integrating with or incrementally replacing legacy tooling and infrastructure to reduce risk.'
              },
              {
                question: 'What kinds of tools and platforms do you work with?',
                answer:
                  'We work with a broad range of industry-standard tools for CI/CD, infrastructure as code, observability, and cloud platforms. This includes Jenkins, GitLab CI, GitHub Actions, ArgoCD, Kubernetes, Terraform, Prometheus, Grafana, ELK Stack, and major cloud providers such as AWS, Azure, and Google Cloud.'
              },
              {
                question: 'Do you provide training and handover to our internal team?',
                answer:
                  'Absolutely. Enablement is a core part of every engagement. We provide hands-on training, documentation, runbooks, and pairing sessions so your internal teams can confidently operate, extend, and evolve the DevOps and SRE capabilities we build together.'
              }
            ]}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Project Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Share your project requirements and let&apos;s co-create DevOps and SRE automation that transforms how your teams deliver software.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Share Your Project Requirements
          </Link>
        </div>
      </Section>
    </>
  )
}


