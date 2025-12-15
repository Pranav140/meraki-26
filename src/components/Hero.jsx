import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/iiitu.webp";
import About from "./About";
import Faq from "./Faq";
import Elite from "./Elite";
import Sponsors from "./Sponsors";
import { scrollToSection } from "../utils/scrollToSection";

const Hero = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background with zoom animation */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <motion.div
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-minecraft text-white mb-6 md:mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Meraki
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-terminal text-accent-300 tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            Techfest 2026
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mb-20 md:mb-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <button
              onClick={() => scrollToSection("events")}
              className="inline-block px-6 sm:px-8 py-3 border-2 border-cyan-400/50 bg-black/40 backdrop-blur-md text-white text-base sm:text-lg md:text-xl font-pixel tracking-widest uppercase hover:bg-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              ▶ DIVE DEEPER
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-28 sm:bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <motion.div
              className="text-cyan-400 font-pixel text-xs sm:text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              SCROLL
            </motion.div>
            <motion.div
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            className="absolute bottom-12 sm:bottom-16 w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-20 text-white/90 font-pixel text-sm sm:text-lg md:text-2xl tracking-wide gap-2 sm:gap-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-accent-400">&gt;</span>
              <span>Feb 5-7, 2026</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span>IIIT Una</span>
              <span className="text-accent-400 animate-pulse">_</span>
            </div>
          </motion.div>
        </div>
      </section>
      <About />
      <Elite />
      <Sponsors />
      <Faq />
    </>
  );
};

export default Hero;
