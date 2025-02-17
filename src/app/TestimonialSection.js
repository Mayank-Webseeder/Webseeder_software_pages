"use client"; // Ensures this runs on the client side

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import Image from "next/image"; // For optimized image handling in Next.js
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./globals.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Paula Brooks",
      role: "Business Analyst",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed pharelius auctor",
      rating: 5,
      avatar: "/p1.png", // Ensure these images exist in the public folder
    },
    {
      id: 2,
      name: "Ann Bryant",
      role: "Business Analyst",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed pharelius auctor",
      rating: 5,
      avatar: "/p2.png",
    },
    {
      id: 3,
      name: "Eric Peterson",
      role: "Business Analyst",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed pharelius auctor",
      rating: 5,
      avatar: "/p3.png",
    },
    {
      id: 4,
      name: "Tom Hank",
      role: "Business Analyst",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed pharelius auctor",
      rating: 5,
      avatar: "/p3.png",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What people love about our products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're passionate about changing as many lives as possible. And we know
          how difficult it can sometimes be to get started. That's why all our
          courses are available for everyone, and every budget.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation={true} // Enables navigation arrows
          scrollbar={{ draggable: true }} // Enables draggable scrollbar
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Enables auto-slide
          modules={[Pagination, Autoplay, Navigation, Scrollbar]}
          className="pb-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-600 mb-6">{testimonial.content}</p>

                {/* User Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;

