import React from 'react';
import { Clock, Users, Mail, CheckCircle } from 'lucide-react';
import TestimonialSlider from './TestimonialSlider';

const KnowledgeManagementUI = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16 ">
      {/* First Section */}
      <section className="relative flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-xl text-center lg:text-left">
          <div className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs mb-4">
            Ricky
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Knowledge management and LMS platform
          </h1>
          <p className="text-gray-600">
            Build your knowledge base and create impactful online training programs for
            your employees and customers—all through a single platform.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
              Video Classes
              <span className="bg-blue-500 p-1 rounded">→</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:mt-0">
          <img src='brand.png' alt='picc' className='lg:ml-72' />
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="text-pink-500 mb-2">Knowledge Base</div>
          <h2 className="text-3xl font-bold mb-8">
            Build a unified information source
          </h2>
          <div className="space-y-6">
            {['Organise information', 'Work collaboratively', 'Build templates'].map((title, index) => (
              <div key={index} className="flex items-center gap-4">
                
                <div>
                <CheckCircle className="w-6 h-6 rounded-full bg-white"/>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 text-center">
          <img src='chart.png' alt='picc' className='mx-auto' />
        </div>
      </section>

      {/* Third Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-1 text-center">
          <img src='report.png' alt='picc' className='mx-auto' />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <div className="text-pink-500 mb-2">Online LMS</div>
          <h2 className="text-3xl font-bold mb-8">Centralise online training</h2>
          <div className="space-y-6">
            {['Create interactive courses', 'Reinforce learning', 'Gain training insights'].map((title, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 rounded-full bg-white" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <img src='banner.png' alt='picc' className='mx-auto'/>
      <TestimonialSlider/>
    </div>
   
  

  );
};

export default KnowledgeManagementUI;
