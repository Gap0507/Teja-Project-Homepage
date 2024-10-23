import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import threeline from '../assets/BlueThreeLine.png';
import { motion, AnimatePresence } from 'framer-motion';

const CustomerPlayButton = () => (
  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 group">
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className="text-[#937ADF] group-hover:scale-110 transition-transform duration-300"
    >
      <path 
        d="M8 5v14l11-7z" 
        fill="currentColor"
      />
    </svg>
  </div>
);

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [playing, setPlaying] = useState(false);

  const reviews = [
    {
      id: 1,
      videoUrl: "https://teja.life/cdn/shop/videos/c/vp/4dda352ec771449b91234d8588370516/4dda352ec771449b91234d8588370516.HD-1080p-2.5Mbps-34087853.mp4?v=0",
      thumbnail: "//teja.life/cdn/shop/files/preview_images/4dda352ec771449b91234d8588370516.thumbnail.0000000000_500x.jpg?v=1725279957",
      name: "Sarah Johnson"
    },
    {
      id: 2,
      videoUrl: "https://teja.life/cdn/shop/videos/c/vp/96db3933490641a3996223a7bcdcd123/96db3933490641a3996223a7bcdcd123.HD-1080p-2.5Mbps-34088219.mp4?v=0",
      thumbnail: "//teja.life/cdn/shop/files/preview_images/96db3933490641a3996223a7bcdcd123.thumbnail.0000000000_500x.jpg?v=1725280358",
      name: "Michael Chen"
    },
    {
      id: 3,
      videoUrl: "https://teja.life/cdn/shop/videos/c/vp/ea6ad812143e45399e563052343178e7/ea6ad812143e45399e563052343178e7.HD-1080p-2.5Mbps-34088453.mp4?v=0",
      thumbnail: "//teja.life/cdn/shop/files/preview_images/ea6ad812143e45399e563052343178e7.thumbnail.0000000000_500x.jpg?v=1725280558",
      name: "Emma Davis"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    setPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    setPlaying(false);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = reviews.length - 1;
      if (index >= reviews.length) index = 0;
      visibleSlides.push({ ...reviews[index], position: i });
    }
    return visibleSlides;
  };

  return (
    <section className="w-full bg-[#FFF5F1] py-8 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-[#937ADF] text-3xl md:text-5xl font-extrabold italic relative inline-block">
            DON'T BELIEVE US?
            <motion.img 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              src={threeline}
              alt="Decorative lines" 
              className="absolute -top-6 -right-10 w-8 md:w-10 h-auto"
            />
          </h2>
          <p className="text-black font-campton font-bold text-lg md:text-xl mt-4 max-w-3xl mx-auto px-4">
            Hear from our loyal customers about their TEJA experience. #TEJAlife
          </p>
        </motion.div>

        <div className="relative px-4 md:px-16">
          <div className="flex justify-center items-center gap-4 md:gap-8">
            <AnimatePresence mode="wait">
              {getVisibleSlides().map((slide) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: slide.position === 0 ? 1 : 0.5,
                    scale: slide.position === 0 ? 1 : 0.9,
                    filter: slide.position === 0 ? 'blur(0px)' : 'blur(1px)'
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative ${
                    slide.position === 0
                      ? 'w-[300px] md:w-[400px]'
                      : 'hidden md:block w-[250px] md:w-[350px]'
                  }`}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-[#937ADF]">
                    <div className="px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#937ADF] flex items-center justify-center text-white text-sm font-semibold">
                        {slide.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                      </div>
                      <span className="text-sm font-semibold text-[#937ADF]">#TEJAlife</span>
                    </div>

                    <div className="relative aspect-square bg-gray-100">
                      <img
                        src={slide.thumbnail}
                        alt={`Review by ${slide.name}`}
                        className="w-full h-full object-cover"
                      />
                      {slide.position === 0 && !playing && (
                        <button
                          onClick={() => setPlaying(true)}
                          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300"
                        >
                          <CustomerPlayButton />
                        </button>
                      )}
                      {slide.position === 0 && playing && (
                        <video
                          className="absolute inset-0 w-full h-full object-contain bg-black"
                          autoPlay
                          controls
                          src={slide.videoUrl}
                          onEnded={() => setPlaying(false)}
                        />
                      )}
                    </div>
                    <div className="h-6 bg-[#937ADF]" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

             {/* Navigation Buttons */}
             <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-[#937ADF] group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-[#937ADF] group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;