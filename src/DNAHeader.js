import React from 'react';
// import { Card } from '@/components/ui/card';

const DNAHeader = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Title Section */}
      
        <h1 className="text-4xl md:text-2xl text-gray-700 text-center">
          Yes, We really are the only direct to consumer DNA test that includes health recommendations based on your genetic results.
        </h1>
      

      {/* Image Placeholder */}
      <div className="w-full aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
        <img 
          src="dna.png" 
          alt="DNA Test Comparison" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default DNAHeader;