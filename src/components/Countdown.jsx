import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [surprise, setSurprise] = useState(false);

  useEffect(() => {
    // Ganti dengan tanggal ulang tahun pacar Anda, misalnya '2024-10-01T00:00:00' untuk 1 Oktober 2024 pukul 00:00
    const target = new Date("2024-10-01T00:00:00");

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
    }, 1000); // Update setiap detik

    return () => clearInterval(interval); // Cleanup interval saat komponen unmount
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 text-center bg-gradient-to-br from-rose-50 to-pink-100">
      <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-gray-800">
        Countdown to Your Special Day
      </h2>

      {!surprise ? (
        <div className="text-2xl md:text-4xl font-poppins text-rose-600">
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">{timeLeft.days}</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">{timeLeft.hours}</p>
              <p className="text-sm">Hours</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">{timeLeft.minutes}</p>
              <p className="text-sm">Minutes</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">{timeLeft.seconds}</p>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-700">
            Menunggu momen spesial kita... ❤️
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center"
        >
          {/* Animasi Confetti Sederhana (CSS-based) */}
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -10, opacity: 1 }}
                  animate={{ y: window.innerHeight, opacity: 0 }}
                  transition={{ duration: 3, delay: Math.random() * 2 }}
                  className="absolute w-2 h-2 bg-rose-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
            <div className="text-6xl mb-4">🎉✨</div>
            <h3 className="text-2xl font-playfair text-rose-600 mb-4">
              Surprise Time!
            </h3>
            <p className="text-lg font-poppins text-gray-700 mb-6">
              Sayang, ini adalah kejutan spesial untukmu: [Tulis pesan romantis
              panjang Anda di sini, misalnya "Kamu adalah cahaya hidupku, dan
              hari ini aku ingin memberimu..."]. Klik link rahasia untuk hadiah
              digital:{" "}
              <a
                href="[link ke video/hadiah, misalnya https://drive.google.com/...]"
                className="text-rose-500 underline hover:text-rose-700 transition"
              >
                Buka Hadiah
              </a>
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-rose-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-rose-600 transition"
              onClick={() =>
                alert("Terima kasih telah menjadi bagian hidupku! ❤️")
              }
            >
              Terima Kasih
            </motion.button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Countdown;
