
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountCreationForm from '@/components/community/AccountCreationForm';
import SocialMediaLinks from '@/components/community/SocialMediaLinks';
import ForumTopics from '@/components/community/ForumTopics';
import OnlineCourses from '@/components/community/OnlineCourses';
import CommunityStats from '@/components/community/CommunityStats';

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
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

        {/* Account Creation Section */}
        <AccountCreationForm />

        {/* Social Media Links */}
        <SocialMediaLinks />

        {/* Community Forums */}
        <ForumTopics />

        {/* Online Courses */}
        <OnlineCourses />

        {/* Community Stats */}
        <CommunityStats />
      </div>

      <Footer />
    </div>
  );
};

export default Community;
