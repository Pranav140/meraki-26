import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center transition-colors duration-150
                ${
        isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/40"  
            : "bg-gradient-to-b from-black/60 to-transparent "                 }`}
        >
            <Link to="/" className="text-white font-minecraft text-xl md:text-2xl tracking-wider flex items-center gap-3 hover:text-accent-400 transition-colors duration-300 cursor-pointer">
                <span className="text-accent-400 text-sm animate-pulse">►</span>
                Meraki
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
                <div className="flex gap-6 font-pixel text-white/80 text-sm tracking-widest">
                    <Link to="/" className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4">HOME</Link>
                    <Link to="/about" className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4">ABOUT</Link>
                    <Link to="/" className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4">EVENTS</Link>
                </div>
                <div className="text-white/90 font-terminal text-lg md:text-xl tracking-wide border-l-2 border-accent-500 pl-4 ml-4">
                    <Link to="https://iiitu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer hover:underline decoration-accent-400 underline-offset-4">IIIT Una</Link>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
                <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 font-pixel text-white text-xl tracking-widest text-center">
                            <Link to="/" onClick={toggleMenu} className="hover:text-accent-400 cursor-pointer">HOME</Link>
                            <Link to="/about" onClick={toggleMenu} className="hover:text-accent-400 cursor-pointer">ABOUT</Link>
                            <span onClick={toggleMenu} className="hover:text-accent-400 cursor-pointer">EVENTS</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
