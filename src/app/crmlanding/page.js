"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Crmlanding() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="py-6 text-center text-blue-500 text-lg font-medium">
        Header
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        {/* New Feature Tag */}
        <div className="flex items-center bg-white px-4 py-1 rounded-full w-fit">
          <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
            New
          </span>
          <p className="text-gray-700 text-sm ml-3">
            How Pallet uses Webseeder to power their GTM →
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          Customer <br />
          <span className="text-gray-700">relationship magic.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-4 px-2 md:px-0">
          Powerful, flexible, and data-driven, Webseeder makes it easy to build
          the exact CRM your business needs.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium">
            Start for free
          </button>
          <button className="bg-gray-200 px-6 py-3 rounded-md font-medium">
            Request a demo
          </button>
        </div>
      </section>

      {/* CRM Dashboard Image */}
      <div className="flex justify-center mt-10">
        <Image
          src="/crmdash.png"
          alt="CRM Dashboard"
          width={600}
          height={350}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Trusted Companies */}
      <section className="mt-16 px-6">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-6 md:gap-10">
          {/* Left Side - Heading & Paragraph */}
          <div className="text-gray-900 md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold leading-tight">
              Trusted by Many <br /> Established Companies
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              25+ Businesses and Companies use Webseeder for their CRM needs.
            </p>
          </div>

          {/* Right Side - Company Logos */}
          <div className="md:w-1/2 flex flex-wrap justify-center md:justify-end gap-6">
            <div className="grid grid-cols-3 gap-4">
              <Image
                width={30}
                height={20}
                src="/cmplogo2 (6).png"
                alt="Coinbase"
                className="h-10 w-auto"
              />
              <Image
                width={30}
                height={20}
                src="/cmplogo2 (5).png"
                alt="Dropbox"
                className="h-10 w-auto"
              />
              <Image
                width={30}
                height={20}
                src="/cmplogo2 (4).png"
                alt="Google"
                className="h-10 w-auto"
              />
              <Image
                width={30}
                height={20}
                src="/cmplogo2 (3).png"
                alt="Slack"
                className="h-10 w-auto"
              />
              <Image
                width={30}
                height={20}
                src="/cmplogo2 (2).png"
                alt="Square"
                className="h-10 w-auto"
              />
              <Image
                width={30}
                height={20}
                src="/cmplogo2 (1).png"
                alt="Zoom"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-4xl mx-auto mt-16 px-4 grid md:grid-cols-2  items-center">
        <Image
          src="/human.png"
          alt="Frustrated Client"
          width={350}
          height={250}
          className="rounded-lg"
        />
        <div>
          <h3 className="text-xs text-blue-500 font-semibold mb-20">
            ABOUT US
          </h3>
          <h2 className="text-xl font-bold text-gray-900 mt-2">
            Do you keep getting frustrated with managing your client needs and
            employee deadlines?
          </h2>
          <p className="text-gray-600 mt-3 text-sm">
            Learn how an AI-powered CRM system can solve your business
            challenges and improve overall productivity.
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-12 px-4 flex justify-center">
        <div className="bg-gradient-to-r from-purple-500 to-red-500 rounded-xl text-white px-12 py-16 w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 shadow-lg">
          {/* Left Content - AI Job Booking Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h4 className="text-sm font-medium uppercase">AI CRM</h4>
            <h3 className="text-4xl font-bold mt-4 leading-tight">
              Book jobs faster with <br /> artificial intelligence
            </h3>
            <p className="mt-5 text-lg text-white/90">
              Secure more jobs with AI-powered customer relationship management
              tools designed to help you grow.
            </p>
          </div>

          {/* Right Content - Messages Box  */}
          <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 md:w-1/2 w-full relative">
            <div className="p-4 border-b flex justify-between items-center">
              <h4 className="font-semibold">Messages</h4>
              <button className="text-blue-500 text-sm">View all</button>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="py-4"
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {/* Message Slide 1 */}
              <SwiperSlide>
                <div className="p-4 border-b">
                  <p className="text-gray-700 font-medium">
                    Welcome to Hair Haven - Your First Job...
                  </p>
                  <span className="text-xs text-gray-500">7:30 am</span>
                </div>
              </SwiperSlide>

              {/* Message Slide 2 */}
              <SwiperSlide>
                <div className="p-4 border-b">
                  <p className="text-gray-700 font-medium">
                    Thank you for your positive feedback...
                  </p>
                  <span className="text-xs text-gray-500">6:45 am</span>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Bottom Notification */}
            <div className="p-3 border-t flex justify-between items-center bg-gray-100 rounded-b-lg">
              <span className="text-sm text-gray-600">
                New message received
              </span>
              <span className="text-xs text-gray-500">6:30 am</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Box */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold">Integrated with 60+ Apps</h3>
            <p className="text-gray-600 mt-2">
              Effortlessly connect with your favorite apps to streamline
              workflows.
            </p>

            {/* Button */}
            <button className="mt-4 border text-white bg-black border-black py-2 px-4 rounded">
              View All Integrations
            </button>

            {/* Image Centered */}
            <div className="mt-4 w-full flex justify-center">
              <Image
                width={400}
                height={200}
                src="/img111.png"
                alt="Integrated Apps"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold">We’re Aware with Security</h3>
            <p className="text-gray-600 mt-2">
              We take security seriously and ensure compliance with GDPR and
              CCPA.
            </p>

            {/* Button */}
            <button className="mt-4 border text-white bg-black border-black py-2 px-4 rounded">
              Discover More
            </button>

            {/* Image Centered */}
            <div className="mt-4 w-full flex justify-center">
              <Image
                width={400}
                height={200}
                src="/Apps33.png"
                alt="Security Features"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-10 px-4 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Grow with <br /> Webseeder
        </h2>

        <div className="flex flex-col md:flex-row items-end gap-6 ">
          {/* First Box (Smallest) */}
          <div className="bg-gradient-to-r from-green-400 to-teal-600 p-6 rounded-lg shadow-lg text-white w-full h-32 md:h-32 flex items-end">
            <p className="text-3xl font-bold ml-4 mb-4">27%</p>
          </div>

          {/* Second Box (Medium) */}
          <div className="bg-gradient-to-r from-blue-400 to-indigo-600 p-6 rounded-lg shadow-lg text-white w-full md:w-3/4 h-40 md:h-48 flex items-end">
            <p className="text-3xl font-bold ml-4 mb-4">50%</p>
          </div>

          {/* Third Box (Largest) */}
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg shadow-lg text-white w-full md:w-2/3 h-48 md:h-64 flex items-end">
            <p className="text-3xl font-bold ml-4 mb-4">71%</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
        {/* Top Image with Floating Tags */}
        <div className="relative flex justify-center">
          <Image
            src="/frameh.png"
            width={800}
            height={500}
            alt="VR User"
            className="rounded-lg"
          />
        </div>

        {/* Heading & Table Section */}
        <div className="text-center mt-10">
          <h2 className="text-5xl font-bold  text-[#6665a8]">
            Take us for a spin!
          </h2>
          <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition">
            Watch overview
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <Image
            src="/tabular.png"
            width={800}
            height={450}
            alt="CRM Dashboard"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Reviews Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-[#9098a0]">
            Used by more than{" "}
            <span className="text-white">10K+ Businesses</span>{" "}
          </h3>
        </div>

        <div className="mt-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-6"
          >
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
                    <div className="flex gap-1 text-yellow-400">{"★★★★★"}</div>
                    <p className="mt-2 text-sm">
                      "This CRM transformed how we manage clients and tasks.
                      It's intuitive and efficient!"
                    </p>
                    <p className="mt-2 font-semibold">- Customer Review</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          {/* Custom Pagination Dots */}
          <div className="custom-pagination mt-8 flex justify-center"></div>
        </div>
      </section>
      <section className="bg-[#1A73E8] text-white py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row md:items-center">
          {/* Text Section */}
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Ready to build your team's{" "}
              <span className="font-bold">dream CRM?</span>
            </h2>
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                Start for free
              </button>
              <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
                Request a Demo
              </button>
            </div>
          </div>

          {/* Background Shapes (Optional, use SVGs or absolute divs if needed) */}
          <div className="hidden md:block md:w-2/5 relative">
            {/* Placeholder for SVG Background (if required) */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 mt-16">
        &copy; 2025 Webseeder. All Rights Reserved.
      </footer>
    </div>
  );
}
