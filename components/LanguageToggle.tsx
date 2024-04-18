"use client";

// import { i18n } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LangToggle() {
  const [isSwitch, setSwitch] = useState(true);
   
  const {i18n} = useTranslation('global')
  const handleSwitch = (lang: any) => {
    i18n?.changeLanguage(lang)
  };
  const [SelectOption, setSelectOption] = useState('fr')

  return (
    // <div
    //   className="fixed bottom-6 right-4 cursor-pointer"
    //   onClick={handleSwitch}
    // >
    //   <div className="relative size-8 rounded-full">
    //     {isSwitch ? (
    //       <Image src="/Flags/franceFlag.png" alt="flag" fill priority />
    //     ) : (
    //       <Image src="/Flags/ukFlag.png" alt="flag" fill priority />
    //     )}
    //   </div>
    // </div>
    <>
     <div
      className="fixed bottom-6 right-4 cursor-pointer"
    >
        {
            SelectOption == 'fr'
            ?
                <button onClick={() => {handleSwitch("en"); setSelectOption("Eng")}} className="relative size-8 rounded-full">
                  <Image src="/Flags/ukFlag.png" alt="flag" fill priority />
                </button>
            :
            <button onClick={() => {handleSwitch("fr"); setSelectOption("fr")}} className="relative size-8 rounded-full">
                  <Image src="/Flags/franceFlag.png" alt="flag" fill priority />
            </button>
        }
    </div>
    </>
  );
}
