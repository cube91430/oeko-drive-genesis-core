import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Users, Trophy, ExternalLink } from 'lucide-react';

const KardusChallenge = () => {
  return (
    <div className="bg-gradient-to-r from-moss-light to-moss-medium rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Package className="w-8 h-8 text-moss-dark" />
          <Badge variant="outline" className="bg-white/20 text-moss-dark border-moss-dark">
            Open Source Challenge
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-moss-dark mb-4">
          Kardus Challenge
        </h2>
        <p className="text-xl text-moss-dark/90 max-w-3xl mx-auto">
          Build crazy stuff out of a cardboard box or create anything that fits within the size of an ordinary cardboard box. 
          Open to builders, researchers, and anyone ready to think outside the box!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white/10 border-moss-dark/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <Users className="w-8 h-8 text-moss-dark mx-auto mb-2" />
            <CardTitle className="text-moss-dark">Open to Everyone</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-moss-dark/80 text-center">
              Whether you're a builder, researcher, student, or just curious - everyone is welcome to participate
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-moss-dark/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <Package className="w-8 h-8 text-moss-dark mx-auto mb-2" />
            <CardTitle className="text-moss-dark">Size Constraint</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-moss-dark/80 text-center">
              Build with cardboard or create anything that fits within the dimensions of a standard cardboard box
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-moss-dark/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <Trophy className="w-8 h-8 text-moss-dark mx-auto mb-2" />
            <CardTitle className="text-moss-dark">Unlimited Creativity</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-moss-dark/80 text-center">
              Build anything you can imagine - robots, art, gadgets, or completely new inventions
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-moss-dark mb-4">Ready to Build?</h3>
        <p className="text-moss-dark/90 mb-6 max-w-2xl mx-auto">
          Join our community of makers and share your cardboard creations. Get inspired by others and showcase your innovative builds!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-moss-dark hover:bg-moss-dark/90 text-white">
            Join the Challenge
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="bg-white/20 text-moss-dark border-moss-dark hover:bg-white/30">
            View Submissions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KardusChallenge;