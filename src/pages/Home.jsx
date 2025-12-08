import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Letter from "../components/Letter";
import Wishlist from "../components/Wishlist";
import Quiz from "../components/Quiz";
import TimeCapsule from "../components/TimeCapsule";
import Footer from "../components/Footer";
import SecretSection from "../components/SecretSection";

function Home() {
  // Init AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // === POPUP MUSIC ===
  const [showPopup, setShowPopup] = useState(true);

  const playMusic = () => {
    if (window.__PLAY_MUSIC__) {
      window.__PLAY_MUSIC__();
    }
    setShowPopup(false);
  };

  return (
    <div
      className="
        min-h-screen transition-all duration-500
        bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100
        dark:from-gray-900 dark:via-gray-950 dark:to-black
      "
    >
      {/* === POPUP === */}
      {showPopup && (
        <div
          className="
          fixed inset-0 bg-black/60 backdrop-blur-sm 
          flex items-center justify-center z-50
        "
        >
          <div
            className="
            bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl
            max-w-sm text-center
          "
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-rose-100">
              🎵 Putar Musik?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Klik tombol di bawah untuk memulai musik latar.
            </p>

            <button
              onClick={playMusic}
              className="
                mt-4 px-5 py-2 rounded-xl bg-rose-500 text-white
                hover:bg-rose-600 transition font-medium
              "
            >
              Play Musik 🎶
            </button>

            <button
              onClick={() => setShowPopup(false)}
              className="block mx-auto mt-3 text-gray-500 text-sm hover:underline"
            >
              Lanjut tanpa musik
            </button>
          </div>
        </div>
      )}

      <SecretSection />
      <Hero />
      <Timeline />
      <Letter />
      <Wishlist />
      <Quiz />
      <TimeCapsule />
      <Footer />
    </div>
  );
}

export default Home;
