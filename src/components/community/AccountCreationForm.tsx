
import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const AccountCreationForm = () => {
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

  return (
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
  );
};

export default AccountCreationForm;
