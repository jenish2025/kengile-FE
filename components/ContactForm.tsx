'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ContactFormProps {
  title?: string
  description?: string
  className?: string
}

const ContactForm = ({ 
  title = "Get in Touch", 
  description = "Have a question or want to work together? We'd love to hear from you.",
  className = ""
}: ContactFormProps) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your form submission logic here
    const formData = new FormData(e.currentTarget)
    console.log('Form submitted:', Object.fromEntries(formData))
    // Reset form after submission
    e.currentTarget.reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`bg-[rgba(71,96,136,0.3)] backdrop-blur-sm border border-accent-700 rounded-2xl p-8 md:p-10 ${className}`}
    >
      <div className="text-center mb-8">
        <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h4>
        <p className="text-sm text-accent-300 font-normal">
          {description}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-accent-300 mb-2">
              Name *
            </label>
            <input 
              type="text" 
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-accent-900/50 border border-accent-700 rounded-xl text-white placeholder-accent-500 focus:outline-none focus:border-primary-500 transition-colors text-sm font-normal"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-accent-300 mb-2">
              Email *
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-accent-900/50 border border-accent-700 rounded-xl text-white placeholder-accent-500 focus:outline-none focus:border-primary-500 transition-colors text-sm font-normal"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-accent-300 mb-2">
            Mobile Number *
          </label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            required
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 bg-accent-900/50 border border-accent-700 rounded-xl text-white placeholder-accent-500 focus:outline-none focus:border-primary-500 transition-colors text-sm font-normal"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-accent-300 mb-2">
            Message *
          </label>
          <textarea 
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project or inquiry..."
            className="w-full px-4 py-3 bg-accent-900/50 border border-accent-700 rounded-xl text-white placeholder-accent-500 focus:outline-none focus:border-primary-500 transition-colors text-sm font-normal resize-none"
          />
        </div>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
        >
          <span>Send Message</span>
          <ArrowRight size={18} />
        </motion.button>
      </form>
    </motion.div>
  )
}

export default ContactForm
