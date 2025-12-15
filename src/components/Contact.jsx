import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import steveRun from "../assets/about_image2.webp";
import addonImage from "../assets/spn.webp";
import pageBackground from "../assets/faq_section_bg.webp";
import qrPlaceholder from "../assets/qr_placeholder.webp";
import avatarPixel from "../assets/iiitu.webp";
import motionimg from "../assets/collab.webp";

export default function ContactMinecraft() {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const [isSent, setIsSent] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (data) => {
    if (!data.name || !data.email || !data.subject || !data.message) return;

    setIsSent(true);
    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn("EmailJS: missing env vars. Skipping sendForm.");
      } else {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
      }

      const existing = JSON.parse(localStorage.getItem("contacts") || "[]");
      existing.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem("contacts", JSON.stringify(existing));

      await new Promise((r) => setTimeout(r, 700));
      reset();
    } catch (e) {
      console.error(e);
      alert("Failed to send — check console.");
    } finally {
      setTimeout(() => setIsSent(false), 1100);
    }
  };

  const dragConstraintsSteve = { left: -120, right: 120, top: -40, bottom: 60 };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden text-white"
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-30"
        style={{
          backgroundImage: `url(${pageBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          filter: "grayscale(20%) brightness(0.90) contrast(1.05)",
        }}
      />

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-28 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <motion.img
        src={steveRun}
        alt="Steve"
        className="hidden md:block pointer-events-auto absolute left-6 bottom-6 md:left-10 md:bottom-12 w-28 md:w-40 z-20"
        drag
        dragConstraints={dragConstraintsSteve}
        dragElastic={0.12}
        whileTap={{ scale: 0.95 }}
        initial={{ x: -30, opacity: 0 }}
        animate={{
          x: [0, 18, 0, -18, 0],
          y: [0, -4, 0, 4, 0],
          opacity: [0, 1, 1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{
          imageRendering: "pixelated",
          filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.45))",
        }}
      />

      <div className="relative z-40 pt-28 pb-12 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative w-full mb-4 flex items-start justify-center">
          <div className="text-center">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-minecraft text-[#ffeb3b]"
              style={{ textShadow: "3px 3px 0 #2b2b2b" }}
            >
              MERAKI <span className="text-white">• CONTACT</span>
            </h1>
            <p className="mt-2 text-gray-200 font-minecraft text-xs md:text-sm bg-black/30 inline-block px-3 py-1 rounded">
              Msg Meraki — let&apos;s build something awesome
            </p>
          </div>

          <motion.img
            src={motionimg}
            alt="decor addon"
            className="hidden md:block pointer-events-none absolute -right-6 -top-6 w-24 md:w-32 z-30 rounded-md"
            initial={{ scale: 0.95, rotate: -3, opacity: 0 }}
            animate={{ scale: 1, rotate: [-3, 3, -2], opacity: 1 }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            style={{
              imageRendering: "pixelated",
              boxShadow: "0 6px 18px rgba(0,0,0,0.32)",
            }}
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="w-full lg:flex-1 rounded"
            style={{ boxShadow: "0 12px 28px rgba(0,0,0,0.28)" }}
          >
            <div
              className="bg-black/80 backdrop-blur-sm border-4 border-gray-600 rounded p-2"
              style={{
                boxShadow:
                  "0 0 0 2px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6)",
              }}
            >
              <div className="bg-black/60 p-5 md:p-6 rounded border border-gray-700">
                <h2 className="text-[#e6e6e6] font-minecraft text-lg mb-4">
                  Write to Admin
                </h2>

                {}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3"
                  noValidate
                >
                  {}
                  <input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleString()}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-minecraft text-[#ccc] mb-1">
                        Username (Name)
                      </label>
                      <input
                        {...register("name", {
                          required: "Name is required",
                          minLength: { value: 2, message: "Too short" },
                        })}
                        placeholder="Steve"
                        className="w-full p-2.5 bg-[rgba(0,0,0,0.6)] border-2 border-gray-600 rounded text-white outline-none text-sm transition-all duration-300 hover:border-cyan-500/50 focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.4)] focus:bg-[rgba(0,0,0,0.8)]"
                        name="name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[11px] mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-minecraft text-[#ccc] mb-1">
                        Redstone Address (Email)
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        placeholder="steve@minecraft.net"
                        className="w-full p-2.5 bg-[rgba(0,0,0,0.6)] border-2 border-gray-600 rounded text-white outline-none text-sm transition-all duration-300 hover:border-cyan-500/50 focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.4)] focus:bg-[rgba(0,0,0,0.8)]"
                        name="email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px] mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-minecraft text-[#ccc] mb-1">
                      Quest Title (Subject)
                    </label>
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: { value: 3, message: "Too short" },
                      })}
                      placeholder="Collab Request"
                      className="w-full p-2.5 bg-[rgba(0,0,0,0.6)] border-2 border-gray-600 rounded text-white outline-none text-sm transition-all duration-300 hover:border-cyan-500/50 focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.4)] focus:bg-[rgba(0,0,0,0.8)]"
                      name="subject"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-[11px] mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-minecraft text-[#ccc] mb-1">
                      Chat Log (Message)
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 8, message: "Too short" },
                      })}
                      rows={5}
                      placeholder="Type your message here..."
                      className="w-full p-2.5 bg-[rgba(0,0,0,0.6)] border-2 border-gray-600 rounded text-white outline-none text-sm transition-all duration-300 hover:border-cyan-500/50 focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.4)] focus:bg-[rgba(0,0,0,0.8)] resize-none"
                      name="message"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-[11px] mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[rgba(255,255,255,0.7)] text-xs font-minecraft max-w-[60%]">
                      *Creepers may explode if fields are left empty.
                    </p>
                    <div className="w-40">
                      <button
                        type="submit"
                        disabled={isSubmitting || isSent}
                        className={`w-full px-3 py-2.5 rounded font-minecraft text-sm transition-all duration-300 ${
                          isSent
                            ? "bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                            : "bg-gradient-to-b from-gray-500 to-gray-700 hover:from-gray-400 hover:to-gray-600 hover:shadow-[0_0_16px_rgba(6,182,212,0.5)] border-2 border-gray-800 hover:border-cyan-500"
                        } text-white disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95`}
                      >
                        {isSent ? "✓ Command Sent!" : "▶ Send Packet"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="w-full lg:w-80 flex flex-col gap-4"
          >
            <div
              className="bg-black/40 backdrop-blur-sm border-4 border-gray-600 p-2 rounded"
              style={{
                boxShadow:
                  "0 0 0 2px rgba(0,0,0,0.6), 0 8px 18px rgba(0,0,0,0.45)",
              }}
            >
              <div className="bg-black/30 p-3 rounded border border-gray-700">
                <p className="text-xs font-minecraft text-[rgba(255,255,255,0.85)] mb-1">
                  VISIT: IIIT UNA
                </p>

                <div className="w-full aspect-[4/3] overflow-hidden rounded">
                  <iframe
                    title="IIIT Una Map"
                    src="https://www.google.com/maps?q=IIIT%20Una%20Saloh%20Himachal%20Pradesh&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ minHeight: 140 }}
                  />
                </div>

                <div className="mt-1 text-xs font-minecraft text-[rgba(255,255,255,0.85)]">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=IIIT+Una+Saloh+Himachal+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div
              className="bg-black/40 backdrop-blur-sm border-4 border-gray-600 p-2 rounded"
              style={{
                boxShadow:
                  "0 0 0 2px rgba(0,0,0,0.6), 0 8px 18px rgba(0,0,0,0.45)",
              }}
            >
              <div className="p-4 flex flex-col items-center text-center rounded border border-gray-700 bg-black/30">
                <img
                  src={avatarPixel}
                  alt="Avatar"
                  className="w-16 h-16 mb-2 object-cover rounded"
                  style={{ imageRendering: "pixelated" }}
                />
                <h3 className="text-[#c9a8ff] font-minecraft text-base mb-1">
                  Server Info
                </h3>

                <ul className="text-xs font-minecraft text-gray-300 space-y-2 text-left w-full">
                  <li className="flex items-center gap-2 p-1 rounded bg-[rgba(0,0,0,0.12)]">
                    📍 IIIT UNA, Saloh, Hamirpur Rd, Una, HP
                  </li>
                  <li className="flex items-center gap-2 p-1 rounded bg-[rgba(0,0,0,0.12)]">
                    ✉️ hello@meraki.ex
                  </li>
                  <li className="flex items-center gap-2 p-1 rounded bg-[rgba(0,0,0,0.12)]">
                    ⌚ Office: 10:00 - 18:00
                  </li>
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-[rgba(0,0,0,0.36)] border-2 border-[rgba(255,255,255,0.03)] text-white p-3 flex items-center gap-3 max-w-sm rounded"
        >
          <div className="w-8 h-8 bg-green-600 border-2 border-[rgba(255,255,255,0.06)] flex items-center justify-center font-bold text-lg">
            !
          </div>
          <div>
            <h4 className="text-[#ffeb3b] font-minecraft text-xs">
              Achievement Unlocked
            </h4>
            <p className="text-white text-xs font-minecraft">
              Visited the Contact Page
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
  .font-minecraft {
  font-family: 'Press Start 2P', 'VT323', monospace;
  letter-spacing: 0.02em;
}
`}</style>
    </section>
  );
}
