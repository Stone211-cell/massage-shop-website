"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "../ui/button";
export function TypeWriter() {
  const words = [
    {
      text: "Radiance",
    },
    {
      text: "",
    },

    // {
    //   text: "Aceternity.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  return (
    <div className=" flex flex-col items-center justify-center sm:flex-row">
      <div className=" flex flex-col items-center justify-center text-center w-[80%] p-4">
        <p className="text-neutral-200 dark:text-neutral-200 text-2xl sm:text-base   ">
          Enhancing Your Natural Beauty with Every Touch
        </p>

        <p className="text-white   text-6xl font-bold">Meets</p>

        <TypewriterEffectSmooth words={words} />

        <p className="text-white   text-6xl font-bold">and Care</p>

        <p className="text-neutral-200 dark:text-neutral-200 text-2xl sm:text-base p-1 ">
          Let our experienced therapists guide you on a journey of complete <br />
          serenity, leaving you feeling refreshed and revitalized.
        </p>

        <div className="flex flex-col mt-5 md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-4">
          <Button className="w-40 h-12 rounded-xl bg-white text-black border border-black  transition duration-300 hover:brightness-110 hover:scale-105 text-lg">
              Join now
          </Button>
        </div>
      </div>
    </div>
  );
}
