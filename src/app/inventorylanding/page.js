"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function InventoryLanding() {
  const testimonials = [
    {
      text: "Project management is smoother with Webseeder. Its dashboards provide a clear view of progress and areas of improvement.",
      name: "Nathan H. Hall",
      role: "Project Lead",
    },
    {
      text: "Webseeder real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
      name: "Naomi E. Johnson",
      role: "Product Manager",
    },
    {
      text: "Real-time data processing with Webseeder has changed how we make decisions. It's a must-have tool for modern businesses.",
      name: "Michael G. Lopez",
      role: "Operations Director",
    },
    {
        text: "Real-time data processing with Webseeder has changed how we make decisions. It's a must-have tool for modern businesses.",
        name: "Michael G. Lopez",
        role: "Operations Director",
      },
      {
        text: "Real-time data processing with Webseeder has changed how we make decisions. It's a must-have tool for modern businesses.",
        name: "Michael G. Lopez",
        role: "Operations Director",
      },
  ];

  const logo= [
    "/Logo.png",
    "/logoip6.png",
    "/logoip5.png",
    "/Logoip4.png",
    "/logoip3.png",
    "/logoip2.png",
  ]

  const read=[
    {
      icon: "/webicon1.png",
      title: "Save GSTINs",
      desc: "Keep a central record of the GSTINs for the registered businesses and save time.",
    },
    {
      icon: "/webicon2.png",
      title: "Add HSN or SAC codes",
      desc: "You can add your HSN or SAC code for the items you sell or service you offer.",
    },
    {
      icon: "/webicon3.png",
      title: "Generate GST-compliant invoices",
      desc: "Create invoices which will help you to get paid on time and GST requirements.",
    },
    {
      icon: "/webicon4.png",
      title: "Automate tax calculation",
      desc: "When you prepare a sales order, the CGST, IGST & SGST rates get calculated.",
    },
  ]

  const blogsection=[
    {
      title: "Order Management",
      desc: "Dedicate more time to growing your orders than managing them.",
      img: "/blogimg1.png",
    },
    {
      title: "Warehouse Management",
      desc: "Manage stock across multiple storehouses.",
      img: "/blogimg2.png",
    },
    {
      title: "Goods Scanning",
      desc: "All businesses, whether big or small, require smart management.",
      img: "/blogimg3.png",
    },
    {
      title: "Image Analysis",
      desc: "A complete range of inventory management features.",
      img: "/blogimg4.png",
    },
  
  ]
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 py-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto py-10 px-4">
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Inventory management software designed for{" "}
            <span className="text-black">Indian businesses</span>
          </h1>
          <p className="text-gray-600 mt-8">
            Manage orders. Track inventory. Handle GST billing. Oversee
            warehouses. One inventory management software to run all your
            inventory operations.
          </p>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
              Start Your Free Trial
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg">
              Learn more
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0">
          <Image
            src="/02.png"
            width={300}
            height={300}
            alt="Inventory Management"
          />
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {logo.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            width={120}
            height={50}
            alt="Partner Logo"
          />
        ))}
      </div>

      {/* About Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center md:text-left">
        <h3 className="text-green-200 mb-2">About us</h3>
        <h2 className="text-3xl font-bold">Empowering Innovation AI</h2>
        <p className="text-gray-600 mt-4">
          We are driven by the vision of transforming businesses with artificial
          intelligence. Founded in 2024, we have consistently pushed the
          boundaries of AI to offer smart, scalable, and intuitive solutions
          that drive growth and efficiency.
        </p>
        <p className="text-gray-600 mt-2">
          Our team of expert data scientists, engineers, and strategists
          combines cutting-edge technology with deep industry knowledge to
          deliver custom AI solutions that cater to unique business challenges.
        </p>
      </div>

      {/* Stats Section Wrapper */}
      <div className="mt-16 max-w-4xl mx-auto text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-start gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">32+</h3>
            <p className="text-gray-400">Years in AI Innovation</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">20</h3>
            <p className="text-gray-400">Clients Countries Worldwide</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">4000+</h3>
            <p className="text-gray-400">Projects Successfully Implemented</p>
          </div>
        </div>

        {/* Read More */}
        <div className="mt-6 md:mt-8 text-center md:text-left">
          <a href="#" className="text-green-500 font-semibold hover:underline">
            Read more →
          </a>
        </div>
      </div>
      <section className="w-full mt-16 bg-gray-100 py-12 px-4 md:px-12 lg:px-20">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-green-600">SOLUTIONS</h3>
          <h2 className="text-3xl font-bold mt-2">
            What makes Webseeder <br /> Inventory GST Compliant
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {read.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-left"
            >
                <div  className="">
                <Image
                src={item.icon}
                width={50}
                height={50}
                alt={item.title}
               
              />
                </div>
             
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Blogs Section */}
      <div className="text-center mb-8">
        <h3 className="text-sm text-gray-500 uppercase">Blogs</h3>
        <h2 className="text-3xl font-bold mt-2">
          From MSMEs to large-scale corporations, Webseeder <br /> Inventory
          supports all businesses
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogsection.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={item.img}
              width={300}
              height={150}
              alt={item.title}
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Issue Delivery Challan Section */}
      <section className="bg-gray-100 mt-16 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Issue Delivery Challan</h3>
          <p className="text-gray-600 mt-2">
            Delivery challans created in Zoho Inventory follow all the GST
            format requirements, and the item details are auto-filled
            automatically using order references.
          </p>
          <ul className="list-disc text-gray-600 mt-4 pl-5">
            <li>Select the customer name</li>
            <li>Select the order details and type</li>
            <li>Select the item details</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded mt-4">
            Get a demo
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/green.png"
            width={350}
            height={200}
            alt="Delivery Challan"
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="w-full py-16 px-4 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">The Experience</h2>

        <p className="text-gray-600 mb-8">
          At Webseeder, we strive to create a seamless digital solution for
          business analytics. But don’t <br /> just take our word for it. Here’s
          what our satisfied users have to say.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          modules={[Pagination,Autoplay]}
          className="w-full"

          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center">
                <p className="text-gray-700">"{testimonial.text}"</p>
                <div className="mt-4 flex flex-col items-center">
                  <Image
                    src="/imageava.png"
                    width={40}
                    height={40}
                    alt="Experience"
                    className="mb-2 rounded-full"
                  />
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bullet Dots Pagination */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </section>
    </section>
  );
}
