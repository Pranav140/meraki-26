import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import faq from "../assets/faq_section_bg.webp";
import Box from "./Box";

const questions = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  q: `Question ${i + 1}: Is Meraki hosting any technical workshop?`,
  a: "This is the detailed answer for the technical workshop. Replace with real content. It will open/close inside the box without disturbing other columns.",
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [cols, setCols] = useState(() => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  });

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w >= 1024) setCols(3);
      else if (w >= 640) setCols(2);
      else setCols(1);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Distribute questions into columns for masonry layout
  const columns = useMemo(() => {
    const arr = Array.from({ length: cols }, () => []);
    questions.forEach((item, idx) => {
      arr[idx % cols].push({ ...item, index: idx });
    });
    return arr;
  }, [cols]);

  return (
    <section
      id="faq"
      className="w-full min-h-screen pt-24 pb-12 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${faq})`,
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Section Title */}
      <motion.div
        className="flex items-center gap-3 md:gap-4 ml-4 sm:ml-6 md:ml-10 mb-8 md:mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-cyan-400 text-xl sm:text-2xl md:text-3xl">▶</span>
        <h2 className="font-minecraft text-white text-xl sm:text-2xl md:text-4xl tracking-widest uppercase">
          FAQs
        </h2>
      </motion.div>

      {/* FAQ Grid */}
      <div className="flex items-start justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {columns.map((colItems, colIdx) => (
              <motion.div
                key={colIdx}
                className="flex-1 flex flex-col gap-4 sm:gap-6"
                variants={containerVariants}
              >
                {colItems.map((item) => (
                  <motion.div key={item.index} variants={itemVariants}>
                    <Box
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === item.index}
                      onToggle={() =>
                        setOpenIndex((prev) =>
                          prev === item.index ? null : item.index
                        )
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
