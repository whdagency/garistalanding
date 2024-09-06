"use client";

import { keyAdvantages } from "@/constants";
import React from "react";

const KeyAdvantages = () => {
  return (
    <div id="Benefits" className="container md:px-8 px-4">
      <div className="lg:pt-[30px] md:pt-[20px] pt-[30px] pb-[100px]">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            Key advantages of <br /> our platform
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-2 pt-6 md:px-16">
            {keyAdvantages.map((item, index) => {
              const hasShadow = item.reduction !== undefined;
              return (
                <div
                  style={{
                    backgroundColor: item.bgColor
                      ? item.bgColor
                      : "transparent",
                  }}
                  key={index}
                  className={`flex w-full h-full rounded-3xl p-5 col-span-1 flex-col items-center gap-3 ${hasShadow ? "shadow-[0px_3.558px_7.115px_0px_rgba(0,_0,_0,_0.25)]" : "shadow-none hidden lg:block"}`}
                >
                  <div
                    style={{ color: item.textColor }}
                    className="flex flex-col gap-20"
                  >
                    {hasShadow ? (
                      <p className={"flex-1 flex-grow text-sm font-medium"}>
                        {item.content}
                      </p>
                    ) : (
                      <p></p>
                    )}

                    {item.reduction !== undefined ? (
                      <p className="text-3xl lg:text-4xl font-medium">
                        {item.reduction}
                      </p>
                    ) : (
                      <p className="text-sm font-medium">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyAdvantages;
