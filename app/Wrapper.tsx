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

  // AOS - Animate on scroll
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
    // <div className="wrapper">
    <div className="w-full">
      <Nav activeSection={activeSection} />
      <Hero />
      <Partners />
      <About />
      <Benefits />
      <Pricing />
      <Contact />
      <Testimonials />
      <Articles />
    </div>
  );
}

export default Wrapper;
