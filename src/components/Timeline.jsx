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
    // Tambahkan lebih banyak event
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800">
        Perjalanan Kita
      </h2>
      <div className="max-w-4xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-12"
            data-aos="fade-up"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-32 h-32 rounded-full shadow-lg mb-4 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-rose-600">
                {event.title}
              </h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="font-poppins">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
