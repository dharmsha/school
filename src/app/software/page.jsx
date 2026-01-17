// app/software/page.tsx
'use client';

import { useState } from 'react';
import { 
  Server, Smartphone, Monitor, Globe, Database, 
  Shield, Zap, Cloud, BarChart, Settings, 
  Users, FileText, Calendar, Video, Lock
} from 'lucide-react';

const SoftwarePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const softwareCategories = [
    { id: 'all', name: 'All Software', icon: <Server className="h-5 w-5" /> },
    { id: 'erp', name: 'School ERP', icon: <Database className="h-5 w-5" /> },
    { id: 'lms', name: 'LMS', icon: <Monitor className="h-5 w-5" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'website', name: 'School Website', icon: <Globe className="h-5 w-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="h-5 w-5" /> },
  ];

  const softwareProducts = [
    {
      id: 1,
      name: 'Smart School ERP Pro',
      category: 'erp',
      description: 'Complete school management with AI-powered analytics',
      features: ['Student Management', 'Fee Collection', 'Exam System', 'HR & Payroll', 'Inventory'],
      price: '₹49,999/year',
      icon: <Database className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 2,
      name: 'Learning Management System',
      category: 'lms',
      description: 'Interactive online learning platform with live classes',
      features: ['Live Classes', 'Assignment System', 'Progress Tracking', 'Interactive Content', 'Parent Portal'],
      price: '₹29,999/year',
      icon: <Monitor className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 3,
      name: 'School Mobile App',
      category: 'mobile',
      description: 'Mobile application for parents, students, and teachers',
      features: ['Push Notifications', 'Homework Tracking', 'Attendance', 'Fee Payment', 'Circulars'],
      price: '₹19,999/year',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      id: 4,
      name: 'School Website Builder',
      category: 'website',
      description: 'Professional school website with CMS',
      features: ['Responsive Design', 'Photo Gallery', 'News & Events', 'Admission Form', 'SEO Ready'],
      price: '₹9,999/year',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      popular: true
    },
    {
      id: 5,
      name: 'Campus Security System',
      category: 'security',
      description: 'Biometric attendance and surveillance system',
      features: ['Biometric Access', 'CCTV Integration', 'Visitor Management', 'Alert System', 'Reports'],
      price: '₹39,999/year',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      popular: false
    },
    {
      id: 6,
      name: 'School Analytics Dashboard',
      category: 'erp',
      description: 'AI-powered analytics for school performance',
      features: ['Performance Reports', 'Predictive Analysis', 'Custom Dashboards', 'Export Reports', 'Real-time Data'],
      price: '₹24,999/year',
      icon: <BarChart className="h-8 w-8" />,
      color: 'from-teal-500 to-cyan-500',
      popular: true
    },
  ];

  return (
    <div className="pt-8 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Software Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Transform your school with our comprehensive software suite designed for modern education
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Free Demo
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
          {softwareCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Software Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {softwareProducts
            .filter(product => activeCategory === 'all' || product.category === activeCategory)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${product.color} bg-opacity-10`}>
                      {product.icon}
                    </div>
                    {product.popular && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Zap className="h-3 w-3 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                      <p className="text-sm text-gray-500">Annual Subscription</p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Get Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Software?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our software solutions are designed keeping Indian schools in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="h-8 w-8" />, title: 'Secure & Reliable', desc: 'Bank-level security with 99.9% uptime' },
              { icon: <Users className="h-8 w-8" />, title: 'Easy to Use', desc: 'Intuitive interface for all stakeholders' },
              { icon: <Settings className="h-8 w-8" />, title: 'Customizable', desc: 'Tailor-made solutions for your school' },
              { icon: <Cloud className="h-8 w-8" />, title: 'Cloud Based', desc: 'Access from anywhere, anytime' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Digitalize Your School?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join 500+ schools already using our software solutions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Request Custom Quote
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwarePage;