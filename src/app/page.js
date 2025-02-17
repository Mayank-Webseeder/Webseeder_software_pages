import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PerformanceManagement from './PerformanceManagement';
import DNAHeader from '@/DNAHeader';
import TestimonialSection from './TestimonialSection';
import VideoCarousel from './VideoCarousel';

const HRLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-gray-600">Health DNA Test + Wellness Plans</div>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Deliver exceptional employee experiences
            </h1>
            <p className="text-gray-600 mb-8">
              The world of work is changing rapidly and so should your HR practices.
              webseeder People is a cloud-based HR software crafted to nurture employees,
              quickly adapt to changes, and make HR management agile and effective.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
              REQUEST DEMO
            </button>
          </div>
          <div className="relative">
            <img 
              src="employee.png" 
              alt="HR Dashboard" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core HR Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Core HR simplified</h2>
              <p className="text-gray-600 mb-6">
                Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. 
                Get smarter and more efficient software with features designed to free 
                you from administrative work.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <p>An employee database that scales</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <p>Efficient employee case management</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <p>Smart HR workflows</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <p>Insightful analytics</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
                {/* Sample employee cards */}
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <img src="hr.png" alt="Employee"  />
                  <div>
                    {/* <p className="font-medium">Emma Carter</p> */}
                    {/* <p className="text-sm text-gray-500">emma.carter@example.com</p> */}
                  </div>
                  <div className="ml-auto">
                    {/* <span className="text-sm text-gray-500">California</span> */}
                  </div>
                </div>
                {/* Add more employee cards as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time and Attendance Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Optimise your time and attendance
        </h2>
        <p className='flex items-center justify-center text-center'>Spend less time tracking time and days off. Webseeder People's time and attendance system lets you focus <br/> on employee productivity while accurately tracking work hours and providing error-free reporting.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img 
              src="girl.png" 
              alt="Time tracking" 
              className="w-[500px] rounded-lg h-[550px]"
            />
          </div>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-medium">Track attendance with ease</h3>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium">Schedule shifts effortlessly</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium">Track days off efficiently</h3>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium">Convert time to timesheets</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Management Section */}

      <PerformanceManagement/>
      <DNAHeader/>
      <TestimonialSection/>

      <img src='trust.png' alt='picc'/>

      <VideoCarousel/>
     

      {/* CTA Section */}
      <section className="bg-blue-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Provide an HR experience that your employees will love.
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
                SIGN UP
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              30 day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRLandingPage;