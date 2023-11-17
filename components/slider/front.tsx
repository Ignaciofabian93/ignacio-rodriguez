import React from "react";
import Image from "next/image";
import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactjsIcon,
  reduxIcon,
  nextjsIcon,
  tailwindIcon,
  reactnativeIcon,
  typescriptIcon,
} from "@/constants/icons";
import { PageSectionProps } from "@/interfaces/views";
import { spanish, english } from "@/context/text";

const frontTechs = [
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactjsIcon,
  nextjsIcon,
  reduxIcon,
  tailwindIcon,
  reactnativeIcon,
  typescriptIcon,
];

const Front: React.FC<PageSectionProps> = ({ language, show }) => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-evenly items-center mt-8">
        {frontTechs.map((el, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={el.src}
              alt="technology"
              className="hover:scale-110 transition-all duration-300 ease-in-out"
              width={60}
              height={60}
            />
            <small className="text-center">{el.name}</small>
          </div>
        ))}
      </div>
      {show && (
        <div className="mt-10 w-full flex items-center justify-center">
          <p className="w-11/12">
            {language === "en"
              ? english.technologies.front
              : spanish.technologies.front}
          </p>
        </div>
      )}
    </>
  );
};

export default Front;
