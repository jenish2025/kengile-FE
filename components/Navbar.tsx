"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [navTone, setNavTone] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check which section is at the top of the viewport
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-nav-contrast]")
      );

      if (!sections.length) return;

      const scrollTop = window.scrollY;
      const viewportTop = scrollTop;

      // Find the section that is currently at or just above the top of viewport
      let activeSection: HTMLElement | null = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollTop + rect.top;
        const sectionBottom = sectionTop + rect.height;

        // Check if section is at the top of viewport or just passed it
        // We want the section whose top edge is closest to viewport top (0 or negative)
        const distanceFromTop = sectionTop - viewportTop;

        // If section top is at or above viewport top, and section bottom is below viewport top
        if (sectionTop <= viewportTop && sectionBottom > viewportTop) {
          const distance = Math.abs(distanceFromTop);
          if (distance < minDistance) {
            minDistance = distance;
            activeSection = section;
          }
        }
      });

      // If no section is currently at top, find the closest one above viewport
      if (!activeSection) {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = scrollTop + rect.top;
          const distanceFromTop = viewportTop - sectionTop;

          // Section is above viewport
          if (distanceFromTop > 0 && distanceFromTop < minDistance) {
            minDistance = distanceFromTop;
            activeSection = section;
          }
        });
      }

      // If still no section found, use the first section
      if (!activeSection && sections.length > 0) {
        activeSection = sections[0];
      }

      if (activeSection) {
        const tone =
          activeSection.dataset.navContrast === "light" ? "light" : "dark";
        setNavTone(tone);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextClass =
    navTone === "dark"
      ? "text-white/90 hover:text-white"
      : "text-accent-700 hover:text-primary-600";
  const navSubTextClass =
    navTone === "dark" ? "text-white/70" : "text-accent-600";
  const mobileIconClass =
    navTone === "dark"
      ? "text-white/90 hover:text-white"
      : "text-accent-700 hover:text-primary-600";

  const navLinks = [
    { name: "Home", href: "/" },

    { name: "About", href: "/about-us" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        {
          name: "AI Infrastructure",
          href: "/services/ai-infrastructure-services",
          icon: "🤖",
        },
        {
          name: "Data Center Modernization",
          href: "/services/data-center-modernization",
          icon: "🏢",
        },
        {
          name: "Cloud & HPC Engineering",
          href: "/services/cloud-hpc-engineering",
          icon: "☁️",
        },
        {
          name: "DevOps & SRE",
          href: "/services/devops-sre-automation",
          icon: "⚙️",
        },
        {
          name: "Data Engineering",
          href: "/services/data-engineering-analytics",
          icon: "📊",
        },
        {
          name: "AI Application Development",
          href: "/services/ai-application-development",
          icon: "🧠",
        },
        {
          name: "Smart Energy Solutions",
          href: "/services/smart-energy-it-solutions",
          icon: "⚡",
        },
        {
          name: "Green Cloud",
          href: "/services/green-cloud-sustainable-it",
          icon: "🌱",
        },
        {
          name: "Blockchain Infrastructure",
          href: "/services/blockchain-infrastructure-services",
          icon: "🔗",
        },
        {
          name: "Space Connectivity",
          href: "/services/satellite-space-internet-solutions",
          icon: "🛰️",
        },
      ],
    },
    { name: "Industries", href: "/industries-we-serve" },
    { name: "Innovation", href: "/innovation-labs" },
    { name: "Insights", href: "/insights-case-studies" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? " backdrop-blur-2xl shadow-xl border-b border-primary-100/50"
          : "backdrop-blur-md border-b border-white/20"
      }`}
      style={{
        backdropFilter: scrolled
          ? "blur(24px) saturate(180%)"
          : "blur(12px) saturate(140%)",
        WebkitBackdropFilter: scrolled
          ? "blur(24px) saturate(180%)"
          : "blur(12px) saturate(140%)",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"
        animate={{
          opacity: scrolled ? [0.5, 1, 0.5] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-50"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
              <div
                className={`relative text-2xl md:text-3xl font-black transition-all duration-300 text-gradient`}
              >
                Kengile
              </div>
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Sparkles size={16} />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer px-4 py-2 rounded-lg hover:bg-primary-50/50 transition-all"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`${navTextClass} font-semibold transition-colors`}
                    >
                      {link.name}
                    </Link>
                    <ChevronDown
                      className={`w-4 h-4 ${navSubTextClass} transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-primary-100/50 p-3 overflow-hidden"
                          style={{
                            backdropFilter: "blur(24px) saturate(180%)",
                            WebkitBackdropFilter: "blur(24px) saturate(180%)",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent pointer-events-none" />

                          <div className="relative grid grid-cols-1 gap-1">
                            {link.submenu.map((sub, index) => (
                              <motion.div
                                key={sub.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                              >
                                <Link
                                  href={sub.href}
                                  className="group/item flex items-center space-x-3 text-accent-700 hover:text-primary-600 hover:bg-primary-50 transition-all py-2.5 px-4 rounded-xl font-medium"
                                >
                                  {/* <span className="text-xl">{sub.icon}</span> */}
                                  <span className="flex-1">{sub.name}</span>
                                  <ArrowRight
                                    size={16}
                                    className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                                  />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 ${navTextClass} font-semibold transition-colors rounded-lg hover:bg-primary-50/50 block`}
                  >
                    {link.name}
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="activeLink"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}

            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${mobileIconClass} hover:bg-primary-50 rounded-lg transition-all`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-primary-100/50 shadow-xl"
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            <div className="max-h-[70vh] overflow-y-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-accent-700 hover:text-primary-600 hover:bg-primary-50 transition-all py-3 px-4 rounded-xl font-semibold"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-2 text-accent-600 hover:text-primary-600 hover:bg-primary-50/50 transition-all text-sm py-2 px-3 rounded-lg"
                        >
                          <span>{sub.icon}</span>
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
