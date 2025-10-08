
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
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Agricultural Products Section - Moved to Top */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 rounded-xl p-8 border-l-4 border-l-green-600">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">Agricultural Solutions</h3>
            <p className="text-green-700 dark:text-green-300 mb-6 leading-relaxed">
              Distributed Smart Farming and Precision Farming solutions for modern agriculture. Our autonomous systems 
              provide real-time 3D monitoring with command and control capabilities accessible anywhere, anytime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/60 dark:bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Autonomous Drones</h4>
                <p className="text-sm text-green-700 dark:text-green-300">AG01 & AG02 for spraying, monitoring, and phenotyping</p>
              </div>
              <div className="bg-white/60 dark:bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Conversion Kits</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Transform farming equipment into autonomous integrated systems</p>
              </div>
              <div className="bg-white/60 dark:bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Data Loggers</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Manta01 & MantaNet for multi-protocol logging and analysis</p>
              </div>
              <div className="bg-white/60 dark:bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Complete 3D View</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Real-time monitoring and control from anywhere</p>
              </div>
            </div>
            <Link to="/products">
              <Button 
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-medium"
              >
                Explore Agricultural Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <Portfolio />
      <LocalBuildStats />
      <CallToAction />
      <Blog />

      {/* Developer Line and Industrial Line Section - Moved to Bottom */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Developer Line */}
            <div className="bg-muted rounded-xl p-8 border-l-4 border-l-moss-medium">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Developer Line</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
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
            <div className="bg-muted rounded-xl p-8 border-l-4 border-l-moss-medium">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Industrial Line</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
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
      <Footer />
    </div>
  );
};

export default Index;
