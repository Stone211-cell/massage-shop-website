"use client";
import { Card } from "@/components/AnimationCard/Card";
import { FocusCardsComponents } from "@/components/AnimationCard/FocusCards";
import { HeroScroll } from "@/components/AnimationCard/HeroScroll";
import { Banner, Bannerbg, BannerTime } from "@/components/Header/Banner";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // ความเร็วของ animation
      // เล่นแค่รอบเดียวตอน scroll มา
    });
  }, []);
  const srcimg = "/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250702_1.jpg";
  const bgimg = "/Imgs/HomeImg/Authentic_ThaiMassage.jpg";

  return (
    <div>
      <div data-aos="fade-up">
        <Banner />
      </div>

      <div data-aos="fade-up-right">
        <Card />
      </div>

      <div data-aos="fade-left">
        <Bannerbg
          bgsrc={bgimg}
          srcimg={srcimg}
          text="TREATMENTS"
          desse="Our studio is a calm, welcoming space with authentic Thai décor, soft lighting, and relaxing music. Every visit is a chance to unwind in a peaceful environment and experience the true art of Thai wellness."
          des="At Authentic Thai Massage, we offer a variety of treatments rooted in traditional Thai healing. From deep tissue Thai massage and soothing oil therapies to hot stone and herbal compress sessions, each treatment is designed to relieve tension, improve circulation, and restore balance."
        />
      </div>

      <div data-aos="zoom-in">
        <HeroScroll />
      </div>

      <div data-aos="fade-up-left">
        <FocusCardsComponents />
      </div>

      <div data-aos="fade-left " className="mt-10">
        <BannerTime
          bgsrc=
            "/Imgs/HomeImg/907b43_f73122ce29a749c4a0500af848e24ace~mv2.avif"
          
          text="OPENING HOURS"
        
        />
      </div>
    </div>
  );
};
export default Page;
