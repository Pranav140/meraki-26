import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eliteBg from "../assets/elite_events_section_bg.webp";
import { events } from "../constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Elite() {
  const [activeTab, setActiveTab] = useState(events[0].id);
  const navigate = useNavigate();
  const activeEvent = events.find((event) => event.id === activeTab);

  return (
    <section
      id="events"
      className="relative w-full min-h-screen text-white pt-24 px-4 sm:px-6 md:px-8 pb-8 overflow-hidden flex flex-col"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={eliteBg}
          alt="Background"
          className="w-full h-auto min-h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Section Title */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto mb-6 md:mb-8 flex justify-start"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-cyan-400 text-xl sm:text-2xl md:text-3xl">
            ▶
          </span>
          <h2 className="font-minecraft text-white text-xl sm:text-2xl md:text-4xl tracking-widest uppercase">
            ELITE EVENTS
          </h2>
        </div>
      </motion.div>

      {/* Events Content */}
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 md:gap-0 overflow-visible">
          {/* Tab Buttons */}
          <motion.div
            className="w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto md:overflow-visible z-10 gap-2 md:gap-0 pb-2 md:pb-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {events.map((event) => (
              <motion.button
                key={event.id}
                onClick={() => setActiveTab(event.id)}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group flex items-center gap-3 md:gap-4 p-3 md:p-4 text-left transition-all duration-300 
                  shrink-0 md:shrink min-w-[180px] md:min-w-0
                  ${
                    activeTab === event.id
                      ? `bg-[rgba(71,71,71,1)] md:pr-12 md:mr-[-16px] shadow-[0_0_15px_rgba(6,182,212,0.3)]
                       ${
                         event.id === 1
                           ? "border-l-[5px] md:border-t-[5px] border-[rgba(48,48,48,1)]"
                           : event.id === 4
                           ? "border-l-[5px] md:border-b-[5px] border-[rgba(48,48,48,1)]"
                           : "border-l-[5px] border-[rgba(48,48,48,1)]"
                       }`
                      : "bg-[rgba(48,48,48,1)] hover:bg-[rgba(60,60,60,1)]"
                  }
                `}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded flex items-center justify-center shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <span
                  className={`font-minecraft text-xs sm:text-sm md:text-base transition-colors duration-300 ${
                    activeTab === event.id
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {event.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Event Details Panel */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-20 md:translate-x-[-4px] w-full bg-[rgba(71,71,71,1)] md:w-2/3 backdrop-blur-sm
              p-4 sm:p-6 md:p-8 border-b-[8px] border-t-[5px] border-r-[5px] border-[rgba(48,48,48,1)]
              flex flex-col gap-4 md:gap-6 items-center"
          >
            {/* Event Image */}
            <div className="w-full relative group rounded-lg aspect-video overflow-hidden">
              <motion.img
                src={activeEvent.image}
                alt={activeEvent.title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Description & Button */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="lg:w-2/3">
                <p className="font-minecraft text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {activeEvent.description}
                </p>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(215,153,40,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/event/${activeEvent.slug}`)}
                className="self-start lg:self-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D79928] to-[#C57135] border-2 border-white text-black font-minecraft text-xs sm:text-sm hover:from-[#E5A935] hover:to-[#D17E42] transition-all shadow-lg shadow-orange-500/20 rounded-sm cursor-pointer"
              >
                VIEW DETAILS →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Elite;
