import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/sponsor_section_bg.webp";
import charArt from "../assets/sponsors_character_art.webp";

const sponsorImages = [
  {
    x: 154,
    y: 56,
    url: `src/assets/sponsors/iiitu-logo.png`,
    size: "200px",
    mobileSize: "140px",
    name: "Sponsor 1",
    leftAnchored: true,
  },
  {
    x: 563,
    y: 174,
    url: `src/assets/sponsors/iiitu-logo.png`,
    size: "200px",
    mobileSize: "140px",
    name: "Sponsor 2",
    leftAnchored: true,
  },
  {
    x: 90,
    y: 401,
    url: `src/assets/sponsors/iiitu-logo.png`,
    size: "200px",
    mobileSize: "140px",
    name: "Sponsor 3",
    leftAnchored: true,
  },
  {
    x: 539,
    y: 500,
    url: `src/assets/sponsors/iiitu-logo.png`,
    size: "200px",
    mobileSize: "140px",
    name: "Sponsor 4",
    leftAnchored: false,
  },
  {
    x: 120,
    y: 401,
    url: `src/assets/sponsors/iiitu-logo.png`,
    size: "200px",
    mobileSize: "140px",
    name: "Sponsor 5",
    leftAnchored: false,
  },
];

// Base dimensions for responsive positioning
const BaseWidth = 1311;
const BaseHeight = 750;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Sponsors() {
  const [smallDevice, setSmallDevice] = useState(false);

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      setSmallDevice(w < 768);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="sponsors"
      className="w-full min-h-screen flex flex-col pt-24 pb-12 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center gap-3 ml-4 sm:ml-6 md:ml-10 relative">
        {/* Section Title */}
        <motion.div
          className="flex items-center gap-3 md:gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-cyan-400 text-xl sm:text-2xl md:text-3xl">
            ▶
          </span>
          <h2 className="font-minecraft text-white text-xl sm:text-2xl md:text-4xl tracking-widest uppercase">
            SPONSORS
          </h2>
        </motion.div>

        {/* Decorative Character */}
        <motion.div
          className="absolute hidden sm:block -top-16 md:-top-20 right-4 sm:right-10 w-24 h-32 sm:w-32 sm:h-40 md:w-48 md:h-64 z-10"
          initial={{ opacity: 0, y: -30, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src={charArt}
            alt="Minecraft Character"
            className="w-full h-full object-contain"
            style={{ filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.5))" }}
          />
        </motion.div>
      </div>

      {/* Sponsor Logos Grid */}
      <motion.div
        className="grid pt-12 md:pt-16 place-items-center gap-6 sm:gap-8 md:gap-10 grid-cols-2 sm:grid-cols-3 md:flex md:flex-1 overflow-hidden md:relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {sponsorImages.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(6,182,212,0.6)",
              transition: { duration: 0.2 },
            }}
            style={{
              width: smallDevice ? item.mobileSize : item.size,
              height: smallDevice ? item.mobileSize : item.size,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "#FFF",
              top: smallDevice ? "auto" : `${(item.y / BaseHeight) * 100}%`,
              position: smallDevice ? "static" : "absolute",
              cursor: "pointer",
              ...(smallDevice
                ? {}
                : item.leftAnchored
                ? { left: `${(item.x / BaseWidth) * 100}%` }
                : { right: `${(item.x / BaseWidth) * 100}%` }),
            }}
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
