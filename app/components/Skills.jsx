"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const skills = [
  { id: 1, name: "Next.js", icon: "/Nextjss.png" },
  { id: 2, name: "Node.js", icon: "/Nodejs.png" },
  { id: 3, name: "React", icon: "/react.png" },
  { id: 4, name: "MongoDB", icon: "/mongo.png" },
  { id: 5, name: "JavaScript", icon: "/JavaScript-logo.svg" },
  { id: 6, name: "Figma", icon: "/Figma logo.svg" },
  { id: 7, name: "Git", icon: "/Git.png" },
  { id: 8, name: "GitHub", icon: "/github-mark-white.svg" },
];

const Skills = () => {
  const marqueeRef = useRef(null);
  const marqueeRef2 = useRef(null);

  useEffect(() => {
    const firstRowCtx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        x: "-50%",
        duration: 15,
        ease: "none",
        repeat: -1,
      });
    });

    const secondRowCtx = gsap.context(() => {
      gsap.to(marqueeRef2.current, {
        x: "50%",
        duration: 15,
        ease: "none",
        repeat: -1,
      });
    });

    const handleHover = (element, isPaused) => {
      gsap.to(element, {
        timeScale: isPaused ? 0 : 1,
        duration: 0.5,
      });
    };

    const elements = [marqueeRef.current, marqueeRef2.current];
    elements.forEach((element) => {
      element?.addEventListener("mouseenter", () => handleHover(element, true));
      element?.addEventListener("mouseleave", () =>
        handleHover(element, false)
      );
    });

    return () => {
      firstRowCtx.revert();
      secondRowCtx.revert();
      elements.forEach((element) => {
        element?.removeEventListener("mouseenter", () =>
          handleHover(element, true)
        );
        element?.removeEventListener("mouseleave", () =>
          handleHover(element, false)
        );
      });
    };
  }, []);

  const firstRowSkills = [...skills, ...skills];
  const secondRowSkills = [...skills, ...skills];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="bg-gradient-to-b from-main to-[#1a1528] py-16 text-center text-white px-8 md:px-14"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-3xl mb-4 bg-gradient-to-r from-basic to-white bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl mb-2">Full Stack Web Developer</p>
          <p className="text-gray-400">ALX Certified Software Engineer</p>
          <a
            href="https://intranet.alxswe.com/certificates/6BGZhEfRxe"
            target="_blank"
            className="inline-block mt-4 text-basic hover:text-white transition-colors duration-300"
          >
            View Credentials →
          </a>
        </div>

        <div className="space-y-12">
          {/* First row */}
          <div className="overflow-hidden w-full relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-main to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-main to-transparent z-10" />
            <div ref={marqueeRef} className="flex w-max gap-12 px-8">
              {firstRowSkills.map((skill, index) => (
                <div
                  key={`first-${skill.id}-${index}`}
                  className="group flex flex-col items-center space-y-2"
                >
                  <div className="relative w-24 h-24 bg-white/5 rounded-xl p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="overflow-hidden w-full relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-main to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-main to-transparent z-10" />
            <div ref={marqueeRef2} className="flex w-max gap-12 px-8">
              {secondRowSkills.map((skill, index) => (
                <div
                  key={`second-${skill.id}-${index}`}
                  className="group flex flex-col items-center space-y-2"
                >
                  <div className="relative w-24 h-24 bg-white/5 rounded-xl p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
