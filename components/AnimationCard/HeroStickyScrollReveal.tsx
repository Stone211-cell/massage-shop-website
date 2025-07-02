"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Our Team.",
    description:
      "Our team consists of certified and highly experienced medical staff who are always at your side and support you and your family.  In order to stay up to date with new technologies and innovative treatment methods, we regularly undertake further training.​",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/Imgs/HomeImg/Authentic_ThaiMassage4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Lady Bowling",
    description:
      "Great experience here! Tea at the end is refreshing and the place feels cosy. Thank you for getting my body like a new born 🙏🏼",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Lena Sunier",
    description:
      "Relaxing environment with friendly, professional massage therapists. Recommend",
    content: (
      <div className="flex h-full w-full items-center justify-center  bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250702_1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
