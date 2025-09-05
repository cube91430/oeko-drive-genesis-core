
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: '💬',
      url: '#',
      description: 'Join our Discord server for real-time discussions'
    },
    {
      name: 'Reddit',
      icon: '🤖',
      url: '#',
      description: 'Share projects and get help from the community'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: '#',
      description: 'Follow our latest projects and behind-the-scenes'
    },
    {
      name: 'Hugging Face',
      icon: '🤗',
      url: '#',
      description: 'Explore our AI models and datasets'
    },
    {
      name: 'GitHub',
      icon: '⚡',
      url: '#',
      description: 'Contribute to our open-source projects'
    }
  ];

  return (
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
  );
};

export default SocialMediaLinks;
