import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plane, Sprout, Gauge, Battery, MapPin, Wifi, Globe, Clock, Package } from 'lucide-react';

const GRUT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-green-600 text-white">Autonomous Agriculture Line</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 dark:text-green-200 mb-6">GRUT</h1>
          <p className="text-xl text-green-700 dark:text-green-300 max-w-3xl mx-auto mb-8">
            Distributed Smart Farming and Precision Farming solutions for modern agriculture. 
            Our autonomous systems provide real-time 3D monitoring with command and control capabilities accessible anywhere, anytime.
          </p>
        </div>
      </section>

      {/* Autonomous Drones Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">
              Autonomous Quick Deploy Multi-Purpose Drones
            </h2>
            <p className="text-xl text-muted-foreground">
              Advanced aerial solutions for comprehensive farm management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* AG01 Drone */}
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Plane className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-3xl">AG01</CardTitle>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-600">10kg Payload</Badge>
                </div>
                <CardDescription className="text-base">
                  Heavy-duty agricultural drone for large-scale operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Package className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Payload</p>
                      <p className="text-sm text-muted-foreground">8kg - 12kg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Flight Time</p>
                      <p className="text-sm text-muted-foreground">30min - 1 hour</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Battery className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Battery</p>
                      <p className="text-sm text-muted-foreground">6S 16000mAh</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sprout className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Applications</p>
                      <p className="text-sm text-muted-foreground">Spraying, Harvesting</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    Perfect for spraying, carrying harvest, and monitoring large fields of crops with extended flight capabilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AG02 Drone */}
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Plane className="w-8 h-8 text-emerald-600" />
                  <CardTitle className="text-3xl">AG02</CardTitle>
                  <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-600">3kg Payload</Badge>
                </div>
                <CardDescription className="text-base">
                  Compact drone for precision monitoring and analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Package className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold">Payload</p>
                      <p className="text-sm text-muted-foreground">Up to 3kg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold">Portability</p>
                      <p className="text-sm text-muted-foreground">Highly portable</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gauge className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold">Sampling</p>
                      <p className="text-sm text-muted-foreground">Air, Water, Soil</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Wifi className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold">Network</p>
                      <p className="text-sm text-muted-foreground">Open & Isolated</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    Small enough to be carried for remote monitoring with sampling capability. Enables phenotyping by accurately analyzing air, water, and soil composition.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conversion Kit Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-moss-light to-moss-medium rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-moss-dark mb-4">Conversion Kit</h2>
              <p className="text-xl text-moss-dark/90 max-w-3xl mx-auto">
                Transform your existing farming equipment into autonomous integrated systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/20 border-moss-dark/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-moss-dark">AGVs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-moss-dark/80 text-center">
                    Autonomous Ground Vehicles for automated field operations
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/20 border-moss-dark/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-moss-dark">Drones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-moss-dark/80 text-center">
                    Upgrade existing drones with autonomous capabilities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/20 border-moss-dark/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-moss-dark">Ground Sensors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-moss-dark/80 text-center">
                    Integrated sensor networks for comprehensive monitoring
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/20 border-moss-dark/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-moss-dark flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5" />
                    3D Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-moss-dark/80 text-center">
                    Real-time command and control from anywhere
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-moss-dark/90 mb-6">
                Monitor, protect, and control your crops autonomously with complete 3D view in real-time, 
                accessible anywhere and anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GRUT;
