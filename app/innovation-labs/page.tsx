import { Metadata } from 'next'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { FlaskConical, Rocket, Lightbulb, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Innovation Labs | Future-Driven IT Research & Development',
  description: 'Discover our innovation labs driving breakthroughs in AI infrastructure, blockchain ecosystems, and sustainable IT systems.',
  keywords: 'innovation labs, R&D, research and development, technology innovation, AI research, blockchain research',
}

export default function InnovationLabs() {
  const labs = [
    {
      title: 'AI Infrastructure Lab',
      description: 'Researching next-generation AI infrastructure, including quantum-classical hybrid systems, neuromorphic computing, and distributed AI architectures.',
      href: '/contact-us',
      icon: <FlaskConical size={32} />,
    },
    {
      title: 'Blockchain Innovation Lab',
      description: 'Exploring advanced blockchain technologies, consensus mechanisms, and decentralized systems for enterprise applications.',
      href: '/contact-us',
      icon: <Rocket size={32} />,
    },
    {
      title: 'Sustainable IT Lab',
      description: 'Developing green computing technologies, carbon-negative data centers, and energy-efficient AI algorithms.',
      href: '/contact-us',
      icon: <Lightbulb size={32} />,
    },
    {
      title: 'Space Technology Lab',
      description: 'Advancing space connectivity, satellite computing, and orbital infrastructure for next-generation global networks.',
      href: '/contact-us',
      icon: <Target size={32} />,
    },
  ]

  return (
    <>
      <AnimatedHero
        title="Innovation Labs"
        subtitle="Future-Driven IT Research & Development"
        description="Discover our innovation labs driving breakthroughs in AI infrastructure, blockchain ecosystems, and sustainable IT systems."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-6">Pioneering the Future of IT</h2>
          <p className="text-lg text-accent-700 mb-6">
            Our Innovation Labs are dedicated research and development centers focused on exploring cutting-edge technologies and solving tomorrow&apos;s IT challenges. We invest in fundamental research, experimental projects, and proof-of-concept developments that shape the future of infrastructure.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Through collaboration with academic institutions, technology partners, and industry leaders, we push the boundaries of what&apos;s possible in AI, blockchain, energy, and space technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <ServiceCard
              key={lab.title}
              {...lab}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">Join Our Research</h2>
          <p className="text-lg text-accent-700 mb-8">
            Interested in collaborating on cutting-edge research? We partner with organizations, researchers, and innovators to advance the state of IT technology.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </Section>
    </>
  )
}


