import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "./loader.json";

type SplashScreenProps = {
  setLoadSplashScreen: (loadSplashScreen: boolean) => void;
};

const SplashScreen = ({ setLoadSplashScreen }: SplashScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie
        animationData={loaderAnimation}
        loop={false}
        className="w-[800px] h-[800px] 2xl:w-[1200px] 2xl:h-[1200px]"
        onComplete={() => setLoadSplashScreen(false)}
      />
    </div>
  );
};

export default SplashScreen;
