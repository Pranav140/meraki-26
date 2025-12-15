import React from "react";
import { motion } from "framer-motion";

export default function Box({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="w-full cursor-pointer self-start group"
      style={{ perspective: "1000px" }}
      onClick={onToggle}
    >
      <motion.div
        className="relative w-full"
        initial={false}
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{ scale: 1.02, y: -2 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Question */}
        <div
          className="w-full bg-[#474747] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          style={{
            backfaceVisibility: "hidden",
            border: "3px solid",
            borderColor: "#888888 #1a1a1a #1a1a1a #666666",
          }}
        >
          <div
            className="bg-[#3a3a3a] p-5 md:p-6"
            style={{
              border: "2px solid",
              borderColor: "#2a2a2a #555555 #555555 #2a2a2a",
            }}
          >
            <p className="font-minecraft text-sm md:text-base text-white leading-relaxed tracking-wide">
              {question}
            </p>
          </div>
        </div>

        {/* Back - Answer */}
        <div
          className="w-full bg-[#474747] absolute top-0 left-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "3px solid",
            borderColor: "#22d3ee #0e4a4a #0e4a4a #06b6d4",
            boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
          }}
        >
          <div
            className="bg-[#3a3a3a] p-5 md:p-6"
            style={{
              border: "2px solid",
              borderColor: "#2a2a2a #555555 #555555 #2a2a2a",
            }}
          >
            <p className="font-terminal text-sm md:text-base text-gray-300 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
