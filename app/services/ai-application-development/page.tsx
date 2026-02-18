import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import IndustryCard from '@/components/IndustryCard'
import { Code, Brain, Zap, Shield, Eye, Settings, ArrowRight, CheckCircle, TrendingUp, Cloud, Server, Users, DollarSign, Activity, Database, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Application Development Service | Custom AI Apps | Kengile',
  description: 'Transform your business with Kengile\'s AI Application Development Services. Build custom AI applications, automate workflows, and unlock actionable insights.',
  keywords: 'AI application development, LLM, generative AI, AI automation, machine learning applications, AI software development',
}

export default function AIApplicationDevelopment() {
  return (
    <>
      <AnimatedHero
        title="AI Application Development Services"
        subtitle="Transform your business with intelligent, custom AI applications"
        description="Transform your business with intelligent, custom AI applications that drive growth, efficiency, and measurable ROI. Kengile delivers end-to-end AI Application Development Services that automate processes, unlock insights, and power smarter decisions."
        ctaText="Start Free Consultation"
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
                AI Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                85%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Efficiency Gains
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Model Accuracy
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
            Why AI Application Development Is Essential for Business Growth
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Your business could be quietly leaving money on the table. Without AI, your business is stuck in manual processes that drain productivity, decisions lack the precision of data-driven insights, and your competition is gaining an edge through more advanced automation. Your legacy systems and manual processes are bottlenecking your business. Your teams are wasting countless hours on mundane tasks while key insights are hidden within unstructured data.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            To remove these roadblocks, Kengile develops customized AI applications that automate core processes and surface actionable insights through enterprise-ready AI Application Development Services, helping businesses operate faster, smarter, and at scale.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Our AI Application Development Services That Actually Work
          </h2>
          <p className="text-lg text-accent-700">
            Our AI Application Development Services focus on six key pillars designed to turn your data into a competitive advantage. Kengile&apos;s experts assess your needs and deliver solutions that enhance efficiency, accuracy, and business outcomes.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Code className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Native AI Application Architecture</h3>
              <p className="text-accent-600">
                Kengile provides a native AI architecture customized to your business requirements. This serves as a foundation for developing scalable, modular systems through enterprise-class AI Application Development Services that prioritize performance, reliability, and long-term maintainability.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Brain className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Natural Language Processing Solutions</h3>
              <p className="text-accent-600">
                We create intelligent NLP applications for chatbots, sentiment analysis, document analysis, and language understanding, which support complex generative ai application development scenarios if and when needed.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Eye className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Computer Vision &amp; Image AI</h3>
              <p className="text-accent-600">
                Our team of experts creates computer vision applications for object detection, image classification, facial recognition, and visual inspection. Kengile ensures precise and real-time visual intelligence for your business.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">AI-Powered Automation</h3>
              <p className="text-accent-600">
                We create intelligent automation applications that optimize business processes and minimize manual intervention. Our expertise enables smart business processes, optimization, and autonomous decision-making.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Database className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Data Engineering &amp; MLOps</h3>
              <p className="text-accent-600">
                As a seasoned AI application development company, Kengile offers comprehensive data pipeline and MLOps infrastructure solutions that maintain AI applications in a production-ready state through monitoring, versioning, and continuous improvement.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">AI Security &amp; Compliance</h3>
              <p className="text-accent-600">
                Our app includes a comprehensive security and compliance infrastructure. We practice responsible AI, bias detection, and governance to ensure ethical and trustworthy AI application development.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-white">
        <SectionHeader
          title="Industries We Serve With Our AI Application Development Expertise"
          subtitle="Kengile builds intelligent, industry-specific solutions tailored to your specific needs. As an experienced AI application development company, we help you develop customized AI apps that optimize performance, reduce expenses, and unlock new possibilities throughout your organization."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard
              title="Healthcare & Life Sciences"
              description="Our AI applications for healthcare help improve patient outcomes and optimize business. Our solutions assist in diagnostics, accelerate drug development, and enable personalized medicine."
              useCases={[
                'AI-assisted diagnostic image analysis',
                'Predictive patient risk analysis',
                'Clinical trial optimization and analysis',
              ]}
            />
            <IndustryCard
              title="Financial Services & Banking"
              description="Our expert AI app development services help finance businesses to enhance risk management and customer engagement. Our solutions include fraud analysis, algorithmic trading, and credit decisioning."
              useCases={[
                'Real-time fraud detection and prevention',
                'Automated credit risk analysis',
                'Intelligent customer service chatbots',
              ]}
            />
            <IndustryCard
              title="Manufacturing"
              description="We help manufacturers leverage AI for quality and predictive maintenance. Our AI applications optimize production lines and reduce downtime through intelligent automation."
              useCases={[
                'Predictive equipment maintenance',
                'Computer vision-based quality analysis',
                'Demand forecasting across the supply chain',
              ]}
            />
            <IndustryCard
              title="Media & Telecommunications"
              description="Kengile develops AI apps that enable content personalization and optimize network performance for media and telecommunication companies. This leads to increased customer satisfaction and optimized business processes."
              useCases={[
                'Content recommendation systems',
                'Network traffic optimization',
                'Automated content moderation',
              ]}
            />
            <IndustryCard
              title="Retail & E-Commerce"
              description="We develop AI solutions that transform the retail industry and retail business processes. Our solutions enable content personalization, optimize business processes, and provide in-depth customer journey analysis."
              useCases={[
                'Personalized product recommendations',
                'Dynamic pricing optimization',
                'Inventory demand forecasting',
              ]}
            />
            <IndustryCard
              title="Information Technology"
              description="Kengile develops AI for the IT industry that automates business flows and strengthens security. Our solutions optimize system reliability, enhance threat detection, and provide scalable AI infrastructure, helping businesses deploy and manage AI applications effectively."
              useCases={[
                'Intelligent IT operations (AIOps)',
                'Automated code review and testing',
                'Security threat detection and response',
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/industries-we-serve"
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
            title="Our AI Application Development Success Stories"
            subtitle="See how Kengile translates AI success into tangible business outcomes with customized applications. Our success stories showcase how our AI solutions improve efficiency, accuracy, and decision-making in different sectors."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Healthcare AI Diagnostic Assistant for Radiology"
              industry="Healthcare"
              challenge="A major healthcare organization was experiencing radiologist burnout and diagnostic result delays. Manual image analysis was time-consuming and prone to errors during peak hours."
              solution="Kengile developed an AI-based diagnostic assistant that analyzes medical images and points out possible irregularities. It integrates with the existing PACS system, providing radiologists with priority worklists and AI-driven insights for rapid and accurate diagnoses."
              results={[
                'Diagnosis times reduced by 65%',
                'Early detection increased by 40%',
                'Radiologists overtime decreased by 50%',
                'Anomaly detection accuracy increased to 97%',
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Financial Services Intelligent Fraud Detection Platform"
              industry="Financial Services"
              challenge="A fintech firm struggled with rising fraud losses and high false-positive rates in its rule-based system. Manual analysis could not keep up with the growing number of transactions."
              solution="Kengile built a real-time, AI-powered fraud-detection platform powered by sophisticated machine learning. The platform examines transaction patterns, user behavior, and contextual data to identify fraud with near-zero false positives."
              results={[
                'Reduced fraud losses by 75%',
                'Lowered false positives by 60%',
                'Enabled real-time detection under 100 ms',
                'Scaled to support high transaction volumes',
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
            title="How Can You Benefit from Our AI Application Development Services?"
            subtitle="A well-designed AI application delivers higher performance, reliability, and efficiency while reducing costs. Our AI Application Development Services help businesses unlock AI's potential and prepare for future growth."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Improved Performance</h3>
              <p className="text-accent-600 text-sm">
                With our expertise, Kengile ensures faster processing, intelligent automation, and optimized workflows that keep your operations running at peak efficiency.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <CheckCircle className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Enhanced Reliability</h3>
              <p className="text-accent-600 text-sm">
                We help minimize errors and prevent disruptions by implementing robust AI systems with built-in monitoring, validation, and fallback mechanisms for continuous operations.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Scalability for Growth</h3>
              <p className="text-accent-600 text-sm">
                Our experts design AI applications that scale seamlessly, supporting increased workloads, new use cases, and business expansion without major architectural overhauls.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Cost Efficiency</h3>
              <p className="text-accent-600 text-sm">
                Kengile reduces operational expenses through intelligent automation, eliminating manual processes and optimizing resource utilization across your organization.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Brain className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Future-Ready Technology</h3>
              <p className="text-accent-600 text-sm">
                We build AI applications using cutting-edge frameworks and architectures that evolve with advancing technology, ensuring long-term value and adaptability.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Simplified Management</h3>
              <p className="text-accent-600 text-sm">
                Our solutions include intuitive dashboards, automated monitoring, and self-healing capabilities to reduce manual oversight and streamline AI operations for your team.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Enterprise-Grade Technologies We Work With"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">AI &amp; ML Frameworks</h3>
              <p className="text-accent-700 text-sm">
                TensorFlow | PyTorch | Scikit-learn | Hugging Face | LangChain | OpenAI | Anthropic
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">NLP &amp; Language Models</h3>
              <p className="text-accent-700 text-sm">
                GPT-4 | Claude | BERT | Llama | Mistral | spaCy | NLTK | Custom Fine-tuning
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Computer Vision</h3>
              <p className="text-accent-700 text-sm">
                OpenCV | YOLO | MediaPipe | Detectron2 | TensorRT | ONNX | Edge AI
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Data &amp; MLOps</h3>
              <p className="text-accent-700 text-sm">
                Apache Spark | Databricks | MLflow | Kubeflow | Airflow | DVC | Weights &amp; Biases
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Cloud &amp; Infrastructure</h3>
              <p className="text-accent-700 text-sm">
                AWS SageMaker | Azure ML | Google Vertex AI | Kubernetes | Docker | Terraform
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Databases &amp; Storage</h3>
              <p className="text-accent-700 text-sm">
                PostgreSQL | MongoDB | Redis | Pinecone | Weaviate | Elasticsearch | S3
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our AI Development Process"
            subtitle="Kengile applies an effective and efficient process, refined for AI app development, honed by hundreds of successful implementations. It is meant to be on time, provide measurable progress, and flow easily from concept to deployment."
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
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Discovery &amp; AI Use Case Definition</h3>
                <p className="text-accent-600">
                  We assess your business goals, data access, and existing infrastructure to identify AI applications with maximum business value. This phase defines the required functionalities, success factors, and a clear development roadmap.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">AI App Architecture &amp; Prototyping</h3>
                <p className="text-accent-600">
                  Our experts develop the architecture, select suitable models &amp; tools, and create rapid prototypes. This phase validates the feasibility, performance, and business value of the proposed AI app before embarking on full-scale development.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Iterative AI App Development &amp; Training</h3>
                <p className="text-accent-600">
                  Development occurs in iterative sprints with continuous model training, validation, and optimization. The application logic, data flows, and AI models are developed in an integrated manner with real-time feedback.
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
                  We deploy production-ready AI apps with monitoring, performance analytics, and management. Your team receives hands-on training, and we optimize models and processes for maximum long-term business value.
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
            title="Why Choose Kengile for Your AI Application Development Needs"
            subtitle="It requires expertise, foresight, and expert execution to convert your AI vision into a functional product. As a business-centric AI app development company, Kengile offers proven approaches and expert know-how to turn your AI vision into a reality."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Users className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Experienced AI Engineers</h3>
              <p className="text-accent-600 text-sm">
                Senior AI engineers lead every project, providing constant guidance and reliable execution from inception to completion.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Technology-Agnostic Solutions</h3>
              <p className="text-accent-600 text-sm">
                We deliver solutions that meet your requirements, without vendor lock-in, for maximum performance and flexibility.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Agile Delivery Guarantee</h3>
              <p className="text-accent-600 text-sm">
                Our iterative approach delivers functional AI capabilities to your application quickly, with continuous feedback and refinement.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Measurable ROI</h3>
              <p className="text-accent-600 text-sm">
                Definitive success metrics and weekly progress updates provide complete transparency and measurable business value.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Security-First Architecture</h3>
              <p className="text-accent-600 text-sm">
                Enterprise-class security informs every decision to protect your data and models.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">24/7 Post-Launch Support</h3>
              <p className="text-accent-600 text-sm">
                We have your back for at least 12 months after launch to ensure seamless operations.
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
            subtitle="Complementary solutions to enhance your AI capabilities"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
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
            <Link href="/services/cloud-hpc-engineering" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud &amp; HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Scale your compute infrastructure</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/devops-sre-automation" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <BarChart3 className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">DevOps &amp; SRE</h3>
              <p className="text-accent-600 mb-4">Automate deployment, monitoring, and reliability for AI applications</p>
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
                question: 'How long does a typical AI project take?',
                answer: 'It depends on how complex and broad your AI application is. A simple solution might take 2-3 months, while enterprise-level solutions typically take 4-8 months. At Kengile, we use sprints with iterative releases, so you can expect to see working features sooner rather than later.'
              },
              {
                question: 'What about ROI, and when do returns start?',
                answer: 'ROI is not one-size-fits-all; it depends on the use case and how widely you are applying it. Most teams begin to see real-world benefits, improved efficiency, reduced errors, and automated workflows in 6-12 months. We establish clear success metrics right from the start and keep you posted.'
              },
              {
                question: 'Can you integrate AI with our existing systems?',
                answer: 'Absolutely. Kengile is designed to integrate AI with your existing enterprise infrastructure like ERPs, CRMs, databases, and even legacy systems. We do this through standard APIs, webhooks, and custom connectors so your AI solutions work seamlessly with your existing tech stack.'
              },
              {
                question: 'What kind of data do we need to begin with?',
                answer: 'The type of data needed will depend on the task you want the AI to accomplish. During our discovery process, we assess what you currently have on hand and identify what\'s missing. Kengile works with both structured and unstructured data, and we can also help with data quality or data collection if needed.'
              },
              {
                question: 'How do you handle team training and the transition process?',
                answer: 'We make sure your team is comfortable with using and managing the AI system. Kengile offers comprehensive documentation, training, and support before, during, and after the implementation process so your team is always informed and in control.'
              }
            ]}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how custom AI applications can solve your business challenges and unlock new opportunities. Schedule a free consultation with our AI experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
