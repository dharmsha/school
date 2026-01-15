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

  // All Services Categories with Icons
  const serviceCategories = [
    {
      title: "Software Solutions",
      services: [
        { name: "School Management Software", icon: <Server className="h-4 w-4" />, color: "from-blue-500 to-cyan-500" },
        { name: "Mobile App Development", icon: <Smartphone className="h-4 w-4" />, color: "from-purple-500 to-pink-500" },
        { name: "Web Portal Development", icon: <Globe className="h-4 w-4" />, color: "from-indigo-500 to-blue-500" },
        { name: "Learning Management System", icon: <Monitor className="h-4 w-4" />, color: "from-green-500 to-teal-500" },
      ]
    },
    {
      title: "Hardware Solutions",
      services: [
        { name: "Digital Smart Boards", icon: <Monitor className="h-4 w-4" />, color: "from-orange-500 to-red-500" },
        { name: "CCTV & Security Cameras", icon: <Camera className="h-4 w-4" />, color: "from-gray-700 to-gray-900" },
        { name: "Computer Lab Setup", icon: <Cpu className="h-4 w-4" />, color: "from-blue-600 to-indigo-600" },
        { name: "Networking & WiFi", icon: <Wifi className="h-4 w-4" />, color: "from-green-600 to-emerald-600" },
      ]
    },
    {
      title: "Digital Marketing",
      services: [
        { name: "SEO for Schools", icon: <Target className="h-4 w-4" />, color: "from-yellow-500 to-orange-500" },
        { name: "Social Media Marketing", icon: <Users className="h-4 w-4" />, color: "from-pink-500 to-rose-500" },
        { name: "Email Marketing", icon: <Mail className="h-4 w-4" />, color: "from-blue-400 to-cyan-400" },
        { name: "Content Marketing", icon: <FileText className="h-4 w-4" />, color: "from-purple-400 to-pink-400" },
      ]
    },
    {
      title: "Stationery & Supplies",
      services: [
        { name: "Notebooks & Pens", icon: <PenTool className="h-4 w-4" />, color: "from-red-500 to-pink-500" },
        { name: "Office Supplies", icon: <Box className="h-4 w-4" />, color: "from-amber-500 to-yellow-500" },
        { name: "Lab Equipment", icon: <Database className="h-4 w-4" />, color: "from-green-500 to-emerald-500" },
        { name: "Printers & Scanners", icon: <Printer className="h-4 w-4" />, color: "from-gray-600 to-gray-800" },
      ]
    },
    {
      title: "Study Materials",
      services: [
        { name: "Digital Notes (PDF/PPT)", icon: <FileText className="h-4 w-4" />, color: "from-indigo-500 to-purple-500" },
        { name: "Past Papers Database", icon: <BookOpen className="h-4 w-4" />, color: "from-blue-500 to-cyan-500" },
        { name: "Online Test Series", icon: <Target className="h-4 w-4" />, color: "from-green-500 to-emerald-500" },
        { name: "E-Library Access", icon: <Database className="h-4 w-4" />, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      title: "Additional Services",
      services: [
        { name: "Live Classes Platform", icon: <Video className="h-4 w-4" />, color: "from-red-500 to-pink-500" },
        { name: "Timetable Software", icon: <Calendar className="h-4 w-4" />, color: "from-purple-500 to-indigo-500" },
        { name: "Cloud Storage", icon: <Cloud className="h-4 w-4" />, color: "from-blue-400 to-cyan-400" },
        { name: "Audio-Visual Setup", icon: <Speaker className="h-4 w-4" />, color: "from-yellow-500 to-orange-500" },
      ]
    }
  ];

  // Quick Access Cards
  const quickAccessCards = [
    { title: "Shop Now", subtitle: "Order Supplies", icon: <ShoppingCart className="h-6 w-6" />, bg: "bg-gradient-to-br from-orange-500 to-red-500", action: "Browse Products" },
    { title: "Book Demo", subtitle: "Software Demo", icon: <Video className="h-6 w-6" />, bg: "bg-gradient-to-br from-purple-500 to-pink-500", action: "Schedule Now" },
    { title: "Get Quote", subtitle: "Custom Solution", icon: <PenTool className="h-6 w-6" />, bg: "bg-gradient-to-br from-blue-500 to-cyan-500", action: "Request Quote" },
    { title: "Support", subtitle: "24/7 Help", icon: <Headphones className="h-6 w-6" />, bg: "bg-gradient-to-br from-green-500 to-emerald-500", action: "Contact Us" },
  ];

  // Stats
  const stats = [
    { value: "500+", label: "Schools Partnered", icon: "🏫" },
    { value: "50K+", label: "Products Delivered", icon: "📦" },
    { value: "99%", label: "Client Satisfaction", icon: "⭐" },
    { value: "24/7", label: "Support Available", icon: "🛡️" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
      
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Animated Icons Floating */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 right-32 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl"
      >
        <Cpu className="h-8 w-8 text-blue-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -360] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-32 left-32 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl"
      >
        <Globe className="h-8 w-8 text-green-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl"
      >
        <Smartphone className="h-8 w-8 text-purple-500" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 mb-6">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-green-500 rounded-full relative" />
              </div>
              <span className="font-bold text-gray-800">🌟 One Stop Solution for All School Needs</span>
              <Sparkles className="h-4 w-4 text-yellow-500" />
            </div>
          </motion.div>

          {/* Main Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
              >
                <span className="block">Complete</span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    School Solutions
                  </span>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-8 text-5xl"
                  >
                    🚀
                  </motion.span>
                </span>
                <span className="block">Provider</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                From <span className="font-bold text-blue-600">Software & Hardware</span> to <span className="font-bold text-purple-600">Digital Marketing</span> and <span className="font-bold text-green-600">School Supplies</span> - Everything your institution needs for digital transformation.
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-10"
              >
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search software, hardware, marketing services, or school supplies..."
                    className="w-full pl-14 pr-40 py-5 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 shadow-xl bg-white/90 backdrop-blur-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-semibold shadow-md flex items-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Find Solutions
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-sm text-gray-500">Quick search:</span>
                  {["Management Software", "Smart Boards", "SEO", "Notebooks", "PDF Notes"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-full transition-colors border border-blue-200"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{stat.icon}</span>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Services Overview */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Box className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">All-In-One Solutions</h2>
                    <p className="text-gray-500">Browse by category</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {serviceCategories.map((category, catIndex) => (
                    <motion.div
                      key={catIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Access Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Get Started Instantly</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickAccessCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${card.bg} p-6 rounded-3xl text-white shadow-2xl cursor-pointer transform transition-all duration-300 hover:shadow-3xl`}
                >
                  <div className="flex items-center justify-between mb-6">
                    {card.icon}
                    <span className="text-4xl">→</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/80 mb-4">{card.subtitle}</p>
                  <button className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/30 transition-colors">
                    {card.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl p-8 md:p-12 border border-gray-200/50 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Schools Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Shield className="h-8 w-8" />, title: "Trusted Partner", desc: "500+ schools already transformed" },
                { icon: <Award className="h-8 w-8" />, title: "Quality Assured", desc: "Premium products & services" },
                { icon: <Clock className="h-8 w-8" />, title: "Fast Delivery", desc: "24-48 hours for most items" },
                { icon: <Headphones className="h-8 w-8" />, title: "Dedicated Support", desc: "One point contact for all needs" },
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating CTA */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3">
          <ShoppingCart className="h-5 w-5" />
          Get Complete Quote
          <span className="group-hover:translate-x-2 transition-transform">→</span>
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <p className="text-sm text-gray-500 mb-2">Scroll to explore all services</p>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;