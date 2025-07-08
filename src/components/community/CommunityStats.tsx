
import React from 'react';

const CommunityStats = () => {
  return (
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
  );
};

export default CommunityStats;
