import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

//  FALLING CONFETTI
const ConfettiPiece = () => {
  const colors = ["#ff7a7a", "#ffd36e", "#8df7b5", "#8ed6ff", "#d4a8ff"];

  const startX = Math.random() * window.innerWidth;
  const drift = (Math.random() - 0.5) * 120;
  const size = 3 + Math.random() * 4;

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

//  CONFETTI EXPLOSION
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

//  COUNTDOWN COMPONENT
const Countdown = ({ onFinish }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [done, setDone] = useState(false);
  const [confettiList, setConfettiList] = useState([]);

  useEffect(() => {
    const target = new Date("2026-01-07T00:14:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setDone(true);
        clearInterval(interval);
        fireExplosion();
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

  useEffect(() => {
    if (!done) return;

    const interval = setInterval(() => {
      setConfettiList((prev) => {
        const updated = [...prev, { id: Date.now() + Math.random() }];
        return updated.slice(-220);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [done]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-900 dark:to-gray-800 px-4">
      {done && (
        <div className="fixed inset-0 pointer-events-none z-[5]">
          {confettiList.map((c) => (
            <ConfettiPiece key={c.id} />
          ))}
        </div>
      )}

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
            {["days", "hours", "minutes", "seconds"].map((key) => (
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
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {key === "days"
                    ? "Hari"
                    : key === "hours"
                    ? "Jam"
                    : key === "minutes"
                    ? "Menit"
                    : "Detik"}
                </p>
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
        <AnimatePresence>
          <motion.div
            key="surprise"
            className="relative z-20 text-center max-w-lg mx-auto px-4"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Title */}
            <motion.h3
              className="
                text-4xl md:text-5xl font-playfair font-semibold
                text-rose-600 dark:text-rose-300
                mb-10
              "
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Surprise Time
            </motion.h3>

            {/* Message */}
            <motion.div
              className="
                text-base md:text-lg
                text-gray-700 dark:text-gray-200
                leading-relaxed
                space-y-3
                mb-12
              "
              initial="hidden"
              animate="show"
              variants={{
                show: {
                  transition: { staggerChildren: 0.18 },
                },
              }}
            >
              {[
                "Hallo tante dindaa 😊",
                "Ciee, balik lagi — 7 Januari mi le",
                "Ultah’i ban, umur kita akhirnya sama 🥳",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {text}
                </motion.p>
              ))}

              <motion.p
                className="pt-6 text-sm opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Klik di bawah
              </motion.p>
            </motion.div>

            {/* Button */}
            <motion.button
              onClick={onFinish}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="
                cursor-pointer
                inline-flex items-center gap-2
                px-10 py-3
                rounded-full
                bg-rose-500
                text-white
                font-medium
                text-base md:text-lg
                shadow-md
                hover:bg-rose-600
                transition-all
              "
            >
              🎁 Hadiah
            </motion.button>

            {/* Footer */}
            <motion.p
              className="
                mt-12
                text-sm
                text-gray-600 dark:text-gray-400
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Ma’acii, silahkan lanjut ❤️
            </motion.p>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Countdown;
