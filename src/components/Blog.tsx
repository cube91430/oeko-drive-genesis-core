
import React from 'react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: "Advanced Motor Control in ROS2 Applications",
      excerpt: "Discover how to implement high-performance motor control systems using our latest modules and ROS2 framework integration.",
      date: "March 15, 2024",
      category: "Technical",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Building Scalable Robotics Systems",
      excerpt: "Learn best practices for designing modular, scalable robotics architectures that can grow with your project requirements.",
      date: "March 10, 2024",
      category: "Architecture",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Real-time Analytics for Physical AI",
      excerpt: "Explore how our flexible analysis framework enables real-time decision making in physical AI applications.",
      date: "March 5, 2024",
      category: "AI",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Open Source Robotics Development",
      excerpt: "The benefits of open source development in robotics and how OekoDrive contributes to the community ecosystem.",
      date: "February 28, 2024",
      category: "Community",
      image: "photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Blog</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tutorials, and developments in robotics and AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-moss-dark to-moss-medium">
                <img 
                  src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=600&h=300`}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-moss-medium font-medium">{post.category}</span>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm" className="text-moss-dark border-moss-medium hover:bg-moss-medium hover:text-white">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
