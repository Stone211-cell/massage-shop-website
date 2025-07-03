// ✅ app/gallery/page.tsx หรือ pages/gallery.tsx
import Image from "next/image";
import path from "path";
import fs from "fs";
import GalleryClient from "@/components/Gallery/GalleryReadFile";


export default function GalleryPage() {
  const dir = path.join(process.cwd(), "public/Imgs/gallery");
  let images: string[] = [];

  try {
    images = fs
      .readdirSync(dir)
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file));
  } catch (error) {
    console.error("Error reading images:", error);
  }

  return (
    <div>
      {/* ✅ Section: Header background with title */}
      <div
        className="relative bg-black text-white overflow-hidden w-full min-h-screen"
        data-aos="zoom-in-down"
      >
        <Image
          src="/Imgs/HomeImg/Authentic_ThaiMassage.jpg"
          alt="Thaimassage"
          fill
          className="object-cover object-center opacity-30 z-0 h-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Gallery!!</h2>
            <p className="text-lg">Gallery in Our Thai Massage Shop</p>
          </div>
        </div>
      </div>

      {/* ✅ Section: Image gallery */}
      <GalleryClient images={images} />
    </div>
  );
}
