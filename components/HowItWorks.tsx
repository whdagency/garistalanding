"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import anim1 from "@/components/customize-menu-2.json" assert { type: "json" };
import anim2 from "@/components/customize-menu-3.json" assert { type: "json" };
import anim3 from "@/components/customize-menu-4.json" assert { type: "json" };
import anim4 from "@/components/customize-menu-1.json" assert { type: "json" };
import Image from "next/image";

const steps = [
  {
    stepTitle: "Efficient Menu Management",
    title: "Efficient Menu Management",
    description:
      "Easily customize your menu with just a few clicks. Update dishes, prices, and descriptions in real-time without any design or coding skills. Keep your offerings fresh and exciting to attract more customers.",
    icon: anim1,
  },
  {
    stepTitle: "Better Customer Engagement",
    title: "Boosted Customer Engagement",
    description:
      "Connect with your customers like never before. Utilize QR code menus, gather feedback, and allow guests to place orders directly from their smartphones. Improve the dining experience and build stronger customer relationships.",
    icon: anim2,
  },
  {
    stepTitle: "Powerful Marketing Tools",
    title: "Powerful Marketing Tools",
    description:
      "Boost your visibility and attract new customers with integrated marketing features. Promote special offers, share updates on social media, and analyze customer behavior to optimize your marketing strategies effectively.",
    icon: anim3,
  },
  {
    stepTitle: "Comprehensive Restaurant Management",
    title: "Comprehensive Restaurant Management",
    description:
      "Streamline operations with Garista’s platform. Manage orders, track performance, and gain insights from one dashboard. Simplify management and focus on delivering great food and service.",
    icon: anim4,
  },
];

const HowItWorks = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = stepsContainerRef.current;
      if (!container) return;

      const isScrollingDown = e.deltaY > 0;
      const isAtTop = scrollProgress <= 0;
      const isAtEnd = scrollProgress >= steps.length - 1;

      if ((isAtTop && !isScrollingDown) || (isAtEnd && isScrollingDown)) {
        return;
      }

      e.preventDefault();
      const delta = e.deltaY / 1000;
      const newProgress = scrollProgress + delta;

      const clampedProgress = Math.max(0, Math.min(newProgress, steps.length));
      setScrollProgress(clampedProgress);

      const newSectionIndex = Math.floor(clampedProgress);
      if (newSectionIndex !== currentStep) {
        setCurrentStep(newSectionIndex);
      }
    };

    const container = stepsContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentStep, scrollProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // setScrollProgress(0); // Reset to the start when entering
          // if (entry.isIntersecting) {
          //   setCurrentStep(0);
          // }
        });
      },
      { root: null, threshold: 0.1 } // Adjusting threshold for triggering
    );

    if (stepsContainerRef.current) {
      observer.observe(stepsContainerRef.current);
    }

    const currentContainer = stepsContainerRef.current;
    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const goToSection = (index: number) => {
    setScrollProgress(index);
    setCurrentStep(index);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div
          ref={stepsContainerRef}
          className="flex flex-col md:flex-row gap-12 items-center md:items-start"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div className="mb-8">
              <h2 className="text-[#6985DB] font-semibold mb-2 uppercase">
                How It Works
              </h2>
              <h1 className="text-4xl font-bold mb-4">
                {steps[currentStep].title}
              </h1>
              <p className="text-[#90A3BF] max-w-2xl">
                {steps[currentStep].description}
              </p>
            </div>

            <div className="relative px-8 pb-4 pt-8 bg-[#FBFBFB] rounded-[14.4px] w-fit -mt-5">
              {/* Dotted Line */}
              <div className="absolute left-[46px] w-px top-8 bottom-[64px] border-l-[1.5px] border-dotted border-primaryColor" />

              {/* Active Line */}
              <motion.div
                className="absolute left-[46px] top-8 w-px bg-primaryColor origin-top"
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: scrollProgress / steps.length,
                }}
                transition={{ duration: 0.2 }}
                style={{ height: `calc(100% - 32px)` }}
              />

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="mb-12 relative"
                  onClick={() => goToSection(index)}
                >
                  <motion.div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold relative z-10 cursor-pointer ${
                      index <= currentStep
                        ? "bg-primaryColor text-white"
                        : "bg-[#E7E7E7] text-white"
                    }`}
                    initial={false}
                    animate={{
                      scale:
                        currentStep === steps.length - 1
                          ? 1
                          : currentStep === index
                            ? 1.2
                            : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="ml-12 -mt-8">
                    <h3
                      className={`font-semibold ${
                        index <= currentStep ? "text-black" : "text-gray-500"
                      }`}
                    >
                      {step.stepTitle}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 ? (
                  <Image
                    src="/assets/about-us-menu.png"
                    alt="Interactive Menu"
                    width={500}
                    height={450}
                    loading="lazy"
                    className="object-contain w-[500px] h-[500px]"
                  />
                ) : (
                  <Lottie
                    animationData={steps[currentStep].icon}
                    loop={true}
                    className="w-[500px] h-[450px] mx-auto mb-6"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

export const HowItWorksMobile = () => {
  return (
    <Carousel className="relative flex flex-col gap-4" opts={{ loop: true }}>
      <CarouselContent>
        {steps.map((step, index) => (
          <CarouselItem key={index}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col gap-8 items-center justify-center mt-4 text-center mx-auto overflow-hidden"
              >
                <div className="text-center w-full max-w-sm xs:max-w-lg sm:max-w-2xl px-5">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4 break-words text-wrap">
                    {step.title}
                  </h1>
                  <p className="text-[#90A3BF] break-words text-wrap leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index === 0 ? (
                  <Image
                    src="/assets/about-us-menu.png"
                    alt="Interactive Menu"
                    width={350}
                    height={350}
                    loading="lazy"
                    className="object-contain w-[500px] h-[500px] mt-4"
                  />
                ) : (
                  <Lottie
                    animationData={step.icon}
                    loop={true}
                    className="w-[500px] h-[500px] mt-4 object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Navigation buttons container */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <CarouselPrevious
          size={"icon"}
          className="bg-white shadow-lg w-10 h-10 text-[#787878] rounded-xl border border-[#D2D2D2]"
        />

        <CarouselNext
          size={"icon"}
          className="bg-white shadow-lg w-10 h-10 text-[#787878] rounded-xl border border-[#D2D2D2]"
        />
      </div>
    </Carousel>
  );
};
