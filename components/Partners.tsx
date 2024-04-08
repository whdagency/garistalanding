import Image from "next/image";
import Marquee from "react-fast-marquee";

const partnersIcon = [
  { src: "/Partners/Logo1.svg" },
  { src: "/Partners/Logo3.svg" },
  { src: "/Partners/Logo4.svg" },
  { src: "/Partners/Logo2.svg" },
  { src: "/Partners/Logo5.svg" },
  { src: "/Partners/Logo6.svg" },
  { src: "/Partners/Logo7.svg" },
  { src: "/Partners/Logo5.svg" },
  { src: "/Partners/Logo6.svg" },
  { src: "/Partners/Logo7.svg" },
];

export default function Partners() {
  return (
    <div id="Partners" className="container md:px-8 px-4">
      <div className="lg:pt-[120px] md:pt-[100px] pt-[80px] pb-[140px] px-10">
        <Marquee pauseOnHover={true} gradient={true} gradientColor="#f4f5f7">
          <div className="flex gap-[60px]">
            {partnersIcon.map((icon, i) => (
              <Image
                key={i}
                className={`inline-block ${i === 0 && "ml-[60px]"} ${
                  i === 3 && "w-[140px]"
                }`}
                src={icon.src}
                alt="logo"
                sizes="100px"
                width={68}
                height={68}
                loading="eager"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
