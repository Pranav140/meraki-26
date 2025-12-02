import React, { useEffect, useRef, useState } from "react";
import bgImage from '../assets/about_image3.png';
import charArt from '../assets/sponsors_character_art.png';


const sponsorImages = [
    {
        x: 154,
        y: 56,
        url: `https://picsum.photos/seed/hi/200`,
        size: "200px",
        name: "Director",
        leftAnchored: true,
    }, {
        x: 563,
        y: 174,
        url: `https://picsum.photos/seed/hii/200`,
        size: "200px",
        name: "Director",
        leftAnchored: true,
    }, {
        x: 90,
        y: 401,
        url: `https://picsum.photos/seed/hiii/200`,
        size: "200px",
        name: "Director",
        leftAnchored: true,
    }, {
        x: 539,
        y: 500,
        url: `https://picsum.photos/seed/hiiii/200`,
        size: "200px",
        name: "Director",
        leftAnchored: false,
    }, {
        x: 120,
        y: 401,
        url: `https://picsum.photos/seed/hiiiii/200`,
        size: "200px",
        name: "Director",
        leftAnchored: false,
    },
]


export default function Sponsors() {
    // Dimensions of the design
    const BaseWidth = 1311;
    const BaseHeight = 750;

    const [smallDevice, setSmallDevice] = useState(false);
    useEffect(() => {
        function onResize() {
            const w = window.innerWidth;
            if (w < 768) setSmallDevice(true);
            else setSmallDevice(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <div
            className="min-h-screen w-full flex flex-col"
            style={{ backgroundImage: `url(${bgImage})` }}>

            <div className="flex items-center gap-3 ml-10 relative">
                <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-[#1ec0d0]"></div>

                <h2 className="font-minecraft text-white text-3xl tracking-[2px]">
                    Sponsors
                </h2>

                {/* Minecraft Character - Top Right */}
                <div className="absolute hidden -top-25 right-10 sm:block sm:w-30 sm:h-40 md:w-60 md:h-80 z-10">
                    <img
                        src={charArt}
                        alt="Minecraft Creeper"
                        className="w-full h-full object-contain"
                        style={{
                            filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))',
                        }}
                    />
                </div>

            </div>

            <div className="grid pt-[70px] place-items-center gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:flex md:flex-1 overflow-hidden md:relative">

                {sponsorImages.map((item, idx) => (
                    <div key={idx}
                        style={{
                            width: item.size,
                            borderRadius: "50%",
                            overflow: "hidden",
                            backgroundColor: "#FFF",
                            top: `${(item.y / BaseHeight) * 100}%`,
                            position: smallDevice ? "static" : "absolute",
                            ...(item.leftAnchored
                                ? { left: `${(item.x / BaseWidth) * 100}%` }
                                : { right: `${(item.x / BaseWidth) * 100}%` })
                        }}>
                        <img src={item.url}
                            alt={item.name}
                            style={{
                                objectFit: "cover"
                            }} />
                    </div>
                ))}

            </div>

        </div >
    );
}
