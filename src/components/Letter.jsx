import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Letter = () => {
  const [open, setOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const typingIntervalRef = useRef(null);

  const fullText = `Allo tantipku imutku🥰,

Apara ditulis nte surat le😂, berdoa dulu deh, semoga sehat dan kuat terus jiwa raganya "anjaay jiwa raga", ndapapa sakit-sakit dikit sekali-kali, panas-panas dikit, bolokan dikit, atau batok-batok dikit, yang penting sembuhnya cepat terus sehat-sehat lagi, kalo kurang imun, bilang saja, nanti kupeluk😁

Pokoknya sehat selalu, bahagia selalu, karirnya lancar, sama jangan sering marah-marah😂😂

Aeh, aku tak tau lah bikin kata-kata romantis, agak geli na haha😂, intinya sayang kamu dindaa, lopyuu dindaa❤️😘, semoga selamanya ki, maap masi belum jadi laki-laki yang mapan, tapi pasti usaha terusna wujudkan'i semuanya. semoga nda bosan sama cowok satu ini hehee😁

Nda bisa bikin surat panjang-panjang karna kepenuhan nanti layarnya haha, segitu dulu yaa beccu imutkuu😘😘`;

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  /* Typing effect */
  useEffect(() => {
    if (!open) {
      setDisplayedText("");
      setIsTypingComplete(false);
      clearInterval(typingIntervalRef.current);
      return;
    }

    let currentIndex = 0;
    const typingSpeed = 20;

    typingIntervalRef.current = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingIntervalRef.current);
      }
    }, typingSpeed);

    return () => clearInterval(typingIntervalRef.current);
  }, [open]);

  const renderStyledText = (text) => {
    const boldPhrases = ["kupeluk", "sama jangan sering marah-marah😂😂"];

    let result = text;
    boldPhrases.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "g");
      result = result.replace(regex, "**$1**");
    });

    const parts = result.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} className="font-semibold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section className="py-1 px-4 md:px-8 text-center">
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block cursor-pointer"
      >
        <img
          src="/icon/love-letter.png"
          alt="Envelope"
          className="w-30 md:w-38 mx-auto drop-shadow-lg"
        />
      </motion.div>

      <p className="font-playfair text-2xl text-rose-300 text-center">
        Greeting Card
      </p>

      <div className="mt-3 text-center dark:text-white/80 text-gray-500 text-xs">
        <p>💡 Kartu ucapan dari fatur, dibaca yaah, klik suratnya</p>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-52"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Wrapper */}
            <motion.div
              className="fixed inset-0 z-53 overflow-y-auto overflow-x-hidden flex items-center justify-center px-4 py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative">
                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white hover:bg-rose-50 text-rose-500 text-xl cursor-pointer shadow-md font-semibold transition"
                >
                  ✕
                </button>

                {/* Card */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-rose-50 max-w-lg w-full rounded-2xl shadow-2xl border border-rose-200 overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-4">
                    <motion.h3
                      className="font-playfair text-xl text-rose-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Suratnya Patur 💌
                    </motion.h3>
                  </div>

                  {/* Body */}
                  <motion.div className="px-6 pb-8 overflow-y-auto max-h-[70vh]">
                    <p className="font-poppins text-gray-700 leading-relaxed text-sm text-justify whitespace-pre-line">
                      {renderStyledText(displayedText)}
                      {!isTypingComplete && (
                        <motion.span
                          className="inline-block w-1 h-4 bg-rose-400 ml-0.5"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                        />
                      )}
                    </p>

                    {/* Skip */}
                    {!isTypingComplete && displayedText.length > 100 && (
                      <motion.button
                        onClick={() => {
                          clearInterval(typingIntervalRef.current);
                          setDisplayedText(fullText);
                          setIsTypingComplete(true);
                        }}
                        className="mt-4 px-4 py-2 text-rose-400 text-xs rounded-lg animate-pulse cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Skip Animation ⏭️
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Letter;
