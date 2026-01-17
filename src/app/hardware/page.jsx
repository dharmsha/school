// app/hardware/page.tsx
'use client';

import { useState } from 'react';
import { 
  Monitor, Camera, Cpu, Wifi, Printer, Server,
  Tablet, Projector, Headphones, Keyboard, Mouse,
  HardDrive, Router, Smartphone, Speaker, Battery
} from 'lucide-react';

const HardwarePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const hardwareCategories = [
    { id: 'all', name: 'All Hardware', icon: <Cpu className="h-5 w-5" /> },
    { id: 'computers', name: 'Computers', icon: <Monitor className="h-5 w-5" /> },
    { id: 'security', name: 'Security', icon: <Camera className="h-5 w-5" /> },
    { id: 'networking', name: 'Networking', icon: <Wifi className="h-5 w-5" /> },
    { id: 'printers', name: 'Printers', icon: <Printer className="h-5 w-5" /> },
    { id: 'accessories', name: 'Accessories', icon: <Keyboard className="h-5 w-5" /> },
  ];

  const hardwareProducts = [
    {
      id: 1,
      name: 'Smart Interactive Whiteboard 75"',
      category: 'computers',
      description: 'Touch-enabled interactive display with 4K resolution',
      price: '₹89,999',
      originalPrice: '₹1,05,999',
      specs: ['75" Display', '4K Resolution', 'Touch Enabled', 'Android OS', 'Built-in Speakers'],
      icon: <Monitor className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      bestseller: true,
      stock: 'In Stock'
    },
    {
      id: 2,
      name: 'CCTV Security Kit (8 Cameras)',
      category: 'security',
      description: 'Complete CCTV surveillance system with DVR',
      price: '₹24,999',
      originalPrice: '₹32,999',
      specs: ['8 HD Cameras', '1TB DVR', 'Night Vision', 'Mobile Viewing', '2 Year Warranty'],
      icon: <Camera className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      bestseller: true,
      stock: 'In Stock'
    },
    {
      id: 3,
      name: 'Computer Lab Setup (30 PCs)',
      category: 'computers',
      description: 'Complete computer lab with all accessories',
      price: '₹4,99,999',
      originalPrice: '₹6,25,000',
      specs: ['30 Computers', 'Tables & Chairs', 'Networking', 'UPS Backup', 'Installation'],
      icon: <Server className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      bestseller: false,
      stock: 'Limited Stock'
    },
    {
      id: 4,
      name: 'Wireless Networking Kit',
      category: 'networking',
      description: 'High-speed wireless network for campus',
      price: '₹34,999',
      originalPrice: '₹42,999',
      specs: ['5 Access Points', 'Router', 'Switches', 'Cables', 'Installation'],
      icon: <Wifi className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      bestseller: true,
      stock: 'In Stock'
    },
    {
      id: 5,
      name: 'High-Speed Laser Printer',
      category: 'printers',
      description: 'Office-grade laser printer with scanner',
      price: '₹18,999',
      originalPrice: '₹24,999',
      specs: ['50 PPM Speed', 'Duplex Printing', 'WiFi Enabled', 'Scanner', 'Copier'],
      icon: <Printer className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      bestseller: false,
      stock: 'In Stock'
    },
    {
      id: 6,
      name: 'Computer Accessories Kit',
      category: 'accessories',
      description: 'Complete set of computer accessories',
      price: '₹8,499',
      originalPrice: '₹10,999',
      specs: ['Keyboard', 'Mouse', 'Headphones', 'Webcam', 'Mouse Pad'],
      icon: <Keyboard className="h-8 w-8" />,
      color: 'from-teal-500 to-cyan-500',
      bestseller: true,
      stock: 'In Stock'
    },
  ];

  return (
    <div className="pt-8 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Hardware Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Premium hardware equipment for modern classrooms and smart schools
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Catalog
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {hardwareCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className="mb-2">{category.icon}</div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {hardwareProducts
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
                    <div className="flex flex-col items-end gap-2">
                      {product.bestseller && (
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                          Bestseller
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        product.stock === 'In Stock' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {product.stock}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                          • {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                        <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                      </div>
                      <p className="text-sm text-green-600 font-medium">Free Installation</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                        Details
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hardware Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete hardware solutions with installation and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Headphones className="h-8 w-8" />, 
                title: 'Installation Support', 
                desc: 'Professional installation by certified technicians',
                features: ['Free Installation', 'Testing & Setup', 'Training']
              },
              { 
                icon: <Battery className="h-8 w-8" />, 
                title: 'Warranty & Maintenance', 
                desc: 'Comprehensive warranty and AMC plans',
                features: ['1-3 Years Warranty', 'Annual Maintenance', '24/7 Support']
              },
              { 
                icon: <Router className="h-8 w-8" />, 
                title: 'Network Setup', 
                desc: 'Complete networking infrastructure setup',
                features: ['WiFi Coverage', 'Cable Management', 'Security Setup']
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Custom Hardware Solution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get expert consultation for your schools hardware requirements
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Request Site Visit
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwarePage;