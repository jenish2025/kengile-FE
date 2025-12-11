"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import React from "react";
import { usePathname } from "next/navigation";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const [showContactForm, setShowContactForm] = React.useState(false);

  React.useEffect(() => {
    setShowContactForm(!pathname.startsWith("/contact-us"));
  }, [pathname]);

  const services = [
    {
      name: "AI Infrastructure Services",
      href: "/services/ai-infrastructure-services",
    },
    {
      name: "Data Center Modernization",
      href: "/services/data-center-modernization",
    },
    {
      name: "Cloud & HPC Engineering",
      href: "/services/cloud-hpc-engineering",
    },
    {
      name: "Smart Energy Solutions",
      href: "/services/smart-energy-it-solutions",
    },
    {
      name: "Blockchain Infrastructure",
      href: "/services/blockchain-infrastructure-services",
    },
    {
      name: "Space Connectivity",
      href: "/services/satellite-space-internet-solutions",
    },
  ];

  const company = [
    { name: "About Us", href: "/about-us" },
    { name: "Industries We Serve", href: "/industries-we-serve" },
    { name: "Innovation Labs", href: "/innovation-labs" },
    { name: "Insights & Case Studies", href: "/insights-case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer
      className="relative bg-gradient-to-b from-accent-900 via-accent-950 to-black border-t border-accent-800/50 text-white overflow-hidden"
      data-nav-contrast="dark"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      {showContactForm && (
        <div className="m-auto max-w-7xl px-4 pb-12 border-b py-16 lg:py-20 border-accent-800/50">
          <ContactForm className="max-w-5xl m-auto" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 pb-12 border-b border-accent-800/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <h3 className="text-4xl font-black text-gradient">Kengile</h3>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="text-primary-400" size={24} />
                  </motion.div>
                </div>
                <p className="text-lg text-accent-300 leading-relaxed font-normal mb-6 max-w-md">
                  Building future-ready IT infrastructure for the next digital
                  decade. Empowering enterprises with AI, cloud, and intelligent
                  systems.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 bg-accent-800/50 hover:bg-primary-500/20 border border-accent-700 hover:border-primary-500/50 rounded-xl flex items-center justify-center text-accent-300 hover:text-primary-400 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 bg-accent-800/50 hover:bg-primary-500/20 border border-accent-700 hover:border-primary-500/50 rounded-xl flex items-center justify-center text-accent-300 hover:text-primary-400 transition-all duration-300"
                  >
                    <Twitter size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 bg-accent-800/50 hover:bg-primary-500/20 border border-accent-700 hover:border-primary-500/50 rounded-xl flex items-center justify-center text-accent-300 hover:text-primary-400 transition-all duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-start text-accent-300 hover:text-primary-400 transition-colors text-sm font-normal leading-relaxed"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 mt-0.5 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-start text-accent-300 hover:text-primary-400 transition-colors text-sm font-normal leading-relaxed"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 mt-0.5 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            // className="col-span-2"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-accent-400 font-medium uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@kengile.com"
                    className="text-sm text-accent-200 hover:text-primary-400 transition-colors font-normal"
                  >
                    info@kengile.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-accent-400 font-medium uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-accent-200 hover:text-primary-400 transition-colors font-normal"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-accent-400 font-medium uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-sm text-accent-200 font-normal">
                    Global IT Services
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-accent-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-400 font-normal">
              &copy; {currentYear} Kengile. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-accent-400 hover:text-primary-400 transition-colors font-normal"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-accent-400 hover:text-primary-400 transition-colors font-normal"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-accent-400 hover:text-primary-400 transition-colors font-normal"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
