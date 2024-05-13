"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";

const LegalContent = () => {
  return (
    <>
      <Nav activeSection="Privacy" />

      <section className="mb-20 flex flex-col gap-7 container">
        <div className="">
          <Link href="/" className="text-primaryColor hover:underline w-fit">
            &larr; Back to Home
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Terms of Service</h2>
          <p className="text-gray-500 font-normal leading-relaxed">
            By using this website, you agree to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern Garista&apos;s relationship with you in
            relation to this website. If you disagree with any part of these
            terms and conditions, please do not use our website.
          </p>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium text-gray-600">
              The use of this website is subject to the following terms of use:
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="text-gray-500 font-normal">
                &#x2022; The content of the pages of this website is for your
                general information and use only. It is subject to change
                without notice.
              </li>
              <li className="text-gray-500 font-normal">
                &#x2022; This website uses cookies to monitor browsing
                preferences. If you do allow cookies to be used, the following
                personal information may be stored by us for use by third
                parties.
              </li>
              <li className="text-gray-500 font-normal">
                &#x2022; Neither we nor any third parties provide any warranty
                or guarantee as to the accuracy, timeliness, performance,
                completeness, or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors, and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </li>
            </ul>
          </div>

          <Link
            href="/terms"
            className="text-primaryColor hover:underline w-fit"
          >
            {" "}
            &rarr; Continue here
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Privacy Policy</h2>
          <p className="text-gray-500 font-normal leading-relaxed">
            Your privacy is important to us. It is Garista&apos;s policy to
            respect your privacy regarding any information we may collect from
            you across our website,{" "}
            <span className="text-primaryColor">https://www.garista.com/</span>,
            and other sites we own and operate.
          </p>

          <p className="text-gray-500 font-normal leading-relaxed">
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we are
            collecting it and how it will be used.
          </p>

          <p className="text-gray-500 font-normal leading-relaxed">
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we will
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use, or
            modification.
          </p>

          <Link
            href="/privacy"
            className="text-primaryColor hover:underline w-fit"
          >
            {" "}
            &rarr; Continue here
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LegalContent;
