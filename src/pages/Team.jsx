import React from "react";
import { motion } from "framer-motion";
import coordinatorsBg from "../assets/coordinators.webp";
import avatarImg from "../assets/avatar_pixel.webp";
import { coordinators, coreCoordinators, departmentHeads } from "../constants";

const Team = () => {
  return (
    <div
      className="min-h-screen relative text-white pt-24 pb-16"
      style={{
        backgroundImage: `url(${coordinatorsBg})`,
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
              LEADERSHIP & GUIDANCE
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
            COORDINATORS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {coordinators.map((coord, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {}
              <div
                className={`w-48 h-48 rounded-full mx-auto mb-4 border-4 flex items-center justify-center overflow-hidden relative ${
                  coord.isHOD ? "border-amber-300" : "border-gray-300"
                }`}
              >
                <img
                  src={avatarImg}
                  alt={coord.name}
                  className="w-full h-full object-cover"
                />
                {coord.isHOD && (
                  <span className="absolute bottom-2 bg-red-600 text-white font-pixel text-xs px-3 py-1 z-10">
                    HOD CSE
                  </span>
                )}
              </div>
              <h3 className="font-pixel text-lg text-white">{coord.name}</h3>
              <p className="font-terminal text-sm text-gray-300">
                {coord.role}
              </p>
              {coord.subtitle && (
                <p className="font-terminal text-xs text-gray-400">
                  {coord.subtitle}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-cyan-400"></div>
            <h2 className="font-terminal text-cyan-400 text-sm md:text-base tracking-[0.3em] uppercase">
              THE EXECUTING TEAM
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
            CONVENORS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        {}
        <div className="mb-16">
          <h3 className="font-pixel text-2xl text-white text-center mb-8">
            CORE COORDINATORS
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {coreCoordinators.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="w-40 h-40 rounded-full border-4 border-gray-300 hover:border-cyan-400 transition-all cursor-pointer overflow-hidden"
              >
                <img
                  src={avatarImg}
                  alt="Core Coordinator"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {}
        <div className="mb-16">
          <h3 className="font-pixel text-2xl text-white text-center mb-8">
            DEPARTMENT HEADS
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {departmentHeads.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="w-40 h-40 rounded-full border-4 border-gray-300 hover:border-cyan-400 transition-all cursor-pointer overflow-hidden"
              >
                <img
                  src={avatarImg}
                  alt="Department Head"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
