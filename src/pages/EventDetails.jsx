import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import eventDetailBg from "../assets/event_detail.webp";
import { eventDetailsData } from "../constants";

const EventDetails = () => {
  const { eventId } = useParams();
  const [showMore, setShowMore] = useState(false);

  const eventData = eventDetailsData[eventId] || {
    title: "Event Not Found",
    price: "₹0/-",
    tags: [],
    badge: "EVENT",
    description: "Event details not available.",
    fullDescription: "Event details not available.",
    eventDate: "TBA",
    teamSize: "TBA",
    venue: "TBA",
    contact: "events@meraki.com",
  };

  return (
    <div
      className="min-h-screen relative text-white pt-24 pb-16"
      style={{
        backgroundImage: `url(${eventDetailBg})`,
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
              EVENT INFORMATION
            </h2>
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[14px] border-t-transparent border-b-transparent border-r-cyan-400"></div>
          </div>
          <h1
            className="font-minecraft text-4xl md:text-6xl text-white mb-4 tracking-wider"
            style={{
              textShadow:
                "4px 4px 0px #000, 2px 2px 0px rgba(6, 182, 212, 0.5)",
            }}
          >
            {eventData.title}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {}
          <div className="border-4 border-white bg-gray-800">
            <div className="aspect-video bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 flex items-center justify-center">
              <span className="text-8xl">🤖</span>
            </div>
          </div>

          {}
          <div className="space-y-6">
            {}
            <div className="inline-block bg-cyan-400 text-black font-pixel text-xs px-4 py-2">
              {eventData.badge}
            </div>

            {}
            <h1 className="font-minecraft text-5xl md:text-6xl text-white">
              {eventData.title}
            </h1>

            {}
            <div className="flex items-center gap-3">
              <span className="text-4xl">💰</span>
              <span className="font-pixel text-3xl text-yellow-400">
                {eventData.price}
              </span>
            </div>

            {}
            <div className="flex flex-wrap gap-3">
              {eventData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800 border border-gray-600 text-white font-terminal text-sm px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            {}
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-pixel text-lg px-8 py-4 border-2 border-orange-800 hover:from-orange-500 hover:to-orange-400 transition-all">
              REGISTER NOW!
            </button>
          </div>
        </div>

        {}
        <div className="bg-gray-800/80 border-2 border-gray-600 p-8">
          <h2 className="font-pixel text-2xl text-white mb-6">DETAILS</h2>

          <div className="mb-6">
            <h3 className="font-pixel text-cyan-400 mb-3">DESCRIPTION</h3>
            <p className="font-terminal text-gray-300 leading-relaxed mb-3">
              {showMore ? eventData.fullDescription : eventData.description}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="font-terminal text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
            >
              {showMore ? "Show less ▼" : "Show more ▼"}
            </button>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border-l-4 border-cyan-400 pl-4">
              <h4 className="font-pixel text-white mb-2">EVENT DATE</h4>
              <p className="font-terminal text-gray-400">
                {eventData.eventDate}
              </p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h4 className="font-pixel text-white mb-2">TEAM SIZE</h4>
              <p className="font-terminal text-gray-400">
                {eventData.teamSize}
              </p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h4 className="font-pixel text-white mb-2">VENUE</h4>
              <p className="font-terminal text-gray-400">{eventData.venue}</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h4 className="font-pixel text-white mb-2">CONTACT</h4>
              <p className="font-terminal text-gray-400">{eventData.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
