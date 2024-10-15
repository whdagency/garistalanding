import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "@/components/lottie/loader.json" assert { type: "json" };

type SplashScreenProps = {
  setLoadSplashScreen: (loadSplashScreen: boolean) => void;
};

const SplashScreen = ({ setLoadSplashScreen }: SplashScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-5 overflow-hidden">
      <Lottie
        animationData={loaderAnimation}
        loop={false}
        className="w-[800px] h-[800px] 2xl:w-[1200px] 2xl:h-[1200px] flex flex-col items-center justify-center"
        onComplete={() => setLoadSplashScreen(false)}
      />
    </div>
  );
};

export default SplashScreen;
