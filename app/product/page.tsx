
import { LayoutGridCard } from "@/components/AnimationCard/LayoutGridCard";
import { ThreeDCard } from "@/components/AnimationCard/ThreeDCard";
import { Banner } from "@/components/Header/Banner";

const page = () => {
  const srcimg = "/Imgs/HomeImg/LINE_ALBUM_AuthenticThaimassage_250628_1.jpg";
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="grid grid-cols-1 justify-center content-center bg-gray-100 md:grid-cols-3 ">
        <ThreeDCard head="hello" des="hello " pic={srcimg} linkbtn="hello" />
        <ThreeDCard head="hello" des="hello " pic={srcimg} linkbtn="hello" />
        <ThreeDCard head="hello" des="hello " pic={srcimg} linkbtn="hello" />
        
      </div>
      <div>
        <LayoutGridCard />
      </div>
      


    </div>
  );
};
export default page;
