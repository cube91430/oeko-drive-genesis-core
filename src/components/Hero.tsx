
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-moss-dark via-moss-medium to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Dream, Build, Deploy
              </h1>
              <p className="text-xl md:text-2xl text-black leading-relaxed">
                Open Source Modules for System Control, Flexible Analysis, and High Performance Motor Control in Robotics and Physical AI Applications
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-slate-400">
                Empowering the future of robotics with cutting-edge ROS2 compatible modules designed for developers, researchers, and innovators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-moss-light hover:bg-moss-medium text-moss-dark hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-300 text-slate-300 hover:bg-moss-light hover:text-moss-dark hover:border-moss-light px-8 py-3 text-lg font-semibold rounded-lg transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-moss-medium to-moss-dark rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-slate-900 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-moss-light rounded w-3/4"></div>
                    <div className="h-2 bg-moss-medium rounded w-1/2"></div>
                    <div className="h-2 bg-moss-dark rounded w-5/6"></div>
                    <div className="h-2 bg-moss-light rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
