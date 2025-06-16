
import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Smartphone, Database, Cloud, Zap, Shield, Cpu, Globe, Layers } from 'lucide-react';

const DesignDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern web applications built with React, TypeScript, and cutting-edge technologies.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android platforms.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable backend architectures with robust APIs and database design.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Cloud-native solutions with modern deployment and scaling strategies.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance applications optimized for speed and efficiency.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Secure development practices with comprehensive security implementations.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Cpu,
      title: "System Architecture",
      description: "Scalable system design and architecture for complex applications.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web development with modern frameworks and tools.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Layers,
      title: "API Development",
      description: "RESTful and GraphQL APIs designed for scalability and maintainability.",
      accent: "border-l-moss-medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Design & Development</h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-8">
            <span>Home</span>
            <span>/</span>
            <span className="text-moss-medium">Design & Development</span>
          </div>
        </div>
      </section>

      {/* Animated Banner */}
      <section className="bg-moss-medium py-4 overflow-hidden">
        <div className="flex animate-pulse">
          <div className="flex items-center space-x-8 text-black font-bold text-lg whitespace-nowrap">
            <span>Frontend Development</span>
            <span>⚡</span>
            <span>Backend Systems</span>
            <span>⚡</span>
            <span>Mobile Apps</span>
            <span>⚡</span>
            <span>Cloud Solutions</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-moss-medium">⚡</span>
              <span className="text-gray-600">My Specialization</span>
              <span className="text-moss-medium">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="text-moss-medium">Development Services</span> I Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-gray-50 rounded-lg p-8 border-l-4 ${service.accent} hover:shadow-lg transition-shadow`}>
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-moss-medium hover:text-moss-dark hover:bg-moss-light/10 p-0 h-auto font-medium"
                >
                  Learn more →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-moss-medium">⚡</span>
            <span className="text-gray-600">Contact Me</span>
            <span className="text-moss-medium">⚡</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Let's Talk for <span className="text-moss-medium">Your</span>
          </h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            <span className="text-moss-medium">Next Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">Your Name *</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">Email *</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <label className="block text-left text-gray-700 font-medium mb-2">Address</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-moss-medium focus:border-transparent"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          
          <Button 
            size="lg" 
            className="mt-8 bg-moss-medium hover:bg-moss-dark text-black hover:text-white px-8 py-3 text-lg font-semibold rounded-full"
          >
            Send Message
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Let's Create an <span className="text-moss-medium">Amazing</span>
          </h2>
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-moss-medium">Project Together!</span>
          </h2>
          <Button 
            size="lg" 
            className="bg-moss-medium hover:bg-moss-dark text-black hover:text-white px-8 py-3 text-lg font-semibold rounded-full"
          >
            Contact Us
          </Button>
        </div>
        
        {/* Floating Tags */}
        <div className="relative mt-16 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {['React Development', 'Node.js', 'TypeScript', 'Cloud Architecture', 'Mobile Development', 'API Design', 'Database Design', 'DevOps', 'Security', 'Performance'].map((tag, index) => (
              <span key={index} className="bg-moss-medium text-black px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-moss-medium py-4 overflow-hidden">
        <div className="flex animate-pulse">
          <div className="flex items-center space-x-8 text-black font-bold text-lg whitespace-nowrap">
            <span>Frontend Development</span>
            <span>⚡</span>
            <span>Backend Systems</span>
            <span>⚡</span>
            <span>Mobile Apps</span>
            <span>⚡</span>
            <span>Cloud Solutions</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignDevelopment;
