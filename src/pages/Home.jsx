import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Letter from "../components/Letter";
import Footer from "../components/Footer";
import FaturPov from "../components/FaturPov";

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
      <section className="mb-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
          <div className="w-full md:w-1/2">
            <Letter />
          </div>

          <div className="w-full md:w-1/2">
            <FaturPov />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
