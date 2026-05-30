import React from "react";
import { LuShieldPlus } from "react-icons/lu";
import {
  IoIosSearch,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from "react-icons/io";
import Card from "../components/Card";
import { ProductData } from "../mock/db";
import { Link } from "react-router-dom";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row items-center gap-10 bg-[#EEF2F6]">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-start mt-10 text-primary-700">
            Quality Healthcare for You and Your Family
          </h1>
          <p className="text-start mt-4 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
            Accessible, expert medical care powered by technology and delivered
            with compassion. Your health is our pulse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-[#EEF2F6] hover:text-primary-700 hover:border hover:border-primary-700 transition duration-300 w-full sm:w-auto">
              Book Appointment
            </button>
            <button className="bg-white text-primary-700 px-6 py-3 rounded-lg hover:bg-primary-700 hover:text-white transition duration-300 border border-primary-700 w-full sm:w-auto">
              Find Doctor
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="Booking Appointment"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 px-4 py-3 rounded-lg shadow-lg max-w-xl w-full">
              <div className="flex items-start gap-4">
                <MdOutlineHealthAndSafety className="w-12 h-12 p-2 bg-green-200 text-green-700 rounded-full" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-700 text-start">
                    Certified Specialists
                  </h2>
                  <p className="text-gray-600 mt-1 text-start">
                    Top-rated medical professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="flex flex-col gap-6 justify-start bg-amber-50 px-6 py-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <LuShieldPlus className="w-10 h-10 text-primary-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-start text-primary-700">
                Symptoms Checker
              </h2>
            </div>
            <p className="text-start">
              Describe how you're feeling and we'll suggest the right department
              for you.
            </p>
            <div className="relative">
              <IoIosSearch className="absolute left-3 top-3 w-6 h-6 text-gray-500" />
              <input
                type="text"
                placeholder="e.g., persistent headache, joint pain, fever..."
                className="w-full pl-10 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Recommended departments
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button className="bg-green-500 text-black px-4 py-2 rounded-2xl hover:bg-gray-300 transition duration-300">
                General Medicine
              </button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-2xl hover:bg-green-500 transition duration-300">
                Neurology
              </button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-2xl hover:bg-green-500 transition duration-300">
                Orthopedics
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-primary-700 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Wait Times</h2>
              <p className="text-white">Current average emergency wait.</p>
              <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-white">
                15 <span className="text-2xl text-white">mins</span>
              </h2>
            </div>
            <div className="bg-gray-500 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#EEF2F6]">
                Online Portal
              </h2>
              <p className="text-[#EEF2F6]">
                Access results, billings and history.
              </p>
              <button className="bg-[#EEF2F6] text-black px-4 py-2 rounded-lg hover:bg-primary-700 hover:text-white transition duration-300 mt-4 w-full">
                Login to Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Department Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary-700 mb-8">
          Our Medical Departments
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Providing world-class healthcare across multiple specialties with
          state-of-the-art technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-primary-700 mb-2">
              Cardiology
            </h3>
            <p className="text-gray-600">
              Comprehensive heart care from prevention to complex surgery.
            </p>
            <Link
              to="/cardiology"
              className="text-primary-700 flex font-bold mt-4 hover:underline"
            >
              Learn More <IoIosArrowRoundForward className="ml-1 mt-1" />
            </Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-primary-700 mb-2">
              Pediatrics
            </h3>
            <p className="text-gray-600">
              Dedicated care for the unique needs of infants and children.
            </p>
            <Link
              to="/pediatrics"
              className="text-primary-700 flex font-bold mt-4 hover:underline"
            >
              Learn More <IoIosArrowRoundForward className="ml-1 mt-1" />
            </Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-primary-700 mb-2">
              Neurology
            </h3>
            <p className="text-gray-600">
              Advanced diagnostics for brain and nervous system disorders.
            </p>
            <Link
              to="/neurology"
              className="text-primary-700 flex font-bold mt-4 hover:underline"
            >
              Learn More <IoIosArrowRoundForward className="ml-1 mt-1" />
            </Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-primary-700 mb-2">
              Oncology
            </h3>
            <p className="text-gray-600">
              Expert cancer treatment with a personalized patient focus.
            </p>
            <Link
              to="/oncology"
              className="text-primary-700 flex font-bold mt-4 hover:underline"
            >
              Learn More <IoIosArrowRoundForward className="ml-1 mt-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-700 mb-2">
              Meet Our Specialists
            </h2>
            <p className="text-gray-600">
              Top-rated doctors ready to provide the best care.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/specialists"
              className="text-primary-700 font-bold hover:underline"
            >
              See all Specialists
            </Link>
            <IoIosArrowForward className="text-primary-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {ProductData.map((item) => (
            <Card
              key={item.id}
              photos={item.image}
              title={item.name}
              description={item.description}
              nextAvailable={item.nextAvailable}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* Data Section */}
      <div className="container mx-auto px-4 py-12 rounded-2xl bg-[#EEF2F6] mt-8 mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start text-primary-700 mb-2">
          Your health data, anywhere.
        </h2>
        <p className="text-start text-gray-600 mb-12 max-w-3xl">
          Access test results, request prescription refills, and message your
          doctor securely through our HIPAA-compliant Patient Portal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <button className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-[#EEF2F6] hover:text-primary-700 hover:border hover:border-primary-700 transition duration-300 w-full sm:w-auto">
            Sign in Now
          </button>
          <button className="bg-white text-primary-700 border border-primary-700 px-6 py-3 rounded-lg hover:bg-primary-700 hover:text-white transition duration-300 w-full sm:w-auto">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
