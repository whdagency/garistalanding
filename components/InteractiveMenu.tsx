import { interactiveMenuContent } from "@/constants";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InteractiveMenu = () => {
  const {
    selectedBgColor,
    selectedHeader,
    selectedLayout,
    selectedPrimaryColor,
    selectedSecondaryColor,
    selectedTheme,
  } = interactiveMenuContent.themeSelection;

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-h-screen overflow-hidden">
      <div className="flex flex-col max-w-full max-h-full gap-4 overflow-auto">
        <div className="relative border-black dark:border-black bg-black border-[14px] rounded-[2.5rem] w-[240px] max-w-full">
          <div className="rounded-[2rem] scrollbar-hide w-full h-[452px] bg-white dark:bg-black overflow-y-scroll">
            <ThemeOne
              selectedBgColor={selectedBgColor}
              selectedHeader={selectedHeader}
              selectedLayout={selectedLayout}
              selectedPrimaryColor={selectedPrimaryColor}
              selectedSecondaryColor={selectedSecondaryColor}
              selectedTheme={selectedTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ThemeOne = ({
  selectedBgColor,
  selectedHeader,
  selectedLayout,
  selectedPrimaryColor,
  selectedSecondaryColor,
  selectedTheme,
}: InteractiveMenuProps) => {
  // All, Steaks, Pizzas, Burgers, Sandwichm Juice, Tacos

  return (
    <section className="flex flex-col w-full min-h-screen bg-transparent">
      {/* Header */}
      <div className="w-full h-[150px] relative">
        {/* Banner Overlay */}
        <div className="opacity-35 absolute top-0 left-0 w-full h-full bg-black"></div>

        {/* Banner Image */}
        <Image
          src={interactiveMenuContent.bannerImage}
          className="object-cover w-full h-full"
          alt="Banner Image"
          width={500}
          height={500}
        />

        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <h1 className="text-lg font-bold text-white uppercase">
            House of Taste
          </h1>
        </div>

        {/* Social Icons and Logo */}
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
          {/* Social Icons */}
          <div className="absolute top-0 left-0 px-4 mt-4">
            <div className="flex items-center gap-4">
              {interactiveMenuContent.socials.map((item) => (
                <Link key={item.name} href={item.url} target="_blank">
                  <item.icon size={20} className="text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Info Button */}
          <div className="absolute top-0 right-0 mt-4">
            {selectedHeader === "logo-header" ? (
              <Image
                src={interactiveMenuContent.infoButton}
                alt="Info"
                className="h-[25px] w-[25px] cursor-pointer mr-4"
                width={25}
                height={25}
              />
            ) : (
              <h2 className="text-lg font-bold text-white mr-2">LOGO</h2>
            )}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        style={{
          backgroundColor: `${selectedBgColor}`,
          color: `${selectedPrimaryColor}`,
        }}
        className="flex-1 rounded-tl-[15px] rounded-tr-[15px] z-20 -mt-4 w-full mx-auto"
      >
        {/* Profile Banner */}
        <div className="w-full -mt-5">
          <Image
            src={interactiveMenuContent.profileBanner}
            alt="Profile Banner"
            className="z-20 object-cover w-14 h-16 mx-auto -mt-3 border border-orange-400 rounded-lg"
            width={80}
            height={80}
          />
        </div>

        {/* Store Details */}
        <div className="flex flex-col gap-1 pb-24 mt-4 w-full">
          <div className="flex flex-col gap-3 px-2">
            {/* Search Input */}
            <div className="relative rounded-full w-full mx-auto bg-gray-400">
              <input
                type="text"
                placeholder="what would you like to eat today ?"
                className="w-full rounded-full px-3 py-1 border border-secondaryBg focus:outline-none focus:ring-0 text-xs placeholder:text-[9px]"
              />
              <button className="absolute right-2 top-[6px]">
                <Search size={15} />
              </button>
            </div>

            {/* Top Categories */}
            <div className="scrollbar-hide overflow-x-scroll gap-2 flex items-center">
              {interactiveMenuContent.menuCategories.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-center gap-1 px-2 py-1  rounded-full ${
                    idx === 0 ? "bg-primaryColor text-white" : ""
                  } hover:bg-primaryColor hover:text-white cursor-pointer`}
                >
                  <item.icon size={10} />
                  <p className="text-xs font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {selectedLayout === "theme-grid" && (
            <div className="grid grid-cols-2 gap-3 px-2 py-4">
              {interactiveMenuContent.categories.map(
                ({ name, catImage, id }) => (
                  <div
                    key={id}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${catImage})`,
                    }}
                    className={`rounded-lg w-full h-[120px] bg-center bg-contain bg-no-repeat shadow-md relative transition-all hover:bg-blend-difference hover:bg-bottom`}
                  >
                    <Link href={`#`}>
                      <h1
                        style={{
                          color: `${selectedSecondaryColor}`,
                        }}
                        className="relative w-full h-full p-3 text-sm font-medium rounded-lg"
                      >
                        <span className="top-2 left-2 absolute px-2 py-1 text-xs text-center text-white bg-black rounded-full">
                          {name}
                        </span>
                      </h1>
                    </Link>
                  </div>
                )
              )}
            </div>
          )}

          {selectedLayout === "theme-list" && (
            <div className="flex flex-col w-full gap-3 px-2 py-4">
              {interactiveMenuContent.categories.map(
                ({ name, description, catImage, id, price }) => (
                  <Link
                    href={"#"}
                    key={id}
                    className="group grid items-start grid-cols-2 gap-5"
                  >
                    <div className="w-full">
                      <h1
                        style={{ color: `${selectedPrimaryColor}` }}
                        className="text-base font-medium"
                      >
                        {name}
                      </h1>
                      <p
                        style={{ color: `${selectedPrimaryColor}` }}
                        className="text-[10px] leading-snug opacity-80"
                      >
                        {description}
                      </p>
                      <p
                        style={{ color: `${selectedPrimaryColor}` }}
                        className="pt-3 text-sm font-semibold opacity-70"
                      >
                        {price} MAD
                      </p>
                    </div>

                    <div className="w-[100px] h-[100px] bg-black/50 group-hover:bg-black/70 rounded-lg border border-gray-200">
                      <Image
                        src={catImage}
                        alt="Category"
                        className="group-hover:scale-105 object-cover w-full h-full transition rounded-lg"
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                )
              )}
            </div>
          )}
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col justify-center items-center max-w-full">
          <div
            style={{ backgroundColor: `${selectedPrimaryColor}` }}
            className="bottom-2 rounded-2xl absolute"
          >
            <ul className="flex flex-row items-center justify-between gap-5 px-5 py-1">
              {interactiveMenuContent.menuButtons.map((item) => (
                <li key={item.name}>
                  <button type="button" className="py-2">
                    <item.icon
                      size={25}
                      style={{ color: `${selectedSecondaryColor}` }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMenu;
