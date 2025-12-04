import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function MainLayout() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const audioRef = useRef(null);
  // === FIX: Scroll to Top on Route Change ===
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);
  // ← INI FIX UTAMANYA 🔥

  // === Apply Dark Mode ===
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  // === Load & Autoplay Music ===
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setAudioLoaded(true);

      audio
        .play()
        .then(() => setMusicPlaying(true))
        .catch(() => {});
    };

    audio.addEventListener("loadeddata", onLoaded);
    audio.load();

    return () => audio.removeEventListener("loadeddata", onLoaded);
  }, []);

  const toggleMusic = async () => {
    if (!audioLoaded) return;
    const audio = audioRef.current;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      await audio.play();
      setMusicPlaying(true);
    }
  };

  // Routes yang tidak ingin menampilkan tombol
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

      {/* GLOBAL BUTTONS */}
      {!hideButtons && (
        <>
          <button
            onClick={toggleMusic}
            className="fixed top-4 right-4 z-50 bg-rose-300 p-2 rounded-full shadow-lg"
          >
            {!audioLoaded ? "⏳" : musicPlaying ? "🎵" : "🔇"}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
        </>
      )}

      {/* CONTENT */}
      <Outlet />
    </>
  );
}
