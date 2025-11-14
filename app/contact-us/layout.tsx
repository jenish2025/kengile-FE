import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Partner with a Future-Focused IT Services Company',
  description: 'Let\'s co-build the infrastructure of the future. Connect with our AI, energy, and cloud experts to discuss your IT roadmap.',
  keywords: 'contact, IT services contact, AI infrastructure contact, cloud services contact',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


