
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-800">OekoDrive</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#features" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="#work" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">Our Work</a>
              <a href="#blog" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">Blog</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#features" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">Features</a>
              <a href="#work" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">Our Work</a>
              <a href="#blog" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">Blog</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
