import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CardInfoButton from "../components/CardInfoButton"; // ⬅ TAMBAHKAN INI

export default function MainLayout() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef(null);

  // Scroll ke atas setiap ganti halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Dark Mode
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  // Load audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setAudioLoaded(true);
    audio.addEventListener("loadeddata", onLoaded);
    audio.load();

    return () => audio.removeEventListener("loadeddata", onLoaded);
  }, []);

  // Global Audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    window.__GLOBAL_AUDIO__ = audio;

    window.__PLAY_MUSIC__ = async () => {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (err) {
        console.warn("Play blocked:", err);
      }
    };
  }, []);

  // Toggle Music
  const toggleMusic = async () => {
    if (!audioLoaded) return;

    const audio = audioRef.current;
    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch {}
    }
  };

  // Halaman tanpa tombol
  const HIDE_BUTTONS = ["/secret"];
  const hideButtons = HIDE_BUTTONS.includes(location.pathname);

  return (
    <>
      {/* GLOBAL AUDIO */}
      <audio ref={audioRef} preload="auto" loop>
        <source
          src="/audio/Nadhif-Basalamah-bergema-sampai-selamanya.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* INFO CARD */}
      {!hideButtons && <CardInfoButton />}

      {/* BUTTONS */}
      {!hideButtons && (
        <>
          {/* MUSIC BUTTON */}
          <button
            onClick={toggleMusic}
            className="
        fixed top-4 right-4 z-50
        w-10 h-10
        bg-rose-300 dark:bg-rose-400
        rounded-full shadow-lg
        flex items-center justify-center
        text-xl
      "
          >
            {!audioLoaded ? "⏳" : musicPlaying ? "🎵" : "🔇"}
          </button>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
        fixed top-4 left-4 z-50
        w-10 h-10
        bg-gray-200 dark:bg-gray-700
        rounded-full shadow-lg
        flex items-center justify-center
        text-xl
      "
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
        </>
      )}

      <Outlet />
    </>
  );
}
