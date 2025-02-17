"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Expensepage() {
  const testimonials = [
    {
      image: "/girlsmile.png",
      text: "Be is upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
      name: "Abi Shaker",
      position: "CEO Creative Design",
    },
    {
      image: "/girlsmile.png",
      text: "Amazing service! It has transformed the way I manage expenses and reports.",
      name: "John Doe",
      position: "Manager at Segment",
    },
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold">Stop chasing paper receipts</h1>
        <p className="text-gray-600 mt-2">
          WebSeeder Expenses keeps everything organized so you can say goodbye
          to the envelope of receipts!
        </p>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800 transition">
          Get Started Now →
        </button>
      </section>

      {/* Features Section */}
      <section className="space-y-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-left md:w-3/4 lg:w-1/2">
            <div className="flex items-center gap-2">
              <Image width={20} height={30} src="/conicon1.png" alt="" />
              <h3 className="text-lg font-semibold">Always Stay Ahead</h3>
            </div>
            <h2 className="text-4xl font-bold mt-1">Submit on the go</h2>
            <p className="text-gray-600 mt-2">
              Submit expenses right from your phone! Whether enabling an expense
              or uploading a receipt using Odoo’s mobile app, never forget to
              log an expense by submitting receipts on the go, as you collect
              them!
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/exptab.png"
              width={500}
              height={300}
              alt="Submit on the go"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full flex justify-center  text-center">
          <div className="w-full text-left md:w-3/4 lg:w-1/2 xl:w-1/2 mt-8 mx-auto">
            {/* Heading & Icon */}
            <div className="flex items-center  gap-2 ">
              <Image width={20} height={30} src="/conicon2.png" alt="" />
              <h3 className="text-lg font-semibold">
                Seamless Asana Integration
              </h3>
            </div>

            {/* Paragraph (Now perfectly below heading) */}
            <p className="text-gray-600 mt-2 ">
              Receive insights and alerts without leaving your favorite
              communication platform.
            </p>
          </div>
        </div>

        {/* Feature 1 - Four ways to create records */}
        <section className="text-center mb-16">
          <div className="w-full flex justify-center">
            <div className="w-full text-left md:w-3/4 lg:w-2/3 xl:w-1/2 mt-8 mx-auto">
              <div className="flex items-center gap-2">
                <Image width={20} height={30} src="/conicon3.png" alt="" />
                <h3 className="text-lg font-semibold">Instant Updates</h3>
              </div>
              <h2 className="text-3xl font-bold mt-2">
                Four ways to create records
              </h2>
              <p className="text-gray-600 mt-2">
                Email, scan, drag and drop, or manual. Add expenses by sending
                an email using expense codes, scan a receipt, drag and drop a
                receipt into the Expense app dashboard, or manually type in an
                expense - from your phone or computer!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="text-center">
              <Image
                src="/email.png"
                width={100}
                height={100}
                alt="Email"
                className="mx-auto"
              />
              <h4 className="font-semibold mt-2">Email</h4>
              <p className="text-sm text-gray-500">
                Snap and email receipts to your expense app.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/scan.png"
                width={100}
                height={100}
                alt="Scan"
                className="mx-auto"
              />
              <h4 className="font-semibold mt-2">Scan</h4>
              <p className="text-sm text-gray-500">
                No more paper receipts, scan & upload.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/drag.png"
                width={100}
                height={100}
                alt="Drag & Drop"
                className="mx-auto"
              />
              <h4 className="font-semibold mt-2">Drag & Drop</h4>
              <p className="text-sm text-gray-500">
                Easily upload files directly.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/type.png"
                width={100}
                height={100}
                alt="Type In"
                className="mx-auto"
              />
              <h4 className="font-semibold mt-2">Type In</h4>
              <p className="text-sm text-gray-500">
                Fill out expenses manually.
              </p>
            </div>
          </div>
        </section>

        {/* Feature 2 - Every expense, one report */}
        <section className="text-center ">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full text-left md:w-3/4 lg:w-1/2">
              <div className="flex items-center gap-2">
                <Image width={20} height={30} src="/iconimg123.png" alt="" />
                <h3 className="text-lg font-semibold">
                  Deep Insights, Quick Decisions
                </h3>
              </div>
              <h2 className="text-3xl font-bold mt-2">
                Every expense, one report
              </h2>
              <p className="text-gray-600 mt-2 ">
                Stop submitting each individual expense separately. Submitting a
                single report makes life easier for everyone: the employee
                submitting expenses, the managers approving expense reports, and
                the accountants posting payments.
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <Image
                src="/tableexp.png"
                width={600}
                height={350}
                alt="Expense Report"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h4 className="text-sm text-blue-500 uppercase">Testimonials</h4>
        <h2 className="text-3xl font-bold mt-2">
          Check what our clients are saying
        </h2>
        <div className="relative mt-6 flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 p-2 bg-gray-200 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 shadow-lg rounded-lg">
            <Image
              src={testimonials[current].image}
              width={150}
              height={150}
              className="rounded-lg"
              alt="Client Image"
            />
            <div className="text-left">
              <div className="flex gap-1 text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="mt-2 text-gray-600 max-w-lg">
                {testimonials[current].text}
              </p>
              <h4 className="mt-4 font-semibold">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[current].position}
              </p>
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 p-2 bg-gray-200 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* CTA Section */}
        <div className=" mt-12 p-6 rounded-lg  w-full text-left md:w-3/4 lg:w-2/3 xl:w-1/2  mx-auto">
          <div className="flex justify-left mb-4">
            <div className="p-2 bg-black text-white rounded-full ">💼</div>
          </div>
          <h2 className="text-3xl font-bold">Ready, set, expense!</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Expense categories are pre-configured! When the Expense app is
            installed, a set of pre-loaded expense categories are available so
            you can start creating expense records right away.
          </p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Schedule a demo →
          </button>
        </div>
      </div>
    </div>
  );
}
