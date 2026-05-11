import { ReactNode } from "react";

interface ServiceFeatureCardProps {
  title: string;
  description: ReactNode;
  icon: ReactNode;
}

export default function ServiceFeatureCard({
  title,
  description,
  icon,
}: ServiceFeatureCardProps) {
  return (
    <div className="bg-white border border-accent-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-accent-900 mb-3">{title}</h3>
      <p className="text-accent-600">{description}</p>
    </div>
  );
}

