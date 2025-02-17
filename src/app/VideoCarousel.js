 "use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";


//Add videos as per requirement

const videos = [
  { id: 1, src: "video1.mp4", thumbnail: "thumb1.jpg" },
  { id: 2, src: "video2.mp4", thumbnail: "thumb2.jpg" },
  { id: 3, src: "video3.mp4", thumbnail: "thumb3.jpg" },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Will it work for you?</h2>
      <p className="text-gray-600 mt-2">
        With over a decade of experience, serving more than 4500+ organisations, we've catered to businesses of all shapes and sizes. Check out how Webseeder People can benefit your workforce.
      </p>

      <div className="flex items-center justify-center mt-6 relative">
        <button onClick={prevSlide} className="absolute left-0 p-2 bg-white rounded-full shadow-md">
          <ChevronLeft className="w-6 h-6 text-blue-500" />
        </button>

        <div className="flex overflow-hidden space-x-4">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`transition-transform duration-300 ease-in-out ${
                index === current ? "scale-100" : "scale-90 opacity-50"
              }`}
            >
              <div className="relative w-60 h-36 md:w-80 md:h-44 bg-gray-200 rounded-lg overflow-hidden">
                <img src={video.thumbnail} alt="Video Thumbnail" className="w-full h-full object-cover" />
                {index === current && (
                  <button className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white bg-orange-500 rounded-full p-2" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="absolute right-0 p-2 bg-white rounded-full shadow-md">
          <ChevronRight className="w-6 h-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
}
