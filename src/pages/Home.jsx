import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Letter from "../components/Letter";
import Quiz from "../components/Quiz";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="
        min-h-screen transition-all duration-500
        bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100
        dark:from-gray-900 dark:via-gray-950 dark:to-black
      "
    >
      <Hero />
      <Timeline />
      <Letter />
      <Quiz />
      <Footer />
    </div>
  );
}

export default Home;
