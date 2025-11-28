import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Carousel = ({ images, speed = 0.35 }) => {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const isDragging = useRef(false);
  const xPos = useRef(0);

  const startAutoScroll = () => {
    const loop = () => {
      if (!isDragging.current) {
        xPos.current -= speed;

        const track = trackRef.current;
        if (xPos.current <= -track.scrollWidth / 2) {
          xPos.current = 0; // reset tanpa terlihat
        }

        track.style.transform = `translateX(${xPos.current}px)`;
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    startAutoScroll();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="overflow-hidden w-full relative py-4">
      <motion.div
        className="flex gap-6 px-4"
        ref={trackRef}
        drag="x"
        dragElastic={0.04}
        dragMomentum={false}
        onDragStart={() => {
          isDragging.current = true;
        }}
        onDrag={(e, info) => {
          xPos.current += info.delta.x;
          trackRef.current.style.transform = `translateX(${xPos.current}px)`;
        }}
        onDragEnd={() => {
          setTimeout(() => {
            isDragging.current = false; // auto-scroll lanjut
          }, 100);
        }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-64 h-40 md:w-80 md:h-52 object-cover rounded-2xl shadow-xl
            brightness-95 hover:brightness-100 hover:scale-[1.03] transition duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
