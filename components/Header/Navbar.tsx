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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-blue-400 h-20 w-[100%] flex flex-row justify-between items-center px-5">
      <div>
        <Link href="/" className="cursor-pointer ml-3">
          <Image
            src="/Imgs/logoicon.png"
            height="160"
            width="160"
            className="object-cover"
            alt="thaimassage"
          />
        </Link>
      </div>

      <div className="hidden md:block">
        <div className="p-3  flex flex-row items-center justify-center">
          {List.map((item, index) => (
            <Link href={item.href} key={index}>
              <Button className="cursor-pointer transition duration-300 ease-in-out hover:bg-yellow-500  hover:border-1/2 hover:border-black hover:text-white hover:scale-100">
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
                <FontAwesomeIcon
                  icon={faBarsStaggered}
                  size="2x"
                  color="red"
                  className="cursor-pointer inline-block text-3xl text-red-400"
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
