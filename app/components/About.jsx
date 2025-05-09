"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-main py-8 px-6 md:px-12 lg:px-25"
      id="about"
    >
      <h2 className="text-center font-bold text-3xl mb-4 bg-gradient-to-r from-basic to-white bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="lg:grid lg:grid-cols-2 lg:items-center gap-8">
        {/* Profile Image */}
        <div className="w-64 h-80 mx-auto mb-8 lg:mb-0">
          <img
            src="https://res.cloudinary.com/du0gpfjv8/image/upload/v1743062597/3C2424C4-4729-4AC8-AD49-D0AC8176C571_mnirzf.jpg"
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Bio */}
        <div>
          <p className="text-white text-center md:text-left leading-relaxed">
            I am a Full Stack Web Developer with over three years of experience
            specializing in the MERN stack. Skilled in HTML, CSS, JavaScript,
            TypeScript, Next.js, UI/UX design, Git, GitHub, and graphic design,
            I build scalable, user-centric web applications. Beyond development,
            I have experience teaching web technologies and hold a B.Sc. in
            Computer Science from the University of Port Harcourt, along with an
            ALX Software Engineering certification. Passionate about innovation,
            problem-solving, and crafting impactful digital solutions.
          </p>
        </div>
      </div>

      {/* Resume Section */}
      <div className="flex justify-center items-center space-x-4 my-8">
        <a
          href="/Resume.pdf" // Add your resume file path here
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-basic to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative flex items-center">
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </a>
        <a
          href="/Resume.pdf" // Add your resume file path here
          download
          className="relative inline-flex items-center px-4 py-3 overflow-hidden rounded-full border border-basic/30 text-basic hover:text-white font-medium transition-all duration-300 hover:bg-basic/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>

      {/* Personal Details */}
      <div className="grid grid-cols-2 gap-6 mt-10 bg-white/10 p-6 rounded-xl backdrop-blur-md">
        <dl className="space-y-2">
          <dt className="text-gray-400">Location</dt>
          <dd className="text-white font-medium">Rivers State, NG</dd>
        </dl>
        <dl className="space-y-2">
          <dt className="text-gray-400">Availability</dt>
          <dd className="text-white font-medium">Remote / On-Site</dd>
        </dl>
        <dl className="space-y-2">
          <dt className="text-gray-400">Contact</dt>
          <dd className="text-white font-medium">+2347013491807</dd>
        </dl>
        <dl className="space-y-2">
          <dt className="text-gray-400">Freelance</dt>
          <dd className="text-white font-medium">Available</dd>
        </dl>
      </div>
    </motion.section>
  );
};

export default About;
