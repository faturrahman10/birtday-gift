import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const images = [
    "/image/aib 1.jpg",
    "/image/aib 2.jpg",
    "/image/aib 3.jpg",
    "/image/aib 4.jpg",
    "/image/aib 5.jpg",
    "/image/aib 6.jpg",
    "/image/aib 7.jpg",
    "/image/aib 8.jpg",
    "/image/aib 9.jpg",
    "/image/aib 10.jpg",
    "/image/aib 11.jpg",
    "/image/aib 12.jpg",
    "/image/aib 13.jpg",
    "/image/aib 14.jpg",
    "/image/aib 15.jpg",
    "/image/aib 16.jpg",
    "/image/aib 17.jpg",
    "/image/aib 18.jpg",
    "/image/aib 19.jpg",
    "/image/aib 20.jpg",
    "/image/aib 21.jpg",
    "/image/aib 22.jpg",
    "/image/aib 23.jpg",
    "/image/aib 24.jpg",
  ];

  const ratios = [
    "aspect-[3/4]",
    "aspect-[4/5]",
    "aspect-square",
    "aspect-[9/14]",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="
        py-4 px-4 md:px-8 
        bg-gradient-to-b from-rose-50 via-pink-50 to-white 
        dark:from-gray-900 dark:via-gray-950 dark:to-black
        transition-colors duration-700
      "
    >
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800 dark:text-rose-100">
        Gallery💞
      </h2>

      <div className="columns-2 md:columns-4 gap-1 max-w-6xl mx-auto space-y-1">
        {images.map((img, index) => {
          const randomRatio = ratios[index % ratios.length];

          return (
            <div
              key={index}
              onClick={() => setLightbox(img)}
              className={`
                relative
                w-full overflow-hidden rounded-2xl cursor-pointer group shadow-md
                break-inside-avoid
                ${randomRatio}
              `}
            >
              <img
                src={img}
                loading="lazy"
                alt={"Memory " + index}
                className="
                  w-full h-full object-cover absolute inset-0 rounded-2xl
                  transition-transform duration-500
                  group-hover:scale-110 group-hover:brightness-75
                "
              />

              <div
                className="
                  absolute inset-0 bg-black/0 group-hover:bg-black/30
                  flex items-center justify-center transition duration-300
                "
              >
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-wide">
                  Klik untuk melihat 💖
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Lightbox"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl object-contain border border-white/20"
            />

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 rounded-full bg-white hover:bg-rose-50 h-10 text-rose-500 text-xl cursor-pointer shadow-md font-semibold transition"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;
