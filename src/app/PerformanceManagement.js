import React from 'react';

const PerformanceManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-6 p-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Performance management at its best
              </h1>
              <p className="text-gray-600 mb-6">
                Enrich the talent that nurtures your business. Get insight on how each team is performing, every individual's skills and potential, and the ways you can improve organisational performance.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  'Flexible goal setting and KRA mapping',
                  'Continuous reviews and performance appraisals',
                  '360-degree feedback',
                  'Analytics to identify performance gaps'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-700">{index + 1}.</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300 mt-4">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Section - Single Large Image */}
          <div className="flex justify-center items-center p-4">
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="management.png" 
                alt="Performance Management"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceManagement;