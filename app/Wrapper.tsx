"use client";

import About from "@/components/About";
import Articles from "@/components/Articles";
import Contact from "@/components/ContactPage";
import Hero from "@/components/Home";
import Benefits from "@/components/KeyAdvantages";
import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

function Wrapper() {
  let [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    let Home = document.getElementById("Home");
    let About = document.getElementById("About");
    let Features = document.getElementById("Features");
    let Pricing = document.getElementById("Pricing");
    let Contact = document.getElementById("Contact");
    let FAQ = document.getElementById("FAQ");
    let Blog = document.getElementById("Blog");
    let Help = document.getElementById("Help");
    let Benefits = document.getElementById("Benefits");

    let sections = [
      Home,
      About,
      Features,
      Pricing,
      Contact,
      FAQ,
      Blog,
      Help,
      Benefits,
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const ids = [
      "Home",
      "Features",
      "Benefits",
      "FAQ",
      "Blog",
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
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

   useEffect(() => {
     const hash = window.location.hash;
     if (hash) {
       const element = document.getElementById(hash.substring(1));
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     }
   }, []);

  useEffect(() => {
    // initialising library
    Aos.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      // duration: 700, // values from 0 to 3000, with step 50ms
      // easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="w-full">
      <Nav activeSection={activeSection} />
      <Hero />
      <Partners />
      <HowItWorks />
      <Benefits />
      <Features />
      <Pricing />
      <Contact />
      <Testimonials />
      <Articles />
    </div>
  );
}

export default Wrapper;
