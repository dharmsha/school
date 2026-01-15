'use client';

import { 
  BookOpen, Facebook, Twitter, Instagram, 
  Youtube, Mail, Phone, MapPin,
  Heart, Download, Users, Award
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">SchoolHub</h2>
                <p className="text-gray-400 text-sm">Your Complete School Platform</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A comprehensive platform for students to access study materials, 
              track progress, collaborate with peers, and excel in academics.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-sky-500 hover:bg-sky-600 p-3 rounded-xl transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 p-3 rounded-xl transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-red-600 hover:bg-red-700 p-3 rounded-xl transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Notes', 'Past Papers', 'Timetable', 'Homework', 'Discussion'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-bold mb-6">Subjects</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Computer'].map((subject) => (
                <Link
                  key={subject}
                  href={`/subjects/${subject.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {subject}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">support@schoolhub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <p className="text-3xl font-bold">50,000+</p>
              <p className="text-gray-400">Active Students</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="h-8 w-8 text-green-400" />
              </div>
              <p className="text-3xl font-bold">10,000+</p>
              <p className="text-gray-400">Study Resources</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Download className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-3xl font-bold">500K+</p>
              <p className="text-gray-400">Downloads</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-gray-400">Rating</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} SchoolHub. All rights reserved.
              </p>
              <Heart className="h-4 w-4 text-red-500 mx-2" />
              <p className="text-gray-400">Made for students</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;