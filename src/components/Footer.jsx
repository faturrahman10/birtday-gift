import React, { useState, useEffect } from "react";

const Footer = ({ setSecretUnlocked }) => {
  const [clickCount, setClickCount] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleHeartClick = () => {
    setClickCount((prev) => prev + 1);

    // Reset timer jika ada
    if (timer) clearTimeout(timer);

    // Set timer 2 detik untuk reset klik
    const newTimer = setTimeout(() => {
      setClickCount(0);
    }, 2000);
    setTimer(newTimer);

    // Jika klik 3 kali, buka secret section
    if (clickCount + 1 >= 3) {
      setSecretUnlocked(true);
      setClickCount(0); // Reset setelah unlock
      clearTimeout(newTimer);
    }
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer); // Cleanup
    };
  }, [timer]);

  return (
    <footer className="py-10 px-4 md:px-8 text-center bg-gray-100">
      <p className="text-gray-600 mb-4">
        Created with ❤️ by [Namamu] for [Nama Pacar].
      </p>
      {/* Ikon Hati untuk Trigger Secret */}
      <div className="flex justify-center items-center space-x-4">
        <span
          onClick={handleHeartClick}
          className="text-2xl cursor-pointer hover:scale-110 transition-transform"
          title="Klik 3 kali untuk rahasia spesial"
        >
          ❤️
        </span>
        {/* Social Media Icons (opsional) */}
        <a
          href="[link Instagram Anda]"
          className="text-gray-600 hover:text-rose-500 transition"
        >
          📷 Instagram
        </a>
        <a
          href="[link WhatsApp Anda]"
          className="text-gray-600 hover:text-rose-500 transition"
        >
          💬 WhatsApp
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        © 2024. Semua hak dilindungi. Website ini dibuat khusus untuk merayakan
        cinta kita.
      </p>
    </footer>
  );
};

export default Footer;
