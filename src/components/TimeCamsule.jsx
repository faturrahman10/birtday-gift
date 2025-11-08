import React, { useState, useEffect } from "react";

const TimeCapsule = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-12-25"); // Ganti dengan tanggal anniversary
    if (new Date() >= targetDate) setUnlocked(true);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-playfair mb-12 text-gray-800">
        Time Capsule
      </h2>
      {unlocked ? (
        <p>Pesan rahasia: [Pesan Anda di sini]</p>
      ) : (
        <p>Akan terbuka di anniversary kita berikutnya.</p>
      )}
    </section>
  );
};

export default TimeCapsule;
