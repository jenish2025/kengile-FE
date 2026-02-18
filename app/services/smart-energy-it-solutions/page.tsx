import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import IndustryCard from '@/components/IndustryCard'
import { Zap, BarChart3, Database, Cloud, Shield, Settings, ArrowRight, CheckCircle, TrendingUp, Server, Users, DollarSign, Activity, Eye, Leaf, Satellite } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart Energy IT Services for Modern Energy Infrastructure | Kengile',
  description: 'Modernize energy operations with Kengile\'s smart energy IT services. Enable real-time monitoring, analytics, and scalable energy platforms for efficiency.',
  keywords: 'smart energy, energy IT solutions, grid optimization, power forecasting, energy analytics, IoT energy',
}

export default function SmartEnergyITSolutions() {
  return (
    <>
      <AnimatedHero
        title="Smart Energy IT Services"
        subtitle="Transform your energy operations"
        description="Transform your energy operations with our comprehensive smart energy IT services. Build intelligent grids, real-time monitoring systems, and AI-powered analytics that optimize consumption, reduce costs, and accelerate sustainability goals."
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
                40%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Energy Cost Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                System Uptime
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
            Why Smart Energy IT Solutions Are Essential for Business Growth
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Your current energy infrastructure may be quietly limiting your business growth. Legacy SCADA systems, disconnected meters, and poor data quality can create data silos, slow data access, and undermine forecasting accuracy. As energy demands rise and regulations become more stringent, these challenges can become a barrier to sustainability, causing teams to spend more time fixing issues than making decisions that drive growth.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            At Kengile, we provide smart energy IT services that break down these barriers and turn data into a growth enabler. Our intelligent monitoring solutions, smart energy solutions, and automated workflows can improve the reliability and accuracy of data, reducing the time-to-insight and giving teams the confidence to make decisions and drive growth, not just fix issues.
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Smart Energy IT Services Tailored to Your Business
          </h2>
          <p className="text-lg text-accent-700">
            At Kengile, we provide smart energy IT services that align with your business objectives. We analyze your current state and provide practical IT solutions to increase efficiency, reliability, and sustainability across all aspects of your business.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Database className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Energy Data Pipeline Development</h3>
              <p className="text-accent-600">
                At Kengile, we develop robust data pipelines to automate the ingestion, transformation, and loading of energy data. Our experts design ETL/ELT data pipelines that are optimized for efficiency, reliability, and real-time data processing from smart meters and energy sensors.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Cloud Energy Platform Architecture</h3>
              <p className="text-accent-600">
                At Kengile, we design and deploy cloud energy platforms for businesses on AWS, Azure, Google Cloud, and other cloud platforms. We help businesses migrate from legacy energy infrastructure, such as SCADA systems, to cloud-based platforms that enable scalability, efficiency, and cost-effectiveness for energy data analytics and AI.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <BarChart3 className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Energy Data Warehouse Solutions</h3>
              <p className="text-accent-600">
                At Kengile, we develop enterprise energy data warehouses and data lakes to integrate all energy data sources for businesses. Our expertise helps businesses optimize data storage, enable fast data querying, and seamlessly integrate all energy data sources.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Real-Time Energy Streaming</h3>
              <p className="text-accent-600">
                At Kengile, we develop real-time streaming solutions for smart energy grids using Kafka, Spark, and Flink technologies. We provide real-time data processing solutions for businesses to process energy data immediately.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Energy Analytics &amp; BI Integration</h3>
              <p className="text-accent-600">
                At Kengile, we integrate energy infrastructure with energy analytics and business intelligence tools to provide practical insights for businesses. We develop energy data models that allow businesses to provide self-service energy analytics for all aspects of the business.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Energy Data Governance &amp; Compliance</h3>
              <p className="text-accent-600">
                At Kengile, we provide data governance for energy data to ensure data accuracy, integrity, and compliance with all relevant energy regulations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-white">
        <SectionHeader
          title="We Provide Smart Energy IT Solutions for Every Industry"
          subtitle="Kengile provides smart energy IT services tailored to each industry's needs. Our experts deliver scalable, reliable, and analytics-ready infrastructure that transforms how you leverage energy data in your industry."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard
              title="Utilities & Power Generation"
              description="We engineer smart energy IT Solutions for utilities to ensure secure, reliable, and efficient grid operations. Our solutions support renewable integration, demand forecasting, and operational intelligence."
              useCases={[
                'Unify grid data across substations for holistic insights',
                'Build compliant data pipelines for regulatory reporting',
                'Enable real-time analytics for grid stability decisions',
              ]}
            />
            <IndustryCard
              title="Real Estate"
              description="Kengile delivers modern energy management infrastructure for commercial buildings. Our services support building automation, occupancy optimization, and sustainability reporting."
              useCases={[
                'Build building-wide energy consumption dashboards',
                'Automate HVAC optimization with predictive analytics',
                'Enable ESG reporting and carbon tracking',
              ]}
            />
            <IndustryCard
              title="Manufacturing"
              description="We engineer energy solutions to handle high-consumption manufacturing operations. Our infrastructure supports process optimization and reduces energy costs."
              useCases={[
                'Build energy consumption profiles per production line',
                'Enable real-time demand response capabilities',
                'Create scalable energy forecasting engines',
              ]}
            />
            <IndustryCard
              title="Smart Cities & Residential"
              description="We help municipalities and developers leverage smart meter data for grid optimization and sustainability. Our solutions support smart city energy initiatives."
              useCases={[
                'Integrate AMI data for comprehensive usage analytics',
                'Build real-time grid monitoring dashboards',
                'Enable demand-side management programs',
              ]}
            />
            <IndustryCard
              title="Government & Public Sector"
              description="Kengile builds scalable energy platforms for government agencies to power sustainability initiatives and compliance reporting."
              useCases={[
                'Build agency-wide energy performance dashboards',
                'Enable automated compliance reporting',
                'Create renewable energy tracking platforms',
              ]}
            />
            <IndustryCard
              title="Transportation"
              description="We engineer energy solutions for EV fleet management, charging infrastructure, and route optimization. Our real-time platforms enable operational excellence."
              useCases={[
                'Build real-time EV charging management platforms',
                'Enable predictive maintenance analytics',
                'Optimize fleet energy consumption patterns',
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/industries-we-serve"
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
            title="Our Client Success Stories"
            subtitle="See how Kengile helps businesses transform their energy infrastructure to improve performance, reduce costs, and achieve sustainability goals. These case studies showcase measurable results from real-world transformations."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Manufacturing Energy Optimization for Global Manufacturer"
              industry="Manufacturing"
              challenge="A global manufacturing corporation couldn't track energy consumption across 12 facilities. Fragmented data prevented optimization and accurate carbon reporting, leading to high costs and compliance risks."
              solution="Kengile built an enterprise energy management platform on Snowflake, unifying utility data, IoT sensors, and production schedules. We implemented real-time consumption tracking and predictive demand forecasting models."
              results={[
                '35% Energy cost reduction',
                '$15M Annual savings achieved',
                '12 Facilities unified',
                '100% ESG compliance achieved',
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Energy & Utilities Smart Grid Analytics for a Regional Utility Provider"
              industry="Energy & Utilities"
              challenge="A regional utility company struggled with grid instability and frequent outages, costing millions annually. Legacy SCADA systems couldn't process real-time data from 50,000+ smart meters effectively."
              solution="Kengile engineered a real-time smart grid analytics platform using Kafka and Databricks. We built streaming pipelines processing millions of meter readings per minute, with ML models predicting demand spikes and potential failures 24 hours in advance."
              results={[
                '45% Reduction in outages',
                '$8M Annual cost savings',
                '50M+ Meter events are processed daily',
                '94% Demand forecast accuracy',
              ]}
              delay={0.1}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="How Your Business Benefits from Our Smart Energy IT Solutions"
            subtitle="A modern energy infrastructure means faster time to insight, faster time to decision, and faster time to cost savings. With the Energy IT expertise of Kengile, you benefit from faster time to insight and faster time to decision."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Faster Time to Insight</h3>
              <p className="text-accent-600 text-sm">
                With Kengile&apos;s Smart Energy IT expertise, you gain faster access to meaningful insights, enabling quicker and more confident decision-making for your business.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <CheckCircle className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Improved Data Quality</h3>
              <p className="text-accent-600 text-sm">
                We ensure improved data quality through comprehensive data validation, monitoring, and governance for your business.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Scalability for Growth</h3>
              <p className="text-accent-600 text-sm">
                Our Smart Energy IT services ensure scalability for growth and development for you and your business.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Cost Efficiency</h3>
              <p className="text-accent-600 text-sm">
                Kengile ensures cost efficiency for you and your business through the optimization of the energy infrastructure.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Operational Reliability with SRE Automation</h3>
              <p className="text-accent-600 text-sm">
                Our SRE automation practices reduce downtime, automate monitoring and alerting, and ensure your energy systems stay reliable at scale.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Eye className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">AI &amp; ML Ready</h3>
              <p className="text-accent-600 text-sm">
                Our smart energy IT experts ensure you are ready for artificial intelligence and machine learning by developing an appropriate feature store.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Technology Stack We Work With"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Smart Meter &amp; Energy Data Processing</h3>
              <p className="text-accent-700 text-sm">
                Apache Spark | Apache Flink | Apache Beam | Databricks | dbt
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Real-Time Energy &amp; Grid Streaming</h3>
              <p className="text-accent-700 text-sm">
                Apache Kafka | Confluent | Redpanda | Amazon Kinesis | Google Pub/Sub
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">IoT &amp; Smart Energy Platforms</h3>
              <p className="text-accent-700 text-sm">
                AWS IoT Core | Azure IoT Hub | Google Cloud IoT | Eclipse Mosquitto
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">SCADA &amp; Grid Integration</h3>
              <p className="text-accent-700 text-sm">
                OSIsoft PI System | OPC UA | IEC 61850 | Modbus | DNP3
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Energy Data Warehousing &amp; Analytics</h3>
              <p className="text-accent-700 text-sm">
                Snowflake | Databricks | Google BigQuery | Amazon Redshift | Firebolt
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Cloud Platforms</h3>
              <p className="text-accent-700 text-sm">
                AWS | Microsoft Azure | Google Cloud Platform
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Workflow Orchestration</h3>
              <p className="text-accent-700 text-sm">
                Apache Airflow | Dagster | Prefect | AWS Step Functions | Temporal
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Data Quality, Governance &amp; Compliance</h3>
              <p className="text-accent-700 text-sm">
                Great Expectations | Monte Carlo | Apache Atlas | Alation
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Smart Energy Transformation Process"
            subtitle="Kengile follows a structured, production-grade methodology refined across complex, large-scale energy platforms. Each phase ensures reliability, performance, and scalability while eliminating surprises and scope creep."
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
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Energy Infrastructure Discovery &amp; Assessment</h3>
                <p className="text-accent-600">
                  We evaluate your end-to-end energy ecosystem, including SCADA systems, smart meters, IoT sensors, and consumption patterns. This phase identifies energy waste, data silos, compliance gaps, and scalability risks, forming a clear baseline for modernization.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Smart Grid Architecture &amp; Platform Design</h3>
                <p className="text-accent-600">
                  Our engineers design a cloud-ready energy architecture covering data ingestion, transformation, storage, and analytics layers. We define pipeline orchestration, real-time vs batch processing, security controls, and technology choices aligned with performance and sustainability goals.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Energy Pipeline Development &amp; Validation</h3>
                <p className="text-accent-600">
                  We build robust ETL and ELT pipelines using iterative sprints, implementing data validation, transformation logic, error handling, and observability. Continuous testing and data quality checks ensure accuracy, reliability, and consistency across all energy datasets.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Production Deployment &amp; Grid Optimization</h3>
                <p className="text-accent-600">
                  We deploy pipelines and platforms into production with minimal disruption, fine-tune performance, optimize costs, and configure monitoring, alerting, and lineage tracking. Knowledge transfer ensures your teams can confidently operate and scale the energy platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Partner with Kengile */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Partner with Kengile for Smart Energy IT"
            subtitle="Creating modern energy systems is a science of knowledge, planning, and execution. At Kengile, we have developed effective strategies and executional expertise to create an energy platform that is modern, secure, and highly optimized."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Users className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Seasoned Energy Engineers</h3>
              <p className="text-accent-600 text-sm">
                Seasoned energy technology engineers will lead your project, ensuring the delivery of your energy platform with maximum reliability and expert guidance.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Vendor Agnostic Approach</h3>
              <p className="text-accent-600 text-sm">
                At Kengile, our solutions are designed with your business requirements, not vendor commissions, for maximum performance.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Zero Downtime Delivery</h3>
              <p className="text-accent-600 text-sm">
                Zero downtime is ensured with our phased delivery process, keeping your business running with minimal disruption.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Measurable ROI</h3>
              <p className="text-accent-600 text-sm">
                We will work with you to establish measurable metrics for your project and share weekly progress with you for transparency and maximum business value.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Security First Design</h3>
              <p className="text-accent-600 text-sm">
                Security best practices will be used to design your energy platform, protecting your critical infrastructure and sensitive business information.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">24/7 Support</h3>
              <p className="text-accent-600 text-sm">
                We will be with you every step of the way with 24/7 support for a minimum of 12 months after your go-live.
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
            subtitle="Complementary solutions to enhance your Smart Energy IT capabilities"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/green-cloud-sustainable-it" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Leaf className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Green Cloud Sustainable IT</h3>
              <p className="text-accent-600 mb-4">Optimize energy-efficient IT systems for smarter energy management</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/blockchain-infrastructure-services" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Satellite className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Satellite &amp; Space Internet Solutions</h3>
              <p className="text-accent-600 mb-4">Enable reliable connectivity for smart energy operations and monitoring</p>
              <span className="text-primary-600 font-semibold inline-flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/blockchain-infrastructure-services" className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group">
              <Shield className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">Blockchain Infrastructure Services</h3>
              <p className="text-accent-600 mb-4">Secure and streamline energy transactions with scalable blockchain systems</p>
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
                question: 'How long does a typical smart energy IT project take?',
                answer: 'The length of the project will depend on the scope, complexity, and the current state of your energy infrastructure. Most projects will take 8-16 weeks for the first deployment. We use an agile development process, so you will see regular deliverables and start seeing the value of the project early on.'
              },
              {
                question: 'What kind of ROI can businesses expect, and how soon do returns start?',
                answer: 'The ROI will depend on your organization and the use cases you implement. In many cases, you will start seeing the benefits of the project in 3-6 months. This will include reduced energy bills, faster decision-making, improved grid stability, and reduced infrastructure costs.'
              },
              {
                question: 'Can you work with our existing SCADA and Energy Monitoring Systems?',
                answer: 'We can definitely work with your existing SCADA and Energy Monitoring Systems. We are vendor-agnostic and will work seamlessly with your SCADA and Smart Meters.'
              },
              {
                question: 'How do you ensure Data Quality during the migration and transformation process?',
                answer: 'We take Data Quality seriously and ensure that every step of the process delivers high-quality results. This includes automated testing and validation of the results. Before we start the actual migration process, we will set quality baselines and compare the results during the process.'
              },
              {
                question: 'What about security and regulatory compliance for the Energy Infrastructures?',
                answer: 'Security and Compliance are of utmost importance for all the projects we undertake. Our team will ensure that the entire process of Energy Infrastructures is compliant with NERC CIP, IEC 62351, and ISO 27001.'
              },
              {
                question: 'How do you handle knowledge transfer to our internal team?',
                answer: 'We ensure that the entire knowledge transfer process is smooth and effective. This will ensure that your internal team is able to operate and extend the Energy Infrastructures on their own.'
              }
            ]}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Energy Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation with our smart energy IT experts to discuss your challenges and explore how we can help you unlock the full potential of your energy data.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-white text-primary-600 hover:bg-white/90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule a Call
          </Link>
        </div>
      </Section>
    </>
  )
}
