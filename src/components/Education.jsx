import React from "react";
import { EDUCATION } from "../constant";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="mb-20 mt-4 mx-auto border-b-2 border-stone-300 w-20"></div>
      <div className="">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center">
            <div className=" hidden md:block mr-5 ">
              <img
                src={edu.image}
                alt={edu.title}
                width={100}
                className="mb-6 rounded"
              />
            </div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full   max-w-xl md:ml-2"
            >
              <h3 className="mb-1 font-semibold text-2xl"> {edu.title}</h3>
              <p className="mb-1 text-stone-400">{edu.year}</p>
              <p className="mb-4 text-stone-400">{edu.institute}</p>
              {edu.spec.map((subject, index) => (
                <span
                  key={index}
                  className="mr-2  p-2 rounded bg-stone-700 text-sm font-medium text-stone-300"
                >
                  {subject}
                </span>
              ))}
              <p className="my-4 text-stone-300">
                Acquired Percentage: {edu.percentage}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
