"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function RecruitmentLanding() {
  const testimonials = [
    {
      title: "Efficient and Effective Hiring Process",
      text: "The efficiency of Applyfier’s hiring process is seamless. The platform is intuitive and customizable, making it easy to identify the right talent.",
      logo: "/fordlogo.png",
    },
    {
      title: "Top-Notch Talent at Our Fingertips",
      text: "As an employer, finding top-notch talent is crucial. Applyfier has helped us streamline our hiring process, making it seamless and efficient.",
      logo: "/disneilogo.png",
    },
    {
      title: "A True Partner in Recruitment",
      text: "Applyfier has been a true partner in making recruitment effortless. It allows us to find the best talent quickly and efficiently.",
      logo: "/fedexlogo.png",
    },
    {
      title: "A True Partner in Recruitment",
      text: "Applyfier has been a true partner in making recruitment effortless. It allows us to find the best talent quickly and efficiently.",
      logo: "/fedexlogo.png",
    },
  ];

  const features = [
    {
      title: "Create a candidate",
      desc: "Post your jobs on 75+ job boards with a single click and share the listings instantly to all your social handles.",
      icon: "/frameicon1.png", // Replace with actual image path
      bgColor: "bg-purple-500",
    },
    {
      title: "Build relationships right",
      desc: "Keep track of where your candidates are at every hiring stage and optimize your recruitment process with advanced analytics.",
      icon: "/frameicon3.png", // Replace with actual image path
      bgColor: "bg-purple-500",
    },
    {
      title: "Go from interview",
      desc: "Look in the best hire for every position with custom automation tools that push candidates through every stage in your hiring process.",
      icon: "/frameicon2.png", // Replace with actual image path
      bgColor: "bg-purple-500",
    },
  ];
  const [isYearly, setIsYearly] = useState(false);
  const companies = [
    { name: "Disney", logo: "/disnep.png" },
    { name: "FedEx", logo: "/fed.png" },
    { name: "Ford", logo: "/ford.png" },
    { name: "GAP", logo: "/cap.png" },
    { name: "Kroger", logo: "/krogen.png" },
    { name: "Uber", logo: "/uber.png" },
  ];
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-100 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-100 to-blue-100">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-purple-600">Recruit</span> quality candidates
            with <br />
            <span className="text-black">Webseeder all-in-one talent</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Zoho Recruit offers a powerful ATS and CRM in a single recruitment
            platform with scalability, customization, and remote hiring tools.
          </p>

          {/* Email Input & Button */}
          <div className="mt-6 flex items-center border border-gray-300 rounded-full overflow-hidden shadow-md w-full max-w-md">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 min-w-0 px-4 py-3 outline-none text-sm sm:text-base"
            />
            <button className="bg-yellow-400 px-4 sm:px-6 py-3 text-white font-medium hover:bg-yellow-500 transition whitespace-nowrap">
              Start Here →
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          {/* Background Shape */}
          <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 bg-purple-500 rounded-xl"></div>

          {/* Candidate Image */}
          <Image
            src="/frame.png"
            width={400}
            height={400}
            alt="Candidate"
            className="rounded-lg"
          />

          {/* Testimonial Box */}
          <div className="absolute bottom-18 left-6 px-4 py-3 shadow-lg rounded-md flex items-center gap-3 bg-white/70 backdrop-blur-sm">
            <div>
              <p className="font-bold">Aura Laura</p>
              <p className="text-gray-600 text-sm">"Awesome Website!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12 bg-gradient-to-b from-purple-100 to-pink-100 text-center">
        {/* Heading */}
        <p className="text-gray-700 text-lg font-semibold mb-6">
          Trusted by 100+ fast-growing companies
        </p>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="relative w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={60}
                height={34}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="text-center py-16 bg-gradient-to-b from-purple-100 to-blue-100">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="px-4 py-1 text-sm font-semibold bg-gray-200 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            <span className="text-orange-500">Targeted</span> recruitment
            demands <br className="hidden md:block" />
            targeted solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Recruit’s world-class recruitment software will help you find,
            evaluate, and communicate with candidates for any role. That means a
            more efficient hiring process and new hires that add more value to
            your organization or your clients.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${feature.bgColor} h-full flex flex-col items-start text-white`}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full mb-4">
                <Image src={feature.icon} width={32} height={32} alt="icon" />
              </div>
              {/* Title & Description */}
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm mt-2 flex-grow">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center md:justify-between max-w-6xl mx-auto">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Manage your contingent{" "}
              <span className="text-purple-500">workforce</span>
            </h1>
            <p className="text-gray-600 mt-4 md:mt-6">
              The trend toward more contingent labor isn’t slowing down. Whether
              you need a freelance graphic designer or contractors for high-rise
              developments, Webseeder Workerly helps simplify hiring.
            </p>
            <button className="mt-6 bg-yellow-400 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-500 transition">
              Try Webseeder Workerly →
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <Image
              src="/ladyimage.png"
              width={400}
              height={400}
              alt="Smiling Woman"
              className="rounded-xl w-full max-w-[350px] md:max-w-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-purple-100 to-blue-100 relative">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-bold">
            What They Are <span className="text-purple-500">Saying</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Discover the stories and experiences of individuals and companies
            who have found success and excellence through Applyfier.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative mt-10">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative"
          >
            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/90 p-6 rounded-lg shadow-md backdrop-blur-md h-[300px] flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-700 mt-3 flex-grow">
                    {testimonial.text}
                  </p>
                  <hr className="mt-4 border-gray-300" />
                  <div className="mt-4 flex justify-start">
                    <img
                      src={testimonial.logo}
                      alt="Company Logo"
                      className="h-8"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons (Hidden on Small Screens) */}
          <button className="custom-prev hidden md:flex absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-purple-500 text-3xl">
            ❮
          </button>
          <button className="custom-next hidden md:flex absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-purple-500 text-3xl">
            ❯
          </button>

          {/* Custom Pagination (Bullets Below Cards) */}
          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        {/* Blog Section Title */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center sm:text-left">
            From Our <span className="text-purple-500">Blog</span>
          </h2>
          <a
            href="#"
            className="text-gray-500 text-sm md:text-base hover:underline mt-2 sm:mt-0"
          >
            See All →
          </a>
        </div>

        {/* Main Blog Featured Post with Full-Width Image and Overlay Text */}
        <div className="mt-10 relative w-full">
          {/* Background Image */}
          <Image
            src="/keyboard.png"
            width={1200}
            height={400}
            alt="Blog"
            className="rounded-lg w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-4 sm:p-6 md:p-12 text-white">
            {/* <h3 className="text-xl md:text-2xl font-bold">
        Mastering the Art of Resume Crafting
      </h3>
      <p className="text-gray-200 mt-2">2 days ago • 7 min read</p>
      <p className="mt-4 hidden md:block">
        Uncover the secrets to crafting a standout resume that captures the
        attention of employers. Our expert insights help you showcase your
        skills effectively.
      </p> */}
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blog Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
            <Image
              src="/lady.png"
              width={300}
              height={200}
              alt="Blog 1"
              className="rounded-lg w-full"
            />
            <p className="text-gray-500 text-sm mt-2">
              2 days ago • 7 min read
            </p>
            <h4 className="text-lg font-bold mt-2">
              Dive into Remote Work: Adapting WFA
            </h4>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
            <Image
              src="/clock.png"
              width={300}
              height={200}
              alt="Blog 2"
              className="rounded-lg w-full"
            />
            <p className="text-gray-500 text-sm mt-2">
              2 days ago • 7 min read
            </p>
            <h4 className="text-lg font-bold mt-2">
              Navigating the Job Search in the Digital Age
            </h4>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
            <Image
              src="/people.png"
              width={300}
              height={200}
              alt="Blog 3"
              className="rounded-lg w-full"
            />
            <p className="text-gray-500 text-sm mt-2">
              1 week ago • 7 min read
            </p>
            <h4 className="text-lg font-bold mt-2">
              Building a Diverse and Inclusive Workplace
            </h4>
          </div>

          {/* Blog Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
            <Image
              src="/guy.png"
              width={300}
              height={200}
              alt="Blog 4"
              className="rounded-lg w-full"
            />
            <p className="text-gray-500 text-sm mt-2">
              2 days ago • 7 min read
            </p>
            <h4 className="text-lg font-bold mt-2">
              Mastering the Virtual Interview: Tips for Success
            </h4>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-purple-100 to-blue-100 py-16 px-4 sm:px-6 md:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase text-sm tracking-wider">
            Pricing
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
            <span className="text-purple-500">Simple</span> and Transparent
            Pricing
          </h2>

          {/* Toggle Button */}
          <div className="mt-4 flex justify-center items-center space-x-3 text-gray-600">
            <span className="text-sm sm:text-base">Yearly plans</span>
            <div
              className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all ${
                isYearly ? "bg-blue-500" : "bg-gray-400"
              }`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-all ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span className="text-sm sm:text-base">Monthly plans</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Professional Plan */}
          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 flex flex-col">
            <h3 className="text-lg font-bold text-gray-800">
              Professional Plan
            </h3>
            <p className="text-gray-500">For Individuals and Small Teams</p>
            <p className="text-2xl font-bold my-4">
              {isYearly ? "$150" : "$15"}
              <span className="text-gray-500 text-lg font-medium">
                {" "}
                per user per {isYearly ? "year" : "month"}
              </span>
            </p>
            <button className="bg-yellow-500 text-black w-full py-2 rounded-full font-semibold">
              Start 14-day Free Trial →
            </button>
            <ul className="mt-4 text-gray-600 text-left space-y-2">
              <li>✅ Up to 15 Jobs per Account</li>
              <li>✅ Up to 10,000 Candidates</li>
              <li>✅ Unlimited Job Postings</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-purple-500 p-6 shadow-lg rounded-lg flex flex-col text-white">
            <h3 className="text-lg font-bold">Enterprise Plan</h3>
            <p>For Industry Leaders</p>
            <p className="text-2xl font-bold my-4">
              {isYearly ? "$350" : "$35"}
              <span className="text-white-500 text-lg font-medium">
                {" "}
                per user per {isYearly ? "year" : "month"}
              </span>
            </p>
            <button className="bg-yellow-500 text-black w-full py-2 rounded-full font-semibold">
              Start 14-day Free Trial →
            </button>
            <ul className="mt-4 text-gray-200 text-left space-y-2">
              <li>✅ Unlimited Jobs</li>
              <li>✅ 10,000+ Candidate Database</li>
              <li>✅ Unlimited Hiring Messages</li>
            </ul>
          </div>

          {/* Custom Plan */}
          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 flex flex-col">
            <h3 className="text-lg font-bold text-gray-800">Custom Plan</h3>
            <p className="text-gray-500">For Custom Plan</p>
            <p className="text-2xl font-bold my-4">On Demand</p>
            <button className="bg-yellow-500 text-black w-full py-2 rounded-full font-semibold">
              Contact Us →
            </button>
            <ul className="mt-4 text-gray-600 text-left space-y-2">
              <li>✅ Everything in Enterprise Plan</li>
              <li>✅ Custom Features</li>
              <li>✅ Custom Integrations</li>
            </ul>
          </div>
        </div>

        {/* Compare Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-full font-semibold">
            Compare all Pricing Plans →
          </button>
        </div>
      </section>

      {/* Trial Section */}
      <div className="w-full bg-gradient-to-r from-purple-100 to-blue-100 py-12 flex justify-center px-4 sm:px-6">
        {/* White Box Container */}
        <div className="w-full max-w-6xl bg-white py-10 px-6 sm:px-10 md:px-16 rounded-lg flex flex-col md:flex-row items-center gap-8 shadow-lg">
          {/* Left Side - Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Try Applyfier for free during 14-day with{" "}
              <br className="hidden sm:block" />
              no commitment.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mt-2">
              No credit card required
            </p>
            <button className="bg-yellow-500 text-white px-5 sm:px-6 py-3 rounded-full mt-6 shadow-md hover:bg-yellow-600 transition">
              Start Here →
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
            <Image
              src="/model.png"
              width={380}
              height={240}
              alt="Candidate"
              className="rounded-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
