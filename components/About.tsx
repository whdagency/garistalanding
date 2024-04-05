import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div id="About" className="container md:px-8 px-4">
      <div className="lg:pt-[150px] md:pt-[100px] pt-[80px]">
        <div className="flex flex-nowrap flex-col gap-y-20 items-center justify-start">
          <div className="w-full relative flex lg:flex-row flex-col flex-nowrap justify-center items-start xl:gap-x-20 md:gap-x-8">
            <div className="flex flex-col md:gap-y-8 gap-y-6 items-start justify-start lg:max-w-[470px] md:mr-14">
              <span className="text-primaryColor text-xs border border-primaryColor px-2 py-1 rounded-3xl">
                Native-like Experience
              </span>

              <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
                Crafted for native{" "}
                <span className="text-primaryColor">MacOS experience</span>{" "}
                integrated with AI
              </h3>

              <div className="relative w-auto group">
                <Button className="flex flex-row items-center justify-center gap-x-2">
                  Download Now
                  <ChevronRight
                    size={19}
                    strokeWidth={2}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Button>
              </div>
            </div>

            <div className="relative flex flex-col justify-center items-center gap-y-10 lg:pt-[70px] pt-10">
              <div className="lg:max-w-[580px]">
                <p className="text-left lg:text-[22px] md:text-xl text-lg font-medium">
                  Set up your shortcut keys and radically transform how you
                  work. Got a question? Just ask out loud. Receive answers with
                  GPT-4 or Claude 3. A quick query? Quick chat is ready for you.
                  Everything is at your fingertips.
                </p>
              </div>

              <div className="w-full grid lg:grid-cols-3 grid-cols-3 justify-center gap-8">
                <div className="flex flex-col flex-nowrap items-start justify-start">
                  <h3 className="text-primaryColor lg:text-xl md:text-lg text-base font-medium tracking-wide">
                    Type
                  </h3>

                  <p className="lg:text-base text-sm tracking-tight font-medium ">
                    any question
                  </p>
                </div>

                <div className="flex flex-col flex-nowrap items-start justify-start">
                  <h3 className="text-primaryColor lg:text-xl md:text-lg text-base font-medium tracking-wide">
                    Speak
                  </h3>

                  <p className="lg:text-base text-sm tracking-tight font-medium">
                    your mind
                  </p>
                </div>

                <div className="flex flex-col flex-nowrap items-start justify-start">
                  <h3 className="text-primaryColor lg:text-xl md:text-lg text-base font-medium tracking-wide">
                    Capture
                  </h3>

                  <p className="lg:text-base text-sm tracking-tight font-medium">
                    to explain
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <iframe
              className="w-[800px] h-[450px] max-w-full rounded-3xl"
              src="https://www.youtube.com/embed/0Q2QO4kPT8A?si=ZPmhm9BwxGRRviNc"
              title="About Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
