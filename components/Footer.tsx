import Reseller from "@/components/Reseller";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  SlSocialFacebook,
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialInstagram,
} from "react-icons/sl";

export default function Footer() {
  const { t } = useTranslation("global");

  return (
    <div id="Footer" >
      <div className="mb-20">
        <div className="flex flex-col gap-y-8 justify-center items-center">
          <div className="flex flex-nowrap gap-x-8 items-center justify-center">
            <Link target="_blank" href="https://instagram.com/garista.official">
              <SlSocialInstagram size={20} strokeWidth={1.5} />
            </Link>

            <Link target="_blank" href="https://facebook.com/garista.official">
              <SlSocialFacebook size={20} strokeWidth={1.5} />
            </Link>

            <Link target="_blank" href="https://youtube.com/@garista.official">
              <SlSocialYoutube size={20} strokeWidth={1.5} />
            </Link>

            <Link target="_blank" href="https://x.com/garistaofficial">
              <SlSocialTwitter size={20} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-x-12 gap-y-6 items-center place-items-center text-sm font-medium">
            <Link href="/#Contact" className="text-base font-medium">{t("Contact")}</Link>
            <Link href="/#Contact" className="text-base font-medium">{t("Be a partner")}</Link>
            <Link className="hover:underline text-base font-medium" href="/docs" target="_blank" >
              {t("Documentation")}
            </Link>
            <Link className="hover:underline text-base font-medium" href="/jobs" >
              {t("Jobs")}
            </Link>
          <div className="w-full mx-auto flex flex-col items-center">
            <Reseller />
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}
