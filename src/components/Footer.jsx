import React from "react";
import { motion } from "framer-motion";
import iiituLogo from "../assets/iiitu-logo.png";
import merakiLogo from "../assets/meraki-minecraft.png";

const Footer = () => {
  const blockSize = 25; // Base block size in pixels

  /**
   * HOW TO ADD COLORED SQUARES TO THE FOOTER BACKGROUND
   *
   * The fixedSquares array allows you to place decorative colored blocks
   * on the footer background. Each square object has the following properties:
   *
   * @property {number} x - Horizontal position (0-40 scale, where 40 = 100% width)
   *                        Example: x: 5 places the square at ~12.5% from the left
   *                                 x: 20 places it at center (50%)
   *                                 x: 35 places it at ~87.5% from the left
   *
   * @property {number} y - Vertical position (in blocks from the top of the dark section)
   *                        Each unit = 25px (blockSize). y: 0 is right at the 30% mark
   *                        Example: y: 0 = at the transition line
   *                                 y: 2 = 50px below the transition
   *                                 y: 4 = 100px below the transition
   *
   * @property {string} color - CSS color value for the square
   *                            Example: "#C4A962" (gold)
   *                                     "#FF0000" (red)
   *                                     "rgba(255, 255, 255, 0.3)" (transparent white)
   *
   * EXAMPLE USAGE:
   *
   * const fixedSquares = [
   *   { x: 5, y: 2, color: "#C4A962" },     // Gold square at left, 50px down
   *   { x: 20, y: 4, color: "#FF5733" },    // Orange square at center, 100px down
   *   { x: 35, y: 1, color: "#6C6A6A" },    // Gray square at right, 25px down
   *   { x: 10, y: 6, color: "rgba(255, 255, 255, 0.2)" }, // Transparent white
   * ];
   *
   * TIPS:
   * - Keep x values between 0-40 to stay within viewport
   * - Use y values carefully to avoid overlapping with content
   * - The blockSize is 25px, so each block is a 25x25 pixel square
   * - Squares appear below the 30% gray section (in the dark #242424 area)
   */
  const fixedSquares = [];

  const coordinators = [
    {
      name: "Pranav Garg",
      email: "23346@iiitu.ac.in",
      phone: "+91XXXXXXXXX",
    },
    {
      name: "Pranav Garg",
      email: "23346@iiitu.ac.in",
      phone: "+91XXXXXXXXX",
    },
  ];

  const otherFests = [
    { name: "MRIDANG", url: "https://mridang.iiitu.ac.in" },
    { name: "ESUMMIT", url: "https://esummit.iiitu.ac.in" },
  ];
  const quickLinks = ["HOW TO REACH", "COORDINATING TEAM"];

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ fontFamily: "'Press Start 2P', cursive" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Top */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "30%",
            backgroundColor: "#303030",
          }}
        />
        {/* Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "70%",
            backgroundColor: "#242424",
          }}
        />

        {/* Fixed blocks rendering*/}
        {fixedSquares.map((square, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{
              width: `${blockSize}px`,
              height: `${blockSize}px`,
              left: `calc(${(square.x / 40) * 100}%)`,
              top: `calc(30% + ${square.y * blockSize}px)`,
              backgroundColor: square.color,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 py-8 md:py-12">
        {/* Coordinators Section */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-white text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 tracking-[0.2em] sm:tracking-[0.3em]"
            style={{ letterSpacing: "0.3em" }}
          >
            COORDINATORS
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-16 md:gap-32">
            {coordinators.map((coordinator, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3
                  className="text-white text-sm sm:text-base md:text-lg mb-2"
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "clamp(28px, 5vw, 32px)",
                  }}
                >
                  {coordinator.name}
                </h3>
                <p
                  className="text-white text-[8px] sm:text-[10px] md:text-xs mb-1"
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "clamp(20px, 3vw, 18px)",
                  }}
                >
                  {coordinator.email}
                </p>
                <p
                  className="text-white text-[8px] sm:text-[10px] md:text-xs mb-1"
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "clamp(20px, 3vw, 18px)",
                  }}
                >
                  {coordinator.phone}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logo Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12 py-6 md:py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* IIIT Una Logo + Text */}
          <div className="flex items-center justify-center gap-3 md:gap-4 w-56 sm:w-64">
            <div className="text-right hidden sm:block">
              <p
                className="text-[#C4A962] text-[8px] sm:text-[10px] md:text-xs leading-tight"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                Indian Institute of
              </p>
              <p
                className="text-[#C4A962] text-[8px] sm:text-[10px] md:text-xs leading-tight"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                Information
              </p>
              <p
                className="text-[#C4A962] text-[8px] sm:text-[10px] md:text-xs leading-tight"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                Technology Una
              </p>
            </div>
            <img
              src={iiituLogo}
              alt="IIIT Una Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
          </div>

          {/* Dotted Divider */}
          <div
            className="hidden sm:block h-16 md:h-20 mx-4 md:mx-8"
            style={{
              borderLeft: "2px dashed rgba(255, 255, 255, 0.3)",
            }}
          />

          {/* Meraki Logo */}
          <div className="flex items-center justify-center w-56 sm:w-64">
            <img
              src={merakiLogo}
              alt="Meraki Logo"
              className="h-12 sm:h-16 md:h-20 object-contain mx-auto"
            />
          </div>
        </motion.div>

        {/* Divider below logos */}
        <div className="w-full max-w-4xl mx-auto h-px bg-gray-500/60 mb-8 md:mb-12" />

        {/* Three Sections Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Other Fests */}
          <div>
            <h4
              className="text-white text-xs sm:text-sm mb-3 md:mb-4 tracking-wider"
              style={{ letterSpacing: "0.15em" }}
            >
              OTHER FESTS
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {otherFests.map((fest, idx) => (
                <li key={idx}>
                  <a
                    href={fest.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-[8px] sm:text-[10px] hover:text-[#C4A962] transition-colors duration-300"
                    style={{
                      fontFamily: "'VT323', monospace",
                      fontSize: "clamp(11px, 2vw, 14px)",
                    }}
                  >
                    {fest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4
              className="text-white text-xs sm:text-sm mb-3 md:mb-4 tracking-wider"
              style={{ letterSpacing: "0.15em" }}
            >
              CONNECT WITH US
            </h4>
            <div className="flex justify-center gap-3 md:gap-4">
              {/* Social Icons */}
              <a
                href="#"
                className="text-gray-400 hover:text-[#C4A962] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#C4A962] transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#C4A962] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-xs sm:text-sm mb-3 md:mb-4 tracking-wider"
              style={{ letterSpacing: "0.15em" }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-400 text-[8px] sm:text-[10px] hover:text-[#C4A962] transition-colors duration-300"
                    style={{
                      fontFamily: "'VT323', monospace",
                      fontSize: "clamp(11px, 2vw, 14px)",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Credits Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center pt-4 md:pt-6 border-t border-gray-700/50 gap-3 sm:gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-gray-400 text-[8px] sm:text-[10px] order-2 sm:order-1"
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "clamp(10px, 2vw, 14px)",
            }}
          >
            ©2026 MERAKI - TechFest IIIT UNA
          </p>
          <p
            className="text-gray-400 text-[8px] sm:text-[10px] order-1 sm:order-2"
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "clamp(10px, 2vw, 14px)",
            }}
          >
            Developed by <span className="text-[#C4A962]">© DEVTEAM</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
