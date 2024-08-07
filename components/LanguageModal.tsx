import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const languages = [
  {
    name: "English",
    flag: "/Flags/ukFlag.png",
    lang: "en",
    shortName: "Eng",
  },
  {
    name: "French",
    flag: "/Flags/franceFlag.png",
    lang: "fr",
    shortName: "Fr",
  },
  {
    name: "Italy",
    flag: "/Flags/italyFlag.png",
    lang: "it",
    shortName: "it",
  },
];

const LanguageModal = () => {
  const { i18n } = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: "/Flags/ukFlag.png",
    lang: i18n.language,
    shortName: "Eng",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);

  const handleSwitch = (lang: (typeof languages)[0]) => {
    i18n?.changeLanguage(lang.lang);
    setSelectedLanguage(lang);
    setIsOpen(false);
    setLangOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="justify-center w-full items-center gap-2 flex"
      >
        <Image
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
          width={selectedLanguage.name === "Italy" ? 22 : 20}
          height={selectedLanguage.name === "Italy" ? 22 : 20}
          loading="lazy"
          className="object-contain rounded-full hidden lg:block"
        />

        <span className="bg-transparent hidden lg:block text-sm font-medium text-white ">
          {selectedLanguage.name}
        </span>

        <span
          onClick={() => setLangOpen(!isLangOpen)}
          className="lg:hidden text-xl text-primaryTwo"
        >
          Language
        </span>

        <ChevronUp
          size={20}
          className={`transition-transform text-white hidden lg:block ${!isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute border border-black/50 right-0 mt-3 w-56 shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20 hidden lg:block"
          style={{
            clipPath:
              "polygon(86% 0, 90% 7%, 100% 7%, 100% 58%, 100% 100%, 64% 100%, 23% 100%, 0 100%, 0 6%, 81% 7%)",
          }}
        >
          <div className="pb-2 pt-3">
            {languages.map((language) => (
              <button
                key={language.name}
                onClick={() => handleSwitch(language)}
                className="group flex items-center w-full px-4 text-sm text-gray-700 hover:bg-gray-100 border-b border-b-black/40 last:border-b-0 py-4 gap-3"
              >
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={30}
                  height={30}
                  loading="lazy"
                  className="object-contain rounded-full"
                />
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {
        <div className="lg:hidden">
          <LanguageMobileModal
            languages={languages}
            handleSwitch={handleSwitch}
            isOpen={isLangOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      }
    </div>
  );
};

export default LanguageModal;

type LanguageMobileModalProps = {
  languages: typeof languages;
  handleSwitch: (lang: (typeof languages)[0]) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LanguageMobileModal = ({
  languages,
  handleSwitch,
  isOpen,
  setIsOpen,
}: LanguageMobileModalProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side={"bottom"} className="lg:hidden">
        <div className="flex flex-col gap-y-4 py-5 items-start">
          {languages.map((language) => (
            <SheetTrigger
              key={language.name}
              className="flex flex-col items-center mx-auto"
            >
              <span
                key={language.name}
                onClick={() => handleSwitch(language)}
                className="group flex items-center w-full px-4 text-base text-gray-700 py-4 gap-5 cursor-pointer"
              >
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={50}
                  height={50}
                  loading="lazy"
                  className="object-contain rounded-full"
                />
                {language.name}
              </span>
            </SheetTrigger>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
