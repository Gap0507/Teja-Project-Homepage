import React from 'react';
import { MapPin, Mail, Facebook, Instagram, Twitter, TikTok } from 'lucide-react';
import TejaLogo from '../assets/TejaLifeLogo.png';
import Payment from '../assets/Payment.png';

const Footer = () => {
  return (
    <footer className="bg-[#EFF6FF] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center">
            {/* Newsletter Section */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Questions? We got you!</h2>
              <div className="flex max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#937ADF]"
                />
                <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-300">
                  JOIN TEJA
                </button>
              </div>
            </div>

            {/* Logo */}
            <img
              src={TejaLogo}
              alt="TEJA Logo"
              className="w-[483.75px] h-[150px] max-w-full object-contain mb-6"
            />

            {/* Social Icons */}
            <div className="flex gap-6 mb-8">
              <Facebook className="w-6 h-6 text-[#937ADF] cursor-pointer hover:opacity-80 transition-opacity" />
              <Instagram className="w-6 h-6 text-[#937ADF] cursor-pointer hover:opacity-80 transition-opacity" />
              <Twitter className="w-6 h-6 text-[#937ADF] cursor-pointer hover:opacity-80 transition-opacity" />
              <a href="#" className="text-[#937ADF] hover:opacity-80 transition-opacity">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>            </div>

            {/* Copyright */}
            <p className="text-sm">&copy; 2024 TEJA LLC</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col">
            {/* Help and Policies Side by Side */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Help</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">My Account</a></li>
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">FAQ's</a></li>
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Policies</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">Shipping Policy</a></li>
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">Refund Policy</a></li>
                  <li><a href="#" className="hover:text-[#937ADF] transition-colors">Terms of service</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p>5655 Silver Creek Valley Road #352<br />San Jose, CA 95138</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:hello@teja.life" className="hover:text-[#937ADF] transition-colors">
                    hello@teja.life
                  </a>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <img src={Payment} alt="Payment Methods" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;