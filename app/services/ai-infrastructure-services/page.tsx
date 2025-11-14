import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Brain, Server, Zap, Shield, CheckCircle, TrendingUp, Database, Code, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Infrastructure Services | Scalable AI Cloud & MLOps Platforms',
  description: 'End-to-end AI infrastructure services — GPU cloud setup, distributed training, MLOps pipelines, and performance optimization.',
  keywords: 'AI infrastructure, GPU cloud, MLOps, machine learning infrastructure, distributed training, AI cloud services',
}

export default function AIInfrastructureServices() {
  return (
    <>
      <AnimatedHero
        title="AI Infrastructure Services"
        subtitle="Scalable AI Cloud & MLOps Platforms"
        description="End-to-end AI infrastructure services — GPU cloud setup, distributed training, MLOps pipelines, and performance optimization."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Comprehensive AI Infrastructure Solutions</h2>
          <p className="text-lg text-accent-700 mb-6">
            We design and deploy enterprise-grade AI infrastructure that scales with your machine learning workloads. From GPU clusters to distributed training systems, we provide the foundation for your AI initiatives.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Our services cover the entire AI infrastructure lifecycle — from initial setup and configuration to ongoing optimization and monitoring.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Our AI Infrastructure Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Brain className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">GPU Cloud Setup</h3>
            <p className="text-accent-600">
              Deploy and manage GPU clusters optimized for deep learning workloads. We configure NVIDIA, AMD, and cloud-based GPU solutions for maximum performance and cost efficiency.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Server className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Distributed Training</h3>
            <p className="text-accent-600">
              Set up distributed training environments using frameworks like PyTorch, TensorFlow, and Horovod. Optimize for multi-node, multi-GPU training scenarios.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Zap className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">MLOps Pipelines</h3>
            <p className="text-accent-600">
              Build end-to-end MLOps pipelines for model training, versioning, deployment, and monitoring. Integrate with CI/CD systems for automated ML workflows.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Shield className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Performance Optimization</h3>
            <p className="text-accent-600">
              Optimize AI workloads for speed, cost, and resource utilization. We analyze and tune your models and infrastructure for peak performance.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Key Benefits</h2>
            <p className="text-xl text-accent-600">Why choose our AI infrastructure services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureList
              features={[
                'Scalable GPU infrastructure that grows with your needs',
                'Reduced training time by up to 80% with distributed systems',
                'Cost optimization through intelligent resource management',
                'Enterprise-grade security and compliance',
                '24/7 monitoring and support',
                'Seamless integration with existing workflows'
              ]}
            />
            <div className="bg-gradient-subtle rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-accent-900 mb-6">Technology Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">NVIDIA A100, H100, V100 GPUs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">PyTorch, TensorFlow, JAX frameworks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Kubernetes for orchestration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">MLflow, Weights & Biases for tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">AWS, Azure, GCP cloud platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Docker containers for deployment</span>
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
            <p className="text-xl text-accent-600">Real-world applications of AI infrastructure</p>
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

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Process</h2>
            <p className="text-xl text-accent-600">How we deliver AI infrastructure solutions</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Assessment & Planning</h3>
                <p className="text-accent-600">We analyze your current infrastructure, AI workloads, and requirements to design the optimal solution architecture.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Infrastructure Setup</h3>
                <p className="text-accent-600">Deploy GPU clusters, configure networking, set up storage systems, and implement security measures.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">MLOps Implementation</h3>
                <p className="text-accent-600">Build automated pipelines for model training, testing, deployment, and monitoring with CI/CD integration.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Optimization & Support</h3>
                <p className="text-accent-600">Continuously optimize performance, monitor systems, and provide ongoing support to ensure peak efficiency.</p>
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
                question: 'What GPU types do you support?',
                answer: 'We support all major GPU types including NVIDIA A100, H100, V100, and RTX series, as well as AMD MI series and cloud-based GPU instances from AWS, Azure, and GCP.'
              },
              {
                question: 'How long does it take to set up AI infrastructure?',
                answer: 'Typical setup time ranges from 2-4 weeks depending on complexity. Simple cloud-based setups can be completed in days, while large-scale on-premises deployments may take longer.'
              },
              {
                question: 'Can you integrate with our existing infrastructure?',
                answer: 'Yes, we specialize in hybrid deployments that integrate seamlessly with your existing on-premises infrastructure, cloud environments, and data sources.'
              },
              {
                question: 'What MLOps tools do you use?',
                answer: 'We work with industry-standard tools including MLflow, Kubeflow, Weights & Biases, TensorBoard, and custom solutions tailored to your specific needs.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer 24/7 monitoring, maintenance, and support packages to ensure your AI infrastructure runs smoothly and efficiently.'
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
            <p className="text-xl text-accent-600">Real-world success stories from our AI infrastructure projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Enterprise LLM Training Platform"
              industry="Financial Services"
              challenge="A major financial institution needed to train large language models on proprietary data while maintaining security and compliance. Their existing infrastructure couldn't handle the scale required for distributed training across multiple GPUs."
              solution="We designed and deployed a distributed GPU cluster using NVIDIA A100 GPUs with Kubernetes orchestration. Implemented secure data pipelines, MLOps workflows with MLflow, and automated model versioning. Set up multi-tenant isolation and encryption at rest for compliance."
              results={[
                'Reduced training time from 2 weeks to 3 days (80% improvement)',
                'Achieved 99.9% uptime with automated failover',
                'Reduced infrastructure costs by 45% through optimization',
                'Enabled training of models 10x larger than before'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Computer Vision at Scale"
              industry="E-commerce"
              challenge="An e-commerce platform needed to process millions of product images daily for automated tagging, quality control, and recommendation systems. Their current system was slow and couldn't scale during peak traffic."
              solution="Built a scalable AI inference pipeline using GPU clusters with auto-scaling capabilities. Implemented batch processing for training and real-time inference for production. Integrated with their existing cloud infrastructure and CDN for optimal performance."
              results={[
                'Processed 50M+ images daily with sub-second latency',
                'Improved recommendation accuracy by 35%',
                'Reduced manual tagging costs by 70%',
                'Scaled automatically during Black Friday traffic spikes'
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
            <p className="text-xl text-accent-600">Complementary solutions to enhance your AI capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/data-engineering-analytics" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Database className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Data Engineering</h3>
              <p className="text-accent-600 mb-4">Build data pipelines to feed your AI models</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/ai-application-development" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Code className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">AI Application Development</h3>
              <p className="text-accent-600 mb-4">Develop and deploy AI applications</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/cloud-hpc-engineering" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Server className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud & HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Scale your compute infrastructure</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your AI Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can help you build and optimize your AI infrastructure for maximum performance and efficiency.
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


