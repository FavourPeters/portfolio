"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroPage = () => {
  const texts = [
    "Welcome! I'm Favour Peters",
    "100% God. 0% me",
    "Full Stack Web Developer",
    "Transforming Ideas into Reality",
    "Let's Build Something Extraordinary",
  ];

  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="home"
      className="min-h-[80vh] flex flex-col justify-between bg-main px-8 text-white py-8 md:py-10 md:px-15 lg:px-25 mt-16"
    >
      <div className="lg:flex items-center">
        <div className="hero-text py-5 md:py-0 flex-1">
          <p className="font-extralight text-xs tracking-widest typewriter max-w-fit">
            MAKING ENDLESS POSSIBILITIES IN TECH
          </p>
          <h1 className="text-4xl leading-12 font-anja mt-4 md:text-6xl md:leading-18 lg:w-[75%] lg:text-7xl lg:leading-24">
            CODE WITH POSSIBILITIES
          </h1>
          <div className="CTA flex items-center space-x-5 mt-6">
            <Image
              src="/Vector.svg"
              alt="eye"
              width={20}
              height={20}
              className="animate-pulse"
            />
            <Link
              href="#projects"
              className="relative inline-flex items-center px-6 py-2 overflow-hidden text-basic text-sm font-medium transition-all duration-300 rounded-full group"
            >
              <span className="absolute inset-0 border-2 border-basic rounded-full"></span>
              <span className="absolute inset-0 scale-x-0 transform bg-basic transition-transform group-hover:scale-x-100"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">
                My Works
              </span>
            </Link>
          </div>
          <div>
            <a href="#projects">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={40}
                height={40}
                className="hidden lg:block animate-bounce mt-20 lg:mt-32"
              />
            </a>
          </div>
        </div>
        <div className="hero-image flex-1">
          <img
            src="https://res.cloudinary.com/du0gpfjv8/image/upload/v1743062635/brain_illustation_2_ds5knl.svg"
            alt="brain illustration"
            className="w-full h-auto animate-pulse "
          />
        </div>
      </div>

      <div>
        <a href="#projects">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={35}
            height={35}
            className="animate-bounce md:hidden"
          />
        </a>
      </div>
      <div>
        <p
          key={key}
          className="font-extralight tracking-widest typewriter-text max-w-fit text-center mx-auto lg:text-2xl lg:mb-10 md:text-xl md:mb-8"
        >
          {texts[index]}
        </p>
      </div>
    </motion.div>
  );
};

export default HeroPage;
