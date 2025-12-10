import React, { useEffect, useState } from "react";

export default function CardInfoButton() {
  const [step, setStep] = useState(0); // 0 = belum mulai, 1 = dark mode, 2 = music, 3 = selesai

  useEffect(() => {
    const seen = localStorage.getItem("onboarding_v1_done");
    if (!seen) {
      setStep(1); // mulai dari card dark mode
    }
  }, []);

  const nextStep = () => {
    if (step === 1) setStep(2); // ke card musik
    else if (step === 2) {
      localStorage.setItem("onboarding_v1_done", "yes");
      setStep(3); // selesai
    }
  };

  if (step === 0 || step === 3) return null;

  return (
    <>
      {/* =======================
          LIGHTBOX BACKDROP
      ======================== */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm
          ${step === 1 ? "z-50" : "z-51"}
        `}
      ></div>

      {/* =======================
          HIGHLIGHT SPOTLIGHT
      ======================== */}
      {step === 1 && (
        <div
          className="
            fixed top-3 left-3 w-12 h-12
            rounded-full ring-4 ring-white/80
            z-50 pointer-events-none animate-pulse
          "
        ></div>
      )}

      {step === 2 && (
        <div
          className="
            fixed top-3 right-3 w-12 h-12
            rounded-full ring-4 ring-white/80
            z-50 pointer-events-none animate-pulse
          "
        ></div>
      )}

      {/* =======================
          CARD CONTENT
      ======================== */}
      <div
        className={`
          fixed top-20
          ${step === 1 ? "left-3 z-51" : "right-3 z-50"}
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          shadow-2xl rounded-xl p-3 w-72
          animate-fadeIn
        `}
      >
        {step === 1 && (
          <>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              🌙 Dark Mode
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Tombol <b>kiri atas</b> digunakan untuk mengganti tema antara
              <b> dark / light mode</b>.
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              🎵 Musik
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Tombol <b>kanan atas</b> digunakan untuk{" "}
              <b>play dan pause musik</b>.
            </p>
          </>
        )}

        <button
          onClick={nextStep}
          className="
            mt-4 w-full py-1.5 rounded-lg 
            bg-rose-500 hover:bg-rose-600 
            text-white text-sm font-medium
          "
        >
          Oke, mengerti!
        </button>
      </div>
    </>
  );
}
