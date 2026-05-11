import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from "@/components/AnimatedHero";
import Section from "@/components/Section";
import ContactUsForm from "@/components/ContactUsForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Kengile',
  description: 'Connect with Kengile\'s AI, energy, and cloud experts. Partner with us to transform your IT infrastructure for the next decade and beyond.',
  keywords: 'contact Kengile, IT services contact, AI cloud consulting, get in touch',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kengile.com/contact-us',
  },
}

export default function ContactUs() {
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
              { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://kengile.com/contact-us' },
            ],
          }),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-accent-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-accent-500 hover:text-primary-600 transition-colors">Home</Link></li>
            <li className="text-accent-400">/</li>
            <li className="text-accent-900 font-medium">Contact Us</li>
          </ol>
        </div>
      </nav>
      <AnimatedHero
        title="Contact Us"
        subtitle="Let's Build the Future Together"
        description="Partner with us to transform your IT infrastructure for the next decade and beyond. Connect with our AI, energy, and cloud experts to discuss your IT roadmap."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-accent-700 mb-8">
              Ready to transform your IT infrastructure? Let&apos;s discuss how
              we can help you build future-ready solutions.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-700 mb-1">
                    Email
                  </h3>
                  <p className="text-accent-600">info@kengile.com</p>
                  <p className="text-accent-600">support@kengile.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-700 mb-1">
                    Phone
                  </h3>
                  <p className="text-accent-600">+1 (555) 123-4567</p>
                  <p className="text-accent-600">+1 (555) 123-4568</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-700 mb-1">
                    Office
                  </h3>
                  <p className="text-accent-600">Global IT Services</p>
                  <p className="text-accent-600">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactUsForm />
        </div>
      </Section>
    </>
  );
}
