import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partnersIcon } from "@/constants";

export default function Partners() {
  return (
    <div id="Partners" className="mt-20">
      <div>
        <Marquee autoFill={true}>
          <div className="flex items-center gap-5 py-5">
            {partnersIcon.map((icon, i) => (
              <Image
                key={i}
                className={`inline-block mx-5`}
                src={icon.src}
                alt="logo"
                width={100}
                height={100}
                loading="eager"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
