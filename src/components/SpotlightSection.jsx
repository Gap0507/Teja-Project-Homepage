import React from 'react';
import { motion } from 'framer-motion';
import threeline from '../assets/BlueThreeLine.png';
import Product1 from '../assets/SpotlightProduct1.png';
import Product2 from '../assets/SpotlightProduct2.png';
import emoji1 from '../assets/emoji1.png';
import emoji2 from '../assets/emoji2.png';
import emoji3 from '../assets/emoji3.png';
import emoji4 from '../assets/emoji4.png';
import emoji5 from '../assets/emoji5.png';

const GummySpotlight = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const spotlightData = {
    immunity: {
      title: "IMMUNITY GUMMIES",
      features: [
        {
          icon: emoji1,
          text: "Powered with Vitamin C, D, Zinc",
          color: "text-red-500"
        },
        {
          icon: emoji2,
          text: "Contains Acerola Cherry",
          color: "text-blue-500"
        },
        {
          icon: emoji3,
          text: "Orange & Tangerine Flavor",
          color: "text-orange-500"
        }
      ],
      productImage: Product1
    },
    sleep: {
      title: "SLEEP GUMMIES",
      features: [
        {
          icon: emoji4,
          text: "Blend of Chamomile, Passionflower, Lemon Balm",
          color: "text-red-500"
        },
        {
          icon: emoji2,
          text: "Elderberry flavor",
          color: "text-blue-500"
        },
        {
          icon: emoji5,
          text: "0.3 mg nudge dose melatonin",
          color: "text-orange-500"
        }
      ],
      productImage: Product2
    }
  };

  return (
    <motion.section 
      className="w-full bg-[#C9EBE5] py-8 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-none mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-[#937ADF] text-3xl md:text-5xl font-extrabold italic relative inline-block">
            GUMMY SPOTLIGHT
            <motion.img 
              src={threeline}
              alt="Decorative lines" 
              className="absolute -top-6 -right-10 w-8 md:w-10 h-auto"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
            />
          </h2>
          <motion.p 
            className="text-gray-600 text-lg md:text-xl font-bold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Just a little overview of our crazy good gummies.
          </motion.p>
        </motion.div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          {Object.entries(spotlightData).map(([key, data], index) => (
            <motion.div 
              key={key} 
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Product Image */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full">
                  <motion.div 
                    className="bg-transparent rounded-3xl h-full w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={data.productImage}
                      alt={`${key} gummies`}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </motion.div>
                </div>
                <div className="flex justify-center md:justify-start md:ml-36 mt-4">
                  <motion.button 
                    className="bg-[#937ADF] text-white px-8 md:px-10 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    SHOP NOW
                  </motion.button>
                </div>
              </div>
              
              {/* Product Text and Features */}
              <div className="w-full md:w-1/2 flex flex-col h-full">
                <motion.h3 
                  className="text-[#937ADF] text-2xl md:text-4xl italic font-extrabold mb-4 md:mb-6 text-center md:text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {data.title}
                </motion.h3>

                <ul className="space-y-6 md:space-y-14 flex-1">
                  {data.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center gap-4 md:gap-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.2 + 0.4 }}
                    >
                      <img 
                        src={feature.icon} 
                        alt="Feature icon" 
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      />
                      <span className={`text-lg md:text-[28px] font-extrabold font-campton ${feature.color}`}>
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GummySpotlight;