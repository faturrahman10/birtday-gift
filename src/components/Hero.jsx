import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-playfair text-white mb-4 drop-shadow-lg">
          Selamat Ulang Tahun, [Nama Pacar] ❤️
        </h1>
        <p className="text-lg md:text-xl font-poppins text-rose-200 mb-8">
          Website ini adalah hadiah kecil untuk merayakan cinta kita yang tak
          ternilai.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-rose-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-rose-600 transition"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          Mulai Cerita Kita
        </motion.button>
      </motion.div>

      {/* Efek Bokeh Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-32 h-32 bg-rose-300 rounded-full opacity-20 blur-xl animate-pulse absolute top-10 left-10"></div>
        <div className="w-24 h-24 bg-lavender-300 rounded-full opacity-30 blur-lg animate-pulse absolute bottom-20 right-20"></div>
      </div>
    </section>
  );
};

export default Hero;
