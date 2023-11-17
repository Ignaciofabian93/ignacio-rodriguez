"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Front from "./front";
import Back from "./back";
import Others from "./others";
import { spanish, english } from "@/context/text";
import { PageProps } from "@/interfaces/views";

const Technologies: React.FC<PageProps> = ({ language }) => {
  const [selected, setSelected] = useState("Front-End");

  const variants = {
    underline: { textDecoration: "underline" },
    slide: { x: "-50%" },
  };

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-semibold">
        {language === "en"
          ? english.technologies.title
          : spanish.technologies.title}
      </h2>
      <div className="mt-4">
        <motion.small
          key={"Front-End"}
          className="cursor-pointer italic transition-all duration-300 ease-in-out mr-4"
          onClick={() => setSelected("Front-End")}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          animate={selected === "Front-End" ? "underline" : "normal"}
          variants={variants}
        >
          {language === "en"
            ? english.technologies.menu[0]
            : spanish.technologies.menu[0]}
        </motion.small>
        <motion.small
          key={"Back-End"}
          className="cursor-pointer italic transition-all duration-300 ease-in-out mr-4"
          onClick={() => setSelected("Back-End")}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          animate={selected === "Back-End" ? "underline" : "normal"}
          variants={variants}
        >
          {language === "en"
            ? english.technologies.menu[1]
            : spanish.technologies.menu[1]}
        </motion.small>
        <motion.small
          className="cursor-pointer italic transition-all duration-300 ease-in-out mr-4"
          onClick={() => setSelected("Others")}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          animate={selected === "Others" ? "underline" : "normal"}
          variants={variants}
        >
          {language === "en"
            ? english.technologies.menu[2]
            : spanish.technologies.menu[2]}
        </motion.small>
        <motion.small
          className="cursor-pointer italic transition-all duration-300 ease-in-out mr-4"
          onClick={() => setSelected("All")}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          animate={selected === "All" ? "underline" : "normal"}
          variants={variants}
        >
          {language === "en"
            ? english.technologies.menu[3]
            : spanish.technologies.menu[3]}
        </motion.small>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          {selected === "Front-End" && (
            <Front language={language} show={true} />
          )}
          {selected === "Back-End" && <Back language={language} show={true} />}
          {selected === "Others" && <Others language={language} show={true} />}
          {selected === "All" && (
            <>
              <Front language={language} show={false} />
              <Back language={language} show={false} />
              <Others language={language} show={false} />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Technologies;
