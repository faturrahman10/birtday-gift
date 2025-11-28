import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

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

  const carouselImages = [
    "/image/first confest.jpg",
    "/image/first meet.jpg",
    "/image/first date.jpg",
    "/image/carousel/4.jpg",
    "/image/carousel/5.jpg",
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800 dark:text-rose-100">
        Timeline
      </h2>

      {/* GARIS TENGAH */}
      <div className="relative max-w-5xl mx-auto mt-12 pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-rose-300 dark:bg-rose-700 h-full rounded-full"></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } relative`}
          >
            {/* DOT */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-rose-500 dark:bg-rose-600 w-5 h-5 rounded-full border-[6px] border-white dark:border-gray-900 shadow-md z-10"></div>

            {/* ================================
                GAMBAR (DEKAT KE GARIS TENGAH)
            ================================== */}
            <div
              className={`
                md:w-1/2 flex justify-center px-4 mt-10 md:mt-0
                ${index % 2 === 0 ? "md:mr-10 lg:mr-14" : "md:ml-10 lg:ml-14"}
              `}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-44 h-44 md:w-52 md:h-52 rounded-2xl object-cover shadow-lg hover:scale-105 transition duration-300"
              />
            </div>

            {/* ================================
                CARD (DEKAT KE GARIS TENGAH)
            ================================== */}
            <div
              className={`
                md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mt-6 md:mt-0 
                text-center md:text-left
                ${index % 2 === 0 ? "md:mr-10 lg:mr-14" : "md:ml-10 lg:ml-14"}
              `}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-1">
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
      {/* CAROUSEL */}
      <h3 className="text-2xl md:text-3xl font-playfair text-center mt-6 mb-8 text-gray-800 dark:text-rose-200">
        And Now ❤️
      </h3>

      <Carousel images={carouselImages} speed={0.35} />
    </section>
  );
};

export default Timeline;
