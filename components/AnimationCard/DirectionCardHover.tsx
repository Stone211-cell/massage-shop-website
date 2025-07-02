"use client";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionCardHover({imageUrl,text,price}:{imageUrl?:string,text?:string,price?:string}) {
  const imagedefined =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="relative flex items-center justify-center h-full w-ful">
      <DirectionAwareHover imageUrl={imageUrl ?? imagedefined}>
        <p className="font-bold text-xl">{text}</p>
        <p className="font-normal text-sm">{price}</p>
      </DirectionAwareHover>
    </div>
  );
}
