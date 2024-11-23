
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "B2B Service Provider",
  description: "Looking for a cutting-edge web application to streamline your B2B operations? Our Next.js-powered platform is designed to enhance your business performance with fast, scalable, and SEO-optimized solutions. Tailored for modern enterprises, our app ensures seamless integration and unmatched functionality for B2B service providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
