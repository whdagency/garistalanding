import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Reseller = () => {
  const { t } = useTranslation("global");
  return (
    <Dialog>
      <DialogTrigger className="text-base font-medium hover:underline">
        {t("Become A Reseller")}
      </DialogTrigger>

      <DialogContent className="w-full">
        <ScrollArea className="w-full mx-auto flex flex-col justify-center items-center">
          <ScrollBar orientation="vertical" />

          <div className="px-1 md:px-8 py-12 w-full bg-white shadow-lg rounded-lg flex flex-col gap-7">
            <h2 className="text-2xl font-semibold text-center capitalize">
              {t("Support the Restaurant Community")}
            </h2>

            <p className="text-base text-gray-800 leading-relaxed">
              {t(
                "It's time to support the restaurant community! We're transparent about our intentions: we're here to help, not to profit immensely. You can tell by our pricing that we aren't making much money from this. Why do we do this? As seasoned hospitality professionals, we've thrived in this industry and believe it's our duty to assist in its recovery now more thanever."
              )}
            </p>

            <p className="text-base text-gray-800 leading-relaxed">
              {t(
                "If you share our passion for giving back to the hospitality industry, please send us an email at"
              )}{" "}
              <Link
                href="mailto:hello@garista.com"
                className="text-primaryColor hover:underline"
              >
                Hello@garista.com
              </Link>{" "}
              {t(
                "or schedule a meeting with us. We may not offer you wealth, but we promise a fair, transparent, and mutually beneficial partnership for life. Plus, we guarantee you'll enjoy working with us. Come join us!"
              )}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Reseller;
