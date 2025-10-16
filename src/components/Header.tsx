
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/52a01973-f704-4970-829d-107fc03a823b.png" 
                  alt="OekoDrive Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-tech-green">OekoDrive</h1>
            </Link>
          </div>
          
          <nav className="hidden md:block ml-auto">
            <div className="flex items-center space-x-8">
              <a href="/grut" className="text-slate-600 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors">GRUT</a>
              <a href="/manta" className="text-slate-600 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors">Manta</a>
              <a href="/research" className="text-slate-600 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors">Research</a>
              <a href="/konve" className="text-slate-600 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors">Konve</a>
              <a href="/products" className="text-slate-600 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors">{t('header.products')}</a>
              <a href="/contact" className="text-slate-600 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors">{t('header.contact')}</a>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-slate-600 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'ID' : 'EN'}</span>
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-brand-primary inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card shadow-lg">
              <a href="/grut" className="text-slate-600 hover:text-brand-primary block px-3 py-2 text-base font-medium">GRUT</a>
              <a href="/manta" className="text-slate-600 hover:text-brand-primary block px-3 py-2 text-base font-medium">Manta</a>
              <a href="/research" className="text-slate-600 hover:text-brand-primary block px-3 py-2 text-base font-medium">Research</a>
              <a href="/konve" className="text-slate-600 hover:text-brand-primary block px-3 py-2 text-base font-medium">Konve</a>
              <a href="/products" className="text-slate-600 hover:text-brand-primary block px-3 py-2 text-base font-medium">{t('header.products')}</a>
              <a href="/contact" className="text-slate-600 hover:text-brand-primary block px-3 py-2 text-base font-medium">{t('header.contact')}</a>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-slate-600 hover:text-brand-primary block px-3 py-2 text-base font-medium w-full text-left"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
