import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { Code, Cloud, Brain, Rocket, Zap, Shield, Users, Globe, Award, TrendingUp, Heart, Coffee, Briefcase, GraduationCap, DollarSign, Home, Sparkles, Target, CheckCircle, ArrowRight, MapPin, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Join a Future-Focused IT Services Company',
  description: 'Build your career in AI, cloud, blockchain, and infrastructure services — shaping the next wave of global innovation.',
  keywords: 'careers, jobs, IT jobs, AI engineer, cloud architect, blockchain developer, infrastructure engineer',
}

export default function Careers() {
  const positions = [
    {
      title: 'AI Infrastructure Engineer',
      description: 'Design and deploy scalable AI infrastructure, GPU clusters, and MLOps pipelines for enterprise clients. Work with cutting-edge technologies like NVIDIA A100, Ray, and Kubernetes.',
      href: '/contact-us',
      icon: <Brain size={32} />,
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$120K - $180K',
      skills: ['Python', 'Kubernetes', 'TensorFlow', 'PyTorch', 'MLOps']
    },
    {
      title: 'Cloud Architect',
      description: 'Architect hybrid cloud and HPC solutions, multi-cloud strategies, and enterprise cloud migrations. Lead design of scalable, resilient cloud infrastructure.',
      href: '/contact-us',
      icon: <Cloud size={32} />,
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '$140K - $200K',
      skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes']
    },
    {
      title: 'Blockchain Developer',
      description: 'Build blockchain networks, smart contracts, and decentralized applications for enterprise use cases. Experience with Solidity and Web3 technologies required.',
      href: '/contact-us',
      icon: <Code size={32} />,
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '$110K - $170K',
      skills: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'Node.js']
    },
    {
      title: 'DevOps Engineer',
      description: 'Implement CI/CD pipelines, Kubernetes clusters, and observability systems for modern IT operations. Strong experience with infrastructure as code.',
      href: '/contact-us',
      icon: <Zap size={32} />,
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '$100K - $150K',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Prometheus']
    },
    {
      title: 'Senior Data Engineer',
      description: 'Build data pipelines, analytics platforms, and real-time streaming systems for AI and business intelligence. Experience with big data technologies required.',
      href: '/contact-us',
      icon: <Rocket size={32} />,
      location: 'Remote / Boston',
      type: 'Full-time',
      experience: '4-7 years',
      salary: '$130K - $190K',
      skills: ['Apache Spark', 'Kafka', 'Python', 'SQL', 'Airflow']
    },
    {
      title: 'Security Engineer',
      description: 'Ensure enterprise-grade security, compliance, and governance across cloud, blockchain, and AI systems. Experience with zero-trust architecture.',
      href: '/contact-us',
      icon: <Shield size={32} />,
      location: 'Remote / Washington DC',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '$125K - $185K',
      skills: ['Security', 'Compliance', 'IAM', 'SIEM', 'Penetration Testing']
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries, equity options, and annual performance bonuses. We reward excellence.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world. We have team members across 25+ countries with flexible hours.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, gym memberships, and wellness programs.',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: 'Learning & Development',
      description: '$5,000 annual learning budget, conference tickets, certifications, and access to premium courses.',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: 'Unlimited PTO',
      description: 'Take the time you need to recharge. We believe in work-life balance and trust our team.',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Latest Equipment',
      description: 'MacBook Pro or high-end workstation, dual monitors, ergonomic setup, and any tools you need.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Team Retreats',
      description: 'Annual company retreats, quarterly team offsites, and regular virtual social events.',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Equity & Stock Options',
      description: 'Share in our success with competitive equity packages for all employees.',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ]

  const values = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Innovation First',
      description: 'We encourage experimentation, embrace failure as learning, and constantly push technological boundaries.',
      color: 'blue'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Collaborative Spirit',
      description: 'We believe the best solutions come from diverse teams working together with mutual respect.',
      color: 'purple'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Impact-Driven',
      description: 'Every project we undertake has the potential to transform industries and improve lives globally.',
      color: 'green'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Excellence Standard',
      description: 'We set high standards for ourselves and deliver exceptional quality in everything we do.',
      color: 'orange'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior AI Engineer',
      tenure: '2 years at Kengile',
      quote: 'Working at Kengile has been transformative for my career. I&apos;ve had the opportunity to work on cutting-edge AI infrastructure projects that are genuinely pushing the boundaries of what&apos;s possible. The team is brilliant, supportive, and the culture of innovation is real.',
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architect',
      tenure: '3 years at Kengile',
      quote: 'The remote-first culture at Kengile is authentic, not just a buzzword. I have the flexibility to work from anywhere while collaborating with talented engineers worldwide. The projects are challenging and the learning opportunities are endless.',
      avatar: 'MR'
    },
    {
      name: 'Jennifer Wu',
      role: 'Blockchain Lead',
      tenure: '1.5 years at Kengile',
      quote: 'I joined Kengile to work on meaningful blockchain projects, and I wasn&apos;t disappointed. We&apos;re building real enterprise solutions that solve actual problems. The team trusts you with autonomy while providing support when needed.',
      avatar: 'JW'
    }
  ]

  const hiringProcess = [
    {
      step: '01',
      title: 'Application Review',
      description: 'Submit your application through our careers portal. Our team reviews every application carefully.',
      duration: '2-3 days'
    },
    {
      step: '02',
      title: 'Initial Screening',
      description: 'A 30-minute video call with our recruiter to discuss your background, interests, and expectations.',
      duration: '30 minutes'
    },
    {
      step: '03',
      title: 'Technical Assessment',
      description: 'Take-home assignment or live coding session relevant to the role. We respect your time with reasonable challenges.',
      duration: '2-4 hours'
    },
    {
      step: '04',
      title: 'Team Interviews',
      description: 'Meet with team members and hiring manager. Technical deep-dive, architecture discussions, and culture fit.',
      duration: '2-3 hours'
    },
    {
      step: '05',
      title: 'Final Interview',
      description: 'Conversation with leadership about vision, growth opportunities, and alignment with company goals.',
      duration: '1 hour'
    },
    {
      step: '06',
      title: 'Offer & Onboarding',
      description: 'Receive your offer, negotiate if needed, and join our comprehensive onboarding program.',
      duration: '1 week'
    }
  ]

  return (
    <>
      <AnimatedHero
        title="Careers at Kengile"
        subtitle="Shape the Future of Technology"
        description="Join a team of world-class engineers, architects, and innovators building the infrastructure that powers tomorrow's enterprises."
      />

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">200+</div>
              <div className="text-blue-200 font-medium">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">25+</div>
              <div className="text-blue-200 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">98%</div>
              <div className="text-blue-200 font-medium">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">4.9/5</div>
              <div className="text-blue-200 font-medium">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Kengile */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200 via-indigo-200 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                Why Join Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Why Kengile?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We&apos;re not just another tech company. We&apos;re building the infrastructure that will power the next generation of global enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-2xl flex items-center justify-center mb-6 text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-purple-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                <Briefcase className="w-4 h-4 inline-block mr-2" />
                Open Positions
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Current Openings
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Find your perfect role and join our mission to build the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="text-white">
                      {position.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {position.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                      <span>{position.type} • {position.experience}</span>
                    </div>
                    <div className="flex items-center text-sm font-semibold text-indigo-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {position.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                    {position.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{position.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={position.href}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-indigo-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                <Sparkles className="w-4 h-4 inline-block mr-2" />
                Perks & Benefits
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              Amazing Benefits
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We believe in taking care of our team with world-class benefits and perks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Employee Testimonials */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                <Users className="w-4 h-4 inline-block mr-2" />
                Team Voices
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
              What Our Team Says
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Hear directly from the people who make Kengile an amazing place to work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">{testimonial.tenure}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Hiring Process */}
      <Section className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-gray-100 via-slate-100 to-zinc-100 text-gray-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                <Target className="w-4 h-4 inline-block mr-2" />
                Our Process
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-700 via-slate-700 to-zinc-700 bg-clip-text text-transparent mb-6 leading-tight">
              Hiring Process
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Transparent, respectful, and designed to help you showcase your best work
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {hiringProcess.map((step, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                {index < hiringProcess.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600 opacity-30"></div>
                )}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-indigo-300">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t see a position that matches your skills? We&apos;re always looking for exceptional talent. Send us your resume and let&apos;s start a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              <span>Learn More About Us</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}


