"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { contactFormSchema, ContactFormType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReset } from "react-hook-form";
import Link from "next/link";
import { createEntry } from "@/app/actions/contentful.action";

const Contact = () => {
  const { t } = useTranslation("global");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: pending },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  const formSubmit = async (data: ContactFormType) => {
    const contentfulDataEntry = {
      name: {
        "en-US": data.name,
      },
      email: {
        "en-US": data.email,
      },
      company: {
        "en-US": data.company,
      },
      reason: {
        "en-US": data.service,
      },
      message: {
        "en-US": data.message,
      },
    };

    const publishedEntry = await createEntry<typeof contentfulDataEntry>(
      "contactForm",
      contentfulDataEntry
    );

    if (publishedEntry.sys.id) {
      setFormSubmitted(true);

      reset();

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="Contact" className="container md:px-8 px-4">
      <div className="pb-20">
        <div className="w-full rounded-3xl bg-white transition-all duration-300">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
            {/* Contact form */}
            <div className="flex rounded-s-3xl flex-col gap-5 col-span-1 bg-primaryColor px-5 py-10 md:py-14 md:px-14">
              <h2 className="text-2xl md:text-3xl font-semibold capitalize text-white mb-5">
                {t("How can we help you?")}
              </h2>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <SuccessMessage setFormSubmitted={setFormSubmitted} />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(formSubmit)}
                  className="flex flex-col gap-10"
                  method="POST"
                >
                  {/* Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-sm text-white/80 my-1"
                    >
                      {t("Name")}
                    </label>

                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="w-full rounded bg-transparent border-b-2 border-b-white/80 focus:border-b-white text-white py-2 focus:outline-none"
                    />

                    {errors.name && (
                      <p className="text-red-500 text-xs py-2">
                        {t(errors.name.message!)}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm text-white/80 my-1"
                    >
                      {t("Email")}
                    </label>

                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full rounded bg-transparent border-b-2 border-b-white/80 focus:border-b-white text-white py-2 focus:outline-none"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-xs py-2">
                        {t(errors.email.message!)}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="company"
                      className="text-sm text-white/80 my-1"
                    >
                      {t("Company")}
                    </label>

                    <input
                      type="text"
                      id="company"
                      {...register("company")}
                      className="w-full rounded bg-transparent border-b-2 border-b-white/80 focus:border-b-white text-white py-2 focus:outline-none"
                    />

                    {errors.company && (
                      <p className="text-red-500 text-xs py-2">
                        {t(errors.company.message!)}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="service"
                      className="text-sm text-white/80 my-1"
                    >
                      {t("What are you looking for?")}
                    </label>

                    <select
                      id="service"
                      {...register("service")}
                      className="w-full rounded bg-transparent border-b-2 border-b-white/80 focus:border-b-white text-white py-2 focus:outline-none"
                    >
                      <option className="text-black">{t("Select one")}</option>
                      <option className="text-black" value="Be a partner">
                        {t("Be a partner")}
                      </option>
                      <option
                        className="text-black"
                        value="Documentation Support"
                      >
                        {t("Documentation Support")}
                      </option>
                      <option className="text-black" value="Contact Us">
                        {t("Contact Us")}
                      </option>
                      <option className="text-black" value="Other">
                        {t("Other")}
                      </option>
                    </select>

                    {errors.service && (
                      <p className="text-red-500 text-xs py-2">
                        {t(errors.service.message!)}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="text-sm text-white/80 my-1"
                    >
                      {t("Message")}
                    </label>

                    <textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className="w-full rounded bg-transparent border-b-2 border-b-white/80 focus:border-b-white text-white py-2 focus:outline-none"
                    ></textarea>

                    {errors.message && (
                      <p className="text-red-500 text-xs py-2">
                        {t(errors.message.message!)}
                      </p>
                    )}
                  </div>

                  <SubmitButton pending={pending} reset={reset} />
                </form>
              )}
            </div>

            {/* Contact Us Content */}
            <div className="col-span-1 px-5 py-10 md:py-14 md:px-14">
              <h2 className="text-2xl uppercase md:text-3xl font-semibold text-primaryColor mb-3 space-y-1">
                {t("Visit Garista")}
              </h2>

              <p className="text-sm text-gray-500 mb-7 space-y-1 flex flex-col">
                <span>
                  {t("Call us to schedule a tour of our Head Office.")}
                </span>
                <span>
                  {t(
                    "We are open Monday through Friday from 8:30 am to 5:00 pm GMT+1."
                  )}
                </span>
              </p>

              <div className="h-[1px] w-full homeFooter"></div>

              <div className="flex flex-col gap-6 mt-5">
                <div className="flex items-center justify-start gap-5">
                  <span className="flex items-center justify-center bg-white shadow-md flex-col rounded-full p-3">
                    <PhoneCall
                      size={30}
                      strokeWidth={2}
                      className="text-primaryColor text-center"
                    />
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="flex items-center gap-2">
                      <span>Tel:</span>
                      <span className="leading-relaxed text-sm md:text-base">
                        +212 530 456 789
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>GSM:</span>
                      <span className="leading-relaxed text-sm md:text-base">
                        +212 777 456 789
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-5">
                  <span className="flex items-center justify-center bg-white shadow-md flex-col rounded-full p-3">
                    <Mail
                      size={30}
                      strokeWidth={2}
                      className="text-primaryColor text-center"
                    />
                  </span>

                  <div className="flex flex-col gap-2">
                    <p>{t("Email:")}</p>
                    <Link
                      href={"mailto:Hello@garista.com"}
                      className="leading-relaxed text-sm md:text-base"
                    >
                      Hello@garista.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-5">
                  <span className="flex items-center justify-center bg-white shadow-md flex-col rounded-full p-3">
                    <MapPin
                      size={30}
                      strokeWidth={2}
                      className="text-primaryColor text-center"
                    />
                  </span>

                  <div className="flex flex-col gap-2">
                    <p>{t("Address:")}</p>
                    <p className="leading-relaxed text-sm md:text-base">
                      Bd Mohamed Jamal Addorra,{" "}
                      <br className="hidden md:block" /> Imm BR1B, N 3 2eme
                      etage, Lot al Hamd, <br className="hidden md:block" />{" "}
                      Casablanca 20250
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SubmitButton = ({
  pending,
  reset,
}: {
  pending: boolean;
  reset: UseFormReset<ContactFormType>;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full gap-4 md:flex-row md:items-center">
      <Button
        disabled={pending}
        type="submit"
        className="w-full py-3 text-black hover:bg-black hover:text-white bg-white transition md:text-lg rounded font-medium"
      >
        {pending ? `${t("Please wait")}...` : t("Submit")}
      </Button>
    </div>
  );
};

const SuccessMessage = ({
  setFormSubmitted,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-green-100 border flex flex-col items-center justify-center border-green-400 text-green-700 px-4 py-5 gap-4 rounded relative w-full"
      role="alert"
    >
      <strong className="font-semibold text-2xl">{t("Thank You!")}</strong>
      <span className="block sm:inline">
        {" "}
        {t("We will get back to you shortly.")}
      </span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-green-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => setFormSubmitted(false)}
        >
          <title>Close</title>
          <path
            fillRule="evenodd"
            d="M2.293 2.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default Contact;
