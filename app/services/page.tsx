import { DirectionCardHover } from "@/components/AnimationCard/DirectionCardHover";
import Image from "next/image";
import { BentoGridCard } from "@/components/AnimationCard/BentoGridCard";

const page = () => {
  return (
    <div>
      <div
        className="relative bg-black text-white overflow-hidden w-full min-h-screen "
        data-aos="zoom-in-down"
      >
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
            <h2 className="text-4xl font-bold mb-4">Price Product</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              ducimus?
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-5 mx-5 gap-3 md:grid-cols-3">
        <DirectionCardHover />
        <DirectionCardHover />
        <DirectionCardHover />
        <DirectionCardHover />
      </div>

      <div className="mt-15 p-15 bg-gray-800">
        <BentoGridCard />
      </div>
    </div>
  );
};
export default page;
