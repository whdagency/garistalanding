"use client";

import Image from "next/image";
import { useState } from "react";

export default function LangToggle() {
  const [isSwitch, setSwitch] = useState(true);

  const handleSwitch = () => {
    setSwitch(!isSwitch);
  };

  return (
    <div
      className="fixed bottom-6 right-4 cursor-pointer"
      onClick={handleSwitch}
    >
      <div className="relative size-8 rounded-full">
        {isSwitch ? (
          <Image src="/Flags/franceFlag.png" alt="flag" fill priority />
        ) : (
          <Image src="/Flags/ukFlag.png" alt="flag" fill priority />
        )}
      </div>
    </div>
  );
}
