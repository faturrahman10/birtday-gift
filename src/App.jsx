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

  const [introDone, setIntroDone] = useState(false);

  const audioRef = useRef(null);

  // AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  // Load audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      console.log("AUDIO LOADED SUCCESS");
      setAudioLoaded(true);
    };

    audio.addEventListener("loadeddata", onLoaded);
    audio.load();

    return () => audio.removeEventListener("loadeddata", onLoaded);
  }, []);

  // Trigger setelah user klik "Lanjutkan"
  const startWebsite = async () => {
    if (audioLoaded && audioRef.current) {
      try {
        await audioRef.current.play();
        setMusicPlaying(true);
      } catch (e) {
        console.log("ERROR AUTOPLAY:", e);
      }
    }

    setIntroDone(true);
  };

  // Toggle music
  const toggleMusic = async () => {
    if (!audioLoaded) return;
    const audio = audioRef.current;

    try {
      if (musicPlaying) audio.pause();
      else await audio.play();

      setMusicPlaying(!musicPlaying);
    } catch (e) {
      console.log("PLAY ERROR:", e);
    }
  };

  return (
    <div
      className="
      min-h-screen transition-all duration-500
      bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100
      dark:from-gray-900 dark:via-gray-950 dark:to-black
    "
    >
      {/* MUSIC */}
      <audio ref={audioRef} preload="auto" loop>
        <source
          src="/audio/Nadhif-Basalamah-bergema-sampai-selamanya.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Jika belum intro → tampilkan COUNTDOWN PAGE */}
      {!introDone ? (
        <Countdown onFinish={startWebsite} />
      ) : (
        <>
          {/* MUSIC BUTTON */}
          <button
            onClick={toggleMusic}
            disabled={!audioLoaded}
            className="fixed top-4 right-4 z-50 bg-rose-300 p-2 rounded-full shadow-lg"
          >
            {!audioLoaded ? "⏳" : musicPlaying ? "🎵" : "🔇"}
          </button>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>

          {/* CONTENT */}
          <SecretSection />
          <Hero />
          <Timeline />
          <Gallery />
          <Letter />
          <Wishlist />
          <Quiz />
          <TimeCapsule />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
