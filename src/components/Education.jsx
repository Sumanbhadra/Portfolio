import React from "react";
import { EDUCATION } from "../constant";

const Education = () => {
  return (
    <div className="pb-4">
      <h2 className="mt-20 text-center text-4xl">Education</h2>
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
            <div className="w-full   max-w-xl md:ml-2">
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
              <p className="my-4 text-stone-300">Acquired Percentage: {edu.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
