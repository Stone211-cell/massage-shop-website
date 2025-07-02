import Link from "next/link";
import { Button } from "../ui/button";
import { List } from "@/utils/List";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AlignJustify } from 'lucide-react';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-30 w-[100%] border-b-1 flex flex-row justify-between items-center px-5">
      <div>
        <Link href="/" className="cursor-pointer ml-3">
          <Image
            src="/Imgs/logoicon.png"
            height="200"
            width="200"
            className="object-cover"
            alt="thaimassage"
          />
        </Link>
      </div>

      <div className="hidden md:block">
        <div className="p-7 gap-3 flex flex-row items-center justify-center">
          {List.map((item, index) => (
            <Link href={item.href} key={index}>
              <Button className="cursor-pointer transition m-4 duration-300 ease-in-out hover:bg-yellow-600  hover:border-1/2 hover:border-black hover:text-white hover:scale-100">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <section className="block md:hidden">
        <div className="p-3 flex flex-row items-center justify-center ">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <AlignJustify 
                  size="30"
                  color="black"
                  className="cursor-pointer"
                />
              </MenubarTrigger>
              <MenubarContent className="bg-white rounded-2xl">
                <MenubarSeparator />
                {List.map((item, index) => (
                  <MenubarItem
                    key={index}
                    className="transition duration-300 ease-in-out  hover:bg-black hover:text-white rounded-lg px-2"
                  >
                    {" "}
                    <Link href={item.href} className="cursor-pointer  px-2">
                      {item.label}
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </section>
    </div>
  );
};
export default Navbar;
