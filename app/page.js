"use client";
import { useState, useEffect } from "react";
import HeroPage from "./components/HeroPage";
import Projects from "./projects/page";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Hire from "./components/Hire";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll while loading
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Loader />
      <div className="py-2">
        <HeroPage />
        <Projects />
        <Skills />
        <Testimonials />
        <About />
        <Hire />
        <Footer />
      </div>
    </>
  );
}
