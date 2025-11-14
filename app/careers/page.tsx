import { Metadata } from 'next'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { Code, Cloud, Brain, Rocket, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Join a Future-Focused IT Services Company',
  description: 'Build your career in AI, cloud, blockchain, and infrastructure services — shaping the next wave of global innovation.',
  keywords: 'careers, jobs, IT jobs, AI engineer, cloud architect, blockchain developer, infrastructure engineer',
}

export default function Careers() {
  const positions = [
    {
      title: 'AI Infrastructure Engineer',
      description: 'Design and deploy scalable AI infrastructure, GPU clusters, and MLOps pipelines for enterprise clients.',
      href: '/contact-us',
      icon: <Brain size={32} />,
    },
    {
      title: 'Cloud Architect',
      description: 'Architect hybrid cloud and HPC solutions, multi-cloud strategies, and enterprise cloud migrations.',
      href: '/contact-us',
      icon: <Cloud size={32} />,
    },
    {
      title: 'Blockchain Developer',
      description: 'Build blockchain networks, smart contracts, and decentralized applications for enterprise use cases.',
      href: '/contact-us',
      icon: <Code size={32} />,
    },
    {
      title: 'DevOps Engineer',
      description: 'Implement CI/CD pipelines, Kubernetes clusters, and observability systems for modern IT operations.',
      href: '/contact-us',
      icon: <Zap size={32} />,
    },
    {
      title: 'Data Engineer',
      description: 'Build data pipelines, analytics platforms, and real-time streaming systems for AI and business intelligence.',
      href: '/contact-us',
      icon: <Rocket size={32} />,
    },
    {
      title: 'Security Engineer',
      description: 'Ensure enterprise-grade security, compliance, and governance across cloud, blockchain, and AI systems.',
      href: '/contact-us',
      icon: <Shield size={32} />,
    },
  ]

  return (
    <>
      <AnimatedHero
        title="Careers at Bacancy"
        subtitle="Shape the Future of IT"
        description="Build your career in AI, cloud, blockchain, and infrastructure services — shaping the next wave of global innovation."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-6">Join Our Team</h2>
          <p className="text-lg text-accent-700 mb-6">
            We&apos;re building the future of IT infrastructure, and we need talented engineers, architects, and innovators to join us. Work on cutting-edge projects in AI, blockchain, energy, and space technology while making a real impact on global enterprises.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            We offer competitive compensation, flexible work arrangements, and opportunities to work on groundbreaking technologies that will shape the next decade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <ServiceCard
              key={position.title}
              {...position}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
              <p className="text-accent-700">Work with the latest AI, blockchain, and cloud technologies on real-world enterprise projects.</p>
            </div>
            <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
              <p className="text-accent-700">Build infrastructure solutions that serve enterprises worldwide and transform industries.</p>
            </div>
            <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Career Growth</h3>
              <p className="text-accent-700">Continuous learning opportunities, mentorship, and clear paths for professional development.</p>
            </div>
            <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Culture</h3>
              <p className="text-accent-700">Collaborate with brilliant minds in an environment that encourages experimentation and innovation.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-accent-700 mb-8">
            Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals. Send us your resume and let&apos;s start a conversation.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            Apply Now
          </a>
        </div>
      </Section>
    </>
  )
}


