import React, { useState } from "react";
import { motion } from "framer-motion";
import dashboardBg from "../assets/dashboard.webp";
import avatarImg from "../assets/avatar_pixel.webp";
import { scheduleData } from "../constants";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div
      className="min-h-screen relative text-white pt-24 pb-16"
      style={{
        backgroundImage: `url(${dashboardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-cyan-400"></div>
            <h2 className="font-terminal text-cyan-400 text-sm md:text-base tracking-[0.3em] uppercase">
              EVENT TIMELINE
            </h2>
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[14px] border-t-transparent border-b-transparent border-r-cyan-400"></div>
          </div>
          <h1
            className="font-minecraft text-5xl md:text-7xl text-white mb-4 tracking-wider"
            style={{
              textShadow:
                "4px 4px 0px #000, 2px 2px 0px rgba(6, 182, 212, 0.5)",
            }}
          >
            SCHEDULE
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/90 backdrop-blur-sm border-4 border-gray-700 p-6"
            >
              {}
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-500 mb-4 flex items-center justify-center overflow-hidden border-4 border-gray-700">
                <img
                  src={avatarImg}
                  alt="GameTag"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-900 text-white p-4 border-2 border-gray-700 mb-3">
                <p className="font-terminal text-xs text-gray-400 mb-1">
                  [ Your GameTag ]
                </p>
                <p className="font-minecraft text-xl text-cyan-400">IIITU-XX</p>
              </div>
              <p className="font-terminal text-xs text-center text-cyan-400 tracking-wider">
                &gt;&gt; ARE YOU READY??
              </p>
            </motion.div>
          </div>

          {}
          <div className="lg:col-span-3">
            {}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-3 mb-8"
            >
              {[1, 2, 3].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`font-pixel px-8 py-4 text-sm border-4 transition-all relative ${
                    activeDay === day
                      ? "bg-gray-700 text-white border-gray-600 shadow-lg shadow-cyan-400/20"
                      : "bg-gray-900/80 text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">Day {day}</span>
                  {activeDay === day && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400"></div>
                  )}
                </button>
              ))}
            </motion.div>

            {}
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <div className="bg-cyan-400 text-black font-pixel py-3 px-6 inline-block border-4 border-cyan-600 shadow-lg">
                &gt; DAY {activeDay} SCHEDULE
              </div>
            </motion.div>

            {}
            <motion.div
              key={`schedule-${activeDay}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {scheduleData[activeDay].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/90 backdrop-blur-sm border-2 border-gray-700 hover:border-cyan-400 transition-all p-4 flex items-center gap-4 group cursor-pointer"
                >
                  {}
                  <div className="w-14 h-14 bg-cyan-400 flex items-center justify-center text-2xl border-2 border-cyan-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  {}
                  <div className="flex-1">
                    <p className="font-pixel text-base text-white mb-1">
                      {item.event}
                    </p>
                    <p className="font-terminal text-xs text-gray-400">
                      Event ID: EVT-{activeDay}
                      {index + 1}
                    </p>
                  </div>

                  {}
                  <div className="font-terminal text-sm text-cyan-400 bg-gray-900 px-4 py-2 border border-gray-700">
                    {item.time}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
