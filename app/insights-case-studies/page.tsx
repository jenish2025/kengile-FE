import { Metadata } from 'next'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { FileText, TrendingUp, BookOpen, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights & Case Studies | Future-Ready IT Services Trends',
  description: 'Read the latest insights, research papers, and case studies on AI, data infrastructure, and digital transformation.',
  keywords: 'IT insights, case studies, whitepapers, technology trends, AI research, digital transformation',
}

export default function InsightsCaseStudies() {
  const insights = [
    {
      title: 'The Future of AI Infrastructure',
      description: 'Exploring how next-generation AI infrastructure will transform enterprise computing, from edge AI to distributed training systems.',
      href: '#',
      icon: <TrendingUp size={32} />,
    },
    {
      title: 'Sustainable Data Centers: A Path to Carbon Neutrality',
      description: 'How green data centers and renewable energy integration are reshaping the IT industry\'s environmental impact.',
      href: '#',
      icon: <FileText size={32} />,
    },
    {
      title: 'Blockchain in Enterprise: Real-World Applications',
      description: 'Case studies on how enterprises are leveraging blockchain for supply chain, identity, and financial services.',
      href: '#',
      icon: <BookOpen size={32} />,
    },
    {
      title: 'Space-Based Connectivity: The Next Internet Frontier',
      description: 'Analyzing the potential of satellite internet and space connectivity to bridge the global digital divide.',
      href: '#',
      icon: <Award size={32} />,
    },
  ]

  return (
    <>
      <AnimatedHero
        title="Insights & Case Studies"
        subtitle="Future-Ready IT Services Trends"
        description="Read the latest insights, research papers, and case studies on AI, data infrastructure, and digital transformation."
      />

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Latest Insights</h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Stay informed about the latest trends, research, and best practices in future-ready IT infrastructure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <ServiceCard
              key={insight.title}
              {...insight}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Case Studies</h2>
          <div className="space-y-8">
            <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">Global AI Infrastructure Deployment</h3>
              <p className="text-accent-700 mb-4">
                How we helped a Fortune 500 company deploy a distributed AI infrastructure across multiple regions, reducing training time by 60% and cutting costs by 40%.
              </p>
              <a href="#" className="text-primary-400 hover:text-primary-300 font-semibold">Read Full Case Study →</a>
            </div>
            <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">Renewable Energy Data Center Transformation</h3>
              <p className="text-accent-700 mb-4">
                A case study on modernizing a legacy data center to run entirely on renewable energy while improving performance and reducing operational costs.
              </p>
              <a href="#" className="text-primary-400 hover:text-primary-300 font-semibold">Read Full Case Study →</a>
            </div>
            <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">Blockchain Supply Chain Platform</h3>
              <p className="text-accent-700 mb-4">
                Building a private blockchain network for a global manufacturer to track products across the supply chain, improving transparency and reducing fraud.
              </p>
              <a href="#" className="text-primary-400 hover:text-primary-300 font-semibold">Read Full Case Study →</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}


