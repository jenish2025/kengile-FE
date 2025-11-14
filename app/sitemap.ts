import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bacancy.com'

  const routes = [
    '',
    '/about-us',
    '/services',
    '/industries-we-serve',
    '/contact-us',
    '/innovation-labs',
    '/insights-case-studies',
    '/careers',
    // AI & Infrastructure Services
    '/services/ai-infrastructure-services',
    '/services/data-center-modernization',
    '/services/cloud-hpc-engineering',
    '/services/devops-sre-automation',
    '/services/data-engineering-analytics',
    '/services/ai-application-development',
    // Energy & Sustainability
    '/services/smart-energy-it-solutions',
    '/services/green-cloud-sustainable-it',
    '/services/digital-energy-platforms',
    '/services/renewable-energy-automation',
    // Blockchain & Digital Finance
    '/services/stablecoin-development-services',
    '/services/blockchain-infrastructure-services',
    '/services/web3-payments-tokenization-platforms',
    '/services/ai-blockchain-integration',
    // Space Connectivity
    '/services/satellite-space-internet-solutions',
    '/services/space-data-analytics',
    '/services/space-energy-edge-systems',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}


