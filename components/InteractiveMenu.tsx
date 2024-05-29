import { interactiveMenuContent } from "@/constants";
import { Search } from "lucide-react";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const InteractiveMenu = () => {
  const {
    selectedBgColor,
    selectedLayout,
    selectedPrimaryColor,
    selectedSecondaryColor,
  } = interactiveMenuContent.themeSelection;



  return (
    <div>
      <DeviceFrameset device="iPhone X"  color="black">
        <div
          suppressHydrationWarning
          className="relative flex flex-col items-center justify-center w-full max-h-[150vh] md:max-h-screen overflow-hidden"
        >
          <div className="flex relative flex-col max-w-full max-h-full scrollbar-hide gap-4 overflow-y-scroll">
            <ThemeOne
              selectedBgColor={selectedBgColor}
              selectedLayout={selectedLayout}
              selectedPrimaryColor={selectedPrimaryColor}
              selectedSecondaryColor={selectedSecondaryColor}
            />
          </div>
        </div>

        {/* Menu Footer Buttons */}
        <div className="flex flex-col items-center justify-center max-w-full bg-bl">
          <footer
            style={{ backgroundColor: `${selectedBgColor}` }}
            className="rounded-b-2xl absolute bottom-0 flex items-center justify-around w-full px-1 py-2 mx-auto shadow-lg z-50"
          >
            {interactiveMenuContent.menuButtons.map((item, id) => (
              <Link
                href={`#`}
                key={id}
                className="flex flex-col items-center justify-center gap-1"
              >
                <item.icon
                  style={{ color: `${selectedSecondaryColor}` }}
                  className="w-5 h-5"
                />
                <span
                  style={{ color: `${selectedSecondaryColor}` }}
                  className="text-xs font-medium"
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </footer>
        </div>
      </DeviceFrameset>


    </div>
  );
};

const ThemeOne = ({
  selectedBgColor,
  selectedLayout,
  selectedPrimaryColor,
  selectedSecondaryColor,
}: Omit<InteractiveMenuProps, "selectedTheme" | "selectedHeader">) => {
  const [filteredProducts, setFilteredProducts] = useState(
    interactiveMenuContent.categories
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Tab Hover Effect
  const handleHoverActive = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.backgroundColor = selectedPrimaryColor;
    e.currentTarget.style.color = selectedBgColor;
    e.currentTarget.style.border = `1px solid ${selectedPrimaryColor}`;
  };

  // Tab Hover Effect
  const handleHoverInactive = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.backgroundColor = "";
    e.currentTarget.style.color = selectedSecondaryColor;
    e.currentTarget.style.border = "";
  };

  const getFilteredProducts = useCallback(() => {
    if (searchTerm) {
      const newFilteredProducts = interactiveMenuContent.categories.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      if (selectedCategory === "all") {
        setFilteredProducts(interactiveMenuContent.categories);
      } else {
        const newFilteredProducts = interactiveMenuContent.categories.filter(
          (product) => product.id === selectedCategory
        );
        setFilteredProducts(newFilteredProducts);
      }
    }
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    getFilteredProducts();
  }, [getFilteredProducts, selectedCategory]);

  return (
    <section
      style={{ backgroundColor: `${selectedBgColor}` }}
      className="flex flex-col w-full min-h-screen"
    >
      {/* Menu Header */}
      <div className="px-2 py-3 !w-full !h-full mt-7">
        <div className="!relative mx-auto !h-[170px] !w-full max-w-md overflow-hidden !rounded-[.5rem] shadow">
          {/* Banner */}
          <div className="bg-secondary-gray overflow-hidden !w-full !h-full">
            <Image
              src={interactiveMenuContent.bannerImage}
              loading="lazy"
              className="!max-h-44 bg-secondary-gray object-cover !h-screen !w-full"
              alt={interactiveMenuContent.name}
              width={100}
              height={100}
            />
          </div>
          {/* Banner Overlay and Restaurant Name */}
          <div className="bg-black/50 absolute inset-0 z-10"></div>
          <div className="bottom-16 absolute inset-x-0 z-20 p-4 text-center">
            <h3 className="text-xl font-medium text-white">
              {interactiveMenuContent.name}
            </h3>
          </div>
          {/* cover_image currency description email id logo name phone resto_id
        slug  */}
          {/* Social Icons */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex justify-between p-3 text-center">
            <div className="flex gap-2">
              {interactiveMenuContent.socials.map((social, id) => (
                <Link key={id} href={social.url} target="_blank">
                  <social.icon color="white" size={17} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="w-full mx-auto">
        {/* Search & Categories Section */}
        <div className="flex flex-col gap-3 px-2 py-4">
          {/* Categories */}
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-scroll">
            {interactiveMenuContent.categories.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center gap-1 px-4 py-1  rounded-[0.5rem] cursor-pointer border border-gray-300 shadow-md`}
                style={{
                  backgroundColor:
                    item.id === selectedCategory ? selectedPrimaryColor : "",
                  color:
                    item.id === selectedCategory
                      ? selectedBgColor
                      : selectedSecondaryColor,
                  border:
                    item.id === selectedCategory
                      ? `1px solid ${selectedPrimaryColor}`
                      : "",
                }}
                onClick={() => setSelectedCategory(item.id)}
                onMouseOver={(e) => {
                  item.id !== selectedCategory ? handleHoverActive(e) : null;
                }}
                onMouseOut={(e) => {
                  item.id !== selectedCategory ? handleHoverInactive(e) : null;
                }}
              >
                <p className="text-xs font-medium capitalize">{item.id}</p>
              </div>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full mx-auto bg-transparent rounded-full">
            <button className="absolute left-2 top-[10px] flex flex-col items-center justify-center pointer-events-none">
              <Search size={13} className="text-gray-500" />
            </button>
            <input
              style={{ color: `${selectedSecondaryColor}` }}
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search menu..."
              className="w-full rounded-[.5rem] pl-7 pr-2 py-2 border border-gray-300 focus:outline-none focus:ring-0 text-xs placeholder:text-xs bg-transparent"
            />
          </div>
        </div>

        {/* Products based on the selected category */}
        <div className="flex-col w-full gap-1 pb-24 md:pb-5 mt-2">
          <div className="flex items-center justify-between px-2">
            <h2
              style={{ color: `${selectedSecondaryColor}` }}
              className="text-base font-medium capitalize"
            >
              {selectedCategory}
            </h2>
          </div>

          {!(filteredProducts?.length > 0) ? (
            <div
              style={{ color: `${selectedSecondaryColor}` }}
              className="w-full my-3 text-center"
            >
              No Products Found
            </div>
          ) : (
            <>
              {/* Categories Grid */}
              {selectedLayout === "theme-grid" && (
                <div className="grid grid-cols-2 gap-3 px-2 py-4">
                  {filteredProducts?.map(({ id, ...item }) => (
                    <div
                      key={id}
                      className="group items-center justify-center h-full w-full overflow-hidden p-1.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors border border-gray-300"
                    >
                      <Image
                        src={item.catImage}
                        alt="Menu Icon"
                        className="w-full group-hover:scale-[1.02] transition object-cover rounded-[10px] h-24 relative"
                        width={100}
                        height={100}
                        loading="lazy"
                      />

                      <div
                        style={{ color: selectedSecondaryColor }}
                        className="flex items-center justify-between gap-2 px-1 pt-2"
                      >
                        <div className="flex flex-col gap-1">
                          <h2 className="text-xs">
                            {item.name.length > 20
                              ? item.name.slice(0, 20) + "..."
                              : item.name}
                          </h2>

                          <p className="text-start text-xs">
                            {item.price} {item.currency}
                          </p>
                        </div>

                        <button
                          type="button"
                          style={{
                            backgroundColor: selectedPrimaryColor,
                            color: selectedBgColor,
                          }}
                          className="leading-0 w-fit p-1 flex items-center justify-center rounded-[8px]"
                        >
                          <AiOutlinePlus
                            style={{
                              color: selectedBgColor,
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Categories List */}
              {selectedLayout === "theme-list" && (
                <div className="grid w-full grid-cols-1 gap-4 px-2 py-4">
                  {filteredProducts?.map(
                    ({ name, catImage, id, price, currency }) => (
                      <Link
                        href={"#"}
                        key={id}
                        className="group place-items-end grid items-start grid-cols-2 gap-5 p-2 border border-gray-300"
                      >
                        <div className="w-full">
                          <div className="text-start flex flex-col gap-3">
                            {/* Item Name */}
                            <h2
                              style={{ color: `${selectedSecondaryColor}` }}
                              className="text-wrap text-sm"
                            >
                              {name.length > 20
                                ? name.slice(0, 20) + "..."
                                : name}
                            </h2>

                            {/* Item Price */}
                            <p
                              style={{ color: `${selectedSecondaryColor}` }}
                              className="opacity-80 text-base font-medium"
                            >
                              {price} {currency}
                            </p>

                            {/* Add to cart */}
                            <button
                              type="button"
                              style={{
                                backgroundColor: selectedPrimaryColor,
                                color: selectedBgColor,
                              }}
                              className="leading-0 w-full px-2 py-1 mt-auto flex items-center justify-center rounded-[5px]"
                            >
                              <AiOutlinePlus
                                style={{
                                  color: selectedBgColor,
                                }}
                              />
                            </button>
                          </div>
                        </div>

                        <div className="w-[100px] h-[100px] bg-black/50 group-hover:bg-black/70 rounded-lg border border-gray-200">
                          <Image
                            src={catImage}
                            alt="Category"
                            className="group-hover:scale-105 group-hover:border-gray-200 object-cover w-full h-full transition border rounded-lg"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                      </Link>
                    )
                  )}
                </div>
              )}
            </>
          )}
        </div>

        <div className="w-full h-32 md:h-5" />

        {/* Menu Footer Buttons */}
        {/*
        <div className="flex flex-col items-center justify-center max-w-full">
          <footer
            style={{ backgroundColor: `${selectedBgColor}` }}
            className="rounded-b-2xl absolute bottom-0 flex items-center justify-around w-full px-1 py-2 mx-auto shadow-lg"
          >
            {interactiveMenuContent.menuButtons.map((item, id) => (
              <Link
                href={`#`}
                key={id}
                className="flex flex-col items-center justify-center gap-1"
              >
                <item.icon
                  style={{ color: `${selectedSecondaryColor}` }}
                  className="w-5 h-5"
                />
                <span
                  style={{ color: `${selectedSecondaryColor}` }}
                  className="text-xs font-medium"
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </footer>
        </div> */}
      </div>
    </section>
  );
};

export default InteractiveMenu;
