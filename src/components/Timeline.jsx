import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "2020-01-15",
      title: "Pertama Bertemu",
      desc: "Di kafe itu, dunia berhenti sejenak.",
      img: "/images/event1.jpg",
    },
    {
      date: "2020-03-10",
      title: "Kencan Pertama",
      desc: "Makan malam romantis di bawah cahaya lilin.",
      img: "/images/event2.jpg",
    },
    {
      date: "2020-05-02",
      title: "Liburan Bersama",
      desc: "Menikmati sunset di pantai berdua.",
      img: "/images/event3.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 text-gray-900 dark:text-gray-100">
        Perjalanan Kita
      </h2>

      <div className="relative max-w-5xl mx-auto mt-12">
        {/* Garis tengah */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-rose-300 dark:bg-rose-700 h-full rounded-full"></div>

        {/* Event items */}
        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } relative`}
            data-aos="fade-up"
          >
            {/* Titik di garis */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-rose-500 dark:bg-rose-600 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-md z-10"></div>

            {/* Gambar */}
            <div className="md:w-1/2 flex justify-center md:justify-end px-4 md:px-8 mt-10 md:mt-0">
              <img
                src={event.img}
                alt={event.title}
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Konten */}
            <div
              className={`md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mt-6 md:mt-0 
    text-center md:text-left 
    ${
      index % 2 === 0
        ? "md:mr-16 lg:mr-24" // jika gambar di kanan, beri jarak ke kiri (garis)
        : "md:ml-16 lg:ml-24" // jika gambar di kiri, beri jarak ke kanan (garis)
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
    </section>
  );
};

export default Timeline;
