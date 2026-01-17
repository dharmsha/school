// app/kit/page.tsx
'use client';

import { useState } from 'react';
import { 
  Backpack, Book, PenTool, Calculator, Globe,
  Palette, FlaskRound, Atom, Music, Laptop,
  CheckCircle, Package, Truck, Shield
} from 'lucide-react';

const KitPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const kitCategories = [
    { id: 'all', name: 'All Kits', icon: <Package className="h-5 w-5" /> },
    { id: 'primary', name: 'Primary School', icon: <Book className="h-5 w-5" /> },
    { id: 'middle', name: 'Middle School', icon: <Calculator className="h-5 w-5" /> },
    { id: 'secondary', name: 'Secondary', icon: <FlaskRound className="h-5 w-5" /> },
    { id: 'science', name: 'Science Kit', icon: <Atom className="h-5 w-5" /> },
    { id: 'art', name: 'Art & Craft', icon: <Palette className="h-5 w-5" /> },
  ];

  const kitProducts = [
    {
      id: 1,
      name: 'Primary School Complete Kit',
      category: 'primary',
      description: 'Everything a primary school student needs',
      price: '₹1,499',
      originalPrice: '₹1,999',
      grade: 'Class 1-5',
      items: [
        'Textbooks (5 subjects)', 'Notebooks (10 pcs)', 'Pencil Box', 'Geometry Box',
        'Water Bottle', 'Lunch Box', 'School Bag', 'ID Card & Lanyard'
      ],
      icon: <Backpack className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      bestseller: true,
      delivery: '3-5 days'
    },
    {
      id: 2,
      name: 'Mathematics Lab Kit',
      category: 'middle',
      description: 'Complete mathematics learning kit',
      price: '₹2,999',
      originalPrice: '₹3,799',
      grade: 'Class 6-8',
      items: [
        'Geometrical Shapes', 'Algebra Kit', 'Measuring Instruments', 'Fraction Kit',
        'Probability Kit', 'Graph Board', 'Mathematical Games', 'Teacher Manual'
      ],
      icon: <Calculator className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      bestseller: true,
      delivery: '5-7 days'
    },
    {
      id: 3,
      name: 'Science Lab Kit',
      category: 'science',
      description: 'Complete science experiment kit',
      price: '₹4,999',
      originalPrice: '₹6,499',
      grade: 'Class 9-12',
      items: [
        'Microscope', 'Test Tubes', 'Chemicals', 'Physics Apparatus',
        'Biology Specimens', 'Safety Equipment', 'Lab Manual', 'Experiment Guide'
      ],
      icon: <FlaskRound className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      bestseller: true,
      delivery: '7-10 days'
    },
    {
      id: 4,
      name: 'Art & Craft Kit',
      category: 'art',
      description: 'Creative arts and craft supplies',
      price: '₹1,299',
      originalPrice: '₹1,699',
      grade: 'All Classes',
      items: [
        'Sketch Books', 'Water Colors', 'Oil Pastels', 'Clay Modeling',
        'Origami Papers', 'Scissors & Glue', 'Brushes', 'Craft Materials'
      ],
      icon: <Palette className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      bestseller: false,
      delivery: '2-4 days'
    },
    {
      id: 5,
      name: 'Music & Sports Kit',
      category: 'all',
      description: 'Complete music and sports equipment package',
      price: '₹7,999',
      originalPrice: '₹9,999',
      grade: 'School Teams',
      items: [
        'Musical Instruments', 'Football', 'Basketball', 'Volleyball',
        'Badminton Set', 'Carrom Board', 'Chess Board', 'Sports Wear'
      ],
      icon: <Music className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      bestseller: false,
      delivery: '5-7 days'
    },
    {
      id: 6,
      name: 'Computer Education Kit',
      category: 'all',
      description: 'Basic computer learning kit',
      price: '₹8,499',
      originalPrice: '₹10,999',
      grade: 'Class 6-12',
      items: [
        'Educational Software', 'Coding Kit', 'Robotics Kit', 'Computer Basics Book',
        'Mouse & Keyboard', 'Headphones', 'Learning CD', 'Project Guide'
      ],
      icon: <Laptop className="h-8 w-8" />,
      color: 'from-teal-500 to-cyan-500',
      bestseller: true,
      delivery: '7-10 days'
    },
  ];

  const bulkDiscounts = [
    { quantity: '50+ kits', discount: '10% OFF + Free Delivery' },
    { quantity: '100+ kits', discount: '15% OFF + Free Customization' },
    { quantity: '200+ kits', discount: '20% OFF + Free Staff Training' },
    { quantity: '500+ kits', discount: '25% OFF + Complete Setup' },
  ];

  return (
    <div className="pt-8 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Kits & Supplies</h1>
            <p className="text-xl opacity-90 mb-8">
              Complete educational kits for enhanced learning experience
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                View All Kits
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Bulk Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {kitCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className="mb-2">{category.icon}</div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {kitProducts
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
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                          Bestseller
                        </span>
                      )}
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        Grade: {product.grade}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Kit Includes:</h4>
                    <ul className="space-y-1">
                      {product.items.slice(0, 4).map((item, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center">
                          <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {product.items.length > 4 && (
                        <li className="text-gray-500 text-sm">
                          + {product.items.length - 4} more items
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                        <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                      </div>
                      <p className="text-sm text-gray-500">Delivery: {product.delivery}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                        Details
                      </button>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Bulk Discounts */}
      <div className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bulk Order Discounts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Special discounts for schools ordering in bulk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bulkDiscounts.map((discount, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-emerald-200 p-6 text-center hover:border-emerald-400 transition-colors">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{discount.quantity}</div>
                <p className="text-lg font-medium text-gray-900 mb-3">{discount.discount}</p>
                <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our School Kits?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed by educational experts for better learning outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Shield className="h-8 w-8" />, 
              title: 'Quality Assured', 
              desc: 'All materials are child-safe and durable'
            },
            { 
              icon: <Book className="h-8 w-8" />, 
              title: 'Curriculum Aligned', 
              desc: 'Designed as per NCERT and CBSE guidelines'
            },
            { 
              icon: <Truck className="h-8 w-8" />, 
              title: 'Pan India Delivery', 
              desc: 'Free delivery to schools across India'
            },
            { 
              icon: <Package className="h-8 w-8" />, 
              title: 'Custom Kits', 
              desc: 'Get kits customized for your school needs'
            },
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="inline-flex p-3 rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Custom School Kits?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get kits customized with your school logo and specific requirements
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Request Customization
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitPage;