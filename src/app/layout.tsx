'use client'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./approutes";
import ScrollToTop from "./scrolltop";
import "./globals.css";

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>TapirSoft: Your Trusted B2B Software Solutions Provider</title>
        <meta
          name="description"
          content="TapirSoft provides cutting-edge B2B software solutions tailored to streamline your business operations and drive growth. Discover how we can empower your business."
        />
        <meta
          name="keywords"
          content="TapirSoft, B2B software solutions, business software, enterprise solutions, software provider, business growth, streamline operations"
        />
        <meta name="author" content="TapirSoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
      </head>
      <body>
        <Router>
          <ScrollToTop />
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </body>
    </html>
  );
}
