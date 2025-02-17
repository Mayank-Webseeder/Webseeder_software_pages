import React from 'react';
import { PlayCircle } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#e6f2ef] p-4 md:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Employee scheduling and time tracking made{' '}
              <span className="relative">
                simple
                <div className="absolute -bottom-2 left-0 w-full">
                  <svg className="w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C40 2.5 140 2.5 199 5.5" stroke="#34D399" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg">
              Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features
              in managing work every day.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-500 transition-colors">
                Try free trial
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <PlayCircle className="w-6 h-6" />
                <span>View Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <img 
                src="tracking.png" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            More than 25,000 teams use Collabs
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;