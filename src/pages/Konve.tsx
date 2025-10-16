import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog, Gauge, Cpu, Radio, Wrench, Tractor, Sprout, Package } from 'lucide-react';

const Konve = () => {
  const conversionKits = [
    {
      id: 'konve-ag',
      name: 'Konve AG',
      icon: Tractor,
      description: 'Complete autonomous conversion kit for tractors and harvesters',
      features: [
        'AGV control system integration',
        'Autonomous navigation sensors',
        'Path planning software',
        'Remote monitoring interface',
        'Safety override systems'
      ],
      compatibility: ['Tractors', 'Combine Harvesters', 'Sprayers'],
      price: 'Custom Quote'
    },
    {
      id: 'konve-monitor',
      name: 'Konve Monitor',
      icon: Sprout,
      description: 'Lightweight kit for crop monitoring equipment',
      features: [
        'Multi-spectral camera integration',
        'GPS waypoint navigation',
        'Real-time data transmission',
        'Soil sensor compatibility',
        'Weather station sync'
      ],
      compatibility: ['Small Tractors', 'ATVs', 'Utility Vehicles'],
      price: 'Custom Quote'
    },
    {
      id: 'konve-harvest',
      name: 'Konve Harvest',
      icon: Package,
      description: 'Specialized kit for harvesting equipment automation',
      features: [
        'Crop detection AI',
        'Yield mapping sensors',
        'Automated height adjustment',
        'Bin level monitoring',
        'Fleet coordination'
      ],
      compatibility: ['Harvesters', 'Pickers', 'Balers'],
      price: 'Custom Quote'
    }
  ];

  const components = [
    {
      icon: Cpu,
      title: 'Control Unit',
      description: 'Industrial-grade computer with AI processing capabilities'
    },
    {
      icon: Radio,
      title: 'Communication Module',
      description: 'Mesh network adapter for seamless fleet coordination'
    },
    {
      icon: Gauge,
      title: 'Sensor Array',
      description: 'LiDAR, cameras, and proximity sensors for safe navigation'
    },
    {
      icon: Wrench,
      title: 'Mechanical Interface',
      description: 'Custom mounting and control integration for your equipment'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-tech-green/5 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1 bg-tech-green/10 rounded-full mb-4">
                <span className="text-tech-green text-sm font-semibold">CONVERSION KITS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Konve: Transform Your Fleet
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Convert your existing farming equipment into autonomous ground vehicles. 
                Retrofit your tractors, harvesters, and monitors with cutting-edge automation 
                for precision farming, crop monitoring, and efficient harvesting.
              </p>
            </div>
          </div>
        </section>

        {/* What is Konve Section */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Modernize Without Replacing
                </h2>
                <p className="text-muted-foreground mb-4">
                  Konve conversion kits bring autonomous capabilities to your existing equipment. 
                  Instead of purchasing expensive new machinery, upgrade what you already own with 
                  our modular, retrofittable systems.
                </p>
                <p className="text-muted-foreground mb-4">
                  Each kit is designed for easy installation and seamless integration with Manta's 
                  mesh network, allowing your entire fleet to work together intelligently.
                </p>
                <Button className="mt-4">Request a Consultation</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {components.map((component) => (
                  <Card key={component.title} className="border-border">
                    <CardHeader>
                      <component.icon className="h-8 w-8 text-tech-green mb-2" />
                      <CardTitle className="text-lg">{component.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{component.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Kits Lineup */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Conversion Kit Lineup
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the right kit for your equipment type and farming needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {conversionKits.map((kit) => (
                <Card key={kit.id} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-tech-green/10 rounded-lg flex items-center justify-center mb-4">
                      <kit.icon className="h-6 w-6 text-tech-green" />
                    </div>
                    <CardTitle className="text-xl">{kit.name}</CardTitle>
                    <CardDescription>{kit.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {kit.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-tech-green mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Compatible With:</h4>
                      <div className="flex flex-wrap gap-2">
                        {kit.compatibility.map((item, idx) => (
                          <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">Pricing: {kit.price}</p>
                      <Button className="w-full" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Simple Installation Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get your equipment autonomous in four straightforward steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Assessment', desc: 'We evaluate your equipment and recommend the best kit' },
                { step: '02', title: 'Customization', desc: 'Kit is tailored to your specific make and model' },
                { step: '03', title: 'Installation', desc: 'Professional installation by certified technicians' },
                { step: '04', title: 'Training', desc: 'Comprehensive training on system operation and maintenance' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-tech-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-tech-green">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-tech-green/10 via-background to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Upgrade Your Equipment?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your conversion needs and get a custom quote for your fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-tech-green hover:bg-tech-green/90">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Konve;
