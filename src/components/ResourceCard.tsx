'use client';

import { Download, Star, Eye, Share2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface ResourceCardProps {
  title: string;
  subject: string;
  type: string;
  downloads: number;
  rating: number;
}

const ResourceCard = ({ title, subject, type, downloads, rating }: ResourceCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleDownload = () => {
    toast.success('Starting download...');
    // Add actual download logic
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-2">
              {subject}
            </span>
            <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
              {title}
            </h3>
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 hover:bg-red-50 rounded-full transition-colors"
          >
            <svg
              className={`h-5 w-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <FileIcon type={type} />
            <span className="ml-2">{type}</span>
          </span>
          <span className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {downloads.toLocaleString()}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 font-medium">{rating}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleDownload}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center font-medium"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </button>
          <button
            onClick={handleShare}
            className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const FileIcon = ({ type }: { type: string }) => {
  switch (type.toLowerCase()) {
    case 'pdf':
      return <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
        <span className="text-red-600 font-bold text-xs">PDF</span>
      </div>;
    case 'image':
      return <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
        <span className="text-green-600 font-bold text-xs">IMG</span>
      </div>;
    default:
      return <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
        <span className="text-blue-600 font-bold text-xs">DOC</span>
      </div>;
  }
};

export default ResourceCard;