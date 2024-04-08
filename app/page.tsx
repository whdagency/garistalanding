"use client";

import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Home";
import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "Home") {
            setActiveSection("Home");
          }
          if (entry.target.id == "About") {
            setActiveSection("About");
          }
          if (entry.target.id == "Features") {
            setActiveSection("Features");
          }
          if (entry.target.id == "Pricing") {
            setActiveSection("Pricing");
          }
          if (entry.target.id == "Contact") {
            setActiveSection("Contact");
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#f4f5f7] body_shadow mb-4 rounded-b-[60px]">
      <Nav activeSection={activeSection} />
      <Hero />
      <About />
      <Features />
      <Partners />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
