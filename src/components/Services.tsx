
import React from 'react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "System Control Integration",
      description: "Complete integration solutions for complex robotics systems with real-time control capabilities and advanced monitoring.",
      features: ["Real-time Control", "System Monitoring", "Performance Analytics"]
    },
    {
      title: "Custom Module Development",
      description: "Tailored module development services to meet your specific robotics and AI application requirements.",
      features: ["Custom Solutions", "ROS2 Compatible", "Open Source"]
    },
    {
      title: "Performance Optimization",
      description: "Advanced optimization services to enhance your robotics system performance and efficiency.",
      features: ["Performance Tuning", "Resource Optimization", "Scalability Solutions"]
    }
  ];

  return (
    <section className="py-24 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-700 rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 flex-grow">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-slate-400">• {feature}</div>
                  ))}
                </div>
                <Button variant="outline" className="border-slate-300 text-slate-300 hover:bg-slate-600">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
