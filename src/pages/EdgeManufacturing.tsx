import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Factory, Wheat, Cog, Network, MapPin, Zap, Shield, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

const EdgeManufacturing = () => {
  const applications = [
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

  const benefits = [
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Factory className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Edge Manufacturing Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Manufacturing at the
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Edge</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Enable distributed manufacturing capabilities that bring production closer to consumption points, 
            reducing dependencies and enabling real-time responsiveness to local demands.
          </p>
          
          <Button size="lg" className="mr-4">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Edge Manufacturing Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how edge manufacturing transforms production across different domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-5`} />
                <CardHeader className="relative">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center mb-4`}>
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground">{app.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-3">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Edge Manufacturing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Edge manufacturing provides significant advantages over traditional centralized production models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Capabilities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Distributed Computing</h4>
                  <p className="text-muted-foreground">Process manufacturing data locally with edge computing nodes</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground">Real-time Optimization</h4>
                  <p className="text-muted-foreground">Continuously optimize production parameters based on local conditions</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">Autonomous Operation</h4>
                  <p className="text-muted-foreground">Operate independently even when disconnected from central systems</p>
                </div>
                <div className="border-l-4 border-muted-foreground pl-4">
                  <h4 className="font-semibold text-foreground">Scalable Architecture</h4>
                  <p className="text-muted-foreground">Easily expand manufacturing capabilities across multiple edge locations</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Processing Latency</span>
                  <Badge variant="secondary">&lt; 10ms</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Production Efficiency</span>
                  <Badge variant="secondary">+35%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Resource Utilization</span>
                  <Badge variant="secondary">92%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Uptime Guarantee</span>
                  <Badge variant="secondary">99.9%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the edge manufacturing revolution and bring production capabilities directly to your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeManufacturing;