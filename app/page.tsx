import type { Metadata } from "next";
import Wrapper from "./Wrapper";

export const metadata: Metadata = {
  title: 'Garista | The Ultimate digital menu solution for restaurants and cafés',
  description: 'The Ultimate digital menu solution for restaurants and cafés',
};

export default function Home() {


  return (
    <Wrapper />
  );
}
