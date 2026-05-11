import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import IndustryCard from '@/components/IndustryCard'
import { Database, BarChart3, Zap, Cloud, Shield, Settings, ArrowRight, CheckCircle, TrendingUp, Brain, Server, Users, DollarSign, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Engineering Services | Kengile',
  description: 'Transform raw data into actionable insights with our end-to-end data engineering services. Build scalable pipelines, real-time analytics, and AI-ready infrastructure that accelerates business growth and decision-making.',
  keywords: 'data engineering, big data, ETL, data pipelines, analytics, data warehouse, data lake',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Data Engineering Services | Kengile',
    description: 'Transform raw data into actionable insights with our end-to-end data engineering services. Build scalable pipelines, real-time analytics, and AI-ready infrastructure that accelerates business growth and decision-making.',
    url: 'https://kengile.com/services/data-engineering-analytics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kengile.com/services/data-engineering-analytics',
  },
}

export default function DataEngineeringAnalytics() {
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
              { '@type': 'ListItem', position: 3, name: 'Data Engineering Services', item: 'https://kengile.com/services/data-engineering-analytics' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link>
            </li>
            <li className="text-accent-400">/</li>
            <li>
              <Link href="/services" className="text-accent-500 hover:text-primary-600 transition-colors">Services</Link>
            </li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Data Engineering Services</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Data Engineering Services"
        subtitle="Transform raw data into actionable insights"
        description="Transform raw data into actionable insights with our end-to-end data engineering services. Build scalable pipelines, real-time analytics, and AI-ready infrastructure that accelerates business growth and decision-making."
        ctaText="Start Free Assessment"
        ctaLink="/contact-us"
        secondaryCtaText="See Our Work"
        secondaryCtaLink="/insights-case-studies"
      />

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                10x
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Faster Insights
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Data Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Why Data Engineering Is Essential for Business Growth
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Your data infrastructure may be holding you back. Disconnected systems, poor data quality, and manual work create silos, slow insights, and analytics you can&apos;t rely on. As the volume of data continues to pour in, scalability becomes a bottleneck, causing teams to spend more time cleaning data than making informed, strategic decisions.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            At Kengile, we&apos;re tearing down these obstacles with data engineering that leverages data to fuel growth. We design scalable data pipelines, contemporary data platforms, and automated processes that increase accuracy and accelerate time-to-insight, so teams can focus on innovation, not infrastructure.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Our Data Engineering Services That Drive Results
          </h2>
          <p className="text-lg text-accent-700">
            At Kengile, we focus our <strong>data engineering services</strong> on six key pillars, helping you leverage data as a true differentiator. Our team of experts examines your existing infrastructure and provides solutions to optimize performance, trustworthiness, and analytics-readiness.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Database className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Data Pipeline Engineering</h3>
              <p className="text-accent-600">
                We design and develop robust and scalable data pipelines that automatically handle data ingestion, processing, and loading. Our ETL/ELT processes are designed for speed, reliability, and real-time functionality.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Cloud Data Platform Design</h3>
              <p className="text-accent-600">
                Our experts design and build innovative cloud solutions on AWS, Azure, or Google Cloud Platform. Through data center modernization, we help you migrate from traditional infrastructure to optimized, scalable, and cost-effective environments engineered for analytics and AI.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <BarChart3 className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Data Warehouse &amp; Lake Solutions</h3>
              <p className="text-accent-600">
                We design and build enterprise data warehouses and lakes to integrate your entire data landscape. Our expertise at Kengile ensures optimized storage, rapid query performance, and seamless connectivity across all data sources.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Real-Time Data Streaming</h3>
              <p className="text-accent-600">
                We design and implement real-time data streaming platforms using Kafka, Spark, and Flink. Our solutions enable real-time data processing for time-critical analytics and operational intelligence.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Analytics &amp; BI Integration</h3>
              <p className="text-accent-600">
                We integrate your data infrastructure with analytics and business intelligence tools to provide actionable business insights. Our team at Kengile builds semantic layers and data models to enable self-service analytics across your enterprise.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Data Governance &amp; Quality</h3>
              <p className="text-accent-600">
                We provide comprehensive data governance, including lineage, quality, and compliance management. Our team at Kengile ensures your data is always accurate, secure, and trustworthy.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-white">
        <SectionHeader
          title="Industries We Serve With Our Data Engineering Services"
          subtitle="Kengile provides data engineering services that are attuned to the requirements of each industry. Our data engineers provide scalable, reliable, analytics-ready infrastructure that will transform the way you work with data."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard
              title="Healthcare & Life Sciences"
              description="We develop data solutions for healthcare companies to ensure data operations are secure, compliant, and reliable. Our solutions include support for clinical research, patient analytics, and operational intelligence."
              useCases={[
                'Integrate patient data from various systems for comprehensive analysis',
                'Develop compliant data pipelines for clinical research',
                'Support real-time analytics for operational intelligence',
              ]}
            />
            <IndustryCard
              title="Financial Services & Banking"
              description="Kengile provides innovative data infrastructure that ensures operations are secure, low-latency, and compliant. Our data engineering services support fraud detection, risk analytics, and regulatory reporting."
              useCases={[
                'Develop real-time fraud detection pipelines',
                'Automate regulatory reporting and compliance',
                'Support advanced risk analytics and modeling',
              ]}
            />
            <IndustryCard
              title="Retail & E-Commerce"
              description="We develop data solutions that support high-volume transaction processing, customer analytics, and inventory optimization. Our data infrastructure supports personalization and demand forecasting."
              useCases={[
                'Develop customer 360-degree profiles for personalization',
                'Support real-time inventory and supply chain analytics',
                'Develop scalable recommendation systems',
              ]}
            />
            <IndustryCard
              title="Manufacturing"
              description="We assist manufacturers in using IoT and operational data for predictive maintenance and optimization. Our data engineering capabilities support smart manufacturing initiatives."
              useCases={[
                'Integrate IoT sensor data for predictive maintenance',
                'Develop real-time production monitoring dashboards',
                'Support supply chain optimization analytics',
              ]}
            />
            <IndustryCard
              title="Information Technology (IT)"
              description="Kengile develops scalable data platforms for tech firms to support product analytics, customer insights, and ML workloads. Our data engineering capabilities support rapid innovation and growth."
              useCases={[
                'Develop scalable product analytics pipelines',
                'Support self-service analytics for product teams',
                'Develop ML feature stores and data platforms',
              ]}
            />
            <IndustryCard
              title="Logistics & Transportation"
              description="We develop data solutions for route optimization, fleet management, and supply chain visibility. Our real-time data pipelines support operational excellence."
              useCases={[
                'Develop real-time tracking and visibility platforms',
                'Support predictive logistics analytics',
                'Optimize routes using advanced data models',
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/our-industry-expertise"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
            >
              View All Industries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Case Studies"
            subtitle="Watch how Kengile assists companies in re-architecting their data infrastructure to drive better performance, reduce expenses, and derive new insights."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="IoT Analytics for Predictive Maintenance"
              industry="Manufacturing"
              challenge="A global manufacturing company experienced recurring unplanned equipment downtime, resulting in annual losses of millions of dollars. The sensor data from 5,000+ machines was locked in isolated systems and could not be leveraged for predictive analytics."
              solution="Kengile developed a real-time IoT data analytics platform on top of Kafka and Databricks. We designed and implemented streaming analytics pipelines that processed millions of sensor events per minute, with machine learning models capable of predicting equipment failures up to 72 hours in advance."
              results={[
                'Unplanned downtime decreased by 65%',
                'Annual maintenance expenses saved: $12M',
                'Daily sensor events processed: 50M+',
                'Accuracy of equipment failure predictions: 92%',
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Omnichannel Customer Analytics"
              industry="Retail"
              challenge="A national retailer was unable to integrate online and offline customer activity. Disparate data sources made it difficult to deliver personalized experiences and reliable inventory forecasts, resulting in lost sales.Lack of a unified data layer meant marketing teams stale weekly reports."
              solution="Kengile designed and implemented a customer 360 analytics platform on Snowflake. We integrated POS, e-commerce, loyalty, and marketing data. We also designed and implemented real-time identity resolution and predictive demand forecasting models. This enabled marketing teams to react to real-time buying trends."
              results={[
                'Unified 25M+ customer profiles across channels',
                'Improved inventory accuracy by 35%',
                'Increased customer lifetime value by 22%',
                'Reduced stockouts by 40%',
              ]}
              delay={0.1}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
            >
              View More Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="How You Can Benefit from Our Data Engineering Services"
            subtitle="A contemporary data infrastructure enables you to make faster decisions and with lower costs. Kengile assists you in creating an efficient and robust data infrastructure that ultimately leads to tangible outcomes."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Faster Time-to-Insight</h3>
              <p className="text-accent-600 text-sm">
                With our data engineering expertise, Kengile accelerates data processing, reduces latency, and streamlines workflows to provide you with insights in minutes, not days.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <CheckCircle className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Better Data Quality</h3>
              <p className="text-accent-600 text-sm">
                We implement comprehensive data validation, monitoring, and management to ensure your data is accurate, reliable, and trustworthy for high-stakes decisions.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Designed for Scalability</h3>
              <p className="text-accent-600 text-sm">
                Our experts develop infrastructure that scales with your data, supporting larger workloads and new applications without extensive refactoring.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Cost Savings</h3>
              <p className="text-accent-600 text-sm">
                Kengile optimizes your data infrastructure to reduce storage expenses, eliminate compute waste, and eliminate costly manual data processing.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Brain className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">AI &amp; ML-Ready</h3>
              <p className="text-accent-600 text-sm">
                We build infrastructure that supports advanced analytics, machine learning pipelines, and AI applications, with properly organized feature stores and simple data access.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Simplify Your Business Operations</h3>
              <p className="text-accent-600 text-sm">
                Our solutions automate data monitoring, alerting, and data pipeline management, reducing manual work and allowing your team to concentrate on extracting insights.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="We Work With Enterprise-Grade Technologies"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Data Processing</h3>
              <p className="text-accent-700 text-sm">
                Apache Spark | Apache Flink | Apache Beam | Databricks | dbt
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Data Streaming</h3>
              <p className="text-accent-700 text-sm">
                Apache Kafka | Amazon Kinesis | Google Pub/Sub | Confluent | Redpanda
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Cloud Platforms</h3>
              <p className="text-accent-700 text-sm">
                AWS (Redshift, Glue, S3) | Azure (Synapse, Data Factory) | GCP (BigQuery, Dataflow)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Data Warehousing</h3>
              <p className="text-accent-700 text-sm">
                Snowflake | Databricks | Google BigQuery | Amazon Redshift | Firebolt
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Orchestration</h3>
              <p className="text-accent-700 text-sm">
                Apache Airflow | Dagster | Prefect | AWS Step Functions | Temporal
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Data Quality &amp; Governance</h3>
              <p className="text-accent-700 text-sm">
                Great Expectations | Monte Carlo | Atlan | Alation | Apache Atlas
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Certified Data Engineering Process"
            subtitle="Kengile employs a structured, production-level data engineering methodology that has been refined on complex, enterprise-scale data platforms. Each phase is present to solidify reliability, speed, and scalability while minimizing surprises and scope creep."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Discovery &amp; Data Assessment</h3>
                <p className="text-accent-600">
                  We assess your entire data ecosystem, from source systems and data ingestion mechanisms to data quality, data schema, and data usage patterns. This phase identifies silos, latency, governance issues, and scalability bottlenecks, providing a foundation for data modernization.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Data Architecture &amp; Pipeline Design</h3>
                <p className="text-accent-600">
                  Our data engineers draw up a cloud-optimized data architecture that covers data ingestion, processing, storage, and analytics. We determine pipeline management, batch vs. real-time processing, schema change management, security measures, and technology stack that strikes a balance between performance and cost.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Pipeline Development &amp; Validation</h3>
                <p className="text-accent-600">
                  We build scalable ETL and ELT pipelines through agile sprint development, incorporating data validation, processing, error handling, and monitoring. Continuous testing and data quality validation ensure accuracy, reliability, and consistency for all data sources.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Production Deployment &amp; Performance Optimization</h3>
                <p className="text-accent-600">
                  We deploy pipelines and platforms to production with seamless transitions, optimizing performance, reducing costs, and implementing monitoring and alerting. We also build knowledge and create documentation so your teams can operate and scale the data platform with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Kengile */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Choose Kengile for Data Engineering"
            subtitle="Modern data engineering requires expertise, planning, and careful execution. At Kengile, we apply proven thinking and real-world expertise to ensure your data platform is modern, secure, and completely optimized."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Users className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Experienced Data Engineers</h3>
              <p className="text-accent-600 text-sm">
                Senior data engineers lead every project, ensuring reliable execution and expert guidance throughout.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Vendor-Agnostic Solutions</h3>
              <p className="text-accent-600 text-sm">
                Solutions focus on your organization&apos;s needs, not vendor commissions, for optimal performance.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Zero-Downtime Delivery</h3>
              <p className="text-accent-600 text-sm">
                Our phased approach keeps operations running smoothly with minimal risk of disruption.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Measurable ROI</h3>
              <p className="text-accent-600 text-sm">
                Clear success metrics and weekly progress reporting provide transparency and real business value.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Security-First Design</h3>
              <p className="text-accent-600 text-sm">
                Every decision follows security best practices to protect your data and systems.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">24/7 Post-Launch Support</h3>
              <p className="text-accent-600 text-sm">
                Kengile provides continuous support for at least 12 months after go-live to ensure smooth operations.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started With Kengile
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            subtitle="Complementary solutions for a complete data strategy"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
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
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Cloud &amp; HPC Engineering</h3>
              <p className="text-accent-600 mb-4">Scale your data infrastructure</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={[
              {
                question: 'How long does a typical data engineering project take?',
                answer: 'It depends on the scope, complexity, and your current data infrastructure. Most projects take 8-16 weeks for initial deployment. We operate in agile cycles with frequent deliveries, so you get value quickly while we finish the entire solution.'
              },
              {
                question: 'What about ROI, and when do benefits appear?',
                answer: 'ROI can differ from organization to organization and application to application. Most of our clients see the benefits in 3-6 months: reduced manual data processing, quicker insights, improved data quality, and reduced infrastructure expenses. We establish success metrics right at the start and track progress along the way.'
              },
              {
                question: 'Can you integrate with our existing tools and infrastructure?',
                answer: 'Absolutely. We are vendor-agnostic and integrate with your existing tools, platforms, and processes. We maximize what is already working and recommend changes only when they offer significant improvements in performance, scalability, or efficiency.'
              },
              {
                question: 'How do you ensure data quality during migration and transformation?',
                answer: 'Quality is integrated into every process. We use automated testing, validation rules, and continuous monitoring throughout the pipelines. Before migration, we establish quality baselines and compare results continuously to ensure accuracy and completeness.'
              },
              {
                question: 'What about security and compliance in a regulated industry?',
                answer: 'Security and compliance are integral to every project. We ensure all data engineering activities conform to standards such as HIPAA, SOC 2, GDPR, and PCI-DSS. Encryption, access controls, audit trails, and data lineage tracking are implemented to ensure complete compliance.'
              },
              {
                question: 'How do you handle knowledge transfer to our internal team?',
                answer: 'We provide comprehensive documentation, training sessions, and ongoing support to ensure your team can operate and extend the data infrastructure confidently. Kengile stays engaged during and after the transition and offers continued advisory support as needed.'
              }
            ]}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation with our data engineering experts to discuss your challenges and explore how we can help you unlock the full potential of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Assessment
            </Link>
            <Link
              href="/contact-us"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
