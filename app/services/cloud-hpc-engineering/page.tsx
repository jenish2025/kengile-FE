import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import SectionHeader from '@/components/SectionHeader'
import IndustryCard from '@/components/IndustryCard'
import FeatureCard from '@/components/FeatureCard'
import { Cloud, Cpu, Network, Shield, CheckCircle, Server, Database, Zap, ArrowRight, Brain, FlaskConical, BarChart3, TrendingDown, Users, DollarSign, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud & HPC Engineering | Multi-Cloud & Compute Services',
  description: 'Design hybrid cloud and HPC systems that deliver scalability, security, and AI-ready compute efficiency.',
  keywords: 'cloud engineering, HPC, high performance computing, hybrid cloud, multi-cloud, cloud architecture',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://kengile.com/services/cloud-hpc-engineering',
  },
}

export default function CloudHPCEngineering() {
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
              { '@type': 'ListItem', position: 3, name: 'Cloud & HPC Engineering', item: 'https://kengile.com/services/cloud-hpc-engineering' },
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
            <li className="text-accent-900 font-medium">Cloud & HPC Engineering</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Cloud & HPC Engineering Services"
        subtitle="Cloud & HPC Engineering Services"
        description="Design hybrid cloud and high-performance computing systems that deliver unmatched scalability, rock-solid security, and AI-ready compute efficiency. We don't just deploy infrastructure, but we also architect your competitive advantage."
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
                50%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Avg. Cost Savings
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Why Enterprise Cloud and HPC Solutions Matter for Scalable Performance
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Conventional infrastructure can be restrictive in terms of performance and scalability, particularly when it comes to AI and compute-intensive applications. Inflexible on-premises infrastructure and unoptimized cloud infrastructure can lead to higher expenses and scalability barriers that impede innovation.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Our enterprise cloud and HPC solutions at Kengile integrate the benefits of cloud flexibility and specialized high-performance computing to provide faster processing, optimized resource use, and scalable performance for AI, scientific, and enterprise applications.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Our Cloud & HPC Services Customized to Your Workloads
          </h2>
          <p className="text-lg text-accent-700">
            Each business has its own set of computational requirements. Our engineering teams do not subscribe to the idea of a &quot;one-size-fits-all&quot; approach. We engineer infrastructure that meets your exact needs, whether you are a research institution advancing the frontiers of science or an enterprise growing AI workloads.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Hybrid Cloud Architecture</h3>
              <p className="text-accent-600">
                Our cloud architects collaborate closely with your team to architect and implement hybrid architectures that integrate seamlessly with public cloud, private cloud, and on-premises infrastructure. Through our <strong>cloud &amp; HPC engineering services</strong>, we have enabled enterprises to reduce latency by 60% while retaining complete data sovereignty.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Network className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Multi-Cloud Strategy &amp; Migration</h3>
              <p className="text-accent-600">
                Vendor lock-in is costly. Our team enables multi-cloud architectures on AWS, Azure, GCP, and niche clouds, allowing you to deploy workloads wherever they excel while keeping your costs under control.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Security &amp; Compliance Engineering</h3>
              <p className="text-accent-600">
                Security matters to us; that’s why our team provides enterprise-level security, compliance, and governance for all your cloud and HPC resources. SOC 2, HIPAA, and more, we have you covered.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Database className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Data Pipeline &amp; Storage Architecture</h3>
              <p className="text-accent-600">
                HPC requires a high-performance data infrastructure. Our team builds scalable storage architectures and data pipelines that match the performance of your most intensive applications, without bottlenecks or tradeoffs.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cpu className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">GPU &amp; Accelerated Computing</h3>
              <p className="text-accent-600">
                AI and ML applications require dedicated hardware. Kengile&apos;s engineering team sets up and tunes GPU clusters, TPU instances, and custom accelerators to achieve the highest possible training and inference rates.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">HPC Cluster Design &amp; Optimization</h3>
              <p className="text-accent-600">
                Kengile&apos;s HPC experts design high-performance computing clusters with optimized interconnects, parallel file systems, and smart job scheduling. Whether you are performing CFD analysis or training foundation models, our cloud &amp; HPC engineering services ensure clusters are designed to deliver maximum performance.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span>See Our Client Projects</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Industry Workloads */}
      <Section className="bg-white">
        <SectionHeader
          title="Cloud and HPC Engineering Built Around Industry Workloads"
          subtitle={<>At Kengile, <strong><em>cloud and HPC engineering</em></strong> is driven by the working realities of each industry. We engineer hybrid cloud and high-performance computing environments that meet the sector-specific needs of each industry, including data intensity, latency sensitivity, regulatory requirements, and scalability needs.</>}
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<FlaskConical size={36} className="text-white" />}
              title="Healthcare and Life Sciences"
              description="In the healthcare and life sciences industry, data volumes, regulatory requirements, and reliability are not negotiable. Our engineers design cloud and HPC platforms that meet research-driven computation and clinical workloads without sacrificing security and availability."
              features={[
                "High-throughput genomic and biomedical research",
                "AI-enabled medical imaging and diagnostics",
                "Secure management of regulated patient and clinical data",
              ]}
              colorTheme="blue"
            />
            <FeatureCard
              icon={<BarChart3 size={36} className="text-white" />}
              title="Financial Services and Banking"
              description="In the financial services industry, milliseconds count, and accuracy is paramount. Kengile engineers cloud and HPC platforms that meet latency-sensitive workloads, complex analytics, and rigorous regulatory requirements."
              features={[
                "Large-scale risk modeling and financial simulations",
                "Real-time fraud detection and transaction monitoring",
                "Compute scalability for compliance and stress testing",
              ]}
              colorTheme="green"
            />
            <FeatureCard
              icon={<Cpu size={36} className="text-white" />}
              title="Manufacturing"
              description="For manufacturing companies, computing performance is a critical factor in manufacturing efficiency and innovation. Kengile’s cloud and HPC platforms support simulation-driven design, operation, and real-time analytics on the factory floor."
              features={[
                "Digital twins and engineering simulation",
                "Predictive maintenance and AI-driven quality assurance",
                "Real-time analytics for smart manufacturing infrastructure",
              ]}
              colorTheme="orange"
            />
            <FeatureCard
              icon={<Network size={36} className="text-white" />}
              title="Media and Telecommunications"
              description="Media and telecommunication infrastructure require high throughput and low latency. Our cloud and HPC platforms are designed to handle large amounts of data while ensuring consistent performance."
              features={[
                "High-performance media processing and rendering",
                "Network analytics and performance optimization",
                "Scalable compute and storage for content delivery networks",
              ]}
              colorTheme="purple"
            />
            <FeatureCard
              icon={<DollarSign size={36} className="text-white" />}
              title="Retail and E-Commerce"
              description="In retail and e-commerce, customer experience is driven by speed, analytics, and elasticity. Kengile’s cloud and HPC platforms support real-time analytics and peak-load operation."
              features={[
                "Personalization and recommendation systems",
                "Demand forecasting and dynamic pricing engines",
                "Elastic compute for seasonal and promotional traffic",
              ]}
              colorTheme="teal"
            />
            <FeatureCard
              icon={<Server size={36} className="text-white" />}
              title="Information Technology and Enterprise Platforms"
              description="In enterprise IT, multiple workloads need to work seamlessly together in hybrid environments. Our engineers design cloud and HPC platforms to support mission-critical applications at scale."
              features={[
                "Hybrid cloud and HPC orchestration",
                "Enterprise AI and analytics workloads",
                "Performance and cost optimization across infrastructure",
              ]}
              colorTheme="cyan"
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

      {/* Outcomes / Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Real-World Outcomes from Real-World Projects
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              See how Kengile’s cloud and HPC engineering solutions solve complex enterprise computing problems by optimizing performance, scaling effectively, and supporting mission-critical workloads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <CaseStudyCard
              title="Multi-Cloud HPC Migration"
              industry="Research and Development"
              challenge="A research institution was constrained by its on-premises HPC infrastructure that lacked scalability and created vendor lock-in. They needed to migrate complex simulation workloads to the cloud while maintaining performance and multi-cloud flexibility."
              solution="Kengile developed a multi-cloud HPC solution across AWS, Azure, and Google Cloud. Our team engineered Kubernetes for workload portability, Slurm for automated job management, and unified monitoring across environments, with a cost optimization layer that routed jobs to the most economical cloud."
              results={[
                'Reduced infrastructure costs by 55%',
                'Eliminated vendor lock-in through a multi-cloud strategy',
                'Improved simulation throughput by 40%',
                // 'Achieved 99.95% availability across all cloud environments',
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Hybrid Cloud for Financial Analytics"
              industry="Financial Services"
              challenge="A financial institution needed ultra-low-latency computing for trading models and elastic analytics capacity. Their existing environment could not efficiently integrate on-premises infrastructure with cloud resources."
              solution="Kengile designed a hybrid cloud architecture that integrated on-premises HPC infrastructure with cloud-based data lakes. We implemented high-speed connectivity, automated data replication, and unified security and compliance policies so trading applications could run on-prem while analytics scaled in the cloud."
              results={[
                'Reduced trading algorithm latency by 60%',
                'Scaled analytics capacity by 10x using cloud resources',
                'Unified security and compliance across environments',
                'Reduced overall infrastructure costs by 40%',
              ]}
              delay={0.1}
            />
          </div>
          <div className="text-center">
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>



      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="How You Can Benefit from Our Cloud and HPC Engineering Expertise"
            subtitle="From Fortune 500 companies to startups, our cloud and HPC engineering services enable some of the most complex workloads in the world. Here's how your business can benefit:"
            className="text-center mb-16"
            titleClassName="text-4xl md:text-5xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-3xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FeatureCard
              icon={<Brain className="text-white" size={36} />}
              title="AI & Machine Learning Training"
              description="Our engineers assist AI developers in training their models on hundreds of GPUs, cutting model development time by as much as 70%."
              features={[
                "Data parallelism",
                "Gradient synchronization",
                "Mixed-precision training",
              ]}
              colorTheme="blue"
            />

            <FeatureCard
              icon={<FlaskConical className="text-white" size={36} />}
              title="Scientific Computing & Simulations"
              description="Our HPC engineers design clusters that deliver petascale performance. We work with research teams at universities and national labs."
              features={[
                "Petascale performance clusters",
                "Research collaboration",
                "Computationally intensive problem solving",
              ]}
              colorTheme="purple"
            />

            <FeatureCard
              icon={<BarChart3 className="text-white" size={36} />}
              title="Big Data & Real-Time Analytics"
              description="Terabytes of data processed per hour require a robust architecture. Our data engineering team designs scalable pipelines for ingestion, processing, and transformation, handling over 10TB of data per day to enable real-time analytics."
              features={[
                "Scalable data pipelines",
                "10TB+ daily processing capacity",
                "Real-time analytics enablement",
              ]}
              colorTheme="cyan"
            />

            <FeatureCard
              icon={<Cloud className="text-white" size={36} />}
              title="Hybrid Cloud Migration"
              description="Cloud migration doesn't have to mean business downtime. We help you achieve zero-downtime cloud migration, where critical applications are hosted in your data center and cloud elasticity is utilized for peak computing needs."
              features={[
                "Zero-downtime migration",
                "Hybrid architecture design",
                "Cloud elasticity utilization",
              ]}
              colorTheme="teal"
            />

            <FeatureCard
              icon={<Shield className="text-white" size={36} />}
              title="Disaster Recovery & Business Continuity"
              description="Downtime can be expensive. Our multi-region, multi-cloud disaster recovery services deliver RTO in under 4 hours, ensuring your critical business systems are always up and running."
              features={[
                "Multi-region deployment",
                "RTO under 4 hours",
                "Always-on business systems",
              ]}
              colorTheme="green"
            />

            <FeatureCard
              icon={<TrendingDown className="text-white" size={36} />}
              title="Auto-Scaling & Cost Optimization"
              description="Cloud spend can be optimized. We help you achieve intelligent auto-scaling and cost optimization, which can cut your cloud bills by 40-60% while maintaining alignment with actual demand."
              features={[
                "Intelligent auto-scaling",
                "40-60% cost reduction",
                "Demand-aligned optimization",
              ]}
              colorTheme="orange"
            />
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      {/* <Section className="bg-gradient-subtle">
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
      </Section> */}

      {/* Battle-Tested Technology Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Battle-Tested Technology Stack"
            className="text-center mb-16"
            titleClassName="text-4xl md:text-5xl font-bold text-gradient mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Platforms */}
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-accent-900 mb-4">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">AWS</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Microsoft Azure</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Google Cloud</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Oracle Cloud</span>
              </div>
            </div>

            {/* Container Orchestration */}
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-accent-900 mb-4">Container Orchestration</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Kubernetes</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">OpenShift</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Docker Swarm</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Nomad</span>
              </div>
            </div>

            {/* HPC Job Management */}
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-accent-900 mb-4">HPC Job Management</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Slurm</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">PBS Pro</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">HTCondor</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">LSF</span>
              </div>
            </div>

            {/* Infrastructure as Code (IaC) */}
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-accent-900 mb-4">Infrastructure as Code (IaC)</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Terraform</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Ansible</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Pulumi</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">CloudFormation</span>
              </div>
            </div>

            {/* Monitoring & Observability */}
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-accent-900 mb-4">Monitoring & Observability</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Prometheus</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Grafana</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Datadog</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">ELK Stack</span>
              </div>
            </div>

            {/* High-Speed Networking */}
            <div className="bg-white rounded-xl p-6 border border-accent-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-accent-900 mb-4">High-Speed Networking</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">InfiniBand</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">RDMA</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Ethernet 100G</span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Slingshot HPC Fabric</span>
              </div>
            </div>
          </div>
        </div>
      </Section>



      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Cloud & HPC Engineering Process"
            subtitle="Kengile has developed a successful, structured process for cloud and HPC engineering that has been perfected on hundreds of enterprise engagements. Our process delivers predictable outcomes, optimal performance, and seamless transitions."
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
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Step 1: Discovery & Requirements Analysis</h3>
                <p className="text-accent-600">We assess your current infrastructure, applications, and performance requirements. Our engineers examine current bottlenecks, scalability requirements, and business requirements to develop a comprehensive engineering roadmap.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Step 2: Architecture Design & Planning</h3>
                <p className="text-accent-600">Our engineers develop hybrid or multi-cloud HPC designs for your applications. We deliver detailed design plans, technology recommendations, capacity planning, and migration plans that meet your objectives.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Step 3: Implementation & Migration</h3>
                <p className="text-accent-600">Modernization is performed in carefully managed stages with automated orchestration, CI/CD pipelines, and zero-downtime migrations. Our engineers seamlessly transition your applications with no business interruption.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Step 4: Optimization & Ongoing Support</h3>
                <p className="text-accent-600">We optimize performance, set up auto-scaling and cost management, and develop monitoring thresholds. We also deliver training and documentation to empower your staff to fully manage the environment.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Organizations Trust Kengile's HPC Experts */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Organizations Trust Kengile's HPC Experts"
            subtitle="Kengile is not a typical cloud consulting firm. Our team of engineers has several decades of experience in designing supercomputing clusters for national labs, cloud infrastructure for Fortune 500 companies, and AI training pipelines for research teams. When you partner with Kengile, you are getting engineers who know the physics of interconnects, the subtleties of job schedulers, and the economics of cloud costs. We don't just prescribe solutions; we design them together."
            className="text-center mb-12"
            titleClassName="text-4xl md:text-5xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Elastic Compute Scaling</h3>
              <p className="text-accent-600">
                Automate the scaling of compute resources based on actual demand for AI, ML, and scientific computing.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Network className="text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Multi-Cloud Flexibility</h3>
              <p className="text-accent-600">
                Break free from vendor lock-in with architectures that are optimized to run smoothly on AWS, Azure, and GCP.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Enterprise-Grade Security & Compliance</h3>
              <p className="text-accent-600">
                Each HPC environment is built with high standards of security and compliance in mind.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Seamless Hybrid Cloud Integration</h3>
              <p className="text-accent-600">
                Our solutions are designed to integrate perfectly with existing on-premises infrastructure and IT environments.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Brain className="text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Purpose-Built for AI/ML & Scientific Computing</h3>
              <p className="text-accent-600">
                We build HPC systems with high-performance AI, ML, and scientific computing in mind.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingDown className="text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Transparent Pricing & Cost Optimization</h3>
              <p className="text-accent-600">
                No surprise infrastructure bills. Our optimizations can reduce overall spend by orders of magnitude.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-8 text-center hover:border-primary-500 hover:shadow-lg transition-all">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                50%
              </div>
              <div className="text-lg font-semibold text-accent-900 mb-2">
                Average Cost Reduction
              </div>
              <p className="text-accent-600 text-sm">
                Typical reduction of overall infrastructure spend by 50% in the first year of optimization.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-8 text-center hover:border-primary-500 hover:shadow-lg transition-all">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                10x
              </div>
              <div className="text-lg font-semibold text-accent-900 mb-2">
                Performance Improvement
              </div>
              <p className="text-accent-600 text-sm">
                Our well-designed HPC systems deliver order-of-magnitude performance gains for compute-intensive applications.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-8 text-center hover:border-primary-500 hover:shadow-lg transition-all">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                99.99%
              </div>
              <div className="text-lg font-semibold text-accent-900 mb-2">
                Uptime Guarantee
              </div>
              <p className="text-accent-600 text-sm">
                Our designs include redundancy, failover, and disaster recovery for maximum availability.
              </p>
            </div>
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

      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'Which cloud services are supported by Kengile?',
                answer: 'Kengile supports all leading cloud services such as AWS, Microsoft Azure, Google Cloud Platform, and Oracle Cloud. We develop solutions that harness the power of each cloud service while keeping flexibility and preventing vendor lock-in.'
              },
              {
                question: 'How do you ensure data security in multi-cloud environments?',
                answer: 'Our strategy is based on industry best practices and zero-trust networks. We use data encryption, access management, identity management, and continuous monitoring on all clouds to ensure data security and compliance.'
              },
              {
                question: 'Can you help us migrate our existing HPC infrastructure to the cloud?',
                answer: 'Yes. We have experience in migrating HPC to the cloud with zero downtime, taking into account workload distribution, orchestration, and data movement. Our end-to-end process ensures seamless migration with no performance disruption.'
              },
              {
                question: 'What can be expected in terms of cost savings from cloud migration?',
                answer: 'Our customers experience a 40-60% decrease in infrastructure costs with optimized resource use, auto-scaling, and FinOps. We will work to optimize your infrastructure to strike the right balance between performance and cost.'
              },
              {
                question: 'Do you offer 24/7 support for cloud infrastructure?',
                answer: 'Yes. Kengile provides constant monitoring, proactive support, and incident response to ensure that your cloud and HPC infrastructure is fully operational at all times.'
              },
              {
                question: 'How long does a typical cloud or HPC deployment take?',
                answer: 'The time required for a typical cloud or HPC deployment can vary depending on the workload\'s complexity and size. Typically, deployments are done in stages over a period of weeks to months.'
              }
            ]}
          />
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


