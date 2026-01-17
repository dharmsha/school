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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-3 pt-2">
      {/* Main navigation container with subtle shadow and border */}
      <div className="mx-4 rounded-2xl bg-white border border-gray-100 shadow-lg">
        <div className="flex items-center justify-between px-4 h-16">
          {navItems.map((item) => {
            const isActive = activeTab === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex flex-col items-center justify-center transition-all duration-200 ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {/* Main icon container */}
                <div className="relative flex flex-col items-center">
                  {/* Active background indicator */}
                  {isActive && (
                    <div className="absolute -inset-2 bg-blue-50 rounded-xl"></div>
                  )}
                  
                  {/* Icon with active state styling */}
                  <div className={`relative z-10 p-2.5 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-white shadow-sm' 
                      : ''
                  }`}>
                    <item.icon 
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isActive ? 'scale-105' : ''
                      }`} 
                      strokeWidth={isActive ? 2.3 : 1.8}
                    />
                    
                    {/* Active dot indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Label text */}
                  <span className={`text-[10px] font-medium mt-1.5 transition-all duration-200 ${
                    isActive 
                      ? 'text-blue-600 font-semibold scale-105' 
                      : 'text-gray-600'
                  }`}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;