import React, { useState } from "react";
import { motion } from "framer-motion";

const Letter = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-4 md:px-8 text-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-block cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          src="/images/envelope.png"
          alt="Envelope"
          className="w-32 h-32 mx-auto"
        />
        <p className="mt-4 font-poppins">Klik untuk membuka surat</p>
      </motion.div>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <p className="font-playfair text-lg">
            Sayang, ini adalah surat dari hatiku untukmu... [Tulis surat panjang
            Anda di sini].
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Letter;
