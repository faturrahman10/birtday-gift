import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const images = [
    "/images/mem1.jpg",
    "/images/mem2.jpg",
    "/images/mem3.jpg",
    "/images/mem4.jpg",
    "/images/mem5.jpg",
    "/images/mem6.jpg",
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-rose-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-700">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800 dark:text-rose-100">
        Kenangan Kita 💞
      </h2>

      {/* Grid Gallery */}
      <div className="columns-2 md:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, rotate: 0.3 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md"
            onClick={() => setLightbox(img)}
          >
            <img
              src={img}
              alt={`Memory ${index}`}
              className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
            />
            {/* Overlay teks kecil saat hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition duration-300">
              <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium tracking-wide">
                Klik untuk melihat 💖
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
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
            {/* Tombol close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white text-3xl font-light hover:scale-110 transition"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
