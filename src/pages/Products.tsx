import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Monitor, Smartphone, Layout, Layers, Lightbulb, Globe, User, Image, Palette, Car, Sprout, Plane, Database } from 'lucide-react';

const Products = () => {

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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">Products</h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8">
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
      <section className="py-16 bg-card">
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

      {/* Main Content Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-moss-medium">⚡</span>
              <span className="text-muted-foreground">Our Specialization</span>
              <span className="text-moss-medium">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-card-foreground">
              <span className="text-moss-medium">Products</span> We Provide
            </h2>
          </div>

          {/* Agricultural Solutions - Top Priority */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 rounded-xl p-8 border-l-4 border-l-green-600">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-4">Agricultural Solutions for Smart & Precision Farming</h2>
                <p className="text-green-700 dark:text-green-300 max-w-3xl mx-auto">
                  Complete autonomous systems for distributed smart farming and precision agriculture, providing real-time 3D monitoring with command and control capabilities accessible anywhere, anytime.
                </p>
              </div>

              {/* Drones Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <Plane className="w-8 h-8 text-green-700 dark:text-green-300 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Autonomous Multi-Purpose Drones</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* AG01 */}
                  <div className="bg-white/80 dark:bg-black/40 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-3">AG01 - Heavy Payload Drone</h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300 mb-4">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Payload:</strong> 10kg capacity (8kg - 12kg range)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Flight Time:</strong> 30 minutes to 1 hour</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Battery:</strong> 6S 16000mAh</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Applications:</strong> Crop spraying, harvest carrying, large field monitoring</span>
                      </li>
                    </ul>
                  </div>

                  {/* AG02 */}
                  <div className="bg-white/80 dark:bg-black/40 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-3">AG02 - Compact Monitoring Drone</h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300 mb-4">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Payload:</strong> 3kg - Portable and lightweight</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Features:</strong> Remote monitoring with sampling capability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Phenotyping:</strong> Analyzes air, water, and soil composition accurately</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Connectivity:</strong> Open and isolated network relay capability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* GRUT - Integrated into Agricultural Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <Sprout className="w-8 h-8 text-green-700 dark:text-green-300 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">GRUT - Smart Farming System</h3>
                </div>
                <div className="bg-white/80 dark:bg-black/40 rounded-lg p-6 shadow-md">
                  <p className="text-green-700 dark:text-green-300 mb-4">
                    Smart Farming product line designed for both indoor and outdoor farming applications. GRUT systems provide comprehensive coverage for large-scale crop monitoring, maintenance, and harvesting operations with autonomous capabilities.
                  </p>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Indoor and outdoor farming applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Large-scale crop monitoring and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Autonomous harvesting operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Comprehensive field coverage</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Conversion Kit Section */}
              <div>
                <div className="flex items-center mb-6">
                  <Car className="w-8 h-8 text-green-700 dark:text-green-300 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Autonomous Conversion Kit</h3>
                </div>
                <div className="bg-white/80 dark:bg-black/40 rounded-lg p-6 shadow-md">
                  <p className="text-green-700 dark:text-green-300 mb-4">
                    Transform your farming equipment into a fully autonomous integrated system. Our conversion kits support AGVs, Drones, and Ground Sensors to create a complete ecosystem for monitoring, protecting, and controlling crops autonomously.
                  </p>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Complete 3D real-time monitoring and visualization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Command and control from anywhere, anytime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Seamless integration with existing farming equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Autonomous operation for maximum efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Logger Section - Separate */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-xl p-8 border-l-4 border-l-blue-600">
              <div className="flex items-center mb-8">
                <Database className="w-10 h-10 text-blue-700 dark:text-blue-300 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200">Data Loggers & Debuggers</h2>
                  <p className="text-blue-700 dark:text-blue-300 mt-2">
                    Professional-grade data logging and debugging tools designed for researchers and developers. Multi-communication and multi-protocol support for comprehensive data analysis.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Manta01 */}
                <div className="bg-white/80 dark:bg-black/40 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">Manta01 - Physical Connection Logger</h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Multi-communication and multi-protocol logging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Supports RS485, RS232, CAN protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Bridge data from different protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Direct physical connection for reliable data capture</span>
                    </li>
                  </ul>
                </div>

                {/* MantaNet */}
                <div className="bg-white/80 dark:bg-black/40 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">MantaNet - Wireless Logger System</h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Wireless viewing and programming capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Includes Transceiver and Receiver modules</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Range:</strong> Up to 10km at 2.4GHz</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Latency:</strong> Ultra-low 2ms response time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* EV Conversion - Moved to Bottom */}
          <div>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background text-foreground text-center">
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
