import { Metadata } from 'next'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { FlaskConical, Rocket, Lightbulb, Target, Brain, Cpu, Atom, Zap, Globe, Users, TrendingUp, Award, BookOpen, Code, GitBranch, LineChart, Network, Database, Lock, Cloud, Sparkles, ArrowRight, Check, FileText, Calendar, Microscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Innovation Labs | Future-Driven IT Research & Development',
  description: 'Discover our innovation labs driving breakthroughs in AI infrastructure, blockchain ecosystems, and sustainable IT systems.',
  keywords: 'innovation labs, R&D, research and development, technology innovation, AI research, blockchain research',
}

export default function InnovationLabs() {
  // const labs = [
  //   {
  //     title: 'AI Infrastructure Lab',
  //     description: 'Researching next-generation AI infrastructure, including quantum-classical hybrid systems, neuromorphic computing, and distributed AI architectures.',
  //     href: '/contact-us',
  //     icon: <FlaskConical size={32} />,
  //   },
  //   {
  //     title: 'Blockchain Innovation Lab',
  //     description: 'Exploring advanced blockchain technologies, consensus mechanisms, and decentralized systems for enterprise applications.',
  //     href: '/contact-us',
  //     icon: <Rocket size={32} />,
  //   },
  //   {
  //     title: 'Sustainable IT Lab',
  //     description: 'Developing green computing technologies, carbon-negative data centers, and energy-efficient AI algorithms.',
  //     href: '/contact-us',
  //     icon: <Lightbulb size={32} />,
  //   },
  //   {
  //     title: 'Space Technology Lab',
  //     description: 'Advancing space connectivity, satellite computing, and orbital infrastructure for next-generation global networks.',
  //     href: '/contact-us',
  //     icon: <Target size={32} />,
  //   },
  // ]

  const labs = [
    {
      title: 'AI Infrastructure Lab',
      description: 'Researching next-generation AI infrastructure, including quantum-classical hybrid systems, neuromorphic computing, and distributed AI architectures.',
      icon: <FlaskConical size={32} />,
      color: 'from-blue-500 to-cyan-500',
      established: '2021',
      team: '25+ Researchers',
      projects: '18 Active',
      focus: [
        'Quantum-Classical Hybrid Computing',
        'Neuromorphic Chip Architecture',
        'Distributed AI Training Optimization',
        'Edge AI Acceleration',
        'AI Model Compression Techniques',
        'Federated Learning Systems'
      ],
      achievements: [
        'Published 12 research papers in top-tier conferences',
        'Filed 5 patents for AI acceleration technologies',
        '40% improvement in distributed training efficiency',
        'Collaboration with 3 leading universities'
      ],
      publications: [
        'Efficient Distributed Training for Large Language Models',
        'Neuromorphic Computing for Edge AI Applications',
        'Quantum-Enhanced Machine Learning Algorithms'
      ]
    },
    {
      title: 'Blockchain Innovation Lab',
      description: 'Exploring advanced blockchain technologies, consensus mechanisms, and decentralized systems for enterprise applications.',
      icon: <Rocket size={32} />,
      color: 'from-purple-500 to-pink-500',
      established: '2020',
      team: '20+ Researchers',
      projects: '15 Active',
      focus: [
        'Novel Consensus Mechanisms',
        'Layer-2 Scaling Solutions',
        'Cross-Chain Interoperability',
        'Zero-Knowledge Proof Systems',
        'Decentralized Identity Management',
        'Enterprise Blockchain Frameworks'
      ],
      achievements: [
        'Developed 3 production-ready blockchain protocols',
        'Patent pending for novel consensus algorithm',
        '10x transaction throughput improvement',
        'Partnerships with 5 Fortune 500 companies'
      ],
      publications: [
        'Scalable Byzantine Fault Tolerance for Enterprise Blockchains',
        'Privacy-Preserving Smart Contracts Using Zero-Knowledge Proofs',
        'Cross-Chain Asset Transfer Protocols'
      ]
    },
    {
      title: 'Sustainable IT Lab',
      description: 'Developing green computing technologies, carbon-negative data centers, and energy-efficient AI algorithms.',
      icon: <Lightbulb size={32} />,
      color: 'from-green-500 to-emerald-500',
      established: '2022',
      team: '18+ Researchers',
      projects: '12 Active',
      focus: [
        'Carbon-Negative Data Center Design',
        'Energy-Efficient AI Algorithms',
        'Renewable Energy Integration',
        'Heat Recycling Systems',
        'Green Hardware Optimization',
        'Sustainable Cloud Architecture'
      ],
      achievements: [
        '60% reduction in AI training energy consumption',
        'First carbon-negative prototype data center',
        'Partnership with 4 renewable energy providers',
        'ISO 14001 certified research processes'
      ],
      publications: [
        'Energy-Aware Machine Learning Training Strategies',
        'Waste Heat Recovery in High-Performance Computing',
        'Sustainable Infrastructure Design Patterns'
      ]
    },
    {
      title: 'Space Technology Lab',
      description: 'Advancing space connectivity, satellite computing, and orbital infrastructure for next-generation global networks.',
      icon: <Target size={32} />,
      color: 'from-orange-500 to-red-500',
      established: '2023',
      team: '15+ Researchers',
      projects: '10 Active',
      focus: [
        'Low-Earth Orbit Computing',
        'Inter-Satellite Communication Protocols',
        'Space-Ground Network Integration',
        'Radiation-Hardened Computing',
        'Orbital Data Processing',
        'Satellite Swarm Coordination'
      ],
      achievements: [
        'Successfully tested algorithms in space environment',
        'Collaboration with 2 space agencies',
        '5x improvement in satellite data processing speed',
        'Contributed to 2 satellite missions'
      ],
      publications: [
        'Edge Computing in Low-Earth Orbit Satellites',
        'Fault-Tolerant Systems for Space Applications',
        'Optimizing Inter-Satellite Communication Networks'
      ]
    },
  ];

  const researchAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Artificial Intelligence',
      areas: ['Deep Learning', 'Reinforcement Learning', 'Neural Architecture Search', 'Explainable AI']
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Computing',
      areas: ['Quantum Algorithms', 'Quantum Cryptography', 'Hybrid Systems', 'Error Correction']
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Distributed Systems',
      areas: ['Consensus Protocols', 'Edge Computing', 'P2P Networks', 'Load Balancing']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Security & Privacy',
      areas: ['Zero-Knowledge Proofs', 'Homomorphic Encryption', 'Secure Enclaves', 'Privacy-Preserving ML']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Systems',
      areas: ['Green Computing', 'Power Optimization', 'Renewable Integration', 'Smart Grids']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Space Technology',
      areas: ['Satellite Networks', 'Orbital Computing', 'Space Communications', 'Remote Sensing']
    }
  ];

  const partnerships = [
    { type: 'Universities', count: '15+', description: 'Leading academic institutions worldwide' },
    { type: 'Enterprises', count: '30+', description: 'Fortune 500 and innovative startups' },
    { type: 'Research Labs', count: '8+', description: 'Government and private research facilities' },
    { type: 'Open Source', count: '50+', description: 'Active contributions to major projects' }
  ];

  const impactMetrics = [
    { number: '85+', label: 'Research Papers', sublabel: 'Published in peer-reviewed journals' },
    { number: '25+', label: 'Patents', sublabel: 'Filed and pending' },
    { number: '$10M+', label: 'R&D Investment', sublabel: 'Annual research funding' },
    { number: '78+', label: 'Active Researchers', sublabel: 'PhDs and domain experts' }
  ];

  const collaborationPrograms = [
    {
      title: 'Academic Partnership Program',
      description: 'Collaborate with our labs on joint research projects, publish papers, and access cutting-edge infrastructure.',
      benefits: ['Research grants', 'Co-authorship opportunities', 'Lab access', 'Student internships'],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Industry Innovation Program',
      description: 'Partner with us to develop proof-of-concepts, pilot projects, and commercial applications of emerging technologies.',
      benefits: ['Exclusive early access', 'Custom R&D projects', 'Technology licensing', 'Technical workshops'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Open Source Initiative',
      description: 'Contribute to or leverage our open-source research projects and frameworks used by thousands globally.',
      benefits: ['Code repositories', 'Documentation', 'Community support', 'Developer tools'],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Startup Accelerator',
      description: 'Early-stage startups can access our labs, mentorship, and technology stack to accelerate their innovation journey.',
      benefits: ['Lab resources', 'Mentorship', 'Funding opportunities', 'Technical guidance'],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <ServiceCard
              key={lab.title}
              {...lab}
              delay={index * 0.1}
            />
          ))}
        </div> */}
      </Section>

        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Pioneering the Future of IT</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Innovation Labs are dedicated research and development centers focused on exploring cutting-edge technologies and solving tomorrow's IT challenges. We invest heavily in fundamental research, experimental projects, and proof-of-concept developments that shape the future of infrastructure.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through collaboration with academic institutions, technology partners, and industry leaders, we push the boundaries of what's possible in AI, blockchain, energy, and space technology. Our multidisciplinary teams combine theoretical research with practical engineering to create solutions that address real-world problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over $10M in annual R&D investment and 78+ researchers across four specialized labs, we're committed to advancing the state of the art in computing infrastructure, sustainable technology, and next-generation systems architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Research Labs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four specialized labs driving innovation across AI, blockchain, sustainability, and space technology
            </p>
          </div>

          <div className="space-y-12">
            {labs.map((lab, index) => (
              <div key={lab.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                  {/* Lab Header */}
                  <div className="md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${lab.color} text-white flex-shrink-0`}>
                        {lab.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3 text-gray-900">{lab.title}</h3>
                        <p className="text-lg text-gray-600 mb-4">{lab.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700">Est. {lab.established}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-600" />
                            <span className="text-gray-700">{lab.team}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700">{lab.projects}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Research Focus */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                      Research Focus
                    </h4>
                    <ul className="space-y-2">
                      {lab.focus.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-purple-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {lab.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start bg-purple-50 rounded-lg p-3">
                          <Sparkles className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Publications */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      Recent Publications
                    </h4>
                    <ul className="space-y-3">
                      {lab.publications.map((pub, i) => (
                        <li key={i} className="flex items-start bg-green-50 rounded-lg p-3">
                          <BookOpen className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-6 flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Interested in this lab's work?</span>
                  <a href="#collaborate" className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${lab.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Cross-Cutting Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our labs collaborate on interdisciplinary research spanning multiple domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.areas.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Research Network</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading institutions worldwide to accelerate innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {partner.count}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{partner.type}</div>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Programs */}
      <section id="collaborate" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Collaboration Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple pathways to partner with our innovation labs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborationPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2 mb-6">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <a href="/contact-us" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Research Journey</h2>
            <p className="text-xl mb-8 text-blue-100">
              Interested in collaborating on cutting-edge research? We partner with organizations, researchers, and innovators to advance the state of IT technology. Whether you're an academic institution, enterprise, startup, or open-source contributor, we have a program designed for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#labs" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Explore Labs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <Section className="bg-gradient-subtle">
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
      </Section> */}
    </>
  )
}


