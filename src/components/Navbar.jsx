import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconButtonVariants = {
    hover: { 
      scale: 1.1,
      rotate: 10,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-white w-full max-w-[1400px] mx-auto rounded-2xl mt-8 sm:mt-10 shadow-lg backdrop-blur-sm"
      >
        {/* Increased top padding for mobile */}
        <div className="flex items-center justify-between px-4 py-5 sm:py-4 lg:px-8">
          {/* Rest of the navbar code remains the same */}
          {/* Mobile menu button */}
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={iconButtonVariants}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8">
            {['Shop', 'About', 'Our Journal', 'Contact'].map((item) => (
              <motion.span
                key={item}
                className="font-bold font-baton-turbo cursor-pointer relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9d86e1] group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            ))}
          </div>

          {/* Center logo */}
          <motion.div 
            className="flex justify-center items-center flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src={logo} alt="Logo" className="w-[120px] sm:w-[150px] lg:w-[250px] h-auto" />
          </motion.div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {[Search, User, ShoppingCart].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                whileTap="tap"
                variants={iconButtonVariants}
                className="cursor-pointer"
              >
                <Icon size={20} className="text-gray-700 hover:text-[#9d86e1] transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile menu with smooth animation and increased spacing */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-3 pb-4 space-y-2 bg-white">
                {['Shop', 'About', 'Our Journal', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#9d86e1] hover:bg-gray-50 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;