import { List } from "@/utils/List";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Footerbar = () => {
  return (
    <div className="bg-neutral-800 w-full h-full px-8 py-10 mt-20">
      <div className="flex flex-col text-white  gap-6 md:grid md:grid-cols-4 md:items-start md:text-start">
        <div>
          <Link href="/" className="cursor-pointer">
            <Image
              src="/favicon.ico"
              height="250"
              width="250"
              className="object-cover"
              alt="thaimassage"
            />
          </Link>
          <p className="max-w-xs mt-4">
            Welcome to one of the best therapeutic massage studios in your area!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold unpercase">Office</h2>
          <p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p>
          <p className="text-whit  transition-all duration-300 hover:text-yellow-300">
            info@email.com
          </p>
        </div>
        <div className="flex flex-col justify-start  gap-3">
          <h2 className="text-2xl font-bold">LINKS</h2>
          {List.map((item, index) => (
            <Button
              key={index}
              className="transition duration-300 ease-in-out  hover:border-b hover:border-amber-300 hover:text-yellow-300 px-2"
            >
              {" "}
              <Link href={item.href} className="cursor-pointer">
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex flex-col  gap-3">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <span>kkk</span>
          <span>kkk</span>
          <span>kkk</span>
        </div>
      </div>
    </div>
  );
};
export default Footerbar;
