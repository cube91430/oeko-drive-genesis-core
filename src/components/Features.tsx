
import React from 'react';
import { Settings, Search, Circle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: "System Control Modules",
      description: "Comprehensive system control solutions designed for robotics applications with real-time performance and reliability."
    },
    {
      icon: Search,
      title: "Flexible Analysis Framework",
      description: "Advanced analytical tools that adapt to your specific use cases, providing deep insights into system performance."
    },
    {
      icon: Circle,
      title: "High Performance Motor Control",
      description: "Precision motor control systems optimized for demanding robotics and physical AI applications."
    },
    {
      icon: Settings,
      title: "ROS2 Integration",
      description: "Seamless integration with ROS2 ecosystem, ensuring compatibility with modern robotics development workflows."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Features</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of open-source modules designed to accelerate your robotics development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
