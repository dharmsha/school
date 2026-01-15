'use client';

import { Home, BookOpen, FileText, Calendar, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Notes', icon: BookOpen, href: '/notes' },
    { name: 'Papers', icon: FileText, href: '/papers' },
    { name: 'Schedule', icon: Calendar, href: '/timetable' },
    { name: 'Discuss', icon: MessageSquare, href: '/discuss' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              <div className={`p-2 rounded-full ${isActive ? 'bg-blue-50' : ''}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;