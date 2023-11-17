"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Technologies from "../slider/technologies";
import About from "../slider/about";
import Projects from "../slider/projects";
import { useLanguage } from "@/context/language";
import IconButton from "../IconButton/IconButton";
import { arrowLeftIcon, arrowRightIcon } from "@/constants/icons";

const Content = () => {
  const { language } = useLanguage();
  const [slideSelected, setSlideSelected] = useState(0);

  const goDirection = (direction: string) => {
    const nextSlide =
      direction === "left" ? slideSelected - 1 : slideSelected + 1;
    setSlideSelected(nextSlide);

    if (nextSlide > views.length - 1) {
      setSlideSelected(0);
    } else if (nextSlide < 0) {
      setSlideSelected(views.length - 1);
    }
  };

  const views = [
    <About key={"about"} language={language} />,
    <Technologies key={"techs"} language={language} />,
    <Projects key={"projects"} />,
  ];

  return (
    <aside className="w-full h-full max-h-[520px] rounded-[24px] shadow-lg shadow-secondary/30">
      <div className="surface-gradient w-full h-full max-h-[520px] rounded-[24px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideSelected}
            initial={{ opacity: 0, x: slideSelected > 0 ? "5%" : "-5%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: slideSelected > 0 ? "5%" : "-5%" }}
            transition={{ duration: 0.3 }}
          >
            {views[slideSelected]}
          </motion.div>
        </AnimatePresence>
        <div className="flex w-full items-center justify-between px-6 absolute bottom-4 z-10">
          <IconButton
            icon={arrowLeftIcon}
            onClick={() => goDirection("left")}
          />
          <IconButton
            icon={arrowRightIcon}
            onClick={() => goDirection("right")}
          />
        </div>
      </div>
    </aside>
  );
};

export default Content;
