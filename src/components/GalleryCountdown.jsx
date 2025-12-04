import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function GalleryCountdown({ start }) {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (!start) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setTimeout(() => navigate("/gallery"), 200);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [start, navigate]);

  if (!start) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        key={count}
        className="text-white font-bold text-8xl md:text-9xl"
        initial={{ opacity: 0, scale: 0.5, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      >
        {count}
      </motion.div>
    </motion.div>
  );
}
