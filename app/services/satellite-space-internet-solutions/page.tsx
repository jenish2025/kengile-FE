import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import FAQ from '@/components/FAQ'
import CaseStudyCard from '@/components/CaseStudyCard'
import IndustryCard from '@/components/IndustryCard'
import { Satellite, Network, Zap, Shield, BarChart3, CheckCircle, TrendingUp, Server, Activity, ArrowRight, Cloud, Database, DollarSign, Users, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Satellite & Space Internet Solutions | Kengile',
  description:
    'Transform connectivity with Kengile’s Satellite & Space Internet Solutions. Build global networks, enable real-time communication, and leverage AI-powered analytics to bridge the digital divide and connect the unconnected.',
  keywords:
    'satellite internet, space connectivity, satellite network, low earth orbit, LEO, GEO, global connectivity, VSAT, satellite IT services',
}

export default function SatelliteSpaceInternetSolutions() {
  return (
    <>
      <AnimatedHero
        title="Satellite & Space Internet Solutions"
        subtitle="Space Connectivity IT Services"
        description="Transform connectivity with Kengile’s Satellite & Space Internet Solutions. Build global networks, enable real-time communication, and leverage AI-powered analytics to bridge the digital divide and connect the unconnected."
        ctaText="Start Free Assessment"
        ctaLink="/contact-us"
        secondaryCtaText="See Our Work"
        secondaryCtaLink="/insights-case-studies"
      />

      {/* Stats */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                40+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Satellite Network Deployments
              </div>
              <p className="text-xs text-accent-600">Across LEO, MEO, and GEO</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.95%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                End-to-End Availability
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Remote Locations Connected
              </div>
              <p className="text-xs text-accent-600">Maritime routes &amp; airspaces</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Satellite Operations Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Why Satellite Internet Solutions Are Essential for Business Growth
          </h2>
          <p className="text-lg text-accent-700 mb-6">
            Your connectivity infrastructure could be hindering your business&apos;s growth. Traditional ground-based
            networks, poor coverage, and limited bandwidth may be slowing access to data. As global and remote business
            operations increase, these issues may be hindering scalability and efficiency.
          </p>
          <p className="text-lg text-accent-700 mb-8">
            Satellite and Space IT solutions can stretch the boundaries of connectivity by providing global coverage,
            effective communication, and reduced latency. With the use of intelligent satellite systems and network
            knowledge from companies such as Kengile, businesses can function safely and securely from anywhere in the
            world.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Our Space Connectivity IT Services Tailored to Your Business
          </h2>
          <p className="text-lg text-accent-700">
            At Kengile, we provide Space Connectivity IT Services that meet the needs of your business objectives. We
            analyze your current state and provide practical IT solutions to increase efficiency, reliability, and global
            reach across all aspects of your business.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Satellite className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Satellite Data Pipeline Development</h3>
              <p className="text-accent-600">
                We create robust data pipelines that can automate the ingestion, transformation, and loading of satellite
                telemetry data. Our team of experts develops ETL/ELT processes that are efficient, reliable, and enable
                real-time processing from satellite formations as well as ground-based stations.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Cloud className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Cloud Space Platform Architecture</h3>
              <p className="text-accent-600">
                We create and deploy native cloud platforms for deployment on AWS, Azure, Google Cloud, and other
                platforms. We help navigate the move from traditional ground infrastructures to scalable, efficient,
                cost-effective, and purpose-built cloud solutions for satellite applications.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Database className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Satellite Data Warehouse Solutions</h3>
              <p className="text-accent-600">
                We provision enterprise-class satellite data warehousing and data lake solutions to unify space data
                sources for your business. Our solution provides optimized storage and querying of data from both orbit and
                the ground.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Real-Time Orbital Streaming</h3>
              <p className="text-accent-600">
                We develop real-time streaming solutions for satellite networks using Kafka, Spark, and Flink technologies.
                We provide real-time data processing solutions for businesses to process orbital telemetry and
                communication data immediately.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <BarChart3 className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Space Analytics &amp; BI Integration</h3>
              <p className="text-accent-600">
                We integrate satellite infrastructure with analytics and business intelligence tools to provide practical
                insights for businesses. We develop space data models that allow businesses to provide self-service
                analytics for all aspects of satellite operations.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-accent-900 mb-3">Space Data Governance &amp; Compliance</h3>
              <p className="text-accent-600">
                Our expert data engineers govern satellite data to ensure its accuracy and integrity while complying with
                applicable laws and regulations governing the space industry, including the ITU and FCC regulatory regimes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-white">
        <SectionHeader
          title="Industries We Serve with Satellite & Space Internet Solutions"
          subtitle="Kengile provides Satellite & Space Internet Solutions tailored to each industry's needs. Our experts deliver scalable, reliable, and analytics-ready infrastructure that transforms how you leverage global connectivity."
          className="text-center mb-12"
          titleClassName="text-4xl font-bold text-gradient mb-4"
          subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard
              title="Telecommunications & Internet Service Providers (ISPs)"
              description="We craft Satellite & Space Internet Solutions for telecom companies to provide security, reliability, and global reach, addressing the integration of LEO constellations, smarter bandwidth consumption, and network intelligence."
              useCases={[
                'Unify data across a satellite fleet for big-picture views',
                'Create compliant data pipelines for regulatory reports',
                'Enable real-time analytics to support optimization decisions',
              ]}
            />
            <IndustryCard
              title="Maritime & Offshore Operations"
              description="We provide modern connectivity infrastructure to ships and offshore assets everywhere on the planet, including tracking, crew services, and communication services to vessels globally."
              useCases={[
                'Develop fleet-wide connectivity management dashboards',
                'Automate bandwidth allocation using predictive analytics',
                'Support real-time vessel tracking and communication',
              ]}
            />
            <IndustryCard
              title="Aviation & Aerospace"
              description="We design cutting-edge infrastructure for in-flight user experiences and aerospace operations, supporting passenger internet access and mission-critical communication for flight decks."
              useCases={[
                'Profile passenger connectivity usage by flight',
                'Enable real-time cockpit data link capabilities',
                'Develop scalable in-flight entertainment systems',
              ]}
            />
            <IndustryCard
              title="Enterprise & Remote Operations"
              description="We assist businesses in leveraging satellite-based connectivity for remote business support and continuity, including mining, oil and gas, and remote workforce operations."
              useCases={[
                'Integrate VSAT data for holistic site analytics',
                'Create real-time monitoring dashboards on remote sites',
                'Support disaster recovery communication programs',
              ]}
            />
            <IndustryCard
              title="Government & Defense"
              description="We develop secure satellite systems for government and defense to support mission-critical communications and emergency response initiatives."
              useCases={[
                'Build agency-wide secure communication dashboards',
                'Enable encrypted tactical data links',
                'Implement emergency response coordination platforms',
              ]}
            />
            <IndustryCard
              title="Rural & Underserved Communities"
              description="We create connectivity systems to bridge the digital divide, ensuring internet connectivity in schools, health centers, and rural communities."
              useCases={[
                'Develop community connectivity management platforms',
                'Enable telemedicine programs',
                'Enable distance learning and optimize bandwidth for maximum community impact',
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
            subtitle="See how Kengile helps businesses transform their satellite infrastructure to improve performance, reduce costs, and achieve global connectivity goals. These case studies showcase measurable results from real-world transformations."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="LEO Constellation Management Program for a Global ISP"
              industry="Telecommunications"
              challenge="A global internet provider struggled to handle the vast amount of satellite system data from its fleet of over 800 satellites. Ineffective ground systems were not able to process the satellites' real-time telemetry signals effectively."
              solution="Kengile created a real-time constellation analytics system based on Kafka and Databricks. We designed a streaming architecture that processes millions of telemetry events per minute, using ML models that predict orbital adjustments and failures 48 hours into the future."
              results={[
                '60% reduction in outages',
                '$12M annual cost savings',
                '100M+ events processed daily',
                '97% coverage optimization',
              ]}
              delay={0}
            />
            <CaseStudyCard
              title="Maritime Fleet Connectivity for a Shipping Corporation"
              industry="Maritime"
              challenge="A global shipping company was unable to track connectivity quality across more than 200 ships. Fragmented satellite data prevented efficiency gains and accurate reporting, resulting in crew dissatisfaction."
              solution="Kengile built an Enterprise Maritime Connectivity Platform using Snowflake, integrating VSAT data, IoT sensors, and voyage schedules. We built models for real-time bandwidth tracking and demand forecasting."
              results={[
                '45% bandwidth optimization',
                '$8M annual savings',
                '200+ vessels unified',
                '100% crew satisfaction improvement',
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
            title="Business Benefits You Get From Our Satellite & Space Internet Solutions"
            subtitle="Think of it as an intelligent backbone for extended reach: satellite and space-based connectivity that is faster, more global, and operationally leaner. Kengile’s Satellite & Space Internet Solutions give organizations a resilient, scalable, intelligence-driven link built for mission-critical work."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-xl text-accent-600 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Zap className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Faster Deployment and Global Reach</h3>
              <p className="text-accent-600 text-sm">
                We accelerate satellite network rollouts through optimized ground systems, seamless integration of LEO/GEO,
                and architectures ready to go—enabling faster connectivity and rapid expansion into hard-to-reach and
                underserved areas.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <CheckCircle className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">
                Sharper Signal Quality and Performance
              </h3>
              <p className="text-accent-600 text-sm">
                Our approach provides tighter signal reliability through smarter link budgets, real-time monitoring, and
                proactive interference mitigation, delivering stable, high-performance connectivity for land, sea, and air.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Scalable Space Infrastructure</h3>
              <p className="text-accent-600 text-sm">
                Kengile designs networks to grow with you: more coverage, more devices, more data, without forcing you to
                rebuild your core connectivity, so global expansion becomes practical.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <DollarSign className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Optimized Bandwidth and Cost Control</h3>
              <p className="text-accent-600 text-sm">
                We optimize bandwidth utilization, ground station operations, and traffic routing to trim satellite costs,
                achieving effective resource utilization without compromising performance.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <BarChart3 className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">AI-Ready Connectivity and Analytics</h3>
              <p className="text-accent-600 text-sm">
                Our solutions are designed with AI and Machine Learning in mind. Predictive analytics power smarter
                bandwidth allocation, performance forecasting, and anomaly detection across the space network.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Settings className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Automated and Simplified Operations</h3>
              <p className="text-accent-600 text-sm">
                Kengile&apos;s Space Connectivity IT Services improve operational efficiency through automation,
                consolidated monitoring, and smart alerts, helping minimize human effort while increasing reliability.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Enterprise-Grade Technologies We Work With"
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Satellite Data Processing</h3>
              <p className="text-accent-700 text-sm">
                Apache Spark | Apache Flink | Apache Beam | Databricks | dbt
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Real-Time Streaming</h3>
              <p className="text-accent-700 text-sm">
                Apache Kafka | Amazon Kinesis | Google Pub/Sub | Confluent | Redpanda
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Cloud Platforms</h3>
              <p className="text-accent-700 text-sm">
                AWS (Ground Station, S3) | Azure Orbital | GCP (BigQuery, Dataflow)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Space Data Warehousing</h3>
              <p className="text-accent-700 text-sm">
                Snowflake | Databricks | Google BigQuery | Amazon Redshift | Firebolt
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-accent-200">
              <h3 className="text-xl font-semibold text-accent-900 mb-4">Workflow Orchestration</h3>
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
            title="Approach to Space Connectivity Transformation"
            subtitle="Kengile applies a production-grade process, polished from extensive work with large and complex satellite systems. Every step is about reliability, speed, and growth, while surprises and scope creep stay at arm's length."
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
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Connectivity Infrastructure Discovery and Evaluation
                </h3>
                <p className="text-accent-600">
                  We map your entire satellite setup—from ground stations and antennas to modems and coverage patterns.
                  This step spots gaps in connectivity, data silos, compliance needs, and risks to scaling, giving a solid
                  baseline for modernization.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Space Network Architecture and Platform Design
                </h3>
                <p className="text-accent-600">
                  Our engineers create a cloud-ready satellite architecture that includes data ingestion, transformation,
                  storage, and analytics layers. We outline how pipelines should run, choose between real-time and batch
                  processing, set security controls, and select technologies aligned with performance and coverage targets.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Building and Validating Satellite Pipelines
                </h3>
                <p className="text-accent-600">
                  We construct robust ETL and ELT pipelines through iterative sprints, embedding data validation,
                  transformation rules, error handling, and observability, while continuously testing for accuracy,
                  reliability, and consistency of all satellite datasets.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Production Deployment and Network Fine-Tuning
                </h3>
                <p className="text-accent-600">
                  We deploy pipelines and platforms into production with minimal disruption, sharpen performance and reduce
                  costs, and set up monitoring, alerts, and lineage tracking. Knowledge transfer ensures your teams can
                  confidently operate and scale the satellite platform.
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
            title="Why Choose Kengile for Space Connectivity IT"
            subtitle="The development of advanced satellite connectivity systems is complex and requires substantial knowledge, strategic planning, and flawless execution. Kengile combines solid satellite engineering skills with effective delivery disciplines to design safe, flexible, and high-quality space connectivity systems."
            className="text-center mb-12"
            titleClassName="text-4xl font-bold text-gradient mb-4"
            subtitleClassName="text-lg text-accent-700 max-w-4xl mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Users className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Skilled Satellite and Space Engineers</h3>
              <p className="text-accent-600 text-sm">
                Our experienced satellite and space engineers direct every project to ensure that your connectivity
                platform is developed with maximum reliability, technical accuracy, and operational robustness.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Network className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">
                Vendor-Agnostic Architecture for Satellite Connectivity
              </h3>
              <p className="text-accent-600 text-sm">
                Our Satellite &amp; Space Connectivity IT Services are designed around your requirements and are
                vendor-agnostic, allowing best-in-class performance from LEO, MEO, and GEO networks.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Activity className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Zero Downtime</h3>
              <p className="text-accent-600 text-sm">
                Our phased approaches upgrade satellite systems without impacting service availability and with minimal
                operational risk.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <TrendingUp className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Clear, Measurable Outcomes</h3>
              <p className="text-accent-600 text-sm">
                From day one, we establish clear performance metrics and provide ongoing updates—transparency and ROI are
                key in aligning our performance with your business objectives.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Shield className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Security-Focused Satellite Design</h3>
              <p className="text-accent-600 text-sm">
                Our satellite services have security integrated at all levels, using industry best practices to secure
                ground infrastructure, network connections, and communications data.
              </p>
            </div>
            <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
              <Server className="text-primary-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold text-accent-900 mb-3">Around the Clock Global Support</h3>
              <p className="text-accent-600 text-sm">
                We provide 24/7 support, both during and after deployment, ensuring global connectivity stability after
                go-live.
              </p>
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
                question: 'What is the normal timeframe for a Satellite & Space Internet Solutions project?',
                answer:
                  'The duration of the project depends on its scope, complexity, and the preparedness of your existing connectivity ecosystem. For an initial rollout, our projects are usually around 10–20 weeks. We follow an agile approach with many milestones so you begin seeing immediate value.',
              },
              {
                question: 'What’s the usual ROI, and when can we expect results?',
                answer:
                  'ROI depends on your organization and the use cases you deploy. In most cases, you begin to see benefits between 4 and 8 months of deployment, including better coverage, lower latency, faster decision-making, and lower infrastructure costs.',
              },
              {
                question: 'Are we able to use our existing VSAT System and Ground Station systems?',
                answer:
                  'Yes. We can integrate with your existing VSAT and Ground Station infrastructure. We are vendor-agnostic and can work with your existing antennas, modems, and VSAT satellite terminals from any vendor.',
              },
              {
                question: 'How do you ensure data quality during migration and transformation?',
                answer:
                  'Data quality is a key area of emphasis. Automated testing and validation are implemented at every stage. Before the migration process begins, we set quality baselines and continuously monitor results.',
              },
              {
                question: 'What about security and regulatory compliance for satellite infrastructure?',
                answer:
                  'Security and regulatory compliance are of the utmost importance. Our team ensures that satellite infrastructure complies with ITU, FCC, ITAR, and ISO 27001 regulations.',
              },
              {
                question: 'How do you manage knowledge transfer to our internal team?',
                answer:
                  'We design a smooth and effective process of transferring knowledge so that your team can operate and expand the satellite infrastructure independently.',
              },
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Connectivity Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation with our Satellite &amp; Space Internet Solutions experts to discuss your
            challenges and explore how we can help you unlock the full potential of global satellite connectivity.
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


