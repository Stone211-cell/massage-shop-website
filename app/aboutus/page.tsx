"use client";

import Image from "next/image";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { StickyScrollRevealDemo } from "@/components/AnimationCard/HeroStickyScrollReveal";
import MapDetail from "@/components/Contacted/MapDetail";

const Page = () => {
     useEffect(() => {
      AOS.init({
        duration: 800, // ความเร็วของ animation
           // เล่นแค่รอบเดียวตอน scroll มา
      });
    }, []);
  return (
    <div>
      <div className="relative bg-black text-white overflow-hidden w-full min-h-screen " data-aos="zoom-in-down">
        {/* 👇 รูปพื้นหลัง (อยู่หลังสุด) */}
        <Image
          src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
          alt="พื้นหลัง"
          fill
          className="object-cover object-center opacity-30 z-0 h-full"
        />

        {/* 👇 เนื้อหา อยู่กลางภาพทั้งแนวนอนและแนวตั้ง */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              ducimus?
            </p>
          </div>
        </div>
      </div>

      {/* รูปหลัก */}

      <div className="flex flex-col  md:flex-row text-black overflow-hidden min-h-screen gap-8 max-w-6xl mx-auto px-4 py-20">
        <div className="flex-1 flex justify-center"  data-aos="fade-up-right">
          <Image
            src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
            alt="นวดแผนไทย"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* ข้อความ */}
        <div className="flex-1 " data-aos="zoom-in-down">
          <h2 className=" text-3xl text-black">Why Are We the Best?</h2>
          <p className=" text-md text-black">
            Lorem ipsum dolor sit amet, in sit ferri justo suscipiantur, has id
            noster vivendo. Vel delenit albucius persecuti et, at his solet
            vivendo minimum. Ne mel quem veritus suscipiantur.
          </p>
        </div>
      </div>

      <div>
        <StickyScrollRevealDemo />
      </div>

      <div className="mt-15">
        <MapDetail />
      </div>
    </div>
  );
};

export default Page;

// <div className="flex-1 flex justify-center">
//   <Image
//     src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
//     alt="นวดแผนไทย"
//     width={400}
//     height={200}
//     className="rounded-lg shadow-lg"
//   />
// </div>
