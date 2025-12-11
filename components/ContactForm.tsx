"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import axios from "axios";
import { getInquiriesUrl } from "@/config/api";

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
}

const ContactForm = ({
  title = "Get in Touch",
  description = "Have a question or want to work together? We'd love to hear from you.",
  className = "",
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      mobile: formData.get("phone") as string,
      description: formData.get("message") as string,
    };

    try {
      await axios.post(getInquiriesUrl(), data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`bg-[rgba(71,96,136,0.3)] backdrop-blur-sm border border-accent-700 rounded-2xl p-8 md:p-10 ${className}`}
    >
      <div className="text-center mb-8">
        <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {title}
        </h4>
        <p className="text-sm text-accent-300 font-normal">{description}</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-accent-300 mb-2"
            >
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-accent-300 mb-2"
            >
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
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-accent-300 mb-2"
          >
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
          <label
            htmlFor="message"
            className="block text-sm font-medium text-accent-300 mb-2"
          >
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

        {submitStatus.type && (
          <div
            className={`p-4 rounded-xl text-sm font-medium ${
              submitStatus.type === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-300"
                : "bg-red-500/20 border border-red-500/50 text-red-300"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          {!isSubmitting && <ArrowRight size={18} />}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
