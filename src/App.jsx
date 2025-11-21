import React, { useState, useEffect, useRef } from "react";
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
  const [audioLoaded, setAudioLoaded] = useState(false);

  const audioRef = useRef(null);

  // AOS Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Dark Mode Toggle
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  // Load Audio
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const onLoaded = () => {
      console.log("AUDIO LOADED SUCCESS");
      setAudioLoaded(true);
    };

    audio.addEventListener("loadeddata", onLoaded);
    audio.load();

    return () => {
      audio.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  // Play/Pause Music
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audioLoaded) return;

    try {
      if (musicPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
      setMusicPlaying(!musicPlaying);
    } catch (err) {
      console.log("PLAYBACK ERROR:", err);
    }
  };

  return (
    <div
      className="min-h-screen transition-all duration-500 
      bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-black"
    >
      {/* MUSIC (LOCAL MP3) */}
      <audio ref={audioRef} preload="auto" loop>
        <source
          src="/audio/Nadhif-Basalamah-bergema-sampai-selamanya.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        disabled={!audioLoaded}
        className="fixed top-4 right-4 z-50 bg-rose-300 
        p-2 rounded-full shadow-lg hover:bg-rose-400 transition disabled:opacity-50"
      >
        {!audioLoaded ? "⏳" : musicPlaying ? "🎵" : "🔇"}
      </button>

      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-700 
        p-2 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "🌙" : "🌞"}
      </button>

      {/* SECRET SECTION */}
      <SecretSection />

      {/* CONTENT */}
      <Hero />
      <Timeline />
      <Gallery />
      <Letter />
      <Wishlist />
      <Quiz />
      <TimeCapsule />
      <Countdown />
      <Footer />
    </div>
  );
}

export default App;
