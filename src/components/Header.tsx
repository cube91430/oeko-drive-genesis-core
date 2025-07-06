
import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-10 h-10 bg-moss-medium rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-moss-dark">OekoDrive</h1>
            </Link>
          </div>
          
          <nav className="hidden md:block ml-auto">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-moss-medium px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="/products" className="text-slate-600 hover:text-moss-medium px-3 py-2 text-sm font-medium transition-colors">Products</a>
              <a href="/design-development" className="text-slate-600 hover:text-moss-medium px-3 py-2 text-sm font-medium transition-colors">Design & Development</a>
              <a href="/our-work" className="text-slate-600 hover:text-moss-medium px-3 py-2 text-sm font-medium transition-colors">Our Work</a>
              <a href="/contact" className="text-slate-600 hover:text-moss-medium px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-moss-medium inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-moss-medium"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#features" className="text-slate-600 hover:text-moss-medium block px-3 py-2 text-base font-medium">Features</a>
              <a href="/products" className="text-slate-600 hover:text-moss-medium block px-3 py-2 text-base font-medium">Products</a>
              <a href="/design-development" className="text-slate-600 hover:text-moss-medium block px-3 py-2 text-base font-medium">Design & Development</a>
              <a href="/our-work" className="text-slate-600 hover:text-moss-medium block px-3 py-2 text-base font-medium">Our Work</a>
              <a href="/contact" className="text-slate-600 hover:text-moss-medium block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
