import { Calendar, Clock, Users, Video, Database, Settings } from 'lucide-react';
import React from 'react';

const SchedulingApp = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* First Section - Hero with Image */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Online appointment scheduling
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Powerful, flexible and data-driven, Webseeder makes it easy to build the exact CRM your business needs.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Start for free
            </button>
          </div>
          
          {/* Right side - Image Placeholder */}
          <div className="w-full h-full">
            <img 
              src="appoinment.png" 
              alt="Scheduling Interface" 
              className="w-[501px] h-[473px] ml-[77px] mb-2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <img src="tablo.png" 
     alt="picc" 
     className="w-full h-auto mx-auto max-w-screen-lg sm:w-auto sm:max-h-[80vh] object-contain" />


      {/* Second Section - Features Grid */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gray-400">And so much</span>
            <span className="text-white"> more...</span>
          </h2>
          <p className="text-gray-400 mb-12">Scheduling app that works 24/7 for your <br/>business!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Booking Page",
                description: "Create a customized page that shows your booking availability. Customers can choose their preferred date and time to schedule an appointment.",
                 image:"image1.png"
              },
              {
                title: "Team Scheduling",
                description: "Share your team's collective availability and have clients choose their favorite staff member—or assign someone for them automatically.",
                 image:"image2.png"
              },
              {
                title: "Scheduling Rules",
                description: "Set up scheduling rules like cancellation windows, time zone presets, and scheduling intervals to get booked based on your preferences.",
                 image:"image3.png"
              },
              {
                title: "Calendar Sync",
                description: "Sync your schedules by connecting your Google Calendar, Outlook Calendar, or Zoho Calendar, and never worry about getting double-booked.",
                image:"image4.png"
              },
              {
                title: "Meet Online",
                description: "Integrate video calling tools like Zoom, Google Meet, MS Teams, and Zoho Meeting to meet your customers online.",
                 image:"image5.png"
              },
              {
                title: "Update your CRM",
                description: "Push leads to your CRM software and nurture them with meetings. Use our Zoho CRM integration or connect to your favorite CRM app with Zapier or Zoho Flow.",
                image:"image6.png"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <img src={feature.image} alt={feature.title} className="w-full h-20 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section - Users Count and Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Join 12 million users</h2>
              <p className="text-gray-600">who grow their business with webseeder</p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-md">
                  Start for free
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-md">
                  Talk to sales
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img src='banner.png' alt='picc'/>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Testimonials */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gray-400">Loved by</span>
            <span className="text-white"> Builders.</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Webseeder is the customer relationship management tool for everyone who values collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sebastien Debrouwere",
                handle: "@sebastien",
                content: "We use @attio on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI"
              },
              {
                name: "Alex Smith",
                handle: "@alex",
                content: "As an early stage startup I'm really loving using @attio - great balance of flexibility and prescriptiveness"
              },
              {
                name: "Villa Gouse",
                handle: "@villa_gouse",
                content: "Let's be honest, most CRMs suck. Overcomplicated, expensive, and you have to bend to their will. I am a huge fan of @attio - their product is rock-solid, customer support is AAA, and it is *very* flexible and simple."
              },
              {
                name: "Sebastien Debrouwere",
                handle: "@sebastien",
                content: "We use @attio on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI"
              },
              {
                name: "Alex Smith",
                handle: "@alex",
                content: "As an early stage startup I'm really loving using @attio - great balance of flexibility and prescriptiveness"
              },
              {
                name: "Villa Gouse",
                handle: "@villa_gouse",
                content: "Let's be honest, most CRMs suck. Overcomplicated, expensive, and you have to bend to their will. I am a huge fan of @attio - their product is rock-solid, customer support is AAA, and it is *very* flexible and simple."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-full" />
                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulingApp;