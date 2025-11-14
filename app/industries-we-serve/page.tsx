import { Metadata } from 'next'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { Building2, Factory, TrendingUp, Rocket, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve | AI, Energy, FinTech, SpaceTech & Enterprises',
  description: 'Tailored IT solutions for AI startups, energy enterprises, financial systems, and space-technology innovators.',
  keywords: 'IT services industries, AI startups, energy companies, FinTech, SpaceTech, enterprise IT solutions',
}

export default function IndustriesWeServe() {
  const industries = [
    {
      title: 'AI & Machine Learning Companies',
      description: 'Specialized infrastructure for AI startups and ML enterprises — GPU clusters, distributed training, and MLOps platforms.',
      href: '/contact-us',
      icon: <TrendingUp size={32} />,
    },
    {
      title: 'Energy & Utilities',
      description: 'Smart grid solutions, energy analytics, and IoT integration for power companies and renewable energy providers.',
      href: '/contact-us',
      icon: <Zap size={32} />,
    },
    {
      title: 'Financial Services & FinTech',
      description: 'Blockchain infrastructure, secure payment systems, and high-frequency trading platforms for financial institutions.',
      href: '/contact-us',
      icon: <Shield size={32} />,
    },
    {
      title: 'Space Technology',
      description: 'Satellite connectivity, space data analytics, and edge computing solutions for space-tech innovators.',
      href: '/contact-us',
      icon: <Rocket size={32} />,
    },
    {
      title: 'Manufacturing & Industrial',
      description: 'IoT integration, predictive maintenance, and industrial automation for smart manufacturing operations.',
      href: '/contact-us',
      icon: <Factory size={32} />,
    },
    {
      title: 'Enterprise Corporations',
      description: 'Comprehensive digital transformation — cloud migration, data modernization, and AI adoption for large enterprises.',
      href: '/contact-us',
      icon: <Building2 size={32} />,
    },
  ]

  return (
    <>
      <AnimatedHero
        title="Industries We Serve"
        subtitle="Vertical Expertise"
        description="Tailored IT solutions for AI startups, energy enterprises, financial systems, and space-technology innovators."
      />

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Industry Expertise
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            We deliver specialized IT solutions across multiple verticals, combining deep industry knowledge with cutting-edge technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ServiceCard
              key={industry.title}
              {...industry}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">Custom Solutions for Every Industry</h2>
          <p className="text-lg text-accent-700 mb-8">
            Our team understands that each industry has unique challenges and requirements. We work closely with clients to develop tailored IT solutions that address specific business needs while leveraging the latest technologies in AI, cloud, blockchain, and energy systems.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            Discuss Your Industry Needs
          </a>
        </div>
      </Section>
    </>
  )
}


