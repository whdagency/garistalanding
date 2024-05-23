"use client";

import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeModeToggle = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { setTheme, theme } = useTheme();

  if (!isClient) return null;

  return (
    <Button
      variant={"secondary"}
      suppressHydrationWarning
      className="flex cursor-pointer items-center justify-center p-2 w-fit rounded-full"
    >
      {theme === "light" && (
        <IoSunnyOutline
          onClick={() => setTheme("dark")}
          className="h-[1.2rem] w-[1.2rem] cursor-pointer"
          color={theme === "light" ? "#000000" : "#FFFFFF"}
          size={20}
        />
      )}

      {theme === "dark" && (
        <IoMoonOutline
          onClick={() => setTheme("light")}
          className="h-[1.2rem] w-[1.2rem] cursor-pointer"
          color={theme === "dark" ? "#FFFFFF" : "#000000"}
          size={20}
        />
      )}
    </Button>
  );
};

export default ThemeModeToggle;
