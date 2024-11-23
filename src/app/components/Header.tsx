'use client'; // Enable client-side component

import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // usePathname for dynamic active links
import Link from 'next/link'; // Next.js navigation
import { IoMenu } from 'react-icons/io5'; // Icon for menu toggle
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path dynamically

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 lg:fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <a href="#" className="flex items-center">
            <img
              src="/assets/logo.webp"
              className="mr-3 h-10 sm:h-9"
              alt="Tapirsoft Logo"
              width={100}
            />
          </a>

          {/* Contact Button and Menu Toggle */}
          <div className="flex items-center lg:order-2">
            <a
              href="https://wa.me/919216262833"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex justify-center gap-2 items-center"
            >
              Contact <FaWhatsapp size={18} />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              <IoMenu size={30} />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[ 
                { path: '/', label: 'Home' },
                { path: '/aboutus', label: 'About Us' },
                { path: '/solutions', label: 'Solutions' },
                { path: '/blog', label: 'Blog' },
                { path: '/fintech', label: 'Fintech' },
                { path: '/team', label: 'Team' },
                { path: '/contactus', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white hover:text-orange-500 ${
                      pathname === item.path ? 'text-orange-500 font-semibold' : ''
                    }`}
                    onClick={closeMenu} // Close menu on link click
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
