"use client";
import Image from "next/image";

export default function SurveyLandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white text-center py-4 text-xl font-semibold">
        Header
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl text-center mt-12">
        <h1 className="text-4xl font-bold">Get more insights with surveys</h1>
        <p className="text-gray-600 mt-4 text-lg px-4">
          Create uniquely engaging satisfaction surveys, employee appraisals,
          marketing campaigns, feedback forms, and so much more!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
            Start for free
          </button>
          <button className="border border-gray-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Talk to sales
          </button>
        </div>
      </main>

      {/* Image Section */}
      <div className="w-full max-w-5xl mt-12 px-4 flex justify-center">
        <Image
          src="/heroimg.png"
          alt="Survey Dashboard"
          width={900}
          height={500}
          className="rounded-lg shadow-md"
        />
      </div>
      <section className="flex flex-col items-start w-full px-4 md:px-12 lg:px-20 mt-16">
        {/* Heading Section */}
        <div className="w-full md:w-3/4 lg:w-2/3 text-left mb-8">
          <div className="flex items-center gap-2">
            <Image width={20} height={30} src="/icon1.png" alt="Icon" />
            <h3 className="text-sm font-semibold">
              Easily create appealing online surveys
            </h3>
          </div>
          <h2 className="text-3xl font-bold mt-2">
            Design, share, and analyze in three intuitive steps
          </h2>
        </div>

        {/* Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl">
          {/* Large Box 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold">
              Design and test your survey
            </h3>
            <p className="text-gray-600 mt-2">
              Create beautiful and clear surveys with intuitive UI.
            </p>
            <Image
              src="/boximg1.png"
              width={500}
              height={300}
              alt="Survey UI"
              className="mt-4"
            />
          </div>

          {/* Small Box 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold">Share and collect data</h3>
            <p className="text-gray-600 mt-2">
              Share surveys via multiple platforms.
            </p>
            <Image
              src="/boximg2.png"
              width={500}
              height={300}
              alt="Survey Sharing"
              className="mt-4"
            />
          </div>

          {/* Small Box 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold">Analyze answers</h3>
            <p className="text-gray-600 mt-2">
              Review responses and gain insights.
            </p>
            <Image
              src="/boximg3.png"
              width={500}
              height={300}
              alt="Survey Analytics"
              className="mt-4"
            />
          </div>

          {/* Large Box 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold">Live Sessions</h3>
            <p className="text-gray-600 mt-2">
              Host real-time survey interactions.
            </p>
            <Image
              src="/boximg4.png"
              width={500}
              height={300}
              alt="Live Surveys"
              className="mt-4"
            />
          </div>
          {/* Small Box 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold">
              Design and test your survey
            </h3>
            <p className="text-gray-600 mt-2">
              Create beautiful and clear surveys with intuitive UI.
            </p>
            <Image
              src="/boximg1.png"
              width={500}
              height={300}
              alt="Survey UI"
              className="mt-4"
            />
          </div>

          {/* Large Box 6 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold">Share and collect data</h3>
            <p className="text-gray-600 mt-2">
              Share surveys via multiple platforms.
            </p>
            <Image
              src="/boximg2.png"
              width={500}
              height={300}
              alt="Survey Sharing"
              className="mt-4"
            />
          </div>
        </div>
      </section>
       {/* Join Users Section */}
       <div className="flex flex-col md:flex-row justify-between items-center w-full bg-white p-6 mt-12 rounded-lg shadow-md">
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl font-bold">Join 12 million users</h2>
          <p className="text-gray-600">who grow their business with webseeder</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded">Start for free</button>
            <button className="border border-gray-300 px-4 py-2 rounded">Talk to sales</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-0 md:w-1/2">
          <Image src="/graphic.png" width={400} height={50} alt="GDPR Ready" className="object-contain" />
        </div>
      </div>

       {/* Customer Review Section */}
       <section className="w-full mt-16 bg-gray-900 text-white py-12 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-8">
          <div className="text-left md:w-3/4 lg:w-2/3">
            <h2 className="text-3xl font-bold">
              Loved by <span className="text-gray-300">Builders.</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Websdeer is the customer relationship management tool for everyone who values collaboration.
            </p>
          </div>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded mt-2 mb-4 md:mt-0">More customer stories</button>
          
        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="bg-gray-800 shadow-md rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/Avatar.png" width={40} height={40} className="rounded-full" alt="User" />
                <div>
                  <h4 className="text-sm font-semibold">John Doe</h4>
                  <p className="text-xs text-gray-400">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-300">"Amazing tool! Our team productivity increased significantly after using Websdeer."</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="w-full h-200 bg-blue-600 text-white text-center py-4 text-xl font-semibold">
        Footer
      </footer>
    </div>
  );
}
