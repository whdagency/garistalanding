import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import NavLogo from "@/pages/DocsNavLogo";
import Footer from "@/components/Footer";
import ThemeModeToggle from "@/components/ThemeModeToggle";
import DocsFooterBottom from "@/pages/DocsFooterBottom";

const config: DocsThemeConfig = {
  logo: (
    <h1 className="flex flex-row items-center justify-start gap-1">
      <NavLogo />
      {/* Text */}
      <span className="text-lg font-medium">Garista Documentation</span>
    </h1>
  ),
  logoLink: "/docs",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="The Ultimate digital menu solution for restaurants and cuisines"
      />
      <link rel="icon" href="/Logo/favicon-garista-white_blue.svg" />
    </>
  ),
  darkMode: false,
  navbar: {
    extraContent: (
      <>

        <ThemeModeToggle />
      </>
    ),
  },
  footer: {
    component: (
      <>
        <Footer />
        <DocsFooterBottom />
      </>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Garista Documentation",
      defaultTitle: "Garista",
      description:
        "The Ultimate digital menu solution for restaurants and cuisines",
      openGraph: {
        type: "website",
        locale: "en",
        url: "https://www.garista.com",
        siteName: "Garista",
      },
    };
  },
};

export default config;
