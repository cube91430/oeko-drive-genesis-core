import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Monitor, Smartphone, Layout, Layers, Lightbulb, Globe, User, Image, Palette, Car, Sprout } from 'lucide-react';

const Products = () => {
  const services = [
    {
      icon: Car,
      title: "EV Conversion",
      description: "Complete electric vehicle conversion kits and systems for transforming traditional vehicles into efficient electric alternatives. Our comprehensive solutions include motor controllers, battery management systems, and charging infrastructure.",
      accent: "border-l-moss-medium",
      featured: true
    },
    {
      icon: Sprout,
      title: "GRUT",
      description: "Smart Farming product line designed for both indoor and outdoor farming applications. GRUT systems provide comprehensive coverage for large-scale crop monitoring, maintenance, and harvesting operations.",
      accent: "border-l-moss-medium",
      featured: true
    },
    {
      icon: Monitor,
      title: "Development Boards",
      description: "High-performance microcontroller and embedded development boards for robotics and automotive control systems.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Smartphone,
      title: "Edge CAN Networks",
      description: "Advanced CAN bus communication solutions for distributed automotive and industrial control systems.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Globe,
      title: "Power",
      description: "Efficient power management and distribution systems for robotics and automotive applications.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Layout,
      title: "Actuators",
      description: "Precision actuators and servo systems for robotic motion control and automotive mechanisms.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Lightbulb,
      title: "Components & Parts",
      description: "High-quality electronic components and mechanical parts for building robust robotic systems.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Layers,
      title: "Communication Networks",
      description: "Wireless and wired communication protocols for seamless robotics and vehicle connectivity.",
      accent: "border-l-moss-medium"
    },
    {
      icon: User,
      title: "Sensors",
      description: "Advanced sensor arrays including LIDAR, cameras, IMU, and environmental sensors for autonomous systems.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Image,
      title: "Tools & Software",
      description: "Professional development tools and software platforms for robotics programming and simulation.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Palette,
      title: "Hardware Desktop",
      description: "Over-the-air firmware updates and system maintenance solutions for deployed robotics platforms.",
      accent: "border-l-moss-medium"
    }
  ];

  const productImages = [
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      alt: "Development Boards and Laptops",
      title: "Development Boards"
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      alt: "Circuit Boards and Electronics",
      title: "Electronic Components"
    },
    {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      alt: "Robotics and Automation",
      title: "Robotics Systems"
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      alt: "Computing Hardware",
      title: "Computing Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      alt: "Display and Communication Systems",
      title: "Communication Networks"
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
        <div className="flex animate-pulse justify-center">
          <div className="flex items-center space-x-8 text-black font-bold text-lg whitespace-nowrap">
            <span>EV Conversion</span>
            <span>⚡</span>
            <span>Prototyping</span>
            <span>⚡</span>
            <span>Edge CAN</span>
            <span>⚡</span>
            <span>Sensors</span>
            <span>⚡</span>
            <span>Motor Control</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      {/* Product Showcase Carousel */}
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
              {productImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
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

          {/* Featured Products - EV Conversion and GRUT */}
          <div className="mb-12 space-y-8">
            {/* EV Conversion Featured Product */}
            <div className="bg-gradient-to-r from-moss-light to-moss-medium rounded-xl overflow-hidden border-l-4 border-l-moss-dark shadow-xl">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop"
                    alt="Electric Vehicle Conversion Kit"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                {/* Content Section */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-6">
                    <Car className="w-16 h-16 text-moss-dark mr-4" />
                    <div>
                      <span className="inline-block bg-moss-dark text-white px-3 py-1 rounded-full text-sm font-medium mb-2">Featured Product</span>
                      <h3 className="text-2xl font-bold text-moss-dark">EV Conversion</h3>
                    </div>
                  </div>
                  <p className="text-moss-dark mb-6 leading-relaxed text-lg">
                    Complete electric vehicle conversion kits and systems for transforming traditional vehicles into efficient electric alternatives. Our comprehensive solutions include motor controllers, battery management systems, and charging infrastructure.
                  </p>
                  <Button 
                    className="bg-moss-dark hover:bg-moss-dark/90 text-white px-6 py-3 text-lg font-semibold rounded-lg"
                  >
                    Learn More About EV Conversion →
                  </Button>
                </div>
              </div>
            </div>

            {/* GRUT Featured Product */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl overflow-hidden border-l-4 border-l-green-600 shadow-xl">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop"
                    alt="Smart Farming GRUT System"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                {/* Content Section */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-6">
                    <Sprout className="w-16 h-16 text-green-700 mr-4" />
                    <div>
                      <span className="inline-block bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">Smart Farming</span>
                      <h3 className="text-2xl font-bold text-green-700">GRUT</h3>
                    </div>
                  </div>
                  <p className="text-green-700 mb-6 leading-relaxed text-lg">
                    Smart Farming product line designed for both indoor and outdoor farming applications. GRUT systems provide comprehensive coverage for large-scale crop monitoring, maintenance, and harvesting operations with autonomous capabilities.
                  </p>
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 text-lg font-semibold rounded-lg"
                  >
                    Explore GRUT Solutions →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.filter(service => !service.featured).map((service, index) => (
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
            {['EV Conversion', 'Prototyping', 'Edge CAN Networks', 'Sensor Integration', 'Motor Control', 'Development Boards', 'Power Systems', 'Communication Networks', 'Actuators', 'Components & Parts', 'Robotics Software'].map((tag, index) => (
              <span key={index} className="bg-moss-medium text-black px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-moss-medium py-4 overflow-hidden">
        <div className="flex animate-pulse justify-center">
          <div className="flex items-center space-x-8 text-black font-bold text-lg whitespace-nowrap">
            <span>EV Conversion</span>
            <span>⚡</span>
            <span>Prototyping</span>
            <span>⚡</span>
            <span>Edge CAN</span>
            <span>⚡</span>
            <span>Sensors</span>
            <span>⚡</span>
            <span>Motor Control</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
