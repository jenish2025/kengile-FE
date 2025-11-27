import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Future-Ready IT Services | AI • Cloud • Energy • Blockchain • Space',
  description: 'We design, build, and manage future-ready IT infrastructure — integrating AI, cloud, energy systems, blockchain, and satellite networks for global enterprises.',
  keywords: 'AI infrastructure, cloud services, data center, blockchain, space connectivity, IT services, future technology',
  openGraph: {
    title: 'Future-Ready IT Services | AI • Cloud • Energy • Blockchain • Space',
    description: 'We design, build, and manage future-ready IT infrastructure — integrating AI, cloud, energy systems, blockchain, and satellite networks for global enterprises.',
    type: 'website',
  },
}

const organizationSchema = {
  '@type': 'Organization',
  name: 'Kengile',
  description: 'Next-generation IT services company specializing in AI, cloud, energy, blockchain, and space connectivity',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kengile.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kengile.com'}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
    email: 'info@kengile.com',
  },
  sameAs: [
    'https://linkedin.com/company/kengile',
    'https://twitter.com/kengile',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
