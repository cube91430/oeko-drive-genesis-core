import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Smartphone, Database, Cloud, Zap, Shield, Cpu, Globe, Layers, FileInput, Plane, Settings, Wrench, Network, Satellite, Factory, Wheat, Cog, MapPin, ArrowRight, CheckCircle, X } from 'lucide-react';
import KardusChallenge from '../components/KardusChallenge';

const DesignDevelopment = () => {
  const [isEdgeManufacturingModalOpen, setIsEdgeManufacturingModalOpen] = useState(false);
  const [isOekoFlyModalOpen, setIsOekoFlyModalOpen] = useState(false);
  const [isOekoSystemModalOpen, setIsOekoSystemModalOpen] = useState(false);
  const [isOekoToolsModalOpen, setIsOekoToolsModalOpen] = useState(false);
  const [isDAMNNetworkModalOpen, setIsDAMNNetworkModalOpen] = useState(false);
  const [isGPSDeniedModalOpen, setIsGPSDeniedModalOpen] = useState(false);

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
    },
    {
      icon: Satellite,
      title: "GPS-Denied Architecture",
      description: "Oeko GPS-Denied Architecture, Node, and Module enable robots and sensors to locate and communicate without the use of GPS sensors. Advanced positioning system for environments where GPS is unavailable or compromised.",
      color: "from-red-400 to-red-600",
      accent: "border-l-red-500"
    },
    {
      icon: Factory,
      title: "Edge Manufacturing",
      description: "Edge manufacturing solutions allow users to create resources on the edge, enabling distributed production capabilities and real-time manufacturing processes at the point of need.",
      color: "from-teal-400 to-teal-600",
      accent: "border-l-teal-500"
    }
  ];

  const edgeManufacturingApplications = [
    {
      icon: Network,
      title: "Edge-to-Edge Manufacturing",
      description: "Seamless connection and coordination between distributed manufacturing nodes, enabling real-time production optimization across multiple locations.",
      features: [
        "Real-time production synchronization",
        "Distributed quality control",
        "Cross-location resource sharing",
        "Automated workflow orchestration"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Wheat,
      title: "Edge Farming",
      description: "Localized agricultural production systems that utilize edge computing for precision farming, automated monitoring, and resource optimization.",
      features: [
        "Precision agriculture sensors",
        "Automated irrigation systems",
        "Real-time crop monitoring",
        "Weather-responsive farming"
      ],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Cog,
      title: "Edge Production",
      description: "On-demand manufacturing at the point of consumption, reducing supply chain dependencies and enabling rapid response to local needs.",
      features: [
        "On-demand manufacturing",
        "Local resource utilization",
        "Reduced transportation costs",
        "Rapid prototyping capabilities"
      ],
      color: "from-purple-400 to-purple-600"
    }
  ];

  const edgeManufacturingBenefits = [
    {
      icon: Zap,
      title: "Reduced Latency",
      description: "Process data and make decisions locally, eliminating delays from centralized systems."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Keep sensitive manufacturing data local and reduce exposure to external threats."
    },
    {
      icon: MapPin,
      title: "Location Independence",
      description: "Deploy manufacturing capabilities anywhere, regardless of connectivity to central systems."
    },
    {
      icon: Cpu,
      title: "Resource Efficiency",
      description: "Optimize local resource usage and reduce waste through intelligent edge processing."
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

  const handleExploreClick = (sectionTitle: string) => {
    switch (sectionTitle) {
      case "Edge Manufacturing":
        setIsEdgeManufacturingModalOpen(true);
        break;
      case "OekoFly":
        setIsOekoFlyModalOpen(true);
        break;
      case "OekoSystem":
        setIsOekoSystemModalOpen(true);
        break;
      case "OekoTools":
        setIsOekoToolsModalOpen(true);
        break;
      case "DAMN Network":
        setIsDAMNNetworkModalOpen(true);
        break;
      case "GPS-Denied Architecture":
        setIsGPSDeniedModalOpen(true);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">Design & Development</h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8">
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
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-moss-medium">⚡</span>
              <span className="text-muted-foreground">Specialized Solutions</span>
              <span className="text-moss-medium">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-card-foreground">
              <span className="text-moss-medium">Oeko</span> Product Line
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 mb-20">
            {specializedSections.map((section, index) => (
              <div key={index} className={`bg-gradient-to-br ${section.color} rounded-xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1`}>
                <div className="mb-6">
                  <section.icon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{section.description}</p>
                <Button 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 font-semibold rounded-lg"
                  onClick={() => handleExploreClick(section.title)}
                >
                  Explore {section.title} →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kardus Challenge */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KardusChallenge />
        </div>
      </section>

      {/* Development Showcase Carousel */}
      <section className="py-16 bg-background">
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
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-moss-medium">⚡</span>
              <span className="text-muted-foreground">My Specialization</span>
              <span className="text-moss-medium">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-card-foreground">
              <span className="text-moss-medium">Development Services</span> I Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-muted rounded-lg p-8 border-l-4 ${service.accent} hover:shadow-lg transition-shadow`}>
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
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

      {/* Edge Manufacturing Modal */}
      <Dialog open={isEdgeManufacturingModalOpen} onOpenChange={setIsEdgeManufacturingModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
              <Factory className="w-8 h-8 mr-3 text-primary" />
              Edge Manufacturing Solutions
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center py-8 px-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Manufacturing at the
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Edge</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Enable distributed manufacturing capabilities that bring production closer to consumption points, 
                reducing dependencies and enabling real-time responsiveness to local demands.
              </p>
            </div>

            {/* Applications Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Edge Manufacturing Applications
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {edgeManufacturingApplications.map((app, index) => (
                  <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-5`} />
                    <CardHeader className="relative">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center mb-3`}>
                        <app.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-card-foreground">{app.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">
                        {app.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="space-y-2">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-xs text-card-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Why Choose Edge Manufacturing?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {edgeManufacturingBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Core Capabilities</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-3">
                    <h4 className="font-semibold text-foreground text-sm">Distributed Computing</h4>
                    <p className="text-muted-foreground text-xs">Process manufacturing data locally with edge computing nodes</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-3">
                    <h4 className="font-semibold text-foreground text-sm">Real-time Optimization</h4>
                    <p className="text-muted-foreground text-xs">Continuously optimize production parameters based on local conditions</p>
                  </div>
                  <div className="border-l-4 border-accent pl-3">
                    <h4 className="font-semibold text-foreground text-sm">Autonomous Operation</h4>
                    <p className="text-muted-foreground text-xs">Operate independently even when disconnected from central systems</p>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg font-bold text-card-foreground">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Processing Latency</span>
                    <Badge variant="secondary">&lt; 10ms</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Production Efficiency</span>
                    <Badge variant="secondary">+35%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Resource Utilization</span>
                    <Badge variant="secondary">92%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Uptime Guarantee</span>
                    <Badge variant="secondary">99.9%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Transform Your Manufacturing?
              </h3>
              <p className="text-white/90 mb-4 text-sm">
                Join the edge manufacturing revolution and bring production capabilities directly to your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="sm" variant="secondary">
                  Request Demo
                </Button>
                <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* OekoFly Modal */}
      <Dialog open={isOekoFlyModalOpen} onOpenChange={setIsOekoFlyModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-card-foreground flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-500" />
              OekoFly - Advanced Flight Control Systems
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Autonomous Drone Technology</h2>
              <p className="text-blue-100 mb-6">
                OekoFly provides advanced flight control systems and autonomous drone technology for aerial robotics applications. 
                Features include intelligent navigation, obstacle avoidance, and real-time telemetry systems.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-card-foreground">Intelligent Navigation</h3>
                </div>
                <p className="text-muted-foreground text-sm">Advanced GPS and sensor-based navigation with real-time path planning and waypoint management.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-card-foreground">Obstacle Avoidance</h3>
                </div>
                <p className="text-muted-foreground text-sm">LiDAR and computer vision systems for real-time obstacle detection and collision avoidance.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Satellite className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-card-foreground">Real-time Telemetry</h3>
                </div>
                <p className="text-muted-foreground text-sm">Comprehensive telemetry data transmission with encrypted communication protocols.</p>
              </Card>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Search & Rescue</h4>
                  <p className="text-muted-foreground text-sm">Autonomous search operations in challenging terrains with thermal imaging and GPS tracking.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Agricultural Monitoring</h4>
                  <p className="text-muted-foreground text-sm">Precision agriculture with crop health monitoring and automated surveying capabilities.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Infrastructure Inspection</h4>
                  <p className="text-muted-foreground text-sm">Automated inspection of bridges, power lines, and critical infrastructure components.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Environmental Monitoring</h4>
                  <p className="text-muted-foreground text-sm">Air quality assessment and environmental data collection in remote locations.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* OekoSystem Modal */}
      <Dialog open={isOekoSystemModalOpen} onOpenChange={setIsOekoSystemModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-card-foreground flex items-center gap-3">
              <Settings className="w-8 h-8 text-green-500" />
              OekoSystem - Comprehensive Integration Platform
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Unified Robotics Ecosystem Management</h2>
              <p className="text-green-100 mb-6">
                OekoSystem provides comprehensive system integration platform for managing complex robotics ecosystems. 
                Provides unified control, monitoring, and coordination across multiple robotic units and IoT devices.
              </p>
            </div>

            {/* System Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-card-foreground">Unified Control</h3>
                </div>
                <p className="text-muted-foreground text-sm">Centralized command interface for managing multiple robotic systems simultaneously.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-card-foreground">Real-time Monitoring</h3>
                </div>
                <p className="text-muted-foreground text-sm">Comprehensive monitoring dashboard with performance metrics and system health indicators.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-card-foreground">Multi-Device Coordination</h3>
                </div>
                <p className="text-muted-foreground text-sm">Seamless coordination between robots, sensors, and IoT devices in complex environments.</p>
              </Card>
            </div>

            {/* Integration Capabilities */}
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Integration Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Multi-Protocol Support</h4>
                  <p className="text-muted-foreground text-sm">Compatible with CAN, Ethernet, Wi-Fi, and proprietary communication protocols.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Cloud Integration</h4>
                  <p className="text-muted-foreground text-sm">Seamless cloud connectivity for remote monitoring and data analytics.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">AI-Powered Optimization</h4>
                  <p className="text-muted-foreground text-sm">Machine learning algorithms for predictive maintenance and performance optimization.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Scalable Architecture</h4>
                  <p className="text-muted-foreground text-sm">Modular design supporting systems from single robots to large-scale deployments.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* OekoTools Modal */}
      <Dialog open={isOekoToolsModalOpen} onOpenChange={setIsOekoToolsModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-card-foreground flex items-center gap-3">
              <Wrench className="w-8 h-8 text-orange-500" />
              OekoTools - Professional Development Toolkit
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Complete Robotics Development Suite</h2>
              <p className="text-orange-100 mb-6">
                OekoTools features specialized hardware and software tools for robotics prototyping, testing, and deployment. 
                Includes debugging interfaces and performance analysis utilities for comprehensive development workflow.
              </p>
            </div>

            {/* Tool Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-card-foreground">Development IDE</h3>
                </div>
                <p className="text-muted-foreground text-sm">Integrated development environment with code completion, debugging, and simulation tools.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-card-foreground">Hardware Debugger</h3>
                </div>
                <p className="text-muted-foreground text-sm">Real-time hardware debugging with JTAG support and signal analysis capabilities.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-card-foreground">Performance Analyzer</h3>
                </div>
                <p className="text-muted-foreground text-sm">Comprehensive performance monitoring and bottleneck analysis for optimization.</p>
              </Card>
            </div>

            {/* Development Features */}
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Development Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Rapid Prototyping</h4>
                  <p className="text-muted-foreground text-sm">Quick iteration tools for hardware and software prototyping with modular components.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Automated Testing</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive test automation framework for unit, integration, and system testing.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Version Control Integration</h4>
                  <p className="text-muted-foreground text-sm">Git integration for collaborative development with branching and merging support.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Documentation Generation</h4>
                  <p className="text-muted-foreground text-sm">Automatic documentation generation from code comments and annotations.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* DAMN Network Modal */}
      <Dialog open={isDAMNNetworkModalOpen} onOpenChange={setIsDAMNNetworkModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-card-foreground flex items-center gap-3">
              <Network className="w-8 h-8 text-purple-500" />
              DAMN Network - Decentralized Autonomous Mesh Network
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Edge-to-Edge Wireless Mesh Networking</h2>
              <p className="text-purple-100 mb-6">
                DAMN Network provides autonomous edge-to-edge wireless mesh networking for connecting multiple nodes in data silos. 
                Compatible with C2 (Command and Control) and JADC2 (Joint All-Domain Command and Control) systems.
              </p>
            </div>

            {/* Network Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-card-foreground">Mesh Topology</h3>
                </div>
                <p className="text-muted-foreground text-sm">Self-organizing mesh network with automatic node discovery and routing optimization.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-card-foreground">Secure Communication</h3>
                </div>
                <p className="text-muted-foreground text-sm">End-to-end encryption with military-grade security protocols and authentication.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-card-foreground">Low Latency</h3>
                </div>
                <p className="text-muted-foreground text-sm">Ultra-low latency communication optimized for real-time command and control operations.</p>
              </Card>
            </div>

            {/* Military Applications */}
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Military & Defense Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">C2 Systems Integration</h4>
                  <p className="text-muted-foreground text-sm">Full compatibility with Command and Control systems for tactical operations.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">JADC2 Compliance</h4>
                  <p className="text-muted-foreground text-sm">Joint All-Domain Command and Control integration for multi-domain operations.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Battlefield Networks</h4>
                  <p className="text-muted-foreground text-sm">Resilient communication networks for harsh military environments and contested areas.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Data Silo Connectivity</h4>
                  <p className="text-muted-foreground text-sm">Secure connection of isolated data systems while maintaining operational security.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* GPS-Denied Architecture Modal */}
      <Dialog open={isGPSDeniedModalOpen} onOpenChange={setIsGPSDeniedModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-card-foreground flex items-center gap-3">
              <Satellite className="w-8 h-8 text-red-500" />
              GPS-Denied Architecture - Advanced Positioning System
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Navigation Without GPS Dependency</h2>
              <p className="text-red-100 mb-6">
                Oeko GPS-Denied Architecture, Node, and Module enable robots and sensors to locate and communicate without GPS sensors. 
                Advanced positioning system for environments where GPS is unavailable or compromised.
              </p>
            </div>

            {/* Positioning Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-card-foreground">Inertial Navigation</h3>
                </div>
                <p className="text-muted-foreground text-sm">High-precision IMU systems for dead reckoning and autonomous navigation.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-card-foreground">Mesh Positioning</h3>
                </div>
                <p className="text-muted-foreground text-sm">Collaborative positioning using mesh network triangulation and time-of-flight measurements.</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-card-foreground">SLAM Integration</h3>
                </div>
                <p className="text-muted-foreground text-sm">Simultaneous Localization and Mapping for real-time environment understanding.</p>
              </Card>
            </div>

            {/* Operating Environments */}
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Operating Environments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Underground Operations</h4>
                  <p className="text-muted-foreground text-sm">Navigation in tunnels, mines, and underground facilities where GPS signals are blocked.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Indoor Environments</h4>
                  <p className="text-muted-foreground text-sm">Precise positioning in buildings, warehouses, and enclosed manufacturing facilities.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Contested Areas</h4>
                  <p className="text-muted-foreground text-sm">Operation in environments with GPS jamming or signal interference.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-card-foreground">Maritime Operations</h4>
                  <p className="text-muted-foreground text-sm">Underwater and surface navigation where GPS signals are unavailable or unreliable.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default DesignDevelopment;
