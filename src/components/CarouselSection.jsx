import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "As a pediatrician, I'm super impressed with TEJA Gummies. They offer a super natural formula tailored for teens, and my patients love them. Offering low sugar and zero artificial sweeteners is truly innovative. Highly recommend them!",
      author: "Dr. Geeta K."
    },
    {
      text: "TEJA Gummies have been a game-changer for my teenage patients. The natural ingredients and low sugar content make them a guilt-free choice for parents. I've seen remarkable improvements in overall health and vitality!",
      author: "Dr. Amit R."
    },
    {
      text: "As a nutritionist specializing in adolescent health, I'm thrilled to recommend TEJA Gummies. They address the unique nutritional needs of teens without compromising on taste. A brilliant product!",
      author: "Sarah L., RDN"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div 
      className="w-full relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Main carousel section */}
      <div className="bg-[#C9EBE5] py-12 sm:py-24 px-4 relative w-full">
        <div className="max-w-4xl mx-auto relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <motion.div 
                className="flex justify-center mb-8"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#e93b3b] mx-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-[#937ADF] font-baton-turbo text-xl sm:text-2xl mb-8 max-w-3xl mx-auto px-4 sm:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Author */}
              <motion.p 
                className="text-[#937ADF] font-baton-turbo font-bold text-lg sm:text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {testimonials[currentIndex].author}
              </motion.p>

              {/* Navigation Buttons - Mobile (below content) */}
              <div className="flex justify-center items-center gap-4 md:hidden">
                <motion.button
                  onClick={prevSlide}
                  className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6 text-[#937ADF]" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6 text-[#937ADF]" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons - Desktop (sides) */}
        <div className="hidden md:block">
          <motion.button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-8 h-8 text-[#937ADF]" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-8 h-8 text-[#937ADF]" />
          </motion.button>
        </div>

        {/* Rotating Star */}
        <div className="absolute right-4 w-48 sm:w-64 h-24 sm:h-32 bottom-0 translate-y-1/2">
          <motion.div 
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div 
              className="w-full h-full bg-contain bg-no-repeat bg-center"
              style={{backgroundImage: "url(https://teja.life/cdn/shop/files/Star_yellow_1_1_1.png?v=1723207867)"}}
            />
          </motion.div>
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[#f8f8f9] font-baton-turbo font-bold text-base sm:text-lg leading-tight">
              TEJA <br/>Fans<br/> Abound!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselSection;