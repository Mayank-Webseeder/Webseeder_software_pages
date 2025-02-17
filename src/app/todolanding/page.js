'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Todolanding() {

    const testimonials = [
        {
          quote: "With this, we’re able to easily track our performance in full detail. It enhances us in a modernized level. Now we can grow and engage with our audience.",
          name: "Jaquan Hart",
          role: "Digital Marketing Executive, HypeAssistant"
        },
        {
          quote: "This tool has completely transformed how we handle our marketing campaigns. We can now analyze engagement better and refine our approach.",
          name: "Sophia Miller",
          role: "Marketing Manager, GrowthTech"
        },
        {
          quote: "An essential tool for any business. It simplifies complex tracking and makes it super easy to optimize campaigns.",
          name: "Daniel Lee",
          role: "CEO, StartUp Inc."
        }
      ];
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-2">
      {/* Hero Section */}
      <section className="w-full md:w-4/5 mx-auto bg-gradient-to-b from-blue-500 to-blue-400 text-white text-center md:text-left  px-6 md:px-12 lg:px-24 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
              Managing your tasks just got easier
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Create an interactive tool and keep precise tracking of your tasks. Collaborate and streamline your workflow efficiently.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-500 px-6 py-2 rounded font-medium hover:bg-gray-100 transition">
                Watch Video
              </button>
              <button className="border border-white px-6 py-2 rounded font-medium hover:bg-white hover:text-blue-500 transition">
                Get a free demo
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className=" flex justify-center  md:mt-0 ">
            <Image  src="/Group19.png" width={500} height={400} alt="Dashboard Overview" className="w-full max-w-md md:max-w-lg" />
          </div>
        </div>
      </section>

      {/* Sponsor Logos */}
      <section className="w-full md:w-4/5 mx-auto py-12 flex flex-wrap justify-center gap-6 text-gray-400">
        <Image src="/head5.png" width={100} height={50} alt="Slack" />
        <Image src="/head4.jpg" width={100} height={50} alt="Netflix" />
        <Image src="/head2.png" width={100} height={50} alt="Google" />
        <Image src="/head1.png" width={100} height={50} alt="Airbnb" />
        <Image src="/head3.png" width={100} height={50} alt="Uber" />
      </section>

      {/* Features Section */}
      <section className="w-full md:w-4/5 mx-auto py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/mobile.png" width={400} height={400} alt="Mobile App" className="w-full max-w-md md:max-w-lg mr-4" />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold">One task, multiple ways to add</h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether on mobile or web, adding tasks is seamless and intuitive. Stay organized wherever you are.
          </p>
          <a href="#" className="mt-4 text-blue-500 font-medium inline-block">
            Learn about graphs →
          </a>
        </div>
    
      </section>
       {/* Subtasks Section */}
       <section className="w-full md:w-4/5 mx-auto py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold">Subtasks</h2>
          <p className="mt-4 text-lg text-gray-600">
            Publish your content automatically to ensure that your content reaches the right people. Build in features such as...
          </p>
          <a href="#" className="mt-4 text-blue-500 font-medium inline-block">
            Learn about scheduled post →
          </a>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/mack.png" width={500} height={300} alt="Laptop UI" className="w-full max-w-md md:max-w-lg" />
        </div>
      </section>

      {/* Prioritize Section */}
      <section className="w-full md:w-4/5 mx-auto py-16 flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold">Prioritise</h2>
          <p className="mt-4 text-lg text-gray-600">
            Executing projects on time is much easier with prioritization. Set priority to your tasks so you know what’s up next.
          </p>
          <a href="#" className="mt-4 text-blue-500 font-medium inline-block">
            Learn about graphs →
          </a>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/mobile.png" width={400} height={400} alt="Mobile UI" className="w-full max-w-md md:max-w-lg mr-4" />
        </div>
      </section>

      {/* Move Forward Section */}
      <section className="w-full md:w-4/5 max-w-screen-xl mx-auto bg-blue-50 py-16 text-center">
      <h2 className="text-2xl md:text-4xl font-bold">Move forward together</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Achieving great things is easier when you work as a team. Share your work, reduce redundancy, and foster a culture of innovation.
      </p>

      {/* Features Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Card 1 */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <Image src="/icon4.png" width={50} height={30} alt="Delegate" />
          <h3 className="text-md font-bold text-red-500 mt-4 text-left">Delegate, don’t duplicate</h3>
          <p className="text-gray-600 mt-2 text-left text-sm">Assign tasks efficiently to your team.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <Image src="/icon1.png" width={50} height={30} alt="Social Media" />
          <h3 className="text-md font-bold text-blue-500 mt-4 text-left">Social media-style communication</h3>
          <p className="text-gray-600 mt-2 text-left text-sm">Engage with team members like never before.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <Image src="/icon2.png" width={50} height={30} alt="Customizable" />
          <h3 className="text-md font-bold text-yellow-500 mt-4 text-left">Customizable drop settings</h3>
          <p className="text-gray-600 mt-2 text-left text-sm">Organize your workflow the way you prefer.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <Image src="/icon3.png" width={50} height={30} alt="Hashtag" />
          <h3 className="text-md font-bold text-green-500 mt-4 text-left">Hashtag Location</h3>
          <p className="text-gray-600 mt-2 text-left text-sm">Stay updated with task-specific locations.</p>
        </div>
      </div>
    </section>
       {/* Powering Growth Section */}
       <section className="w-full md:w-4/5 mx-auto py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold">
            Powering the growth of <br />
            <span className="text-blue-500">100+ businesses & retailers</span> in Indonesia.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From single sellers, marketers, big brands to multi-store brands.
          </p>
        </div>

        {/* Right Testimonial */}
        <div className="w-full md:w-1/2 relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={false}
            className="bg-white shadow-md p-6 rounded-lg relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="p-6">
                <div className="text-5xl text-blue-500">“</div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
                <div className="mt-4 flex items-center gap-4 ">
                    <Image src="/Avater2.png" width={50} height={30} alt="Google" />
                    <div>
                    <p className="text-lg font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  
                </div>
               
              
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute left-4 mt-4 text-gray-600 hover:text-blue-500 text-xl">
          ❮
          </button>
          <button className="custom-next absolute right-4 mt-4  text-gray-600 hover:text-blue-500 text-xl">
          ❯
          </button>
        </div>

      </section>

      {/* Call to Action Section */}
      <section className="w-full md:w-4/5 mx-auto bg-blue-500 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
        <div className='p-6'>
          <h2 className="text-xl md:text-2xl font-bold">Grow your brand <br /> presence on social media 📈</h2>
          <p className="mt-4">Join with more than <span className="font-bold">1200+</span> happy customers</p>
          {/* User Icons */}
          <div className="flex mt-4">
            <Image src="/img3.png" width={40} height={40} alt="User 1" className="rounded-full border border-white -ml-2" />
            <Image src="/img2.png" width={40} height={40} alt="User 2" className="rounded-full border border-white -ml-2" />
            <Image src="/img1.png" width={40} height={40} alt="User 3" className="rounded-full border border-white -ml-2" />
            <span className="ml-4 hover:underline">and others</span>
          </div>
        </div>
        {/* CTA Button */}
        <button className="mt-6 md:mt-0 bg-white text-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Get your trial now
        </button>
      </section>
    </div>
  );
}
