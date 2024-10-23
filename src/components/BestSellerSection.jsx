import React from 'react';
import threeline from '../assets/threelineproduct.svg';
import productImg1 from '../assets/productImg1.png'
import productImg2 from '../assets/productImg2.png'
import productImg3 from '../assets/productImg3.png'
import { motion } from 'framer-motion';

const BestSellersSection = () => {
  const products = [
    {
      title: "IMMUNITY GUMMIES",
      price: "$11.99",
      reviews: "54 Reviews",
      imageBgColor: "bg-[#C1EEE6]",
      textColor: "text-[#90D7CA]",
      image: productImg1,
      rating: 5,
      buttonBgColor: "bg-[#4bd8be]",
      buttonText: "ADD TO CART"
    },
    {
      title: "SLEEP GUMMIES",
      price: "$11.99",
      reviews: "42 Reviews",
      imageBgColor: "bg-[#D4EAC5]",
      textColor: "text-[#9DE26F]",
      image: productImg2,
      rating: 5,
      buttonBgColor: "bg-[#86ed42]",
      buttonText: "ADD TO CART"
    },
    {
      title: "PROTEIN BARS",
      price: "$11.99",
      reviews: "42 Reviews",
      imageBgColor: "bg-[#90E4C1]",
      textColor: "text-[#0199AA]",
      image: productImg3,
      rating: 5,
      buttonBgColor: "bg-[#0199AA]",
      buttonText: "SOLD OUT",
      isSoldOut: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 overflow-hidden">
      {/* Header */}
      <motion.div 
        className="relative flex flex-col items-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <motion.h2 
            className="font-campton text-5xl sm:text-6xl italic font-extrabold leading-tight text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            BEST SELLERS
          </motion.h2>
          <motion.img 
            src={threeline} 
            alt="Decorative lines" 
            className="absolute -top-3 -right-10 w-12 h-auto"
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1400px] mx-auto">
        {products.map((product, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div 
              className="w-full group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Product Image */}
              <motion.div 
                className={`relative ${product.imageBgColor} p-10 aspect-square rounded-3xl shadow-lg transition-all duration-300 group-hover:shadow-2xl`}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {product.isSoldOut && (
                  <motion.div 
                    className="absolute top-6 right-6 bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Sold out
                  </motion.div>
                )}
              </motion.div>

              {/* Product Info */}
              <div className="p-8 text-center">
                <motion.h3 
                  className={`font-campton text-2xl sm:text-3xl font-bold mb-4 ${product.textColor}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {product.title}
                </motion.h3>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-6 h-6 text-[#e93b3b]" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                  <span className="ml-3 text-base text-gray-600">{product.reviews}</span>
                </div>
                <motion.p 
                  className="text-2xl font-bold mb-6 text-gray-900"
                  whileHover={{ scale: 1.1 }}
                >
                  {product.price}
                </motion.p>
                <motion.button 
                  className={`px-10 py-4 rounded-full text-white text-lg ${
                    product.isSoldOut ? 'bg-gray-400 cursor-not-allowed' : product.buttonBgColor
                  } font-bold shadow-lg transition-all duration-300`}
                  disabled={product.isSoldOut}
                  whileHover={!product.isSoldOut ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!product.isSoldOut ? { scale: 0.95 } : {}}
                >
                  {product.buttonText}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersSection;