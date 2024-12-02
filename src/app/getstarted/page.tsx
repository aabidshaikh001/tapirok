'use client'
import React from 'react';
import { Link } from "react-router-dom";
import { FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import './GetStarted.css'; // Custom CSS for the page

function GetStarted() {
  return (
    <div className="get-started-container lg:mt-14 py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Let&apos;s Get Started</h1>
          <p className="mt-2 text-gray-600">
            Begin your journey with Tapirsoft and bring your ideas to life with our cutting-edge solutions.
          </p>
        </div>

        {/* Steps Section */}
        <div className="steps-section grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Step 1: Contact Us",
              description: "Reach out to us to discuss your project requirements.",
              icon: <FaPhone className="text-4xl text-orange-500" />,
            },
            {
              title: "Step 2: Consultation",
              description: "We'll arrange a consultation to understand your goals and propose solutions.",
              icon: <FaEnvelope className="text-4xl text-orange-500" />,
            },
            {
              title: "Step 3: Get Started",
              description: "Once you're ready, we'll begin working on turning your vision into reality.",
              icon: <FaCheckCircle className="text-4xl text-orange-500" />,
            },
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to get started? Contact us now and let&apos;s bring your ideas to life.
          </p>
          <Link
            to="/contactus"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition duration-500"
          >
            Contact Us
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
