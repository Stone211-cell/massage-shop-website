import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Authentic Thai Massage by  <br />
              <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
                Professionals
              </span>
            </h1>
          </>
        }
      >
        {/* กล่องกำหนดขนาดภาพ */}
        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src="/Imgs/HomeImg/bannermassalogo.jpg"
            alt="hero"
            fill
            className="rounded-2xl object-cover"
            draggable={false}
            priority
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
