// ProductSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import productImage from '../assets/benifitSection.png';
import productImg1 from '../assets/productImg1.png';
import productImg2 from '../assets/productImg2.png';
import productImg3 from '../assets/productImg3.png';
import Star from '../assets/Star.png';

const ProductCard = ({ product, quantity, onIncrement, onDecrement }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`relative ${product.bgColor} w-full max-w-[280px] sm:max-w-[220px] aspect-square p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transform-gpu"
          loading="lazy"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute -top-3 -right-3 z-10"
          whileHover={{ scale: 1.1 }}
        >
          {quantity === 0 ? (
            <button 
              onClick={onIncrement}
              className="w-10 h-10 rounded-full bg-[#937ADF] text-white flex items-center justify-center text-xl font-bold shadow-lg hover:bg-[#7b65c7] transition-all duration-300"
              aria-label={`Add ${product.name}`}
            >
              +
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-[#937ADF] rounded-full px-4 py-2 shadow-lg">
              <motion.button 
                onClick={onDecrement}
                className="text-white font-bold text-xl hover:opacity-80 transition-opacity"
                whileTap={{ scale: 0.9 }}
                aria-label={`Decrease ${product.name} quantity`}
              >
                -
              </motion.button>
              <span className="text-white font-bold min-w-[24px] text-center">
                {quantity}
              </span>
              <motion.button 
                onClick={onIncrement}
                className="text-white font-bold text-xl hover:opacity-80 transition-opacity"
                whileTap={{ scale: 0.9 }}
                aria-label={`Increase ${product.name} quantity`}
              >
                +
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
      <p className={`${product.textColor} font-bold mt-4 text-center text-lg sm:text-xl`}>
        {product.name}
      </p>
    </motion.div>
  );
};

const ProductSection = () => {
  const [selectedSize, setSelectedSize] = useState('4 Pack');
  const [quantities, setQuantities] = useState({
    'IMMUNITY GUMMIES': 0,
    'SLEEP GUMMIES': 0,
    'PROTEIN BARS': 0
  });

  const increment = (product) => {
    setQuantities(prev => ({
      ...prev,
      [product]: prev[product] + 1
    }));
  };

  const decrement = (product) => {
    setQuantities(prev => ({
      ...prev,
      [product]: Math.max(0, prev[product] - 1)
    }));
  };

  const packSizes = [
    { size: '4 Pack', price: '$11.99', originalPrice: '$15.99' },
    { size: '8 Pack', savings: '$10' },
    { size: '12 Pack', savings: '$20' }
  ];

  const products = [
    { name: 'IMMUNITY GUMMIES', image: productImg1, bgColor: 'bg-[#C1EEE6]', textColor: 'text-[#0199AA]' },
    { name: 'SLEEP GUMMIES', image: productImg2, bgColor: 'bg-[#D4EAC5]', textColor: 'text-[#9DE26F]' },
    { name: 'PROTEIN BARS', image: productImg3, bgColor: 'bg-[#90E4C1]', textColor: 'text-[#0199AA]' }
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full bg-[#FDF8F6]">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-100 rounded-3xl overflow-hidden h-full shadow-xl">
              <motion.img 
                src={productImage}
                alt="TEJA Bundle Products"
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Product Details Section */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[#937ADF] font-campton text-4xl sm:text-5xl lg:text-6xl font-bold">
              BUNDLE PRODUCTS
            </h1>

            {/* Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-6 h-6 text-[#e93b3b]" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-gray-600 text-lg">54 Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <motion.span 
                className="text-[#E50C68] text-4xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                $11.99
              </motion.span>
              <span className="text-gray-500 line-through text-xl">$15.99</span>
            </div>

            {/* Pack Size Selection */}
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-gray-900">Pack Size</h3>
              <div className="flex flex-wrap gap-4">
                {packSizes.map((pack) => (
                  <motion.button
                    key={pack.size}
                    onClick={() => setSelectedSize(pack.size)}
                    className={`relative px-8 py-4 rounded-xl border-2 transition-colors ${
                      selectedSize === pack.size
                        ? 'border-[#937ADF] bg-[#937ADF] text-white'
                        : 'border-gray-200 bg-white text-gray-900 hover:border-[#937ADF]'
                    } min-w-[140px] text-lg font-medium`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {pack.size}
                    {pack.savings && (
                      <motion.span 
                        className="absolute -top-3 -right-3 bg-black text-white px-4 py-1 rounded-lg text-sm font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Save {pack.savings}
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Product Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Choose your product</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.name}
                    product={product}
                    quantity={quantities[product.name]}
                    onIncrement={() => increment(product.name)}
                    onDecrement={() => decrement(product.name)}
                  />
                ))}
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-4">
              <motion.label 
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <input
                  type="radio"
                  name="purchase-type"
                  className="w-5 h-5 text-[#937ADF]"
                  defaultChecked
                />
                <span className="text-lg">One-time purchase</span>
              </motion.label>
              <motion.label 
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <input
                  type="radio"
                  name="purchase-type"
                  className="w-5 h-5 text-[#937ADF]"
                />
                <span className="text-lg">Subscribe and save for pods</span>
              </motion.label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button 
                className="flex-1 bg-[#937ADF] text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-[#7b65c7] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ADD TO CART
              </motion.button>
              <motion.button 
                className="flex-1 bg-black text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BUY IT NOW
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-[#937ADF] overflow-hidden py-6">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {Array(4).fill("GUMMIES WITH BENEFITS").map((item, index) => (
                <div key={index} className="flex items-center mx-6">
                  <motion.img 
                    src={Star}
                    alt="Star"
                    className="w-8 h-8 mr-8 ml-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="text-white font-campton italic font-extrabold text-4xl sm:text-5xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSection;
