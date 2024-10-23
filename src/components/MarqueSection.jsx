import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSection = () => {
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

  const marqueeItems = [
    "+ NutraIngredients",
    "2600+ teens in community",
    "4.7 average rating",
    "100+ 5 star reviews",
    "Orders deliver within 5 business days",
    "+ DSN",
    "4.7 average rating",
    "100+ 5 star reviews",
  ];

  return (
    <div className="overflow-hidden bg-white py-2 sm:py-4">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex">
              {marqueeItems.map((item, index) => (
                <span
                  key={index}
                  className="mx-2 sm:mx-4 text-[#937ADF] font-baton-turbo font-bold text-sm sm:text-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;