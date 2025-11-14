import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Code, Brain, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Application Development | LLM, GenAI & Automation Solutions',
  description: 'Build and deploy intelligent AI applications, LLMs, and automation workflows with enterprise-grade scalability and compliance.',
  keywords: 'AI application development, LLM, generative AI, AI automation, machine learning applications, AI software development',
}

export default function AIApplicationDevelopment() {
  return (
    <>
      <AnimatedHero
        title="AI Application Development"
        subtitle="LLM, GenAI & Automation Solutions"
        description="Build and deploy intelligent AI applications, LLMs, and automation workflows with enterprise-grade scalability and compliance."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Intelligent AI Applications</h2>
          <p className="text-lg text-accent-700 mb-6">
            We develop custom AI applications leveraging large language models (LLMs), generative AI, and machine learning to solve complex business problems. Our solutions are production-ready, scalable, and compliant with enterprise security standards.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From chatbots and virtual assistants to automated decision-making systems, we build AI applications that deliver real business value.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">AI Development Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Brain className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">LLM Integration</h3>
            <p className="text-accent-700">
              Integrate and fine-tune large language models (GPT, Claude, Llama) for custom use cases, including chatbots, content generation, and knowledge management.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Code className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Generative AI Applications</h3>
            <p className="text-accent-700">
              Build applications using generative AI for image generation, text synthesis, code generation, and creative content creation.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Zap className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">AI Automation</h3>
            <p className="text-accent-700">
              Develop intelligent automation workflows that use AI for document processing, customer service, predictive maintenance, and decision support.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Shield className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Enterprise Deployment</h3>
            <p className="text-accent-700">
              Deploy AI applications with enterprise-grade security, compliance, monitoring, and scalability to handle production workloads.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">AI application development success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Enterprise AI Chatbot Platform"
              industry="Customer Service"
              challenge="A large enterprise needed to handle millions of customer inquiries daily but their support team was overwhelmed. They wanted an AI-powered chatbot that could understand complex queries and integrate with their existing systems."
              solution="Developed a custom LLM-powered chatbot using fine-tuned GPT models trained on their domain-specific data. Integrated with their CRM, knowledge base, and ticketing systems. Implemented RAG (Retrieval Augmented Generation) for accurate responses and human handoff capabilities."
              results={[
                'Handled 80% of customer inquiries automatically',
                'Reduced average response time from 2 hours to 30 seconds',
                'Improved customer satisfaction scores by 45%',
                'Reduced support costs by $2M annually'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="AI-Powered Document Processing"
              industry="Legal Services"
              challenge="A law firm was spending thousands of hours manually reviewing contracts and legal documents. They needed an AI solution to extract key information, identify risks, and generate summaries automatically."
              solution="Built a custom AI application using advanced NLP models for document analysis. Implemented OCR, entity extraction, contract clause identification, and automated risk scoring. Created a user-friendly interface for lawyers to review and approve AI-generated insights."
              results={[
                'Reduced document review time by 90%',
                'Processed 10,000+ documents monthly',
                'Improved risk detection accuracy by 60%',
                'Enabled lawyers to focus on high-value work'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build Your AI Application</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can develop an AI application that transforms your business processes.
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


