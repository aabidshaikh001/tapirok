'use client'
import React from 'react';
import { MdEmail, MdPayment } from "react-icons/md";
import { FaMobileAlt, FaBus, FaCreditCard, FaLandmark } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { AiFillApi, AiFillWallet } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FcReadingEbook } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <div className="bg-gradient-to-r lg:mt-14 from-gray-100 to-gray-200 min-h-screen">
      {/* Header */}
      <header className="py-10 text-center animate-fade-in">
        <h1 className="text-5xl font-bold text-gray-900 animate-pulse">
          Our Software Solutions Blog
        </h1>
        <p className="mt-4 text-gray-700 text-lg animate-fade-in-up">
          Discover our innovative software solutions designed to meet your business needs.
        </p>
      </header>

      {/* Blog Cards */}
      <section className="max-w-screen-xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'AEPS Software',
            icon: <MdPayment size={30} />,
            content: 'AEPS (Aadhaar Enabled Payment System) allows users to perform banking transactions using their Aadhaar number. Our AEPS software ensures secure and quick transactions, making it easier for businesses to provide banking services to their customers.',
          },
          {
            title: 'Recharge Software',
            icon: <FaMobileAlt size={30} />,
            content: 'Our Recharge Software offers a hassle-free way to manage mobile and DTH recharges. With real-time processing and easy integration, businesses can offer recharge services to their customers seamlessly.',
          },
          {
            title: 'BBPS Software',
            icon: <FaLandmark size={30} />,
            content: 'With our BBPS Software, businesses can easily integrate bill payment services. The Bharat Bill Payment System allows users to pay bills in a secure and efficient manner, ensuring customer satisfaction.',
          },
          {
            title: 'DMT Software',
            icon: <GiTakeMyMoney size={30} />,
            content: 'Our DMT (Direct Money Transfer) Software provides a simple and effective way for businesses to facilitate money transfers for their customers. Secure, reliable, and easy to use.',
          },
          {
            title: 'UTI (Pancard) Software',
            icon: <FaCreditCard size={30} />,
            content: 'This software simplifies the process of managing PAN card services. It helps users apply for, verify, and manage their PAN cards efficiently, making compliance easier for businesses.',
          },
          {
            title: 'Travel Software',
            icon: <RiFlightTakeoffFill size={30} />,
            content: 'Our Travel Software offers comprehensive solutions for managing bookings, itineraries, and customer relationships in the travel industry. From flight to hotel bookings, streamline your travel services with us.',
          },
          {
            title: 'APIs for Recharge, BBPS, AEPS, DMT',
            icon: <AiFillApi size={30} />,
            content: 'We provide robust APIs for all our services, including Recharge, BBPS, AEPS, and DMT. These APIs are designed for easy integration, enabling businesses to leverage our solutions without hassle.',
          },
          {
            title: 'Booking Services',
            icon: <FaBus size={30} />,
            content: 'Our booking services cover Bus, Flight, and Hotel bookings. With user-friendly interfaces and secure transactions, we make it easy for businesses to offer booking services to their customers.',
          },
          {
            title: 'Verification Services',
            icon: <BsFillPersonCheckFill size={30} />,
            content: 'We provide Aadhar Verification, Pan Card Verification, Vehicle Verification, and Cibil Score services. These services ensure secure and reliable verification processes for businesses.',
          },
          {
            title: 'Packages Available',
            icon: <AiFillWallet size={30} />,
            content: 'Explore our various packages: B2B Silver Package, B2B Gold Package, Reseller Silver Package, Reseller Gold Package, B2C Software, B2B2C Software, and Combo Packages. Tailor your solution to fit your business needs.',
          },
        ].map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 animate-slide-in-up"
          >
            <div className="flex items-center gap-2">
              <div className="text-blue-500 animate-spin-slow">{post.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 transition duration-500 group-hover:text-blue-600">
                {post.title}
              </h2>
            </div>
            <p className="mt-2 text-gray-600 transition duration-300 group-hover:text-gray-800">
              {post.content}
            </p>
          </div>
        ))}
      </section>

      {/* Contact Information Section */}
      <footer className="bg-white py-10 w-full">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            For more information about our software solutions, feel free to reach out!
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center">
  <a
    href="mailto:info@tapirsoft.com"
    aria-label="Email Us"
    className="mt-4 w-full sm:w-auto min-h-[48px] px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300 flex justify-center items-center gap-2"
  >
    <MdEmail size={22} /> Email Us
  </a>
  <a
    href="https://wa.me/919216262833"
    aria-label="Contact via WhatsApp"
    className="mt-4 w-full sm:w-auto min-h-[48px] px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded transition duration-300 flex justify-center items-center gap-2"
  >
    <FaWhatsapp size={22} /> Contact
  </a>
  <a
    href="https://calendly.com/tapirsoft/30min"
    aria-label="Book a Meeting"
    className="mt-4 w-full sm:w-auto min-h-[48px] px-6 py-3 text-gray-600 bg-gray-300 hover:bg-gray-400 rounded transition duration-300 flex justify-center items-center gap-2"
  >
    <FcReadingEbook size={22} /> Book Meeting
  </a>
</div>


          
        </div>
      </footer>
    </div>
  );
};

export default Blog;
