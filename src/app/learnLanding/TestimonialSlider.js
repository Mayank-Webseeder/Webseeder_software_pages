"use client"

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const testimonials = [
  {
    name: 'Albert Flores',
    location: 'London, UK',
    image: 'user1.png',
  },
  {
    name: 'Leslie Alexander',
    location: 'Manila, Philippines',
    image: 'user2.png',
  },
  {
    name: 'Courtney Henry',
    location: 'Sydney, Australia',
    image: 'user3.png',
  },
  {
    name: 'Courtney Henry',
    location: 'Jakarta, Indonesia',
    image: 'user4.png',
  },
  // Add more testimonials to enable sliding
  {
    name: 'John Doe',
    location: 'New York, USA',
    image: 'user2.png',
  },
  {
    name: 'Jane Smith',
    location: 'Toronto, Canada',
    image: 'user4.png',
  },
  {
    name: 'Mike Johnson',
    location: 'Berlin, Germany',
    image: 'user1.png',
  },
  {
    name: 'Sarah Williams',
    location: 'Paris, France',
    image: 'user3.png',
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonials.length - 4; // Adjust based on the number of visible items

  const nextSlide = () => {
    setCurrentIndex(current => current === maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(current => current === 0 ? maxIndex : current - 1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <span className="text-pink-500 text-sm uppercase tracking-wider">TESTIMONIALS</span>
        <h2 className="text-3xl font-bold mt-2 mb-4">Meet our students in 120+ countries</h2>
        <p className="text-gray-600">
          Designer Academy gives you the blocks & components you need to engage your professional career in product design.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
              >
                <div className="relative group bg-white rounded-lg overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-white/80 text-sm">{testimonial.location}</p>
                  </div>
                  <button className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;