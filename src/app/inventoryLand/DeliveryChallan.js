import React from 'react';

const DeliveryChallan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-4 sm:p-6 md:p-8">
        {/* Left Content Section */}
        <div className="w-full lg:w-5/12 xl:w-4/12 pt-8 lg:pt-0">
          <div className="max-w-xl lg:max-w-none">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              Issue Delivery Challan
            </h1>
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8">
              Delivery challans created in Zoho Inventory follow all the GST format
              requirements, and the item details are auto-filled automatically during
              creation.
            </p>
            
            <div className="space-y-5 mb-8 lg:mb-10">
              <div className="flex items-start space-x-4">
                <span className="text-green-600 text-lg shrink-0">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">Select the customer name</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-600 text-lg shrink-0">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">Decide the challan number and type</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-600 text-lg shrink-0">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">Select the item details</span>
              </div>
            </div>
            
            <button className="w-full sm:w-auto px-6 py-3 text-white bg-green-700 rounded-md hover:bg-green-800 transition-colors duration-200 text-sm sm:text-base font-medium">
              Get a demo
            </button>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="w-full lg:w-6/12 xl:w-5/12">
          <div className="relative w-full max-w-[480px] mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-green-300 via-green-500 to-green-700 relative">
                {/* Decorative wave pattern */}
                <div className="absolute inset-0 opacity-70">
                  <div className="w-full h-full bg"></div>
                </div>
                
                {/* Floating card effect */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="w-3/4 h-2 bg-white bg-opacity-40 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-white bg-opacity-30 rounded-full mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryChallan;