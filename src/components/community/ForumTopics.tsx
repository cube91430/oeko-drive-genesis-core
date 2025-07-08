
import React from 'react';
import { MessageSquare, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ForumTopics = () => {
  const forumTopics = [
    {
      title: 'Open-Source EV Motor Controllers',
      author: 'TechBuilder23',
      replies: 47,
      likes: 89,
      lastActivity: '2 hours ago',
      category: 'Open Source',
      description: 'Discussion about developing open-source motor controllers for EV conversions'
    },
    {
      title: 'Guide: Setting up OekoSystem for Beginners',
      author: 'GreenTechGuru',
      replies: 23,
      likes: 156,
      lastActivity: '4 hours ago',
      category: 'How-to Guide',
      description: 'Step-by-step guide for newcomers to get started with OekoSystem'
    },
    {
      title: 'Battery Management System Development',
      author: 'ElectricEngineer',
      replies: 34,
      likes: 78,
      lastActivity: '1 day ago',
      category: 'Development',
      description: 'Best practices and code reviews for BMS development'
    },
    {
      title: 'OekoFly Integration with Third-party APIs',
      author: 'CodeMaster42',
      replies: 12,
      likes: 45,
      lastActivity: '2 days ago',
      category: 'Development',
      description: 'How to extend OekoFly functionality with external services'
    },
    {
      title: 'Sustainable Manufacturing Practices',
      author: 'EcoInnovator',
      replies: 67,
      likes: 234,
      lastActivity: '3 days ago',
      category: 'Open Source',
      description: 'Sharing sustainable manufacturing techniques and resources'
    },
    {
      title: 'Troubleshooting OekoTools Installation',
      author: 'DevHelper',
      replies: 18,
      likes: 67,
      lastActivity: '1 week ago',
      category: 'How-to Guide',
      description: 'Common installation issues and their solutions'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Open Source':
        return 'bg-moss-light text-moss-dark';
      case 'Development':
        return 'bg-blue-100 text-blue-800';
      case 'How-to Guide':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-moss-dark mb-2">Community Forums</h2>
          <p className="text-slate-600">Discover ongoing discussions and share your knowledge</p>
        </div>
        <Button className="bg-moss-medium hover:bg-moss-dark text-white">
          Start New Discussion
        </Button>
      </div>

      {/* Forum Categories */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Button variant="outline" className="border-moss-medium text-moss-dark hover:bg-moss-light">
          All Topics
        </Button>
        <Button variant="outline" className="hover:bg-moss-light">
          Open Source
        </Button>
        <Button variant="outline" className="hover:bg-moss-light">
          Development
        </Button>
        <Button variant="outline" className="hover:bg-moss-light">
          How-to Guides
        </Button>
      </div>

      {/* Forum Topics */}
      <div className="space-y-4">
        {forumTopics.map((topic, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(topic.category)}`}>
                      {topic.category}
                    </span>
                    <span className="text-sm text-slate-500">{topic.lastActivity}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-moss-dark mb-2 hover:text-moss-medium transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{topic.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs bg-moss-light text-moss-dark">
                          {topic.author.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span>{topic.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{topic.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{topic.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" className="border-moss-medium text-moss-dark hover:bg-moss-light">
          Load More Discussions
        </Button>
      </div>
    </div>
  );
};

export default ForumTopics;
