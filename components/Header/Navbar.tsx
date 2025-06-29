import Link from "next/link";
import { Button } from "../ui/button";
import { List } from "@/utils/List";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
const Navbar = () => {
  return (
    <div className="bg-amber-200 h-20 w-[100%] flex flex-row justify-between items-center px-5">
      <div>
        <Button className="cursor-pointer">Logo</Button>
      </div>
      
      <div  className="hidden md:block">

      <div className="p-3  flex flex-row items-center justify-center">
        
        {List.map((item, index) => (
          <Link href={item.href} key={index}>
            <Button className="cursor-pointer">{item.label}</Button>
          </Link>
        ))}
        </div>
      </div>

      <section className="block md:hidden">
        <div className="p-3 flex flex-row items-center justify-center ">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent className="bg-white rounded-2xl">
                <MenubarSeparator />
                {List.map((item, index) => (
                  <MenubarItem key={index} className="transition duration-300 ease-in-out  hover:bg-black hover:text-white rounded-lg px-2" >
                    {" "}
                    <Link
                      href={item.href}
                      
                      className="cursor-pointer"
                    >
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
