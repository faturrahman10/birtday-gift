import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryPopup from "./GalleryPopup";
import GalleryCountdown from "./GalleryCountdown";

const Carousel = ({ images, speed = 0.6, slowFactor = 0.15 }) => {
  const trackRef = useRef(null);
  const xPos = useRef(0);
  const currentSpeed = useRef(speed);
  const frame = useRef(null);

  const [lightboxImg, setLightboxImg] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [startCountdown, setStartCountdown] = useState(false);

  const navigate = useNavigate();

  const applyTransform = () => {
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(${xPos.current}px)`;
  };

  const fixLoop = () => {
    const track = trackRef.current;
    if (!track) return;

    const half = track.scrollWidth / 2;

    if (xPos.current <= -half) xPos.current += half;
    if (xPos.current >= 0) xPos.current -= half;
  };

  const loop = () => {
    xPos.current -= currentSpeed.current;
    applyTransform();
    fixLoop();
    frame.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    loop();
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const slow = () => (currentSpeed.current = slowFactor);
  const fast = () => (currentSpeed.current = speed);

  const closeLightbox = () => setLightboxImg(null);

  return (
    <>
      <GalleryPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={() => {
          setShowPopup(false);
          setTimeout(() => setStartCountdown(true), 200);
        }}
      />

      <GalleryCountdown start={startCountdown} />

      <div
        className="overflow-hidden w-full relative py-4"
        onMouseEnter={slow}
        onMouseLeave={fast}
        onTouchStart={slow}
        onTouchEnd={fast}
      >
        <div
          ref={trackRef}
          className="flex gap-4 px-4 select-none items-center"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative group cursor-pointer">
              <img
                src={img}
                draggable={false}
                onClick={() => setLightboxImg(img)}
                className="
                  rounded-2xl shadow-lg
                  brightness-95 group-hover:brightness-100
                  transition-all duration-300
                  object-cover
                  w-64 h-40 md:w-80 md:h-52
                  min-w-[16rem] md:min-w-[20rem]
                "
              />

              <div
                className="
                  pointer-events-none absolute inset-0 bg-black/40 opacity-0
                  group-hover:opacity-100 transition duration-300
                  rounded-2xl flex items-center justify-center
                "
              >
                <span className="text-white font-semibold text-sm md:text-base">
                  Lihat Gambar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p
        onClick={() => setShowPopup(true)}
        className="
          relative mx-auto w-fit cursor-pointer 
          text-rose-500 dark:text-rose-300
          hover:font-semibold text-lg
          transition duration-300
          hover:text-rose-600 dark:hover:text-rose-400
          animate-pulse
        "
      >
        Special Foto..
      </p>

      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg}
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl animate-zoomIn"
            />

            <button
              onClick={closeLightbox}
              className="
                absolute -top-3 -right-3 bg-white text-black
                w-8 h-8 rounded-full shadow-md flex items-center justify-center
                text-lg font-bold hover:bg-red-500 hover:text-white transition
              "
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoomIn { animation: zoomIn 0.25s ease-out; }
      `}</style>
    </>
  );
};

export default Carousel;
