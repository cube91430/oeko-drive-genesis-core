
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const projects = [
    { id: 1, title: "Autonomous Navigation System", category: "SYSTEM", image: "photo-1531297484001-80022131f5a1" },
    { id: 2, title: "Motor Control Interface", category: "MOTOR", image: "photo-1487058792275-0ad4aaf24ca7" },
    { id: 3, title: "Sensor Integration Module", category: "SENSOR", image: "photo-1498050108023-c5249f4df085" },
    { id: 4, title: "Real-time Analytics Dashboard", category: "ANALYTICS", image: "photo-1461749280684-dccba630e2f6" },
    { id: 5, title: "ROS2 Communication Bridge", category: "SYSTEM", image: "photo-1486312338219-ce68d2c6f44d" },
    { id: 6, title: "Precision Control Algorithm", category: "MOTOR", image: "photo-1488590528505-98d2b5aba04b" },
    { id: 7, title: "Data Processing Pipeline", category: "ANALYTICS", image: "photo-1473091534298-04dcbce3278c" },
    { id: 8, title: "Hardware Abstraction Layer", category: "SYSTEM", image: "photo-1519389950473-47ba0277781c" }
  ];

  const filters = ['ALL', 'SYSTEM', 'MOTOR', 'SENSOR', 'ANALYTICS'];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of innovative robotics and AI solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-slate-800 text-white" : "text-slate-600 hover:text-slate-800"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-slate-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-muted to-muted-foreground relative">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=400&h=300`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-background bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-moss-medium hover:bg-moss-dark text-black hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground text-sm">{project.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
