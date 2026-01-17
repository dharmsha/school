'use client';

import { Search, Sparkles, BookOpen, Users, CheckCircle, Zap, Globe, Smartphone, Monitor, PenTool, Target, Award, Clock, Shield, Headphones, Cpu, FileText, Calendar, Video, Mail, Cloud, Database, Wifi, Printer, Speaker, Camera, Server, Box, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add search logic here
    }
  };

  // All Services Categories with Icons - Optimized for mobile
  const serviceCategories = [
    {
      title: "Software",
      services: [
        { name: "School Management", icon: <Server className="h-4 w-4" />, color: "from-blue-500 to-cyan-500" },
        { name: "Mobile Apps", icon: <Smartphone className="h-4 w-4" />, color: "from-purple-500 to-pink-500" },
        { name: "Web Portals", icon: <Globe className="h-4 w-4" />, color: "from-indigo-500 to-blue-500" },
        { name: "LMS", icon: <Monitor className="h-4 w-4" />, color: "from-green-500 to-teal-500" },
      ]
    },
    {
      title: "Hardware",
      services: [
        { name: "Smart Boards", icon: <Monitor className="h-4 w-4" />, color: "from-orange-500 to-red-500" },
        { name: "CCTV Cameras", icon: <Camera className="h-4 w-4" />, color: "from-gray-700 to-gray-900" },
        { name: "Computer Labs", icon: <Cpu className="h-4 w-4" />, color: "from-blue-600 to-indigo-600" },
        { name: "Networking", icon: <Wifi className="h-4 w-4" />, color: "from-green-600 to-emerald-600" },
      ]
    },
    {
      title: "Marketing",
      services: [
        { name: "SEO Services", icon: <Target className="h-4 w-4" />, color: "from-yellow-500 to-orange-500" },
        { name: "Social Media", icon: <Users className="h-4 w-4" />, color: "from-pink-500 to-rose-500" },
        { name: "Email Marketing", icon: <Mail className="h-4 w-4" />, color: "from-blue-400 to-cyan-400" },
        { name: "Content Marketing", icon: <FileText className="h-4 w-4" />, color: "from-purple-400 to-pink-400" },
      ]
    },
    {
      title: "Supplies",
      services: [
        { name: "Stationery", icon: <PenTool className="h-4 w-4" />, color: "from-red-500 to-pink-500" },
        { name: "Office Supplies", icon: <Box className="h-4 w-4" />, color: "from-amber-500 to-yellow-500" },
        { name: "Lab Equipment", icon: <Database className="h-4 w-4" />, color: "from-green-500 to-emerald-500" },
        { name: "Printers", icon: <Printer className="h-4 w-4" />, color: "from-gray-600 to-gray-800" },
      ]
    }
  ];

  // Quick Access Cards - Optimized for mobile
  const quickAccessCards = [
    { 
      title: "Shop Now", 
      subtitle: "Order Supplies", 
      icon: <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />, 
      bg: "bg-gradient-to-br from-orange-500 to-red-500", 
      action: "Browse" 
    },
    { 
      title: "Book Demo", 
      subtitle: "Software Demo", 
      icon: <Video className="h-5 w-5 sm:h-6 sm:w-6" />, 
      bg: "bg-gradient-to-br from-purple-500 to-pink-500", 
      action: "Schedule" 
    },
    { 
      title: "Get Quote", 
      subtitle: "Custom Solution", 
      icon: <PenTool className="h-5 w-5 sm:h-6 sm:w-6" />, 
      bg: "bg-gradient-to-br from-blue-500 to-cyan-500", 
      action: "Request" 
    },
    { 
      title: "Support", 
      subtitle: "24/7 Help", 
      icon: <Headphones className="h-5 w-5 sm:h-6 sm:w-6" />, 
      bg: "bg-gradient-to-br from-green-500 to-emerald-500", 
      action: "Contact" 
    },
  ];

  // Stats - Optimized for mobile
  const stats = [
    { value: "500+", label: "Schools", icon: "🏫" },
    { value: "50K+", label: "Products", icon: "📦" },
    { value: "99%", label: "Satisfied", icon: "⭐" },
    { value: "24/7", label: "Support", icon: "🛡️" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
      
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />
      
      {/* Floating Tech Elements - Reduced on mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Mobile: Simpler floating elements */}
      <div className="absolute top-1/4 right-4 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl animate-pulse sm:hidden" />
      <div className="absolute bottom-1/4 left-4 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-1000 sm:hidden" />

      {/* Animated Icons Floating - Hidden on mobile for performance */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="hidden sm:block absolute top-32 right-32 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl"
      >
        <Cpu className="h-8 w-8 text-blue-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -360] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="hidden sm:block absolute bottom-32 left-32 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl"
      >
        <Globe className="h-8 w-8 text-green-500" />
      </motion.div>

      <div className="container mx-auto px-4 py-8 sm:py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Badge - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping absolute" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full relative" />
              </div>
              <span className="font-bold text-gray-800 text-sm sm:text-base">One Stop School Solution For All School And </span>
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
            </div>
          </motion.div>

          {/* Main Hero Section - Mobile Stack */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 mb-12 sm:mb-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2 w-full">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight text-center lg:text-left"
              >
                <span className="block">Complete</span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    School Solutions
                  </span>
                </span>
                <span className="block">Provider</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left"
              >
                From <span className="font-bold text-blue-600">Software & Hardware</span> to <span className="font-bold text-purple-600">Digital Marketing</span> and <span className="font-bold text-green-600">School SuppliesEverything your institution needs for digital transformation.</span>.
              </motion.p>

              {/* Search Bar - Mobile Optimized */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 sm:mb-10"
              >
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <input
                    type="text"
                    placeholder="Search software, hardware, supplies..."
                    className="w-full pl-10 pr-28 sm:pl-14 sm:pr-40 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 shadow-lg sm:shadow-xl bg-white/90 backdrop-blur-sm text-sm sm:text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg sm:rounded-xl hover:shadow-lg active:scale-95 transition-all duration-300 font-semibold shadow-md flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                  >
                    <Search className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Find</span>
                  </button>
                </form>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4 justify-center lg:justify-start">
                  <span className="text-xs sm:text-sm text-gray-500">Quick:</span>
                  {["Software", "Boards", "SEO", "Notes"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 sm:px-3 py-1 rounded-full transition-colors border border-blue-200"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats - Mobile Optimized */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md sm:hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">{stat.icon}</span>
                      <div>
                        <p className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Services Overview - Mobile Hidden on small screens */}
            <div className="lg:w-1/2 w-full hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200/50"
              >
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Box className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">All-In-One Solutions</h2>
                    <p className="text-sm sm:text-base text-gray-500">Browse by category</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {serviceCategories.map((category, catIndex) => (
                    <motion.div
                      key={catIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                          {category.title}
                        </h3>
                        <div className="space-y-1.5 sm:space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer"
                              onClick={() => setSearchQuery(service.name)}
                            >
                              <div className={`p-1 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 flex-shrink-0`}>
                                <div className={`text-gradient ${service.color.replace('from-', 'text-').replace('to-', '')}`}>
                                  {service.icon}
                                </div>
                              </div>
                              <span className="text-xs sm:text-sm text-gray-700 truncate">{service.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Services Carousel (Shown only on mobile) */}
          <div className="lg:hidden mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Box className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">All Services</h2>
                  <p className="text-sm text-gray-500">Swipe to explore</p>
                </div>
              </div>
              
              <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide -mx-2 px-2">
                {serviceCategories.map((category, catIndex) => (
                  <div
                    key={catIndex}
                    className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 min-w-[280px] flex-shrink-0"
                  >
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer"
                          onClick={() => setSearchQuery(service.name)}
                        >
                          <div className={`p-1.5 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10`}>
                            <div className={`text-gradient ${service.color.replace('from-', 'text-').replace('to-', '')}`}>
                              {service.icon}
                            </div>
                          </div>
                          <span className="text-sm text-gray-700 truncate">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Access Cards - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 sm:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Get Started</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {quickAccessCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${card.bg} p-4 sm:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl text-white shadow-lg sm:shadow-2xl cursor-pointer transform transition-all duration-300 hover:shadow-xl sm:hover:shadow-3xl`}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    {card.icon}
                    <span className="text-2xl sm:text-3xl md:text-4xl">→</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{card.title}</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">{card.subtitle}</p>
                  <button className="w-full py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl font-semibold hover:bg-white/30 transition-colors text-sm sm:text-base">
                    {card.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200/50 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />, title: "Trusted Partner", desc: "500+ schools transformed" },
                { icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />, title: "Quality Assured", desc: "Premium products & services" },
                { icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />, title: "Fast Delivery", desc: "24-48 hours delivery" },
                { icon: <Headphones className="h-6 w-6 sm:h-8 sm:w-8" />, title: "Dedicated Support", desc: "One point contact" },
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 