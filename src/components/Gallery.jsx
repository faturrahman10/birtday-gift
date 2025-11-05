import React, { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const images = ["/images/mem1.jpg", "/images/mem2.jpg"]; // Tambahkan lebih banyak

  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800">
        Kenangan Kita
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setLightbox(img)}
          >
            <img
              src={img}
              alt={`Memory ${index}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Lightbox"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
