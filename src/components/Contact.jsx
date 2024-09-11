import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import { CONTACT } from "../constant";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className=" text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <FaPhone className="mr-2 text-xl mt-4" />
          <p className="my-4">{CONTACT.phoneNo}</p>
        </motion.div>
        <div className="flex justify-center">
          <MdEmail className=" mr-2 text-2xl mb-0.5" />
          <a href="#" className="border-b">
            {CONTACT.email}{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
