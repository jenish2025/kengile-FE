"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  contrast?: "light" | "dark";
}

const Section = ({
  children,
  className = "",
  id,
  contrast = "light",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-20 ${className}`}
      data-nav-contrast={contrast}
    >
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </section>
  );
};

export default Section;
