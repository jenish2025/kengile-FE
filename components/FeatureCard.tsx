import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  colorTheme?: "blue" | "green" | "purple" | "orange" | "cyan" | "teal" | "emerald";
  className?: string;
}

const colorThemes = {
  blue: {
    border: "border-blue-100 hover:border-blue-400",
    iconGradient: "from-blue-500 to-indigo-600",
    hoverText: "group-hover:text-blue-600",
    checkColor: "text-blue-600",
  },
  green: {
    border: "border-green-100 hover:border-green-400",
    iconGradient: "from-green-500 to-emerald-600",
    hoverText: "group-hover:text-green-600",
    checkColor: "text-green-600",
  },
  purple: {
    border: "border-purple-100 hover:border-purple-400",
    iconGradient: "from-purple-500 to-purple-600",
    hoverText: "group-hover:text-purple-600",
    checkColor: "text-purple-600",
  },
  orange: {
    border: "border-orange-100 hover:border-orange-400",
    iconGradient: "from-orange-500 to-red-500",
    hoverText: "group-hover:text-orange-600",
    checkColor: "text-orange-600",
  },
  cyan: {
    border: "border-cyan-100 hover:border-cyan-400",
    iconGradient: "from-cyan-500 to-cyan-600",
    hoverText: "group-hover:text-cyan-600",
    checkColor: "text-cyan-600",
  },
  teal: {
    border: "border-teal-100 hover:border-teal-400",
    iconGradient: "from-teal-500 to-teal-600",
    hoverText: "group-hover:text-teal-600",
    checkColor: "text-teal-600",
  },
  emerald: {
    border: "border-emerald-100 hover:border-emerald-400",
    iconGradient: "from-emerald-500 to-emerald-600",
    hoverText: "group-hover:text-emerald-600",
    checkColor: "text-emerald-600",
  },
};

const FeatureCard = ({
  icon,
  title,
  description,
  features,
  colorTheme = "blue",
  className = "",
}: FeatureCardProps) => {
  const theme = colorThemes[colorTheme];

  return (
    <div
      className={`group bg-white/90 backdrop-blur-sm rounded-3xl p-10 border-2 ${theme.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 ${className}`}
    >
      <div className="flex items-start space-x-6">
        <div
          className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${theme.iconGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3
            className={`text-2xl font-bold text-gray-900 mb-4 ${theme.hoverText} transition-colors`}
          >
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {description}
          </p>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-gray-700 group-hover:translate-x-2 transition-transform duration-300"
                style={{
                  transitionDelay: `${index * 75}ms`,
                }}
              >
                <CheckCircle
                  className={`${theme.checkColor} flex-shrink-0`}
                  size={20}
                />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

