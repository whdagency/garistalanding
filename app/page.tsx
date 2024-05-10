import type { Metadata } from "next";
import Wrapper from "./Wrapper";

export const metadata: Metadata = {
  title:
    "Garista | The Ultimate digital menu solution for restaurants and cafés",
  description: "The Ultimate digital menu solution for restaurants and cafés",
  icons: {
    icon: "/Logo/Logo.svg",
  },
};

export default function Home() {
  return <Wrapper />;
}
