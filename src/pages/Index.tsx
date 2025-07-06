
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CallToAction from '../components/CallToAction';
import Blog from '../components/Blog';
import LocalBuildStats from '../components/LocalBuildStats';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Developer Line and Industrial Line Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Developer Line */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-l-moss-medium">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Developer Line</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Open-source and modular hardware and tools designed specifically for developers and researchers. 
                Our comprehensive suite provides the flexibility and transparency needed for innovative robotics 
                and automotive development projects.
              </p>
              <Link to="/design-development">
                <Button 
                  className="bg-moss-medium hover:bg-moss-dark text-black hover:text-white px-6 py-2 rounded-lg font-medium"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Industrial Line */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-l-moss-medium">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Line</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                OEM solutions tailored for industries and manufacturers seeking to adapt more flexible and 
                private networks while maintaining open communication standards. Engineered for scalability 
                and reliability in demanding industrial environments.
              </p>
              <Link to="/products">
                <Button 
                  className="bg-moss-medium hover:bg-moss-dark text-black hover:text-white px-6 py-2 rounded-lg font-medium"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <Portfolio />
      <LocalBuildStats />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
