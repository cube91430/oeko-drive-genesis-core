import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Bot, Brain, Cpu, CircuitBoard, Clock } from 'lucide-react';

const OnlineCourses = () => {
  const courses = [
    {
      title: "Robotics Fundamentals",
      description: "Learn the basics of robotics engineering, programming, and automation systems.",
      icon: <Bot className="w-6 h-6" />,
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      title: "Artificial Intelligence",
      description: "Explore AI concepts, neural networks, and practical applications in modern technology.",
      icon: <Brain className="w-6 h-6" />,
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      title: "Machine Learning",
      description: "Master ML algorithms, data analysis, and predictive modeling techniques.",
      icon: <Cpu className="w-6 h-6" />,
      duration: "12 weeks",
      level: "Advanced"
    },
    {
      title: "Electronic Design",
      description: "Circuit design, PCB layout, and hardware prototyping for electronic systems.",
      icon: <CircuitBoard className="w-6 h-6" />,
      duration: "6 weeks",
      level: "Beginner"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-moss-dark mb-4">
          Online Courses & Certifications
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
          Master cutting-edge technologies with our comprehensive online courses and earn industry-recognized certifications.
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Clock className="w-5 h-5 text-moss-medium" />
          <Badge variant="outline" className="bg-moss-light/20 text-moss-dark border-moss-medium">
            Coming Soon
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {courses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-moss-light/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4 text-moss-medium">
                {course.icon}
              </div>
              <CardTitle className="text-lg text-moss-dark mb-2">{course.title}</CardTitle>
              <div className="flex justify-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">{course.duration}</Badge>
                <Badge variant="outline" className="text-xs">{course.level}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 text-center">
                {course.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-moss-light to-moss-medium rounded-xl p-8 text-center">
        <BookOpen className="w-12 h-12 text-moss-dark mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-moss-dark mb-4">
          Be the First to Know
        </h3>
        <p className="text-moss-dark mb-6 max-w-2xl mx-auto">
          Our comprehensive online learning platform is currently under development. 
          Join our waitlist to be notified when courses become available and get early access to exclusive content.
        </p>
        <Button className="bg-moss-dark hover:bg-moss-dark/90 text-white">
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};

export default OnlineCourses;