import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div id="Home" className="container md:px-8 px-4">
      <div className="pt-[180px] lg:pb-[80px] md:pb-[60px] pb-[40px]">
        <div className="md:text-center text-left mb-[50px] md:max-w-[744px] md:ml-auto ml-0 mr-auto md:px-6 px-0">
          <h1 className="text-secondaryBg md:text-[68px] sm:text-[47px] text-[35px] font-semibold mb-4 leading-[1.118em] -tracking-[0.01em]">
            Digitize Your <span className="text-primaryColor">Menu.</span>{" "}
            Elevate Your <span className="text-primaryColor">Business.</span>
          </h1>

          <p className="text-primaryTwo md:text-xl text-lg text md:mb-10 mb-6 font-medium">
            The Ultimate Digital Menu Solution for Restaurants and Cafés - Try
            Now!
          </p>

          <div className="relative w-fit md:mx-auto mr-auto group">
            <Button className="flex flex-row items-center justify-center gap-x-2">
              Get Started Now
              <ChevronRight
                size={19}
                strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Button>
          </div>
        </div>

        <div className="max-[1271px] mx-auto md:px-6">
          <div className="relative flex justify-center">
            <Image
              className="rounded-xl"
              src="/Home/homeImg.png"
              alt="home-img"
              width={985}
              height={588}
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 86vw, (max-width: 1439px) 95vw, 985px"
            />
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full homeFooter"></div>
    </div>
  );
}
