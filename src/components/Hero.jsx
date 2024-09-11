import React from "react";
import profilepic from "../assets/profile-img.webp";
import { HERO_CONTENT } from "../constant";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilepic}
              className="border border-stone-900 rounded-3xl"
              alt=""
              width={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center  lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariant}
              className="pb-2 text-4xl tracking-tighter lg:text-7xl"
            >
              Suman Bhadra
            </motion.h2>
            <motion.span variants={childVariant} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Front End Developer
            </motion.span>
            <motion.p variants={childVariant} className="my-2 max-w-lg py-6 text-xl leading-relaxed ">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariant}
              href="./Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-slate-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
