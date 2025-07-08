import React, { useState } from 'react';
import { MessageSquare, Users, Heart, ExternalLink, Mail, Lock, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Community = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Account creation data:', data);
    // Here you would typically handle the account creation
    setShowSignupForm(false);
  };

  const socialLinks = [
    {
      name: 'Discord',
      icon: '💬',
      url: '#',
      description: 'Join our Discord server for real-time discussions',
      members: '2.5K'
    },
    {
      name: 'Reddit',
      icon: '🤖',
      url: '#',
      description: 'Share projects and get help from the community',
      members: '1.8K'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: '#',
      description: 'Follow our latest projects and behind-the-scenes',
      members: '3.2K'
    },
    {
      name: 'Hugging Face',
      icon: '🤗',
      url: '#',
      description: 'Explore our AI models and datasets',
      members: '890'
    },
    {
      name: 'GitHub',
      icon: '⚡',
      url: '#',
      description: 'Contribute to our open-source projects',
      members: '1.5K'
    }
  ];

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
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-moss-dark mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect with developers, makers, and innovators building the future of sustainable technology. 
            Share knowledge, get help, and collaborate on open-source projects.
          </p>
        </div>

        {/* Create Account Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-moss-light to-moss-medium rounded-xl p-8 text-center mb-8">
            <h2 className="text-3xl font-bold text-moss-dark mb-4">Join the Discussion</h2>
            <p className="text-moss-dark mb-6 max-w-2xl mx-auto">
              Create your account to participate in forums, ask questions, share projects, and connect with the community.
            </p>
            
            {!showSignupForm ? (
              <Button 
                onClick={() => setShowSignupForm(true)}
                className="bg-moss-dark hover:bg-moss-medium text-white px-8 py-3 text-lg"
                size="lg"
              >
                <User className="w-5 h-5 mr-2" />
                Create Free Account
              </Button>
            ) : (
              <Card className="max-w-md mx-auto bg-white">
                <CardHeader>
                  <CardTitle className="text-moss-dark">Create Your Account</CardTitle>
                  <CardDescription>Join our community and start participating</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input placeholder="Enter your username" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input type="email" placeholder="Enter your email" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input type="password" placeholder="Create a password" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input type="password" placeholder="Confirm your password" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex gap-2 pt-4">
                        <Button type="submit" className="flex-1 bg-moss-medium hover:bg-moss-dark text-white">
                          Create Account
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setShowSignupForm(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-moss-dark mb-8 text-center">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <CardTitle className="text-lg text-moss-dark">{social.name}</CardTitle>
                  <CardDescription className="text-sm">{social.members} members</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-slate-600 mb-4 text-center">
                    {social.description}
                  </p>
                  <Button 
                    className="w-full bg-moss-medium hover:bg-moss-dark text-white"
                    size="sm"
                  >
                    Join <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Forums */}
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

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-moss-light to-moss-medium rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-moss-dark mb-4">Growing Together</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-moss-dark mb-2">10K+</div>
              <div className="text-moss-dark">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-moss-dark mb-2">500+</div>
              <div className="text-moss-dark">Open Source Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-moss-dark mb-2">2.5K+</div>
              <div className="text-moss-dark">Forum Discussions</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
