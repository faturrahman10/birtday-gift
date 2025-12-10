import React, { useEffect, useState } from "react";

export default function CardInfoButton({ setStepFromParent = () => {} }) {
  const [step, setStep] = useState(0); // 0 = belum, 1 = dark, 2 = music, 3 = done

  useEffect(() => {
    const seen = localStorage.getItem("onboarding_v1_done");
    if (!seen) {
      // mulai tutorial
      setStep(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Kirim step ke parent (jika parent mengirim handler)
  useEffect(() => {
    try {
      setStepFromParent && setStepFromParent(step);
    } catch (e) {
      // safe
    }
  }, [step, setStepFromParent]);

  const nextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2) {
      localStorage.setItem("onboarding_v1_done", "yes");
      setStep(3);
    }
  };

  if (step === 0 || step === 3) return null;

  return (
    <>
      {/* OVERLAY (di bawah tombol z-50) */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm
          z-20
        `}
      />

      {/* SPOTLIGHT RING (di atas overlay tetapi BAWAH tombol) */}
      {step === 1 && (
        <div
          className="
            fixed top-3 left-3 w-12 h-12
            rounded-full ring-4 ring-white/80
            z-40 pointer-events-none animate-pulse
          "
        />
      )}

      {step === 2 && (
        <div
          className="
            fixed top-3 right-3 w-12 h-12
            rounded-full ring-4 ring-white/80
            z-40 pointer-events-none animate-pulse
          "
        />
      )}

      {/* CARD (di atas overlay, TETAPI di bawah tombol) */}
      <div
        className={`
          fixed top-20
          ${step === 1 ? "left-3" : "right-3"}
          z-30
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          shadow-2xl rounded-xl p-3 w-72
        `}
      >
        {step === 1 && (
          <>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              🌙 Dark Mode
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Tombol <b>kiri atas</b> digunakan untuk mengganti tema antara{" "}
              <b>dark / light mode</b>.
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
