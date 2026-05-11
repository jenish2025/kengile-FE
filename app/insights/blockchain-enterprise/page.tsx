import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import {
  Shield,
  Lock,
  Link2,
  Database,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Boxes,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blockchain in Enterprise | Kengile Insights",
  description:
    "Case studies on how enterprises are leveraging blockchain for supply chain, identity, and financial services.",
  keywords:
    "enterprise blockchain, smart contracts, supply chain, DeFi, Web3, distributed ledger technology",
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kengile.com/insights/blockchain-enterprise' },
};

export default function BlockchainEnterprisePage() {
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
              { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://kengile.com/insights-case-studies' },
              { '@type': 'ListItem', position: 3, name: 'Blockchain in Enterprise', item: 'https://kengile.com/insights/blockchain-enterprise' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li><Link href="/insights-case-studies" className="text-accent-500 hover:text-primary-600 transition-colors">Insights</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Blockchain in Enterprise</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Blockchain in Enterprise"
        subtitle="Real-World Applications & ROI"
        description="Case studies on how enterprises are leveraging blockchain for supply chain, identity, and financial services."
      />

      {/* Article Meta */}
      <Section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>November 10, 2025</span>
              </span>
              <span className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </span>
              <span className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Jennifer Wu</span>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-purple-100 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beyond the Hype: Enterprise Blockchain Reality
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              After years of experimentation, enterprise blockchain has matured
              from proof-of-concepts to production systems handling billions in
              transactions. This article examines real implementations across
              supply chain, financial services, and identity management ,
              separating successful patterns from failed experiments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The winners aren&apos;t chasing cryptocurrency dreams but solving
              concrete business problems: reducing fraud, eliminating
              intermediaries, and creating auditable systems of record that
              multiple organizations can trust without centralized control.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-purple-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  $67B
                </div>
                <div className="text-sm text-gray-600">
                  Enterprise blockchain market by 2026
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">
                  Fraud reduction achieved
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  50%
                </div>
                <div className="text-sm text-gray-600">
                  Faster transaction settlement
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Proven Enterprise Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Real-world blockchain implementations driving business value
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Supply Chain Transparency",
                problem:
                  "Global supply chains involve dozens of parties, creating opacity and enabling fraud. Counterfeit products cost industries $500B annually.",
                solution:
                  "Blockchain creates an immutable ledger tracking products from origin to consumer. Smart contracts automatically verify compliance and trigger payments.",
                results: [
                  "85% reduction in counterfeit incidents",
                  "50% faster dispute resolution",
                  "30% reduction in paperwork",
                  "99.9% supply chain visibility",
                ],
                companies: ["Walmart", "Maersk", "IBM Food Trust"],
                icon: <Boxes className="w-10 h-10" />,
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                title: "Cross-Border Payments",
                problem:
                  "International wire transfers take 3-5 days, cost $30-50 per transaction, and lack transparency. Banks maintain expensive correspondent banking networks.",
                solution:
                  "Blockchain-based settlement networks enable near-instant transfers with cryptographic security. Smart contracts handle currency conversion and compliance automatically.",
                results: [
                  "< 10 second settlement times",
                  "90% lower transaction costs",
                  "24/7 operation",
                  "Full audit trails",
                ],
                companies: ["JPMorgan", "Ripple", "SWIFT gpi"],
                icon: <Network className="w-10 h-10" />,
                gradient: "from-green-500 to-emerald-600",
              },
              {
                title: "Digital Identity & Credentials",
                problem:
                  "Centralized identity systems are vulnerable to breaches. 1.1 billion people lack official identity documents. Credential verification is slow and expensive.",
                solution:
                  "Self-sovereign identity on blockchain gives users control over their data. Verifiable credentials enable instant, cryptographic proof of qualifications.",
                results: [
                  "Zero centralized databases",
                  "Instant credential verification",
                  "User-controlled data",
                  "GDPR compliant",
                ],
                companies: [
                  "Microsoft ION",
                  "Sovrin Foundation",
                  "European Blockchain Services",
                ],
                icon: <Lock className="w-10 h-10" />,
                gradient: "from-purple-500 to-pink-600",
              },
              {
                title: "Asset Tokenization",
                problem:
                  "Real estate, art, and private equity are illiquid assets requiring expensive intermediaries. Fractional ownership is complex and inefficient.",
                solution:
                  "Tokenizing assets on blockchain enables fractional ownership, instant settlement, and 24/7 trading. Smart contracts automate dividend distribution.",
                results: [
                  "24/7 market access",
                  "95% lower transaction costs",
                  "Fractional ownership enabled",
                  "Instant settlement",
                ],
                companies: ["tZERO", "Securitize", "Harbor"],
                icon: <TrendingUp className="w-10 h-10" />,
                gradient: "from-orange-500 to-red-600",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl overflow-hidden border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left Panel */}
                  <div
                    className={`md:col-span-2 bg-gradient-to-br ${useCase.gradient} p-10 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                        {useCase.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-6">
                        {useCase.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-white/80 text-sm font-semibold mb-2">
                            THE PROBLEM
                          </div>
                          <p className="text-white/90 leading-relaxed">
                            {useCase.problem}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-white/20">
                          <div className="text-white/80 text-sm font-semibold mb-2">
                            COMPANIES
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {useCase.companies.map((company, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white/20 rounded-full text-sm"
                              >
                                {company}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="md:col-span-3 p-10">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Blockchain Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {useCase.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Measured Results
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {useCase.results.map((result, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-2 bg-green-50 rounded-lg p-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700 font-medium">
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Stack */}
      <Section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Enterprise Blockchain Stack
            </h2>
            <p className="text-xl text-gray-600">
              Technologies powering production blockchain systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                layer: "Blockchain Platforms",
                tech: [
                  "Hyperledger Fabric",
                  "Ethereum (Private)",
                  "Corda",
                  "Quorum",
                ],
                color: "purple",
              },
              {
                layer: "Smart Contract Languages",
                tech: ["Solidity", "Chaincode (Go)", "Kotlin", "Rust"],
                color: "pink",
              },
              {
                layer: "Integration & Tools",
                tech: ["Web3.js", "Ethers.js", "IPFS", "Oracle services"],
                color: "indigo",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.layer}
                </h3>
                <ul className="space-y-3">
                  {category.tech.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle
                        className={`w-5 h-5 text-${category.color}-600 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Considerations */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Critical Success Factors
          </h2>

          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Start with Clear Business Value
              </h3>
              <p className="text-gray-700">
                Don&apos;t implement blockchain because it&apos;s trendy. Focus
                on problems where decentralization, immutability, and
                multi-party consensus provide measurable advantages over
                traditional databases.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Choose the Right Platform
              </h3>
              <p className="text-gray-700">
                Public vs. private vs. consortium blockchains each solve
                different problems. Hyperledger Fabric excels for permissioned
                enterprise networks, while Ethereum provides public
                verifiability.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Plan for Governance
              </h3>
              <p className="text-gray-700">
                Multi-organization blockchains require clear governance models.
                Who controls upgrades? How are disputes resolved? These social
                layer questions are often harder than the technical ones.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Address Regulatory Compliance
              </h3>
              <p className="text-gray-700">
                Ensure your implementation meets industry regulations like GDPR,
                SOC 2, and financial compliance requirements. Work with legal
                teams early in the design process.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build Your Enterprise Blockchain
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Our blockchain architects have delivered 50+ enterprise
            implementations achieving an average 85% reduction in fraud and 50%
            faster settlement times. Let&apos;s explore how blockchain can solve
            your business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-purple-600 rounded-2xl font-bold hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <span>Start a Blockchain Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              <span>More Case Studies</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
