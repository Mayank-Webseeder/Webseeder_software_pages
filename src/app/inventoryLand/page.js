
import { ArrowRight, Check, CreditCard } from 'lucide-react';
import { PiNotebookBold } from "react-icons/pi";
import { FaCreditCard } from "react-icons/fa";
import { TbCreditCardPay } from "react-icons/tb";

import DeliveryChallan from './DeliveryChallan';

const InventoryManagement = () => {
  // Mock data for testimonials
  const testimonials = [
    {
      name: 'Nathan D. Hall',
      role: 'Project Lead',
      quote: 'Project management is smoother with Webseeder. Its dashboards provide a clear view of progress and areas of improvement.'
    },
    {
      name: 'Naomi K. Johnson',
      role: 'Product Manager',
      quote: 'Webseeder real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.'
    },
    {
      name: 'Michael O. Lopez',
      role: 'Operations Director',
      quote: 'Real-time data processing with Webseeder has changed how we make decisions. It\'s a must-have tool for modern businesses.'
    }
  ];

  return (
    <div className="min-h-screen bg-white mx-auto">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 ml-32">
          <div className="lg:w-1/2 mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Inventory management software designed for Indian businesses
            </h1>
            <p className="text-gray-600 mb-8">
              Manage orders. Track inventory. Handle GST billing. Oversee warehouses. One inventory management software to run all your inventory operations.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800">
                Start Your Free Trial
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50">
                Learn more
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 ml-5">
            {[1].map((index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4">
                <img
                  src={`banner.png`}
                  alt={`Business ${index}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src='company.png' alt='company' className='mx-auto'/>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 mx-auto">
        <div className="container mx-auto px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 ml-28">About Us</h2>
          <h3 className="text-2xl font-bold mb-6 ml-28">Empowering Innovation AI</h3>
          <p className="text-gray-600 mb-12 max-w-3xl ml-28">
            We are driven by the vision of transforming businesses with artificial intelligence. Founded in 2024, we have consistently pushed the boundaries of AI to offer smart, scalable, and intuitive solutions that drive growth and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">32+</div>
              <div className="text-gray-600">Years in AI Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20</div>
              <div className="text-gray-600">Clients Countries Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4000+</div>
              <div className="text-gray-600">Projects Successfully Implemented</div>
            </div>
          </div>
        </div>
      </section>

      {/* GST Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What makes Webseeder Inventory GST Compliant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CreditCard size={32} color='green' />,
                title: 'Save GSTINs',
                description: 'Keep a central record of the GSTIN for the registered businesses and save time.'
              },
              { icon: <TbCreditCardPay size={32} color='green'/>,
                title: 'Add HSN or SAC codes',
                description: 'You can add your HSN or SAC code for the items you sell or service you offer.'
              },
              { icon: <PiNotebookBold size={32} color='green' />,
                title: 'Generate GST-compliant invoices',
                description: 'Create invoices which will help you to get paid on time and GST requirements.'
              },
              { icon:<FaCreditCard size={32} color='green'/>,
                title: 'Automate tax calculation',
                description: 'When you prepare a sales order, the CGST, IGST or SGST rates get calculated.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg">
                <div className="text-green-700 mb-4">
                </div>
                {feature.icon}
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            From MSMEs to large-scale corporations, Webseeder Inventory supports all businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
             {
              image: <img src="order.png" alt="Order Management" />,
              title: 'Order Management',
              description: 'Dedicate more time to growing your orders than managing them.'
            },
            {
              image: <img src="warehouse.png" alt="Warehouse Management" />,
              title: 'Warehouse Management',
              description: 'Manage stock across multiple storehouses Inventory.'
            },
            {
              image: <img src="barcode.png" alt="Barcode Scanning" />,
              title: 'Barcode Scanning',
              description: 'All businesses, whether big or small, require smart management.'
            },
            {
              image: <img src="integration.png" alt="Integrations" />,
              title: 'Integrations',
              description: 'A complete range of inventory management features'
            }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                
                {feature.image}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeliveryChallan/>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">The Experience</h2>
          <p className="text-center text-gray-600 mb-12">
            At Webseeder, we pride ourselves on delivering top-notch AI-driven business analytics. But don't just take our word for it. Hear what our satisfied users have to say.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full ">
                  <img src='person.png' alt='person' className='w-12 h-12'/>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryManagement;