"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper/modules";

export default function PayrollLanding() {
  const testimonials = [
    {
      text: "Distributed teams across the globe can now collaborate better.",
      name: "Carmen Williamson",
      img: "/elli.png",
    },
    {
      text: "Seamless integration has improved our workflow significantly.",
      name: "Michael Scott",
      img: "/elli.png",
    },
    {
      text: "A must-have tool for any growing business!",
      name: "Jessica Brown",
      img: "/elli.png",
    },
    {
      text: "Real-time collaboration has been a game-changer.",
      name: "Robert Downey",
      img: "/elli.png",
    },
  ];

  const employeeTool=[
    {
      title: "Web & Mobile app",
      desc: "Let employees download payslips & access self-service portals effortlessly.",
      logo: "/basline1.png",
      image: "/image69.png",
    },
    {
      title: "Instant Payslip",
      desc: "Automatically store salary history and process payroll.",
      logo: "/basline2.png",
      image: "/image70.png",
    },
    {
      title: "Digitisation",
      desc: "Create customized reports, IT declarations, and PF/ESI information online.",
      logo: "/basline3.png",
      image: "/image68.png",
    },
  ]

  const products= [
            {
              title: "Cross platform",
              desc: "It allows our products to be used across different devices.,",
              logo: "/logo1.png",
            },
            {
              title: "Cloud server",
              desc: "Ensures data security and accessibility at all times.",
              logo: "/logo2.png",
            },
            {
              title: "Pure Javascript",
              desc: "Simplified integration with seamless experience.",
              logo: "/logo3.png",
            },
          ]
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-white px-6 md:px-12 lg:px-24 py-12 text-center flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Payroll made <br className="hidden md:block" />
            <span className="text-gray-700">easy, scalable,</span>
            <br className="hidden md:block" /> and compliant
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            Transform outdated payroll practices and build a better workplace
            for your business with Webseeder Payroll.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600">
              Start My Free Trial
            </button>
            <button className="text-gray-700 font-semibold hover:underline">
              Request Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/ilustration.png"
            width={400}
            height={300}
            alt="Payroll Illustration"
          />
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-[#FF7235] pt-12 px-6 md:px-12 lg:px-24 flex flex-col items-center">
        <div className="relative w-full max-w-2xl text-center">
          <Image
            src="/Image2.png"
            width={800}
            height={500}
            alt="Dashboard Preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-6 flex flex-wrap justify-center gap-6 md:gap-12 text-gray-500 text-sm">
        <span className="whitespace-nowrap">Facebook</span>
        <span className="whitespace-nowrap">Google</span>
        <span className="whitespace-nowrap">CocaCola</span>
        <span className="whitespace-nowrap">LinkedIn</span>
        <span className="whitespace-nowrap">Samsung</span>
      </section>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/ilustrator2.png"
            width={400}
            height={300}
            alt="Salary Illustration"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Personalise salary components</h2>
          <p className="text-gray-600 mt-4">
            Accommodate diverse salary structures that suit each employee and
            your organization’s hierarchy with custom earnings, and deductions.
          </p>
          <Link
            href="#"
            className="text-orange-500 font-semibold mt-4 inline-block"
          >
            Learn more →
          </Link>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/ilustrator3.png"
            width={400}
            height={300}
            alt="Minimal Learning"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold pl-2">Minimal learning curve</h2>
          <p className="text-gray-600 mt-4 pl-2">
            With a modern UI and intuitive user experience, get to know
            Webseeder Payroll fast and finish payroll instantly.
          </p>
          <Link
            href="#"
            className="text-orange-500 font-semibold pl-2 mt-4 inline-block"
          >
            Learn more →
          </Link>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/ilustrator4.png"
            width={400}
            height={300}
            alt="Real-time Reports"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold">Real-time reports</h2>
          <p className="text-gray-600 mt-4">
            Get real-time visibility with over 400+ reports that tell you
            everything you need to know about your payroll.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900">
            The Product we work with.
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Teklifaces modt sapiets lacus in. Arcu net musnis sem amaren nisl,
            tincidunt sit etiam quam.
          </p>
        </section>

        {/* Product Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-8">
       { products.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow p-6 relative flex flex-col max-w-md items-center"
            >
              {/* Logo image at top-left corner */}
              <div className=" top-4 left-4">
                <Image src={item.logo} width={30} height={30} alt="Logo" />
              </div>
              <h3 className="text-lg font-bold mt-4">{item.title}</h3>

              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Employee Tools Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold">
            Self-service tools your employees <br /> will love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {employeeTool.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg shadow p-6 text-center"
              >
                {/* Logo image at top-left corner */}
                <div className=" top-4 left-4">
                  <Image src={item.logo} width={30} height={30} alt="Logo" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {/* Large centered image */}
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    width={120}
                    height={80}
                    alt="Main Graphic"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="text-center py-16">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          We have millions of <br /> best wishers
        </h2>
      </div>

      {/* Swiper Slider Container */}
      <div className="relative max-w-6xl mx-auto pb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Pagination, Navigation,Autoplay]}
          className="w-full pb-10"

          autoplay={{ delay: 3000 }}
          loop={true}
         
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-full h-[250px] md:h-[280px] flex flex-col justify-between p-6 border rounded-lg shadow-md bg-white">
                {/* Text at the top */}
                <p className="text-gray-600 flex-grow">{testimonial.text}</p>

                {/* Image & Name Side by Side */}
                <div className="flex items-center justify-center mt-4 gap-3">
                  <Image
                    src={testimonial.img}
                    width={50}
                    height={50}
                    alt="User"
                    className="rounded-full"
                  />
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (Outside Cards) */}
        <button className="custom-prev absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-500 text-3xl">
          ❮
        </button>
        <button className="custom-next absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-500 text-3xl">
          ❯
        </button>

        {/* Pagination Dots Below the Cards */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
      </div>

      <div className="w-full bg-orange-500 text-white py-16 md:py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Text Content */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            20M+ downloaded from 32
            <span className="block mt-2">different countries</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Try demo for 7-days with full features.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors duration-300">
            Try free demo
          </button>
        </div>

        {/* Images Container */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16 max-w-4xl mx-auto px-4">
          {/* Left Image */}
          <Image
              src="/Layer10.png"
              width={320} height={40}
              alt="Person illustration 1"
             className="w-60 md:w-80"
            />

          {/* Right Image */}
          <Image
              src="/Layer4.png"
              width={320} height={40}
              alt="Person illustration 2"
              className="w-60 md:w-80"
            />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
      <div className="absolute right-0 bottom-1/4 w-24 h-24 bg-white/10 rounded-full blur-sm"></div>
      <div className="absolute left-1/4 top-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
      <div className="absolute right-1/4 bottom-1/3 w-20 h-20 bg-white/5 rounded-full"></div>
    </div>
    </div>
  );
}
