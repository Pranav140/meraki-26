/**
 * @fileoverview Minecraft-style scroll progress bar fixed at bottom of viewport.
 * * Displays a horizontal experience bar that fills based on scroll progress.
 * Styled to look like Minecraft's XP bar with blocky 3D effects.
 * * @see DOCS.md#minecraft-bevel-borders for styling
 * @component
 */

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Minecraft-themed scroll progress indicator.
 * * @returns {JSX.Element} Fixed progress bar at viewport bottom
 * * @position Fixed to bottom, full width, z-index 10000
 * @styling Minecraft XP bar aesthetic with:
 * - Dark container with blocky border
 * - Green gradient fill (Custom Palette)
 * - Subtle grid pattern background
 * - 10 notch markers for "experience levels"
 * * @animation Uses spring physics for smooth fill updates
 */
const ScrollProgressBar = () => {
    // Track document scroll progress (0 to 1)
    const { scrollYProgress } = useScroll();

    /**
     * Spring-smoothed scale value for progress bar.
     * * @physics stiffness: 100, damping: 30
     * Creates smooth, slightly bouncy fill animation.
     */
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[10000] h-6 px-1 pb-1 pointer-events-none">
            {/* * Container - Minecraft XP Bar Frame
             * Dark background with blocky borders.
             */}
            <div className="w-full h-full relative bg-[#1a1a1a] border-2 border-black border-t-4">

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqUAqMFQBigJJIgqCJQwA5H0S8/G6+tcAAAAASUVORK5CYII=')]"></div>

                {/* * Progress Bar Fill
                 * * Main Color: #0DB50D (Vivid Green)
                 * Gradient: Adds #609E60 (Blend) for texture
                 */}
                <motion.div
                    className="h-full bg-[#0DB50D] origin-left relative"
                    style={{ 
                        scaleX,
                        // Optional: Subtle gradient to use the 'Blend' color for depth
                        backgroundImage: 'linear-gradient(to bottom, #0DB50D 40%, #609E60 100%)' 
                    }}
                >
                    {/* * 3D Bevel Effect - Top Highlight
                     * Color: #89E189 (Base/Lightest)
                     */}
                    <div className="w-full h-1 bg-[#89E189] absolute top-0 z-10"></div>
                    
                    {/* * 3D Bevel Effect - Bottom Shadow
                     * Color: #0F800F (Darkest Shading)
                     */}
                    <div className="w-full h-1 bg-[#0F800F] absolute bottom-0 z-10"></div>
                </motion.div>

                {/* * Experience Notches
                 * 10 evenly-spaced markers.
                 */}
                <div className="absolute inset-x-0 bottom-0 h-full flex justify-between px-2">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="h-full w-0.5 bg-[#0F800F]/40" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollProgressBar;