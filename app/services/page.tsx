
import Image from "next/image";


import { GridCard } from "@/components/AnimationCard/GridCard";
import { Bannerbg } from "@/components/Header/Banner";
import { BentoGridCard } from "@/components/AnimationCard/BentoGridCard";
const page = () => {
  const srcimg = "/Imgs/HomeImg/";
  const srcimgbg = "/Imgs/HomeImg/couples-massages.webp";
  const bgimg = "/Imgs/HomeImg/Authentic_ThaiMassage.jpg";

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

      <div className="grid grid-cols-1 mt-5 gap-3 md:grid-cols-3">
        <GridCard
          head={"Back Neck shoulder massage"}
          des={"30.mins £35 \n 60.mins £60 \n 90mins £85"}
          pic={`${srcimg}Authentic_ThaiMassage4.jpg`}
        />
        <GridCard
          head={"Foot Reflexology Massage"}
          des={"30.mins £35 \n 60.mins £60 \n 90mins £85"}
          pic={`${srcimg}Foot_AuthenticThaimassage_250702_1.jpg`}
        />
        <GridCard
          head={"Aroma Massage"}
          des={"30.mins £35 \n 60.mins £60 \n 90mins £85"}
          pic={`${srcimg}LINE_ALBUM_AuthenticThaimassage_250702_1.jpg`}
        />
        <GridCard
          head={"Aroma Massage"}
          des={"30.mins £35 \n 60.mins £60 \n 90mins £85"}
          pic={`${srcimg}LINE_ALBUM_AuthenticThaimassage_250628_1.jpg`}
        />
        <GridCard
          head={"Back Neck shoulder massage"}
          des={"30.mins £35 \n 60.mins £60 \n 90mins £85"}
          pic={`${srcimg}Authentic_ThaiMassage4.jpg`}
        />
      </div>

      <div className="mt-15">
        <Bannerbg
          bgsrc={bgimg}
          srcimg={srcimgbg}
          text="For couples or two: Our Couple Massagee "
          des={"60mins £100 \n 90mins £170 "}
          desse={
            "Let our masseuses treat you and your partner, friend or loved one at the same time. You will feel comfortable.   enjoy the gentle movements and fragrant massage oils. The melodious music and comfortable lighting will make your body and mind completely relaxed during the massage with your partner."
          }
        />
      </div>
      <div className="mt-15 p-15 bg-gray-800">
        <BentoGridCard />
      </div>
    </div>
  );
};
export default page;
