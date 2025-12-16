import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function GalleryPopup({ open, onClose, onConfirm }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm px-4 flex items-center justify-center z-[9998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full border-2 border-rose-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Kepo ko toh?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Lanjut mi, liat foto super spesial mu
              </p>
              <div className="flex gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="cursor-pointer px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl font-semibold transition-colors"
                >
                  Nanti deh
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onConfirm}
                  className="cursor-pointer px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Aku kepo, lanjut!
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
