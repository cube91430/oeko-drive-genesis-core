
import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Monitor, Smartphone, Layout, Layers, Lightbulb, Globe, User, Image, Palette } from 'lucide-react';

const Products = () => {
  const services = [
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with modern design principles.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Smartphone,
      title: "Application Design",
      description: "Comprehensive mobile and web application design solutions.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Professional website design that converts visitors into customers.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Layout,
      title: "UI Design",
      description: "Clean and functional user interface design for all platforms.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Lightbulb,
      title: "Design System",
      description: "Scalable design systems for consistent brand experience.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Layers,
      title: "Wireframing",
      description: "Strategic wireframing to plan and optimize user journeys.",
      accent: "border-l-moss-medium"
    },
    {
      icon: User,
      title: "Brand Identity",
      description: "Complete brand identity design including logos and guidelines.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Image,
      title: "Illustration",
      description: "Custom illustrations and graphics for your brand.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Palette,
      title: "Web App Design",
      description: "Modern web application design with focus on usability.",
      accent: "border-l-moss-medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Products</h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-8">
            <span>Home</span>
            <span>/</span>
            <span className="text-moss-medium">Products</span>
          </div>
        </div>
      </section>

      {/* Animated Banner */}
      <section className="bg-moss-medium py-4 overflow-hidden">
        <div className="flex animate-pulse">
          <div className="flex items-center space-x-8 text-black font-bold text-lg whitespace-nowrap">
            <span>Web Design</span>
            <span>⚡</span>
            <span>App Design</span>
            <span>⚡</span>
            <span>Dashboard</span>
            <span>⚡</span>
            <span>Wireframe</span>
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
              <span className="text-moss-medium">Products</span> I Provide
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
            {['Prototype', 'Mobile App Design', 'Website Design', 'Branding', 'UI/UX Design', 'Brand Identity', 'Graphic Design', 'UI Design', 'Landing Page', 'Product Design'].map((tag, index) => (
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
            <span>Web Design</span>
            <span>⚡</span>
            <span>App Design</span>
            <span>⚡</span>
            <span>Dashboard</span>
            <span>⚡</span>
            <span>Wireframe</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
