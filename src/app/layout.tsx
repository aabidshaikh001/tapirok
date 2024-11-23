'use client';

import React from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import './globals.css'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Root HTML structure */}
      <html lang="en">
        <head>
          <link rel="icon" href="./assets/icon.png" />
        </head>
        <body className="min-h-screen">
          {/* Header */}
          <Header/>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <Footer />
        </body>
      </html>
    </>
  );
};

export default Layout;



 