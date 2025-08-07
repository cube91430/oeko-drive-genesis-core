import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Smartphone, Database, Cloud, Zap, Shield, Cpu, Globe, Layers, FileInput, Plane, Settings, Wrench, Network } from 'lucide-react';

const DesignDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: "Design & Simulation Tools",
      description: "Advanced CAD and simulation software for designing and testing robotic systems and automotive components before physical prototyping.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Smartphone,
      title: "Hardware Design",
      description: "Custom PCB design and electronic hardware development for robotics control systems and automotive sensor networks.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Database,
      title: "Open Source",
      description: "Open-source robotics frameworks and automotive control libraries for accelerated development and community collaboration.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Cloud,
      title: "Reference Design",
      description: "Proven reference architectures and design patterns for robotics applications and automotive control systems.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Zap,
      title: "Performance & Durability",
      description: "Testing and validation solutions for ensuring robotics systems meet performance requirements and automotive durability standards.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Shield,
      title: "Software Design",
      description: "Embedded software architecture and real-time control algorithms for robotics and automotive safety-critical applications.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Cpu,
      title: "Desktop lab and Workshop",
      description: "Hands-on laboratory training programs for robotics research methodologies and automotive system development.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Globe,
      title: "Tools & Software",
      description: "Specialized development tools and software platforms for robotics programming and automotive system integration.",
      accent: "border-l-moss-medium"
    },
    {
      icon: Layers,
      title: "Updates",
      description: "Continuous updates and improvements to research tools, methodologies, and best practices in robotics and automotive development.",
      accent: "border-l-moss-medium"
    }
  ];

  const specializedSections = [
    {
      icon: Plane,
      title: "OekoFly",
      description: "Advanced flight control systems and autonomous drone technology for aerial robotics applications. Features include intelligent navigation, obstacle avoidance, and real-time telemetry systems.",
      color: "from-blue-400 to-blue-600",
      accent: "border-l-blue-500"
    },
    {
      icon: Settings,
      title: "OekoSystem",
      description: "Comprehensive system integration platform for managing complex robotics ecosystems. Provides unified control, monitoring, and coordination across multiple robotic units and IoT devices.",
      color: "from-green-400 to-green-600",
      accent: "border-l-green-500"
    },
    {
      icon: Wrench,
      title: "OekoTools",
      description: "Professional development toolkit featuring specialized hardware and software tools for robotics prototyping, testing, and deployment. Includes debugging interfaces and performance analysis utilities.",
      color: "from-orange-400 to-orange-600",
      accent: "border-l-orange-500"
    },
    {
      icon: Network,
      title: "DAMN Network",
      description: "Decentralized Autonomous Mesh Network (DAMN) provides autonomous edge-to-edge wireless mesh networking for connecting multiple nodes in data silos. Compatible with C2 (Command and Control) and JADC2 (Joint All-Domain Command and Control) systems.",
      color: "from-purple-400 to-purple-600",
      accent: "border-l-purple-500"
    }
  ];

  const developmentImages = [
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      alt: "Circuit Board and Electronic Components",
      title: "Evaluation Boards & Modules",
      link: "#evaluation-boards"
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      alt: "Development Environment and Programming",
      title: "Development Tools & IDE",
      link: "#development-tools"
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      alt: "Hardware Development Setup",
      title: "CAN Network Architecture",
      link: "#can-network"
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      alt: "Software Development and Coding",
      title: "Embedded Software Design",
      link: "#embedded-software"
    },
    {
      url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop",
      alt: "Innovation and Technology",
      title: "Design & Simulation Tools",
      link: "#simulation-tools"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      alt: "Programming and Development",
      title: "Labs Training & Education",
      link: "#labs-training"
    }
  ];

  const handleImageClick = (link: string) => {
    // For now, just scroll to top or handle navigation as needed
    console.log(`Clicked on: ${link}`);
    // You can implement actual navigation or modal opening here
  };

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
          <div className="flex items-center space-x-8 text-black font-bold text-base whitespace-nowrap">
            <span>OekoFly</span>
            <span>⚡</span>
            <span>OekoSystem</span>
            <span>⚡</span>
            <span>OekoTools</span>
            <span>⚡</span>
            <span>Design & Development</span>
            <span>⚡</span>
            <span>Embedded Development</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      {/* Specialized Sections - OekoFly, OekoSystem, OekoTools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-moss-medium">⚡</span>
              <span className="text-gray-600">Specialized Solutions</span>
              <span className="text-moss-medium">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="text-moss-medium">Oeko</span> Product Line
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {specializedSections.map((section, index) => (
              <div key={index} className={`bg-gradient-to-br ${section.color} rounded-xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1`}>
                <div className="mb-6">
                  <section.icon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{section.description}</p>
                <Button 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 font-semibold rounded-lg"
                >
                  Explore {section.title} →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Showcase Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {developmentImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => handleImageClick(image.link)}
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
                      View Details
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">General Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="general-name" className="text-gray-700 font-medium mb-2">Your Name *</Label>
                  <Input 
                    id="general-name"
                    type="text" 
                    className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="general-email" className="text-gray-700 font-medium mb-2">Email *</Label>
                  <Input 
                    id="general-email"
                    type="email" 
                    className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="general-message" className="text-gray-700 font-medium mb-2">Message</Label>
                <Textarea 
                  id="general-message"
                  rows={4}
                  className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-moss-medium hover:bg-moss-dark text-black hover:text-white px-8 py-3 text-lg font-semibold rounded-lg"
              >
                Send Message
              </Button>
            </div>

            {/* Hardware Development Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hardware Development & Manufacturing</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hw-name" className="text-gray-700 font-medium mb-2">Name *</Label>
                    <Input 
                      id="hw-name"
                      type="text" 
                      className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hw-email" className="text-gray-700 font-medium mb-2">Email *</Label>
                    <Input 
                      id="hw-email"
                      type="email" 
                      className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company-name" className="text-gray-700 font-medium mb-2">Company Name</Label>
                    <Input 
                      id="company-name"
                      type="text" 
                      className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="text-gray-700 font-medium mb-2">Nationality</Label>
                    <Input 
                      id="nationality"
                      type="text" 
                      className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                      placeholder="Your nationality"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company-address" className="text-gray-700 font-medium mb-2">Company Address</Label>
                  <Textarea 
                    id="company-address"
                    rows={2}
                    className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                    placeholder="Full company address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service-type" className="text-gray-700 font-medium mb-2">Service Type *</Label>
                    <Select>
                      <SelectTrigger className="focus:ring-2 focus:ring-moss-medium focus:border-transparent">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium mb-2">Subject Line *</Label>
                    <Input 
                      id="subject"
                      type="text" 
                      className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                      placeholder="Brief subject"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="project-description" className="text-gray-700 font-medium mb-2">Project Description *</Label>
                  <Textarea 
                    id="project-description"
                    rows={4}
                    className="focus:ring-2 focus:ring-moss-medium focus:border-transparent"
                    placeholder="Describe your hardware project, requirements, and goals..."
                  />
                </div>

                <div>
                  <Label htmlFor="project-files" className="text-gray-700 font-medium mb-2">Project Files</Label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-moss-medium transition-colors">
                    <div className="space-y-1 text-center">
                      <FileInput className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="project-files" className="relative cursor-pointer bg-white rounded-md font-medium text-moss-medium hover:text-moss-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-moss-medium">
                          <span>Upload files</span>
                          <input id="project-files" name="project-files" type="file" className="sr-only" multiple />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, images up to 10MB each
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-moss-medium hover:bg-moss-dark text-black hover:text-white px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Submit Hardware Inquiry
                </Button>
              </div>
            </div>
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
            {['OekoFly', 'OekoSystem', 'OekoTools', 'React Development', 'Node.js', 'TypeScript', 'Cloud Architecture', 'Mobile Development', 'API Design', 'Database Design', 'DevOps', 'Security', 'Performance'].map((tag, index) => (
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
          <div className="flex items-center space-x-8 text-black font-bold text-base whitespace-nowrap">
            <span>OekoFly</span>
            <span>⚡</span>
            <span>OekoSystem</span>
            <span>⚡</span>
            <span>OekoTools</span>
            <span>⚡</span>
            <span>Design & Development</span>
            <span>⚡</span>
            <span>Embedded Development</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignDevelopment;
