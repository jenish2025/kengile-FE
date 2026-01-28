import { ReactNode } from "react";

interface TechnologyCardProps {
  name: string;
  icon: ReactNode;
  tools: string;
}

export default function TechnologyCard({
  name,
  icon,
  tools,
}: TechnologyCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      </div>
      <p className="text-gray-600">{tools}</p>
    </div>
  );
}

