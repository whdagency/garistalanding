"use client";

import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PosPartners = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        <Image
          src="/providers/garista.png"
          alt="garista"
          width={100}
          height={100}
          className="object-cover"
        />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-16 border-none bg-transparent"
        duration={20}
        delay={10}
        radius={100}
      >
        <Image
          src="/providers/oracle.png"
          alt="oracle"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-16 border-none bg-transparent"
        duration={20}
        delay={15}
        radius={100}
      >
        <Image
          src="/providers/square.png"
          alt="square"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-16 border-none bg-transparent"
        duration={20}
        delay={20}
        radius={100}
      >
        <Image
          src="/providers/clover.png"
          alt="garista"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-16 border-none bg-transparent"
        duration={20}
        delay={25}
        radius={100}
      >
        <Image
          src="/providers/toast.png"
          alt="garista"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-24 border-none bg-transparent"
        radius={200}
        duration={20}
        delay={40}
        reverse
      >
        <Image
          src="/providers/touch-bistro.png"
          alt="bistro"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-24 border-none bg-transparent"
        radius={200}
        duration={20}
        delay={15}
        reverse
      >
        <Image
          src="/providers/aloha.png"
          alt="aloha"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-24 border-none bg-transparent"
        radius={200}
        duration={20}
        delay={20}
        reverse
      >
        <Image
          src="/providers/shopify.png"
          alt="shopify"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-24 border-none bg-transparent"
        radius={200}
        duration={20}
        delay={25}
        reverse
      >
        <Image
          src="/providers/lightspeed.png"
          alt="lightspeed"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-24 border-none bg-transparent"
        radius={200}
        duration={20}
        delay={30}
        reverse
      >
        <Image
          src="/providers/posnow.png"
          alt="posnow"
          width={200}
          height={200}
          className="object-cover"
        />
      </OrbitingCircles>
    </div>
  );
};

export default PosPartners;
