'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function FormsLanding() {

    const testimonials = [
        {
          id: 1,
          image: "/Avater2.png",
          name: "Justin Owner",
          position: "Founder, XYZ Company",
          text: "I can’t believe how much time Webseder has saved me. The integrations are flawless!",
        },
        {
          id: 2,
          image: "/Avater2.png",
          name: "Sarah Thompson",
          position: "CEO, ABC Corp",
          text: "Webseder is the best thing to happen to our business in years. Highly recommend!",
        },
        {
          id: 3,
          image: "/Avater2.png",
          name: "Michael Lee",
          position: "Marketing Head, LMN Inc.",
          text: "Webseder has made our workflow so much more efficient. A must-have tool!",
        },
        {
          id: 4,
          image: "/Avater2.png",
          name: "Emily Johnson",
          position: "Product Manager, StartUpX",
          text: "Super intuitive and easy to use. It’s a game changer for our team!",
        },
        {
          id: 5,
          image: "/Avater2.png",
          name: "Daniel Brown",
          position: "CTO, Tech Ventures",
          text: "Finally, a tool that actually helps us get things done. Amazing experience!",
        },
      ];
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl  font-bold text-blue-700">
            Efficient form creation <br /> with a <span className="text-blue-500">powerful form <br /> builder</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Project management software that enables your team to collaborate, plan, analyze, and manage any tasks.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Sign Up for Free
          </button>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <Image src="/container2.png" alt="Dashboard" width={500} height={300} className="w-full max-w-[500px] h-auto" />
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold">Create visually appealing</h2>
          <p className="text-gray-600 mt-8">
            Our feature-rich, no-code form builder helps you create beautiful, functional forms using customizable themes, student-specific form templates, and dynamic data into user interfaces.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Explore Software
          </button>
        </div>
        <div className="flex justify-center">
          <Image src="/container1.png" alt="Table" width={500} height={300} className="w-full max-w-[500px] h-auto" />
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image src="/container3.png" alt="Network" width={500} height={300} className="w-full max-w-[500px] h-auto" />
        </div>
        <div>
          <h2 className="text-5xl font-bold">Collect data from a range of <span className="text-blue-600">sources</span></h2>
          <p className="text-gray-600 mt-12">
            Embed secure online forms in webpages for enhanced engagement with your brand's website, collect data via social media, or with a digital audience through email campaigns.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Explore Hosting Options
          </button>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold">Stay informed with instant notifications</h2>
          <p className="text-gray-600 mt-8">
            Trigger customized email or SMS notifications whenever a new record is submitted or updated, so team members and stakeholders stay in the loop.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Learn more about form notifications
          </button>
        </div>
        <div className="flex justify-center">
          <Image src="/imagetab.png" alt="Notifications" width={500} height={300} className="w-full max-w-[500px] h-auto" />
        </div>
      </section>

      {/* Form Integrations Section */}
      <section className="mt-16 bg-[#043873] text-white py-12 text-center">
        <h2 className="text-4xl font-bold">Send data to your favorite apps <br /> with form integrations</h2>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          With seamless integrations, our software provides a feature-rich form data collection system that works with various applications to fuel a host of business use cases.
        </p>
      </section>

      {/* Data Analytics Section */}
      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold">View, analyze, and optimize data</h2>
          <p className="text-gray-600 mt-8">
            Get real-time form metrics, export data into spreadsheets, or visualize the data in your favorite analytics tools. With our no-code form creator, you can simplify UI/UX tracking and improve workflows.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            View form analytics in detail
          </button>
        </div>
        <div className="flex justify-center">
          <Image src="/Element.png" alt="Data Analytics" width={500} height={300} className="w-full max-w-[500px] h-auto" />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="mt-20 text-center px-6 md:px-12 lg:px-24">
  <h2 className="text-5xl font-bold">
    Our <span className="underline decoration-yellow-400">sponsors</span>
  </h2>
  <div className="mt-6 flex flex-wrap justify-center items-center gap-40">
    <Image src="/Apple.png" alt="Apple" width={50} height={50} className="h-auto" />
    <Image src="/microsoft.png" alt="Microsoft" width={120} height={50} className="h-auto" />
    <Image src="/slack.png" alt="Slack" width={120} height={50} className="h-auto" />
    <Image src="/google.png" alt="Google" width={120} height={50} className="h-auto" />
  </div>
</section>


      {/* Hero Section */}
      <section className="mt-16 bg-[#043873] text-white py-12 px-6 md:px-12 lg:px-24 rounded-lg">
  <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
    {/* Left Side - Image */}
    <div className="md:w-1/2 flex justify-center">
      <Image
        src="/Apps.png"
        alt="Element"
        width={400}
        height={400}
        className="w-full max-w-[300px] md:max-w-[400px] h-auto"
      />
    </div>

    {/* Right Side - Content */}
    <div className="md:w-1/2 mt-6 md:mt-0">
      <h2 className="text-3xl md:text-4xl font-bold">
        Work with Your Favorite Apps Using <span className="text-blue-300">Webseeder</span>
      </h2>
      <p className="text-gray-200 mt-4 max-w-lg mx-auto md:mx-0">
        Webseeder connects with your favorite software, integrating with over 1000+ apps to help you streamline work.
      </p>
      <button className="mt-6 px-6 py-3 bg-[#4f9cf9] text-white rounded-lg shadow-md hover:bg-blue-700">
        Read more
      </button>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="mt-16 text-center px-6 md:px-12 lg:px-24">
      <h2 className="text-5xl font-bold">
        See what our <span className="underline decoration-yellow-400">trusted</span> users say
      </h2>

      <div className="relative max-w-6xl mx-auto pb-16 mt-6">
        {/* Navigation Arrows (Outside Swiper) */}
        <button className="custom-prev absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black text-3xl z-10">
          ❮
        </button>
        <button className="custom-next absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black text-3xl z-10">
          ❯
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mt-6"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div className="w-full h-[250px] md:h-[280px] p-6 border rounded-lg shadow-md bg-blue-100 flex flex-col justify-between">
                {/* Image on Top Left */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                {/* Text Below Image */}
                <p className="text-gray-700 text-left">"{testimonial.text}"</p>

                {/* Name & Position at the Bottom */}
                <div className="text-center mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots Below the Cards */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>

    </div>
  );
}
