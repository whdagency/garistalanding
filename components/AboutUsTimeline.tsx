import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import anim1 from "@/components/lottie/customize-menu-1.json" assert { type: "json" };
import anim2 from "@/components/lottie/customize-menu-2.json" assert { type: "json" };
import anim3 from "@/components/lottie/customize-menu-3.json" assert { type: "json" };
import anim4 from "@/components/lottie/customize-menu-4.json" assert { type: "json" };

import { aboutUsContent } from "@/constants";
import Image from "next/image";
import { AboutUsTab } from "@/types";

const sections = aboutUsContent.map((content, index) => {
  return {
    title: content.type,
    content: content.items,
    icon:
      index === 0 ? anim1 : index === 1 ? anim2 : index === 2 ? anim3 : anim4,
  };
});

const AboutUsTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isCustomScrolling, setIsCustomScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container || !isCustomScrolling) return;

      const isScrollingDown = e.deltaY > 0;
      const isAtTop = scrollProgress <= 0;
      const isAtEnd = scrollProgress >= sections.length - 1;

      // Allow default scrolling when at the top and scrolling up or at the end and scrolling down
      if ((isAtTop && !isScrollingDown) || (isAtEnd && isScrollingDown)) {
        return;
      }

      // Custom scrolling logic
      e.preventDefault();
      const delta = e.deltaY / 1000;
      const newProgress = scrollProgress + delta;

      // Constrain progress to valid range
      const clampedProgress = Math.max(
        0,
        Math.min(newProgress, sections.length)
      );

      setScrollProgress(clampedProgress);

      // Determine the new section index
      const newSectionIndex = Math.floor(clampedProgress);
      if (newSectionIndex !== currentSectionIndex) {
        setCurrentSectionIndex(newSectionIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [scrollProgress, currentSectionIndex, isCustomScrolling]);

  useEffect(() => {
    const currentSectionRefs = sectionRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsCustomScrolling(entry.isIntersecting);
        });
      },
      { root: containerRef.current, threshold: 0.5 }
    );

    currentSectionRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSectionRefs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const goToSection = (index: number) => {
    setScrollProgress(index);
    setCurrentSectionIndex(index);
  };

  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="flex overflow-auto">
      <div className="w-1/12 p-6">
        <div className="relative h-[calc(100%-4rem)]">
          {/* Background line */}
          <div className="absolute left-[34px] top-0 bottom-0 w-px bg-gray-200" />

          {/* Single progress line */}
          <motion.div
            className="absolute left-[34px] top-0 w-px bg-primaryColor origin-top"
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: scrollProgress / (sections.length - 1),
            }}
            transition={{ duration: 0.2 }}
            style={{ height: "100%" }}
          />

          {sections.map((section, index) => (
            <div
              key={index}
              className="relative mb-24"
              ref={(el) => setSectionRef(el, index)}
            >
              <motion.div
                className={`w-6 h-6 rounded-full absolute left-6 cursor-pointer flex items-center justify-center text-sm font-bold ${
                  scrollProgress >= index
                    ? "bg-primaryColor text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
                initial={false}
                animate={{
                  scale: currentSectionIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => goToSection(index)}
              >
                {index + 1}
              </motion.div>
              <div className="ml-16">
                <button
                  className={`text-left p-2 rounded capitalize transition-colors ${
                    currentSectionIndex === index
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                  onClick={() => goToSection(index)}
                >
                  <span className="hidden">{section.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-11/12 flex flex-col px-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-10 place-items-center place-content-center">
              <div className="flex flex-col items-start gap-5">
                <h2 className="text-sm font-medium bg-primaryColor text-white rounded-full capitalize py-1 px-2">
                  {sections[currentSectionIndex].title}
                </h2>

                {sections[currentSectionIndex].content.map((ct, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold">{ct.title}</h2>
                    <p className="text-[#5A586A] text-sm font-medium leading-relaxed">
                      {ct.description}
                    </p>
                  </div>
                ))}
              </div>

              {currentSectionIndex === 0 ? (
                <Image
                  src="/assets/about-us-menu.png"
                  alt="Interactive Menu"
                  width={400}
                  height={350}
                  loading="lazy"
                  className="object-contain"
                />
              ) : (
                <Lottie
                  animationData={sections[currentSectionIndex].icon}
                  loop={true}
                  className="w-[500px] h-[500px] mx-auto mb-6"
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutUsTimeline;

type AboutUsMobileProps = {
  selectedTab: AboutUsTab;
  setSelectedTab: React.Dispatch<React.SetStateAction<AboutUsTab>>;
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | undefined>>;
  api: CarouselApi | undefined;
};

export const AboutUsMobile = ({
  setSelectedTab,
  selectedTab,
  setApi,
  api,
}: AboutUsMobileProps) => {
  const tabs = sections.map((section) => section.title);
  const selectedIndex = tabs.indexOf(selectedTab);

  const handleCarouselNext = () => {
    if (selectedIndex === tabs.length - 1) {
      setSelectedTab(tabs[0]);
      api?.scrollTo(0);
    } else {
      setSelectedTab(tabs[selectedIndex + 1]);
      api?.scrollNext();
    }
  };

  const handleCarouselPrevious = () => {
    if (selectedIndex === 0) {
      setSelectedTab(tabs[tabs.length - 1]);
      api?.scrollTo(tabs.length - 1);
    } else {
      setSelectedTab(tabs[selectedIndex - 1]);
      api?.scrollPrev();
    }
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setSelectedTab(tabs[api.selectedScrollSnap()]);

    api.on("select", () => {
      setSelectedTab(tabs[api.selectedScrollSnap()]);
    });
  }, [selectedIndex, api, setSelectedTab, tabs]);

  return (
    <Carousel className="relative" opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {sections.map(({ content, icon }, index) => (
          <CarouselItem key={index}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col gap-7 items-center justify-center mt-4 text-center md:max-w-2xl mx-auto"
              >
                {content.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-5 text-center max-w-[70%] xs:max-w-[75%] md:max-w-full"
                  >
                    <h3 className="text-black text-base md:text-2xl font-extrabold tracking-wide overflow-hidden break-words">
                      {item.title}
                    </h3>
                    <p className="text-[#5A586A] text-center text-sm md:text-base font-medium overflow-hidden break-words">
                      {item.description}
                    </p>
                  </div>
                ))}

                {index === 0 ? (
                  <Image
                    src="/assets/about-us-menu.png"
                    alt="Interactive Menu"
                    width={350}
                    height={350}
                    loading="lazy"
                    className="object-contain"
                  />
                ) : (
                  <Lottie
                    animationData={icon}
                    loop={true}
                    className="w-full h-[500px] mt-4 object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Navigation buttons container */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <CarouselPrevious
          onClick={handleCarouselPrevious}
          size={"icon"}
          className="bg-primaryColor p-2 rounded-full text-white"
        />
        <CarouselNext
          onClick={handleCarouselNext}
          size={"icon"}
          className="bg-primaryColor p-2 rounded-full text-white"
        />
      </div>
    </Carousel>
  );
};
