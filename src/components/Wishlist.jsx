import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Wishlist = () => {
  const [wishes, setWishes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishes(JSON.parse(saved));
    else {
      const initial = [
        { text: "Pergi ke pantai bersama 🏖️", done: false },
        { text: "Nonton film bareng 🍿", done: false },
        { text: "Dinner romantis 🌙✨", done: false },
      ];
      setWishes(initial);
      localStorage.setItem("wishlist", JSON.stringify(initial));
    }
  }, []);

  const toggleDone = (index) => {
    const updated = [...wishes];
    updated[index].done = !updated[index].done;
    setWishes(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const addWish = () => {
    if (!input.trim()) return;

    const updated = [...wishes, { text: input.trim(), done: false }];
    setWishes(updated);
    setInput("");
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const deleteWish = (index) => {
    const updated = wishes.filter((_, i) => i !== index);
    setWishes(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-10 text-gray-800 dark:text-rose-100">
        Wishlist Kita 💖
      </h2>

      {/* Input Tambah Wishlist */}
      <div className="max-w-xl mx-auto flex gap-3 mb-10">
        <input
          type="text"
          placeholder="Tambahkan wishlist baru..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-xl border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 outline-none focus:ring-2 ring-rose-300 dark:ring-rose-600 transition"
        />
        <button
          onClick={addWish}
          className="px-5 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white shadow-md transition"
        >
          Add
        </button>
      </div>

      {/* List Wishlist */}
      <ul className="max-w-xl mx-auto space-y-4">
        <AnimatePresence>
          {wishes.map((wish, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-between items-center bg-rose-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm"
            >
              {/* Checkbox + text */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={wish.done}
                  onChange={() => toggleDone(index)}
                  className="h-5 w-5 accent-rose-500 cursor-pointer"
                />

                <span
                  className={`text-gray-700 dark:text-gray-200 font-medium ${
                    wish.done ? "line-through opacity-50" : ""
                  }`}
                >
                  {wish.text}
                </span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteWish(index)}
                className="text-gray-400 hover:text-red-500 transition text-xl"
              >
                ✕
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
};

export default Wishlist;
