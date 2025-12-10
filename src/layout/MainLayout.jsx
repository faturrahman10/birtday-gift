import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CardInfoButton from "../components/CardInfoButton";

export default function MainLayout() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);

  const audioRef = useRef(null);

  // scroll to top on route change (kamu pakai ini sebelumnya)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // dark mode apply
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  // load audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setAudioLoaded(true);
    audio.addEventListener("loadeddata", onLoaded);
    audio.load();
    return () => audio.removeEventListener("loadeddata", onLoaded);
  }, []);

  // expose globals if perlu (tetap)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    window.__GLOBAL_AUDIO__ = audio;
    window.__PLAY_MUSIC__ = async () => {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (e) {
        console.warn("Play blocked:", e);
      }
    };
  }, []);

  // toggle music button
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

      {/* INFO ONBOARDING */}
      {!hideButtons && (
        <CardInfoButton
          setStepFromParent={(s) => {
            // terima update dari child
            setOnboardingStep(s);
          }}
        />
      )}

      {/* BUTTONS */}
      {!hideButtons && (
        <>
          {/* MUSIC BUTTON — z-50 (di atas overlay + card + ring) */}
          {(onboardingStep === 0 ||
            onboardingStep === 3 ||
            onboardingStep === 2) && (
            <button
              onClick={toggleMusic}
              className="
                fixed top-4 right-4 z-50
                w-10 h-10
                bg-rose-400 dark:bg-rose-300
                rounded-full shadow-lg
                flex items-center justify-center
                text-xl
              "
            >
              {!audioLoaded ? "⏳" : musicPlaying ? "🎵" : "🔇"}
            </button>
          )}

          {/* DARK MODE BUTTON — z-50 */}
          {(onboardingStep === 0 ||
            onboardingStep === 3 ||
            onboardingStep === 1) && (
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
          )}
        </>
      )}

      <Outlet />
    </>
  );
}
