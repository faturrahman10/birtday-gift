import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// ==========================
//  FALLING CONFETTI — FIXED (LEMBUT + MERATA + FULLSCREEN)
// ==========================
const ConfettiPiece = () => {
  const colors = ["#ff7a7a", "#ffd36e", "#8df7b5", "#8ed6ff", "#d4a8ff"]; // warna lebih halus

  const startX = Math.random() * window.innerWidth;
  const drift = (Math.random() - 0.5) * 120;
  const size = 3 + Math.random() * 4; // kecil & smooth

  return (
    <motion.div
      initial={{
        y: -40,
        x: startX,
        opacity: 0.45 + Math.random() * 0.3,
        rotate: Math.random() * 360,
      }}
      animate={{
        y: window.innerHeight + 80,
        x: startX + drift,
        rotate: 360,
      }}
      transition={{
        duration: 7 + Math.random() * 6,
        repeat: Infinity,
        ease: "linear",
      }}
      className="fixed z-[5] rounded-sm pointer-events-none"
      style={{
        width: size,
        height: size * 0.55,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      }}
    />
  );
};

// ====================================
//  CONFETTI EXPLOSION (BIG BOOM)
// ====================================
const fireExplosion = () => {
  confetti({
    particleCount: 180,
    spread: 95,
    startVelocity: 60,
    ticks: 150,
    origin: { y: 0.5 },
    colors: ["#ff2d55", "#ff6b81", "#ff9ff3", "#ffe8ff", "#fff4f9", "#fce583"],
    scalar: 1.2,
  });
};

// ====================================
//  COUNTDOWN COMPONENT
// ====================================
const Countdown = ({ onFinish }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [done, setDone] = useState(false);
  const [confettiList, setConfettiList] = useState([]);

  // TIMER
  useEffect(() => {
    const target = new Date("2026-01-07T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setDone(true);
        clearInterval(interval);
        fireExplosion(); // ledakan pertama
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

  // Falling confetti — unlimited tetapi smooth
  useEffect(() => {
    if (!done) return;

    const interval = setInterval(() => {
      setConfettiList((prev) => {
        const updated = [...prev, { id: Date.now() + Math.random() }];
        return updated.slice(-220); // batasi agar tetap ringan
      });
    }, 120);

    return () => clearInterval(interval);
  }, [done]);

  const timeKeys = [
    { key: "days", label: "Hari" },
    { key: "hours", label: "Jam" },
    { key: "minutes", label: "Menit" },
    { key: "seconds", label: "Detik" },
  ];

  return (
    <section className="dark relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-900 dark:to-gray-800 px-4">
      {/* CONFETTI FALLING — FULLSCREEN */}
      {done && (
        <div className="fixed inset-0 pointer-events-none z-[5]">
          {confettiList.map((c) => (
            <ConfettiPiece key={c.id} />
          ))}
        </div>
      )}

      {/* COUNTDOWN MODE */}
      {!done ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-800 dark:text-rose-100 mb-10">
            Ehh langsung dibuka, hitung mundur dulu..
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {timeKeys.map(({ key, label }) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-xl bg-white/40 dark:bg-gray-700/40 shadow-xl rounded-2xl p-6 border border-white/60 dark:border-gray-600/60"
              >
                <motion.p
                  key={timeLeft[key]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-4xl md:text-5xl font-bold text-rose-600 dark:text-rose-300"
                >
                  {timeLeft[key] ?? "0"}
                </motion.p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{label}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 font-playfair text-gray-800 dark:text-rose-100">
            <span className="text-md text-rose-600 dark:text-rose-300 mb-1 block">
              SABAR😁..
            </span>
            <br />
            <span className="animate-pulse text-gray-600 dark:text-gray-300 text-base md:text-lg tracking-wider backdrop-blur-xl bg-white/40 dark:bg-gray-700/40 shadow-xl rounded-2xl px-4 py-1 border border-white/60 dark:border-gray-600/60">
              COMING SOON...
            </span>
          </p>
        </motion.div>
      ) : (
        // SURPRISE MODE
        <AnimatePresence>
          <motion.div
            key="surprise"
            className="relative z-20 text-center max-w-xl mx-auto px-4"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <h3 className="text-4xl font-playfair text-rose-600 dark:text-rose-300 mb-6">
              🎉 Surprise Time! 🎉
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Hallo tante dindaa😁
              <br />
              Ciee, balik lagi, 7 januari mi le
              <br />
              Ultah'i ban, umur kita akhirnya sama🥳
              <br />
              <br />
              <span className="font-semibold">Klik ini👇</span>
            </p>

            <motion.button
              onClick={onFinish}
              whileHover={{ scale: 1.1 }}
              className="inline-block px-8 py-3 rounded-full bg-rose-500 text-white font-semibold text-lg shadow-lg hover:bg-rose-600 transition"
            >
              🎁 Hadiah
            </motion.button>

            <motion.p
              className="mt-8 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Ma'acii, silahkan lanjut ❤️
            </motion.p>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Countdown;
