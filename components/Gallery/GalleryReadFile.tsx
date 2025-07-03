// ✅ Client Component: app/gallery/GalleryClient.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GalleryClient({ images }: { images: string[] }) {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openImage = (src: string) => {
    setCurrentImage(src);
    setShowModal(true);
  };
    useEffect(() => {
      AOS.init({
        duration: 800, // ความเร็วของ animation
        // เล่นแค่รอบเดียวตอน scroll มา
      });
    }, []);
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-black">Gallery</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((file, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => openImage(`/Imgs/gallery/${file}`)}
            data-aos="fade-up"
          >
            <Image
              src={`/Imgs/gallery/${file}`}
              alt={`gallery-${index}`}
              width={500}
              height={500}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 transition duration-300 group-hover:bg-black/20" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80 backdrop-blur"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-h-[90vh]  w-full max-w-4xl p-4" data-aos="fade-up">
            <Image
              src={currentImage}
              alt="zoom"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-50 text-4xl text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition"
      >
        ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
