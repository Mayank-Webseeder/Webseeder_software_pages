import React from 'react';
import { BarChart, LineChart, Activity, Globe, Settings, Code, Shield, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="mb-2 inline-flex items-center rounded-full bg-blue-900/30 px-4 py-2">
          <span className="mr-2">⚡</span>
          <span>Generative Business Intelligence for Analysts</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          GST Billing Software
          <br />
          Built for every business model
        </h1>
        <div className="flex justify-center gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Start your free trial
          </button>
          <button className="flex items-center rounded-lg bg-gray-800 px-6 py-3 font-semibold hover:bg-gray-700">
            <span className="mr-2">▶</span> Watch Video
          </button>
        </div>
      </header>

      {/* Dashboard Preview */}
      <section className="container mx-auto mb-20 px-4">
        <div className="rounded-xl bg-gray-800/50 p-6 shadow-xl">
          <img
            src="dashboard.png" 
            alt="Dashboard Preview" 
            className="w-full rounded-lg"
          />
        </div>
      </section>
      <img src='banner.png' className='h-[380px] w-[1000px] mx-auto' alt='banner'/>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap">
         
          <img src='product.png' className='h-[280px] w-[600px] flex-1' alt='product'/>
          <img src='billing.png'  className='h-[280px] w-[600px] flex-1' alt='product'/>
          <img src='payment.png'  className='h-[280px] w-[600px] flex-1' alt='product'/>
          <img src='buisness.png' className='h-[280px] w-[600px] flex-1' alt='product'/>

          <br/><br/> <br/><br/>

          <img src='brand.png'  className='h-[400px] w-[700px] flex-2' alt='product'/>
          
          
        </div>
      </section>

      {/* Features Grid */}
      

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">The Neuros Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Project management is smoother with Neuros. Its dashboards provide a clear view of progress."
            name="Nathan D. Hall"
            role="Project Lead"
          />
          <TestimonialCard
            quote="Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure alignment."
            name="Naomi K. Johnson"
            role="Product Manager"
          />
          <TestimonialCard
            quote="Real-time data processing with Neuros has changed how we make decisions."
            name="Michael O. Lopez"
            role="Operations Director"
          />
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Experience the difference</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureBox icon={<Shield />} title="Compliance" description="Ensure all your e-invoices are validated and meet GST requirements" />
          <FeatureBox icon={<Zap />} title="Flexibility" description="Support for diverse pricing models and strategic switching" />
          <FeatureBox icon={<Globe />} title="Globalization" description="Craft bespoke dashboards with drag-and-drop functionality" />
          <FeatureBox icon={<Settings />} title="Customization" description="Unparalleled control over modules' appearance and functionality" />
          <FeatureBox icon={<Activity />} title="Automation" description="Streamline workflow with automated processes and reminders" />
          <FeatureBox icon={<Code />} title="Low code" description="Free up your team with our low-code platform" />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => (
  <div className="rounded-xl bg-gray-800/30 p-6 transition-transform hover:scale-105">
    <div className="mb-4 text-blue-500">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureBox = ({ icon, title, description }) => (
  <div className="rounded-lg bg-gray-800/30 p-6">
    <div className="mb-4 text-blue-500">{icon}</div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, name, role }) => (
  <div className="rounded-xl bg-gray-800/30 p-6">
    <p className="mb-6 text-gray-300">{quote}</p>
    <div className="flex items-center">
      <img src="person.png" alt="Avatar" className="mr-3 h-10 w-10 rounded-full" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

export default LandingPage;