"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useRef } from "react";
import axios from "axios";
import { getInquiriesUrl } from "@/config/api";

interface ContactUsFormProps {
  title?: string;
  className?: string;
}

const ContactUsForm = ({
  title = "Send us a Message",
  className = "",
}: ContactUsFormProps) => {
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
      company: formData.get("company") as string,
      service: formData.get("service") as string,
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-subtle backdrop-blur-sm border border-accent-200 rounded-xl p-8 ${className}`}
    >
      <h2 className="text-2xl font-bold text-accent-700 mb-6">{title}</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-accent-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-white border border-accent-200 rounded-lg placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-accent-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@company.com"
            className="w-full px-4 py-3 bg-white border border-accent-200 rounded-lg text-accent-700 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-accent-700 mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              className="w-full px-4 py-3 bg-white border border-accent-200 rounded-lg text-accent-700 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-accent-700 mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 bg-white border border-accent-200 rounded-lg text-accent-700 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-accent-700 mb-2"
          >
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-white border border-accent-200 rounded-lg text-accent-700 focus:outline-none focus:border-primary-500 transition-colors"
          >
            <option value="">Select a service</option>
            <option value="ai-infrastructure">
              AI Infrastructure Services
            </option>
            <option value="data-center">Data Center Modernization</option>
            <option value="cloud-hpc">Cloud & HPC Engineering</option>
            <option value="energy">Smart Energy Solutions</option>
            <option value="blockchain">Blockchain Infrastructure</option>
            <option value="space">Space Connectivity</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-accent-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-white border border-accent-200 rounded-lg text-accent-700 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
          />
        </div>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-xl text-sm font-medium ${
              submitStatus.type === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-500"
                : "bg-red-500/20 border border-red-500/50 text-red-500"
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
          className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          {!isSubmitting && <Send size={20} />}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactUsForm;
