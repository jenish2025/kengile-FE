import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import {
  Satellite,
  Radio,
  Globe,
  Rocket,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Wifi,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Space-Based Connectivity | Kengile Insights",
  description:
    "Analyzing the potential of satellite internet and space connectivity to bridge the global digital divide.",
  keywords:
    "satellite internet, LEO satellites, space connectivity, Starlink, low earth orbit, global broadband",
};

export default function SpaceConnectivityPage() {
  return (
    <>
      <AnimatedHero
        title="Space-Based Connectivity"
        subtitle="The Next Internet Frontier"
        description="Analyzing the potential of satellite internet and space connectivity to bridge the global digital divide."
      />

      {/* Article Meta */}
      <Section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>November 5, 2025</span>
              </span>
              <span className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </span>
              <span className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Alex Rivera</span>
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
      <Section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-blue-100 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Satellite className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Connecting the Unconnected
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Despite decades of internet growth, 2.7 billion people , nearly
              40% of humanity , remain offline. Traditional fiber and cellular
              infrastructure economics make it unviable to connect remote,
              rural, and underserved regions. Space-based connectivity is
              changing this equation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Low Earth Orbit (LEO) satellite constellations from SpaceX,
              Amazon, OneWeb, and others promise to deliver high-speed broadband
              anywhere on Earth. This article examines the technology,
              economics, and transformative potential of satellite internet.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-blue-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  2.7B
                </div>
                <div className="text-sm text-gray-600">
                  People without internet access
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  42,000+
                </div>
                <div className="text-sm text-gray-600">
                  Satellites planned for LEO
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">
                  &lt; 50ms
                </div>
                <div className="text-sm text-gray-600">Latency achieved</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technology Deep Dive */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              LEO Satellite Technology Explained
            </h2>
            <p className="text-xl text-gray-600">
              How space-based internet delivers global connectivity
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Low Earth Orbit Architecture",
                description:
                  "LEO satellites orbit at 340-1,200 km altitude (vs. 36,000 km for traditional geostationary satellites). This dramatically reduces latency from 600ms to under 50ms , making real-time applications like video calls and gaming viable.",
                specs: [
                  "340-550km altitude",
                  "< 50ms latency",
                  "100+ Mbps speeds",
                  "Global coverage",
                ],
                icon: <Rocket className="w-10 h-10" />,
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                title: "Constellation Networks",
                description:
                  "Instead of a few large satellites, LEO systems use thousands of small satellites working together. As satellites move across the sky, user terminals seamlessly hand off between them, maintaining continuous connectivity.",
                specs: [
                  "10,000+ satellites",
                  "Automated handoffs",
                  "Redundant paths",
                  "Mesh networking",
                ],
                icon: <Globe className="w-10 h-10" />,
                gradient: "from-indigo-500 to-purple-600",
              },
              {
                title: "Phased Array Antennas",
                description:
                  "Ground terminals use electronically-steered phased array antennas to track satellites without moving parts. These user terminals are compact, affordable, and require no professional installation.",
                specs: [
                  "No moving parts",
                  "Self-orienting",
                  "Weather resistant",
                  "< $500 cost target",
                ],
                icon: <Radio className="w-10 h-10" />,
                gradient: "from-purple-500 to-pink-600",
              },
              {
                title: "Laser Inter-Satellite Links",
                description:
                  "Next-generation satellites communicate directly via laser links, reducing reliance on ground stations. This enables data to route through space at light speed, with lower latency than fiber optic cables in some cases.",
                specs: [
                  "1+ Gbps capacity",
                  "Space routing",
                  "Reduced latency",
                  "Global backbone",
                ],
                icon: <Zap className="w-10 h-10" />,
                gradient: "from-pink-500 to-red-600",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="grid md:grid-cols-5 gap-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon Panel */}
                <div
                  className={`md:col-span-2 bg-gradient-to-br ${tech.gradient} p-10 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      {tech.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{tech.title}</h3>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {tech.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
                        >
                          <div className="text-sm font-semibold">{spec}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description Panel */}
                <div className="md:col-span-3 p-10 flex items-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Market Landscape */}
      <Section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              The Race for Space Internet
            </h2>
            <p className="text-xl text-gray-600">
              Major players and their constellation strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                company: "Starlink (SpaceX)",
                satellites: "5,000+ launched",
                coverage: "60+ countries",
                status: "Operating",
                color: "blue",
              },
              {
                company: "Project Kuiper (Amazon)",
                satellites: "3,200 planned",
                coverage: "Global",
                status: "Development",
                color: "orange",
              },
              {
                company: "OneWeb",
                satellites: "600+ launched",
                coverage: "50+ countries",
                status: "Operating",
                color: "purple",
              },
              {
                company: "Telesat Lightspeed",
                satellites: "300 planned",
                coverage: "Global",
                status: "Development",
                color: "green",
              },
            ].map((player, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`w-12 h-12 bg-${player.color}-100 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Satellite className={`text-${player.color}-600 w-6 h-6`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {player.company}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Satellites:</span>
                    <span className="font-semibold text-gray-900">
                      {player.satellites}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-semibold text-gray-900">
                      {player.coverage}
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span
                      className={`px-3 py-1 bg-${player.color}-100 text-${player.color}-700 rounded-full text-xs font-semibold`}
                    >
                      {player.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transformative Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              How satellite internet is changing industries and lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Rural & Remote Connectivity",
                description:
                  "Bringing high-speed internet to farms, villages, and remote communities where fiber infrastructure is economically unviable. Enabling telemedicine, distance learning, and economic opportunity.",
                impact: "2.7B people gaining access",
                icon: <Globe className="w-8 h-8" />,
                gradient: "from-green-500 to-emerald-600",
              },
              {
                title: "Maritime & Aviation",
                description:
                  "Cruise ships, cargo vessels, and aircraft get reliable, high-bandwidth connectivity across oceans and remote airspace. Enabling real-time operations, crew welfare, and passenger Wi-Fi.",
                impact: "$500M market by 2028",
                icon: <Wifi className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                title: "Disaster Response",
                description:
                  "When hurricanes, earthquakes, or conflicts destroy ground infrastructure, satellite terminals provide emergency connectivity for first responders and affected populations within hours.",
                impact: "Critical for resilience",
                icon: <Target className="w-8 h-8" />,
                gradient: "from-red-500 to-orange-600",
              },
              {
                title: "IoT & Sensor Networks",
                description:
                  "Connecting remote sensors for agriculture, environmental monitoring, pipeline surveillance, and logistics tracking. Satellite IoT enables truly global coverage for asset tracking.",
                impact: "100M+ devices by 2030",
                icon: <Radio className="w-8 h-8" />,
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 text-white`}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <TrendingUp className="w-5 h-5" />
                  <span>{useCase.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Challenges */}
      <Section className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Challenges & Considerations
          </h2>

          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Space Debris & Sustainability
              </h3>
              <p className="text-gray-700">
                With tens of thousands of satellites planned, orbital congestion
                and collision risk are serious concerns. Industry must develop
                deorbiting standards and traffic management systems.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Astronomical Impact
              </h3>
              <p className="text-gray-700">
                Satellite mega-constellations create light pollution affecting
                ground-based astronomy. Operators are working on darker coatings
                and sun shields to reduce visibility.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Regulatory Complexity
              </h3>
              <p className="text-gray-700">
                Operating globally requires spectrum licenses and regulatory
                approvals from dozens of countries, each with different
                requirements and timelines.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cost & Affordability
              </h3>
              <p className="text-gray-700">
                While terminal costs are decreasing, monthly service fees of
                $50-100+ remain challenging for developing markets. Subsidies
                and tiered pricing models are essential for bridging the digital
                divide.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build Your Satellite Infrastructure
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our space technology team has deployed ground station networks
            across 25 countries, enabling global satellite connectivity with
            &lt; 50ms latency. Let&apos;s discuss your satellite communication
            requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <span>Explore Satellite Solutions</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/insights-case-studies"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              <span>More Insights</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
