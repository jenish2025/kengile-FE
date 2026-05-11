import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import CaseStudyCard from '@/components/CaseStudyCard'
import { BarChart3, Satellite, Brain, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Space Data Analytics | AI & Cloud Platforms for SpaceTech',
  description: 'Use AI and data engineering to analyze satellite imagery and deliver predictive insights for space and earth observation.',
  keywords: 'space data analytics, satellite imagery, earth observation, space data processing, satellite analytics, AI space data',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kengile.com/services/space-data-analytics' },
}

export default function SpaceDataAnalytics() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kengile.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://kengile.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Space Data Analytics', item: 'https://kengile.com/services/space-data-analytics' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li><Link href="/services" className="text-accent-500 hover:text-primary-600 transition-colors">Services</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Space Data Analytics</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Space Data Analytics"
        subtitle="AI & Cloud Platforms for SpaceTech"
        description="Use AI and data engineering to analyze satellite imagery and deliver predictive insights for space and earth observation."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Intelligent Space Data Processing</h2>
          <p className="text-lg text-accent-700 mb-6">
            We build AI-powered platforms for processing and analyzing satellite data, including imagery, telemetry, and earth observation datasets. Our solutions enable organizations to extract actionable insights from space-based data sources.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From climate monitoring to agricultural analysis and infrastructure tracking, we transform raw satellite data into valuable business intelligence.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Analytics Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Satellite className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Satellite Imagery Analysis</h3>
            <p className="text-accent-700">
              Process and analyze satellite imagery using computer vision and AI to detect changes, classify objects, and monitor environmental conditions.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Brain className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">AI-Powered Insights</h3>
            <p className="text-accent-700">
              Apply machine learning models to satellite data for predictive analytics, anomaly detection, and pattern recognition.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <BarChart3 className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Data Pipelines</h3>
            <p className="text-accent-700">
              Build scalable data processing pipelines to ingest, transform, and store massive volumes of satellite data efficiently.
            </p>
          </div>
          <div className="bg-gradient-subtle border border-accent-200 rounded-xl p-6">
            <Eye className="text-primary-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-white mb-3">Earth Observation</h3>
            <p className="text-accent-700">
              Monitor climate change, deforestation, urban growth, and other earth observation applications using satellite data analytics.
            </p>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Space data analytics success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Agricultural Monitoring via Satellite"
              industry="Agriculture"
              challenge="An agricultural technology company needed to monitor crop health, predict yields, and detect issues across millions of acres of farmland. Traditional ground-based monitoring was expensive and time-consuming."
              solution="Built an AI-powered platform analyzing satellite imagery from multiple sources. Implemented computer vision models for crop classification, health monitoring, and yield prediction. Created automated alerts for issues like drought, pests, and disease. Integrated with farm management systems."
              results={[
                'Monitored 10M+ acres of farmland daily',
                'Improved crop yield predictions by 25%',
                'Reduced monitoring costs by 70%',
                'Enabled early detection of crop issues'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Climate Change Monitoring Platform"
              industry="Environmental"
              challenge="A research organization needed to track climate change indicators globally, including deforestation, ice melt, and sea level rise. They required processing massive amounts of satellite data with high accuracy."
              solution="Developed a comprehensive space data analytics platform using AI to process petabytes of satellite imagery. Implemented deep learning models for change detection, automated data pipelines, and created interactive dashboards for researchers and policymakers."
              results={[
                'Processed 100TB+ of satellite data monthly',
                'Detected deforestation with 95% accuracy',
                'Enabled real-time climate monitoring',
                'Supported evidence-based policy decisions'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Analyze Space Data with AI</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s build a space data analytics platform for your organization.
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


