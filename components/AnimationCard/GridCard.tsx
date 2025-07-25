"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function GridCard({head,des,pic,}:{head:string,des:string,pic:string,}) {
    const picdemo = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
         <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic ?? picdemo}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white"
        >
         {head}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-md whitespace-pre-line max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
       
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            href={linkbtn ?? "https://twitter.com/mannupaaji" }
            className="px-4 py-2 rounded-md bg-yellow-800 text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
