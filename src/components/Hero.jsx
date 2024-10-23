import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png'; // Ensure the image path is correct
import threeLinesIcon from '../assets/three-line.svg';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#9d86e1] overflow-hidden">
      {/* Semi-circle image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 right-0 h-full w-full md:w-[50%] max-w-full overflow-hidden z-0"
      >
        <img
          src={heroImage}
          alt="Hero background"
          className="h-full object-cover w-full md:rounded-tl-full md:rounded-bl-full"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-1/3 left-[-10%] md:left-[-5%] w-[90%] md:w-[45%] z-20" // Adjusted for responsive layout
      >
        <div className="relative">
          <h1 className="text-white font-campton text-4xl sm:text-5xl md:text-7xl italic font-extrabold uppercase leading-tight tracking-wide mb-6">
            On a mission <span className="relative">to<img 
              src={threeLinesIcon} 
              alt="Decorative lines" 
              className="absolute -top-6 left-[100%] w-10 h-auto"
            /></span> revolutionize teenage health
          </h1>
        </div>
        <p className="text-white text-lg sm:text-xl font-bold font-baton-turbo mb-8">
          Supplements made for teens, by teens.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 sm:px-16 py-3 sm:py-4 border-2 border-white text-white font-bold text-lg sm:text-xl font-campton hover:bg-white hover:text-[#9d88dc] transition-colors duration-300"
        >
          SHOP
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
