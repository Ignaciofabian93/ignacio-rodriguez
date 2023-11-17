import React from "react";
import Image from "next/image";
import {
  nodejsIcon,
  expressjsIcon,
  mongodbIcon,
  postgresqlIcon,
  mysqlIcon,
} from "@/constants/icons";
import { PageSectionProps } from "@/interfaces/views";
import { spanish, english } from "@/context/text";

const backTechs = [
  nodejsIcon,
  expressjsIcon,
  mongodbIcon,
  postgresqlIcon,
  mysqlIcon,
];

const Back: React.FC<PageSectionProps> = ({ language, show }) => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-evenly items-center mt-8">
        {backTechs.map((el, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={el.src}
              className="hover:scale-110 transition-all duration-300 ease-in-out"
              alt="technology"
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
              ? english.technologies.back
              : spanish.technologies.back}
          </p>
        </div>
      )}
    </>
  );
};

export default Back;
