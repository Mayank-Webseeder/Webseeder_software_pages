'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'AR Shakir',
    role: 'CEO GetNextDesign',
    image: '/lady.png',
    text: 'Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.',
    rating: 5,
  },
  {
    name: 'John Doe',
    role: 'Founder XYZ',
    image: '/lady.png',
    text: 'This is an amazing service! I am really happy with the results. Would definitely recommend to anyone looking for quality work.',
    rating: 4,
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full flex flex-col items-center px-4 py-12 lg:py-16">
      <h3 className="text-sm text-green-600 font-medium uppercase">Testimonials</h3>
      <h2 className="text-2xl lg:text-3xl font-bold text-center mt-2">
        Check what our clients are saying
      </h2>
      
      <div className="relative mt-8 w-full max-w-4xl flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10"
          >
            <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-lg">
              <Image src={testimonials[index].image} width={256} height={256} className="object-cover" alt={testimonials[index].name} />
            </div>

            <div className="mt-6 md:mt-0 md:ml-10 flex flex-col justify-center flex-1">
              <FaQuoteLeft className="text-orange-500 text-3xl" />
              <div className="flex my-3">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{testimonials[index].text}</p>
              <h4 className="mt-4 font-bold text-gray-900">{testimonials[index].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center space-x-4 mt-6">
        <button className="p-2 bg-gray-200 rounded-full" onClick={prevTestimonial}>
          <IoIosArrowBack className="text-xl" />
        </button>
        <button className="p-2 bg-gray-200 rounded-full" onClick={nextTestimonial}>
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>
    </section>
  );
}
