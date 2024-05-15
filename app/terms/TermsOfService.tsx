"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <>
      <Nav activeSection="Terms" />

      <section className="mb-20 flex flex-col gap-7 container">
        <div className="">
          <Link
            href="/#Footer"
            className="text-primaryColor hover:underline w-fit"
          >
            &larr; Back to Home
          </Link>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Terms of Service</h2>
        <p className="mb-8 text-gray-500 leading-relaxed font-normal">
          Thanks for using Garista! We invite you to access Garista and all of
          our services, but this invitation is subject to your agreement with
          these Terms of Use. This document describes in detail our rights and
          your rights related to Garista’s services -- thank you for reading
          them carefully.
        </p>

        <h3 className="text-xl font-semibold mb-4">Your Account</h3>
        <p className="mb-8 text-gray-500 leading-relaxed font-normal">
          You must provide us accurate information when you create your Garista
          account. Your Garista account gives you access to Services and
          functionality we may establish and maintain in our sole discretion. If
          you connect to Garista with a third-party service, you give us
          permission to access and use your information from that service as
          permitted by that service, and to store your log-in credentials for
          that service. You may never use another user’s account without
          permission.
        </p>

        <h3 className="text-xl font-semibold mb-4">Services</h3>
        <h4 className="mb-8 text-lg font-medium text-gray-600">
          Garista’s Services focus on delivering the following value:
        </h4>
        <ul className="flex flex-col gap-4 mb-4">
          <li className="text-gray-500 font-normal">
            &#x2022; Assisting employers in attracting job candidates. Garista
            does this primarily through helping employers create Content (e.g.
            web pages, email or other and electronic communications) and
            distributing that Content to potential job candidates.
          </li>
          <li className="text-gray-500 font-normal">
            &#x2022; Assisting individuals in finding their next job. Garista
            does this primarily by listing jobs on Garista.com and messaging job
            candidates who have provided their contact information through the
            Garista platform.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Account Security</h3>
        <p className="mb-8 text-gray-500 leading-relaxed font-normal">
          You are responsible for safeguarding the password that you use to
          access the Service and for any activities or actions under your
          password, whether your password is with Garista or a third-party
          service. We encourage you to use “strong” passwords (e.g. using a
          combination of upper and lower case letters, numbers and symbols with
          your account). You agree not to disclose your password to any third
          party. Garista cannot and will not be liable for any loss or damage
          arising from your failure to comply with the above requirements. You
          must notify Garista immediately upon becoming aware of any breach of
          security or unauthorized use of your account.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfService;
