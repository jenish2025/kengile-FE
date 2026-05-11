import { ReactNode } from "react";

interface IndustryCardProps {
  title: string;
  description: ReactNode;
  useCases: string[];
  icon?: ReactNode;
}

export default function IndustryCard({
  title,
  description,
  useCases,
  icon,
}: IndustryCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
      {icon && (
        <div className="mb-4 text-blue-600">{icon}</div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
          Use cases we focus on:
        </h4>
        <ul className="space-y-2">
          {useCases.map((useCase, index) => (
            <li key={index} className="flex items-baseline">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700 text-sm">{useCase}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

