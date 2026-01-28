import {
  Calendar,
  Users,
  GitBranch,
  Target,
  Check,
  Award,
  Sparkles,
  FileText,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { ReactNode } from "react";

interface LabCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  established: string;
  team: string;
  projects: string;
  focus: string[];
  achievements: string[];
  publications: string[];
}

export default function LabCard({
  title,
  description,
  icon,
  color,
  established,
  team,
  projects,
  focus,
  achievements,
  publications,
}: LabCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
      <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
        {/* Lab Header */}
        <div className="md:col-span-3">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} text-white flex-shrink-0`}
            >
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-3 text-gray-900">{title}</h3>
              <p className="text-lg text-gray-600 mb-4">{description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Est. {established}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">{team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{projects}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Focus */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            Research Focus
          </h4>
          <ul className="space-y-2">
            {focus.map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Achievements */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center">
            <Award className="w-5 h-5 mr-2 text-purple-600" />
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start bg-purple-50 rounded-lg p-3"
              >
                <Sparkles className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Publications */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-green-600" />
            Recent Publications
          </h4>
          <ul className="space-y-3">
            {publications.map((pub, i) => (
              <li
                key={i}
                className="flex items-start bg-green-50 rounded-lg p-3"
              >
                <BookOpen className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{pub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-6 flex justify-between items-center">
        <span className="text-gray-700 font-medium">
          Interested in this lab's work?
        </span>
        <a
          href="#collaborate"
          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
        >
          Connect Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
}

