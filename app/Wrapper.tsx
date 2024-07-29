"use client";

import About from "@/components/About";
import Articles from "@/components/Articles";
import Benefits from "@/components/Benefits";
import Contact from "@/components/ContactPage";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Home";
import KeyAdvantages from "@/components/KeyAdvantages";
import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

function Wrapper() {
  let [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    let Home = document.getElementById("Home");
    let About = document.getElementById("About");
    let Features = document.getElementById("Features");
    let Pricing = document.getElementById("Pricing");
    let Contact = document.getElementById("Contact");

    let sections = [Home, About, Features, Pricing, Contact];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const ids = [
      "Home",
      "Dashboard",
      "Features",
      "Benefits",
      "FAQ",
      "Help",
      "About",
      "Features",
      "Pricing",
      "Contact",
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (ids.includes(entry.target.id)) {
            setActiveSection(
              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            );
          }

          // if (entry.target.id == "Home") {
          //   setActiveSection("Home");
          // }
          // if (entry.target.id == "Dashboard") {
          //   setActiveSection("Dashboard");
          // }
          // if (entry.target.id == "About") {
          //   setActiveSection("About");
          // }
          // if (entry.target.id == "Features") {
          //   setActiveSection("Features");
          // }
          // if (entry.target.id == "Pricing") {
          //   setActiveSection("Pricing");
          // }
          // if (entry.target.id == "Contact") {
          //   setActiveSection("Contact");
          // }
          // if (entry.target.id == "articles") {
          //   setActiveSection("articles");
          // }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    // <div className="wrapper">
    <div className="w-full">
      <Nav activeSection={activeSection} />
      <Hero />
      <Partners />
      <About />
      <KeyAdvantages />
      {/* <Features /> */}
      {/* <Benefits />  */}
      <Pricing />
      <Contact />
      <Testimonials />
      <Articles />
      {/* <Footer /> */}
    </div>
  );
}

export default Wrapper;
