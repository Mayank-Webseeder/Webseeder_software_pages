"use client";
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-sm text-gray-600 mb-2">
            GST compliant accounting software
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Comprehensive accounting platform for growing businesses
          </h1>
          <p className="text-gray-600 mb-8">
            Manage end-to-end accounting—from banking & e-invoicing to inventory
            & payroll with the best accounting software in India.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-md w-full sm:w-auto">
              Start for free
            </button>
            <button className="text-black w-full sm:w-auto">
              Talk to sales
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="lady.png"
            alt="Dashboard Preview"
            className="w-[600.37px] h-[500.35px]  max-w-lg sm:max-w-xl lg:max-w-none h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <img src="banner.png" alt="picc" className="mx-auto" />

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Heading & Description */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Perfect Balance of Features and Affordability
            </h2>
            <p className="text-gray-600 mb-8">
              Gain deeper insights with advanced business intelligence
              capabilities.
            </p>

            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Get Started
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-bold mb-2">STANDARD</h3>
              <p className="text-sm text-gray-600">
                Confidently take on projects, track your inventory, and handle
                purchases.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-bold mb-2">PREMIUM</h3>
              <p className="text-sm text-gray-600">
                Enhanced customization and automation to streamline business
                processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-bold mb-2">ULTIMATE</h3>
              <p className="text-sm text-gray-600">
                Gain deeper insights with advanced business intelligence
                capabilities.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-12 flex justify-center">
          <img
           src="graph.png"
            alt="picc"
            className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Product Push Section */}
      <section className="relative py-16 sm:py-24 w-full">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 text-white p-10 sm:p-12 md:p-16 rounded-2xl relative overflow-hidden w-full max-w-4xl mx-auto">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="product.png"
                alt="Background"
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            {/* Content Section */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Push your product to the next level.
              </h2>
              <p className="text-sm sm:text-base mb-6 sm:mb-8">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize your vision.
              </p>

              <button className="bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "GST compliance",
                description:
                  "Generate e-invoice, e-Way bills, and delivery challans. Calculate liabilities automatically.",
              },
              {
                icon: "🌷",
                title: "Accounting Across Devices",
                description:
                  "Whether you're on the web, smartphone or desktop. It sends quotes after meeting.",
              },
              {
                icon: "☀",
                title: "Connected banking",
                description:
                  "Simplify online payment. Reconcile, and fetch bank feeds effortlessly.",
              },
              {
                icon: "🏆",
                title: "Automation",
                description:
                  "Trigger emails or notifications for reminders or alerts. Set recurring actions.",
              },
              {
                icon: "🌷",
                title: "Sell globally",
                description:
                  "Manage foreign transactions with our multi-currency feature. Apply exchange rates.",
              },
              {
                icon: "☀",
                title: "Customization",
                description:
                  "Customize Webseeder books to suit your business with templates and fields.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                <button className="text-green-600 text-sm font-medium hover:underline">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src="text.png" alt="picc" className="mx-auto" />
      <img src="flowchart.png" alt="picc" className="mx-auto my-auto" />

      {/* Blog Section */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold">Featured</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
        See All Blog Posts
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="col-span-1">
        <div className="space-y-8">
          <div className="relative flex gap-2 flex-col lg:flex-row">
            <div className="flex-1">
              <img
                src="blog.png"
                alt="Blog Post"
                className="w-full lg:w-[378px] h-auto lg:h-[270px] rounded-lg"
              />
              <span>08-11-2021</span>
              <span className="mx-2">•</span>
              <span>Category</span>
              <h3 className="text-xl font-bold mb-2">
                Believing neglected so allowance existence departure.
              </h3>
              <p className="text-gray-600">
                Blessing welcomed ladyship she met humoured sir breeding
                her. Six curiosity day assurance bed necessary.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="human.png"
                alt="Blog Post"
                className="w-full lg:w-[378px] h-auto lg:h-[270px] rounded-lg"
              />
              <span>08-11-2021</span>
              <span className="mx-2">•</span>
              <span>Category</span>
              <h3 className="text-xl font-bold mb-2">
                Believing neglected so allowance existence departure.
              </h3>
              <p className="text-gray-600">
                Blessing welcomed ladyship she met humoured sir breeding
                her. Six curiosity day assurance bed necessary.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-600 mb-2"></div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex gap-4 items-center">
              <img
                src="b4.png"
                alt="Blog thumbnail"
                className="w-24 h-24 rounded-lg"
              />
              <div>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <span>08-11-2021</span>
                  <span className="mx-2">•</span>
                  <span>Category</span>
                </div>
                <h3 className="font-bold">
                  Do believing oh disposing to supported allowance we.
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default LandingPage;
