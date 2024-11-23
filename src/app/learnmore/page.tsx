'use client'
import React from 'react';
import { FaCode, FaUsers, FaLightbulb, FaCogs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPhp, SiTensorflow } from 'react-icons/si';
import { BsFillGearFill } from 'react-icons/bs'; // Gear icon for .NET
import { AiFillCode } from 'react-icons/ai'; // Using AiFillCode for Java as a substitute
import { motion } from 'framer-motion'; // Import Framer Motion
import '../../app/bgwhite.css'

const LearnMore = () => {
  return (
    <div className="container lg:mt-14 mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Learn More About Us
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our services, our team, and our approach to delivering cutting-edge solutions.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Services */}
        <motion.div
          className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <FaCogs className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold">Our Services</h2>
          <p className="text-gray-600 mt-2">
            We provide a range of software development services tailored to your needs.
          </p>
        </motion.div>

        {/* Section 2: Our Team */}
        <motion.div
          className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <FaUsers className="text-4xl text-green-500 mb-4" />
          <h2 className="text-xl font-semibold">Our Team</h2>
          <p className="text-gray-600 mt-2">
            Our dedicated team of experts ensures your project’s success from start to finish.
          </p>
        </motion.div>

        {/* Section 3: Innovation */}
        <motion.div
          className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold">Innovation</h2>
          <p className="text-gray-600 mt-2">
            We leverage the latest technologies to provide innovative solutions for your business.
          </p>
        </motion.div>

        {/* Section 4: Development Process */}
        <motion.div
          className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <FaCode className="text-4xl text-red-500 mb-4" />
          <h2 className="text-xl font-semibold">Development Process</h2>
          <p className="text-gray-600 mt-2">
            Our agile development process ensures flexibility and responsiveness to your needs.
          </p>
        </motion.div>
      </div>

      {/* Technologies & APIs Section */}
      <div className="mt-16">
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technologies & APIs We Use
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We utilize a range of technologies and APIs to build high-quality software solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Technology 1: React */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <FaReact className="text-4xl text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold">React</h2>
            <p className="text-gray-600 mt-2">A JavaScript library for building user interfaces.</p>
          </motion.div>

          {/* Technology 2: Node.js */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <FaNodeJs className="text-4xl text-green-600 mb-4" />
            <h2 className="text-xl font-semibold">Node.js</h2>
            <p className="text-gray-600 mt-2">A JavaScript runtime for server-side development.</p>
          </motion.div>

          {/* Technology 3: MongoDB */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <SiMongodb className="text-4xl text-green-700 mb-4" />
            <h2 className="text-xl font-semibold">MongoDB</h2>
            <p className="text-gray-600 mt-2">A NoSQL database for scalable applications.</p>
          </motion.div>

          {/* Technology 4: Express */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <SiExpress className="text-4xl text-gray-800 mb-4" />
            <h2 className="text-xl font-semibold">Express</h2>
            <p className="text-gray-600 mt-2">A web application framework for Node.js.</p>
          </motion.div>

          {/* Technology 5: PHP */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <SiPhp className="text-4xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold">PHP</h2>
            <p className="text-gray-600 mt-2">A popular general-purpose scripting language for web development.</p>
          </motion.div>

          {/* Technology 6: .NET */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <BsFillGearFill className="text-4xl text-blue-800 mb-4" />
            <h2 className="text-xl font-semibold">.NET</h2>
            <p className="text-gray-600 mt-2">A framework for building web applications and services.</p>
          </motion.div>

          {/* Technology 7: AI (TensorFlow) */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <SiTensorflow className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">AI (TensorFlow)</h2>
            <p className="text-gray-600 mt-2">An open-source library for machine learning and AI development.</p>
          </motion.div>

          {/* Technology 8: Java */}
          <motion.div
            className="bg-white bg-white1 p-6 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          >
            <AiFillCode className="text-4xl text-red-600 mb-4" />
            <h2 className="text-xl font-semibold">Java</h2>
            <p className="text-gray-600 mt-2">A high-level programming language used for building applications.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
