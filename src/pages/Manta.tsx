import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plane, Settings, Wrench, Network, Satellite, Factory, ArrowRight, CheckCircle, X } from 'lucide-react';

const Manta = () => {
  const [isEdgeManufacturingModalOpen, setIsEdgeManufacturingModalOpen] = useState(false);
  const [isOekoFlyModalOpen, setIsOekoFlyModalOpen] = useState(false);
  const [isOekoSystemModalOpen, setIsOekoSystemModalOpen] = useState(false);
  const [isOekoToolsModalOpen, setIsOekoToolsModalOpen] = useState(false);
  const [isDAMNNetworkModalOpen, setIsDAMNNetworkModalOpen] = useState(false);
  const [isGPSDeniedModalOpen, setIsGPSDeniedModalOpen] = useState(false);

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
          <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">Manta Platform</h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8">
            <span>Home</span>
            <span>/</span>
            <span className="text-moss-medium">Manta</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for robotics development, autonomous systems, and edge computing
          </p>
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
            <span>DAMN Network</span>
            <span>⚡</span>
            <span>GPS-Denied Architecture</span>
            <span>⚡</span>
            <span>Edge Manufacturing</span>
            <span>⚡</span>
          </div>
        </div>
      </section>

      {/* Specialized Sections */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-moss-medium">⚡</span>
              <span className="text-muted-foreground">Manta Solutions</span>
              <span className="text-moss-medium">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-card-foreground">
              Advanced Technology Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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

      {/* OekoFly Modal */}
      <Dialog open={isOekoFlyModalOpen} onOpenChange={setIsOekoFlyModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              OekoFly - Advanced Flight Control
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              OekoFly provides cutting-edge flight control systems and autonomous drone technology designed for professional aerial robotics applications.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Available Tools & Resources</h3>
              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-blue-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Flight Controller Firmware</h4>
                      <p className="text-sm text-muted-foreground">Open-source firmware optimized for multi-rotor platforms</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-blue-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Navigation Systems</h4>
                      <p className="text-sm text-muted-foreground">Intelligent waypoint navigation and obstacle avoidance</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* OekoSystem Modal */}
      <Dialog open={isOekoSystemModalOpen} onOpenChange={setIsOekoSystemModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <Settings className="w-8 h-8 text-green-600" />
              OekoSystem - Integration Platform
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              OekoSystem offers comprehensive integration solutions for managing complex robotics ecosystems with unified control and monitoring.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Available Tools & Resources</h3>
              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-green-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">System Integration Tools</h4>
                      <p className="text-sm text-muted-foreground">Unified platform for multi-device coordination</p>
                      <a href="https://github.com/oekOpen/OekoSystem" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm inline-flex items-center gap-1 mt-1">
                        View on GitHub <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-green-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">MPTransceiver</h4>
                      <p className="text-sm text-muted-foreground">Multi-Protocol Transceiver for Dynamic Multi Protocol Communication</p>
                      <a href="https://github.com/oekOpen/MPTransceiver" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm inline-flex items-center gap-1 mt-1">
                        View on GitHub <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* OekoTools Modal */}
      <Dialog open={isOekoToolsModalOpen} onOpenChange={setIsOekoToolsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <Wrench className="w-8 h-8 text-orange-600" />
              OekoTools - Development Toolkit
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              OekoTools provides professional-grade hardware and software tools for robotics prototyping, testing, and deployment.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Available Tools & Resources</h3>
              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-orange-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Development Framework</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive toolkit for rapid prototyping</p>
                      <a href="https://github.com/oekOpen/OekoTools" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline text-sm inline-flex items-center gap-1 mt-1">
                        View on GitHub <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-orange-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">MPTransceiver</h4>
                      <p className="text-sm text-muted-foreground">Analyze, decode, bridge, and translate multiple communication networks</p>
                      <a href="https://github.com/oekOpen/MPTransceiver" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline text-sm inline-flex items-center gap-1 mt-1">
                        View on GitHub <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* DAMN Network Modal */}
      <Dialog open={isDAMNNetworkModalOpen} onOpenChange={setIsDAMNNetworkModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <Network className="w-8 h-8 text-purple-600" />
              DAMN Network - Mesh Networking
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Decentralized Autonomous Mesh Network providing robust edge-to-edge wireless connectivity for distributed systems.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-purple-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Autonomous Mesh Network</h4>
                      <p className="text-sm text-muted-foreground">Self-organizing network for data silos and distributed systems</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-purple-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">C2 & JADC2 Compatible</h4>
                      <p className="text-sm text-muted-foreground">Full compatibility with Command and Control systems</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* GPS-Denied Architecture Modal */}
      <Dialog open={isGPSDeniedModalOpen} onOpenChange={setIsGPSDeniedModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <Satellite className="w-8 h-8 text-red-600" />
              GPS-Denied Architecture
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Advanced positioning system enabling robots and sensors to operate in GPS-denied or GPS-compromised environments.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Capabilities</h3>
              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-red-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Alternative Positioning</h4>
                      <p className="text-sm text-muted-foreground">Precise localization without GPS dependency</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-red-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Robust Communication</h4>
                      <p className="text-sm text-muted-foreground">Maintains connectivity in challenging environments</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edge Manufacturing Modal */}
      <Dialog open={isEdgeManufacturingModalOpen} onOpenChange={setIsEdgeManufacturingModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <Factory className="w-8 h-8 text-teal-600" />
              Edge Manufacturing Solutions
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Distributed manufacturing solutions enabling production at the edge, reducing supply chain dependencies and enabling rapid local production.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Applications</h3>
              <div className="space-y-3">
                <Card className="p-4 border-l-4 border-l-teal-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Edge-to-Edge Manufacturing</h4>
                      <p className="text-sm text-muted-foreground">Seamless coordination between distributed production nodes</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-teal-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">On-Demand Production</h4>
                      <p className="text-sm text-muted-foreground">Manufacture at the point of consumption</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Manta;
