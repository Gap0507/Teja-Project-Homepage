import React from 'react';
import { motion } from 'framer-motion';
import benifitsectionimage from '../assets/benifitSection.png';
import benifitStar from '../assets/benifitsStar.png';
import starpoint from '../assets/bulletstarpoint.png';

const BenefitsSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const benefits = [
    { text: "Only made from Fruits and Herbs", color: "text-red-500" },
    { text: "Low Sugar", color: "text-blue-500" },
    { text: "Zero Artificial Sweeteners", color: "text-green-500" },
    { text: "Vegetarian", color: "text-[#937ADF]" },
    { text: "Custom Teen Formula", color: "text-orange-500" }
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center max-w-[1920px] mx-auto">
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/2 relative mt-8 lg:mt-0 p-6 lg:p-8 order-1 lg:order-2"
          {...fadeIn}
        >
          <div className="relative w-full aspect-square max-w-[850px] mx-auto">
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={benifitsectionimage} 
                alt="TEJA Gummies Product"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

           {/* Rotating star with static text */}
          <div className="absolute top-0 left-0 w-32 sm:w-40 h-32 sm:h-40 -translate-x-1/4 -translate-y-1/4">
            <motion.div 
              className="relative w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img 
                src={benifitStar}
                alt=""
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
            {/* Static text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-sm sm:text-base leading-tight text-center">
                Made in<br/>
                NSF-certified<br/>
                facility
              </p>
            </div>
          </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full lg:w-1/2 p-6 lg:p-20 order-2 lg:order-1"
          {...fadeIn}
        >
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.h2 
              className="text-[#937ADF] font-campton italic font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              ALL OF THE HEALTH<br className="hidden sm:block" />
              BENEFITS, NONE OF THE B.S.
            </motion.h2>
            
            <motion.p 
              className="text-[#937ADF] font-baton-turbo text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide font-medium mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              At TEJA, we believe that health and taste should go hand in hand. We were 
              frustrated with gummy supplements either being loaded with sugar or filled 
              with artificial ingredients that aren't good for teens. That's when we created 
              TEJA Gummies. To our delight, we crafted a formula that not only supports 
              growing bodies but also tastes incredible. Countless teens report feeling 
              healthier, more energized, and actually look forward to taking their daily 
              vitamins. Say goodbye to boring supplements and hello to a delicious, 
              nutritious routine!
            </motion.p>

            <motion.div 
              className="space-y-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {benefits.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center group cursor-pointer"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.img 
                    src={starpoint} 
                    alt="" 
                    className="w-6 h-6 mr-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className={`${item.color} font-bold text-lg sm:text-xl transition-all duration-300 group-hover:tracking-wider`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button 
              className="bg-[#937ADF] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#7b65c7] hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#937ADF] focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default BenefitsSection;
