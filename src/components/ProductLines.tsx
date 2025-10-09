import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sprout, Database } from 'lucide-react';

const ProductLines = () => {
  return (
    <section id="product-lines" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Product Lines</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions for autonomous agriculture and industrial data systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GRUT - Autonomous Agriculture */}
          <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-green/10 to-tech-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-tech-green/20 rounded-xl flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-tech-green" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">GRUT</h3>
                  <p className="text-sm text-tech-green font-mono">Global Robotic Unit Technology</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revolutionary autonomous agriculture solutions featuring advanced drones and conversion kits. 
                GRUT transforms traditional farming into smart, precision-controlled operations with real-time 
                3D monitoring and autonomous capabilities for spraying, monitoring, and harvesting.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="tech-readout bg-muted/50 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-1">Drone Models</div>
                  <div className="text-lg font-bold text-tech-green">AG01 • AG02</div>
                </div>
                <div className="tech-readout bg-muted/50 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-1">Coverage</div>
                  <div className="text-lg font-bold text-tech-cyan">Autonomous</div>
                </div>
              </div>

              <Link to="/grut">
                <Button 
                  className="w-full bg-tech-green hover:bg-tech-green/80 text-background font-semibold group-hover:scale-105 transition-transform"
                >
                  Explore GRUT Solutions
                </Button>
              </Link>
            </div>
          </div>

          {/* MANTA - Industrial Data & Manufacturing */}
          <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 to-tech-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-tech-cyan/20 rounded-xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-tech-cyan" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">MANTA</h3>
                  <p className="text-sm text-tech-cyan font-mono">Multi-Protocol Analysis Network</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprehensive industrial ecosystem featuring OekoFly sensors, OekoSystem integration, 
                OekoTools development suite, DAMN Network infrastructure, GPS-denied navigation, and 
                edge manufacturing capabilities for complete industrial automation solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="tech-readout bg-muted/50 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-1">Components</div>
                  <div className="text-lg font-bold text-tech-cyan">Oeko Suite</div>
                </div>
                <div className="tech-readout bg-muted/50 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-1">Network</div>
                  <div className="text-lg font-bold text-tech-purple">DAMN</div>
                </div>
              </div>

              <Link to="/manta">
                <Button 
                  className="w-full bg-tech-cyan hover:bg-tech-cyan/80 text-background font-semibold group-hover:scale-105 transition-transform"
                >
                  Explore MANTA Systems
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLines;