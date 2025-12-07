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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              bg-white rounded-3xl p-8 max-w-sm w-full shadow-xl
              border border-rose-200 text-center
            "
          >
            <h2 className="text-xl font-semibold text-rose-600 mb-3">
              Kepo ko toh?
            </h2>
            <p className="text-gray-600 mb-6">
              Lanjut mi, liat foto super spesial mu
            </p>

            <div className="flex gap-3 justify-between">
              <button
                onClick={onClose}
                className="cursor-pointer px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
              >
                Nanti deh
              </button>

              <button
                onClick={onConfirm}
                className="cursor-pointer px-5 py-2 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition shadow-lg"
              >
                Aku kepo, lanjut!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
