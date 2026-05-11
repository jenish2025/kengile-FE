import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import FeatureList from "@/components/FeatureList";
import UseCaseCard from "@/components/UseCaseCard";
import FAQ from "@/components/FAQ";
import CaseStudyCard from "@/components/CaseStudyCard";
import SectionHeader from "@/components/SectionHeader";
import IndustryCard from "@/components/IndustryCard";
import {
  Brain,
  Server,
  Zap,
  Shield,
  CheckCircle,
  TrendingUp,
  Database,
  Code,
  ArrowRight,
  Target,
  Cloud,
  Settings,
  Layers,
  FlaskConical,
  Building2,
  Factory,
  Radio,
  ShoppingBag,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Infrastructure Services | Scalable AI Cloud & MLOps Platforms",
  description:
    "End-to-end AI infrastructure services , GPU cloud setup, distributed training, MLOps pipelines, and performance optimization.",
  keywords:
    "AI infrastructure, GPU cloud, MLOps, machine learning infrastructure, distributed training, AI cloud services",
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kengile.com/services/ai-infrastructure-services' },
};

export default function AIInfrastructureServices() {
  const industries = [
    {
      title: "Healthcare and Life Sciences",
      description:
        "Our specialists offer secure and regulatory-compliant AI infrastructure solutions for medical research, diagnostics, and patient data management. The solutions are designed to handle scaling of complex tasks with strict regulatory requirements.",
      useCases: [
        "Medical imaging analysis and diagnostic AI models",
        "Clinical NLP for patient records and research data",
        "Drug discovery and genomics pipelines",
      ],
      icon: <FlaskConical size={32} />,
    },
    {
      title: "Financial Services & Banking",
      description:
        "Expert AI infrastructure services from Kengile support secure, low-latency AI workloads for banks and financial institutions. Infrastructure is optimized for real-time analytics, risk management, and compliance.",
      useCases: [
        "Real-time fraud detection and transaction monitoring",
        "Risk modeling and algorithmic trading",
        "Regulatory-compliant financial data processing",
      ],
      icon: <Building2 size={32} />,
    },
    {
      title: "Manufacturing",
      description:
        "Kengile delivers AI infrastructure services for industrial environments, both cloud and edge-ready. Systems improve operational efficiency, reduce downtime, and support real-time analytics on the production floor.",
      useCases: [
        "Predictive maintenance for equipment",
        "Computer vision-based quality inspection",
        "Process optimization and anomaly detection",
      ],
      icon: <Factory size={32} />,
    },
    {
      title: "Media & Telecommunications",
      description:
        "Our experts enable AI infrastructure for content processing, personalization, and network optimization. Platforms are built to handle massive data throughput and real-time analytics.",
      useCases: [
        "Content recommendation and personalization engines",
        "Automated media tagging and analytics",
        "Network traffic analysis and predictive optimization",
      ],
      icon: <Radio size={32} />,
    },
    {
      title: "Retail & E-commerce",
      description:
        "Kengile provides scalable AI infrastructure services for retailers to enhance customer experience and operational efficiency. Systems handle high-volume transactions and real-time data processing.",
      useCases: [
        "Recommendation and personalization engines",
        "Demand forecasting and inventory optimization",
        "Customer behavior and pricing analytics",
      ],
      icon: <ShoppingBag size={32} />,
    },
    {
      title: "Information Technology",
      description:
        "Our experts at Kengile build AI infrastructure for IT organizations to support enterprise applications, cloud services, and data-driven decision-making. Platforms are optimized for speed, reliability, and scalability.",
      useCases: [
        "Enterprise AI platform deployments",
        "Predictive analytics for IT operations",
        "Automation of data pipelines and monitoring",
      ],
      icon: <Cpu size={32} />,
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://kengile.com/services' },
              { '@type': 'ListItem', position: 3, name: 'AI Infrastructure Services', item: 'https://kengile.com/services/ai-infrastructure-services' },
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
            <li className="text-accent-900 font-medium">AI Infrastructure Services</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="AI Infrastructure Services"
        subtitle="AI Infrastructure Services"
        description="Deploy production-ready AI systems with GPU clusters, MLOps pipelines, and enterprise-grade security. From strategy to scale, we architect AI infrastructure that performs."
        ctaText="Schedule AI Readiness Assessment"
        ctaLink="/contact-us"
        secondaryCtaText="View Case Studies"
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
                Monitoring & Support
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                40%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Cost Reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Why AI Infrastructure Matters for Enterprise AI"
            subtitle={<>Success in AI requires more than model capabilities. An organization that lacks proper infrastructure will experience slow training times, cost escalation in the cloud, security concerns, and deployment unpredictability. At Kengile, our <strong>AI infrastructure services</strong> aim for a strong, scalable, and production-ready environment for experimentation, growth, and more.</>}
            className="text-center mb-8"
            titleClassName="text-4xl font-bold text-gradient mb-6"
            subtitleClassName="text-lg text-accent-700 max-w-3xl mx-auto"
          />
          <p className="text-lg text-accent-700 text-center">
            We assist businesses in migrating from fragmented infrastructures
            to an integrated AI infrastructure for training, deployment, and
            optimizing models.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Our Comprehensive AI Infrastructure Services"
          subtitle="We build and implement scalable enterprise-grade platforms for AI that scale according to your workloads. It involves designing and optimizing right from architecture to long-term support. Our infrastructure services for AI help your team train faster, deploy successfully, and manage your AI systems effectively in cloud, hybrid, and on-prem infrastructures."
          className="text-center mb-16"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-600 mr-3">1.</span>
              <Target className="text-primary-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">
              AI Infrastructure Strategy & Architecture
            </h3>
            <p className="text-accent-600">
              Our experts at Kengile assess AI readiness and design scalable
              infrastructure aligned with enterprise workloads. With a focus on
              GPU strategy, data architecture, and deployment models, we ensure a
              strong foundation for AI initiatives. This approach guarantees
              efficient, future-ready systems tailored to your business goals.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-600 mr-3">2.</span>
              <Server className="text-primary-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">
              GPU Infrastructure & Distributed Compute
            </h3>
            <p className="text-accent-600">
              Kengile's team builds high-performance GPU and HPC environments
              optimized for AI and ML workloads. Expert AI infrastructure
              services are implemented to accelerate model training, enable
              distributed computing, and ensure reliable scaling. Hardware and
              network performance are tuned for demanding AI workloads.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-600 mr-3">3.</span>
              <Zap className="text-primary-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">
              MLOps & Training Pipeline Automation
            </h3>
            <p className="text-accent-600">
              Our AI experts design production-ready MLOps platforms that
              automate training, deployment, and monitoring of models. By
              operationalizing machine learning with governed workflows, teams
              can deliver consistent results and maintain models efficiently.
              This reduces manual effort while keeping models production-ready.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-600 mr-3">4.</span>
              <Brain className="text-primary-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">
              LLM Training & Inference Infrastructure
            </h3>
            <p className="text-accent-600">
              Kengile is a scalable infrastructure solution provider and has
              expertise in training and hosting large models for enterprises.
              The expertise in AI infrastructure focuses on optimizing GPU usage
              and low-latency inference and high-throughput deployment strategies
              for fine-tuning and inference pipes used for maximizing performance
              and reliability.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-600 mr-3">5.</span>
              <Cloud className="text-primary-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">
              Multi-Cloud & Private AI Platforms
            </h3>
            <p className="text-accent-600">
              Our experts assist companies in executing AI workloads on clouds,
              hybrid, and private infrastructure with flexibility and control.
              Kengile facilitates cloud-independent platforms with secure
              implementations, data governance, and scalable operations that
              benefit enterprises with AI infrastructure services that conform to
              compliance and performance requirements.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-600 mr-3">6.</span>
              <Shield className="text-primary-600" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">
              AI Security, Governance & FinOps
            </h3>
            <p className="text-accent-600">
              Kengile's AI experts secure, govern, and optimize enterprise AI
              infrastructure for compliance and cost efficiency. Through access
              control, audit logging, and resource optimization, expert AI
              infrastructure services ensure reliable and ROI-focused operations.
              Regulatory alignment and monitoring maintain operational security
              and long-term efficiency.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="AI Infrastructure for Every Industry"
          subtitle="Kengile provides AI infrastructure services with a focus on catering to the needs of different sectors. Our professionals develop scalable and high-functioning infrastructure for businesses to efficiently put AI into action."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-3xl mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              useCases={industry.useCases}
              icon={industry.icon}
            />
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Why Choose Kengile as Your AI Infrastructure Services Provider
            </h2>
            <p className="text-xl text-accent-600 max-w-4xl mx-auto">
              Kengile’s professionals offer high-quality artificial intelligence
              infrastructure services that can scale according to business
              requirements. Their comprehensive know-how in GPU clusters, MLOps
              pipelines, and cloud orchestration facilities guarantees the
              optimal functioning of artificial intelligence workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-accent-900 mb-4">
                What Sets Us Apart
              </h3>
              <FeatureList
                features={[
                  "Proven Expertise: We possess vast experience in designing and deploying an infrastructure of artificial intelligence.",
                  "Scalable Solutions: Scalable solutions that are adaptable to GPU, cloud, or hybrid environments to support growing intelligence projects and applications.",
                  "End-to-End Support: Right from planning the architecture to optimizing and monitoring, we offer complete life cycle support to our clientele.",
                  "Security & Compliance: Enterprise-level security standards like SOC 2, HIPAA, and GDPR.",
                  "Cost Optimization: AI FinOps methods for optimal ROI (Return on Investment).",
                  "Seamless Integration: Compatible with existing workflows, CI/CD pipelines, and enterprise systems.",
                ]}
              />
            </div>

            <div className="bg-gradient-subtle rounded-2xl p-8 shadow-sm border border-accent-100">
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">
                Built for Enterprise-Grade AI
              </h3>
              <p className="text-accent-700 mb-4">
                We combine deep infrastructure expertise with practical
                engineering to help enterprises unlock the full value of AI. Our
                teams design platforms that are resilient, observable, and easy
                to operate across teams.
              </p>
              <p className="text-accent-700 mb-4">
                Whether you are modernizing legacy systems or launching new AI
                products, Kengile ensures that your infrastructure is ready for
                experimentation today and scale tomorrow.
              </p>
              <p className="text-accent-700 text-sm">
                From GPU strategy and data architecture to governance and FinOps,
                our approach keeps reliability, security, and cost-efficiency at
                the center of every deployment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Use Cases</h2>
            <p className="text-xl text-accent-600">
              Real-world applications of AI infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard
              title="Large Language Models"
              description="Train and deploy LLMs like GPT, BERT, and custom models at scale with distributed training across multiple GPUs."
              icon={<Brain size={32} />}
              delay={0}
            />
            <UseCaseCard
              title="Computer Vision"
              description="Process millions of images with deep learning models for object detection, classification, and image generation."
              icon={<TrendingUp size={32} />}
              delay={0.1}
            />
            <UseCaseCard
              title="Recommendation Systems"
              description="Build real-time recommendation engines that process terabytes of data to deliver personalized experiences."
              icon={<Database size={32} />}
              delay={0.2}
            />
            <UseCaseCard
              title="Natural Language Processing"
              description="Deploy NLP pipelines for sentiment analysis, translation, and text generation at enterprise scale."
              icon={<Code size={32} />}
              delay={0.3}
            />
            <UseCaseCard
              title="Predictive Analytics"
              description="Run complex ML models for forecasting, anomaly detection, and predictive maintenance in production."
              icon={<Zap size={32} />}
              delay={0.4}
            />
            <UseCaseCard
              title="Autonomous Systems"
              description="Support AI workloads for autonomous vehicles, robotics, and IoT devices requiring real-time inference."
              icon={<Server size={32} />}
              delay={0.5}
            />
          </div>
        </div>
      </Section>


      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question:
                  "What GPU hardware choices do you support for AI computations?",
                answer:
                  "Our team at Kengile utilizes high-performance computing GPUs such as NVIDIA\u00ae offering A100, H100, and V100 models, while AMD Instinct MIs are also used. We choose what best fits your AI computing requirements.",
              },
              {
                question:
                  "How do you ensure security and compliance for AI systems?",
                answer:
                  "We provide enterprise-level security and compliance solutions like SOC 2, HIPAA, and GDPR compliance. We ensure secure entry points, auditing, encrypting, as well as multi-tenancy isolation for our critical AI tasks.",
              },
              {
                question:
                  "What is a typical time frame for implementing AI infrastructure?",
                answer:
                  "Based on the complexity and size of the project, our team is capable of designing, implementing, and optimizing the infrastructure of the AI systems in 4-8 weeks.",
              },
              {
                question:
                  "In GPU inference, how do you address cold-start latency?",
                answer:
                  "To optimize our GPU clusters, we use batching, pre-warming, and auto-scaling techniques. This is essential to have low-latency and high-throughput inference or processing for our production-level artificial intelligence applications and large language models.",
              },
              {
                question: "What tools and frameworks of MLOps do you support?",
                answer:
                  "Kengile supports the best MLOps platforms like MLflow, Kubeflow, and W&B. Our experts create automated pipelines for model training, deployment, management, and versioning.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Success Stories */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-accent-600">
              Our AI infrastructure solutions have helped businesses across industries scale efficiently, optimize performance, and achieve measurable results. Here, we showcase how Kengile’s expertise delivers real-world impact for enterprise AI initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Enterprise LLM Training Platform"
              industry="Financial Services"
              challenge="A major financial institution needed to train large language models on proprietary data while maintaining security and compliance. Their existing infrastructure couldn't handle the scale required for distributed training across multiple GPUs."
              solution="We designed and deployed a distributed GPU cluster using NVIDIA A100 GPUs with Kubernetes orchestration. Implemented secure data pipelines, MLOps workflows with MLflow, and automated model versioning. Set up multi-tenant isolation and encryption at rest for compliance."
              results={[
                "Reduced training time from 2 weeks to 3 days (80% improvement)",
                "Achieved 99.9% uptime with automated failover",
                "Reduced infrastructure costs by 45% through optimization",
                "Enabled training of models 10x larger than before",
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Computer Vision at Scale"
              industry="E-commerce"
              challenge="An e-commerce platform needed to process millions of product images daily for automated tagging, quality control, and recommendation systems. Their current system was slow and couldn't scale during peak traffic."
              solution="Built a scalable AI inference pipeline using GPU clusters with auto-scaling capabilities. Implemented batch processing for training and real-time inference for production. Integrated with their existing cloud infrastructure and CDN for optimal performance."
              results={[
                "Processed 50M+ images daily with sub-second latency",
                "Improved recommendation accuracy by 35%",
                "Reduced manual tagging costs by 70%",
                "Scaled automatically during Black Friday traffic spikes",
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <SectionHeader
          title="Technology Stack We Work With"
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-blue-600 mr-2" />
              GPU & Compute
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "NVIDIA A100",
                "H100",
                "V100",
                "AMD Instinct MI series",
                "High-performance CPU clusters",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Code className="w-5 h-5 text-purple-600 mr-2" />
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "PyTorch",
                "TensorFlow",
                "JAX",
                "Hugging Face Transformers",
                "RAPIDS AI",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Settings className="w-5 h-5 text-green-600 mr-2" />
              Orchestration & Containerization
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Kubernetes (EKS, AKS, GKE)",
                "Docker",
                "Helm",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Zap className="w-5 h-5 text-orange-600 mr-2" />
              MLOps & Experiment Tracking
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "MLflow",
                "Weights & Biases",
                "Kubeflow pipelines",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Cloud className="w-5 h-5 text-cyan-600 mr-2" />
              Cloud & Storage
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS",
                "Azure",
                "GCP",
                "NVMe SSDs",
                "Lustre",
                "Ceph",
                "S3",
                "Blob Storage",
                "GCS",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Database className="w-5 h-5 text-indigo-600 mr-2" />
              Data & Feature Management
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Feature stores",
                "Apache Spark",
                "Dask",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Our Process */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Our Proven Process for AI Infrastructure Success"
            subtitle="Our structured approach ensures successful AI infrastructure deployments with minimal risk and maximum business impact."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-700 max-w-3xl mx-auto"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                stepLabel: "Step 01",
                title: "Discovery & Assessment",
                description:
                  "Our assessment provides an in-depth evaluation of your existing infrastructure, data, and business strategies to uncover the key opportunities where the application of AI technology would have the greatest benefit.",
              },
              {
                stepLabel: "Step 02",
                title: "Architecture Design",
                description:
                  "Our architects develop a scalable and secure blueprint of the AI infrastructure according to your requirements and the expected growth.",
              },
              {
                stepLabel: "Step 03",
                title: "Implementation & Deployment",
                description:
                  "We utilize your AI infrastructure in a manner that is enabled by Infrastructure as Code to ensure reproducibility and integration with any system.",
              },
              {
                stepLabel: "Step 04",
                title: "Optimization & Scale",
                description:
                  "Continuous performance tuning, cost optimization, and scalability enablement are part of what ensures your AI infrastructure achieves the highest ROI.",
              },
            ].map((step) => (
              <div
                key={step.stepLabel}
                className="relative bg-white border border-accent-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500" />
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex-shrink-0 p-2 h-10 rounded-full bg-primary-50 border border-primary-200 flex items-center justify-center mr-3">
                    <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">
                      {step.stepLabel}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-accent-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-accent-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>



      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Related Services
            </h2>
            <p className="text-xl text-accent-600">
              Complementary solutions to enhance your AI capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/data-engineering-analytics"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Database className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                Data Engineering
              </h3>
              <p className="text-accent-600 mb-4">
                Build data pipelines to feed your AI models
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
            <Link
              href="/services/ai-application-development"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Code className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                AI Application Development
              </h3>
              <p className="text-accent-600 mb-4">
                Develop and deploy AI applications
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
            <Link
              href="/services/cloud-hpc-engineering"
              className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                Cloud & HPC Engineering
              </h3>
              <p className="text-accent-600 mb-4">
                Scale your compute infrastructure
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your AI Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can help you build and optimize your AI
            infrastructure for maximum performance and efficiency.
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
  );
}
