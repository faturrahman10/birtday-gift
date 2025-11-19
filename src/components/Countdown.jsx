import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [surprise, setSurprise] = useState(false);

  useEffect(() => {
    const target = new Date("2026-01-07T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setSurprise(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeKeys = [
    { key: "days", label: "Hari" },
    { key: "hours", label: "Jam" },
    { key: "minutes", label: "Menit" },
    { key: "seconds", label: "Detik" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-900 dark:to-gray-800 px-4">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400 dark:text-rose-600 text-2xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [-20, -200, -300],
              x: (Math.random() - 0.5) * 200,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {!surprise ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-rose-100 mb-10">
            Countdown ke Hari Spesial Kamu 💖
          </h2>

          {/* Time Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {timeKeys.map(({ key, label }) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                className="
                  backdrop-blur-xl bg-white/40 dark:bg-gray-700/40 
                  shadow-xl rounded-2xl p-6 
                  border border-white/50 dark:border-gray-600/50
                "
              >
                <motion.p
                  key={timeLeft[key]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-rose-600 dark:text-rose-300"
                >
                  {timeLeft[key] ?? "0"}
                </motion.p>

                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Aku tidak sabar menunggu momen indah kita berikutnya... ❤️
          </p>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            key="surprise"
            className="relative z-20 text-center max-w-xl mx-auto px-4"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            {/* Confetti */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 60 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -50, opacity: 1 }}
                  animate={{ y: window.innerHeight + 100, opacity: 0 }}
                  transition={{
                    duration: 3,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                  }}
                  className="absolute w-3 h-3 rounded-sm"
                  style={{
                    left: `${Math.random() * 100}%`,
                    backgroundColor: ["#ff6b81", "#ff4757", "#ffa502"][
                      Math.floor(Math.random() * 3)
                    ],
                  }}
                />
              ))}
            </div>

            <h3 className="text-4xl font-playfair text-rose-600 dark:text-rose-300 mb-6">
              🎉 Surprise Time! 🎉
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Sayang, ini adalah pesan spesial yang aku siapkan hanya untukmu.
              Terima kasih sudah menjadi seseorang yang sangat berarti dalam
              hidupku. Aku bersyukur setiap hari memilikimu.
              <br />
              <br />
              Klik hadiah di bawah ini ya 💝
            </p>

            <motion.a
              href="https://yourgiftlink.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="inline-block px-10 py-4 rounded-full bg-rose-500 text-white font-semibold text-lg shadow-lg hover:bg-rose-600 transition"
            >
              🎁 Buka Hadiah
            </motion.a>

            <motion.p
              className="mt-8 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Terima kasih sudah jadi bagian dari hidupku ❤️
            </motion.p>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Countdown;
