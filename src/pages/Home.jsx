import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Letter from "../components/Letter";
import Quiz from "../components/Quiz";
import TimeCapsule from "../components/TimeCapsule";
import Footer from "../components/Footer";
import SecretSection from "../components/SecretSection";

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
      <SecretSection />
      <Hero />
      <Timeline />
      <Letter />
      <Quiz />
      <Footer />
    </div>
  );
}

export default Home;
