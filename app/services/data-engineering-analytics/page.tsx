import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import UseCaseCard from '@/components/UseCaseCard'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Database, BarChart3, Zap, Network, CheckCircle, Brain, Cloud, Server, ArrowRight, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Engineering Services | Big Data & Real-Time Analytics',
  description: 'Deploy scalable data pipelines, ETL frameworks, and analytics platforms to power your AI and business intelligence systems.',
  keywords: 'data engineering, big data, ETL, data pipelines, analytics, data warehouse, data lake',
}

export default function DataEngineeringAnalytics() {
  return (
    <>
      <AnimatedHero
        title="Data Engineering & Analytics"
        subtitle="Big Data & Real-Time Analytics"
        description="Deploy scalable data pipelines, ETL frameworks, and analytics platforms to power your AI and business intelligence systems."
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">Enterprise Data Solutions</h2>
          <p className="text-lg text-accent-700 mb-6">
            We build scalable data infrastructure that enables organizations to collect, process, and analyze massive volumes of data in real-time. Our solutions power AI systems, business intelligence, and data-driven decision making.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            From data lakes to real-time streaming pipelines, we design systems that scale with your data growth and analytical needs.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Data Engineering Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Database className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Data Pipeline Development</h3>
            <p className="text-accent-600">
              Build scalable ETL/ELT pipelines using Apache Airflow, Spark, and cloud-native services for batch and streaming data processing.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <BarChart3 className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Analytics Platforms</h3>
            <p className="text-accent-600">
              Deploy data warehouses, data lakes, and analytics platforms using Snowflake, Databricks, and other modern data platforms.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Zap className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Real-Time Streaming</h3>
            <p className="text-accent-600">
              Implement real-time data streaming solutions using Kafka, Flink, and cloud streaming services for instant insights and event processing.
            </p>
          </div>
          <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
            <Network className="text-primary-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-accent-900 mb-3">Data Integration</h3>
            <p className="text-accent-600">
              Connect disparate data sources, APIs, and systems to create unified data architectures for comprehensive analytics and AI training.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Key Benefits</h2>
            <p className="text-xl text-accent-600">Transform data into actionable insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureList
              features={[
                'Process petabytes of data efficiently',
                'Real-time analytics and insights',
                'Scalable architecture that grows with data',
                'Unified data platform for all sources',
                'AI-ready data pipelines',
                'Reduced data processing costs by 40-60%'
              ]}
            />
            <div className="bg-gradient-subtle rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-accent-900 mb-6">Technology Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Apache Spark, Flink, Airflow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Kafka, Pulsar, Kinesis streaming</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Snowflake, Databricks, BigQuery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Hadoop, Delta Lake, Iceberg</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">dbt, Great Expectations, Data Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-accent-700">Tableau, Power BI, Looker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Use Cases</h2>
            <p className="text-xl text-accent-600">Data engineering solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UseCaseCard
              title="Data Lake & Warehouse"
              description="Build modern data lakes and warehouses to centralize all your data for analytics, reporting, and AI model training."
              icon={<Database size={32} />}
              delay={0}
            />
            <UseCaseCard
              title="Real-Time Analytics"
              description="Process streaming data in real-time for instant insights, fraud detection, and live dashboards."
              icon={<Zap size={32} />}
              delay={0.1}
            />
            <UseCaseCard
              title="AI/ML Data Pipelines"
              description="Prepare and feed data to machine learning models with automated feature engineering and data quality checks."
              icon={<Brain size={32} />}
              delay={0.2}
            />
            <UseCaseCard
              title="Business Intelligence"
              description="Enable self-service analytics and reporting with modern BI platforms and data visualization tools."
              icon={<BarChart3 size={32} />}
              delay={0.3}
            />
            <UseCaseCard
              title="Data Migration"
              description="Migrate legacy data systems to modern cloud-based data platforms with zero downtime."
              icon={<Server size={32} />}
              delay={0.4}
            />
            <UseCaseCard
              title="Customer Analytics"
              description="Build 360-degree customer views by integrating data from multiple sources for personalized experiences."
              icon={<TrendingUp size={32} />}
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Data Engineering Process</h2>
            <p className="text-xl text-accent-600">A systematic approach to building data infrastructure</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Data Assessment & Strategy</h3>
                <p className="text-accent-600">Analyze your data sources, volumes, and requirements to design the optimal data architecture and processing strategy.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Platform Selection & Setup</h3>
                <p className="text-accent-600">Select and configure the right data platforms (data lakes, warehouses, streaming) based on your use cases and scale requirements.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Pipeline Development</h3>
                <p className="text-accent-600">Build scalable ETL/ELT pipelines for batch and streaming data processing with data quality checks and error handling.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Analytics & Optimization</h3>
                <p className="text-accent-600">Enable analytics and BI tools, optimize performance, and continuously improve data quality and processing efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'What is the difference between data lakes and data warehouses?',
                answer: 'Data lakes store raw, unstructured data in its native format, ideal for big data analytics and AI. Data warehouses store structured, processed data optimized for SQL queries and business intelligence. Modern architectures often combine both.'
              },
              {
                question: 'How do you handle data quality and governance?',
                answer: 'We implement comprehensive data quality frameworks using tools like Great Expectations, data profiling, validation rules, and automated monitoring. We also establish data governance policies, lineage tracking, and access controls.'
              },
              {
                question: 'Can you migrate data from legacy systems?',
                answer: 'Yes, we specialize in migrating data from legacy databases, mainframes, and on-premises systems to modern cloud-based data platforms with minimal disruption and data validation.'
              },
              {
                question: 'What is the typical cost of data engineering projects?',
                answer: 'Costs vary based on data volume, complexity, and requirements. We provide detailed cost estimates after assessing your needs. Typically, cloud-based solutions offer better cost scalability than on-premises alternatives.'
              },
              {
                question: 'How do you ensure data security and compliance?',
                answer: 'We implement encryption at rest and in transit, access controls, audit logging, and compliance frameworks (GDPR, HIPAA, SOC 2) based on your industry requirements.'
              }
            ]}
          />
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Case Studies</h2>
            <p className="text-xl text-accent-600">Data engineering and analytics success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Real-Time Analytics Platform"
              industry="Retail"
              challenge="A retail chain needed real-time insights into sales, inventory, and customer behavior across 500+ stores. Their legacy batch processing system provided insights 24 hours late, making it impossible to respond quickly to trends."
              solution="Built a real-time data streaming platform using Kafka for event ingestion, Flink for stream processing, and Snowflake for analytics. Implemented data pipelines that process millions of transactions per second with sub-second latency. Created real-time dashboards for business users."
              results={[
                'Reduced data latency from 24 hours to under 1 second',
                'Processed 100M+ transactions daily in real-time',
                'Improved inventory optimization, reducing stockouts by 40%',
                'Enabled data-driven decisions that increased revenue by 15%'
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Data Lake Migration for Healthcare"
              industry="Healthcare"
              challenge="A healthcare provider had data scattered across multiple legacy systems, making it difficult to analyze patient outcomes and operational efficiency. They needed a unified data platform that complied with HIPAA regulations."
              solution="Migrated all data sources to a modern data lake architecture using Delta Lake on Databricks. Implemented automated ETL pipelines, data quality checks, and comprehensive security controls. Built analytics dashboards for clinical and operational insights while maintaining full HIPAA compliance."
              results={[
                'Unified 15+ disparate data sources into one platform',
                'Reduced data processing time by 75%',
                'Enabled advanced analytics that improved patient outcomes',
                'Achieved 100% HIPAA compliance with audit trails'
              ]}
              delay={0.1}
            />
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Related Services</h2>
            <p className="text-xl text-accent-600">Complementary solutions for complete data strategy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/ai-infrastructure-services" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Brain className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">AI Infrastructure</h3>
              <p className="text-accent-600 mb-4">Train AI models with your data</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/ai-application-development" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <TrendingUp className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">AI Application Development</h3>
              <p className="text-accent-600 mb-4">Build AI applications with your data</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/cloud-hpc-engineering" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Cloud className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud & HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Scale your data infrastructure</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build Your Data Infrastructure</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s design a data engineering solution that scales with your business needs.
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


