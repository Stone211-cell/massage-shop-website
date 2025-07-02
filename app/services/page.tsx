import { DirectionCardHover } from "@/components/AnimationCard/DirectionCardHover";
import Image from "next/image";

import { LayoutGridCard } from "@/components/AnimationCard/LayoutGridCard";
const page = () => {
  const srcimg = "/Imgs/HomeImg/";
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
            <h2 className="text-4xl font-bold mb-4">Services </h2>
            <p className="text-lg">
              We offer a wide range of high quality services to ensure that our
              customers have the best possible experience.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-5 mx-5 gap-3 md:grid-cols-3">
        <DirectionCardHover
          imageUrl={`${srcimg}Authentic_ThaiMassage4.jpg`}
          text="Back Neck shoulder massage"
          price="30.mins £35 \n 60.mins £60 \n 90mins £85"
        />
        <DirectionCardHover
          imageUrl={`${srcimg}Foot_AuthenticThaimassage_250702_1.jpg`}
          text="Foot Reflexology Massage"
          price="30.mins £35 \n 60.mins £60 \n 90mins £85"
        />
        <DirectionCardHover
          imageUrl={`${srcimg}LINE_ALBUM_AuthenticThaimassage_250702_1.jpg`}
          text="Aroma Massage"
          price="30.mins £35 \n 60.mins £60 \n 90mins £85"
        />
        <DirectionCardHover
          imageUrl={`${srcimg}LINE_ALBUM_AuthenticThaimassage_250628_1.jpg`}
          text="Aroma Massage"
          price="30.mins £35 \n 60.mins £60 \n 90mins £85"
        />
        <DirectionCardHover
          imageUrl={`${srcimg}massage-special-2-crop-u177907.jpg`}
          text="Couple Massagee"
          price="60mins £100 \n 90mins £170 "
        />
      </div>

      <div className="mt-15 p-15 bg-gray-800">
         <LayoutGridCard />
      </div>
    </div>
  );
};
export default page;
