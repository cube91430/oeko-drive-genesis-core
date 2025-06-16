
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-moss-medium to-moss-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-xl text-moss-light mb-8 max-w-2xl mx-auto">
            Join thousands of developers and researchers using OekoDrive modules to create the future of robotics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-moss-dark hover:bg-moss-light px-8 py-3 text-lg font-semibold">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-moss-light hover:text-moss-dark hover:border-moss-light px-8 py-3 text-lg font-semibold">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
