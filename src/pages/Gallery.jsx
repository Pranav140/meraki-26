import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galleryBg from "../assets/gallery.webp";
import { galleryCollections } from "../constants";

const Gallery = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);

  return (
    <div
      className="min-h-screen relative text-white pt-24 pb-16"
      style={{
        backgroundImage: `url(${galleryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-cyan-400"></div>
            <h2 className="font-terminal text-cyan-400 text-sm md:text-base tracking-[0.3em] uppercase">
              EVENT MEMORIES
            </h2>
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[14px] border-t-transparent border-b-transparent border-r-cyan-400"></div>
          </div>
          <h1
            className="font-minecraft text-5xl md:text-7xl text-white mb-4 tracking-wider"
            style={{
              textShadow:
                "4px 4px 0px #000, 2px 2px 0px rgba(6, 182, 212, 0.5)",
            }}
          >
            GALLERY
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        {}
        <div className="border-8 border-black border-dotted p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {}
            {galleryCollections.map((collection, index) => (
              <div
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className={`border-4 border-black bg-gray-100 cursor-pointer hover:bg-gray-200 transition-all flex flex-col items-center justify-center p-6
                                    ${
                                      index === 0
                                        ? "md:row-span-2 min-h-[400px]"
                                        : ""
                                    }
                                    ${
                                      index === 3
                                        ? "md:col-span-2 min-h-[190px]"
                                        : "min-h-[190px]"
                                    }
                                    ${index === 5 ? "md:col-span-2" : ""}
                                `}
              >
                <div className="text-6xl mb-4">📁</div>
                <h3 className="font-pixel text-lg text-black mb-2">
                  {collection.title}
                </h3>
                <p className="font-terminal text-sm text-gray-600">
                  {collection.count} images
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {}
      <AnimatePresence>
        {selectedCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCollection(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border-8 border-black p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {}
              <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-4">
                <div>
                  <h2 className="font-minecraft text-3xl text-black">
                    {selectedCollection.title}
                  </h2>
                  <p className="font-terminal text-sm text-gray-600 mt-2">
                    {selectedCollection.count} images in this collection
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCollection(null)}
                  className="bg-red-600 text-white font-pixel px-6 py-3 border-4 border-red-800 hover:bg-red-700 transition-all"
                >
                  ✕ CLOSE
                </button>
              </div>

              {}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCollection.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-4 border-black bg-gray-100 overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${selectedCollection.title} - Image ${index + 1}`}
                      className="w-full h-64 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
