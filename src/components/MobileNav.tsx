'use client';

import { Home, BookOpen, FileText, Calendar, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MobileNav = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('/');

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Notes', icon: BookOpen, href: '/notes' },
    { name: 'Papers', icon: FileText, href: '/papers' },
    { name: 'Schedule', icon: Calendar, href: '/timetable' },
    { name: 'Discuss', icon: MessageSquare, href: '/discuss' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Background blur effect */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/90 border-t border-gray-200/80 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.1)]"></div>
      
      {/* Floating effect container */}
      <div className="relative px-4">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex flex-col items-center justify-center flex-1 transition-all duration-300 ${
                  isActive ? 'text-blue-600 -translate-y-1' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-b-full"></div>
                )}
                
                {/* Icon container with gradient effect */}
                <div className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100/80 shadow-[0_4px_12px_-2px_rgba(59,130,246,0.3)]' 
                    : 'bg-transparent hover:bg-gray-100/50'
                }`}>
                  <item.icon 
                    className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} 
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                  
                  {/* Pulsing dot for active state */}
                  {isActive && (
                    <div className="absolute -top-0.5 -right-0.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                {/* Label with better typography */}
                <span className={`text-xs font-medium mt-1 transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-80'
                }`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;