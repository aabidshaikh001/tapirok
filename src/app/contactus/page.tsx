'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FcReadingEbook } from "react-icons/fc";

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contactNumber?: string;
  message?: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): FormErrors => {
    const formErrors: FormErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) formErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid.";
    if (!formData.contactNumber.trim()) formErrors.contactNumber = "Contact number is required.";
    if (!/^\d{10}$/.test(formData.contactNumber)) formErrors.contactNumber = "Contact number is invalid. It should be 10 digits.";
    if (!formData.message.trim()) formErrors.message = "Message is required.";
    
    return formErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('https://tapirsoft-server.onrender.com/api/contact/', formData);
        console.log(response.data);

        toast.success('Your message has been sent successfully!', {
          position: 'top-center',
        });

        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          message: '',
        });
      } catch (error) {
        console.log('There was an error submitting the form!', error);
        toast.error('Failed to send the message. Please try again later.');
      }
    }
  };

  useEffect(() => {
    setIsFormVisible(true);
  }, []);

  return (
    <div className="container lg:pt-20 mx-auto p-8 bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <ToastContainer />

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Let’s build something great together!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Just take one step forward and we can build history.</p>
      </div>

      <div
        className={`w-full max-w-md p-8 bg-white dark:bg-gray-700 shadow-lg rounded-lg transition-opacity duration-1000 ease-in-out transform ${
          isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="text"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit" 
            className="w-full text-white bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      
      {/* Address Section side by side */}
      <div className="mt-16 flex justify-between w-full max-w-4xl">
      <div className="text-center flex-1 mx-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Gurugram Office</h3>
        <div className="flex items-center justify-center">
          <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300 mr-2" />
          <p className="text-gray-600 dark:text-gray-300">3rd Floor, Sector 67, above Cyber Park,</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300">Bhondsi, Gurugram, Haryana 122102</p>
        </div>
      </div>

      <div className="text-center flex-1 mx-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Hyderabad Office</h3>
        <div className="flex items-center justify-center">
          <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300 mr-2" />
          <p className="text-gray-600 dark:text-gray-300">1st Floor, Cyber Crown, Sec-II, HUDA Techno,</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300">Madhapur, Hyderabad, 500081</p>
        </div>
      </div>
    </div>

      <div className='mt-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9409381669975!2d77.05725877428316!3d28.390851795016733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e83bb73bd9%3A0xfa27d59a72595eb0!2sTAPIRSOFT%20%7C%20Best%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1725938809460!5m2!1sen!2sin" width="600" height="450"  loading="lazy"></iframe>
      </div>

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

export default ContactUs;
