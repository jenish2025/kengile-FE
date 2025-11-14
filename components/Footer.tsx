import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'AI Infrastructure Services', href: '/services/ai-infrastructure-services' },
    { name: 'Data Center Modernization', href: '/services/data-center-modernization' },
    { name: 'Cloud & HPC Engineering', href: '/services/cloud-hpc-engineering' },
    { name: 'Smart Energy Solutions', href: '/services/smart-energy-it-solutions' },
    { name: 'Blockchain Infrastructure', href: '/services/blockchain-infrastructure-services' },
    { name: 'Space Connectivity', href: '/services/satellite-space-internet-solutions' },
  ]

  const company = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Industries We Serve', href: '/industries-we-serve' },
    { name: 'Innovation Labs', href: '/innovation-labs' },
    { name: 'Insights & Case Studies', href: '/insights-case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact-us' },
  ]

  return (
    <footer className="bg-accent-900 border-t border-accent-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Bacancy</h3>
            <p className="text-accent-300 mb-4">
              Building future-ready IT infrastructure for the next digital decade and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-accent-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accent-300 hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-accent-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-accent-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-accent-300 text-sm">info@bacancy.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-accent-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-accent-300 text-sm">Global IT Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-800 mt-8 pt-8 text-center text-accent-300 text-sm">
          <p>&copy; {currentYear} Bacancy. All rights reserved. | Future-Ready IT Services</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

