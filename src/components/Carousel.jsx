import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Carousel = ({ images, speed = 0.3 }) => {
  const trackRef = useRef(null);
  const xPos = useRef(0);
  const dragging = useRef(false);
  const frame = useRef(null);

  const applyTransform = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${xPos.current}px)`;
    }
  };

  const fixLoop = () => {
    const track = trackRef.current;
    if (!track) return;

    const half = track.scrollWidth / 2;

    if (xPos.current <= -half) xPos.current += half;
    if (xPos.current >= 0) xPos.current -= half;
  };

  const loop = () => {
    if (!dragging.current) {
      xPos.current -= speed; // ← speed langsung dipakai di sini
      applyTransform();
      fixLoop();
    }
    frame.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    // Jika speed berubah → hentikan loop lama
    cancelAnimationFrame(frame.current);

    // Reset posisi supaya tidak glitch
    xPos.current = 0;
    applyTransform();

    // Mulai loop baru memakai speed terkini
    loop();

    return () => cancelAnimationFrame(frame.current);
  }, [speed]);

  return (
    <div className="overflow-hidden w-full relative py-4">
      <motion.div
        ref={trackRef}
        className="flex gap-4 px-4 select-none"
        style={{ width: "max-content" }}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => (dragging.current = true)}
        onDrag={(e, info) => {
          xPos.current += info.delta.x;
          applyTransform();
          fixLoop();
        }}
        onDragEnd={() => {
          setTimeout(() => (dragging.current = false), 120);
        }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            draggable={false}
            className="
              rounded-2xl shadow-xl
              brightness-95 hover:brightness-100 hover:scale-[1.03]
              transition-all duration-300
              object-cover
              w-64 h-40 md:w-80 md:h-52
              min-w-[16rem] md:min-w-[20rem]
            "
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
