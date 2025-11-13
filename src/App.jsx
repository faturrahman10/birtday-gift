import React, { useState, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Tambahkan atau hapus class .dark di elemen <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  // Custom cursor
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);
    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Musik */}
      <audio id="bg-music" loop>
        <source src="/audio/romantic-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Tombol Musik */}
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

      {/* Tombol Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "🌙" : "🌞"}
      </button>

      {/* Secret Section */}
      <SecretSection
        unlocked={secretUnlocked}
        setUnlocked={setSecretUnlocked}
      />

      {/* Komponen */}
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
