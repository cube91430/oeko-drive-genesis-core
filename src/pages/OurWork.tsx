
import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Smartphone, Database, Cloud, Zap, Shield, Cpu, Globe, Layers } from 'lucide-react';

const OurWork = () => {
  const projects = [
    {
      icon: Code,
      title: "Autonomous Navigation System",
      description: "Advanced robotics navigation system using LIDAR and computer vision for warehouse automation.",
      products: ["Development Boards", "Sensors", "Communication Networks"],
      developmentFields: ["Hardware Design", "Software Design", "Design & Simulation Tools"],
      accent: "border-l-moss-medium"
    },
    {
      icon: Smartphone,
      title: "Smart Vehicle Control Unit",
      description: "Real-time automotive control system with CAN bus integration for electric vehicle management.",
      products: ["Edge CAN Networks", "Development Boards", "Power"],
      developmentFields: ["Hardware Design", "Software Design", "Reference Design"],
      accent: "border-l-moss-medium"
    },
    {
      icon: Database,
      title: "Industrial IoT Platform",
      description: "Scalable IoT solution for manufacturing equipment monitoring and predictive maintenance.",
      products: ["Communication Networks", "Sensors", "Tools & Software"],
      developmentFields: ["Open Source", "Tools & Software", "Performance & Durability"],
      accent: "border-l-moss-medium"
    },
    {
      icon: Cloud,
      title: "Robotic Arm Control System",
      description: "Precision control system for 6-DOF robotic arms with force feedback and safety mechanisms.",
      products: ["Actuators", "Development Boards", "Sensors"],
      developmentFields: ["Software Design", "Hardware Design", "Performance & Durability"],
      accent: "border-l-moss-medium"
    },
    {
      icon: Zap,
      title: "Energy Management System",
      description: "Smart grid integration system for renewable energy sources with real-time optimization.",
      products: ["Power", "Communication Networks", "Components & Parts"],
      developmentFields: ["Reference Design", "Performance & Durability", "Tools & Software"],
      accent: "border-l-moss-medium"
    },
    {
      icon: Shield,
      title: "Safety Critical ECU",
      description: "Automotive safety system meeting ISO 26262 standards for autonomous driving applications.",
      products: ["Development Boards", "Edge CAN Networks", "Sensors"],
      developmentFields: ["Software Design", "Hardware Design", "Performance & Durability"],
      accent: "border-l-moss-medium"
    }
  ];

  const projectImages = [
    {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      alt: "Autonomous Robotics Research",
      title: "Autonomous Navigation Systems"
    },
    {
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop",
      alt: "Automotive Control Systems",
      title: "Smart Vehicle Control"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop",
      alt: "Industrial IoT Solutions",
      title: "Industrial IoT Platform"
    },
    {
      url: "https://images.unsplash.com/photo-1606662829225-2b7d10ba6ac6?w=800&h=400&fit=crop",
      alt: "Robotic Arm Development",
      title: "Robotic Arm Control"
    },
    {
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
      alt: "Energy Management Research",
      title: "Energy Management Systems"
    },
    {
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      alt: "Safety Critical Systems",
      title: "Safety Critical ECU"
    }
  ];

  const handleImageClick = (title: string) => {
    console.log(`Clicked on: ${title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-8">
            <span>Home</span>
            <span>/</span>
            <span className="text-moss-medium">Our Work</span>
          </div>
        </div>
      </section>

      {/* Animated Banner */}
      <section className="bg-moss-medium py-4 overflow-hidden">
        <div className="flex animate-pulse">
          <div className="flex items-center space-x-8 text-black font-bold text-base whitespace-nowrap">
            <span>Research Projects</span>
            <span>⚡</span>
            <span>Innovation</span>
            <span>⚡</span>
            <span>Technology Solutions</span>
            <span>⚡</span>
            <span>Applied Research</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      {/* Project Showcase Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projectImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => handleImageClick(image.title)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">Click to explore</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-moss-medium text-black px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-moss-medium">⚡</span>
              <span className="text-gray-600">Our Research</span>
              <span className="text-moss-medium">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="text-moss-medium">Projects</span> We've Developed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gray-50 rounded-lg p-8 border-l-4 ${project.accent} hover:shadow-lg transition-shadow`}>
                <div className="mb-6">
                  <project.icon className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Products Used */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Products Implemented:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.products.map((product, idx) => (
                      <span key={idx} className="bg-moss-light text-moss-dark px-2 py-1 rounded text-xs font-medium">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Development Fields */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Development Fields:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.developmentFields.map((field, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="text-moss-medium hover:text-moss-dark hover:bg-moss-light/10 p-0 h-auto font-medium"
                >
                  View Project →
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
            {['Autonomous Systems', 'Automotive Control', 'IoT Solutions', 'Robotics', 'Energy Management', 'Safety Systems'].map((tag, index) => (
              <span key={index} className="bg-moss-medium text-black px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
