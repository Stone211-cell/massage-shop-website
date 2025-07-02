import { FocusCards } from "../ui/focus-cards";

export function FocusCardsComponents() {
   const srcimg = "/Imgs/HomeImg/";
  const des = ""
  // Authentic Thai Massage by Professionals
  const cards = [
    {
      title: "Back Neck shoulder massage",
      des: `${des}`,
       src: `${srcimg}Authentic_ThaiMassage4.jpg`,
    },
    {
      title: "Foot Reflexology Massage",
      des: `${des}`,
       src: `${srcimg}Foot_AuthenticThaimassage_250702_1.jpg`,
    },
    {
      title: "Aroma Massage",
      des: `${des}`,
       src: `${srcimg}LINE_ALBUM_AuthenticThaimassage_250702_1.jpg`,
    },
    {
      title: "Swedish Massage ",
      des: `${des}`,
       src: `${srcimg}LINE_ALBUM_AuthenticThaimassage_250628_1.jpg`,
    },
    {
      title: "Authentic Thai Massage",
      des: `${des}`,
       src: `${srcimg}Authentic_ThaiMassage-3.jpg`,
    },
    {
      title: "Authentic Thai Massage",
      des: `${des}`,
       src: `${srcimg}Authentic_ThaiMassage.jpg`,
    },
    // {
    //   title: "Back Neck shoulder massage",
    //   des: `${des}`,
    //    src: `${srcimg}Authentic_ThaiMassage4.jpg`,
    // },
   
  ];

  return <FocusCards cards={cards} />;
}
