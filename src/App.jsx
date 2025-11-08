import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Wishlist from "./components/Wishlist";
import Quiz from "./components/Quiz";
import TimeCapsule from "./components/TimeCapsule";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import SecretSection from "./components/SecretSection";

function App() {
  const [darkMode, setDarkMode] = useState(false); // Toggle dark mode
  const [musicPlaying, setMusicPlaying] = useState(false); // Musik toggle
  const [secretUnlocked, setSecretUnlocked] = useState(false); // Secret section

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS untuk animasi scroll
  }, []);

  // Custom cursor (hati kecil) - tambahkan CSS di styles.css
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
    return () => document.body.removeChild(cursor);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-peach-100 via-blush-50 to-lavender-100"
      } transition-all duration-500`}
    >
      {/* Musik Latar */}
      <audio id="bg-music" loop>
        <source src="/audio/romantic-music.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={() => {
          const audio = document.getElementById("bg-music");
          if (musicPlaying) audio.pause();
          else audio.play();
          setMusicPlaying(!musicPlaying);
        }}
        className="fixed top-4 right-4 z-50 bg-rose-300 p-2 rounded-full shadow-lg hover:bg-rose-400 transition"
      >
        {musicPlaying ? "🔇" : "🎵"}
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      {/* Secret Section Trigger (klik 3x logo hati di footer) */}
      <SecretSection
        unlocked={secretUnlocked}
        setUnlocked={setSecretUnlocked}
      />

      {/* Komponen Utama */}
      <Hero />
      <Timeline />
      <Gallery />
      <Letter />
      <Wishlist />
      <Quiz />
      <TimeCapsule />
      <Countdown />
      <Footer setSecretUnlocked={setSecretUnlocked} />
    </div>
  );
}

export default App;
