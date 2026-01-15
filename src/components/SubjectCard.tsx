'use client';

import { useState, useMemo } from 'react';

interface SubjectCardProps {
  subject: string;
  resourceCount?: number; // Optional prop for deterministic data
}

const SubjectCard = ({ subject, resourceCount }: SubjectCardProps) => {
  const [hover, setHover] = useState(false);
  
  // ✅ Solution 1: Use useMemo for deterministic random-like values
  const randomResourceCount = useMemo(() => {
    // Create deterministic hash from subject string
    let hash = 0;
    for (let i = 0; i < subject.length; i++) {
      hash = subject.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Convert to positive number and bound between 50-150
    return Math.abs(hash % 100) + 50;
  }, [subject]);

  // ✅ Solution 2: Predefined resource counts (Better approach)
  const getResourceCount = () => {
    const predefinedCounts: Record<string, number> = {
      'Mathematics': 245,
      'Physics': 189,
      'Chemistry': 167,
      'Biology': 156,
      'English': 278,
      'History': 134,
      'Geography': 98,
      'Computer': 210,
    };
    return predefinedCounts[subject] || resourceCount || randomResourceCount;
  };

  const getSubjectColor = (subj: string) => {
    const colors: Record<string, string> = {
      'Mathematics': 'from-blue-500 to-blue-600',
      'Physics': 'from-purple-500 to-purple-600',
      'Chemistry': 'from-green-500 to-green-600',
      'Biology': 'from-emerald-500 to-emerald-600',
      'English': 'from-red-500 to-red-600',
      'History': 'from-amber-500 to-amber-600',
      'Geography': 'from-indigo-500 to-indigo-600',
      'Computer': 'from-pink-500 to-pink-600',
    };
    return colors[subj] || 'from-gray-500 to-gray-600';
  };

  return (
    <button
      className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getSubjectColor(subject)} flex items-center justify-center mb-3 transition-transform ${hover ? 'scale-110' : ''}`}>
        <span className="text-white font-bold text-lg">
          {subject.charAt(0)}
        </span>
      </div>
      <span className="font-medium text-sm text-center">{subject}</span>
      <span className="text-xs text-gray-500 mt-1">
        {getResourceCount().toLocaleString()} resources
      </span>
    </button>
  );
};

export default SubjectCard;