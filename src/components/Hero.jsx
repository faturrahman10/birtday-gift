import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
        relative h-screen overflow-hidden flex items-center justify-center
        transition-colors duration-700
        bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100
        dark:from-gray-900 dark:via-gray-950 dark:to-black
      "
    >
      {/* 🔮 Background animasi gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #f9a8d4, #c084fc, #fda4af)",
            "linear-gradient(135deg, #c084fc, #f472b6, #a78bfa)",
            "linear-gradient(135deg, #f9a8d4, #c084fc, #fda4af)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "300% 300%",
          filter: "blur(100px)",
          opacity: 0.25,
        }}
      />

      {/* 🌑 Overlay agar teks kontras di kedua mode */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/50 backdrop-blur-[2px] transition-colors duration-700" />

      {/* ✨ Bokeh Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 ? "#ffb6c1" : "#a78bfa"
            } 0%, transparent 70%)`,
            width: `${Math.random() * 120 + 40}px`,
            height: `${Math.random() * 120 + 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.25,
            filter: "blur(20px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🎉 Confetti */}
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={`confetti-${i}`}
          className="absolute block w-2 h-2 rounded-full"
          style={{
            background: ["#f472b6", "#c084fc", "#f9a8d4", "#fda4af"][
              Math.floor(Math.random() * 4)
            ],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.8,
          }}
          animate={{
            y: [0, 120, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* 🩷 Konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-8"
      >
        <h1
          className="
            text-5xl md:text-7xl font-playfair font-bold mb-6
            text-gray-800 dark:text-white
            drop-shadow-[0_0_15px_rgba(255,192,203,0.8)]
          "
        >
          🎂 Celamat Ulang Tahun, Dinda{" "}
          <motion.span
            initial={{ scale: 1, rotate: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0],
              textShadow: [
                "0 0 10px rgba(255,105,180,0.8)",
                "0 0 25px rgba(255,182,193,1)",
                "0 0 10px rgba(255,105,180,0.8)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              inline-block text-rose-400 dark:text-pink-300
              drop-shadow-[0_0_10px_rgba(255,182,193,0.7)]
            "
          >
            ❤️
          </motion.span>
        </h1>

        <motion.p
          className="
            text-lg md:text-2xl font-poppins mb-10
            text-gray-700 dark:text-rose-100
            transition-colors duration-700
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Hadiah kecil dari cowomu yang banyak tingkah 😚
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px rgba(255,182,193,0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          className="
            bg-gradient-to-r from-pink-500 to-rose-400 text-white
            px-12 py-4 rounded-full font-semibold shadow-lg
            hover:opacity-90 transition duration-300
            dark:from-pink-400 dark:to-rose-300
          "
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          💖 Lanjut Klik Sini 💖
        </motion.button>
      </motion.div>

      {/* 🔆 Cahaya bawah animasi */}
      <motion.div
        className="
          absolute -bottom-32 w-[600px] h-[600px]
          bg-rose-500/30 dark:bg-pink-400/20
          rounded-full blur-[120px]
        "
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;
