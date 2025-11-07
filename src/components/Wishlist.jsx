import React, { useState, useEffect } from "react";

const Wishlist = () => {
  const [wishes, setWishes] = useState([
    { text: "Pergi ke pantai bersama", done: false },
    // Tambahkan lebih banyak
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishes(JSON.parse(saved));
  }, []);

  const toggleDone = (index) => {
    const newWishes = [...wishes];
    newWishes[index].done = !newWishes[index].done;
    setWishes(newWishes);
    localStorage.setItem("wishlist", JSON.stringify(newWishes));
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800">
        Wishlist Kita
      </h2>
      <ul className="max-w-2xl mx-auto">
        {wishes.map((wish, index) => (
          <li key={index} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={wish.done}
              onChange={() => toggleDone(index)}
              className="mr-4"
            />
            <span className={wish.done ? "line-through text-gray-500" : ""}>
              {wish.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Wishlist;
