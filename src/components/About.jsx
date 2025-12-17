import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about_section_bg.webp";
import aboutImage1 from "../assets/about_image1.webp";
import aboutImage2 from "../assets/about_image2.webp";
import { ABOUT_IIIT_UNA, ABOUT_MERAKI } from "../constants/AboutData";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      {/* Background Image*/}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Container*/}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 md:px-8 lg:px-16">
        {/* Stacked Cards Container */}
        <div className="flex flex-col gap-20 md:gap-24 max-w-5xl mx-auto w-full">
          {/* About IIIT UNA Card */}
          <div className="aspect-video w-full">
            <motion.div
              className="bg-black/80 backdrop-blur-sm border-4 border-gray-600 shadow-2xl p-8 md:p-10 lg:p-12 relative h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                boxShadow:
                  "0 0 0 2px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6)",
              }}
            >
              {/* Character Image - Top Right */}
              <motion.div
                className="absolute -top-20 -right-4 md:-top-24 md:-right-8 w-32 h-40 md:w-40 md:h-52 z-10"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img
                  src={aboutImage1}
                  alt="Minecraft Steve"
                  className="w-full h-full object-contain"
                  style={{
                    imageRendering: "pixelated",
                    filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.8))",
                  }}
                />
              </motion.div>

              <motion.h2
                className="font-terminal text-white tracking-wider uppercase text-center text-2xl md:text-4xl lg:text-5xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ABOUT IIIT UNA
              </motion.h2>
              <motion.div
                className="mt-auto flex-1 flex flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-white font-terminal leading-relaxed text-lg md:text-xl lg:text-2xl">
                  {ABOUT_IIIT_UNA}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* About MERAKI Card */}
          <div className="aspect-video w-full">
            <motion.div
              className="bg-black/80 backdrop-blur-sm border-4 border-gray-600 shadow-2xl p-8 md:p-10 lg:p-12 relative h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                boxShadow:
                  "0 0 0 2px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6)",
              }}
            >
              {/* Character Image - Top Left */}
              <motion.div
                className="absolute -top-20 -left-4 md:-top-24 md:-left-8 w-32 h-40 md:w-40 md:h-52 z-10"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img
                  src={aboutImage2}
                  alt="Minecraft Creeper"
                  className="w-full h-full object-contain"
                  style={{
                    imageRendering: "pixelated",
                    filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.8))",
                  }}
                />
              </motion.div>

              <motion.h2
                className="font-terminal text-white tracking-wider uppercase text-center text-2xl md:text-4xl lg:text-5xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ABOUT
              </motion.h2>
              <motion.h3
                className="font-minecraft text-center leading-tight mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 4rem)",
                  background:
                    "linear-gradient(180deg, #e0e0e0 0%, #808080 50%, #606060 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter:
                    "drop-shadow(3px 3px 0px rgba(0,0,0,0.8)) drop-shadow(1px 1px 0px rgba(150,150,150,0.5))",
                  letterSpacing: "0.05em",
                  transform: "perspective(500px) rotateX(30deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                MERAKI
              </motion.h3>
              <motion.div
                className="mt-auto flex-1 flex flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-white font-terminal leading-relaxed text-lg md:text-xl lg:text-2xl">
                  {ABOUT_MERAKI}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
