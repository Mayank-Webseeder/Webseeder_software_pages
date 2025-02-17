"use client";


import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Home() {
  const faqs = [
    {
      question:
        "What is Webseeder and how does it differ from other platforms?",
      answer:
        "Webseeder is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools.",
    },
    {
      question: "How does the AI-driven predictive analytics feature work?",
      answer:
        "Our AI-driven feature analyzes historical data and trends to make accurate predictions about future outcomes.",
    },
    {
      question: "Is my data secure with Webseeder?",
      answer:
        "Yes, we use industry-standard encryption and security protocols to keep your data safe.",
    },
    {
      question:
        "Can I integrate Webseeder with other tools and platforms I currently use?",
      answer:
        "Absolutely! Webseeder supports seamless integration with a variety of business tools and platforms.",
    },
    {
      question:
        "How is the pricing structured for Webseeder? Are there any hidden fees?",
      answer:
        "Our pricing is transparent with no hidden fees. You only pay for what you use.",
    },
  ];
  const invoices = [
    {
      number: "INV/2025/00001",
      customer: "John Doe",
      date: "01/15/2025",
      due: "Today",
      activity: "Meeting",
      payment: "$2,500.00",
      status: "Draft",
    },
    {
      number: "INV/2025/00002",
      customer: "Jane Smith",
      date: "01/10/2025",
      due: "5 days",
      activity: "Follow-up on payment",
      payment: "$3,200.00",
      status: "Not Paid",
    },
    {
      number: "INV/2025/00003",
      customer: "Acme Corp",
      date: "12/20/2024",
      due: "13 days ago",
      activity: "Call",
      payment: "$1,500.00",
      status: "Posted",
    },
    {
      number: "INV/2025/00004",
      customer: "Beta LLC",
      date: "12/18/2024",
      due: "15 days ago",
      activity: "Upload Document",
      payment: "$2,800.00",
      status: "Paid",
    },
    {
      number: "INV/2025/00005",
      customer: "Charlie Inc",
      date: "12/10/2024",
      due: "25 days ago",
      activity: "Include Upsell",
      payment: "$4,500.00",
      status: "Draft",
    },
    {
      number: "INV/2025/00006",
      customer: "David Enterprises",
      date: "11/30/2024",
      due: "45 days ago",
      activity: "Follow-up on payment",
      payment: "$1,750.00",
      status: "Not Paid",
    },
    {
      number: "INV/2025/00007",
      customer: "Echo Ltd",
      date: "11/25/2024",
      due: "50 days ago",
      activity: "Call",
      payment: "$2,200.00",
      status: "Posted",
    },
    {
      number: "INV/2025/00008",
      customer: "Foxtrot Solutions",
      date: "11/15/2024",
      due: "60 days ago",
      activity: "Meeting",
      payment: "$5,100.00",
      status: "Paid",
    },
    {
      number: "INV/2025/00009",
      customer: "Golf Partners",
      date: "11/05/2024",
      due: "70 days ago",
      activity: "Upload Document",
      payment: "$3,000.00",
      status: "Not Paid",
    },
    {
      number: "INV/2025/00010",
      customer: "Hotel Networks",
      date: "10/25/2024",
      due: "80 days ago",
      activity: "Follow-up on payment",
      payment: "$4,750.00",
      status: "Posted",
    },
    {
      number: "INV/2025/00011",
      customer: "India Tech",
      date: "10/15/2024",
      due: "90 days ago",
      activity: "Meeting",
      payment: "$3,300.00",
      status: "Draft",
    },
    {
      number: "INV/2025/00012",
      customer: "Juliet Enterprises",
      date: "10/05/2024",
      due: "100 days ago",
      activity: "Call",
      payment: "$2,650.00",
      status: "Paid",
    },
    {
      number: "INV/2025/00013",
      customer: "Kilo Ventures",
      date: "09/25/2024",
      due: "110 days ago",
      activity: "Include Upsell",
      payment: "$3,900.00",
      status: "Not Paid",
    },
    {
      number: "INV/2025/00014",
      customer: "Lima Industries",
      date: "09/15/2024",
      due: "120 days ago",
      activity: "Upload Document",
      payment: "$2,400.00",
      status: "Posted",
    },
    {
      number: "INV/2025/00015",
      customer: "Mike Corp",
      date: "09/05/2024",
      due: "130 days ago",
      activity: "Follow-up on payment",
      payment: "$5,600.00",
      status: "Paid",
    },
  ];
  const testimonials = [
    {
      text: "Webseeder real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
      name: "Naomi K. Johnson",
      designation: "Product Manager",
    },
    {
      text: "Real-time data processing with Webseeder has changed how we make decisions. It's a must-have tool for modern businesses.",
      name: "Michael D. Carter",
      designation: "Data Analyst",
    },
    {
      text: "Project management is smoother with Webseeder. Its dashboards provide a clear view of progress and areas of improvement.",
      name: "Sophia R. Lee",
      designation: "Project Manager",
    },
    {
      text: "Webseeder analytics have transformed how we track our growth. The insights are invaluable",
      name: "John A. Smith",
      designation: "Business Consultant",
    },
    {
      text: "The automation features save us hours of manual work. Highly recommend Webseeder Technologies",
      name: "Emma W. Clarke",
      designation: "Operations Manager",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 5;

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.customer.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );
  return (
    <div className="flex flex-col items-center px-6 md:px-12 lg:px-24 py-12 text-center">
      {/* Header Section */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        It's about time you <br /> delete invoice-template.xlsx
      </h1>
      <p className="text-gray-600 max-w-2xl mb-6">
        Harness the power of artificial intelligence to transform your business
        into the automatic age.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
          Start your free trial
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold">
          Watch a video
        </button>
      </div>

      {/* Video Section */}
      <div
        style={{ backgroundImage: `url('/imageblue.jpeg')` }}
        className="mt-12 w-full h-96 bg-cover  rounded-lg  justify-center py-20"
      >
        <button className="bg-white h-20 w-80 mt-24 pl-6 pr-8 py-3  rounded-full shadow-lg font-semibold border-4 border-[#7ca6f9]  items-center">
          <span className="bg-blue-600 text-white px-2 py-1 rounded">▶</span>{" "}
          Watch intro video
        </button>
      </div>

      {/* Accountant Section */}
      {/* <p className="mt-8 text-gray-500">Hey accountants, check out our Accounting app</p> */}

      {/* Earning Section */}
      <h2 className="mt-8 text-2xl md:text-3xl font-bold">
        Stop chasing <br /> Start earning
      </h2>
      <p className="text-gray-600 max-w-2xl mb-6">
        Track your open payments with clear statuses and due dates. <br /> Set
        reminders for entries that need follow-up.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="font-bold">📩 Click Invoice Sent</h3>
          <p className="text-gray-600 text-sm mt-2">
            Send and receive invoices instantly with automation.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="font-bold">💰 Your invoices in your Pocket</h3>
          <p className="text-gray-600 text-sm mt-2">
            Automate payments and collections effortlessly.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="font-bold">⚡ Get paid in a flash</h3>
          <p className="text-gray-600 text-sm mt-2">
            AI-driven transactions for faster payments.
          </p>
        </div>
      </div>

      {/* Invoice Table Placeholder */}
      <div className="mt-12 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto py-4">
          <input
            className="w-full sm:w-1/3 py-1.5 px-3 rounded-md border border-gray-400 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search invoices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-center text-sm  font-bold ">
                  Number
                </th>
                <th className="px-4 py-2 text-center text-sm  font-bold">
                  Customer
                </th>
                <th className="px-4 py-2 text-center text-sm font-bold">
                  Invoice Date
                </th>
                <th className="px-4 py-2 text-center text-sm font-bold">
                  Due Date
                </th>
                <th className="px-4 py-2 text-center text-sm  font-bold">
                  Activities
                </th>
                <th className="px-4 py-2 text-center text-sm  font-bold">
                  Total
                </th>
                <th className="px-4 py-2 text-center text-sm  font-bold">
                  Payment
                </th>
                <th className="px-4 py-2 text-center text-sm  font-bold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {currentInvoices.map((invoice, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {invoice.number}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {invoice.customer}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {invoice.date}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {invoice.due}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {invoice.activity}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {invoice.payment}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {invoice.status}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    <span className="inline-block py-1 px-2 rounded-full text-xs font-semibold bg-green-200 text-green-800">
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-center">
            <ReactPaginate
              pageCount={Math.ceil(filteredInvoices.length / invoicesPerPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              forcePage={currentPage - 1}
              containerClassName="flex space-x-2"
              pageClassName="px-3 py-1 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
              activeClassName="bg-blue-500 text-white"
              previousClassName="px-3 py-1 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
              nextClassName="px-3 py-1 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 text-left w-full max-w-5xl">
        <h2 className="text-xl font-bold text-center">
          All The Features Done Right.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-6">
          <div className="p-6 border rounded-lg shadow  items-start space-x-3">
            <FaCheckCircle className="text-blue-600 text-xl" />
            <span className="font-semibold">All the features done right.</span>
            <p className="mt-2 text-gray-600">
              Subscription of recurring and products...
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow  items-start space-x-3">
            <FaCheckCircle className="text-blue-600 text-xl" />
            <span className="font-semibold">Issue refunds</span>
            <p className="mt-2 text-gray-600">
              Subscription of recurring and products...
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow  items-start space-x-3">
            <FaCheckCircle className="text-blue-600 text-xl" />
            <span className="font-semibold">Sales report</span>
            <p className="mt-2 text-gray-600">
              Subscription of recurring and products...
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:underline">
            See All Features
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-12 w-full max-w-5xl mx-auto text-center">
      {/* Header Section */}
      <h2 className="text-xl font-bold">The Webseeder Experience</h2>
      <p className="text-gray-600 mt-2">
        At Webseeder, we pride ourselves on delivering top-notch AI-driven
        business analytics. But don’t take our word for it. Hear what our satisfied users have to say.
      </p>

      {/* Swiper Slider Section */}
      <div className="relative max-w-6xl mx-auto pb-16 mt-6">
        {/* Navigation Arrows (Outside Swiper) */}
        <button className="custom-prev absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-500 text-3xl z-10">
          ❮
        </button>
        <button className="custom-next absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-500 text-3xl z-10">
          ❯
        </button>

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
              <div className="w-full h-[280px] flex flex-col items-center justify-between p-6 border rounded-lg shadow-md bg-white text-center">
                {/* Text at the Top */}
                <p className="text-gray-600 flex-grow">{testimonial.text}</p>

                {/* Image Centered */}
                <div className="flex justify-center my-4">
                  <Image
                    src='/Avater2.png'
                    width={60}
                    height={60}
                    alt="User"
                    className="rounded-full"
                  />
                </div>

                {/* Name & Designation Below */}
                <div className="text-center">
                  <span className="font-semibold block">{testimonial.name}</span>
                  <span className="text-gray-400 text-sm">{testimonial.designation}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots Below the Cards */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </div>

      {/* FAQ Section */}
      <div className="mt-12 w-full max-w-5xl flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/3">
          <h2 className="text-left text-xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our frequently asked questions to learn more about our
            Neuros features, security, integration, capabilities, and more.
          </p>
        </div>
        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="text-left mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
