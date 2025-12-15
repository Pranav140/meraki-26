import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const [isScrolled, setIsScrolled] = useState(false);

  const navBackground = isOpen
    ? "bg-transparent"
    : isScrolled
    ? "bg-black/80 backdrop-blur-md border-b border-white/40"
    : "bg-gradient-to-b from-black/60 to-transparent";

  const handleNavigation = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }

    if (isOpen) toggleMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center transition-colors duration-150
                ${navBackground}`}
    >
      <Link
        to="/"
        className="text-white font-minecraft text-xl md:text-2xl tracking-wider flex items-center gap-3 hover:text-accent-400 transition-colors duration-300 cursor-pointer"
      >
        <span className="text-accent-400 text-sm animate-pulse">►</span>
        Meraki
      </Link>

      {}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex gap-6 font-pixel text-white/80 text-sm tracking-widest">
          <Link
            to="/"
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            HOME
          </Link>
          <button
            onClick={() => handleNavigation("about")}
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            ABOUT
          </button>
          <Link
            to="/schedule"
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            SCHEDULE
          </Link>
          <Link
            to="/gallery"
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            GALLERY
          </Link>
          <Link
            to="/team"
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            TEAM
          </Link>
          <button
            onClick={() => handleNavigation("sponsors")}
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            SPONSORS
          </button>
          <Link
            to="/contact"
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            CONTACT US
          </Link>
        </div>
        <div className="text-white/90 font-terminal text-lg md:text-xl tracking-wide border-l-2 border-accent-500 pl-4 ml-4">
          <Link
            to="https://iiitu.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4"
          >
            IIIT Una
          </Link>
        </div>
      </div>

      {}
      <div className="md:hidden z-50">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {}
      <div className="hidden md:flex lg:hidden z-50">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl font-minecraft tracking-widest focus:outline-none hover:text-accent-400 transition-colors duration-200"
        >
          {isOpen ? <FaTimes /> : "M"}
        </button>
      </div>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col gap-8 font-pixel text-white text-xl tracking-widest text-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="hover:text-accent-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                >
                  HOME
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                <button
                  onClick={() => handleNavigation("about")}
                  className="hover:text-accent-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                >
                  ABOUT
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/schedule"
                  onClick={toggleMenu}
                  className="hover:text-accent-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                >
                  SCHEDULE
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/gallery"
                  onClick={toggleMenu}
                  className="hover:text-accent-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                >
                  GALLERY
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/team"
                  onClick={toggleMenu}
                  className="hover:text-accent-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                >
                  TEAM
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <button
                  onClick={() => handleNavigation("sponsors")}
                  className="hover:text-accent-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                >
                  SPONSORS
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="hover:text-accent-400 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                >
                  CONTACT US
                </Link>
              </motion.div>
              <Link
                to="https://iiitu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="hover:text-accent-400 cursor-pointer mt-4 text-lg font-terminal"
              >
                IIIT Una
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
