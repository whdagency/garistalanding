import Reseller from "@/components/Reseller";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation("global");

  return (
    <div id="Footer" className="container md:px-8 px-4">
      <div className="mb-20">
        <div className="flex flex-col gap-y-8 justify-center items-center">
          <div className="flex flex-nowrap gap-x-8 items-center justify-center">
            <Link target="_blank" href="https://instagram.com/garista.official">
              <FaInstagram size={20} strokeWidth={1.5} />
            </Link>

            <Link target="_blank" href="https://facebook.com/garista.official">
              <FaFacebook size={20} strokeWidth={1.5} />
            </Link>

            <Link target="_blank" href="https://youtube.com/@garista.official">
              <FaYoutube size={20} strokeWidth={1.5} />
            </Link>

            <Link target="_blank" href="https://x.com/garistaofficial">
              <FaTwitter size={20} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-12 gap-y-6 items-center place-items-center text-sm font-medium">
            <Link href="#Contact">{t("Contact")}</Link>
            <Link href="#Contact">{t("Be a partner")}</Link>
            <Link href="#">{t("Documentation")}</Link>
            <Link href="#">{t("Jobs")}</Link>
          </div>

          <div className="w-full mx-auto flex flex-col items-center py-4">
            <Reseller />
          </div>
        </div>
      </div>
    </div>
  );
}
