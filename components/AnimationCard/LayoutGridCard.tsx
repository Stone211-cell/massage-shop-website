"use client";
import React, { useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

import AOS from "aos";
import "aos/dist/aos.css";
export function LayoutGridCard() {
    useEffect(() => {
      AOS.init({
        duration: 800, // ความเร็วของ animation
        // เล่นแค่รอบเดียวตอน scroll มา
      });
    }, []);
  return (
    <div className="h-screen py-20 w-full " data-aos="fade-right">
      <LayoutGrid cards={cards} />
    </div>
  );
}



const srcimg = "/Imgs/HomeImg/";

const cards = [
  {
    id: 1,
    className: "md:col-span-2",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage.jpg`
  },
  {
    id: 2,
    className: "md:col-span-1",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage1.jpg`
  },
  {
    id: 3,
    className: "md:col-span-1",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage-1.jpg`
  },
  {
    id: 4,
    className: "md:col-span-2",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage2.jpg`
  },
  {
    id: 5,
    className: "md:col-span-2",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage-2.jpg`
  },
  {
    id: 6,
    className: "md:col-span-1",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage3.jpg`
  },
  {
    id: 7,
    className: "md:col-span-2",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage-4.jpg`
  },
  {
    id: 8,
    className: "md:col-span-1",

    thumbnail:
       `${srcimg}Authentic_ThaiMassage5.jpg`
  },
  {
    id: 9,
    className: "md:col-span-2",

    thumbnail:
       `${srcimg}LINE_ALBUM_AuthenticThaimassage_250702_1.jpg`
  },
  
];



// const SkeletonTwo = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         House above the clouds
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         Perched high above the world, this house offers breathtaking views and a
//         unique living experience. It&apos;s a place where the sky meets home,
//         and tranquility is a way of life.
//       </p>
//     </div>
//   );
// };
// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         Greens all over
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         Rivers are serene
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };