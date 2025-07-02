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
      <div
        className="relative bg-black text-white overflow-hidden w-full min-h-screen "
        data-aos="zoom-in-down"
      >
        {/* 👇 รูปพื้นหลัง (อยู่หลังสุด) */}
        <Image
          src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
          alt="Thaimassage"
          fill
          className="object-cover object-center opacity-30 z-0 h-full"
        />

        {/* 👇 เนื้อหา อยู่กลางภาพทั้งแนวนอนและแนวตั้ง */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              About the history of our Thai massage shop
            </p>
          </div>
        </div>
      </div>

      {/* รูปหลัก */}

      <div className="flex flex-col  md:flex-row text-black overflow-hidden min-h-screen gap-8 max-w-6xl mx-auto px-4 py-20">
        <div className="flex-1 flex justify-center" data-aos="fade-up-right">
          <Image
            src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
            alt="Thaimassage"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* ข้อความ */}
        <div className="flex-1 " data-aos="zoom-in-down">
          <h2 className=" text-3xl text-black">Why Are We the Best?</h2>
          <p className=" text-md text-black">
            Authentic Thai Massage is not just your typical massage clinic. We
            offer a sanctuary where you can escape from the stresses of everyday
            life. Our skilled therapists are trained in the art of Thai massage,
            which involves deep tissue pressure and assisted stretching
            techniques to help you achieve optimal relaxation and healing. We
            take pride in providing an authentic experience that will leave you
            feeling rejuvenated and refreshed. Come visit us today and
            experience the difference of Authentic Thai Massage. We started with
            a simple idea: to create a practice that would have a positive
            impact on the lives of others. We have not lost sight of this
            principle to this day, which is why we are so successful with what
            we do.
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
