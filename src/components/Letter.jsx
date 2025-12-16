import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Letter = () => {
  const [open, setOpen] = useState(false);

  // Lock scroll background
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

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
          className="w-40 md:w-48 mx-auto drop-shadow-lg"
        />
      </motion.div>
      <p className="font-playfair text-2xl text-rose-300 text-center">
        Greeting Card
      </p>

      <div className="mt-3 text-center dark:text-white/80 text-gray-500 text-xs">
        <p>💡 Kartu ucapan dari fatur, dibaca yaah</p>
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

            {/* Scrollable wrapper */}
            <motion.div
              className="fixed inset-0 z-53 overflow-y-auto overflow-x-hidden flex items-center justify-center px-4 py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative">
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setOpen(false)}
                  className="
                    absolute -top-3 -right-3 bg-white text-rose-500 text-xl 
                    w-10 h-10 rounded-full flex items-center justify-center shadow-md
                    z-50 font-semibold cursor-pointer
                  "
                >
                  X
                </button>

                {/* Modal Card */}
                <motion.div
                  initial={{ scale: 0.9, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    bg-rose-50 max-w-lg w-full rounded-2xl shadow-2xl border border-rose-200
                    overflow-hidden
                  "
                >
                  {/* Header */}
                  <div className="p-4 pb-4">
                    <h3 className="font-playfair text-xl text-rose-400">
                      Suratnya Patur 💌
                    </h3>
                  </div>

                  {/* BODY */}
                  <div className="px-6 pb-8 overflow-y-auto max-h-[70vh]">
                    <p className="font-poppins text-gray-700 leading-relaxed text-sm text-justify">
                      Allo tantipku imutku🥰,
                      <br />
                      <br />
                      Apara ditulis nte surat le😂, berdoa dulu deh, semoga
                      sehat dan kuat terus jiwa raganya "anjaay jiwa raga",
                      ndapapa sakit-sakit dikit sekali-kali, panas-panas dikit,
                      bolokan dikit, atau batok-batok dikit, yang penting
                      sembuhnya cepat terus sehat-sehat lagi, kalo kurang imun,
                      bilang saja, nanti{" "}
                      <span className="font-semibold">kupeluk</span>😁
                      <br />
                      <br />
                      Pokoknya sehat selalu, bahagia selalu, karirnya lancar,{" "}
                      <span className="font-semibold">
                        sama jangan sering marah-marah😂😂
                      </span>
                      <br />
                      <br />
                      Aeh, aku tak tau lah bikin kata-kata romantis, agak geli
                      na haha😂, intinya sayang kamu dindaa, lopyuu dindaa❤️😘,
                      semoga selamanya ki, maap masi belum jadi laki-laki yang
                      mapan, tapi pasti usaha terusna wujudkan'i semuanya.
                      semoga nda bosan sama cowok satu ini hehee😁
                      <br />
                      <br />
                      Nda bisa bikir surat panjang-panjang karna kepenuhan nanti
                      layarnya haha, segitu dulu yaa beccu imutkuu😘😘
                    </p>
                  </div>
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
