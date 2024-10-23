import React, { useState } from 'react';
import threeline from '../assets/three-line.svg';
import { motion} from 'framer-motion';

const FounderMessage = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-[#937ADF] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-campton text-3xl md:text-5xl italic font-extrabold text-white relative inline-block">
            A WORD FROM OUR FOUNDER
            <motion.img 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              src={threeline}
              alt="Decorative lines" 
              className="absolute -top-6 -right-9 w-8 md:w-10 h-auto"
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <img
                src="//teja.life/cdn/shop/files/preview_images/5ff3cac8ad11496eab1f1a60dcddc02c.thumbnail.0000000000_800x.jpg?v=1723869927"
                alt="Founder Video Thumbnail"
                className="w-full h-full object-cover"
              />
              {!playing && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300"
                >
                  <PlayButton />
                </motion.button>
              )}
              {playing && (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  controls
                  onEnded={() => setPlaying(false)}
                >
                  <source src="https://teja.life/cdn/shop/videos/c/vp/5ff3cac8ad11496eab1f1a60dcddc02c/5ff3cac8ad11496eab1f1a60dcddc02c.HD-1080p-2.5Mbps-33339732.mp4?v=0" type="video/mp4" />
                </video>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 text-white"
          >
            <h3 className="font-campton text-xl md:text-2xl font-bold mb-4">
              Sriteja Kataru, Founder/CEO of TEJA
            </h3>
            
            <div className="font-['Baton_Turbo'] space-y-4 mb-8 text-sm md:text-base">
              <p>
                After a few years in high school, I realized something. Teenagers don't actually know very much about maintaining their health. 2-hour sleep schedules, skipping breakfast, drinking 4 cups of coffee daily, and the list goes on.
              </p>
              
              <p>That's why I founded TEJA with a 2-part mission:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide quality gummies that are actually conducive to teen growth</li>
                <li>To educate teenagers all about adolescent health and techniques on staying healthy.</li>
              </ul>
              
              <p>
                If you are a teenager (or one's parent), I urge you to join our community. Whether it's Instagram, Facebook, or Twitter, I can swear that you will learn loads about teen health.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#937ADF] px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors duration-300 text-sm md:text-base"
            >
              LEARN MORE
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PlayButton = () => (
  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/80 rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 group">
    <svg 
      width="20" 
      height="20" 
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


export default FounderMessage;