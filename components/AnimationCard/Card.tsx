import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Card() {
  const srcimg = "/Imgs/HomeImg/";
  const des = "Authentic Thai Massage "
  const testimonials = [
    {
      quote:
        "30.mins £35 \n 60.mins £60 \n 90mins £85",
      name: "Back Neck shoulder massage",
      designation:  `${des}`,
      src: `${srcimg}Authentic_ThaiMassage4.jpg`,
    },
       {
      quote:
        "30.mins £35 \n 60.mins £60 \n 90mins £85",
      name: "Foot Reflexology Massage",
      designation:  `${des}`,
      src: `${srcimg}Foot_AuthenticThaimassage_250702_1.jpg`,
    },
        {
      quote:
        "30.mins £35 \n 60.mins £60 \n 90mins £85",
      name: "Aroma Massage",
      designation:  `${des}`,
      src: `${srcimg}LINE_ALBUM_AuthenticThaimassage_250702_1.jpg`,
    },
        {
      quote:
        "30.mins £35 \n 60.mins £60 \n 90mins £85",
      name: "Aroma Massage",
      designation:  `${des}`,
      src: `${srcimg}LINE_ALBUM_AuthenticThaimassage_250628_1.jpg`,
    },
        //{
    //   quote:
    //     "30.mins £35 \n 60.mins £60 \n 90mins £85",
    //   name: "Back Neck shoulder massage",
    //   designation:  `${des}`,
    //   src: `${srcimg}Authentic_ThaiMassage4.jpg`,
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
