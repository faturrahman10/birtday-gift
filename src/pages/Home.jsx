// pages/Home.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Carousel from "../components/Carousel";
import Letter from "../components/Letter";
import Wishlist from "../components/Wishlist";
import Quiz from "../components/Quiz";
import TimeCapsule from "../components/TimeCapsule";
import Footer from "../components/Footer";
import SecretSection from "../components/SecretSection";
import Countdown from "../components/Countdown";

function Home() {
  const [introDone, setIntroDone] = useState(false);

  // Init AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const startWebsite = () => {
    // Countdown selesai ➝ langsung tampilkan konten
    setIntroDone(true);
  };

  return (
    <div
      className="
        min-h-screen transition-all duration-500
        bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100
        dark:from-gray-900 dark:via-gray-950 dark:to-black
      "
    >
      {!introDone ? (
        <Countdown onFinish={startWebsite} />
      ) : (
        <>
          {/* CONTENT */}
          <SecretSection />
          <Hero />
          <Timeline />
          <Letter />
          <Wishlist />
          <Quiz />
          <TimeCapsule />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
