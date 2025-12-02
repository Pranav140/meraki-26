import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/iiitu.webp';
import Faq from './Faq';
import Sponsors from './Sponsors';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow bg-black">
            {/* Background Image with Parallax-like Scale */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
            >
                <motion.div
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="w-full h-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* Main Title */}
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-8xl font-minecraft text-white mb-8 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    Meraki
                </motion.h1>

                {/* Subtitle / Techfest */}
                <motion.p
                    className="text-3xl md:text-5xl font-terminal text-accent-300 tracking-[0.2em] uppercase mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                    Techfest 2026
                </motion.p>

                {/* Coming Soon Badge */}
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                >
                    <span className="inline-block px-8 py-3 border-2 border-white/30 bg-black/40 backdrop-blur-md text-white text-lg md:text-xl font-pixel tracking-widest uppercase hover:bg-white/10 transition-colors duration-300">
                        DIVE DEEPER
                    </span>
                </motion.div>

                {/* Footer Info (Date & Location) */}
                <motion.div
                    className="absolute bottom-16 w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-20 text-white/90 font-pixel text-lg md:text-2xl tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                >
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <span className="text-accent-400">&gt;</span>
                        <span>Feb 5-7, 2026</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span>IIIT Una</span>
                        <span className="text-accent-400 animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>

            <Faq />
            <Sponsors />

        </section>
    );
};

export default Hero;
