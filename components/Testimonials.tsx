import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation("global");

  return (
    <div id="Testimonials" className="container md:px-8 px-4">
      <div className="pb-[180px]">
        <div className="w-full rounded-3xl bg-white py-14 px-14 transition-all duration-300">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
            <div className="flex flex-nowrap flex-col justify-center items-start gap-y-3">
              <h2 className="md:text-5xl text-4xl font-medium">
                {t("You ask - we answer.")}
              </h2>
              <p className="text-lg text-secondaryBg/80 font-medium">
                {t("All you want to know about the product")}
              </p>
            </div>

            <div className="relative w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    {t("What is a digital menu ?")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(
                      "A digital menu is a restaurant menu that can be read on asmartphone, tablet or computer using QR Code scanner."
                    )}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    {t(
                      "How does the PDF to QR Code menu differ from the Build from Scratch Menu ?"
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(
                      "PDF to QR code is created by easily uploading your already designed menu and generate a QR code of it. Build from Scratch Menu is creating your menu manually from A-z usingour reliable service."
                    )}{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    {t(
                      "Can we use the menu on social networks or on our website ?"
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(
                      "Yes, your menu has a link that you can publish on social networks (like Instagram or Facebook) or on your website."
                    )}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    {t("Do you have a free trial of paid plans ?")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(
                      "Yes, free trial is available. You can try our premium features for 30 days. At the end of the trial you will be automatically downgraded to free plan and all premium changes you have made will be hold unless you subscribe to our paid plans see plans"
                    )}{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <form className="max-w-md mx-auto">
<div className="grid md:grid-cols-2 md:gap-6">
<div className="relative z-0 w-full mb-6 group">
<input type="text" name="floating_first_name" id="floating_first_name" className="block py-3 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
<label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
</div>
<div className="relative z-0 w-full mb-6 group">
<input type="text" name="floating_last_name" id="floating_last_name" className="block py-3 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
<label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
</div>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
<div className="relative z-0 w-full mb-6 group">
<input type="email" name="floating_email" id="floating_email" className="block py-3 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
<label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
</div>
<div className="relative z-0 w-full mb-6 group">
<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-3 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
<label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
</div>
<div className="relative z-0 w-full mb-6 group col-span-2">
<input type="text" name="floating_desc" id="floating_desc" className="block py-3 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
<label htmlFor="floating_desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
</div>
</div>
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */
}
