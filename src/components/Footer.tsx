
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">OekoDrive</h3>
            <p className="text-brand-light mb-6 max-w-md">
              Empowering the future of robotics with open-source modules for system control, 
              flexible analysis, and high-performance motor control in robotics and physical AI applications.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-brand-light text-brand-dark hover:bg-brand-primary">
                Get Started
              </Button>
              <Button size="sm" variant="outline" className="border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-dark">
                Documentation
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-brand-light">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-brand-light">
              <li>Email: oekodrive@gmail.com</li>
              <li>Phone: (+62) 812 8603 5867</li>
              <li>Address: Jl. Cluster Monaco W7/ No. 34</li>
              <li>Cibubur, Bogor Regency, West Java</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-primary mt-12 pt-8 text-center text-brand-light">
          <p>&copy; 2024 OekoDrive. All rights reserved. Dream, Build, Deploy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
