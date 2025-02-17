
"use client";

import React, { useState } from 'react';
import Landing from './Landing';
import Features from '@/Features';
import EmployeeDashboard from './EmployeeDashboard';
import TestimonialSlider from './TestimonialSlider';

const LandingPage = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');

  return (
    <div className="min-h-screen bg-white">
      {/* Testimonials Section */}
     <Landing/> <br/>
     <img src='banner.png' alt='banner' className='mx-auto'/>

     <Features/>
     <EmployeeDashboard/>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Choose Plan</h2>
            <h3 className="text-2xl font-bold mb-4">That's Right For You</h3>
            <p className="text-gray-600">Choose plan that works best for you, feel free to contact us</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full ${billingCycle === 'monthly' ? 'bg-emerald-500 text-white' : 'bg-white'}`}
            >
              Bill Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full ${billingCycle === 'yearly' ? 'bg-emerald-500 text-white' : 'bg-white'}`}
            >
              Bill Yearly
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              title="Free"
              description="Have a go and test your superpowers"
              price="0"
              features={[
                "2 Users",
                "2 Files",
                "Public Share & Comments",
                "Chat Support",
                "New income apps"
              ]}
              buttonText="Signup for free"
              variant="default"
            />

            <PricingCard 
              title="Pro"
              description="Experiment the power of infinite possibilities"
              price="8"
              features={[
                "4 Users",
                "All apps",
                "Unlimited editable exports",
                "Folders and collaboration",
                "All incoming apps"
              ]}
              buttonText="Go to pro"
              variant="highlighted"
              savings="Save $50 a year"
            />

            <PricingCard 
              title="Business"
              description="Unveil new superpowers and join the Design League"
              price="16"
              features={[
                "All features of pro plan",
                "Account success Manager",
                "Single Sign-On (SSO)",
                "Co-conception program",
                "Collaboration-Soon"
              ]}
              buttonText="Go to Business"
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <TestimonialSlider/>
    {/* <Component/>  */}
    </div>

    
  );
};

const PricingCard = ({ title, description, price, features, buttonText, variant, savings }) => {
  const isHighlighted = variant === 'highlighted';
  
  return (
    <div className={`rounded-xl p-8 ${isHighlighted ? 'bg-emerald-500 text-white transform scale-105' : 'bg-white'}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className={`mb-6 ${isHighlighted ? 'text-emerald-100' : 'text-gray-600'}`}>{description}</p>
      <div className="text-4xl font-bold mb-2">${price}</div>
      {savings && <p className="text-emerald-100 mb-6">{savings}</p>}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg className={`w-5 h-5 ${isHighlighted ? 'text-white' : 'text-emerald-500'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-3 rounded-lg font-medium ${
          isHighlighted 
            ? 'bg-white text-emerald-500' 
            : 'text-emerald-500 border border-emerald-500'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-4 text-emerald-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CustomizeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export default LandingPage;