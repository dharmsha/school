'use client';

import { Filter, TrendingUp, Flame, Clock, Download, Star, Eye, Share2 } from 'lucide-react';
import { useState } from 'react';

interface TrendingResourcesProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TrendingResources = ({ activeTab, onTabChange }: TrendingResourcesProps) => {
  const [sortBy, setSortBy] = useState('popular');

  const resources = [
    {
      id: 1,
      title: 'Complete Mathematics Notes - Class 10 CBSE',
      subject: 'Mathematics',
      type: 'PDF',
      downloads: 1245,
      rating: 4.8,
      views: '2.4K',
      size: '12.4 MB',
      uploaded: '2 days ago',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Physics Formulas & Derivations Handbook',
      subject: 'Physics',
      type: 'PDF',
      downloads: 892,
      rating: 4.5,
      views: '1.8K',
      size: '8.7 MB',
      uploaded: '1 week ago',
      featured: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'English Literature Analysis Guide',
      subject: 'English',
      type: 'Document',
      downloads: 1567,
      rating: 4.9,
      views: '3.2K',
      size: '5.2 MB',
      uploaded: '3 days ago',
      featured: false,
      color: 'from-red-500 to-rose-500',
    },
    {
      id: 4,
      title: '2023 CBSE Physics Paper with Solutions',
      subject: 'Physics',
      type: 'PDF',
      downloads: 2103,
      rating: 4.7,
      views: '4.1K',
      size: '15.3 MB',
      uploaded: '1 day ago',
      featured: true,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 5,
      title: 'Chemistry Organic Compounds Complete Guide',
      subject: 'Chemistry',
      type: 'PDF',
      downloads: 1789,
      rating: 4.6,
      views: '2.9K',
      size: '11.8 MB',
      uploaded: '5 days ago',
      featured: false,
      color: 'from-emerald-500 to-green-500',
    },
    {
      id: 6,
      title: 'History Timeline & Important Events',
      subject: 'History',
      type: 'Image',
      downloads: 567,
      rating: 4.3,
      views: '1.2K',
      size: '4.5 MB',
      uploaded: '2 weeks ago',
      featured: false,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Resources', icon: TrendingUp },
    { id: 'notes', label: 'Study Notes', icon: Flame },
    { id: 'papers', label: 'Past Papers', icon: Clock },
    { id: 'videos', label: 'Video Lectures', icon: Eye },
  ];

  const sortOptions = [
    { id: 'popular', label: 'Most Popular' },
    { id: 'recent', label: 'Recently Added' },
    { id: 'downloads', label: 'Most Downloaded' },
    { id: 'rating', label: 'Highest Rated' },
  ];

  const filteredResources = resources.filter(resource => {
    if (activeTab === 'all') return true;
    if (activeTab === 'notes') return resource.type === 'PDF' || resource.type === 'Document';
    if (activeTab === 'papers') return resource.title.toLowerCase().includes('paper');
    return true;
  });

  return (
    <section className="w-full max-w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8">
        <div className="mb-4 lg:mb-0">
          <div className="flex items-center mb-2">
            <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
            <span className="text-xs sm:text-sm font-medium text-orange-600">TRENDING THIS WEEK</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Featured Resources</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Top-rated study materials from our community</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Tabs */}
          <div className="flex bg-gray-100 p-0.5 sm:p-1 rounded-lg sm:rounded-xl overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center px-2 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="relative self-start">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm font-medium w-full"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <Filter className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className={`bg-white rounded-xl sm:rounded-2xl border ${
              resource.featured ? 'border-blue-300' : 'border-gray-200'
            } overflow-hidden hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1 group w-full max-w-full`}
          >
            {/* Resource Header */}
            <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${resource.color}`} />
            
            <div className="p-3 sm:p-4 lg:p-6">
              {/* Badges */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium whitespace-nowrap">
                    {resource.subject}
                  </span>
                  {resource.featured && (
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium whitespace-nowrap">
                      Featured
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{resource.uploaded}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                <div className="flex items-center justify-between sm:justify-start sm:space-x-4 lg:space-x-6">
                  <div className="flex items-center">
                    <Download className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm text-gray-600">{resource.downloads}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm text-gray-600">{resource.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-amber-400 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm text-gray-600">{resource.rating}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500 text-right sm:text-left">{resource.size}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 sm:space-x-3">
                <button className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-medium flex items-center justify-center group/btn">
                  <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover/btn:animate-bounce" />
                  Download
                </button>
                <button className="px-2 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors group/share flex-shrink-0">
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 group-hover/share:text-blue-600" />
                </button>
                <button className="px-2 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl hover:bg-red-50 transition-colors group/like flex-shrink-0">
                  <svg
                    className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover/like:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More & Stats */}
      <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex-1">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-3 sm:gap-0">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Total Resources Viewed</p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">12,458</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm text-gray-600">This Month</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">+24%</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <button className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-700 rounded-lg sm:rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-sm sm:text-base font-medium text-center">
            View All Resources
          </button>
          <button className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base font-medium text-center">
            Upload Resource
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingResources;