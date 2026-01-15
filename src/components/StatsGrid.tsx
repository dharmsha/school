'use client';

import { FileText, Users, Download, Star, TrendingUp, Clock, Award, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

const StatsGrid = () => {
  const [mounted, setMounted] = useState(false);
  const [randomChanges, setRandomChanges] = useState<number[]>([]);
  const [counts, setCounts] = useState({
    resources: 0,
    students: 0,
    downloads: 0,
    rating: 0,
  });

  useEffect(() => {
    setMounted(true);
    
    // Fix Hydration: Generate random numbers only on client
    const changes = Array.from({ length: 4 }, () => Math.floor(Math.random() * 15) + 10);
    setRandomChanges(changes);

    const targets = {
      resources: 1245,
      students: 5678,
      downloads: 12400,
      rating: 4.8,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        resources: Math.floor(targets.resources * progress),
        students: Math.floor(targets.students * progress),
        downloads: Math.floor(targets.downloads * progress),
        rating: Number((targets.rating * progress).toFixed(1)),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: FileText,
      value: counts.resources.toLocaleString(),
      label: 'Study Resources',
      change: '+12%',
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10',
    },
    {
      icon: Users,
      value: counts.students.toLocaleString(),
      label: 'Active Students',
      change: '+24%',
      color: 'from-emerald-500 to-green-500',
      bg: 'bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-900/10 dark:to-green-900/10',
    },
    {
      icon: Download,
      value: `${(counts.downloads / 1000).toFixed(1)}K+`,
      label: 'Total Downloads',
      change: '+18%',
      color: 'from-purple-500 to-pink-500',
      bg: 'bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10',
    },
    {
      icon: Star,
      value: counts.rating,
      label: 'Average Rating',
      change: '4.9 target',
      color: 'from-amber-500 to-orange-500',
      bg: 'bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10',
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Platform Overview</h2>
          <p className="text-gray-600 dark:text-gray-400">Real-time stats of our growing community</p>
        </div>
        <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full w-fit">
          <Clock className="h-4 w-4 mr-2" />
          Updated just now
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800/50 hover:shadow-xl transition-all duration-300 group`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg shadow-blue-500/20`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 shadow-sm">
                {stat.change}
              </span>
            </div>
            
            <div className="space-y-1">
              <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{stat.value}</p>
              <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
            </div>

            <div className="mt-6">
              <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                  style={{ width: mounted ? `${(index + 1) * 23}%` : '0%' }}
                />
              </div>
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter text-gray-400 mt-2">
                <span>Performance</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {mounted ? `+${randomChanges[index]}%` : '--'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { icon: TrendingUp, label: 'Growth', value: '32%', color: 'text-green-600', bg: 'bg-green-500/10' },
          { icon: Award, label: 'Quality Score', value: '9.8/10', color: 'text-blue-600', bg: 'bg-blue-500/10' },
          { icon: BookOpen, label: 'Subjects', value: '12+', color: 'text-purple-600', bg: 'bg-purple-500/10' },
          { icon: Clock, label: 'Avg. Study', value: '2.4h', color: 'text-amber-600', bg: 'bg-amber-500/10' },
        ].map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center shadow-sm">
            <div className={`p-2.5 rounded-xl ${stat.bg} mr-4 transition-transform group-hover:scale-110`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;