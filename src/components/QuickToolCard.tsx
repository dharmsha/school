'use client';

import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface QuickToolCardProps {
  icon: LucideIcon;
  title: string;
  color: string;
  desc: string;
}

const QuickToolCard = ({ icon: Icon, title, color, desc }: QuickToolCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-gray-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${color} transition-transform ${hover ? 'scale-110' : ''}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
          Free
        </span>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
        Try now
        <svg 
          className={`ml-2 h-4 w-4 transition-transform ${hover ? 'translate-x-1' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default QuickToolCard;