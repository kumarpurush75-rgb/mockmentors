import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-1">
              <img src="/logo.jpeg" alt="MockMentor Logo" className="h-8 md:h-10 object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/toppers" className="text-gray-700 bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Toppers & Results
            </Link>
            
            <Link to="/courses/descriptive-writing" className="text-gray-700 bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Descriptive Writing
            </Link>

            <button className="text-blue-600 border border-blue-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
              SIGN IN
            </button>
            
            <button className="bg-[#488890] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#3a6d73] transition-colors shadow-sm">
              SIGN UP
            </button>
            
            <button className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors shadow-sm">
              YouTube
            </button>
            
            <a href="tel:9431986819" className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center">
              Helpline No - 9431986819
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Link to="/toppers" className="text-center text-gray-700 bg-gray-50 border border-gray-200 py-2 rounded-md text-sm font-medium active:bg-gray-100 transition-colors">Toppers & Results</Link>
            <Link to="/courses/descriptive-writing" className="text-center text-gray-700 bg-gray-50 border border-gray-200 py-2 rounded-md text-sm font-medium active:bg-gray-100 transition-colors">Descriptive Writing</Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="text-blue-600 border border-blue-600 py-2 rounded-md text-sm font-medium">SIGN IN</button>
            <button className="bg-[#488890] text-white py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#3a6d73]">SIGN UP</button>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium shadow-sm">YouTube</button>
          <a href="tel:9431986819" className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium shadow-sm flex items-center justify-center">Helpline No - 9431986819</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
