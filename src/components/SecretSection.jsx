import React from "react";
import { motion } from "framer-motion";

const SecretSection = ({ unlocked }) => {
  if (!unlocked) return null; // Tersembunyi jika belum unlocked

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 px-4 md:px-8 text-center bg-gradient-to-br from-lavender-100 to-rose-50"
    >
      <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-gray-800">
        Rahasia Khusus untukmu 💖
      </h2>
      <p className="text-lg font-poppins text-gray-700 mb-6 max-w-2xl mx-auto">
        Wow, kamu menemukan rahasia ini! Ini adalah pesan eksklusif yang hanya
        bisa dibuka dengan cara spesial. [Ganti dengan pesan rahasia Anda,
        misalnya: "Sayang, aku ingin bilang bahwa kamu adalah alasan aku
        tersenyum setiap hari. Ini foto kita yang paling favorit..."]
      </p>
      {/* Tambahkan gambar/video rahasia */}
      <img
        src="/images/secret-photo.jpg"
        alt="Secret Memory"
        className="w-64 h-64 object-cover rounded-lg shadow-lg mx-auto mb-6"
      />
      {/* Atau video: <video controls className="w-64 h-64 mx-auto"><source src="/videos/secret-video.mp4" type="video/mp4" /></video> */}
      <p className="text-sm text-gray-500">
        Klik ikon hati di bawah 3 kali untuk membuka ini lagi kapan saja.
      </p>
    </motion.section>
  );
};

export default SecretSection;
