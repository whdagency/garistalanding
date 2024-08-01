"use client";

import FooterBottom from "@/components/FooterBottom";
import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Nav activeSection="Privacy" />

      <section className="mb-20 pt-32 flex flex-col gap-7 container">
        <div className="">
          <Link
            href="/#Footer"
            className="text-primaryColor hover:underline w-fit"
          >
            &larr; Back to Home
          </Link>
        </div>

        <h2 className="text-3xl font-font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-500 font-normal leading-relaxed mb-4">
          Your privacy is important to us. This Privacy Policy describes how
          Ongig collects, uses, and protects your personal information when you
          use our services.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Information Collection and Use
        </h3>
        <p className="text-gray-500 font-normal leading-relaxed mb-4">
          We collect certain personal information when you use our services,
          including but not limited to your name, email address, contact
          information, and any other information you provide to us voluntarily.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          How We Use Your Information
        </h3>
        <p className="text-gray-500 font-normal leading-relaxed mb-4">
          We use the information we collect to provide, maintain, and improve
          our services, to communicate with you, and to personalize your
          experience. We may also use your information to send you marketing
          communications, updates, and promotional offers.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Information Sharing and Disclosure
        </h3>
        <p className="text-gray-500 font-normal leading-relaxed mb-4">
          We may share your personal information with third-party service
          providers who assist us in providing our services, or with other third
          parties as required by law or to protect our rights. We will never
          sell your personal information to third parties.
        </p>

        <h3 className="text-xl font-semibold mb-4">Data Security</h3>
        <p className="text-gray-500 font-normal leading-relaxed mb-4">
          We take appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. However, please be aware that no method of transmission
          over the internet, or method of electronic storage, is 100% secure.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Changes to This Privacy Policy
        </h3>
        <p className="text-gray-500 font-normal leading-relaxed mb-4">
          We reserve the right to update or change our Privacy Policy at any
          time. Any changes will be posted on this page, and we encourage you to
          review this Privacy Policy periodically.
        </p>

        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-500 font-normal leading-relaxed mb-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at privacy@garista.com.
        </p>
      </section>

      <FooterBottom />
    </>
  );
};

export default PrivacyPolicy;
