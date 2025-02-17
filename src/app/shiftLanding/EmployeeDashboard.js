import Image from "next/image";

export default function EmployeeDashboard() {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-green-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900">Stay informed about your employees</h1>
          <ul className="space-y-3 text-gray-700">
            {[
              "Centrally manage time off requests",
              "Never miss a beat with instant notifications",
              "Accommodate employee flexibility",
              "Remote check-in from job sites",
            ].map((text, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-green-500 text-lg">✔</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <img
              src="laptop.png" 
              alt="Laptop workspace"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute top-4 left-6 bg-white shadow-md p-3 rounded-lg flex items-center space-x-2">
            <img
              src="p1.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">Amanda Young</p>
              <p className="text-xs text-gray-500">Expert Saving Money</p>
            </div>
          </div>

          <div className="absolute top-16 right-6 bg-white shadow-md p-2 rounded-lg">
            <p className="text-xs text-gray-500">Total Income</p>
            <p className="text-lg font-bold">$245.00</p>
          </div>

          <div className="absolute bottom-4 left-8 bg-white shadow-md p-3 rounded-lg flex items-center space-x-2">
            <span className="text-green-500 text-lg">✔</span>
            <p className="text-sm">Money Transfer Successful</p>
          </div>
        </div>
      </div>
    </div>
  );
}
