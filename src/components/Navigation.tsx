'use client';

import { useState, useEffect } from 'react';
import { 
  Home, BookOpen, FileText, Calendar, 
  MessageSquare, User, Bell, Search,
  Menu, X, ChevronDown, LogIn,
  HelpCircle, Settings, Download, Star
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Notes', icon: BookOpen, href: '/notes' },
    { name: 'Papers', icon: FileText, href: '/papers' },
    { name: 'Timetable', icon: Calendar, href: '/timetable' },
    { name: 'Discuss', icon: MessageSquare, href: '/discuss' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg backdrop-blur-lg' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenu(false)}>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    SchoolYarri
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">One Stop Solution</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Mobile Search Button */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setShowSearchBar(true)}
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Desktop Search */}
              <div className="hidden md:block relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search notes, papers..."
                    className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm w-56 transition-all duration-300 focus:w-64"
                  />
                </div>
              </div>

              {/* Notification Bell */}
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors group">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              {/* Profile/Login Button */}
              <div className="hidden md:flex items-center">
                <button className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <User className="h-4 w-4" />
                  <span className="font-medium">Login</span>
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className={`p-2 rounded-lg transition-all duration-300 ${
                  mobileMenu 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearchBar && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 px-4 py-3 shadow-lg animate-slideDown">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search notes, papers, discussions..."
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm"
                autoFocus
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowSearchBar(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              {['Notes', 'Papers', 'Discuss', 'Timetable'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setShowSearchBar(false)}
                  className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs rounded-lg hover:bg-blue-100 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Mobile Menu - Now from bottom */}
      {mobileMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn md:hidden"
            onClick={() => setMobileMenu(false)}
          />
          
          {/* Mobile Menu Panel - Bottom Sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white rounded-t-3xl shadow-2xl animate-slideUp">
            
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
            </div>

            {/* User Profile Section */}
            <div className="px-6 pt-4 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Welcome Student!</h3>
                    <p className="text-sm text-gray-600">Sign in to unlock features</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-shadow">
                  Login
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="px-4 py-3">
              <div className="grid grid-cols-4 gap-2 mb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenu(false)}
                  >
                    <div className={`p-2.5 rounded-lg mb-1 ${
                      pathname === item.href 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                        : 'bg-gray-100'
                    }`}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 rounded-xl p-4 mb-3">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: <Download className="h-4 w-4" />, label: 'Downloads', color: 'bg-blue-100 text-blue-600' },
                    { icon: <Star className="h-4 w-4" />, label: 'Favorites', color: 'bg-amber-100 text-amber-600' },
                    { icon: <HelpCircle className="h-4 w-4" />, label: 'Help', color: 'bg-green-100 text-green-600' },
                    { icon: <Settings className="h-4 w-4" />, label: 'Settings', color: 'bg-gray-100 text-gray-600' },
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:shadow-sm transition-all"
                    >
                      <div className={`p-2 rounded-lg ${action.color}`}>
                        {action.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* App Info */}
              <div className="flex items-center justify-center space-x-2 pt-3 border-t border-gray-100">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-gray-900">SchoolYarri</span>
                  <p className="text-[10px] text-gray-500">
                    © 2024 • Version 1.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navigation;