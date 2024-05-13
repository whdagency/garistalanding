"use client";

import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <>
      <Nav activeSection="Terms" />

      <div className="mb-8">
        <Link href="/" className="text-primaryColor hover:underline">
          &larr; Back to Home
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-8">Terms of Service</h2>
      <p className="mb-8">
        Thanks for using Garista! We invite you to access Garista and all of our
        services, but this invitation is subject to your agreement with these
        Terms of Use. This document describes in detail our rights and your
        rights related to Garista’s services -- thank you for reading them
        carefully.
      </p>

      <h3 className="text-xl font-semibold mb-4">Your Account</h3>
      <p className="mb-8">
        You must provide us accurate information when you create your Garista
        account. Your Garista account gives you access to Services and
        functionality we may establish and maintain in our sole discretion. If
        you connect to Garista with a third-party service, you give us
        permission to access and use your information from that service as
        permitted by that service, and to store your log-in credentials for that
        service. You may never use another user’s account without permission.
      </p>

      <h3 className="text-xl font-semibold mb-4">Services</h3>
      <p className="mb-8">
        Garista’s Services focus on delivering the following value:
      </p>
      <ul className="list-disc list-inside mb-8">
        <li>
          Assisting employers in attracting job candidates. Garista does this
          primarily through helping employers create Content (e.g. web pages,
          email or other and electronic communications) and distributing that
          Content to potential job candidates.
        </li>
        <li>
          Assisting individuals in finding their next job. Garista does this
          primarily by listing jobs on Garista.com and messaging job candidates
          who have provided their contact information through the Garista
          platform.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Account Security</h3>
      <p className="mb-8">
        You are responsible for safeguarding the password that you use to access
        the Service and for any activities or actions under your password,
        whether your password is with Garista or a third-party service. We
        encourage you to use “strong” passwords (e.g. using a combination of
        upper and lower case letters, numbers and symbols with your account).
        You agree not to disclose your password to any third party. Garista
        cannot and will not be liable for any loss or damage arising from your
        failure to comply with the above requirements. You must notify Garista
        immediately upon becoming aware of any breach of security or
        unauthorized use of your account.
      </p>
    </>
  );
};

export default TermsOfService;
