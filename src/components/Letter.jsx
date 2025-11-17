import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Letter = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 px-4 md:px-8 text-center">
      {/* Envelope */}
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block cursor-pointer"
      >
        <img
          src="/images/envelope.png"
          alt="Envelope"
          className="w-40 md:w-48 mx-auto drop-shadow-lg"
        />
        <p className="mt-4 font-poppins text-gray-700">
          Klik amplop untuk membuka surat 💌
        </p>
      </motion.div>

      {/* POP-UP MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Letter */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-rose-50 max-w-lg w-full rounded-2xl shadow-2xl p-8 border border-rose-200">
                {/* Tombol Close */}
                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.2 }}
                  className="absolute -top-5 -right-5 bg-white text-rose-500 text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                >
                  ❤️
                </motion.button>

                {/* Header */}
                <h3 className="font-playfair text-2xl text-rose-600 mb-4">
                  Surat Untukmu 💌
                </h3>

                {/* Body Text */}
                <p className="font-poppins text-gray-700 leading-relaxed text-[15px] md:text-base">
                  Sayang…
                  <br />
                  <br />
                  [Tulis surat panjangmu di sini. Bisa berisi cerita kalian,
                  perasaanmu yang paling dalam, ungkapan terima kasih, atau
                  harapan kalian ke depan.]
                  <br />
                  <br />
                  Kamu selalu ada di hatiku, setiap hari, setiap waktu. Terima
                  kasih sudah menjadi bagian terindah dalam hidupku. ❤️
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Letter;
