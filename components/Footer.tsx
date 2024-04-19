import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const {t}  = useTranslation("global")

  return (
    <div id="Footer" className="container md:px-8 px-4">
      <div className="mb-20">
        <div className="flex flex-col gap-y-8 justify-center items-center">
          <div className="flex flex-nowrap gap-x-8 items-center justify-center">
            <Link href="https://instagram.com/garista.official">
              <Instagram width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>

            <Link href="https://facebook.com/garista.official">
              <Facebook width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>

            <Link href="https://youtube.com/@garista.official">
              <Youtube width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>

            <Link href="https://x.com/garistaofficial">
              <Twitter width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-12 gap-y-6 items-center place-items-center text-sm font-medium">
            <Link href="#">{t("Contact")}</Link>
            <Link href="#">{t("Be a partner")}</Link>
            <Link href="#">{t("Documentation")}</Link>
            <Link href="#">{t("Jobs")}</Link>

          
          </div>
        </div>
      </div>
    </div>
  );
}
