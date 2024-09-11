import React from "react";
import { PROJECTS } from "../constant";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="mb-20 mt-4 mx-auto border-b-2 border-stone-300 w-20"></div>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1}}
            className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4 ml-2">
              <h3 className="mb-2 font-semibold text-2xl"> {project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 p-2 rounded bg-stone-800 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
