import Image from "next/image";
import { TypeWriter } from "../TypewriterEffectSmooth/Typewriter";

export const Banner = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* 👇 รูปพื้นหลัง (อยู่หลังสุด) */}
      <Image
        src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
        alt="Thaimassage"
        fill
        className="object-cover object-center opacity-20 z-0"
      />

      {/* 👇 เนื้อหา */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto px-4 py-20">
        {/* ข้อความ */}
        <div className="flex-1 text-center md:text-left">
          <TypeWriter />
        </div>

        {/* รูปหลัก */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"
            alt="Thaimassage"
            width={400}
            height={300}
            className="rounded-br-[300px] rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export const Bannerbg = ({bgsrc,srcimg,text,des}:{bgsrc?:string,srcimg?:string,text?:string,des?:string}) => {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* 👇 รูปพื้นหลัง (อยู่หลังสุด) */}
      <Image
        src={bgsrc ?? "/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"}
        alt="พื้นหลัง"
        fill
        className="object-cover object-center opacity-20 z-0"
      />

      {/* รูปหลัก */}

      <div className="relative z-10 flex flex-col md:flex-row  gap-8 max-w-6xl mx-auto px-4 py-20">
        <div className="flex-1 flex justify-center">
          <Image
            src={srcimg ?? "/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg"} 
            alt="นวดแผนไทย"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

     
        {/* ข้อความ */}
        <div className="flex-1  md:text-left">
          <h2 className=" text-3xl text-white">lasldlasdlk{text}</h2>
          <p className=" text-md text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ducimus?{des}</p>
          {/* <TypeWriter /> */}
        </div>
      </div>
    </div>
  );
};
