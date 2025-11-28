import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Timeline = () => {
  const events = [
    {
      date: "2024-07-30",
      title: "Confest",
      desc: "Dari story mu ini berusahana memberanikan diri walaupun tidak ada komunikasi sebelumnya🤣",
      img: "/image/first confest.jpg",
    },
    {
      date: "2024-08-05",
      title: "First Date",
      desc: "Ketemu di alfamaret dengan kecanggungan luar biasa, belum sanggup foto bersama jadi foto diam-diam saja🤣",
      img: "/image/first meet.jpg",
    },
    {
      date: "Lupa tanggalnya hehe..",
      title: "First picture together",
      desc: "Coba-coba liat sunset yang dekat rumah aja haha🤣",
      img: "/image/first date.jpg",
    },
  ];

  // Array untuk gambar carousel
  const carouselImages = [
    "/image/carousel/1.jpg",
    "/image/carousel/2.jpg",
    "/image/carousel/3.jpg",
    "/image/carousel/4.jpg",
    "/image/carousel/5.jpg",
  ];

  // Duplicate untuk efek infinite loop
  const infiniteImages = [...carouselImages, ...carouselImages];

  const controls = useAnimation();
  const isDragging = useRef(false);

  // Fungsi menjalankan auto-slide terus menerus
  const startAutoScroll = async () => {
    while (!isDragging.current) {
      await controls.start({
        x: "-50%", // geser setengah panjang container
        transition: {
          duration: 15,
          ease: "linear",
        },
      });

      await controls.start({
        x: "0%",
        transition: {
          duration: 0.1,
        },
      });
    }
  };

  useEffect(() => {
    startAutoScroll();
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800 dark:text-rose-100">
        Timeline
      </h2>

      {/* =============================== */}
      {/* TIMELINE EVENT ORIGINAL (tidak diubah) */}
      {/* =============================== */}

      <div className="relative max-w-5xl mx-auto mt-12">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-rose-300 dark:bg-rose-700 h-full rounded-full"></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } relative`}
            data-aos="fade-up"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-rose-500 dark:bg-rose-600 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-md z-10"></div>

            <div className="md:w-1/2 flex justify-center md:justify-end px-4 md:px-8 mt-10 md:mt-0">
              <img
                src={event.img}
                alt={event.title}
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>

            <div
              className={`md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mt-6 md:mt-0 text-center md:text-left 
                 ${
                   index % 2 === 0 ? "md:mr-16 lg:mr-24" : "md:ml-16 lg:ml-24"
                 }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                {event.date}
              </p>
              <p className="text-gray-700 dark:text-gray-200 font-poppins">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* =============================== */}
      {/* 🔥 CAROUSEL BARU — INFINITE, AUTO-SLIDE, DRAG OK */}
      {/* =============================== */}

      <h3 className="text-2xl md:text-3xl font-playfair text-center mt-28 mb-8 text-gray-800 dark:text-rose-200">
        And Now ❤️
      </h3>

      <div className="overflow-hidden relative w-full py-4">
        <motion.div
          className="flex gap-6 px-4"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -200, right: 200 }}
          onDragStart={() => {
            isDragging.current = true;
            controls.stop(); // hentikan animasi sementara
          }}
          onDragEnd={() => {
            isDragging.current = false;
            startAutoScroll(); // hidupkan lagi
          }}
        >
          {infiniteImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-64 h-40 md:w-80 md:h-52 object-cover rounded-2xl shadow-xl 
              brightness-95 hover:brightness-100 hover:scale-[1.03] transition duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
