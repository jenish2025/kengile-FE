"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedDottedPattern from "./AnimatedDottedPattern";
import { useState } from "react";

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

const AnimatedHero = ({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact-us",
}: AnimatedHeroProps) => {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-accent-50/30 to-primary-50/20"
      data-nav-contrast="light"
    >
      {/* Gradient Orbs Background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-200 to-primary-400 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full blur-3xl opacity-15 animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "1s" }}
      />

      {/* Animated Dotted Grid Pattern - Primary Layer */}
      <AnimatedDottedPattern
        opacity={0.6}
        dotColor="rgba(37, 99, 235, 0.3)"
        dotSize={2}
        spacing={40}
        speed={20}
        direction="forward"
      />

      {/* Secondary Dotted Layer for Depth */}
      <AnimatedDottedPattern
        opacity={0.4}
        dotColor="rgba(37, 99, 235, 0.2)"
        dotSize={1.5}
        spacing={60}
        speed={25}
        direction="backward"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl opacity-10 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-48 right-[15%] w-20 h-20 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-10 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 right-[20%] w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl opacity-10 blur-sm"
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 font-bold rounded-full shadow-lg border border-primary-300/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={18} />
            </motion.div>
            <span className="text-sm uppercase tracking-wider">{subtitle}</span>
          </motion.div>
        </motion.div>

        {/* Main Title with enhanced typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-accent-900 via-primary-700 to-accent-900 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {/* Description with better readability */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-accent-700 mb-10 max-w-4xl mx-auto leading-relaxed font-medium"
        >
          {description}
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href={ctaLink}>
            <motion.button
              onHoverStart={() => setIsHoveredPrimary(true)}
              onHoverEnd={() => setIsHoveredPrimary(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-xl font-bold flex items-center space-x-3 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                animate={isHoveredPrimary ? { x: ["-100%", "100%"] } : {}}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <span className="relative z-10 text-lg">{ctaText}</span>
              <motion.div
                animate={isHoveredPrimary ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={22} />
              </motion.div>
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button
              onHoverStart={() => setIsHoveredSecondary(true)}
              onHoverEnd={() => setIsHoveredSecondary(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white/80 backdrop-blur-sm border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <span className="text-lg">Explore Our Services</span>
              <motion.div
                animate={isHoveredSecondary ? { rotate: [0, 360] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Play size={20} fill="currentColor" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-accent-600"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">500+ Projects Delivered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">98% Client Satisfaction</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-xs text-accent-600 font-medium uppercase tracking-wider">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-primary-400 rounded-full flex justify-center p-2 bg-white/50 backdrop-blur-sm shadow-lg"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-primary-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHero;
