"use client";
import { Card } from "@/components/AnimationCard/Card";
import { FocusCardsComponents } from "@/components/AnimationCard/FocusCards";
import { HeroScroll } from "@/components/AnimationCard/HeroScroll";
import { Banner, Bannerbg } from "@/components/Header/Banner";

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
  const srcimg = "/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
  return (
    <div >
      <div data-aos="fade-up">
        <Banner />
      </div>

      <div data-aos="fade-up-right">
        <Card />
      </div>

      <div data-aos="fade-left">
        <Bannerbg bgsrc={srcimg} srcimg={srcimg}/>
      </div>

      <div  data-aos="zoom-in">
        <HeroScroll />
      </div>
      <div data-aos="fade-up-left">
        <FocusCardsComponents />
      </div>
    </div>
  );
};
export default Page;
