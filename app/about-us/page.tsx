import { Metadata } from 'next'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import { Target, Users, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Global IT Services Partner for AI & Infrastructure',
  description: 'Learn how we combine IT expertise with innovation in AI, cloud, and energy to create sustainable, intelligent infrastructure for the next digital decade.',
  keywords: 'IT services company, AI infrastructure, cloud services, technology partner, digital transformation',
}

export default function AboutUs() {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends, continuously exploring AI, blockchain, and space connectivity solutions.',
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Centric',
      description: 'Your success is our mission. We build long-term partnerships focused on delivering measurable business value.',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in engineering, security, and operational excellence across all our services.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Reach',
      description: 'Serving enterprises worldwide with scalable, reliable infrastructure solutions that transcend geographical boundaries.',
    },
  ]

  return (
    <>
      <AnimatedHero
        title="About Bacancy"
        subtitle="Technology Partner for the Future"
        description="We combine IT expertise with innovation in AI, cloud, and energy to create sustainable, intelligent infrastructure for the next digital decade."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Our Mission</h2>
          <p className="text-xl text-accent-700 mb-6">
            At Bacancy, we position ourselves as a next-generation IT services company building intelligent, energy-efficient, and decentralized infrastructure for the future internet.
          </p>
          <p className="text-lg text-accent-600 mb-8">
            We specialize in integrating cutting-edge technologies including AI, cloud computing, energy systems, blockchain, and satellite networks to help global enterprises transform their digital infrastructure and prepare for the challenges and opportunities of the next decade and beyond.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Values</h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="bg-white border border-accent-200 rounded-xl p-8 hover:border-primary-500 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-accent-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Why We Exist</h2>
          <p className="text-lg text-accent-700 mb-4">
            The IT landscape is evolving at an unprecedented pace. Traditional infrastructure is no longer sufficient to support the demands of AI workloads, real-time analytics, and global connectivity. We exist to bridge the gap between current IT capabilities and future requirements.
          </p>
          <p className="text-lg text-accent-700 mb-4">
            Our expertise spans across frontier domains:
          </p>
          <ul className="list-disc list-inside space-y-2 text-accent-700 ml-4">
            <li>AI Infrastructure & Machine Learning Operations</li>
            <li>Cloud & High-Performance Computing</li>
            <li>Smart Energy & Sustainable IT Systems</li>
            <li>Blockchain & Decentralized Finance Infrastructure</li>
            <li>Space Connectivity & Satellite Internet Solutions</li>
          </ul>
        </div>
      </Section>
    </>
  )
}


