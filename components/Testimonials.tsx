import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Testimonials() {
  return (
    <div id="Testimonials" className="container md:px-8 px-4">
      <div className="pb-[180px]">
        <div className="w-full rounded-3xl bg-white py-14 px-14 transition-all duration-300">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
            <div className="flex flex-nowrap flex-col justify-center items-start gap-y-3">
              <h2 className="md:text-5xl text-4xl font-medium">
                You ask – we answer.
              </h2>
              <p className="text-lg text-secondaryBg/80 font-medium">
                All you want to know about the product
              </p>
            </div>

            <div className="relative w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    What is a digital menu ?
                  </AccordionTrigger>
                  <AccordionContent>
                    A digital menu is a restaurant menu that can be read on a
                    smartphone, tablet or computer using QR Code scanner.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    How does the PDF to QR Code menu differ from the Build from
                    Scratch Menu ?
                  </AccordionTrigger>
                  <AccordionContent>
                    PDF to QR code is created by easily uploading your already
                    designed menu and generate a QR code of it. Build from
                    Scratch Menu is creating your menu manually from A-z using
                    our reliable service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    Can we use the menu on social networks or on our website ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, your menu has a link that you can publish on social
                    networks (like Instagram or Facebook) or on your website.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="py-6">
                  <AccordionTrigger className="text-left text-xl">
                    Do you have a free trial of paid plans ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, free trial is available. You can try our premium
                    features for 30 days. At the end of the trial you will be
                    automatically downgraded to free plan and all premium
                    changes you have made will be hold unless you subscribe to
                    our paid plans see plans
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
