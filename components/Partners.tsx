import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partnersIcon } from "@/constants";

export default function Partners() {
  return (
    <div id="Partners" className="mt-20">
      <div className="bg-[#EAF1F9]">
        <Marquee pauseOnHover={true} autoFill={true}>
          <div className="flex items-center gap-10 py-5 bg-[#EAF1F9]">
            {partnersIcon.map((icon, i) => (
              <Image
                key={i}
                className={`inline-block mx-5`}
                src={icon.src}
                alt="logo"
                sizes="100px"
                width={80}
                height={80}
                loading="eager"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
