
import React from 'react';
import { Package, Cpu, Wrench, Battery } from 'lucide-react';

const LocalBuildStats = () => {
  const buildStats = [
    {
      icon: Package,
      label: 'Control Modules',
      percentage: 87,
      color: 'bg-moss-medium'
    },
    {
      icon: Cpu,
      label: 'Processing Units',
      percentage: 92,
      color: 'bg-moss-dark'
    },
    {
      icon: Wrench,
      label: 'Assembly Parts',
      percentage: 78,
      color: 'bg-moss-light'
    },
    {
      icon: Battery,
      label: 'Power Systems',
      percentage: 85,
      color: 'bg-moss-medium'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Local Manufacturing Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proudly built with locally sourced components to support sustainable development and reduce environmental impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {buildStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.percentage}%
                </div>
                <div className="text-sm font-medium text-slate-600 mb-3">
                  {stat.label}
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-moss-medium rounded-full">
            <span className="text-lg font-semibold text-slate-900">
              Average Local Component Usage: 86%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalBuildStats;
