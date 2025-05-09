"use client";
import datas from "@/Data/project";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="px-8 md:px-15 lg:px-25"
      id="projects"
    >
      <h2 className="text-center my-8 font-bold text-3xl">Projects</h2>
      <div className="md:grid md:grid-cols-2 gap-8 lg:grid-cols-3">
        {datas.map((data) => (
          <div
            key={data.id}
            className="group project-card card my-8 bg-white/5 p-4 rounded-lg 
            transform transition-all duration-500 ease-in-out hover:scale-105 
            hover:shadow-2xl hover:shadow-basic/20 hover:bg-white/10 
            hover:translate-y-[-5px]"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={data.image}
                alt={`${data.title} preview`}
                className="h-52 w-full object-cover rounded-lg transform transition-transform 
                duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <h3
                className="card-title text-lg text-basic font-semibold 
                transform transition-all duration-300 group-hover:translate-x-2"
              >
                {data.title}
              </h3>
              <Link
                href={data.link}
                className="link text-main italic relative overflow-hidden 
                transition-all duration-300 hover:text-basic
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-full after:h-[1px] after:bg-basic 
                after:transform after:scale-x-0 after:origin-right 
                after:transition-transform after:duration-300
                hover:after:scale-x-100 hover:after:origin-left"
              >
                Preview site
              </Link>
            </div>
            <p
              className="mt-3 text-gray-600 transition-all duration-300 
              group-hover:text-gray-700"
            >
              {data.description}
            </p>
            <div className="tech-stack flex flex-wrap gap-2 mt-4 text-sm">
              {data.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-main text-white px-2 py-1 rounded transform 
                  transition-all duration-300 hover:scale-110 hover:bg-basic 
                  cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
